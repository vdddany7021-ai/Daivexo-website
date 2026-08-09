import { PartyPopper, Briefcase, Martini, Lightbulb } from "lucide-react"

const occasions = [
  {
    title: "FEESTEN",
    description: "Verjaardagen • tuinfeesten • communies",
    Icon: PartyPopper,
  },
  {
    title: "BEDRIJFSEVENTS",
    description: "Recepties • openingen • netwerkevents",
    Icon: Briefcase,
  },
  {
    title: "HORECA",
    description: "Terrassen • pop-ups • tijdelijke bars",
    Icon: Martini,
  },
  {
    title: "EVENEMENTEN",
    description: "Festivals • VIP-zones • beurzen",
    Icon: Lightbulb,
  },
]

export function OccasionsSection() {
  return (
    <section id="occasions" className="py-32 bg-background relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-primary text-sm tracking-[0.3em] uppercase">Voor elke gelegenheid</span>

          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mt-4 mb-6 text-balance">
            Een blikvanger voor elk event
          </h2>

          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-primary" />
            <div className="h-2 w-2 rotate-45 bg-primary" />
            <div className="h-px w-16 bg-primary" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {occasions.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="group relative bg-card border border-primary/60 rounded-sm p-12 lg:p-14 flex flex-col items-center text-center transition-all duration-500 hover:border-primary"
              style={{
                boxShadow:
                  "0 0 0 1px oklch(0.78 0.12 85 / 0.2), 0 0 26px -2px oklch(0.78 0.12 85 / 0.3), inset 0 0 34px -12px oklch(0.78 0.12 85 / 0.4)",
              }}
            >
              {/* Icon */}
              <Icon
                className="h-12 w-12 text-primary mb-8 transition-transform duration-500 group-hover:scale-105"
                strokeWidth={1}
                aria-hidden="true"
              />

              <h3 className="text-primary text-base tracking-[0.3em] uppercase">{title}</h3>
              <div className="mt-6 h-px w-14 bg-primary/40" />
              <p className="mt-6 text-lg text-stone-200 leading-relaxed">{description}</p>

              {/* Bright light accents on the border */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent opacity-80" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

              {/* Elegant gold corner details */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-primary/70 transition-colors duration-500 group-hover:border-primary" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-primary/70 transition-colors duration-500 group-hover:border-primary" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
