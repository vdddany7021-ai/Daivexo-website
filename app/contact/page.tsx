"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formState)
    setFormState({ name: "", email: "", subject: "", message: "" })
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
                Get in Touch
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 mb-6 text-white">
                Contact
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
                  Let&apos;s Create Something Extraordinary
                </h3>
                <p className="text-white/80 leading-relaxed mb-12">
                  Whether you&apos;re interested in our premium QR labels, looking to
                  authenticate your collection, or wish to inquire about our
                  exclusive artworks, we&apos;d love to hear from you.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 border border-primary/30">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70 uppercase tracking-widest mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:hello@daivexo.com"
                        className="text-white hover:text-primary transition-colors"
                      >
                        hello@daivexo.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 border border-primary/30">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70 uppercase tracking-widest mb-1">
                        Phone
                      </p>
                      <a
                        href="tel:+1234567890"
                        className="text-white hover:text-primary transition-colors"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 border border-primary/30">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70 uppercase tracking-widest mb-1">
                        Location
                      </p>
                      <p className="text-white">
                        New York, NY
                        <br />
                        United States
                      </p>
                    </div>
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
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full bg-black/30 border border-primary/20 px-4 py-3 text-white placeholder:text-white/50 focus:border-primary focus:outline-none transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm uppercase tracking-widest text-white/70 mb-3"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full bg-black/30 border border-primary/20 px-4 py-3 text-white placeholder:text-white/50 focus:border-primary focus:outline-none transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm uppercase tracking-widest text-white/70 mb-3"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    className="w-full bg-black/30 border border-primary/20 px-4 py-3 text-white placeholder:text-white/50 focus:border-primary focus:outline-none transition-colors"
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm uppercase tracking-widest text-white/70 mb-3"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full bg-black/30 border border-primary/20 px-4 py-3 text-white placeholder:text-white/50 focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 tracking-widest uppercase text-sm"
                >
                  <Send className="h-4 w-4" />
                  Send Message
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
