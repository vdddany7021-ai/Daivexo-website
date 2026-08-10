"use client"

import { useEffect, useState } from "react"
import {
  Heart,
  Newspaper,
  Ruler,
  ShieldCheck,
  Tv,
  X,
  ZoomIn,
} from "lucide-react"

const aegisImages = [
  {
    title: "DAIVEXO AEGIS — vooraanzicht",
    image: "/images/20260624_084215.jpg",
  },
  {
    title: "DAIVEXO AEGIS — zijaanzicht",
    image: "/images/20260624_084255.jpg",
  },
  {
    title: "UV-test van het prototype",
    image: "/images/HLN UV werende test 100% geslaagd.jpeg",
  },
  {
    title: "Het verhaal in Het Laatste Nieuws",
    image: "/images/Voorpagina HLN UV werend gezichtsbescherming.jpeg",
  },
]

const highlights = [
  {
    icon: Heart,
    title: "Ontstaan uit een echte nood",
    description:
      "DAIVEXO AEGIS ontstond niet als een gewoon productidee. Het eerste prototype werd ontwikkeld voor Nora, een jong meisje met Xeroderma Pigmentosum (XP), voor wie blootstelling aan UV-straling een bijzonder ernstig risico vormt.",
  },
  {
    icon: ShieldCheck,
    title: "Bescherming als uitgangspunt",
    description:
      "Het ontwerp combineert een transparant gezichtsscherm met beschermende materialen rond hoofd, hals en nek. De constructie werd stap voor stap opgebouwd met bescherming, draagbaarheid en praktisch gebruik als centrale uitgangspunten.",
  },
  {
    icon: Ruler,
    title: "Op maat ontwikkeld",
    description:
      "Geen persoon of toepassing is exact hetzelfde. Daarom kan een AEGIS-oplossing worden afgestemd op afmetingen, pasvorm, bevestiging, beschermende delen en materiaalkeuze. Maatwerk staat centraal in het ontwikkelingsproces.",
  },
  {
    icon: Newspaper,
    title: "Nationaal in de aandacht",
    description:
      "Het bijzondere verhaal achter het prototype kreeg nationale aandacht via VTM NIEUWS en Het Laatste Nieuws. Daarbij werd niet alleen het persoonlijke verhaal verteld, maar ook getoond hoe het prototype in de praktijk werd getest.",
  },
]

