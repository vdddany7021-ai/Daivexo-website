import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LightCubesSection } from "@/components/light-cubes-section"
import { QRLabelsSection } from "@/components/qr-labels-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <LightCubesSection />
        <QRLabelsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
