"use client"

import { useEffect, useState } from "react"
import {
  QrCode,
  Shield,
  Scan,
  Smartphone,
  X,
  ZoomIn,
} from "lucide-react"

const features = [
  {
    icon: QrCode,
    title: "Unieke QR-code",
    description:
      "Elk SCANMIJ-label bevat een unieke QR-code die gekoppeld wordt aan de eigenaar van het voorwerp. Een vinder hoeft enkel te scannen om onmiddellijk de juiste contactmogelijkheden te zien. Ideaal voor sleutels, boekentassen, drinkflessen, koffers, portefeuilles en andere waardevolle spullen.",
  },
  {
    icon: Scan,
    title: "Snel scannen",
    description:
      "De QR-code kan eenvoudig gescand worden met elke smartphone. De scanpagina opent direct in de browser, zonder moeilijke stappen. Zo kan een eerlijke vinder snel contact opnemen en het verloren voorwerp veilig terugbezorgen aan de eigenaar.",
  },
  {
    icon: Smartphone,
    title: "Geen app nodig",
    description:
      "SCANMIJ werkt volledig zonder app, zonder account en zonder registratie voor de vinder. Alles gebeurt via de gewone browser van de smartphone. Dat maakt het systeem eenvoudig, laagdrempelig en bruikbaar voor jong en oud.",
  },
  {
    icon: Shield,
    title: "Veilig & betrouwbaar",
    description:
      "SCANMIJ is ontworpen met aandacht voor eenvoud, vertrouwen en professioneel gebruik. De labels ogen stijlvol, zijn duidelijk herkenbaar en helpen verloren voorwerpen sneller terug te brengen, thuis, op school, op reis of onderweg.",
  },
]

const visuals = [
  {
    title: "SCANMIJ op brooddoos",
    image: "/images/Brooddoos met scanmij qr code.png",
  },
  {
    title: "SCANMIJ op drinkfles",
    image: "/images/Drinkfles met scanmij sticker.png",
  },
  {
    title: "SCANMIJ op laptop",
    image: "/images/Laptop met scanmij sticker.png",
  },
  {
    title: "SCANMIJ QR-code",
    image: "/images/Luxe moderne qr code afbeelding.png",
  },
]

export function QRLabelsSection() {
  const [selectedImage, setSelectedImage] = useState<{
    image: string
    title: string
  } | null>(null)

  useEffect(() => {
    if (!selectedImage) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [selectedImage])

  return (
    <>
      <section
        id="qr-labels"
        className="relative overflow-hidden bg-black py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Titel */}
          <div className="text-center mb-20">
            <span className="text-primary text-lg md:text-xl font-semibold tracking-[0.28em] uppercase">
              GEVONDEN? SCAN MIJ.
            </span>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-5 mb-6 text-white">
              QR Labels
            </h2>

            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-primary" />
              <div className="h-2 w-2 rotate-45 bg-primary" />
              <div className="h-px w-16 bg-primary" />
            </div>

            <p className="mt-9 max-w-4xl mx-auto text-xl md:text-2xl font-semibold leading-9 text-white">
              Slimme QR-labels die verloren spullen sneller terugbrengen bij hun
              eigenaar.
            </p>

            <p className="mt-6 max-w-4xl mx-auto text-base md:text-lg lg:text-xl leading-8 md:leading-9 text-stone-300">
              Bevestig een SCANMIJ-label op bijvoorbeeld een brooddoos,
              drinkfles, rugzak, sleutelbos, koffer of ander persoonlijk
              voorwerp. Wordt het voorwerp gevonden? De vinder scant eenvoudig
              de QR-code en kan rechtstreeks contact opnemen met de eigenaar —
              zonder app.
            </p>
          </div>

          {/* Klikbare SCANMIJ-afbeeldingen */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {visuals.map((visual) => (
              <button
                type="button"
                key={visual.title}
                onClick={() => setSelectedImage(visual)}
                className="group text-left overflow-hidden bg-card border border-primary/25 hover:border-primary/80 transition-all duration-500 cursor-zoom-in"
                aria-label={`Vergroot ${visual.title}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={visual.image}
                    alt={visual.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                  <div className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center border border-primary/60 bg-black/70 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="h-5 w-5" />
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl md:text-2xl text-white">
                    {visual.title}
                  </h3>

                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-primary/80">
                    Klik om te vergroten
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Eigenschappen */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon

              return (
                <div
                  key={index}
                  className="group relative p-8 bg-card border border-border hover:border-primary/50 transition-all duration-500"
                >
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <Icon className="h-14 w-14 text-primary mb-6 drop-shadow-lg" />

                  <h3 className="font-serif text-2xl text-white mb-5">
                    {feature.title}
                  </h3>

                  <p className="text-white/90 text-base leading-8">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Contactknop */}
          <div className="text-center mt-16">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 tracking-widest uppercase text-sm"
            >
              Vraag info aan
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 md:right-8 md:top-8 z-10 flex h-12 w-12 items-center justify-center border border-primary/70 bg-black/80 text-primary hover:bg-primary hover:text-black transition-colors duration-300"
            aria-label="Afbeelding sluiten"
          >
            <X className="h-6 w-6" />
          </button>

          <div
            className="relative max-h-[92vh] max-w-[95vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[82vh] max-w-[95vw] object-contain border border-primary/40 shadow-[0_0_40px_rgba(212,175,55,0.18)]"
            />

            <div className="pt-5 text-center">
              <h3 className="font-serif text-2xl md:text-3xl text-white">
                {selectedImage.title}
              </h3>

              <p className="mt-2 text-sm text-white/60">
                Klik buiten de afbeelding of op × om te sluiten
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}