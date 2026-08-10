"use client"

import { useEffect, useState } from "react"
import { X, ZoomIn } from "lucide-react"

const lightCubes = [
  {
    id: 1,
    color: "Green",
    image: "/images/light-cube-green.jpeg",
  },
  {
    id: 2,
    color: "Yellow",
    image: "/images/light-cube-yellow.jpeg",
  },
  {
    id: 3,
    color: "Blue",
    image: "/images/light-cube-blue.jpeg",
  },
  {
    id: 4,
    color: "Warm White",
    image: "/images/light-cube-warm-white.jpeg",
  },
]

export function LightCubesSection() {
  const [selectedCube, setSelectedCube] = useState<{
    color: string
    image: string
  } | null>(null)

  useEffect(() => {
    if (!selectedCube) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCube(null)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [selectedCube])

  return (
    <>
      <section
        id="light-cubes"
        className="relative bg-black py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-primary text-sm tracking-[0.3em] uppercase">
              Illuminated IBC Event Furniture
            </span>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
              DAIVEXO Light Cubes
            </h2>

            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-primary" />
              <div className="h-2 w-2 rotate-45 bg-primary" />
              <div className="h-px w-16 bg-primary" />
            </div>
          </div>

          {/* Klikbare Light Cube afbeeldingen */}
          <div className="grid md:grid-cols-2 gap-6">
            {lightCubes.map((cube) => (
              <button
                type="button"
                key={cube.id}
                onClick={() => setSelectedCube(cube)}
                className="group relative aspect-[4/3] bg-card border border-border hover:border-primary/60 transition-all duration-500 overflow-hidden cursor-zoom-in text-left"
                aria-label={`Vergroot DAIVEXO Light Cube ${cube.color}`}
              >
                <img
                  src={cube.image}
                  alt={`DAIVEXO Light Cube - ${cube.color} LED`}
                  className="absolute inset-0 h-full w-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-primary text-xs tracking-[0.3em] uppercase block">
                    {cube.color} LED
                  </span>

                  <span className="mt-2 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="h-4 w-4" />
                    Klik om te vergroten
                  </span>
                </div>

                <div className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center border border-primary/60 bg-black/70 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="h-5 w-5" />
                </div>

                <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-primary/30 group-hover:border-primary transition-colors duration-500" />

                <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-primary/30 group-hover:border-primary transition-colors duration-500" />
              </button>
            ))}
          </div>

          {/* Pricing */}
          <div className="mt-28">
            <div className="text-center mb-16">
              <span className="text-primary text-sm tracking-[0.3em] uppercase">
                Tarieven
              </span>

              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4">
                Prijzen &amp; Verhuur
              </h3>

              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="h-px w-16 bg-primary" />
                <div className="h-2 w-2 rotate-45 bg-primary" />
                <div className="h-px w-16 bg-primary" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* 1 DAG */}
              <div className="relative bg-card border border-border p-10 flex flex-col items-center text-center transition-colors duration-500 hover:border-primary/50">
                <span className="text-primary text-xs tracking-[0.3em] uppercase">
                  1 Dag
                </span>

                <div className="mt-6 mb-2">
                  <span className="font-serif text-5xl lg:text-6xl text-primary">
                    €45
                  </span>
                </div>

                <span className="text-stone-300 text-base md:text-lg tracking-wide">
                  per Cube
                </span>

                <div className="mt-6 h-px w-12 bg-primary/30" />

                <p className="mt-6 text-base md:text-lg text-stone-300 leading-relaxed">
                  Waarborg: €100 per Cube
                </p>

                <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-primary/30" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-primary/30" />
              </div>

              {/* WEEKEND */}
              <div className="relative bg-card border border-primary/40 p-10 flex flex-col items-center text-center transition-colors duration-500 hover:border-primary">
                <span className="text-primary text-xs tracking-[0.3em] uppercase">
                  Weekend
                </span>

                <div className="mt-6 mb-2">
                  <span className="font-serif text-5xl lg:text-6xl text-primary">
                    €75
                  </span>
                </div>

                <span className="text-stone-300 text-base md:text-lg tracking-wide">
                  per Cube
                </span>

                <div className="mt-6 h-px w-12 bg-primary/30" />

                <p className="mt-6 text-base md:text-lg text-stone-300 leading-relaxed">
                  Waarborg: €150 per Cube
                </p>

                <p className="mt-2 text-base md:text-lg text-stone-300 leading-relaxed whitespace-nowrap">
                  Vrijdag levering – maandag ophaling
                </p>

                <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-primary/50" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-primary/50" />
              </div>

              {/* KOPEN */}
              <div className="relative bg-card border border-border p-10 flex flex-col items-center text-center transition-colors duration-500 hover:border-primary/50">
                <span className="text-primary text-xs tracking-[0.3em] uppercase">
                  Kopen
                </span>

                <div className="mt-6 mb-2">
                  <span className="font-serif text-5xl lg:text-6xl text-primary">
                    €350
                  </span>
                </div>

                <span className="text-stone-300 text-base md:text-lg tracking-wide">
                  per Cube
                </span>

                <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-primary/30" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-primary/30" />
              </div>
            </div>

            {/* INBEGREPEN BIJ VERHUUR */}
            <div className="mt-6 relative bg-card border border-border p-10 lg:p-14">
              <div className="text-center mb-10">
                <span className="text-primary text-xs tracking-[0.3em] uppercase">
                  Inbegrepen bij verhuur
                </span>
              </div>

              <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-4 max-w-3xl mx-auto">
                {[
                  "Levering én ophaling binnen een straal van 25 km inbegrepen",
                  "Afstand berekend via Google Maps vanaf DAIVEXO",
                  "50 meter verlengkabel inbegrepen",
                  "3-voudige stekkerdoos inbegrepen",
                  "RGBW LED-verlichting inbegrepen",
                  "Afstandsbediening inbegrepen",
                  "Zwarte HDPE-bovenplaat inbegrepen",
                  "Gebruiksklaar geleverd",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base md:text-lg text-stone-300 leading-relaxed"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rotate-45 bg-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-primary/30" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-primary/30" />
            </div>

            {/* TRANSPORT */}
            <div className="mt-6 relative bg-card border border-border p-10 lg:p-14">
              <div className="text-center mb-10">
                <span className="text-primary text-xs tracking-[0.3em] uppercase">
                  Transport
                </span>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
                <div>
                  <p className="text-primary font-serif text-lg">
                    0–25 km
                  </p>

                  <p className="mt-2 text-base md:text-lg text-stone-300 leading-relaxed">
                    Levering &amp; ophaling inbegrepen
                  </p>
                </div>

                <div className="sm:border-x sm:border-primary/20 sm:px-6">
                  <p className="text-primary font-serif text-lg">
                    26–50 km
                  </p>

                  <p className="mt-2 text-base md:text-lg text-stone-300 leading-relaxed">
                    €30 transporttoeslag
                  </p>
                </div>

                <div>
                  <p className="text-primary font-serif text-lg">
                    Meer dan 50 km
                  </p>

                  <p className="mt-2 text-base md:text-lg text-stone-300 leading-relaxed">
                    Prijs op aanvraag
                  </p>
                </div>
              </div>

              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-primary/30" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-primary/30" />
            </div>

            {/* Fine print */}
            <p className="mt-10 text-center text-base text-stone-400 max-w-3xl mx-auto leading-relaxed">
              De klant voorziet een geschikt 230V-stopcontact binnen bereik.
              De waarborg wordt na ophaling en controle terugbetaald indien de
              Cube en alle meegeleverde materialen volledig en onbeschadigd
              worden terugbezorgd.
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedCube && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 md:p-8"
          onClick={() => setSelectedCube(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`DAIVEXO Light Cube ${selectedCube.color}`}
        >
          <button
            type="button"
            onClick={() => setSelectedCube(null)}
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
              src={selectedCube.image}
              alt={`DAIVEXO Light Cube - ${selectedCube.color} LED`}
              className="max-h-[82vh] max-w-[95vw] object-contain border border-primary/40 shadow-[0_0_40px_rgba(212,175,55,0.18)]"
            />

            <div className="pt-5 text-center">
              <h3 className="font-serif text-2xl md:text-3xl text-white">
                DAIVEXO Light Cube — {selectedCube.color} LED
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
