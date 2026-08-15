export default function LightCubesInspiratiePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* INTRO */}
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
          {/* LIGHT CUBE BARS */}
          <div>
            <div className="mb-10">
              <span className="text-primary text-xs tracking-[0.3em] uppercase">
                Bars
              </span>

              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4">
                Light Cube Bars
              </h2>

              <p className="mt-5 max-w-3xl text-base md:text-lg text-stone-400 leading-8">
                Creëer een opvallende drankbar met verlichte Cubes en een
                contrasterende achterwand. Dankzij de RGBW-verlichting kunnen
                kleuren en sfeer volledig worden afgestemd op het evenement.
              </p>
            </div>

            {/* HOOFDAFBEELDING */}
            <div className="relative overflow-hidden border border-primary/60 bg-black">
              <img
                src="/images/light-cubes-inspiratie/bar-warmwit-blauw.jpg"
                alt="DAIVEXO Light Cube Bar in warm wit met diepblauwe achterwand"
                className="block w-full h-auto object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-6 pb-7 pt-24 md:px-9 md:pb-9 md:pt-32">
                <span className="text-primary text-xs tracking-[0.3em] uppercase">
                  Conceptopstelling
                </span>

                <h3 className="font-serif text-2xl md:text-4xl mt-2 text-white">
                  Warm wit &amp; diepblauw
                </h3>

                <p className="mt-3 max-w-2xl text-sm md:text-base text-stone-300 leading-7">
                  Een warme, uitnodigende bar gecombineerd met een krachtige
                  diepblauwe achterwand voor een stijlvolle en luxueuze
                  eventsfeer.
                </p>
              </div>

              <div className="absolute top-4 left-4 w-9 h-9 border-t-2 border-l-2 border-primary" />
              <div className="absolute bottom-4 right-4 w-9 h-9 border-b-2 border-r-2 border-primary" />
            </div>

            {/* TWEEDE BAROPSTELLING */}
            <div className="mt-10 grid lg:grid-cols-[1.5fr_0.7fr] border border-primary/40 bg-black overflow-hidden">
              <div className="relative min-h-[320px]">
                <img
                  src="/images/light-cubes-inspiratie/bar-blauw-wit.jpg"
                  alt="DAIVEXO Light Cube Bar in blauw met witte achterwand"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/25" />

                <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-primary/80" />
              </div>

              <div className="relative flex flex-col justify-center p-8 md:p-10 lg:p-12">
                <span className="text-primary text-xs tracking-[0.3em] uppercase">
                  Conceptopstelling
                </span>

                <h3 className="font-serif text-3xl md:text-4xl mt-4">
                  Blauw &amp; helder wit
                </h3>

                <div className="mt-5 h-px w-12 bg-primary/60" />

                <p className="mt-6 text-stone-300 leading-7">
                  Een moderne combinatie waarbij een intens blauwe bar wordt
                  gecombineerd met een heldere witte achterwand. Ideaal voor
                  bedrijfsevents, moderne feesten en stijlvolle
                  avondopstellingen.
                </p>

                <p className="mt-4 text-sm text-stone-500 leading-6">
                  Kleuren kunnen aangepast worden aan de gewenste sfeer,
                  huisstijl of het thema van het evenement.
                </p>

                <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-primary/80" />
              </div>
            </div>
          </div>

          {/* SCHEIDING */}
          <div className="my-24 flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-primary/40" />
            <div className="h-2 w-2 rotate-45 bg-primary" />
            <div className="h-px w-24 bg-primary/40" />
          </div>

          {/* VOLGENDE TOEPASSINGEN */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* DJ */}
            <div className="relative border border-primary/40 bg-black p-10 min-h-[280px]">
              <span className="text-primary text-xs tracking-[0.3em] uppercase">
                DJ
              </span>

              <h2 className="font-serif text-3xl mt-4">
                DJ Booths
              </h2>

              <p className="mt-5 text-stone-400 leading-7">
                Bouw een krachtige DJ-opstelling met verlichting die volledig
                bij het thema of evenement past.
              </p>

              <p className="mt-5 text-sm text-stone-600">
                Binnenkort meer inspiratie
              </p>

              <div className="absolute top-4 left-4 w-7 h-7 border-t border-l border-primary/70" />
              <div className="absolute bottom-4 right-4 w-7 h-7 border-b border-r border-primary/70" />
            </div>

            {/* WALLS */}
            <div className="relative border border-primary/40 bg-black p-10 min-h-[280px]">
              <span className="text-primary text-xs tracking-[0.3em] uppercase">
                Walls
              </span>

              <h2 className="font-serif text-3xl mt-4">
                Light Walls
              </h2>

              <p className="mt-5 text-stone-400 leading-7">
                Stapel meerdere Cubes tot een indrukwekkende lichtwand of
                kleurrijke blikvanger.
              </p>

              <p className="mt-5 text-sm text-stone-600">
                Binnenkort meer inspiratie
              </p>

              <div className="absolute top-4 left-4 w-7 h-7 border-t border-l border-primary/70" />
              <div className="absolute bottom-4 right-4 w-7 h-7 border-b border-r border-primary/70" />
            </div>

            {/* EVENTS */}
            <div className="relative border border-primary/40 bg-black p-10 min-h-[280px]">
              <span className="text-primary text-xs tracking-[0.3em] uppercase">
                Events
              </span>

              <h2 className="font-serif text-3xl mt-4">
                Eventopstellingen
              </h2>

              <p className="mt-5 text-stone-400 leading-7">
                Combineer individuele statafels, bars, wanden en DJ-opstellingen
                tot één opvallend geheel.
              </p>

              <p className="mt-5 text-sm text-stone-600">
                Binnenkort meer inspiratie
              </p>

              <div className="absolute top-4 left-4 w-7 h-7 border-t border-l border-primary/70" />
              <div className="absolute bottom-4 right-4 w-7 h-7 border-b border-r border-primary/70" />
            </div>
          </div>

          {/* DISCLAIMER */}
          <div className="mt-20 text-center">
            <p className="text-sm md:text-base text-stone-500 max-w-3xl mx-auto leading-7">
              Conceptvisualisaties. Definitieve opstelling, kleuren, aantallen
              en beschikbaarheid kunnen variëren.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}