export function AegisSection() {
  const [selectedImage, setSelectedImage] = useState<{
    title: string
    image: string
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
        id="aegis"
        className="relative overflow-hidden bg-black py-24 md:py-32"
      >
        {/* Subtiele achtergrondgloed */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[140px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Titel */}
          <div className="mb-16 text-center">
            <span className="text-primary text-sm tracking-[0.35em] uppercase">
              Protection • Innovation • Purpose
            </span>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 mb-5 text-white">
              DAIVEXO AEGIS
            </h2>

            <p className="font-serif text-xl md:text-2xl text-primary/90 italic">
              Born from necessity. Designed to protect.
            </p>

            <div className="mt-7 flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-primary" />
              <div className="h-2 w-2 rotate-45 bg-primary" />
              <div className="h-px w-16 bg-primary" />
            </div>
          </div>

          {/* Introverhaal */}
          <div className="mx-auto mb-20 max-w-4xl text-center">
            <p className="text-lg md:text-xl leading-9 text-stone-200">
              Sommige ontwerpen beginnen met een idee.{" "}
              <span className="text-primary">
                DAIVEXO AEGIS begon met iemand die bescherming nodig had.
              </span>
            </p>

            <p className="mt-7 text-base md:text-lg leading-8 text-stone-300">
              Het eerste prototype werd speciaal ontwikkeld voor Nora, een
              jong meisje met Xeroderma Pigmentosum (XP). Door deze zeldzame
              aandoening kan blootstelling aan UV-straling bijzonder gevaarlijk
              zijn. Gewoon buiten spelen — iets wat voor de meeste kinderen
              vanzelfsprekend is — vraagt daardoor om uitzonderlijke
              bescherming.
            </p>

            <p className="mt-6 text-base md:text-lg leading-8 text-stone-300">
              Toen bleek dat bestaande oplossingen niet voldeden aan alle
              praktische behoeften, ontstond de uitdaging om zelf een nieuwe
              oplossing te ontwikkelen. Zo groeide stap voor stap een
              beschermend gezichtssysteem waarin een transparant scherm,
              beschermende materialen en een aangepaste constructie samen één
              geheel vormen.
            </p>
          </div>

          {/* Foto's */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {aegisImages.map((item) => (
              <button
                type="button"
                key={item.title}
                onClick={() => setSelectedImage(item)}
                className="group overflow-hidden bg-card border border-primary/25 hover:border-primary/80 transition-all duration-500 cursor-zoom-in text-left"
                aria-label={`Vergroot ${item.title}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  <div className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center border border-primary/60 bg-black/70 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="h-5 w-5" />
                  </div>

                  <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-primary/40 group-hover:border-primary transition-colors duration-300" />
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-primary/40 group-hover:border-primary transition-colors duration-300" />
                </div>

                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl md:text-2xl text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-primary/80">
                    Klik om te vergroten
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Vier kernpunten */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 mb-24">
            {highlights.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="group relative bg-card border border-border hover:border-primary/60 p-8 transition-all duration-500"
                >
                  <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-primary/30 group-hover:border-primary transition-colors duration-300" />
                  <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-primary/30 group-hover:border-primary transition-colors duration-300" />

                  <Icon
                    className="h-12 w-12 text-primary mb-6"
                    strokeWidth={1.4}
                  />

                  <h3 className="font-serif text-xl md:text-2xl text-white mb-4">
                    {item.title}
                  </h3>

                  <p className="text-stone-300 leading-7">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Media */}
          <div className="relative mb-24 overflow-hidden border border-primary/30 bg-card p-10 md:p-14">
            <div className="absolute top-4 left-4 w-7 h-7 border-t border-l border-primary/50" />
            <div className="absolute bottom-4 right-4 w-7 h-7 border-b border-r border-primary/50" />

            <div className="text-center">
              <span className="text-primary text-xs tracking-[0.35em] uppercase">
                Van prototype naar nationaal nieuws
              </span>

              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4 text-white">
                Een verhaal dat verder ging dan het ontwerp
              </h3>

              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="h-px w-12 bg-primary" />
                <div className="h-2 w-2 rotate-45 bg-primary" />
                <div className="h-px w-12 bg-primary" />
              </div>

              <p className="mt-8 mx-auto max-w-3xl text-base md:text-lg leading-8 text-stone-300">
                Het verhaal achter het eerste AEGIS-prototype werd opgepikt
                door <span className="text-white">VTM NIEUWS</span> en{" "}
                <span className="text-white">Het Laatste Nieuws (HLN)</span>.
                De media-aandacht bracht niet alleen het ontwerp in beeld, maar
                vooral de reden waarom het werd gemaakt: een kind opnieuw meer
                vrijheid geven om buiten te kunnen zijn.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
                <div className="inline-flex items-center justify-center gap-3 border border-primary/40 px-7 py-4 text-stone-200">
                  <Tv className="h-5 w-5 text-primary" />
                  VTM NIEUWS
                </div>

                <div className="inline-flex items-center justify-center gap-3 border border-primary/40 px-7 py-4 text-stone-200">
                  <Newspaper className="h-5 w-5 text-primary" />
                  HET LAATSTE NIEUWS
                </div>
              </div>
            </div>
          </div>

          {/* Maatwerk */}
          <div className="grid lg:grid-cols-2 gap-10 items-stretch mb-20">
            <div className="relative border border-border bg-card p-10 md:p-12">
              <span className="text-primary text-xs tracking-[0.3em] uppercase">
                Geen standaardoplossing
              </span>

              <h3 className="font-serif text-3xl md:text-4xl mt-4 text-white">
                Op maat ontwikkeld
              </h3>

              <p className="mt-6 text-base md:text-lg leading-8 text-stone-300">
                DAIVEXO AEGIS is ontstaan vanuit maatwerk. Afmetingen,
                pasvorm, beschermende zones, bevestiging en materiaalkeuze
                kunnen worden afgestemd op de persoon en de specifieke
                toepassing.
              </p>

              <p className="mt-5 text-base md:text-lg leading-8 text-stone-300">
                Het doel is niet om één universeel masker te maken, maar om
                vanuit een concrete behoefte een passende oplossing te
                ontwikkelen.
              </p>

              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-primary/30" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-primary/30" />
            </div>

            <div
              className="relative flex items-center justify-center border border-primary/50 bg-black p-10 md:p-12 text-center"
              style={{
                boxShadow:
                  "0 0 35px -10px rgba(212,175,55,0.30), inset 0 0 50px -30px rgba(212,175,55,0.35)",
              }}
            >
              <div>
                <span className="text-primary text-xs tracking-[0.35em] uppercase">
                  DAIVEXO AEGIS
                </span>

                <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mt-5 leading-tight">
                  Bescherming begint niet
                  <br />
                  bij een product.
                  <br />
                  <span className="text-primary">
                    Ze begint bij een behoefte.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="mx-auto max-w-3xl text-sm md:text-base leading-7 text-stone-400">
              AEGIS is een ontwikkelings- en maatwerkconcept. Beschermingsniveau,
              materiaalprestaties en geschiktheid moeten per uiteindelijke
              uitvoering en toepassing worden beoordeeld en getest.
            </p>

            <a
              href="#contact"
              className="mt-9 inline-flex items-center justify-center px-10 py-5 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 tracking-[0.2em] uppercase text-sm"
            >
              Informeer naar maatwerk
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