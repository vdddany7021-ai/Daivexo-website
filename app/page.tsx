
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

const seoTitle =
  "LED Statafels Huren in België & Europa | DAIVEXO"

const seoDescription =
  "LED-statafels en Light Cubes huren? DAIVEXO levert vanuit Deinze in België, Nederland, Frankrijk, Duitsland, Luxemburg en het VK. Vraag een offerte aan."

export const metadata: Metadata = {
  title: {
    absolute: seoTitle,
  },

  description: seoDescription,

  alternates: {
    canonical: "https://www.daivexo.com/",
  },

  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: "https://www.daivexo.com/",
    siteName: "DAIVEXO",
    locale: "nl_BE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
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
