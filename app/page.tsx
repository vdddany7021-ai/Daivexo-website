import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LightCubesSection } from "@/components/light-cubes-section"
import { OccasionsSection } from "@/components/occasions-section"
import { LightCubesCtaSection } from "@/components/light-cubes-cta-section"
import { QRLabelsSection } from "@/components/qr-labels-section"
import { AegisSection } from "@/components/aegis-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

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
