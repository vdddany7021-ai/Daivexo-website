"use client"

import { useEffect, useState } from "react"
import { Check, Sparkles, X, ZoomIn, ArrowRight } from "lucide-react"

const lightCubes = [
  {
    id: 1,
    title: "STATAFEL",
    image: "/images/light-cube-green.jpeg",
    alt: "DAIVEXO Light Cube statafel groen",
  },
  {
    id: 2,
    title: "LIGHT CUBE BAR",
    image: "/images/light-cubes-inspiratie/bar-warmwit-blauw.jpg",
    alt: "DAIVEXO Light Cube Bar warm wit met diepblauwe achterwand",
  },
  {
    id: 3,
    title: "DJ BOOTH",
    image: "/images/light-cubes-inspiratie/dj-warmwit.jpg",
    alt: "DAIVEXO Light Cube DJ Booth warm wit",
  },
  {
    id: 4,
    title: "LIGHT WALL",
    image: "/images/light-cubes-inspiratie/lightwall-multicolor.jpg",
    alt: "DAIVEXO Light Wall multicolor",
  },
]

const includedItems = [
  "Levering én ophaling binnen een straal van 25 km",
  "50 meter verlengkabel",
  "RGBW LED-verlichting",
  "Zwarte HPL-bovenplaat van 6 mm",
  "3-voudige waterbestendige stekkerdoos",
  "Bediening via afstandsbediening én app",
  "LED-verlichting vooraf gemonteerd",
  "Gebruiksklaar geleverd",
]

