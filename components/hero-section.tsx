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
                alt="DAIVEXO - Forever Modern. Forever Secure."
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
              Premium illuminated event furniture
            </p>

            <h1 className="text-5xl font-semibold uppercase leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
              <span className="block text-white">Light up</span>
              <span className="mt-2 block text-primary">your event.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/85 md:text-xl">
              Verlichte statafels en premium eventmeubilair met een unieke
              uitstraling. Van één DAIVEXO Light Cube tot complete bars,
              DJ Booths en indrukwekkende Light Walls.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#daivexo-collection"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:brightness-110"
              >
                Ontdek de collectie
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-primary/70 px-8 py-4 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-black"
              >
                Offerte aanvragen
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
              The DAIVEXO Collection
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Van stijlvolle statafel tot complete eventsetting
            </h2>
          </div>

          {/* TWO LARGE CARDS */}
          <div className="grid gap-5 lg:grid-cols-2">

            {/* GREEN LIGHT CUBE */}
            <article className="group relative min-h-[500px] overflow-hidden rounded-[28px] border border-white/15 bg-neutral-950">
              <Image
                src="/images/light-cube-green.jpeg"
                alt="Groene DAIVEXO Light Cube gebruikt als lichtgevende statafel op een evenement"
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
                  Light Cube
                </h3>

                <p className="mt-3 max-w-lg text-base leading-7 text-white/90">
                  Een volwaardige lichtgevende statafel voor recepties,
                  feesten en events.
                </p>
              </div>
            </article>

            {/* BLUE COLLECTION */}
            <article className="group relative min-h-[500px] overflow-hidden rounded-[28px] border border-white/15 bg-neutral-950">
              <Image
                src="/images/light-cubes-inspiratie/light-cubes-luxe-tuin-leie-blauw.jpg"
                alt="Meerdere blauwe DAIVEXO LED Light Cubes op een luxe evenementlocatie"
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
                  Light Cube Collection
                </h3>

                <p className="mt-3 max-w-lg text-base leading-7 text-white/90">
                  Meerdere verlichte statafels combineren voor een krachtige
                  en exclusieve eventsfeer.
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
                alt="DAIVEXO verlichte LED bar opgebouwd met Light Cubes"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                  Hospitality
                </p>

                <h3 className="text-2xl font-semibold text-white">
                  Light Bar
                </h3>
              </div>
            </article>

            {/* YELLOW DJ BOOTH */}
            <article className="group relative min-h-[330px] overflow-hidden rounded-[26px] border border-white/15 bg-neutral-950">
              <Image
                src="/images/light-cubes-inspiratie/dj-geel.jpg"
                alt="Gele DAIVEXO verlichte DJ Booth voor evenementen"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                  Entertainment
                </p>

                <h3 className="text-2xl font-semibold text-white">
                  DJ Booth
                </h3>
              </div>
            </article>

            {/* RED LIGHT WALL */}
            <article className="group relative min-h-[330px] overflow-hidden rounded-[26px] border border-white/15 bg-neutral-950">
              <Image
                src="/images/light-cubes-inspiratie/lightwall-rode-piramide.png"
                alt="Rode DAIVEXO Light Wall in piramidevorm opgebouwd uit verlichte Light Cubes"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                  Visual Impact
                </p>

                <h3 className="text-2xl font-semibold text-white">
                  Light Wall
                </h3>
              </div>
            </article>
          </div>

          {/* SEO / COMMERCIAL SUPPORTING TEXT */}
          <div className="mx-auto mt-16 max-w-4xl text-center">
            <p className="text-base leading-8 text-white/70 md:text-lg">
              DAIVEXO creëert premium{" "}
              <strong className="font-semibold text-white">
                verlichte statafels, LED Light Cubes, lichtgevende bars,
                DJ Booths en eventwanden
              </strong>{" "}
              voor privéfeesten, recepties, bedrijfsevents en professionele
              evenementen.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}