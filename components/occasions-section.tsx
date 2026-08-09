const occasions = [
  {
    title: "FEESTEN",
    description: "Verjaardagen • tuinfeesten • communies",
  },
  {
    title: "BEDRIJFSEVENTS",
    description: "Recepties • openingen • netwerkevents",
  },
  {
    title: "HORECA",
    description: "Terrassen • pop-ups • tijdelijke bars",
  },
  {
    title: "EVENEMENTEN",
    description: "Festivals • VIP-zones • beurzen",
  },
]

export function OccasionsSection() {
  return (
    <section id="occasions" className="py-32 bg-background relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-primary text-sm tracking-[0.3em] uppercase">Voor elke gelegenheid</span>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">Een blikvanger voor elk event</h2>

          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-primary" />
            <div className="h-2 w-2 rotate-45 bg-primary" />
            <div className="h-px w-16 bg-primary" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {occasions.map((occasion) => (
            <div
              key={occasion.title}
              className="relative bg-card border border-border p-10 flex flex-col items-center text-center transition-colors duration-500 hover:border-primary/50"
            >
              <h3 className="text-primary text-sm tracking-[0.3em] uppercase">{occasion.title}</h3>
              <div className="mt-6 h-px w-12 bg-primary/30" />
              <p className="mt-6 text-base md:text-lg text-stone-300 leading-relaxed">{occasion.description}</p>
              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-primary/30" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-primary/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
