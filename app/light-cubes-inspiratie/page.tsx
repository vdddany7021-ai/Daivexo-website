export default function LightCubesInspiratiePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 py-24 md:py-32">
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
            Van stijlvolle statafels en complete bars tot DJ-booths en
            indrukwekkende verlichte wanden. Met DAIVEXO Light Cubes kunnen
            uiteenlopende eventopstellingen worden gecreëerd.
          </p>

          <p className="mt-5 mx-auto max-w-3xl text-base md:text-lg leading-8 text-stone-500">
            De onderstaande toepassingen dienen als inspiratie en tonen wat er
            mogelijk is met verschillende aantallen, kleuren en opstellingen.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative border border-primary/40 bg-black p-10 min-h-[260px]">
              <span className="text-primary text-xs tracking-[0.3em] uppercase">
                Bars
              </span>
              <h2 className="font-serif text-3xl mt-4">
                Light Cube Bars
              </h2>
              <p className="mt-4 text-stone-400 leading-7">
                Creëer een opvallende drankbar met verlichte Cubes en een
                contrasterende achterwand.
              </p>
            </div>

            <div className="relative border border-primary/40 bg-black p-10 min-h-[260px]">
              <span className="text-primary text-xs tracking-[0.3em] uppercase">
                DJ
              </span>
              <h2 className="font-serif text-3xl mt-4">
                DJ Booths
              </h2>
              <p className="mt-4 text-stone-400 leading-7">
                Bouw een krachtige DJ-opstelling met verlichting die volledig
                bij het thema of evenement past.
              </p>
            </div>

            <div className="relative border border-primary/40 bg-black p-10 min-h-[260px]">
              <span className="text-primary text-xs tracking-[0.3em] uppercase">
                Walls
              </span>
              <h2 className="font-serif text-3xl mt-4">
                Light Walls
              </h2>
              <p className="mt-4 text-stone-400 leading-7">
                Stapel meerdere Cubes tot een indrukwekkende lichtwand of
                kleurrijke blikvanger.
              </p>
            </div>

            <div className="relative border border-primary/40 bg-black p-10 min-h-[260px]">
              <span className="text-primary text-xs tracking-[0.3em] uppercase">
                Events
              </span>
              <h2 className="font-serif text-3xl mt-4">
                Eventopstellingen
              </h2>
              <p className="mt-4 text-stone-400 leading-7">
                Combineer individuele statafels, bars, wanden en DJ-opstellingen
                tot één geheel.
              </p>
            </div>
          </div>

          <div className="mt-20 text-center">
            <p className="text-sm md:text-base text-stone-500">
              Conceptvisualisaties. Definitieve opstelling, kleuren en
              beschikbaarheid kunnen variëren.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}