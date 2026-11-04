
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const { name, email, subject, message, source } = data

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !subject.trim() ||
      !message.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Niet alle verplichte velden zijn ingevuld.",
        },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      console.error("RESEND_API_KEY ontbreekt.")

      return NextResponse.json(
        {
          success: false,
          error: "E-mailverzending is niet beschikbaar.",
        },
        { status: 500 }
      )
    }

    const headers = {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "User-Agent": "DAIVEXO-Website/1.0",
    }

    // 1. Bestaande e-mail naar DAIVEXO
    const resendResponse = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          from: "DAIVEXO <info@daivexo.com>",
          to: ["info@daivexo.com"],
          reply_to: email,
          subject,
          text: `
${source ? `${source}\n\n` : ""}${message}

CONTACTPERSOON
Naam: ${name}
E-mail: ${email}
          `.trim(),
        }),
      }
    )

    const result = await resendResponse.json()

    if (!resendResponse.ok) {
      console.error("Resend API fout:", {
        status: resendResponse.status,
        result,
      })

      return NextResponse.json(
        {
          success: false,
          error:
            result?.message ||
            result?.error ||
            `Resend fout (${resendResponse.status})`,
        },
        { status: resendResponse.status }
      )
    }

    // 2. Automatische ontvangstbevestiging
    const sourceText =
      typeof source === "string" ? source : ""

    const isReservation =
      sourceText.includes("Reservatie")

    const isQuote =
      sourceText.includes("Offerte")

    const confirmationSubject = isReservation
      ? "Ontvangst reservatieaanvraag – DAIVEXO"
      : isQuote
        ? "Ontvangst offerteaanvraag – DAIVEXO"
        : "Ontvangst van je bericht – DAIVEXO"

    const confirmationText = `
Beste ${name.trim()},

Bedankt voor je bericht en je interesse in DAIVEXO.

We hebben je ${
  isReservation
    ? "reservatieaanvraag"
    : isQuote
      ? "offerteaanvraag"
      : "bericht"
} goed ontvangen.

Hieronder vind je een overzicht van de gegevens
die je hebt doorgestuurd.

----------------------------------------
OVERZICHT VAN JE AANVRAAG
----------------------------------------

${message.trim()}

----------------------------------------

${
  isReservation
    ? `BELANGRIJK

Dit is uitsluitend een ontvangstbevestiging.

Je reservatie is nog niet definitief.
We controleren eerst de beschikbaarheid
en nemen contact met je op om de
verdere afspraken te bevestigen.`
    : isQuote
      ? `We bekijken je aanvraag en nemen
zo snel mogelijk contact met je op.

Deze ontvangstbevestiging is nog
geen definitieve offerte.`
      : `We bekijken je bericht en nemen
zo snel mogelijk contact met je op.`
}

Heb je nog vragen?

E-mail: info@daivexo.com
Telefoon: 0480 67 37 86

Met vriendelijke groeten,

DAIVEXO
www.daivexo.com

----------------------------------------
Dit is een automatisch verzonden bericht.
Je hoeft hier niet op te antwoorden.
    `.trim()

    // De klantbevestiging mag een succesvolle
    // aanvraag niet ongedaan maken.
    try {
      const confirmationResponse = await fetch(
        "https://api.resend.com/emails",
        {
          method: "POST",
          headers,
          body: JSON.stringify({
            from: "DAIVEXO <info@daivexo.com>",
            to: [email.trim()],
            reply_to: "info@daivexo.com",
            subject: confirmationSubject,
            text: confirmationText,
          }),
        }
      )

      if (!confirmationResponse.ok) {
        console.error(
          "Klantbevestiging mislukt:",
          confirmationResponse.status,
          await confirmationResponse.text()
        )
      }
    } catch (confirmationError) {
      console.error(
        "Fout bij klantbevestiging:",
        confirmationError
      )
    }

    return NextResponse.json({
      success: true,
      id: result.id,
    })
  } catch (error) {
    console.error("Contact API fout:", error)

    return NextResponse.json(
      {
        success: false,
        error: "Er is een onverwachte fout opgetreden.",
      },
      { status: 500 }
    )
  }
}
