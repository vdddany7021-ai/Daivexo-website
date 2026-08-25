import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageBackground } from "@/components/page-background"
import { QrCode, Shield, Scan, Smartphone } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "QR Stickers & QR Labels voor Verloren Voorwerpen | SCANMIJ",
  description:
    "SCANMIJ QR stickers en QR labels helpen verloren spullen snel terug te vinden. Voor brooddozen, drinkflessen, boekentassen, sleutels, koffers, schoolspullen en persoonlijke voorwerpen.",
  keywords: [
    "QR sticker",
    "QR stickers",
    "QR label",
    "QR labels",
    "QR code sticker",
    "QR code stickers",
    "QR sticker verloren voorwerpen",
    "QR label verloren voorwerpen",
    "stickers verloren voorwerpen",
    "naamlabel QR code",
    "QR sticker kinderen",
    "QR stickers school",
    "QR label brooddoos",
    "QR label drinkfles",
    "QR sticker boekentas",
    "QR sticker koffer",
    "verloren spullen terugvinden",
    "SCANMIJ",
    "DAIVEXO",
  ],
  openGraph: {
    title: "SCANMIJ QR Stickers & QR Labels | DAIVEXO",
    description:
      "Slimme QR stickers voor verloren voorwerpen. Scan de QR-code en neem eenvoudig contact op met de eigenaar.",
    type: "website",
  },
}
const visuals = [
  {
    title: "SCANMIJ QR Sticker voor Verloren Voorwerpen",
    image: "https://www.daivexo.com/images/scanmij-sticker.jpeg",
  },
  {
    title: "SCANMIJ QR Labels en QR Stickers voor Schoolspullen",
    image: "https://www.daivexo.com/images/scanmij-flyer.jpeg",
  },
  {
    title: "SCANMIJ QR Sticker op Persoonlijke Voorwerpen",
    image: "https://www.daivexo.com/images/scanmij-in-use.jpeg",
  },
]

const features = [
  {
    icon: QrCode,
    title: "Unieke QR-code",
    description:
      "Elk label bevat een unieke QR-code die gekoppeld kan worden aan de eigenaar van het voorwerp.",
  },
  {
    icon: Scan,
    title: "Snel scannen",
    description:
      "Een vinder scant de QR-code met een smartphone en krijgt onmiddellijk de juiste contactmogelijkheden.",
  },
  {
    icon: Smartphone,
    title: "Geen app nodig",
    description:
      "SCANMIJ werkt rechtstreeks via de browser. De vinder hoeft niets te installeren.",
  },
  {
    icon: Shield,
    title: "Veilig & betrouwbaar",
    description:
      "Ideaal voor sleutels, boekentassen, koffers, rugzakken, drinkflessen en waardevolle spullen.",
  },
]

export default function QRLabelsPage() {
  return (
    <main className="relative min-h-screen">
      <PageBackground />
      <Header />

      <section className="min-h-screen px-6 py-32">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-20">
            <span className="text-primary text-sm tracking-[0.3em] uppercase">
              SCANMIJ by DAIVEXO
            </span>

           <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
  QR Stickers & QR Labels voor Verloren Voorwerpen
</h1>

            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-primary" />
              <div className="h-2 w-2 rotate-45 bg-primary" />
              <div className="h-px w-16 bg-primary" />
            </div>

            <p <p className="text-muted-foreground mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
  SCANMIJ QR stickers en QR labels helpen verloren voorwerpen snel terug bij de eigenaar te brengen. Ideaal voor brooddozen, drinkflessen, boekentassen, sleutels, koffers, schoolspullen en andere persoonlijke bezittingen. De vinder scant eenvoudig de QR-code en kan rechtstreeks contact opnemen met de eigenaar.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {visuals.map((visual) => (
              <div
                key={visual.title}
                className="group bg-card border border-primary/20 hover:border-primary/60 transition-all duration-500 overflow-hidden"
              >
                <div className="aspect-[4/5] bg-black overflow-hidden flex items-center justify-center">
                  <picture>
                    <img
                      src={visual.image}
                      alt={visual.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </picture>
                </div>

                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl">{visual.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 border border-primary/20 hover:border-primary/50 transition-all duration-500"
              >
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

          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 tracking-widest uppercase text-sm"
            >
              Vraag info aan
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}