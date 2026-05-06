import { QrCode, Shield, Sparkles, Scan } from "lucide-react"

const features = [
  {
    icon: QrCode,
    title: "Premium Materials",
    description:
      "Crafted from the finest materials with gold foil accents and scratch-resistant coating.",
  },
  {
    icon: Shield,
    title: "Authentication",
    description:
      "Each label contains a unique encrypted signature to verify authenticity.",
  },
  {
    icon: Sparkles,
    title: "Custom Design",
    description:
      "Bespoke designs tailored to your brand identity and aesthetic vision.",
  },
  {
    icon: Scan,
    title: "Instant Connect",
    description:
      "Seamless digital experiences with a single scan, linking to exclusive content.",
  },
]

export function QRLabelsSection() {
  return (
    <section id="qr-labels" className="py-32 relative">
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-primary to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-primary text-sm tracking-[0.3em] uppercase">
            Collection
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
            QR Labels
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-primary" />
            <div className="h-2 w-2 rotate-45 bg-primary" />
            <div className="h-px w-16 bg-primary" />
          </div>
          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Our luxury QR labels merge cutting-edge technology with exquisite
            craftsmanship, creating a bridge between the tangible and digital
            realms.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <feature.icon className="h-10 w-10 text-primary mb-6" />
              <h3 className="font-serif text-xl mb-4">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 tracking-widest uppercase text-sm"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  )
}