export function LightCubesSection() {
  const [selectedCube, setSelectedCube] = useState<{
    title: string
    image: string
    alt: string
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
        className="relative overflow-hidden bg-black py-24 md:py-32"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-40 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/5 blur-[150px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Intro */}
          <div className="mx-auto max-w-5xl text-center mb-20">
            <span className="text-primary text-sm md:text-base tracking-[0.35em] uppercase">
              Illuminated IBC Event Furniture
            </span>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 mb-5 text-white">
              DAIVEXO Light Cubes
            </h2>

            <p className="font-serif text-2xl md:text-3xl text-primary/90 italic">
              Licht. Sfeer. Een ontmoetingspunt dat opvalt.
            </p>

            <div className="flex items-center justify-center gap-4 mt-7">
              <div className="h-px w-16 bg-primary" />
              <div className="h-2 w-2 rotate-45 bg-primary" />
              <div className="h-px w-16 bg-primary" />
            </div>

            <p className="mt-9 mx-auto max-w-3xl text-lg md:text-xl leading-8 text-stone-200">
              DAIVEXO Light Cubes combineren sfeer, verlichting en functionaliteit
              in één opvallend eventmeubel. Ideaal als statafel, ontmoetingspunt
              of visuele blikvanger tijdens feesten, bedrijfsevents, horeca en
              evenementen.
            </p>

            <p className="mt-5 mx-auto max-w-3xl text-base md:text-lg leading-8 text-stone-400">
              Elke Cube is voorzien van RGBW LED-verlichting en een zwarte
              HPL-bovenplaat van 6 mm en wordt gebruiksklaar geleverd.
            </p>
          </div>

          {/* Vier toepassingen */}
          <div className="grid md:grid-cols-2 gap-6">
            {lightCubes.map((cube) => (
              <button
                type="button"
                key={cube.id}
                onClick={() => setSelectedCube(cube)}
                className="group relative aspect-[4/3] bg-card border border-primary/20 hover:border-primary/70 transition-all duration-500 overflow-hidden cursor-zoom-in text-left"
                aria-label={`Vergroot ${cube.title}`}
              >
                <img
                  src={cube.image}
                  alt={cube.alt}
                  className="absolute inset-0 h-full w-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-primary text-xs md:text-sm tracking-[0.32em] uppercase block">
                    DAIVEXO — {cube.title}
                  </span>

                  <span className="mt-2 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="h-4 w-4" />
                    Klik om te vergroten
                  </span>
                </div>

                <div className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center border border-primary/60 bg-black/70 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="h-5 w-5" />
                </div>

                <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-primary/40 group-hover:border-primary transition-colors duration-500" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-primary/40 group-hover:border-primary transition-colors duration-500" />
              </button>
            ))}
          </div>

          {/* Inspiratie CTA */}
          <div className="mt-20 flex flex-col items-center text-center">
            <span className="text-primary text-sm tracking-[0.32em] uppercase">
              Meer dan een statafel
            </span>

            <h3 className="mt-5 font-serif text-3xl md:text-4xl lg:text-5xl text-white">
              Ontdek wat er mogelijk is met Light Cubes
            </h3>

            <p className="mt-5 max-w-3xl text-base md:text-lg leading-8 text-stone-400">
              Van individuele statafels en complete bars tot DJ-booths,
              indrukwekkende lichtwanden en volledige eventopstellingen.
            </p>

            <a
              href="/light-cubes-inspiratie"
              className="group mt-10 inline-flex w-full max-w-[620px] items-center justify-center gap-4 border-2 border-primary bg-primary px-8 md:px-12 py-6 md:py-7 text-base md:text-xl font-bold uppercase tracking-[0.16em] text-black shadow-[0_0_30px_rgba(212,175,55,0.35)] transition-all duration-300 hover:bg-black hover:text-primary hover:shadow-[0_0_50px_rgba(212,175,55,0.55)]"
            >
              Ontdek de mogelijkheden
              <ArrowRight className="h-6 w-6 md:h-7 md:w-7 shrink-0 transition-transform duration-300 group-hover:translate-x-2" />
            </a>
          </div>

          {/* Pricing */}
          <div className="mt-28">
            <div className="text-center mb-16">
              <span className="text-primary text-sm tracking-[0.3em] uppercase">
                Tarieven
              </span>

              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4 text-white">
                Prijzen &amp; Verhuur
              </h3>

              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="h-px w-16 bg-primary" />
                <div className="h-2 w-2 rotate-45 bg-primary" />
                <div className="h-px w-16 bg-primary" />
              </div>

             <p className="mt-7 text-base md:text-lg text-stone-400 whitespace-nowrap">
  Kies voor één dag, een volledig weekend of aankoop van een DAIVEXO Light Cube.
</p>

             <p className="mt-4 text-base md:text-lg font-semibold text-primary">
  Alle vermelde prijzen zijn inclusief 21% btw.
</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:items-stretch">
              {/* 1 DAG */}
              <div
                className="relative bg-black border border-primary/80 p-10 flex flex-col items-center text-center transition-all duration-500 hover:border-primary"
                style={{
                  boxShadow:
                    "0 0 8px rgba(212,175,55,0.10), inset 0 0 10px rgba(212,175,55,0.03)",
                }}
              >
                <span className="text-primary text-xs tracking-[0.3em] uppercase">
                  1 Dag
                </span>

                <div className="mt-6 mb-2">
                  <span className="font-serif text-5xl lg:text-6xl text-primary">
                    €59,95
                  </span>
                </div>

                <span className="text-stone-300 text-base md:text-lg tracking-wide">
                  per Cube
                </span>

                <div className="mt-6 h-px w-12 bg-primary/40" />

                <p className="mt-6 text-base md:text-lg text-stone-300 leading-relaxed">
                  Waarborg: €25 per Cube
                </p>

                <p className="mt-2 text-sm md:text-base text-stone-400 leading-relaxed">
                  Elke extra dag: €12,50 per Cube
                </p>

                <div className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 border-primary" />
                <div className="absolute bottom-4 right-4 w-7 h-7 border-b-2 border-r-2 border-primary" />
              </div>

              {/* WEEKEND */}
              <div
                className="relative bg-black border-2 border-primary p-12 flex flex-col items-center text-center transition-all duration-500 md:-mt-4 md:mb-[-4px]"
                style={{
                  boxShadow:
                    "0 0 12px rgba(212,175,55,0.20), inset 0 0 14px rgba(212,175,55,0.04)",
                }}
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary px-8 py-3 border border-primary min-w-[210px]">
                  <span className="inline-flex items-center justify-center gap-2 text-black text-xs md:text-sm font-semibold tracking-[0.22em] uppercase whitespace-nowrap">
                    <Sparkles className="h-4 w-4 text-black" />
                    Meest gekozen
                  </span>
                </div>

                <span className="text-primary text-sm tracking-[0.32em] uppercase mt-1">
                  Weekend
                </span>

                <div className="mt-6 mb-2">
                  <span className="font-serif text-6xl lg:text-7xl text-primary">
                    €79,95
                  </span>
                </div>

                <span className="text-stone-200 text-base md:text-lg tracking-wide">
                  per Cube
                </span>

                <div className="mt-6 h-px w-14 bg-primary/60" />

                <p className="mt-6 text-base md:text-lg text-white leading-relaxed">
                  Waarborg: €25 per Cube
                </p>

                <p className="mt-2 text-base md:text-lg text-stone-200 leading-relaxed">
                  Zaterdag levering – maandag ophaling
                </p>

                <p className="mt-2 text-sm md:text-base text-stone-400 leading-relaxed">
                  Elke extra dag: €12,50 per Cube
                </p>

                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary" />
              </div>

              {/* KOPEN */}
              <div
                className="relative bg-black border border-primary/80 p-10 flex flex-col items-center text-center transition-all duration-500 hover:border-primary"
                style={{
                  boxShadow:
                    "0 0 8px rgba(212,175,55,0.10), inset 0 0 10px rgba(212,175,55,0.03)",
                }}
              >
                <span className="text-primary text-xs tracking-[0.3em] uppercase">
                  Kopen
                </span>

                <div className="mt-6 mb-2">
                  <span className="font-serif text-5xl lg:text-6xl text-primary">
                    €999,95
                  </span>
                </div>

                <span className="text-stone-300 text-base md:text-lg tracking-wide">
                  per Cube
                </span>

                <div className="mt-6 h-px w-12 bg-primary/40" />

                <p className="mt-6 text-base md:text-lg text-stone-300 leading-relaxed">
                  Volledig afgewerkte DAIVEXO Light Cube
                  <br />
                  RGBW LED-verlichting met afstandsbediening en app, voorzien
                  van een zwarte HPL-bovenplaat van 6 mm.
                </p>

                <p className="mt-3 text-base md:text-lg text-white font-semibold">
                  Gebruiksklaar geleverd
                </p>

                <div className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 border-primary" />
                <div className="absolute bottom-4 right-4 w-7 h-7 border-b-2 border-r-2 border-primary" />
              </div>
            </div>

            {/* INBEGREPEN BIJ VERHUUR */}
            <div
              className="mt-10 relative bg-black border border-primary p-8 md:p-10 lg:p-12"
              style={{
                boxShadow:
                  "0 0 8px rgba(212,175,55,0.10), inset 0 0 10px rgba(212,175,55,0.025)",
              }}
            >
              <div className="text-center mb-9">
                <span className="text-primary text-xs tracking-[0.3em] uppercase">
                  Inbegrepen bij verhuur
                </span>

                <h4 className="font-serif text-2xl md:text-3xl mt-3 text-white">
                  Gebruiksklaar geleverd
                </h4>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {includedItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border border-primary/45 bg-black p-4 transition-colors duration-300 hover:border-primary"
                  >
                    <Check
                      className="h-5 w-5 text-primary mt-0.5 shrink-0"
                      strokeWidth={1.6}
                    />

                    <span className="text-sm md:text-base text-stone-200 leading-6">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary" />
            </div>

            {/* TRANSPORT */}
            <div
              className="mt-10 relative bg-black border border-primary p-10 lg:p-14"
              style={{
                boxShadow:
                  "0 0 8px rgba(212,175,55,0.10), inset 0 0 10px rgba(212,175,55,0.025)",
              }}
            >
              <div className="text-center mb-10">
                <span className="text-primary text-xs tracking-[0.3em] uppercase">
                  Transport
                </span>

                <h4 className="font-serif text-2xl md:text-3xl mt-3 text-white">
                  Levering &amp; ophaling
                </h4>
              </div>

              <div className="grid sm:grid-cols-3 gap-0 max-w-4xl mx-auto text-center">
                <div className="px-6 py-4">
                  <p className="text-primary font-serif text-xl">
                    0–25 km heen &amp; terug
                  </p>

                  <p className="mt-2 text-base md:text-lg text-stone-200 leading-relaxed">
                    Levering &amp; ophaling inbegrepen
                  </p>
                </div>

                <div className="px-6 py-4 sm:border-x sm:border-primary/40">
                  <p className="text-primary font-serif text-xl">
                    26–50 km heen &amp; terug
                  </p>

                  <p className="mt-2 text-base md:text-lg text-stone-200 leading-relaxed">
                    €35 transporttoeslag
                  </p>
                </div>

                <div className="px-6 py-4">
                  <p className="text-primary font-serif text-xl">
                    Meer dan 50 km heen &amp; terug
                  </p>

                  <p className="mt-2 text-base md:text-lg text-stone-200 leading-relaxed">
                    Prijs op aanvraag
                  </p>
                </div>
              </div>

              <p className="mt-8 text-center text-sm md:text-base text-stone-400">
                De afstand wordt berekend via Google Maps vanaf DAIVEXO naar
                het afleveradres en terug.
              </p>

              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary" />
            </div>

            {/* Fine print */}
            <p className="mt-10 text-center text-sm md:text-base text-stone-400 max-w-3xl mx-auto leading-relaxed">
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
          aria-label={selectedCube.alt}
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
              alt={selectedCube.alt}
              className="max-h-[82vh] max-w-[95vw] object-contain border border-primary/40 shadow-[0_0_40px_rgba(212,175,55,0.18)]"
            />

            <div className="pt-5 text-center">
              <h3 className="font-serif text-2xl md:text-3xl text-white">
                DAIVEXO — {selectedCube.title}
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