"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Send } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      if (!response.ok) {
        throw new Error("Verzenden mislukt")
      }

      alert(
        "Uw aanvraag werd verzonden. Wij nemen zo snel mogelijk contact met u op."
      )

      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      alert(
        "Er is een fout opgetreden bij het verzenden. Probeer het opnieuw of mail naar info@daivexo.com."
      )
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      <img
        src="/gold-bg.png"
        alt=""
        aria-hidden="true"
        className="fixed inset-0 h-full w-full object-cover"
      />

      <div className="relative z-10">
        <Header />

        <section className="min-h-screen px-6 py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-primary">
                Contact & offerte
              </p>

              <h1 className="mt-4 mb-6 font-serif text-4xl text-white md:text-5xl lg:text-6xl">
                Contacteer DAIVEXO
              </h1>

              <p className="mx-auto max-w-3xl text-lg leading-8 text-white/85">
                Vraag vrijblijvend informatie of een offerte aan voor onze LED
                statafels, lichtgevende staantafels, Light Cubes, eventmeubilair
                of SCANMIJ QR-labels.
              </p>

              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="h-px w-16 bg-primary" />
                <div className="h-2 w-2 rotate-45 bg-primary" />
                <div className="h-px w-16 bg-primary" />
              </div>
            </div>

            <div className="grid items-start gap-16 lg:grid-cols-2">
              {/* Contactinformatie */}
              <div className="border border-primary/30 bg-black/20 p-8 lg:p-12">
                <h2 className="mb-8 font-serif text-2xl text-white">
                  Vrijblijvend informatie of offerte aanvragen
                </h2>

                <p className="mb-6 leading-8 text-white/85">
                  Wil je een statafel, staantafel of meerdere LED statafels
                  huren voor een feest, receptie, bedrijfsevent of ander
                  evenement? Neem contact op met DAIVEXO voor meer informatie
                  over de mogelijkheden en beschikbaarheid.
                </p>

                <p className="mb-12 leading-8 text-white/85">
                  Ook voor vragen over Light Cubes, verlichte bars, DJ Booths,
                  Light Walls en SCANMIJ QR-labels kun je via het formulier
                  rechtstreeks contact met ons opnemen.
                </p>

                <div className="space-y-6">
                  {/* Adres */}
                  <div className="flex items-start gap-4">
                    <div>
                      <p className="mb-1 text-sm uppercase tracking-widest text-white/70">
                        Bedrijfsadres
                      </p>

                      <address className="not-italic leading-7 text-white">
                        DAIVEXO
                        <br />
                        Leernsesteenweg 124A
                        <br />
                        9800 Deinze, België
                      </address>
                    </div>
                  </div>

                  {/* Telefoon */}
                  <div className="flex items-start gap-4">
                    <div>
                      <p className="mb-1 text-sm uppercase tracking-widest text-white/70">
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

                  {/* E-mail */}
                  <div className="flex items-start gap-4">
                    <div>
                      <p className="mb-1 text-sm uppercase tracking-widest text-white/70">
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
                </div>
              </div>

              {/* Contactformulier */}
              <form
                onSubmit={handleSubmit}
                className="space-y-6 border border-primary/30 bg-black/20 p-8 lg:p-12"
              >
                <h2 className="font-serif text-2xl text-white">
                  Stuur je aanvraag
                </h2>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm uppercase tracking-widest text-white/70"
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
                      className="w-full border border-primary/20 bg-black/30 px-4 py-3 text-white placeholder:text-white/50 focus:border-primary focus:outline-none"
                      placeholder="Uw naam"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm uppercase tracking-widest text-white/70"
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
                      className="w-full border border-primary/20 bg-black/30 px-4 py-3 text-white placeholder:text-white/50 focus:border-primary focus:outline-none"
                      placeholder="uw@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-3 block text-sm uppercase tracking-widest text-white/70"
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
                    className="w-full border border-primary/20 bg-black/30 px-4 py-3 text-white placeholder:text-white/50 focus:border-primary focus:outline-none"
                    placeholder="Bijvoorbeeld: offerte LED statafels"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-3 block text-sm uppercase tracking-widest text-white/70"
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
                    className="w-full resize-none border border-primary/20 bg-black/30 px-4 py-3 text-white placeholder:text-white/50 focus:border-primary focus:outline-none"
                    placeholder="Vertel ons waarvoor je informatie of een offerte wenst..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-3 bg-primary px-8 py-4 text-sm uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Send className="h-4 w-4" />
                  {isSubmitting ? "Bezig met verzenden..." : "Verstuur aanvraag"}
                </button>
              </form>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
