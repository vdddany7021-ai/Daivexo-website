
import { NextResponse } from "next/server"

type Language = "NL" | "EN" | "FR" | "DE"
type RequestType = "reservation" | "quote" | "message"

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function getLanguage(value: unknown, message: string): Language {
  if (typeof value === "string") {
    const code = value.trim().toUpperCase().split(/[-_]/)[0]
    if (code === "NL" || code === "EN" || code === "FR" || code === "DE") {
      return code
    }
  }

  // Ondersteunt ook oudere formulieren zonder language-veld.
  const match = message.match(/Taal bezoeker:\s*(NL|EN|FR|DE)\b/i)
  if (match) return match[1].toUpperCase() as Language

  return "NL"
}

const translations = {
  NL: {
    lang: "nl",
    received: "Aanvraag ontvangen",
    greeting: "Beste",
    thanks: "Bedankt voor je interesse in DAIVEXO.",
    receivedRequest: "We hebben je aanvraag goed ontvangen.",
    overview: "Overzicht van je aanvraag",
    questions: "Heb je nog vragen?",
    email: "E-mail",
    phone: "Telefoon",
    regards: "Met vriendelijke groeten",
    automatic: "Dit is een automatisch verzonden bericht.",
    noReply: "Je hoeft hier niet op te antwoorden.",
    subjects: {
      reservation: "Ontvangst reservatieaanvraag – DAIVEXO",
      quote: "Ontvangst offerteaanvraag – DAIVEXO",
      message: "Ontvangst van je bericht – DAIVEXO",
    },
    notices: {
      reservation:
        "BELANGRIJK – JE RESERVATIE IS NOG NIET DEFINITIEF\n\nDit is uitsluitend een ontvangstbevestiging van je reservatieaanvraag.\n\nJe reservatie is pas definitief nadat DAIVEXO de beschikbaarheid heeft gecontroleerd en je reservatie uitdrukkelijk heeft bevestigd.\n\nWij nemen zo snel mogelijk contact met je op voor de verdere afspraken.",
      quote:
        "BELANGRIJK – JE OFFERTE IS NOG NIET DEFINITIEF\n\nDit is uitsluitend een ontvangstbevestiging van je offerteaanvraag.\n\nWij bekijken je aanvraag en nemen zo snel mogelijk contact met je op.",
      message:
        "Wij hebben je bericht goed ontvangen en nemen zo snel mogelijk contact met je op.",
    },
  },
  EN: {
    lang: "en",
    received: "Request received",
    greeting: "Dear",
    thanks: "Thank you for your interest in DAIVEXO.",
    receivedRequest: "We have successfully received your request.",
    overview: "Summary of your request",
    questions: "Do you have any questions?",
    email: "Email",
    phone: "Phone",
    regards: "Kind regards",
    automatic: "This is an automatically generated email.",
    noReply: "You do not need to reply to this message.",
    subjects: {
      reservation: "Reservation request received – DAIVEXO",
      quote: "Quotation request received – DAIVEXO",
      message: "Message received – DAIVEXO",
    },
    notices: {
      reservation:
        "IMPORTANT – YOUR RESERVATION IS NOT YET CONFIRMED\n\nThis email only acknowledges receipt of your reservation request.\n\nYour reservation will only become final after DAIVEXO has checked availability and explicitly confirmed your reservation.\n\nWe will contact you as soon as possible to discuss the next steps.",
      quote:
        "IMPORTANT – YOUR QUOTATION IS NOT YET FINAL\n\nThis email only acknowledges receipt of your quotation request.\n\nWe will review your request and contact you as soon as possible.",
      message:
        "We have received your message and will contact you as soon as possible.",
    },
  },
  FR: {
    lang: "fr",
    received: "Demande reçue",
    greeting: "Bonjour",
    thanks: "Merci de votre intérêt pour DAIVEXO.",
    receivedRequest: "Nous avons bien reçu votre demande.",
    overview: "Récapitulatif de votre demande",
    questions: "Vous avez des questions ?",
    email: "E-mail",
    phone: "Téléphone",
    regards: "Cordialement",
    automatic: "Ceci est un message envoyé automatiquement.",
    noReply: "Vous n'avez pas besoin de répondre à ce message.",
    subjects: {
      reservation: "Réception de votre demande de réservation – DAIVEXO",
      quote: "Réception de votre demande de devis – DAIVEXO",
      message: "Réception de votre message – DAIVEXO",
    },
    notices: {
      reservation:
        "IMPORTANT – VOTRE RÉSERVATION N'EST PAS ENCORE CONFIRMÉE\n\nCet e-mail confirme uniquement la réception de votre demande de réservation.\n\nVotre réservation ne sera définitive qu'après vérification des disponibilités et confirmation expresse de DAIVEXO.\n\nNous vous contacterons dès que possible pour convenir des prochaines étapes.",
      quote:
        "IMPORTANT – VOTRE DEVIS N'EST PAS ENCORE DÉFINITIF\n\nCet e-mail confirme uniquement la réception de votre demande de devis.\n\nNous examinerons votre demande et vous contacterons dès que possible.",
      message:
        "Nous avons bien reçu votre message et vous contacterons dès que possible.",
    },
  },
  DE: {
    lang: "de",
    received: "Anfrage erhalten",
    greeting: "Guten Tag",
    thanks: "Vielen Dank für Ihr Interesse an DAIVEXO.",
    receivedRequest: "Wir haben Ihre Anfrage erfolgreich erhalten.",
    overview: "Übersicht Ihrer Anfrage",
    questions: "Haben Sie noch Fragen?",
    email: "E-Mail",
    phone: "Telefon",
    regards: "Mit freundlichen Grüßen",
    automatic: "Dies ist eine automatisch versendete Nachricht.",
    noReply: "Sie müssen auf diese Nachricht nicht antworten.",
    subjects: {
      reservation: "Reservierungsanfrage erhalten – DAIVEXO",
      quote: "Angebotsanfrage erhalten – DAIVEXO",
      message: "Nachricht erhalten – DAIVEXO",
    },
    notices: {
      reservation:
        "WICHTIG – IHRE RESERVIERUNG IST NOCH NICHT BESTÄTIGT\n\nDiese E-Mail bestätigt ausschließlich den Eingang Ihrer Reservierungsanfrage.\n\nIhre Reservierung ist erst verbindlich, nachdem DAIVEXO die Verfügbarkeit geprüft und Ihre Reservierung ausdrücklich bestätigt hat.\n\nWir werden uns so schnell wie möglich mit Ihnen in Verbindung setzen, um die weiteren Einzelheiten zu besprechen.",
      quote:
        "WICHTIG – IHR ANGEBOT IST NOCH NICHT VERBINDLICH\n\nDiese E-Mail bestätigt ausschließlich den Eingang Ihrer Angebotsanfrage.\n\nWir werden Ihre Anfrage prüfen und uns so schnell wie möglich bei Ihnen melden.",
      message:
        "Wir haben Ihre Nachricht erhalten und werden uns so schnell wie möglich bei Ihnen melden.",
    },
  },
} as const

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { name, email, subject, message, source, language } = data

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

    const sourceText = typeof source === "string" ? source : ""
    const visitorLanguage = getLanguage(language, message)
    const t = translations[visitorLanguage]

    const requestType: RequestType = sourceText.includes("Reservatie")
      ? "reservation"
      : sourceText.includes("Offerte")
        ? "quote"
        : "message"

    // 1. E-mail naar DAIVEXO: bestaande werking behouden.
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers,
      body: JSON.stringify({
        from: "DAIVEXO <info@daivexo.com>",
        to: ["info@daivexo.com"],
        reply_to: email,
        subject,
        text: `
${sourceText ? `${sourceText}\n\n` : ""}${message}

CONTACTPERSOON
Naam: ${name}
E-mail: ${email}
        `.trim(),
      }),
    })

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

    // 2. Automatische ontvangstbevestiging in de bezoekerstaal.
    const confirmationSubject = t.subjects[requestType]
    const noticeText = t.notices[requestType]

    const confirmationText = `
${t.greeting} ${name.trim()},

${t.thanks}
${t.receivedRequest}

----------------------------------------
${noticeText}
----------------------------------------

${t.overview.toUpperCase()}

${message.trim()}

----------------------------------------

${t.questions}

${t.email}: info@daivexo.com
${t.phone}: +32 480 67 37 86

${t.regards},

DAIVEXO
www.daivexo.com

----------------------------------------
${t.automatic}
${t.noReply}
    `.trim()

    const safeName = escapeHtml(name.trim())
    const safeMessage = escapeHtml(message.trim())
      .replace(/\r\n|\r|\n/g, "<br>")
    const safeNotice = escapeHtml(noticeText)
      .replace(/\r\n|\r|\n/g, "<br>")

    const important = requestType !== "message"
    const noticeBackground = important ? "#fff1f2" : "#f8fafc"
    const noticeBorder = important ? "#dc2626" : "#d4af55"
    const noticeColor = important ? "#991b1b" : "#333333"

    const confirmationHtml = `
<!DOCTYPE html>
<html lang="${t.lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${t.received} – DAIVEXO</title>
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
                ${t.received}
              </h1>

              <p style="font-size:16px;line-height:1.6;">
                ${t.greeting} ${safeName},
              </p>

              <p style="font-size:16px;line-height:1.6;">
                ${t.thanks}<br>
                ${t.receivedRequest}
              </p>

              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:24px 0;">
                <tr>
                  <td style="padding:20px;background-color:${noticeBackground};border:2px solid ${noticeBorder};border-radius:6px;color:${noticeColor};font-size:16px;line-height:1.7;font-weight:600;">
                    ${safeNotice}
                  </td>
                </tr>
              </table>

              <h2 style="margin:30px 0 14px;font-size:19px;color:#222222;">
                ${t.overview}
              </h2>

              <div style="padding:18px;background-color:#f7f7f7;border:1px solid #dddddd;font-size:15px;line-height:1.7;overflow-wrap:anywhere;">
                ${safeMessage}
              </div>

              <p style="margin-top:28px;font-size:15px;line-height:1.7;">
                ${t.questions}<br>
                ${t.email}:
                <a href="mailto:info@daivexo.com" style="color:#9a741c;">
                  info@daivexo.com
                </a><br>
                ${t.phone}:
                <a href="tel:+32480673786" style="color:#9a741c;">
                  +32 480 67 37 86
                </a>
              </p>

              <p style="font-size:15px;line-height:1.7;">
                ${t.regards},<br>
                <strong>DAIVEXO</strong><br>
                <a href="https://www.daivexo.com" style="color:#9a741c;">
                  www.daivexo.com
                </a>
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:18px 24px;background-color:#f0f0f0;text-align:center;font-size:12px;line-height:1.6;color:#666666;">
              ${t.automatic}<br>
              ${t.noReply}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim()

    // Een mislukte klantbevestiging maakt de aanvraag
    // aan DAIVEXO niet ongedaan.
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
      console.error("Fout bij klantbevestiging:", confirmationError)
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
