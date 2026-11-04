
import { NextResponse } from "next/server"

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

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
${typeof source === "string" && source ? `${source}\n\n` : ""}${message}

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

    const isReservation = sourceText.includes("Reservatie")
    const isQuote = sourceText.includes("Offerte")

    const confirmationSubject = isReservation
      ? "Ontvangst reservatieaanvraag – DAIVEXO"
      : isQuote
        ? "Ontvangst offerteaanvraag – DAIVEXO"
        : "Ontvangst van je bericht – DAIVEXO"

    const requestType = isReservation
      ? "reservatieaanvraag"
      : isQuote
        ? "offerteaanvraag"
        : "bericht"

    const noticeText = isReservation
      ? `BELANGRIJK – JE RESERVATIE IS NOG NIET DEFINITIEF

Dit is uitsluitend een ontvangstbevestiging van je reservatieaanvraag.

Je reservatie is pas definitief nadat DAIVEXO de beschikbaarheid heeft gecontroleerd en je reservatie uitdrukkelijk heeft bevestigd.

Wij nemen zo snel mogelijk contact met je op voor de verdere afspraken.`
      : isQuote
        ? `BELANGRIJK – JE OFFERTE IS NOG NIET DEFINITIEF

Dit is uitsluitend een ontvangstbevestiging van je offerteaanvraag.

Wij bekijken je aanvraag en nemen zo snel mogelijk contact met je op.`
        : `Wij hebben je bericht goed ontvangen en nemen zo snel mogelijk contact met je op.`

    // Tekstversie voor e-mailprogramma's zonder HTML
    const confirmationText = `
Beste ${name.trim()},

Bedankt voor je interesse in DAIVEXO.
We hebben je ${requestType} goed ontvangen.

----------------------------------------
${noticeText}
----------------------------------------

OVERZICHT VAN JE AANVRAAG

${message.trim()}

----------------------------------------

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

    // Veilige HTML-weergave van klantgegevens
    const safeName = escapeHtml(name.trim())
    const safeMessage = escapeHtml(message.trim())
      .replace(/\r\n|\r|\n/g, "<br>")

    const safeNotice = escapeHtml(noticeText)
      .replace(/\r\n|\r|\n/g, "<br>")

    const noticeBackground =
      isReservation || isQuote ? "#fff1f2" : "#f8fafc"

    const noticeBorder =
      isReservation || isQuote ? "#dc2626" : "#d4af55"

    const noticeColor =
      isReservation || isQuote ? "#991b1b" : "#333333"

    const confirmationHtml = `
<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Ontvangstbevestiging DAIVEXO</title>
</head>
<body style="margin:0;padding:0;background-color:#f5f5f5;font-family:Arial,Helvetica,sans-serif;color:#222222;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#f5f5f5;">
    <tr>
      <td align="center" style="padding:20px 12px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:640px;background-color:#ffffff;">
          <tr>
            <td style="padding:26px 24px;background-color:#080808;text-align:center;">
              <div style="font-family:Georgia,serif;font-size:30px;letter-spacing:4px;color:#d4af55;">
                DAIVEXO
              </div>
              <div style="padding-top:8px;font-size:12px;letter-spacing:2px;color:#ffffff;">
                LIGHT CUBES
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 24px;">
              <h1 style="margin:0 0 18px;font-size:24px;line-height:1.3;">
                Aanvraag ontvangen
              </h1>

              <p style="font-size:16px;line-height:1.6;">
                Beste ${safeName},
              </p>

              <p style="font-size:16px;line-height:1.6;">
                Bedankt voor je interesse in DAIVEXO.
                We hebben je ${requestType} goed ontvangen.
              </p>

              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:24px 0;">
                <tr>
                  <td style="padding:20px;background-color:${noticeBackground};border:2px solid ${noticeBorder};border-radius:6px;color:${noticeColor};font-size:16px;line-height:1.7;font-weight:600;">
                    ${safeNotice}
                  </td>
                </tr>
              </table>

              <h2 style="margin:30px 0 14px;font-size:19px;color:#222222;">
                Overzicht van je aanvraag
              </h2>

              <div style="padding:18px;background-color:#f7f7f7;border:1px solid #dddddd;font-size:15px;line-height:1.7;overflow-wrap:anywhere;">
                ${safeMessage}
              </div>

              <p style="margin-top:28px;font-size:15px;line-height:1.7;">
                Heb je nog vragen?<br>
                E-mail:
                <a href="mailto:info@daivexo.com" style="color:#9a741c;">
                  info@daivexo.com
                </a><br>
                Telefoon:
                <a href="tel:+32480673786" style="color:#9a741c;">
                  0480 67 37 86
                </a>
              </p>

              <p style="font-size:15px;line-height:1.7;">
                Met vriendelijke groeten,<br>
                <strong>DAIVEXO</strong><br>
                <a href="https://www.daivexo.com" style="color:#9a741c;">
                  www.daivexo.com
                </a>
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:18px 24px;background-color:#f0f0f0;text-align:center;font-size:12px;line-height:1.6;color:#666666;">
              Dit is een automatisch verzonden bericht.<br>
              Je hoeft hier niet op te antwoorden.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim()

    // Klantbevestiging mag een succesvolle aanvraag
    // niet ongedaan maken.
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
            html: confirmationHtml,
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
