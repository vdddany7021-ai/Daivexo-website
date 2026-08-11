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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const body = `
DAIVEXO CONTACTAANVRAAG

Naam: ${formState.name}
E-mail: ${formState.email}

Onderwerp:
${formState.subject}

Bericht:
${formState.message}

---
Verstuurd via www.daivexo.com
    `.trim()

    const mailtoLink =
      `mailto:info@daivexo.com` +
      `?subject=${encodeURIComponent(formState.subject)}` +
      `&body=${encodeURIComponent(body)}`

    window.location.href = mailtoLink
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Titel */}
        <div className="text-center mb-20">
          <span className="text-primary text-sm tracking-[0.3em] uppercase">
            Get in Touch
          </span>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 mb-6 text-white">
            Contact
          </h2>

          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-primary" />
            <div className="h-2 w-2 rotate-45 bg-primary" />
            <div className="h-px w-16 bg-primary" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contactgegevens */}
          <div>
            <h3 className="font-serif text-2xl md:text-3xl mb-8 text-white">
              Let&apos;s Create Something Extraordinary
            </h3>

            <p className="text-base md:text-lg text-stone-300 leading-8 mb-12">
              Heb je interesse in DAIVEXO Light Cubes, SCANMIJ QR-labels,
              DAIVEXO AEGIS of een ander maatwerkproject? Neem gerust contact
              op voor meer informatie, beschikbaarheid of een vrijblijvende
              aanvraag.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 border border-primary/40">
                  <Mail className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">
                    Email
                  </p>

                  <a
                    href="mailto:info@daivexo.com"
                    className="text-white hover:text-primary transition-colors"
                  >
                    info@daivexo.com
                  </a>
                </div>
              </div>

              {/* Telefoon */}
              <div className="flex items-start gap-4">
                <div className="p-3 border border-primary/40">
                  <Phone className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">
                    Phone
                  </p>

                  <a
                    href="tel:+32480673786"
                    className="text-white hover:text-primary transition-colors"
                  >
                    +32 480 67 37 86
                  </a>
                </div>
              </div>

              {/* Locatie */}
              <div className="flex items-start gap-4">
                <div className="p-3 border border-primary/40">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">
                    Location
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
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm uppercase tracking-widest text-muted-foreground mb-3"
                >
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      name: e.target.value,
                    })
                  }
                  className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm uppercase tracking-widest text-muted-foreground mb-3"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      email: e.target.value,
                    })
                  }
                  className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="onderwerp"
                className="block text-sm uppercase tracking-widest text-muted-foreground mb-3"
              >
                Subject
              </label>

              <input
                type="text"
                id="subject"
                value={formState.subject}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    subject: e.target.value,
                  })
                }
                className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder="Waarover gaat je bericht?"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm uppercase tracking-widest text-muted-foreground mb-3"
              >
                Message
              </label>

              <textarea
                id="message"
                rows={6}
                value={formState.message}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    message: e.target.value,
                  })
                }
                className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your project..."
                required
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black hover:brightness-110 transition-all duration-300 tracking-widest uppercase text-sm"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}