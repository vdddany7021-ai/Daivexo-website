"use client"

import { ArrowRight, MoveDown } from "lucide-react"
import Image from "next/image"

const collection = [
  {
    title: "Light Cube",
    subtitle: "Individuele statafel",
    image: "/images/light-cube-green.jpeg",
    tone: "bg-emerald-500",
  },
  {
    title: "Light Cube Collection",
    subtitle: "Samen vormt het sfeer",
    image: "/images/light-cubes-inspiratie/light-cubes-luxe-tuin-leie-blauw.jpg",
    tone: "bg-blue-500",
  },
  {
    title: "Light Bar",
    subtitle: "Licht dat uitnodigt",
    image: "/images/light-cubes-inspiratie/bar-blauw-wit.jpg",
    tone: "bg-sky-400",
  },
  {
    title: "DJ Booth",
    subtitle: "Het ritme van de nacht",
    image: "/images/light-cubes-inspiratie/dj-geel.jpg",
    tone: "bg-amber-400",
  },
  {
    title: "Light Wall",
    subtitle: "Piramide van licht",
    image: "/images/light-cubes-inspiratie/bar-wit-rood.jpg",
    tone: "bg-red-500",
  },
]

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-background text-foreground">
      <div className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-[1440px] flex-col justify-between gap-16 px-6 pb-10 pt-20 sm:px-10 lg:px-16 lg:pt-24">
        <div className="grid flex-1 items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden border border-border bg-card p-8 sm:min-h-[380px] lg:min-h-[500px]">
            <Image
              src="/images/hero-bg.png"
              alt="DAIVEXO lichtobject"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover opacity-75"
            />
            <div className="absolute inset-0 bg-background/25" />
            <div className="relative z-10 text-center">
              <p className="font-serif text-4xl tracking-[0.28em] text-primary sm:text-5xl">DAIVEXO</p>
              <p className="mt-3 text-[10px] uppercase tracking-[0.42em] text-foreground/70">Forever modern</p>
            </div>
            <span className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.3em] text-foreground/60">Est. 2020</span>
          </div>

          <div className="max-w-2xl">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.38em] text-primary">Premium event lighting</p>
            <h1 className="max-w-xl font-serif text-5xl leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
              LIGHT UP
              <br />
              YOUR EVENT.
            </h1>
            <p className="mt-8 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
              Maak van elk moment een ervaring. DAIVEXO verhuurt iconische lichtobjecten die sfeer, stijl en samenzijn naar een hoger niveau tillen.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#light-cubes" className="inline-flex items-center justify-center gap-3 bg-primary px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-transform hover:-translate-y-1">
                Ontdek de collectie <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center border border-border px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:border-primary hover:text-primary">
                Offerte aanvragen
              </a>
            </div>
          </div>
        </div>

        <div id="collection" className="border-t border-border pt-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-primary">Select your atmosphere</p>
              <h2 className="mt-2 font-serif text-3xl tracking-tight sm:text-4xl">THE DAIVEXO COLLECTION</h2>
            </div>
            <MoveDown className="mb-1 hidden h-5 w-5 text-primary sm:block" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {collection.map((item) => (
              <a href="#light-cubes" key={item.title} className="group relative aspect-[1.15] overflow-hidden bg-card">
                <Image src={item.image} alt={`${item.title} — ${item.subtitle}`} fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/10 to-transparent" />
                <span className={`absolute left-3 top-3 h-2 w-2 rounded-full ${item.tone}`} aria-hidden="true" />
                <div className="absolute inset-x-3 bottom-3">
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-foreground/65">{item.subtitle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
