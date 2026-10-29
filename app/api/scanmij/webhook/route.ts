
import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export const runtime = "nodejs";

const NOTIFICATION_EMAIL = "info@scanmij.com";
const SENDER_EMAIL = "SCANMIJ <bestellingen@scanmij.com>";

function reply(message: string, status: number) {
  return new NextResponse(message, { status });
}

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.MOLLIE_API_KEY;
    const databaseUrl =
      process.env.SCANMIJ_DATABASE_DATABASE_URL;

    if (!apiKey || !databaseUrl) {
      console.error("SCANMIJ: configuratie ontbreekt");
      return reply("Configuration error", 503);
    }

    // Ontvang het betalingsnummer van Mollie.
    const formData = await request.formData();
    const paymentId = formData.get("id");

    if (
      typeof paymentId !== "string" ||
      !/^tr_[a-zA-Z0-9]+$/.test(paymentId)
    ) {
      return reply("Invalid payment ID", 400);
    }

    // Controleer de betaling rechtstreeks bij Mollie.
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
      return reply("Payment verification failed", 502);
    }

    const payment = await mollieResponse.json();

    if (payment.id !== paymentId) {
      return reply("Payment ID mismatch", 400);
    }

    const metadata = payment.metadata;

    if (
      !metadata ||
      typeof metadata.order_id !== "string" ||
      !metadata.order_id.startsWith("SCANMIJ-") ||
      !metadata.klant ||
      typeof metadata.klant !== "object" ||
      Array.isArray(metadata.klant) ||
      !Array.isArray(metadata.artikelen)
    ) {
      return reply("Invalid payment metadata", 400);
    }

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
      return reply("Unsupported payment status", 400);
    }

    const totalAmount = Number(payment.amount?.value);

    if (
      payment.amount?.currency !== "EUR" ||
      !Number.isFinite(totalAmount) ||
      totalAmount <= 0
    ) {
      return reply("Invalid payment amount", 400);
    }

    const klant = metadata.klant;
    const sql = neon(databaseUrl);

    // Sla de bestelling op of werk de betaalstatus bij.
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

    // Een niet-betaalde bestelling krijgt geen bestelmelding.
    if (payment.status !== "paid") {
      return reply("OK", 200);
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error("SCANMIJ: RESEND_API_KEY ontbreekt");
      return reply("Email configuration error", 503);
    }

    // Reserveer het verzenden op een veilige, atomische manier.
    // Slechts één webhook kan tegelijk deze bestelling claimen.
    const claimed = await sql`
      UPDATE scanmij_orders
      SET
        notification_processing_at = NOW(),
        updated_at = NOW()
      WHERE mollie_payment_id = ${payment.id}
        AND payment_status = 'paid'
        AND notification_sent_at IS NULL
        AND (
          notification_processing_at IS NULL
          OR notification_processing_at <
            NOW() - INTERVAL '15 minutes'
        )
      RETURNING
        notification_processing_at
    `;

    if (claimed.length === 0) {
      // De melding is al verwerkt of wordt momenteel verwerkt.
      return reply("OK", 200);
    }

    const processingAt =
      claimed[0].notification_processing_at;

    const itemsText = metadata.artikelen
      .map((item: unknown) => {
        if (!item || typeof item !== "object") {
          return "";
        }

        const artikel = item as Record<string, unknown>;

        return [
          `${String(artikel.aantal ?? "")} x ${String(artikel.naam ?? "")}`,
          `Prijs: € ${String(artikel.prijs ?? "")}`,
          `Subtotaal: € ${String(artikel.subtotaal ?? "")}`,
        ].join("\n");
      })
      .filter(Boolean)
      .join("\n\n");

    const message = [
      "NIEUWE BETAALDE BESTELLING - SCANMIJ",
      "",
      `Bestelnummer: ${metadata.order_id}`,
      `Mollie betaling: ${payment.id}`,
      "Betaalstatus: BETAALD",
      "",
      "KLANTGEGEVENS",
      `Voornaam: ${String(klant.voornaam ?? "")}`,
      `Naam: ${String(klant.naam ?? "")}`,
      `E-mail: ${String(klant.email ?? "")}`,
      `GSM: ${String(klant.gsm ?? "")}`,
      `Adres: ${String(klant.adres ?? "")}`,
      `Opmerking: ${String(klant.opmerking ?? "")}`,
      "",
      "BESTELDE ARTIKELEN",
      itemsText,
      "",
      `TOTAAL BETAALD: € ${totalAmount.toFixed(2)}`,
      "",
      "Deze bestelling is bevestigd door Mollie.",
      "Controleer de bestelling voor verdere verwerking.",
    ].join("\n");

    try {
      const resendResponse = await fetch(
        "https://api.resend.com/emails",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
            "Idempotency-Key":
              `scanmij-order-${payment.id}`,
          },
          body: JSON.stringify({
            from: SENDER_EMAIL,
            to: [NOTIFICATION_EMAIL],
            subject:
              `Nieuwe betaalde bestelling SCANMIJ - ${metadata.order_id}`,
            text: message,
          }),
          cache: "no-store",
          signal: AbortSignal.timeout(15000),
        }
      );

      if (!resendResponse.ok) {
        console.error(
          "SCANMIJ: Resend verzending mislukt",
          resendResponse.status
        );

        throw new Error("Resend rejected email");
      }

      // Registreer dat Resend de e-mail heeft aanvaard.
      await sql`
        UPDATE scanmij_orders
        SET
          notification_sent_at = NOW(),
          notification_processing_at = NULL,
          updated_at = NOW()
        WHERE mollie_payment_id = ${payment.id}
          AND notification_sent_at IS NULL
          AND notification_processing_at =
            ${processingAt}
      `;

      return reply("OK", 200);
    } catch (emailError) {
      console.error(
        "SCANMIJ: bestelmelding niet afgerond",
        emailError
      );

      // Geef de reservering vrij zodat een nieuwe
      // webhookpoging de melding opnieuw kan verwerken.
      await sql`
        UPDATE scanmij_orders
        SET
          notification_processing_at = NULL,
          updated_at = NOW()
        WHERE mollie_payment_id = ${payment.id}
          AND notification_sent_at IS NULL
          AND notification_processing_at =
            ${processingAt}
      `;

      return reply("Email delivery error", 500);
    }
  } catch (error) {
    console.error("SCANMIJ webhook error:", error);
    return reply("Internal server error", 500);
  }
}
