import { QrCode, Shield, Scan, Smartphone } from "lucide-react"

const features = [
  {
    icon: QrCode,
    title: "Unieke QR-code",
    description:
      "Elk label bevat een unieke QR-code die gekoppeld kan worden aan de eigenaar van het voorwerp.",
  },
  {
    icon: Scan,
    title: "Snel scannen",
    description:
      "Een vinder scant het label met de smartphone en krijgt onmiddellijk de juiste contactmogelijkheden.",
  },
  {
    icon: Smartphone,
    title: "Geen app nodig",
    description:
      "SCANMIJ werkt gewoon via de browser. De vinder hoeft niets te installeren.",
  },
  {
    icon: Shield,
    title: "Veilig & betrouwbaar",
    description:
      "Ontworpen voor verloren voorwerpen zoals sleutels, boekentassen, koffers, rugzakken, drinkflessen en waardevolle spullen.",
  },
]

const visuals = [
  {
    title: "SCANMIJ QR Sticker",
    image: "/images/scanmij-sticker.jpeg",
  },
  {
    title: "SCANMIJ Flyer",
    image: "/images/scanmij-flyer.jpeg",
  },
  {
    title: "SCANMIJ in gebruik",
    image: "/images/scanmij-in-use.jpeg",
  },
]

export function QRLabelsSection() {
  return (
    <section id="qr-labels" className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-primary to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-primary text-sm tracking-[0.3em] uppercase">
            SCANMIJ by DAIVEXO
          </span>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
            QR Labels
          </h2>

          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-primary" />
            <div className="h-2 w-2 rotate-45 bg-primary" />
            <div className="h-px w-16 bg-primary" />
          </div>

          <p className="text-muted-foreground mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
            SCANMIJ QR-labels helpen verloren voorwerpen snel terug bij de
            eigenaar te brengen. Scan de code, neem contact op en bezorg het
            voorwerp veilig terug.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {visuals.map((visual) => (
            <div
              key={visual.title}
              className="group bg-card border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden"
            >
              <div className="relative h-full w-full">
                <img
                  src={visual.image}
                  alt={visual.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="font-serif text-xl">{visual.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <feature.icon className="h-10 w-10 text-primary mb-6" />

              <h3 className="font-serif text-xl mb-4">{feature.title}</h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 tracking-widest uppercase text-sm"
          >
            Vraag info aan
          </a>
        </div>
      </div>
    </section>
  )
}