import {
  PartyPopper,
  Briefcase,
  Martini,
  Lightbulb,
} from "lucide-react"

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
    <section className="relative bg-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.35em] uppercase">
            Voor elke gelegenheid
          </span>

          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mt-4 mb-6 text-white text-balance">
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
              className="group relative bg-black border border-primary p-10 lg:p-12 flex flex-col items-center text-center transition-all duration-500 hover:border-primary"
              style={{
                boxShadow:
                  "0 0 8px rgba(212,175,55,0.10), inset 0 0 10px rgba(212,175,55,0.025)",
              }}
            >
              {/* Icon */}
              <Icon
                className="h-12 w-12 text-primary mb-8 transition-transform duration-500 group-hover:scale-105"
                strokeWidth={1.2}
                aria-hidden="true"
              />

              <h3 className="text-primary text-base tracking-[0.3em] uppercase">
                {title}
              </h3>

              <div className="mt-6 h-px w-14 bg-primary/50" />

              <p className="mt-6 text-lg text-stone-100 leading-relaxed">
                {description}
              </p>

              {/* Scherpe gouden hoekdetails */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}