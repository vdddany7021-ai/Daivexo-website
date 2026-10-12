
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
  title: "Statafel Huren | LED Statafels & Staantafels Huren | DAIVEXO",

  description:
    "Statafel of staantafel huren voor een feest of evenement? Ontdek de LED statafels, lichtgevende staantafels en Light Cubes van DAIVEXO. Ook verlichte bars, DJ Booths en Light Walls.",

  alternates: {
    canonical: "https://www.daivexo.com/",
  },

  openGraph: {
    title: "LED Statafels & Staantafels Huren | DAIVEXO",
    description:
      "Ontdek LED statafels, lichtgevende staantafels en Light Cubes voor feesten, recepties en bedrijfsevenementen.",
    url: "https://www.daivexo.com/",
    siteName: "DAIVEXO",
    locale: "nl_BE",
    type: "website",
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
