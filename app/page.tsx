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
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <p className="mb-6 text-sm uppercase tracking-[0.4em] text-primary">
          DAIVEXO
        </p>

        <h1 className="text-4xl font-semibold md:text-6xl">
          Onze website wordt momenteel vernieuwd
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
          We werken aan een vernieuwde DAIVEXO-website met onze Light Cubes,
          verlichte statafels, staantafels, eventmeubilair en SCANMIJ QR-labels.
          Binnenkort zijn we opnieuw volledig beschikbaar.
        </p>

        <p className="mt-10 text-lg text-primary">
          info@daivexo.com
        </p>
      </div>
    </main>
  )
}