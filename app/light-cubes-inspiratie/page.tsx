"use client"

import { useEffect, useState } from "react"
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
} from "lucide-react"

const galleryImages = [
  // STATAFELS
  {
    src: "/images/light-cube-yellow.jpeg",
    alt: "DAIVEXO Light Cube statafel geel",
  },
  {
    src: "/images/light-cube-blue.jpeg",
    alt: "DAIVEXO Light Cube statafel blauw",
  },
  {
    src: "/images/light-cube-warm-white.jpeg",
    alt: "DAIVEXO Light Cube statafel warm wit",
  },

  // BARS
  {
    src: "/images/light-cubes-inspiratie/bar-warmwit-blauw.jpg",
    alt: "DAIVEXO Light Cube Bar warm wit met diepblauwe achterwand",
  },
  {
    src: "/images/light-cubes-inspiratie/bar-blauw-wit.jpg",
    alt: "DAIVEXO Light Cube Bar blauw met witte achterwand",
  },
  {
    src: "/images/light-cubes-inspiratie/bar-wit-rood.jpg",
    alt: "DAIVEXO Light Cube Bar wit met rode achterwand",
  },

  // DJ BOOTHS
  {
    src: "/images/light-cubes-inspiratie/dj-warmwit.jpg",
    alt: "DAIVEXO Light Cube DJ Booth warm wit",
  },
  {
    src: "/images/light-cubes-inspiratie/dj-blauw.jpg",
    alt: "DAIVEXO Light Cube DJ Booth blauw",
  },
  {
    src: "/images/light-cubes-inspiratie/dj-geel.jpg",
    alt: "DAIVEXO Light Cube DJ Booth geel",
  },

  // LIGHT WALLS
  {
    src: "/images/light-cubes-inspiratie/lightwall-multicolor.jpg",
    alt: "DAIVEXO Light Wall in verschillende RGBW kleuren",
  },
  {
    src: "/images/light-cubes-inspiratie/lightwall-blauw.jpg",
    alt: "DAIVEXO Light Wall volledig blauw verlicht",
  },
  {
    src: "/images/light-cubes-inspiratie/lightwall-groen.jpg",
    alt: "DAIVEXO Light Wall volledig groen verlicht",
  },

  // TUIN & OUTDOOR
  {
    src: "/images/light-cubes-inspiratie/light-cubes-luxe-tuin-leie-blauw.jpg",
    alt: "DAIVEXO Light Cubes in blauw in een luxe moderne tuin aan de Leie",
  },
  {
    src: "/images/light-cubes-inspiratie/light-cubes-luxe-tuin-geel.jpg",
    alt: "DAIVEXO Light Cubes in geel in een exclusieve moderne tuin",
  },
  {
    src: "/images/light-cubes-inspiratie/light-cubes-tuin-standbeelden-warm-wit.jpg",
    alt: "DAIVEXO Light Cubes warm wit naast standbeelden in een luxe tuin",
  },
]

