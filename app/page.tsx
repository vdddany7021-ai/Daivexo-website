
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
    absolute: "LED Statafels & Staantafels Huren | DAIVEXO",
  },

  description:
    "LED statafels en verlichte staantafels huren in heel België? Ontdek de Light Cubes voor feesten, recepties en bedrijfsevenementen. Vraag vrijblijvend een offerte aan.",

  alternates: {
    canonical: "https://www.daivexo.com/",
  },

  openGraph: {
    title: "LED Statafels & Staantafels Huren | DAIVEXO",
    description:
      "Huur verlichte LED statafels en staantafels voor feesten, recepties en bedrijfsevenementen in heel België. Ontdek de DAIVEXO Light Cubes.",
    url: "https://www.daivexo.com/",
    siteName: "DAIVEXO",
    locale: "nl_BE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "LED Statafels & Staantafels Huren | DAIVEXO",
    description:
      "Verlichte LED statafels en staantafels huren in België? Ontdek de DAIVEXO Light Cubes en vraag vrijblijvend een offerte aan.",
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
