
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
    absolute: "LED Staantafels & Statafels | Light Cubes | DAIVEXO",
  },

  description:
    "Ontdek LED staantafels, lichtgevende statafels en Light Cubes voor feesten en evenementen. Staantafel of statafel huren? Vraag nu je reservatie aan.",

  alternates: {
    canonical: "https://www.daivexo.com/",
  },

  openGraph: {
    title: "LED Staantafels & Statafels | Light Cubes | DAIVEXO",
    description:
      "Ontdek verlichte LED staantafels, statafels en modulaire Light Cubes voor feesten, recepties en bedrijfsevenementen.",
    url: "https://www.daivexo.com/",
    siteName: "DAIVEXO",
    locale: "nl_BE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "LED Staantafels & Statafels | DAIVEXO",
    description:
      "Lichtgevende LED staantafels en statafels voor evenementen. Ontdek de DAIVEXO Light Cubes en vraag een reservatie aan.",
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