export default function LightCubesInspiratiePage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openImage = (index: number) => {
    setSelectedIndex(index)
  }

  const closeImage = () => {
    setSelectedIndex(null)
  }

  const showPreviousImage = () => {
    setSelectedIndex((current) => {
      if (current === null) return null

      return current === 0
        ? galleryImages.length - 1
        : current - 1
    })
  }

  const showNextImage = () => {
    setSelectedIndex((current) => {
      if (current === null) return null

      return current === galleryImages.length - 1
        ? 0
        : current + 1
    })
  }

  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeImage()
      }

      if (event.key === "ArrowLeft") {
        showPreviousImage()
      }

      if (event.key === "ArrowRight") {
        showNextImage()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [selectedIndex])

  const selectedImage =
    selectedIndex !== null ? galleryImages[selectedIndex] : null

  return (
    <>
      <main className="min-h-screen bg-black text-white">
        {/* INTRO */}
        <section className="px-6 pt-28 pb-24 md:pt-32 md:pb-32">
          <div className="mx-auto max-w-7xl">
            {/* TERUG KNOP */}
            <div className="mb-14">
              <a
                href="/#light-cubes"
                className="group inline-flex items-center justify-center gap-3 border-2 border-primary bg-primary px-7 py-4 text-sm md:text-base font-bold uppercase tracking-[0.16em] text-black shadow-[0_0_25px_rgba(212,175,55,0.25)] transition-all duration-300 hover:bg-black hover:text-primary hover:shadow-[0_0_40px_rgba(212,175,55,0.45)]"
              >
                <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
                Terug naar Light Cubes
              </a>
            </div>

            <div className="mx-auto max-w-6xl text-center">
              <span className="text-primary text-sm tracking-[0.35em] uppercase">
                DAIVEXO LIGHT CUBES
              </span>

              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mt-5">
                Ontdek de mogelijkheden
              </h1>

              <p className="mt-6 font-serif text-2xl md:text-3xl text-primary/90 italic">
                Eén Cube. Eindeloos veel toepassingen.
              </p>

              <div className="flex items-center justify-center gap-4 mt-8">
                <div className="h-px w-16 bg-primary" />
                <div className="h-2 w-2 rotate-45 bg-primary" />
                <div className="h-px w-16 bg-primary" />
              </div>

              <p className="mt-10 mx-auto max-w-3xl text-lg md:text-xl leading-8 text-stone-300">
                Van stijlvolle statafels en complete bars tot DJ-booths,
                indrukwekkende verlichte wanden en exclusieve toepassingen in
                tuin en buitenruimte. Met DAIVEXO Light Cubes creëer je sfeer,
                structuur en licht op maat van iedere setting.
              </p>

              <p className="mt-5 mx-auto max-w-3xl text-base md:text-lg leading-8 text-stone-500">
                Ontdek verschillende opstellingen, kleurcombinaties en
                toepassingen voor feesten, bedrijfsevents, horeca én
                permanente plaatsing in een moderne tuin of buitenomgeving.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 md:pb-32">
          <div className="mx-auto max-w-7xl">

            {/* ===================================================== */}
            {/* STATAFELS */}
            {/* ===================================================== */}
            <section>
              <div className="mb-10">
                <span className="text-primary text-sm md:text-base tracking-[0.3em] uppercase font-semibold">
                  Statafels
                </span>

                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4">
                  Light Cube Statafels
                </h2>

                <p className="mt-5 max-w-3xl text-base md:text-lg text-stone-400 leading-8">
                  Gebruik individuele Light Cubes als opvallende statafels en
                  ontmoetingspunten. Dankzij de RGBW-verlichting kan de kleur
                  worden afgestemd op de sfeer, huisstijl of het thema van het
                  evenement.
                </p>
              </div>

              <button
                type="button"
                onClick={() => openImage(0)}
                className="group relative block w-full overflow-hidden border border-primary/60 bg-black text-left cursor-zoom-in"
              >
                <img
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  className="block w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/65 to-transparent px-6 pb-7 pt-28 md:px-10 md:pb-10 md:pt-40">
                  <span className="text-primary text-xs tracking-[0.3em] uppercase">
                    Light Cube Statafel
                  </span>

                  <h3 className="font-serif text-2xl md:text-4xl mt-2">
                    Helder geel
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm md:text-base text-stone-300 leading-7">
                    Een warme en opvallende kleur die meteen sfeer brengt en
                    de Light Cube tot een herkenbaar ontmoetingspunt maakt.
                  </p>
                </div>

                <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center border border-primary bg-black/75 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ZoomIn className="h-5 w-5" />
                </div>

                <div className="absolute top-4 left-4 w-9 h-9 border-t-2 border-l-2 border-primary" />
                <div className="absolute bottom-4 right-4 w-9 h-9 border-b-2 border-r-2 border-primary" />
              </button>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <button
                  type="button"
                  onClick={() => openImage(1)}
                  className="group relative overflow-hidden border border-primary/40 bg-black text-left cursor-zoom-in"
                >
                  <img
                    src={galleryImages[1].src}
                    alt={galleryImages[1].alt}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-6 pb-6 pt-20">
                    <span className="text-primary text-xs tracking-[0.25em] uppercase">
                      Light Cube Statafel
                    </span>

                    <h3 className="font-serif text-2xl md:text-3xl mt-2">
                      Intens blauw
                    </h3>
                  </div>

                  <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-primary bg-black/75 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ZoomIn className="h-5 w-5" />
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => openImage(2)}
                  className="group relative overflow-hidden border border-primary/40 bg-black text-left cursor-zoom-in"
                >
                  <img
                    src={galleryImages[2].src}
                    alt={galleryImages[2].alt}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-6 pb-6 pt-20">
                    <span className="text-primary text-xs tracking-[0.25em] uppercase">
                      Light Cube Statafel
                    </span>

                    <h3 className="font-serif text-2xl md:text-3xl mt-2">
                      Warm wit
                    </h3>
                  </div>

                  <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-primary bg-black/75 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ZoomIn className="h-5 w-5" />
                  </div>
                </button>
              </div>
            </section>

            <div className="my-24 flex items-center justify-center gap-4">
              <div className="h-px w-24 bg-primary/40" />
              <div className="h-2 w-2 rotate-45 bg-primary" />
              <div className="h-px w-24 bg-primary/40" />
            </div>

            {/* BARS */}
            <section>
              <div className="mb-10">
                <span className="text-primary text-sm md:text-base tracking-[0.3em] uppercase font-semibold">
                  Bars
                </span>

                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4">
                  Light Cube Bars
                </h2>

                <p className="mt-5 max-w-3xl text-base md:text-lg text-stone-400 leading-8">
                  Van een compacte drankbar tot een volledige professionele
                  eventbar. Combineer verschillende kleuren tussen bar en
                  achterwand en creëer een totaal andere sfeer voor ieder
                  evenement.
                </p>
              </div>

              <button
                type="button"
                onClick={() => openImage(3)}
                className="group relative block w-full overflow-hidden border border-primary/60 bg-black text-left cursor-zoom-in"
              >
                <img
                  src={galleryImages[3].src}
                  alt={galleryImages[3].alt}
                  className="block w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-6 pb-7 pt-28 md:px-10 md:pb-10 md:pt-40">
                  <span className="text-primary text-xs tracking-[0.3em] uppercase">
                    Light Cube Bar
                  </span>

                  <h3 className="font-serif text-2xl md:text-4xl mt-2">
                    Warm wit &amp; diepblauw
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm md:text-base text-stone-300 leading-7">
                    Een stijlvolle combinatie met een warme,
                    uitnodigende bar en een krachtige blauwe achterwand.
                  </p>
                </div>

                <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center border border-primary bg-black/75 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ZoomIn className="h-5 w-5" />
                </div>

                <div className="absolute top-4 left-4 w-9 h-9 border-t-2 border-l-2 border-primary" />
                <div className="absolute bottom-4 right-4 w-9 h-9 border-b-2 border-r-2 border-primary" />
              </button>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <button
                  type="button"
                  onClick={() => openImage(4)}
                  className="group relative overflow-hidden border border-primary/40 bg-black text-left cursor-zoom-in"
                >
                  <img
                    src={galleryImages[4].src}
                    alt={galleryImages[4].alt}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-6 pb-6 pt-20">
                    <span className="text-primary text-xs tracking-[0.25em] uppercase">
                      Conceptopstelling
                    </span>

                    <h3 className="font-serif text-2xl md:text-3xl mt-2">
                      Blauw &amp; helder wit
                    </h3>
                  </div>

                  <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-primary bg-black/75 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ZoomIn className="h-5 w-5" />
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => openImage(5)}
                  className="group relative overflow-hidden border border-primary/40 bg-black text-left cursor-zoom-in"
                >
                  <img
                    src={galleryImages[5].src}
                    alt={galleryImages[5].alt}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-6 pb-6 pt-20">
                    <span className="text-primary text-xs tracking-[0.25em] uppercase">
                      Conceptopstelling
                    </span>

                    <h3 className="font-serif text-2xl md:text-3xl mt-2">
                      Helder wit &amp; rood
                    </h3>
                  </div>

                  <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-primary bg-black/75 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ZoomIn className="h-5 w-5" />
                  </div>
                </button>
              </div>
            </section>

            <div className="my-24 flex items-center justify-center gap-4">
              <div className="h-px w-24 bg-primary/40" />
              <div className="h-2 w-2 rotate-45 bg-primary" />
              <div className="h-px w-24 bg-primary/40" />
            </div>

            {/* DJ */}
            <section>
              <div className="mb-10">
                <span className="text-primary text-sm md:text-base tracking-[0.3em] uppercase font-semibold">
                  DJ
                </span>

                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4">
                  DJ Booths
                </h2>

                <p className="mt-5 max-w-3xl text-base md:text-lg text-stone-400 leading-8">
                  Maak van de DJ zelf een onderdeel van de lichtbeleving.
                  Verschillende Cubes vormen samen een opvallende
                  DJ-booth die volledig kan worden afgestemd op de gewenste
                  sfeer.
                </p>
              </div>

              <button
                type="button"
                onClick={() => openImage(6)}
                className="group relative block w-full overflow-hidden border border-primary/60 bg-black text-left cursor-zoom-in"
              >
                <img
                  src={galleryImages[6].src}
                  alt={galleryImages[6].alt}
                  className="block w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/65 to-transparent px-6 pb-7 pt-28 md:px-10 md:pb-10 md:pt-40">
                  <span className="text-primary text-xs tracking-[0.3em] uppercase">
                    DJ Booth
                  </span>

                  <h3 className="font-serif text-2xl md:text-4xl mt-2">
                    Warm wit
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm md:text-base text-stone-300 leading-7">
                    Een elegante en warme uitvoering die bijzonder goed
                    past bij stijlvolle feesten, recepties en
                    avondconcepten.
                  </p>
                </div>

                <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center border border-primary bg-black/75 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ZoomIn className="h-5 w-5" />
                </div>

                <div className="absolute top-4 left-4 w-9 h-9 border-t-2 border-l-2 border-primary" />
                <div className="absolute bottom-4 right-4 w-9 h-9 border-b-2 border-r-2 border-primary" />
              </button>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <button
                  type="button"
                  onClick={() => openImage(7)}
                  className="group relative overflow-hidden border border-primary/40 bg-black text-left cursor-zoom-in"
                >
                  <img
                    src={galleryImages[7].src}
                    alt={galleryImages[7].alt}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-6 pb-6 pt-20">
                    <span className="text-primary text-xs tracking-[0.25em] uppercase">
                      DJ Booth
                    </span>

                    <h3 className="font-serif text-2xl md:text-3xl mt-2">
                      Intens blauw
                    </h3>
                  </div>

                  <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-primary bg-black/75 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ZoomIn className="h-5 w-5" />
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => openImage(8)}
                  className="group relative overflow-hidden border border-primary/40 bg-black text-left cursor-zoom-in"
                >
                  <img
                    src={galleryImages[8].src}
                    alt={galleryImages[8].alt}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-6 pb-6 pt-20">
                    <span className="text-primary text-xs tracking-[0.25em] uppercase">
                      DJ Booth
                    </span>

                    <h3 className="font-serif text-2xl md:text-3xl mt-2">
                      Helder geel
                    </h3>
                  </div>

                  <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-primary bg-black/75 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ZoomIn className="h-5 w-5" />
                  </div>
                </button>
              </div>
            </section>

            <div className="my-24 flex items-center justify-center gap-4">
              <div className="h-px w-24 bg-primary/40" />
              <div className="h-2 w-2 rotate-45 bg-primary" />
              <div className="h-px w-24 bg-primary/40" />
            </div>

            {/* WALLS */}
            <section>
              <div className="mb-10">
                <span className="text-primary text-sm md:text-base tracking-[0.3em] uppercase font-semibold">
                  Walls
                </span>

                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4">
                  Light Walls
                </h2>

                <p className="mt-5 max-w-3xl text-base md:text-lg text-stone-400 leading-8">
                  Stapel meerdere Light Cubes tot een grote verlichte wand.
                  Ideaal als decoratieve blikvanger, achtergrond,
                  afscherming of onderdeel van een complete eventsetting.
                </p>
              </div>

              <button
                type="button"
                onClick={() => openImage(9)}
                className="group relative block w-full overflow-hidden border border-primary/60 bg-black text-left cursor-zoom-in"
              >
                <img
                  src={galleryImages[9].src}
                  alt={galleryImages[9].alt}
                  className="block w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/65 to-transparent px-6 pb-7 pt-28 md:px-10 md:pb-10 md:pt-40">
                  <span className="text-primary text-xs tracking-[0.3em] uppercase">
                    Light Wall
                  </span>

                  <h3 className="font-serif text-2xl md:text-4xl mt-2">
                    Multicolor lichtshow
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm md:text-base text-stone-300 leading-7">
                    Meerdere kleuren in één opstelling creëren een
                    indrukwekkend lichtspektakel en laten de mogelijkheden
                    van RGBW-verlichting maximaal tot hun recht komen.
                  </p>
                </div>

                <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center border border-primary bg-black/75 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ZoomIn className="h-5 w-5" />
                </div>

                <div className="absolute top-4 left-4 w-9 h-9 border-t-2 border-l-2 border-primary" />
                <div className="absolute bottom-4 right-4 w-9 h-9 border-b-2 border-r-2 border-primary" />
              </button>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <button
                  type="button"
                  onClick={() => openImage(10)}
                  className="group relative overflow-hidden border border-primary/40 bg-black text-left cursor-zoom-in"
                >
                  <img
                    src={galleryImages[10].src}
                    alt={galleryImages[10].alt}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-6 pb-6 pt-20">
                    <span className="text-primary text-xs tracking-[0.25em] uppercase">
                      Light Wall
                    </span>

                    <h3 className="font-serif text-2xl md:text-3xl mt-2">
                      Volledig blauw
                    </h3>
                  </div>

                  <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-primary bg-black/75 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ZoomIn className="h-5 w-5" />
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => openImage(11)}
                  className="group relative overflow-hidden border border-primary/40 bg-black text-left cursor-zoom-in"
                >
                  <img
                    src={galleryImages[11].src}
                    alt={galleryImages[11].alt}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-6 pb-6 pt-20">
                    <span className="text-primary text-xs tracking-[0.25em] uppercase">
                      Light Wall
                    </span>

                    <h3 className="font-serif text-2xl md:text-3xl mt-2">
                      Volledig groen
                    </h3>
                  </div>

                  <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-primary bg-black/75 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ZoomIn className="h-5 w-5" />
                  </div>
                </button>
              </div>
            </section>

            <div className="my-24 flex items-center justify-center gap-4">
              <div className="h-px w-24 bg-primary/40" />
              <div className="h-2 w-2 rotate-45 bg-primary" />
              <div className="h-px w-24 bg-primary/40" />
            </div>

            {/* TUIN & OUTDOOR */}
            <section>
              <div className="mb-10">
                <span className="text-primary text-sm md:text-base tracking-[0.3em] uppercase font-semibold">
                  Tuin &amp; Outdoor
                </span>

                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4">
                  Light Cubes voor buiten
                </h2>

                <p className="mt-5 max-w-3xl text-base md:text-lg text-stone-300 leading-8">
  DAIVEXO Light Cubes zijn niet alleen geschikt voor events.
  Ook in een exclusieve tuin, langs een terras, bij een
  wandelpad of aan het water vormen ze een opvallend
  lichtobject met een moderne architecturale uitstraling.
