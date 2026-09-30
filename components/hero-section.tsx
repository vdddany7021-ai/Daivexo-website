"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-black text-white"
    >
      {/* HERO */}
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-28 lg:px-8 lg:pb-28 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* LOGO / BRAND IMAGE */}
          <div className="relative mx-auto w-full max-w-[460px] overflow-hidden border border-primary/20 bg-black">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/hero-bg.png"
                alt="DAIVEXO verhuur van LED statafels, staantafels en verlicht eventmeubilair"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 90vw, 460px"
              />
            </div>
          </div>

          {/* HERO TEXT */}
          <div className="max-w-2xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-primary md:text-base">
              Verlichte statafels & premium eventmeubilair
            </p>

            <h1 className="text-5xl font-semibold uppercase leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
              <span className="block text-white">LED statafels</span>
              <span className="mt-2 block text-primary">huren voor uw event</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/85 md:text-xl">
              Op zoek naar een <strong className="font-semibold text-white">statafel of staantafel om te huren</strong>?
              DAIVEXO verhuurt unieke <strong className="font-semibold text-white">LED statafels,
              verlichte staantafels en Light Cubes</strong> voor feesten, recepties,
              bedrijfsevents en evenementen. Van één lichtgevende statafel tot
              complete bars, DJ Booths en indrukwekkende Light Walls.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#daivexo-collection"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:brightness-110"
              >
                Bekijk onze statafels
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-primary/70 px-8 py-4 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-black"
              >
                Offerte voor statafels aanvragen
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* COLLECTION */}
      <div
        id="daivexo-collection"
        className="border-t border-primary/20 bg-black"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary md:text-sm">
              LED statafels & staantafels huren
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Statafels en staantafels huren voor feesten en evenementen
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/75 md:text-lg">
              Ontdek onze verlichte statafels en LED staantafels voor verhuur.
              Gebruik één Light Cube als opvallende statafel of combineer
              meerdere Light Cubes tot een complete eventsetting.
            </p>
          </div>

          {/* TWO LARGE CARDS */}
          <div className="grid gap-5 lg:grid-cols-2">

            {/* GREEN LIGHT CUBE */}
            <article className="group relative min-h-[500px] overflow-hidden rounded-[28px] border border-white/15 bg-neutral-950">
              <Image
                src="/images/light-cube-green.jpeg"
                alt="Groene LED statafel huren voor feest of evenement"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Individueel te huren
                </p>

                <h3 className="text-3xl font-semibold text-white md:text-4xl">
                  LED statafel huren
                </h3>

                <p className="mt-3 max-w-lg text-base leading-7 text-white/90">
                  Huur een unieke lichtgevende statafel of staantafel voor
                  recepties, trouwfeesten, bedrijfsfeesten en andere evenementen.
                  De DAIVEXO Light Cube combineert verlichting en eventmeubilair
                  in één opvallende statafel.
                </p>
              </div>
            </article>

            {/* BLUE COLLECTION */}
            <article className="group relative min-h-[500px] overflow-hidden rounded-[28px] border border-white/15 bg-neutral-950">
              <Image
                src="/images/light-cubes-inspiratie/light-cubes-luxe-tuin-leie-blauw.jpg"
                alt="Blauwe LED staantafels en verlichte statafels voor verhuur"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Combineer & creëer
                </p>

                <h3 className="text-3xl font-semibold text-white md:text-4xl">
                  Verlichte staantafels huren
                </h3>

                <p className="mt-3 max-w-lg text-base leading-7 text-white/90">
                  Combineer meerdere LED statafels of lichtgevende staantafels
                  voor grotere feesten, recepties en bedrijfsevents. De kleuren
                  en opstelling zorgen voor een opvallende en exclusieve eventsfeer.
                </p>
              </div>
            </article>
          </div>

          {/* THREE SMALL CARDS */}
          <div className="mt-5 grid gap-5 md:grid-cols-3">

            {/* LIGHT BAR */}
            <article className="group relative min-h-[330px] overflow-hidden rounded-[26px] border border-white/15 bg-neutral-950">
              <Image
                src="/images/light-cubes-inspiratie/bar-blauw-wit.jpg"
                alt="Verlichte LED bar huren opgebouwd uit DAIVEXO Light Cubes"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                  Eventmeubilair huren
                </p>

                <h3 className="text-2xl font-semibold text-white">
                  Verlichte LED Bar
                </h3>
              </div>
            </article>

            {/* YELLOW DJ BOOTH */}
            <article className="group relative min-h-[330px] overflow-hidden rounded-[26px] border border-white/15 bg-neutral-950">
              <Image
                src="/images/light-cubes-inspiratie/dj-geel.jpg"
                alt="Verlichte LED DJ Booth huren voor feest of evenement"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                  Feesten & evenementen
                </p>

                <h3 className="text-2xl font-semibold text-white">
                  Verlichte DJ Booth
                </h3>
              </div>
            </article>

            {/* RED LIGHT WALL */}
            <article className="group relative min-h-[330px] overflow-hidden rounded-[26px] border border-white/15 bg-neutral-950">
              <img
                src="/images/light-cubes-inspiratie/lightwall-rode-piramide.png"
                alt="Verlichte Light Wall voor feesten en evenementen opgebouwd uit LED Light Cubes"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                  Event decoratie
                </p>

                <h3 className="text-2xl font-semibold text-white">
                  Verlichte Light Wall
                </h3>
              </div>
            </article>
          </div>

          {/* SEO / COMMERCIAL SUPPORTING TEXT */}
          <div className="mx-auto mt-16 max-w-4xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Statafel huren? Kies voor een verlichte LED statafel
            </h2>

            <p className="mt-5 text-base leading-8 text-white/70 md:text-lg">
              Wilt u <strong className="font-semibold text-white">statafels huren
              of staantafels huren</strong> voor een feest, receptie,
              bedrijfsevenement of andere gelegenheid? DAIVEXO verhuurt
              moderne <strong className="font-semibold text-white">LED statafels,
              LED staantafels, lichtgevende statafels en verlichte
              staantafels</strong>. Onze Light Cubes kunnen afzonderlijk als
              statafel worden gebruikt of gecombineerd worden tot verlichte
              bars, DJ Booths en Light Walls.
            </p>

            <p className="mt-5 text-base leading-8 text-white/70 md:text-lg">
              De verlichte statafels zijn geschikt voor onder andere
              trouwfeesten, verjaardagsfeesten, recepties, bedrijfsfeesten,
              beurzen, horeca en professionele evenementen. Zo krijgt u niet
              alleen een praktische staantafel, maar ook opvallend verlicht
              eventmeubilair dat mee de sfeer van uw evenement bepaalt.
            </p>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:brightness-110"
              >
                Prijs voor statafels huren aanvragen
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
