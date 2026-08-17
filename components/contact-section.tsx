"use client"

import { useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{
    type: "success" | "error"
    message: string
  } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isSubmitting) return

    setIsSubmitting(true)
    setStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "contact",
          name: formState.name.trim(),
          email: formState.email.trim(),
          subject: formState.subject.trim(),
          message: formState.message.trim(),
        }),
      })

      if (!response.ok) {
        throw new Error("Het bericht kon niet worden verzonden.")
      }

      setStatus({
        type: "success",
        message:
          "Bedankt. Je bericht werd succesvol verzonden. We nemen zo snel mogelijk contact met je op.",
      })

      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Contactformulier fout:", error)

      setStatus({
        type: "error",
        message:
          "Er ging iets mis bij het verzenden. Probeer het opnieuw of neem rechtstreeks contact op via info@daivexo.com.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Titel */}
        <div className="mb-20 text-center">
          <span className="text-sm tracking-[0.35em] text-primary uppercase md:text-base">
            Neem contact op
          </span>

          <h2 className="mt-4 mb-6 font-serif text-4xl text-white md:text-5xl lg:text-6xl">
            Contact
          </h2>

          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-primary" />
            <div className="h-2 w-2 rotate-45 bg-primary" />
            <div className="h-px w-16 bg-primary" />
          </div>
        </div>

        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Contactgegevens */}
          <div>
            <h3 className="mb-8 font-serif text-2xl text-white md:text-3xl">
              Samen maken we iets bijzonders
            </h3>

            <p className="mb-12 text-base leading-8 text-stone-300 md:text-lg">
              Heb je interesse in DAIVEXO Light Cubes, SCANMIJ QR-labels,
              DAIVEXO AEGIS of een ander maatwerkproject? Neem gerust contact
              op voor meer informatie, beschikbaarheid of een vrijblijvende
              aanvraag.
            </p>

            <div className="space-y-6">
              {/* E-mail */}
              <div className="flex items-start gap-4">
                <div className="border border-primary/40 p-3">
                  <Mail className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <p className="mb-1 text-sm tracking-widest text-muted-foreground uppercase">
                    E-mail
                  </p>

                  <a
                    href="mailto:info@daivexo.com"
                    className="text-white transition-colors hover:text-primary"
                  >
                    info@daivexo.com
                  </a>
                </div>
              </div>

              {/* Telefoon */}
              <div className="flex items-start gap-4">
                <div className="border border-primary/40 p-3">
                  <Phone className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <p className="mb-1 text-sm tracking-widest text-muted-foreground uppercase">
                    Telefoon
                  </p>

                  <a
                    href="tel:+32480673786"
                    className="text-white transition-colors hover:text-primary"
                  >
                    +32 480 67 37 86
                  </a>
                </div>
              </div>

              {/* Locatie */}
              <div className="flex items-start gap-4">
                <div className="border border-primary/40 p-3">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <p className="mb-1 text-sm tracking-widest text-muted-foreground uppercase">
                    Locatie
                  </p>

                  <p className="text-white">
                    Deinze
                    <br />
                    België
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contactformulier */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Naam */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-3 block text-sm tracking-widest text-muted-foreground uppercase"
                >
                  Naam
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      name: e.target.value,
                    })
                  }
                  className="w-full border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="Je naam"
                  required
                />
              </div>

              {/* E-mail */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-3 block text-sm tracking-widest text-muted-foreground uppercase"
                >
                  E-mail
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      email: e.target.value,
                    })
                  }
                  className="w-full border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="jouw@email.com"
                  required
                />
              </div>
            </div>

            {/* Onderwerp */}
            <div>
              <label
                htmlFor="subject"
                className="mb-3 block text-sm tracking-widest text-muted-foreground uppercase"
              >
                Onderwerp
              </label>

              <input
                type="text"
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    subject: e.target.value,
                  })
                }
                className="w-full border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder="Waarover gaat je bericht?"
                required
              />
            </div>

            {/* Bericht */}
            <div>
              <label
                htmlFor="message"
                className="mb-3 block text-sm tracking-widest text-muted-foreground uppercase"
              >
                Bericht
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                value={formState.message}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    message: e.target.value,
                  })
                }
                className="w-full resize-none border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder="Vertel ons waarmee we je kunnen helpen..."
                required
              />
            </div>

            {/* Statusmelding */}
            {status && (
              <div
                role="status"
                aria-live="polite"
                className={`border px-5 py-4 text-sm leading-6 ${
                  status.type === "success"
                    ? "border-primary/60 bg-primary/10 text-white"
                    : "border-red-500/50 bg-red-500/10 text-red-200"
                }`}
              >
                {status.message}
              </div>
            )}

            {/* Verstuurknop */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-3 bg-primary px-8 py-4 text-sm tracking-widest text-black uppercase transition-all duration-300 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-4 w-4" />

              {isSubmitting ? "Bezig met versturen..." : "Bericht versturen"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}