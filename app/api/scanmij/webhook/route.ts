import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.MOLLIE_API_KEY;
    const databaseUrl =
      process.env.SCANMIJ_DATABASE_DATABASE_URL;

    if (!apiKey || !databaseUrl) {
      console.error("SCANMIJ: configuratie ontbreekt");
      return new NextResponse("Configuration error", {
        status: 503,
      });
    }

    const formData = await request.formData();
    const paymentId = formData.get("id");

    if (
      typeof paymentId !== "string" ||
      !/^tr_[a-zA-Z0-9]+$/.test(paymentId)
    ) {
      return new NextResponse("Invalid payment ID", {
        status: 400,
      });
    }

    // Vraag de echte betaalstatus rechtstreeks op bij Mollie.
    const mollieResponse = await fetch(
      `https://api.mollie.com/v2/payments/${encodeURIComponent(paymentId)}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
        cache: "no-store",
        signal: AbortSignal.timeout(15000),
      }
    );

    if (!mollieResponse.ok) {
      console.error(
        "SCANMIJ: Mollie controle mislukt",
        mollieResponse.status
      );

      return new NextResponse("Payment verification failed", {
        status: 502,
      });
    }

    const payment = await mollieResponse.json();

    if (payment.id !== paymentId) {
      return new NextResponse("Payment ID mismatch", {
        status: 400,
      });
    }

    const metadata = payment.metadata;

    if (
      !metadata ||
      typeof metadata.order_id !== "string" ||
      !metadata.order_id.startsWith("SCANMIJ-") ||
      !metadata.klant ||
      !Array.isArray(metadata.artikelen)
    ) {
      return new NextResponse("Invalid payment metadata", {
        status: 400,
      });
    }

    const klant = metadata.klant;
    const sql = neon(databaseUrl);

    // Bewaar ook niet-betaalde statussen correct.
    // Alleen Mollie-status 'paid' betekent betaald.
    const allowedStatuses = [
      "open",
      "pending",
      "authorized",
      "paid",
      "failed",
      "canceled",
      "expired",
    ];

    if (!allowedStatuses.includes(payment.status)) {
      return new NextResponse("Unsupported payment status", {
        status: 400,
      });
    }

    const totalAmount = Number(payment.amount?.value);

    if (
      payment.amount?.currency !== "EUR" ||
      !Number.isFinite(totalAmount) ||
      totalAmount <= 0
    ) {
      return new NextResponse("Invalid payment amount", {
        status: 400,
      });
    }

    await sql`
      INSERT INTO scanmij_orders (
        order_id,
        mollie_payment_id,
        payment_status,
        customer_first_name,
        customer_last_name,
        customer_email,
        customer_phone,
        customer_address,
        customer_note,
        items,
        total_amount,
        currency,
        updated_at
      )
      VALUES (
        ${metadata.order_id},
        ${payment.id},
        ${payment.status},
        ${String(klant.voornaam ?? "")},
        ${String(klant.naam ?? "")},
        ${String(klant.email ?? "")},
        ${String(klant.gsm ?? "")},
        ${String(klant.adres ?? "")},
        ${String(klant.opmerking ?? "")},
        ${JSON.stringify(metadata.artikelen)}::jsonb,
        ${totalAmount},
        ${"EUR"},
        NOW()
      )
      ON CONFLICT (mollie_payment_id)
      DO UPDATE SET
        payment_status = EXCLUDED.payment_status,
        updated_at = NOW()
    `;

    return new NextResponse("OK", { status: 200 });
  } catch (error) {
    console.error("SCANMIJ webhook error:", error);

    return new NextResponse("Internal server error", {
      status: 500,
    });
  }
}