</p>

                <p className="mt-4 max-w-3xl text-base md:text-lg text-stone-300 leading-8">
                  Deze toepassingen tonen hoe Light Cubes permanent kunnen
                  worden geïntegreerd in een buitenomgeving. Ook verkrijgbaar
                  voor aankoop en permanente plaatsing in tuin, terras of
                  buitenruimte.
                </p>
              </div>

              <button
                type="button"
                onClick={() => openImage(12)}
                className="group relative block w-full overflow-hidden border border-primary/60 bg-black text-left cursor-zoom-in"
              >
                <img
                  src={galleryImages[12].src}
                  alt={galleryImages[12].alt}
                  className="block w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/65 to-transparent px-6 pb-7 pt-28 md:px-10 md:pb-10 md:pt-40">
                  <span className="text-primary text-xs tracking-[0.3em] uppercase">
                    Tuin &amp; Outdoor
                  </span>

                  <h3 className="font-serif text-2xl md:text-4xl mt-2">
                    Luxe tuin aan het water
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm md:text-base text-stone-300 leading-7">
                    Blauwe Light Cubes creëren een krachtig contrast met de
                    warme tuinverlichting en geven een exclusieve buitenruimte
                    een moderne, luxueuze uitstraling.
                  </p>
                </div>

                <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center border border-primary bg-black/75 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ZoomIn className="h-5 w-5" />
                </div>

                <div className="absolute top-4 left-4 w-9 h-9 border-t-2 border-l-2 border-primary" />
                <div className="absolute bottom-4 right-4 w-9 h-9 border-b-2 border-r-2 border-primary" />
              </button>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <button
                  type="button"
                  onClick={() => openImage(13)}
                  className="group relative overflow-hidden border border-primary/40 bg-black text-left cursor-zoom-in"
                >
                  <img
                    src={galleryImages[13].src}
                    alt={galleryImages[13].alt}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-6 pb-6 pt-20">
                    <span className="text-primary text-xs tracking-[0.25em] uppercase">
                      Tuin &amp; Outdoor
                    </span>

                    <h3 className="font-serif text-2xl md:text-3xl mt-2">
                      Exclusief geel
                    </h3>

                    <p className="mt-3 text-sm md:text-base text-stone-300 leading-7">
                      Een warme, uitgesproken kleur voor moderne tuinen,
                      terrassen en architecturale buitenruimtes.
                    </p>
                  </div>

                  <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-primary bg-black/75 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ZoomIn className="h-5 w-5" />
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => openImage(14)}
                  className="group relative overflow-hidden border border-primary/40 bg-black text-left cursor-zoom-in"
                >
                  <img
                    src={galleryImages[14].src}
                    alt={galleryImages[14].alt}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-6 pb-6 pt-20">
                    <span className="text-primary text-xs tracking-[0.25em] uppercase">
                      Tuin &amp; Outdoor
                    </span>

                    <h3 className="font-serif text-2xl md:text-3xl mt-2">
                      Warm wit &amp; kunst
                    </h3>

                    <p className="mt-3 text-sm md:text-base text-stone-300 leading-7">
                      Warm wit licht laat kunstobjecten, sculpturen en
                      bijzondere tuinelementen extra tot hun recht komen.
                    </p>
                  </div>

                  <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-primary bg-black/75 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ZoomIn className="h-5 w-5" />
                  </div>
                </button>
              </div>

              <div className="mt-10 border border-primary/35 bg-primary/[0.03] px-6 py-7 md:px-8">
                <p className="text-center text-base md:text-lg text-stone-300 leading-8">
                  <span className="font-semibold text-primary">
                    Ook te koop voor permanente plaatsing.
                  </span>{" "}
                  Vraag naar de mogelijkheden voor jouw tuin, terras,
                  buitenruimte of project.
                </p>
              </div>
            </section>

            {/* SLOT CTA */}
            <div className="mt-28 border border-primary/50 bg-black px-6 py-14 md:px-12 md:py-16 text-center">
              <span className="text-primary text-xs tracking-[0.3em] uppercase">
                Opstelling op maat
              </span>

              <h2 className="mt-4 font-serif text-3xl md:text-5xl">
                Een eigen idee in gedachten?
              </h2>

              <p className="mt-6 mx-auto max-w-3xl text-base md:text-lg text-stone-400 leading-8">
                Van enkele Light Cubes tot een volledige bar, DJ-booth,
                indrukwekkende lichtwand of permanente toepassing in tuin en
                buitenruimte. Huur en aankoop kunnen worden afgestemd op jouw
                project, beschikbare ruimte en gewenste kleurbeleving.
              </p>

              <a
                href="/#contact"
                className="mt-9 inline-flex items-center justify-center border-2 border-primary bg-primary px-10 py-5 text-base md:text-lg font-bold uppercase tracking-[0.16em] text-black transition-all duration-300 hover:bg-black hover:text-primary"
              >
                Vraag uw Light Cubes aan
              </a>
            </div>

            {/* DISCLAIMER */}
            <div className="mt-14 text-center">
              <p className="text-sm md:text-base text-stone-500 max-w-3xl mx-auto leading-7">
                De getoonde beelden zijn conceptvisualisaties ter
                illustratie van mogelijke toepassingen. Definitieve
                opstelling, kleuren, aantallen en beschikbaarheid kunnen
                variëren.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FULLSCREEN GALERIJ */}
      {selectedImage && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-3 md:p-8"
          onClick={closeImage}
          role="dialog"
          aria-modal="true"
          aria-label="DAIVEXO Light Cubes fotogalerij"
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              closeImage()
            }}
            className="absolute right-4 top-4 md:right-8 md:top-8 z-30 flex h-14 w-14 items-center justify-center border-2 border-primary bg-black text-primary shadow-[0_0_25px_rgba(212,175,55,0.35)] transition-all duration-300 hover:bg-primary hover:text-black"
            aria-label="Afbeelding sluiten"
          >
            <X className="h-8 w-8" strokeWidth={1.8} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              showPreviousImage()
            }}
            className="absolute left-3 md:left-8 top-1/2 z-30 flex h-14 w-14 md:h-16 md:w-16 -translate-y-1/2 items-center justify-center border-2 border-primary bg-black/85 text-primary shadow-[0_0_25px_rgba(212,175,55,0.25)] transition-all duration-300 hover:bg-primary hover:text-black"
            aria-label="Vorige afbeelding"
          >
            <ChevronLeft className="h-8 w-8 md:h-10 md:w-10" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              showNextImage()
            }}
            className="absolute right-3 md:right-8 top-1/2 z-30 flex h-14 w-14 md:h-16 md:w-16 -translate-y-1/2 items-center justify-center border-2 border-primary bg-black/85 text-primary shadow-[0_0_25px_rgba(212,175,55,0.25)] transition-all duration-300 hover:bg-primary hover:text-black"
            aria-label="Volgende afbeelding"
          >
            <ChevronRight className="h-8 w-8 md:h-10 md:w-10" />
          </button>

          <div
            className="relative flex h-full w-full items-center justify-center px-14 md:px-24"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[90vh] max-w-[92vw] object-contain border border-primary/40 shadow-[0_0_50px_rgba(212,175,55,0.18)]"
            />
          </div>

          <div
            className="absolute bottom-5 left-1/2 z-30 -translate-x-1/2 border border-primary/60 bg-black/85 px-5 py-2 text-sm md:text-base font-semibold tracking-[0.18em] text-primary"
            onClick={(event) => event.stopPropagation()}
          >
            {selectedIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </>
  )
}