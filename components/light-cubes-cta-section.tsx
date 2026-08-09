export function LightCubesCtaSection() {
  return (
    <section id="reserveren" className="py-32 bg-background relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-primary to-transparent" />

      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="relative bg-card border border-primary/40 p-12 lg:p-20 text-center">
          <span className="text-primary text-sm tracking-[0.3em] uppercase">DAIVEXO Light Cubes</span>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 mb-6 text-balance">
            Klaar om je event te laten oplichten?
          </h2>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-primary" />
            <div className="h-2 w-2 rotate-45 bg-primary" />
            <div className="h-px w-16 bg-primary" />
          </div>

          <p className="text-base md:text-lg text-stone-300 leading-relaxed max-w-2xl mx-auto text-pretty">
            Reserveer jouw DAIVEXO Light Cubes voor je feest, evenement of bedrijf.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              className="w-full sm:w-auto px-10 py-4 bg-primary text-primary-foreground text-sm tracking-[0.2em] uppercase transition-opacity duration-300 hover:opacity-90"
            >
              Reserveren
            </button>
            <button
              type="button"
              className="w-full sm:w-auto px-10 py-4 border border-primary text-primary text-sm tracking-[0.2em] uppercase transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              Offerte aanvragen
            </button>
          </div>

          <p className="mt-8 text-base text-stone-400 leading-relaxed">
            Meerdere Cubes nodig? Vraag vrijblijvend naar de mogelijkheden.
          </p>

          <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-primary/50" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-primary/50" />
        </div>
      </div>
    </section>
  )
}
