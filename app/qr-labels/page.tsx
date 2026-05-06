import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageBackground } from "@/components/page-background"
import { QrCode, Shield, Sparkles, Scan } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "QR Labels | DAIVEXO",
  description: "Premium QR labels crafted from the finest materials with gold foil accents. Authentication, custom design, and instant digital connection.",
}

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

export default function QRLabelsPage() {
  return (
    <main className="relative min-h-screen">
      <PageBackground />
      <Header />

      <section className="min-h-screen flex items-center justify-center px-6 py-32">
        <div className="max-w-7xl mx-auto w-full">
          {/* Section header */}
          <div className="text-center mb-20">
            <span className="text-primary text-sm tracking-[0.3em] uppercase">
              Collection
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
              QR Labels
            </h1>
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
                className="group relative p-8 border border-primary/20 hover:border-primary/50 transition-all duration-500"
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
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 tracking-widest uppercase text-sm"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
