"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Sun,
  X,
} from "lucide-react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageBackground } from "@/components/page-background"

const projectImages = [
  {
    id: 1,
    src: "/images/uv-masker-1.jpeg",
    alt: "Vooraanzicht van het UV-werende gezichtsmasker",
    title: "Het afgewerkte ontwerp",
    description:
      "Het volledig afgewerkte UV-werende gezichtsmasker, speciaal ontworpen om het gezicht, de hals en de nek zo volledig mogelijk te beschermen.",
  },
  {
    id: 2,
    src: "/images/uv-masker-2.jpeg",
    alt: "Zijaanzicht van het UV-werende gezichtsmasker",
    title: "Volledige bescherming",
    description:
      "De combinatie van een transparant gezichtsscherm en UV-werende stof zorgt voor een ruime beschermingszone rond het hoofd.",
  },
  {
    id: 3,
    src: "/images/uv-masker-3.jpeg",
    alt: "Detail van het transparante UV-werende scherm",
    title: "Transparant gezichtsscherm",
    description:
      "Het heldere scherm werd gekozen om bescherming te combineren met voldoende zicht en draagcomfort.",
  },
  {
    id: 4,
    src: "/images/uv-masker-4.jpeg",
    alt: "Detail van de bevestiging met Chicago screws",
    title: "Stevige bevestiging",
    description:
      "Het gezichtsscherm is met Chicago screws aan de verstevigde klep bevestigd voor een stevige en betrouwbare montage.",
  },
  {
    id: 5,
    src: "/images/uv-masker-5.jpeg",
    alt: "UV-werende bescherming rond hals en nek",
    title: "Bescherming van hals en nek",
    description:
      "De UV-werende stof sluit rondom aan en biedt niet alleen bescherming aan het gezicht, maar ook aan de hals en nek.",
  },
  {
    id: 6,
    src: "/images/uv-masker-6.jpeg",
    alt: "Detail van de afwerking van het gezichtsmasker",
    title: "Ontwikkeld op maat",
    description:
      "Elk onderdeel werd zorgvuldig gezocht, getest, aangepast en samengebracht tot één praktisch ontwerp op maat.",
  },
]

