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
            Ontdek verschillende mogelijke opstellingen, kleurcombinaties en
            toepassingen voor feesten, bedrijfsevents, horeca en evenementen.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl">
          {/* ===================================================== */}
          {/* LIGHT CUBE BARS */}
          {/* ===================================================== */}
          <section>
            <div className="mb-10">
              <span className="text-primary text-xs tracking-[0.3em] uppercase">
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

            {/* Hoofdbeeld bar */}
            <div className="relative overflow-hidden border border-primary/60 bg-black">
              <img
                src="/images/light-cubes-inspiratie/bar-warmwit-blauw.jpg"
                alt="DAIVEXO Light Cube Bar warm wit met diepblauwe achterwand"
                className="block w-full h-auto object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-6 pb-7 pt-28 md:px-10 md:pb-10 md:pt-40">
                <span className="text-primary text-xs tracking-[0.3em] uppercase">
                  Light Cube Bar
                </span>

                <h3 className="font-serif text-2xl md:text-4xl mt-2">
                  Warm wit &amp; diepblauw
                </h3>

                <p className="mt-3 max-w-2xl text-sm md:text-base text-stone-300 leading-7">
                  Een stijlvolle combinatie met een warme, uitnodigende bar en
                  een krachtige blauwe achterwand.
                </p>
              </div>

              <div className="absolute top-4 left-4 w-9 h-9 border-t-2 border-l-2 border-primary" />
              <div className="absolute bottom-4 right-4 w-9 h-9 border-b-2 border-r-2 border-primary" />
            </div>

            {/* Twee aanvullende bars */}
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div className="group relative overflow-hidden border border-primary/40 bg-black">
                <img
                  src="/images/light-cubes-inspiratie/bar-blauw-wit.jpg"
                  alt="DAIVEXO Light Cube Bar blauw met witte achterwand"
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
              </div>

              <div className="group relative overflow-hidden border border-primary/40 bg-black">
                <img
                  src="/images/light-cubes-inspiratie/bar-wit-rood.jpg"
                  alt="DAIVEXO Light Cube Bar wit met rode achterwand"
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
              </div>
            </div>
          </section>

          {/* SCHEIDING */}
          <div className="my-24 flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-primary/40" />
            <div className="h-2 w-2 rotate-45 bg-primary" />
            <div className="h-px w-24 bg-primary/40" />
          </div>

          {/* ===================================================== */}
          {/* DJ BOOTHS */}
          {/* ===================================================== */}
          <section>
            <div className="mb-10">
              <span className="text-primary text-xs tracking-[0.3em] uppercase">
                DJ
              </span>

              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4">
                DJ Booths
              </h2>

              <p className="mt-5 max-w-3xl text-base md:text-lg text-stone-400 leading-8">
                Maak van de DJ zelf een onderdeel van de lichtbeleving.
                Verschillende Cubes vormen samen een opvallende DJ-booth die
                volledig kan worden afgestemd op de gewenste sfeer.
              </p>
            </div>

            {/* Hoofdbeeld DJ */}
            <div className="relative overflow-hidden border border-primary/60 bg-black">
              <img
                src="/images/light-cubes-inspiratie/dj-warmwit.jpg"
                alt="DAIVEXO Light Cube DJ Booth warm wit"
                className="block w-full h-auto object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/65 to-transparent px-6 pb-7 pt-28 md:px-10 md:pb-10 md:pt-40">
                <span className="text-primary text-xs tracking-[0.3em] uppercase">
                  DJ Booth
                </span>

                <h3 className="font-serif text-2xl md:text-4xl mt-2">
                  Warm wit
                </h3>

                <p className="mt-3 max-w-2xl text-sm md:text-base text-stone-300 leading-7">
                  Een elegante en warme uitvoering die bijzonder goed past bij
                  stijlvolle feesten, recepties en avondconcepten.
                </p>
              </div>

              <div className="absolute top-4 left-4 w-9 h-9 border-t-2 border-l-2 border-primary" />
              <div className="absolute bottom-4 right-4 w-9 h-9 border-b-2 border-r-2 border-primary" />
            </div>

            {/* Twee aanvullende DJ beelden */}
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div className="group relative overflow-hidden border border-primary/40 bg-black">
                <img
                  src="/images/light-cubes-inspiratie/dj-blauw.jpg"
                  alt="DAIVEXO Light Cube DJ Booth blauw"
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
              </div>

              <div className="group relative overflow-hidden border border-primary/40 bg-black">
                <img
                  src="/images/light-cubes-inspiratie/dj-geel.jpg"
                  alt="DAIVEXO Light Cube DJ Booth geel"
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
              </div>
            </div>
          </section>

          {/* SCHEIDING */}
          <div className="my-24 flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-primary/40" />
            <div className="h-2 w-2 rotate-45 bg-primary" />
            <div className="h-px w-24 bg-primary/40" />
          </div>

          {/* ===================================================== */}
          {/* LIGHT WALLS */}
          {/* ===================================================== */}
          <section>
            <div className="mb-10">
              <span className="text-primary text-xs tracking-[0.3em] uppercase">
                Walls
              </span>

              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4">
                Light Walls
              </h2>

              <p className="mt-5 max-w-3xl text-base md:text-lg text-stone-400 leading-8">
                Stapel meerdere Light Cubes tot een grote verlichte wand.
                Ideaal als decoratieve blikvanger, achtergrond, afscherming of
                onderdeel van een complete eventsetting.
              </p>
            </div>

            {/* Hoofdbeeld Wall */}
            <div className="relative overflow-hidden border border-primary/60 bg-black">
              <img
                src="/images/light-cubes-inspiratie/lightwall-multicolor.jpg"
                alt="DAIVEXO Light Wall in verschillende RGBW kleuren"
                className="block w-full h-auto object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/65 to-transparent px-6 pb-7 pt-28 md:px-10 md:pb-10 md:pt-40">
                <span className="text-primary text-xs tracking-[0.3em] uppercase">
                  Light Wall
                </span>

                <h3 className="font-serif text-2xl md:text-4xl mt-2">
                  Multicolor lichtshow
                </h3>

                <p className="mt-3 max-w-2xl text-sm md:text-base text-stone-300 leading-7">
                  Meerdere kleuren in één opstelling creëren een indrukwekkend
                  lichtspektakel en laten de mogelijkheden van RGBW-verlichting
                  maximaal tot hun recht komen.
                </p>
              </div>

              <div className="absolute top-4 left-4 w-9 h-9 border-t-2 border-l-2 border-primary" />
              <div className="absolute bottom-4 right-4 w-9 h-9 border-b-2 border-r-2 border-primary" />
            </div>

            {/* Twee aanvullende walls */}
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div className="group relative overflow-hidden border border-primary/40 bg-black">
                <img
                  src="/images/light-cubes-inspiratie/lightwall-blauw.jpg"
                  alt="DAIVEXO Light Wall volledig blauw verlicht"
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
              </div>

              <div className="group relative overflow-hidden border border-primary/40 bg-black">
                <img
                  src="/images/light-cubes-inspiratie/lightwall-groen.jpg"
                  alt="DAIVEXO Light Wall volledig groen verlicht"
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
              </div>
            </div>
          </section>

          {/* ===================================================== */}
          {/* SLOT CTA */}
          {/* ===================================================== */}
          <div className="mt-28 border border-primary/50 bg-black px-6 py-14 md:px-12 md:py-16 text-center">
            <span className="text-primary text-xs tracking-[0.3em] uppercase">
              Opstelling op maat
            </span>

            <h2 className="mt-4 font-serif text-3xl md:text-5xl">
              Een eigen idee in gedachten?
            </h2>

            <p className="mt-6 mx-auto max-w-3xl text-base md:text-lg text-stone-400 leading-8">
              Van enkele Light Cubes tot een volledige bar, DJ-booth of
              indrukwekkende lichtwand. De opstelling kan worden afgestemd op
              het type evenement, de beschikbare ruimte en de gewenste
              kleurbeleving.
            </p>

            <a
              href="/#contact"
              className="mt-9 inline-flex items-center justify-center border-2 border-primary bg-primary px-10 py-5 text-base md:text-lg font-bold uppercase tracking-[0.16em] text-black transition-all duration-300 hover:bg-black hover:text-primary"
            >
              Vraag uw opstelling aan
            </a>
          </div>

          {/* DISCLAIMER */}
          <div className="mt-14 text-center">
            <p className="text-sm md:text-base text-stone-500 max-w-3xl mx-auto leading-7">
              De getoonde beelden zijn conceptvisualisaties ter illustratie van
              mogelijke toepassingen. Definitieve opstelling, kleuren,
              aantallen en beschikbaarheid kunnen variëren.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}