
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const PRICES: Record<string, number> = {
  Startpack: 1695,
  "Family Pack": 2795,
  "Pro Pack": 4495,
  "100 QR-stickers": 22000,
  "250 QR-stickers": 48750,
  "500 QR-stickers": 85000,
};

type OrderItem = {
  naam: string;
  aantal: number;
};

type Customer = {
  voornaam: string;
  naam: string;
  email: string;
  gsm: string;
  adres: string;
  opmerking: string;
};

function error(message: string, status = 400) {
  return NextResponse.json(
    { ok: false, message },
    { status }
  );
}

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.MOLLIE_API_KEY;

    if (!apiKey) {
      return error("De betaalconfiguratie ontbreekt.", 503);
    }

    const body = await request.json();

    const artikelen = body?.artikelen as OrderItem[];
    const klant = body?.klant as Customer;

    if (
      !Array.isArray(artikelen) ||
      artikelen.length === 0 ||
      artikelen.length > 30
    ) {
      return error("Geen geldige bestelling ontvangen.");
    }

    if (
      !klant ||
      typeof klant !== "object" ||
      typeof klant.voornaam !== "string" ||
      typeof klant.naam !== "string" ||
      typeof klant.email !== "string" ||
      typeof klant.gsm !== "string" ||
      typeof klant.adres !== "string" ||
      !klant.voornaam.trim() ||
      !klant.naam.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(klant.email) ||
      !klant.gsm.trim() ||
      !klant.adres.trim()
    ) {
      return error("Vul alle verplichte klantgegevens correct in.");
    }

    let totalCents = 0;

    const cleanItems = [];

    for (const item of artikelen) {
      if (
        !item ||
        typeof item.naam !== "string" ||
        !Object.prototype.hasOwnProperty.call(
          PRICES,
          item.naam
        ) ||
        !Number.isInteger(item.aantal) ||
        item.aantal < 1 ||
        item.aantal > 100
      ) {
        return error("Ongeldig pakket of aantal.");
      }

      const unitCents = PRICES[item.naam];
      const subtotalCents = unitCents * item.aantal;

      totalCents += subtotalCents;

      cleanItems.push({
        naam: item.naam,
        aantal: item.aantal,
        prijs: (unitCents / 100).toFixed(2),
        subtotaal: (subtotalCents / 100).toFixed(2),
      });
    }

    if (totalCents <= 0 || totalCents > 10000000) {
      return error("Het totaalbedrag is ongeldig.");
    }

    const orderId =
      "SCANMIJ-" +
      new Date().toISOString().replace(/\D/g, "").slice(0, 14) +
      "-" +
      crypto.randomUUID().slice(0, 8);

    const description =
      "SCANMIJ - " +
      cleanItems
        .map((item) => `${item.aantal}x ${item.naam}`)
        .join(", ");

    const baseUrl = "https://www.scanmij.com";

    const payload = {
      amount: {
        currency: "EUR",
        value: (totalCents / 100).toFixed(2),
      },
      description: description.slice(0, 255),
      redirectUrl: `${baseUrl}/bedankt`,
      webhookUrl: `${baseUrl}/api/scanmij/webhook`,
      metadata: {
        order_id: orderId,
        klant: {
          voornaam: klant.voornaam.trim().slice(0, 100),
          naam: klant.naam.trim().slice(0, 100),
          email: klant.email.trim().slice(0, 254),
          gsm: klant.gsm.trim().slice(0, 50),
          adres: klant.adres.trim().slice(0, 500),
          opmerking:
            typeof klant.opmerking === "string"
              ? klant.opmerking.trim().slice(0, 1000)
              : "",
        },
        artikelen: cleanItems,
        totaal: (totalCents / 100).toFixed(2),
      },
    };

    const response = await fetch(
      "https://api.mollie.com/v2/payments",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        cache: "no-store",
        signal: AbortSignal.timeout(15000),
      }
    );

    const result = await response.json();

    if (
      !response.ok ||
      typeof result?._links?.checkout?.href !== "string"
    ) {
      console.error(
        "SCANMIJ Mollie checkout:",
        response.status,
        result?.status
      );

      return error(
        "De betaling kon niet worden aangemaakt.",
        502
      );
    }

    return NextResponse.json({
      ok: true,
      checkout_url: result._links.checkout.href,
      order_id: orderId,
    });
  } catch (err) {
    console.error("SCANMIJ checkout error:", err);

    return error(
      "Er ging iets mis bij het voorbereiden van de betaling.",
      500
    );
  }
}
