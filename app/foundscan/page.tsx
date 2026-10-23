
"use client"

import { useEffect, useState } from "react"
import { Phone, MessageSquare, Mail } from "lucide-react"

const WEBAPP_URL =
  "https://script.google.com/macros/s/AKfycbyHIBO4PYlP8AKDtMqEZkTJDDq2ZPwh_DLLHwOeLCvIbCdJBxXvETacYz0CixvQvsCE/exec"

type Contactgegevens = {
  gsm: string
  email: string
}

export default function FoundScanPage() {
  const [melding, setMelding] = useState("Gegevens laden...")
  const [contact, setContact] = useState<Contactgegevens | null>(null)
  const [code, setCode] = useState("")

  useEffect(() => {
    const controller = new AbortController()
    const params = new URLSearchParams(window.location.search)
    const stickerCode = (params.get("code") || "").trim()

    setCode(stickerCode)

    if (!stickerCode) {
      setMelding("Geen code gevonden.")
      return
    }

    async function laadGegevens() {
      try {
        const response = await fetch(
          `${WEBAPP_URL}?code=${encodeURIComponent(stickerCode)}`,
          {
            method: "GET",
            cache: "no-store",
            signal: controller.signal,
          }
        )

        if (!response.ok) {
          throw new Error("Verbinding mislukt")
        }

        const data = await response.json()

        if (!data || data.ok !== true) {
          setMelding(
            typeof data?.error === "string"
              ? `Fout: ${data.error}`
              : "Fout bij ophalen."
          )
          return
        }

        const record = data.record

        if (!record) {
          setMelding("Geen gegevens beschikbaar.")
          return
        }

        if (
          !String(record.status || "")
            .toUpperCase()
            .includes("ACTIEF")
        ) {
          setMelding("Deze code is niet actief.")
          return
        }

        const gsm = String(record.gsm || "").trim()
        const email = String(record.email || "").trim()

        if (!gsm) {
          setMelding("Geen nummer gekoppeld aan deze code.")
          return
        }

        setContact({ gsm, email })
        setMelding("")
      } catch (error) {
        if (controller.signal.aborted) return
        setMelding("Fout: kan de gegevens niet laden.")
      }
    }

    laadGegevens()

    return () => controller.abort()
  }, [])

  const onderwerp = encodeURIComponent(
    "SCANMIJ - Voorwerp gevonden"
  )

  const bericht = encodeURIComponent(
    `Beste,

Ik heb een voorwerp gevonden met een SCANMIJ-sticker.

SCANMIJ-code: ${code}

Gelieve mij te contacteren zodat we kunnen afspreken hoe u uw voorwerp kunt terugkrijgen.

Met vriendelijke groeten`
  )

  const knopStijl =
    "flex w-full items-center justify-center gap-3 rounded-2xl border border-yellow-200/30 bg-gradient-to-b from-[#e5c36c] to-[#b88e2e] px-6 py-4 text-lg font-bold text-black shadow-xl transition hover:brightness-110"

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-black px-5 py-12 text-white">
      <div className="w-full max-w-2xl text-center">
        <h1 className="mb-3 text-4xl font-bold sm:text-6xl">
          Voorwerp gevonden?
        </h1>

        <h2 className="mb-5 text-4xl font-bold sm:text-5xl">
          Found object?
        </h2>

        <p className="text-lg font-bold">
          Bel, sms of mail de eigenaar.
        </p>

        <p className="mt-1 text-lg font-bold">
          Call, text or email the owner.
        </p>

        <div className="mx-auto my-7 flex h-1 max-w-xs overflow-hidden rounded-full">
          <div className="w-1/3 bg-[#111111]" />
          <div className="w-1/3 bg-[#ffd400]" />
          <div className="w-1/3 bg-[#e10600]" />
        </div>

        {melding && (
          <p role="status" className="my-6 text-base">
            {melding}
          </p>
        )}

        {contact && (
          <div className="mx-auto mt-8 flex max-w-md flex-col gap-4">
            <a
              href={`tel:${contact.gsm}`}
              className={knopStijl}
            >
              <Phone size={24} />
              Bel de eigenaar
            </a>

            <a
              href={`sms:${contact.gsm}`}
              className={knopStijl}
            >
              <MessageSquare size={24} />
              Stuur een sms
            </a>

            {contact.email && (
              <a
                href={`mailto:${contact.email}?subject=${onderwerp}&body=${bericht}`}
                className={knopStijl}
              >
                <Mail size={24} />
                Stuur een e-mail
              </a>
            )}
          </div>
        )}

        <div className="mx-auto mt-10 max-w-lg space-y-4 text-sm font-semibold leading-relaxed">
          <p>
            Wij verwerken geen gegevens van de vinder.
            <br />
            We do not process any finder data.
          </p>

          <p>
            Veilig en rechtstreeks contact met de eigenaar.
            <br />
            No app. No tracking. Direct contact.
          </p>

          <p>
            Dank je om te helpen.
            <br />
            This helps the item return home.
          </p>

          <p>
            Dit systeem wordt gebruikt om verloren voorwerpen
            veilig terug te bezorgen.
            <br />
            This system helps return lost items safely.
          </p>
        </div>
      </div>
    </main>
  )
}
