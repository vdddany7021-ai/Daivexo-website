
import type { Metadata } from "next"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LightCubesSection } from "@/components/light-cubes-section"
import { OccasionsSection } from "@/components/occasions-section"
import { LightCubesCtaSection } from "@/components/light-cubes-cta-section"
import { QRLabelsSection } from "@/components/qr-labels-section"
import { AegisSection } from "@/components/aegis-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: {
    absolute: "Staantafels & Statafels Huren | LED Staantafels | DAIVEXO",
  },

  description:
    "Staantafel huren of statafel huren? Ontdek LED staantafels, LED statafels en verlichte Light Cubes voor feesten en evenementen. Reserveer nu bij DAIVEXO.",

  alternates: {
    canonical: "https://www.daivexo.com/",
  },

  openGraph: {
    title: "Staantafels & Statafels Huren | LED Staantafels | DAIVEXO",
    description:
      "Ontdek LED staantafels, LED statafels en verlichte Light Cubes voor feesten, recepties en bedrijfsevenementen. Vraag nu een reservatie aan.",
    url: "https://www.daivexo.com/",
    siteName: "DAIVEXO",
    locale: "nl_BE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Staantafels & Statafels Huren | DAIVEXO",
    description:
      "LED staantafel of statafel huren? Ontdek de verlichte Light Cubes van DAIVEXO voor jouw evenement.",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <LightCubesSection />
      <OccasionsSection />
      <LightCubesCtaSection />
      <QRLabelsSection />
      <AegisSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
