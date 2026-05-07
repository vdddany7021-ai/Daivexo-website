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
    // Handle form submission
    console.log("Form submitted:", formState)
    // Reset form
    setFormState({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section id="contact" className="py-32 relative">
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-primary to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-primary text-sm tracking-[0.3em] uppercase">
            Get in Touch
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
            Contact
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-primary" />
            <div className="h-2 w-2 rotate-45 bg-primary" />
            <div className="h-px w-16 bg-primary" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-2xl mb-8">
              Let&apos;s Create Something Extraordinary
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-12">
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
                  <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:hello@daivexo.com"
                    className="text-foreground hover:text-primary transition-colors"
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
                  <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+1234567890"
                    className="text-foreground hover:text-primary transition-colors"
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
                  <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">
                    Location
                  </p>
                  <p className="text-foreground">
                    New York, NY
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
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
                    setFormState({ ...formState, name: e.target.value })
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
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm uppercase tracking-widest text-muted-foreground mb-3"
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
                className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder="How can we help?"
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
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
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
  )
}
