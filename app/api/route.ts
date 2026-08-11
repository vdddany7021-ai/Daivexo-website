import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const {
      name,
      email,
      subject,
      message,
      source,
    } = data

    if (!name || !email || !subject || !message) {
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
          error: "RESEND_API_KEY ontbreekt.",
        },
        { status: 500 }
      )
    }

    const resendResponse = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "User-Agent": "DAIVEXO-Website/1.0",
        },
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