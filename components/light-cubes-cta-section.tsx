import { Calendar, FileText } from "lucide-react"

export function LightCubesCtaSection() {
  return (
    <section id="reserveren" className="py-32 bg-background relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-primary to-transparent" />

      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div
          className="relative overflow-hidden bg-card border border-primary/70 rounded-sm p-16 lg:p-24 text-center"
          style={{
            boxShadow:
              "0 0 0 1px oklch(0.78 0.12 85 / 0.25), 0 0 44px -4px oklch(0.78 0.12 85 / 0.35), inset 0 0 64px -20px oklch(0.78 0.12 85 / 0.4)",
          }}
        >
          {/* Subtle geometric gold pattern */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(oklch(0.78 0.12 85) 1px, transparent 1px), linear-gradient(90deg, oklch(0.78 0.12 85) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />

          {/* Bright light accents on the border */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent opacity-80" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

          <div className="relative">
            <span className="text-primary text-sm tracking-[0.3em] uppercase">DAIVEXO Light Cubes</span>

            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mt-4 mb-6 text-balance">
              Klaar om je event te laten <span className="text-primary">oplichten?</span>
            </h2>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-primary" />
              <div className="h-2 w-2 rotate-45 bg-primary" />
              <div className="h-px w-16 bg-primary" />
            </div>

            <p className="text-lg md:text-xl text-stone-200 leading-relaxed max-w-2xl mx-auto text-pretty">
              Reserveer jouw DAIVEXO Light Cubes voor je feest, evenement of bedrijf.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
              <button
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 bg-primary text-primary-foreground text-sm tracking-[0.2em] uppercase transition-opacity duration-300 hover:opacity-90"
              >
                <Calendar className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                Reserveren
              </button>
              <button
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 bg-background border border-primary text-primary text-sm tracking-[0.2em] uppercase transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                <FileText className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                Offerte aanvragen
              </button>
            </div>

            <p className="mt-10 text-base md:text-lg text-stone-400 leading-relaxed">
              Meerdere Cubes nodig? Vraag vrijblijvend naar de mogelijkheden.
            </p>
          </div>

          {/* Elegant gold corner details */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-primary/70" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-primary/70" />
        </div>
      </div>
    </section>
  )
}
