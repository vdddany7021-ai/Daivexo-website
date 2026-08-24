"use client"

import Image from "next/image"
import { ArrowDown, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(184,134,55,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.10),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-28 sm:px-8 lg:px-10 lg:pt-32">

        {/* HERO */}
        <div className="grid items-center gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">

          {/* DAIVEXO LOGO */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[380px]">
              <Image
                src="/images/hero-bg.png"
                alt="DAIVEXO - Forever Modern. Forever Secure."
                width={1000}
                height={1000}
                priority
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          {/* HERO TEXT */}
          <div className="text-center lg:text-left">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.38em] text-amber-400 sm:text-sm">
              Premium illuminated event furniture
            </p>

            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              LIGHT UP
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-200 bg-clip-text text-transparent">
                YOUR EVENT.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg lg:mx-0">
              Verlichte statafels en premium eventmeubilair met een unieke
              uitstraling. Van één DAIVEXO Light Cube tot complete bars,
              DJ Booths en indrukwekkende Light Walls.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#light-cubes"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-300 px-7 py-3.5 text-sm font-semibold text-black transition duration-300 hover:scale-[1.03]"
              >
                Ontdek de collectie
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-amber-400/50 px-7 py-3.5 text-sm font-medium text-amber-200 transition duration-300 hover:border-amber-300 hover:bg-amber-400/10"
              >
                Offerte aanvragen
              </a>
            </div>
          </div>
        </div>

        {/* COLLECTIE TITEL */}
        <div className="mb-8 mt-20 text-center lg:mt-28">
          <p className="text-xs uppercase tracking-[0.36em] text-amber-400">
            The DAIVEXO Collection
          </p>

          <h2 className="mt-3 text-2xl font-medium sm:text-3xl">
            Van stijlvolle statafel tot complete eventsetting
          </h2>
        </div>

        {/* HOOFDBEELDEN */}
        <div className="grid gap-5 lg:grid-cols-2">

          {/* LIGHT CUBE */}
          <a
            href="#light-cubes"
            className="group relative min-h-[430px] overflow-hidden rounded-[28px] border border-white/10 bg-zinc-950 sm:min-h-[520px]"
          >
            <Image
              src="/images/light-cube-green.jpeg"
              alt="Groene DAIVEXO Light Cube als lichtgevende statafel"
              fill
              className="object-cover transition duration-700 group-hover:scale-[1.035]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-300">
                Individueel te huren
              </p>

              <h3 className="mt-2 text-3xl font-semibold">
                Light Cube
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-zinc-300">
                Een volwaardige lichtgevende statafel voor recepties,
                feesten en events.
              </p>
            </div>
          </a>

          {/* MEERDERE LIGHT CUBES */}
          <a
            href="#light-cubes"
            className="group relative min-h-[430px] overflow-hidden rounded-[28px] border border-white/10 bg-zinc-950 sm:min-h-[520px]"
          >
            <Image
              src="/images/light-cubes-inspiratie/light-cubes-luxe-tuin-leie-blauw.jpg"
              alt="Meerdere blauwe DAIVEXO Light Cubes op luxe eventlocatie"
              fill
              className="object-cover transition duration-700 group-hover:scale-[1.035]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-300">
                Combineer & creëer
              </p>

              <h3 className="mt-2 text-3xl font-semibold">
                Light Cube Collection
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-zinc-300">
                Meerdere verlichte statafels combineren voor een krachtige
                en exclusieve eventsfeer.
              </p>
            </div>
          </a>
        </div>

        {/* BAR / DJ / WALL */}
        <div className="mt-5 grid gap-5 md:grid-cols-3">

          {/* LIGHT BAR */}
          <a
            href="#light-cubes"
            className="group relative min-h-[360px] overflow-hidden rounded-[26px] border border-white/10 bg-zinc-950"
          >
            <Image
              src="/images/light-cubes-inspiratie/bar-blauw-wit.jpg"
              alt="DAIVEXO verlichte Light Bar"
              fill
              className="object-cover transition duration-700 group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />

            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-amber-300">
                Hospitality
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                Light Bar
              </h3>
            </div>
          </a>

          {/* DJ BOOTH */}
          <a
            href="#light-cubes"
            className="group relative min-h-[360px] overflow-hidden rounded-[26px] border border-white/10 bg-zinc-950"
          >
            <Image
              src="/images/light-cubes-inspiratie/dj-blauw.jpg"
              alt="DAIVEXO verlichte DJ Booth"
              fill
              className="object-cover transition duration-700 group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />

            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-amber-300">
                Entertainment
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                DJ Booth
              </h3>
            </div>
          </a>

          {/* LIGHT WALL */}
          <a
            href="#light-cubes"
            className="group relative min-h-[360px] overflow-hidden rounded-[26px] border border-white/10 bg-zinc-950"
          >
            <Image
              src="/images/light-cubes-inspiratie/lightwall-multicolor.jpg"
              alt="Multicolor DAIVEXO Light Wall"
              fill
              className="object-cover transition duration-700 group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />

            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-amber-300">
                Visual Impact
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                Light Wall
              </h3>
            </div>
          </a>
        </div>

        {/* SEO TEKST */}
        <div className="mx-auto mt-16 max-w-4xl border-t border-white/10 pt-10 text-center">
          <p className="text-sm leading-7 text-zinc-400 sm:text-base">
            DAIVEXO creëert premium{" "}
            <strong className="font-medium text-zinc-200">
              verlichte statafels, LED Light Cubes, lichtgevende bars,
              DJ Booths en eventwanden
            </strong>{" "}
            voor privéfeesten, bedrijfsevents, recepties en evenementen.
            Onze Light Cubes combineren sfeerverlichting met functioneel
            eventmeubilair.
          </p>
        </div>

        {/* SCROLL */}
        <div className="mt-14 flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.32em] text-zinc-600">
            Ontdek meer
          </span>

          <ArrowDown className="h-4 w-4 animate-bounce text-amber-400" />
        </div>

      </div>
    </section>
  )
}