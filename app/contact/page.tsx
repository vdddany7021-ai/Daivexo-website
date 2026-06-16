"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Send } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

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
      alert("Er is een fout opgetreden. Probeer opnieuw.")
      console.error(error)
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      <img
        src="/gold-bg.png"
        alt=""
        className="fixed inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10">
        <Header />

        <section className="min-h-screen flex items-center justify-center px-6 py-32">
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center mb-20">
              <span className="text-primary text-sm tracking-[0.3em] uppercase">
                Contact
              </span>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 mb-6 text-white">
                Meer info of pakket aanvragen
              </h1>

              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-16 bg-primary" />
                <div className="h-2 w-2 rotate-45 bg-primary" />
                <div className="h-px w-16 bg-primary" />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="border border-primary/30 p-8 lg:p-12 bg-black/20">
                <h3 className="font-serif text-2xl mb-8 text-white">
                  Vraag vrijblijvend meer informatie aan
                </h3>

                <p className="text-white/85 leading-8 mb-12">
                  Wil je meer weten over SCANMIJ QR-labels of een pakket
                  aankopen? Laat je gegevens achter en we nemen zo snel mogelijk
                  contact met je op.
                </p>

                <div className="flex items-start gap-4">
                  <div className="p-3 border border-primary/30">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-sm text-white/70 uppercase tracking-widest mb-1">
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
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-6 border border-primary/30 p-8 lg:p-12 bg-black/20"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm uppercase tracking-widest text-white/70 mb-3"
                    >
                      Naam
                    </label>

                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full bg-black/30 border border-primary/20 px-4 py-3 text-white placeholder:text-white/50 focus:border-primary focus:outline-none transition-colors"
                      placeholder="Uw naam"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm uppercase tracking-widest text-white/70 mb-3"
                    >
                      E-mail
                    </label>

                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full bg-black/30 border border-primary/20 px-4 py-3 text-white placeholder:text-white/50 focus:border-primary focus:outline-none transition-colors"
                      placeholder="uw@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm uppercase tracking-widest text-white/70 mb-3"
                  >
                    Onderwerp
                  </label>

                  <input
                    type="text"
                    id="subject"
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    className="w-full bg-black/30 border border-primary/20 px-4 py-3 text-white placeholder:text-white/50 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Info of pakket aanvragen"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm uppercase tracking-widest text-white/70 mb-3"
                  >
                    Bericht
                  </label>

                  <textarea
                    id="message"
                    rows={6}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full bg-black/30 border border-primary/20 px-4 py-3 text-white placeholder:text-white/50 focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Ik wil graag meer info over..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 tracking-widest uppercase text-sm"
                >
                  <Send className="h-4 w-4" />
                  Verstuur aanvraag
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