const features = [
  {
    icon: Sun,
    title: "UV-werende materialen",
    description:
      "Het ontwerp combineert een helder beschermend gezichtsscherm met UV-werende stof rond het hoofd, de hals en de nek.",
  },
  {
    icon: ShieldCheck,
    title: "Verstevigde constructie",
    description:
      "De klep werd verstevigd en het scherm werd met Chicago screws stevig aan het ontwerp bevestigd.",
  },
  {
    icon: ShieldCheck,
    title: "Volledige omsluiting",
    description:
      "Het masker werd ontwikkeld om zo weinig mogelijk onbeschermde openingen rond het gezicht en de nek over te laten.",
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<
    (typeof projectImages)[number] | null
  >(null)

  const showPreviousImage = () => {
    if (!selectedImage) return

    const currentIndex = projectImages.findIndex(
      (image) => image.id === selectedImage.id
    )

    const previousIndex =
      currentIndex === 0 ? projectImages.length - 1 : currentIndex - 1

    setSelectedImage(projectImages[previousIndex])
  }

  const showNextImage = () => {
    if (!selectedImage) return

    const currentIndex = projectImages.findIndex(
      (image) => image.id === selectedImage.id
    )

    const nextIndex =
      currentIndex === projectImages.length - 1 ? 0 : currentIndex + 1

    setSelectedImage(projectImages[nextIndex])
  }

  return (
    <main className="relative min-h-screen">
      <PageBackground />
      <Header />

      <section className="px-6 pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-sm uppercase tracking-[0.3em] text-primary">
              Een bijzonder project
            </span>

            <h1 className="mt-4 font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
              UV-werend gezichtsmasker
            </h1>

            <div className="mt-7 flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-primary" />
              <div className="h-2 w-2 rotate-45 bg-primary" />
              <div className="h-px w-16 bg-primary" />
            </div>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Een volledig op maat ontwikkeld gezichtsmasker voor Nora, met als
              doel haar gezicht, hals en nek zo goed mogelijk tegen schadelijke
              uv-straling te beschermen.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <button
            type="button"
            onClick={() => setSelectedImage(projectImages[0])}
            className="group relative aspect-[4/3] overflow-hidden border border-border bg-card text-left"
            aria-label="Open foto van het afgewerkte UV-masker"
          >
            <Image
              src="/images/uv-masker-1.jpeg"
              alt="Het afgewerkte UV-werende gezichtsmasker"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <span className="text-xs uppercase tracking-[0.25em] text-primary">
                Ontwerp op maat
              </span>
              <p className="mt-2 font-serif text-2xl text-foreground">
                Van eerste idee tot afgewerkt masker
              </p>
            </div>

            <div className="absolute left-5 top-5 h-8 w-8 border-l border-t border-primary" />
            <div className="absolute bottom-5 right-5 h-8 w-8 border-b border-r border-primary" />
          </button>

          <div>
            <span className="text-sm uppercase tracking-[0.25em] text-primary">
              Ontwikkeling en uitvoering
            </span>

            <h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">
              Een oplossing waar geen standaardproduct voor bestond
            </h2>

            <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
              <p>
                Dit gezichtsmasker werd speciaal ontwikkeld voor Nora, een jong
                meisje met Xeroderma Pigmentosum. Voor haar is een zeer
                verregaande bescherming tegen uv-straling noodzakelijk.
              </p>

              <p>
                Omdat een geschikt, comfortabel en volledig beschermend
                standaardmasker moeilijk te vinden was, werd het ontwerp volledig
                van nul opgebouwd. Daarbij werden verschillende materialen,
                bevestigingsmethoden en uitvoeringen onderzocht en getest.
              </p>

              <p>
                Het uiteindelijke ontwerp bestaat uit een pet met een verstevigde
                klep, een transparant beschermend gezichtsscherm en UV-werende
                stof die rondom het hoofd doorloopt en ook de hals en nek
                beschermt.
              </p>

              <p>
                Het gezichtsscherm werd uitsluitend met Chicago screws aan het
                uiteinde van de verstevigde klep bevestigd. Extra verstevigingen
                helpen voorkomen dat de stof uitscheurt of dat de bevestigingen
                na verloop van tijd door het onderliggende materiaal schuiven.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/40 px-6 py-20 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.title}
                  className="border border-border bg-background/40 p-8 transition-colors duration-300 hover:border-primary/50"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center border border-primary/50">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="font-serif text-2xl">{feature.title}</h3>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="text-sm uppercase tracking-[0.3em] text-primary">
              Fotogalerij
            </span>

            <h2 className="mt-4 font-serif text-3xl md:text-5xl">
              Het ontwerp in detail
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted-foreground">
              Bekijk de verschillende onderdelen, de bevestiging en de
              beschermende afwerking van het masker.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectImages.map((image) => (
              <button
                type="button"
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="group relative aspect-[4/5] overflow-hidden border border-border bg-card text-left transition-all duration-500 hover:border-primary/60"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/15 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="text-xs uppercase tracking-[0.25em] text-primary">
                    Detail {image.id}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl text-foreground">
                    {image.title}
                  </h3>
                </div>

                <div className="absolute left-4 top-4 h-7 w-7 border-l border-t border-primary/60" />
                <div className="absolute bottom-4 right-4 h-7 w-7 border-b border-r border-primary/60" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-5xl border border-primary/30 bg-card/60 px-8 py-14 text-center backdrop-blur-sm md:px-14">
          <span className="text-sm uppercase tracking-[0.3em] text-primary">
            DAIVEXO Project
          </span>

          <h2 className="mt-4 font-serif text-3xl md:text-4xl">
            Ontstaan uit betrokkenheid en doorzettingsvermogen
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-muted-foreground">
            Aan dit project gingen vele uren van opzoekwerk, ontwerpen,
            materiaalkeuze, testen en aanpassen vooraf. Verschillende materialen
            en onderdelen bleken uiteindelijk niet bruikbaar, maar elke stap
            bracht het ontwerp dichter bij een praktisch en afgewerkt resultaat.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center justify-center border border-primary px-8 py-4 text-sm uppercase tracking-widest text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            Neem contact op
          </Link>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative grid max-h-[92vh] w-full max-w-6xl overflow-hidden border border-border bg-card lg:grid-cols-[1.4fr_0.6fr]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center border border-border bg-background/80 text-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Sluiten"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative min-h-[55vh] bg-background lg:min-h-[75vh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-contain"
              />

              <button
                type="button"
                onClick={showPreviousImage}
                className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-border bg-background/80 transition-colors hover:border-primary hover:text-primary"
                aria-label="Vorige foto"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                type="button"
                onClick={showNextImage}
                className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-border bg-background/80 transition-colors hover:border-primary hover:text-primary"
                aria-label="Volgende foto"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-col justify-center p-8 md:p-10">
              <span className="text-xs uppercase tracking-[0.3em] text-primary">
                UV-masker project
              </span>

              <h3 className="mt-4 font-serif text-3xl">
                {selectedImage.title}
              </h3>

              <div className="my-6 flex items-center gap-3">
                <div className="h-px w-12 bg-primary" />
                <div className="h-2 w-2 rotate-45 bg-primary" />
              </div>

              <p className="leading-relaxed text-muted-foreground">
                {selectedImage.description}
              </p>

              <p className="mt-8 text-sm text-muted-foreground">
                Foto {selectedImage.id} van {projectImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}