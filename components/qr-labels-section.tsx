
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
      "Elk SCANMIJ QR-label bevat een unieke QR-code die gekoppeld wordt aan de eigenaar van het voorwerp. Een vinder scant het label en krijgt onmiddellijk de juiste contactmogelijkheden te zien. Ideaal voor brooddozen, drinkflessen, boekentassen, sleutels, koffers en andere persoonlijke spullen.",
  },
  {
    icon: Scan,
    title: "Scannen & terugbezorgen",
    description:
      "De QR-code kan eenvoudig met vrijwel iedere moderne smartphone worden gescand. De persoonlijke scanpagina opent rechtstreeks in de browser, zodat een eerlijke vinder snel contact kan opnemen en het verloren voorwerp kan terugbezorgen.",
  },
  {
    icon: Smartphone,
    title: "Geen app nodig",
    description:
      "Voor het scannen van een SCANMIJ QR-sticker hoeft de vinder geen speciale app te installeren. De QR-code opent rechtstreeks via de browser van de smartphone. Snel, eenvoudig en laagdrempelig voor jong en oud.",
  },
  {
    icon: Shield,
    title: "Voor thuis, school & onderweg",
    description:
      "SCANMIJ QR-labels helpen persoonlijke spullen herkenbaar en terugvindbaar te maken. Gebruik de stickers op schoolspullen, bagage, sleutels, elektronica en andere voorwerpen die gemakkelijk verloren of vergeten kunnen worden.",
  },
]

const visuals = [
  {
    title: "QR label voor brooddoos",
    image: "/images/Brooddoos met scanmij qr code.png",
    alt: "SCANMIJ QR label en QR sticker voor een brooddoos of schoolspullen",
  },
  {
    title: "QR sticker voor drinkfles",
    image: "/images/Drinkfles met scanmij sticker.png",
    alt: "SCANMIJ QR sticker op drinkfles om verloren spullen terug te vinden",
  },
  {
    title: "QR label voor laptop",
    image: "/images/Laptop met scanmij sticker.png",
    alt: "SCANMIJ QR code label op laptop voor verloren voorwerpen",
  },
  {
    title: "SCANMIJ QR-code",
    image: "/images/Luxe moderne qr code afbeelding.png",
    alt: "SCANMIJ slimme QR code sticker en QR label van DAIVEXO",
  },
]

export function QRLabelsSection() {
  const [selectedImage, setSelectedImage] = useState<{
    image: string
    title: string
    alt: string
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
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-40 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/5 blur-[150px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-20 max-w-6xl text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-primary md:text-base">
              GEVONDEN? SCAN MIJ.
            </span>

            <h2 className="mt-5 font-serif text-4xl text-white md:text-5xl lg:text-6xl">
              Slimme QR Labels voor verloren voorwerpen
            </h2>

            <div className="mt-7 flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-primary" />
              <div className="h-2 w-2 rotate-45 bg-primary" />
              <div className="h-px w-16 bg-primary" />
            </div>

            <p className="mx-auto mt-10 max-w-5xl text-2xl font-semibold leading-[1.4] text-white md:text-3xl lg:text-4xl">
              Eén scan kan een verloren voorwerp weer bij zijn eigenaar brengen.
            </p>

            <p className="mx-auto mt-8 max-w-5xl text-lg leading-9 text-white md:text-xl md:leading-10 lg:text-2xl">
              Bevestig een <strong>SCANMIJ QR-label</strong> op een brooddoos,
              drinkfles, rugzak, sleutelbos, koffer, laptop of ander persoonlijk
              voorwerp. Wanneer iemand het terugvindt, hoeft de vinder alleen
              de QR-code te scannen om rechtstreeks contact te kunnen opnemen
              met de eigenaar — zonder app.
            </p>

            <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-white/75 md:text-lg">
              Een eenvoudige oplossing voor ouders, kinderen, scholen,
              reizigers en iedereen die waardevolle of persoonlijke spullen
              sneller wil terugvinden.
            </p>
          </div>

          <div className="mb-24 grid grid-cols-1 gap-8 md:grid-cols-2">
            {visuals.map((visual) => (
              <button
                type="button"
                key={visual.title}
                onClick={() => setSelectedImage(visual)}
                className="group cursor-zoom-in overflow-hidden border border-primary/25 bg-card text-left transition-all duration-500 hover:border-primary/80"
                aria-label={`Vergroot ${visual.title}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={visual.image}
                    alt={visual.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />

                  <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-primary/60 bg-black/70 text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ZoomIn className="h-5 w-5" />
                  </div>

                  <div className="absolute left-4 top-4 h-7 w-7 border-l border-t border-primary/60" />
                  <div className="absolute bottom-4 right-4 h-7 w-7 border-b border-r border-primary/60" />
                </div>

                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl text-white md:text-2xl">
                    {visual.title}
                  </h3>

                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-primary/80">
                    Klik om te vergroten
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.title}
                  className="group relative border border-border bg-card p-8 transition-all duration-500 hover:border-primary/50"
                >
                  <div className="absolute left-0 top-0 h-4 w-4 border-l border-t border-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute right-0 top-0 h-4 w-4 border-r border-t border-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <Icon className="mb-6 h-14 w-14 text-primary drop-shadow-lg" />

                  <h3 className="mb-5 font-serif text-2xl text-white">
                    {feature.title}
                  </h3>

                  <p className="text-base leading-8 text-white/90">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="mx-auto mt-20 max-w-5xl border-y border-primary/20 py-12 text-center">
            <h3 className="font-serif text-2xl text-white md:text-3xl">
              QR stickers voor school, thuis, reizen en dagelijks gebruik
            </h3>

            <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-white/75 md:text-lg">
              SCANMIJ QR stickers zijn geschikt voor onder andere
              schoolspullen, brooddozen, drinkflessen, rugzakken, koffers,
              sleutels, laptops en andere persoonlijke voorwerpen. Een
              herkenbaar QR-label maakt het voor een vinder eenvoudig om
              actie te ondernemen wanneer iets verloren raakt.
            </p>
          </div>

          <div className="mt-16 text-center">
            <p className="mb-6 text-lg text-white/80">
              Interesse in SCANMIJ QR-labels voor uzelf, uw gezin of uw school?
            </p>

            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-3 bg-primary px-10 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:brightness-110"
            >
              Vraag info aan
            </a>
          </div>

          <div
            aria-hidden="true"
            className="mx-auto mt-28 flex w-full max-w-5xl items-center justify-center gap-5"
          >
            <div className="h-px flex-1 bg-primary" />
            <div className="h-3 w-3 rotate-45 bg-primary" />
            <div className="h-px flex-1 bg-primary" />
          </div>
        </div>
      </section>

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
            className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center border border-primary/70 bg-black/80 text-primary transition-colors duration-300 hover:bg-primary hover:text-black md:right-8 md:top-8"
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
              alt={selectedImage.alt}
              className="max-h-[82vh] max-w-[95vw] border border-primary/40 object-contain shadow-[0_0_40px_rgba(212,175,55,0.18)]"
            />

            <div className="pt-5 text-center">
              <h3 className="font-serif text-2xl text-white md:text-3xl">
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