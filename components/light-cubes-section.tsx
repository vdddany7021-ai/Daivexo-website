const lightCubes = [
  {
    id: 1,
    color: "Green",
    image: "/images/light-cube-green.jpeg",
  },
  {
    id: 2,
    color: "Yellow",
    image: "/images/light-cube-yellow.jpeg",
  },
  {
    id: 3,
    color: "Blue",
    image: "/images/light-cube-blue.jpeg",
  },
  {
    id: 4,
    color: "Warm White",
    image: "/images/light-cube-warm-white.jpeg",
  },
]

export function LightCubesSection() {
  return (
    <section id="light-cubes" className="py-32 bg-background relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-primary to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-primary text-sm tracking-[0.3em] uppercase">
            Illuminated IBC Event Furniture
          </span>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
            DAIVEXO Light Cubes
          </h2>

          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-primary" />
            <div className="h-2 w-2 rotate-45 bg-primary" />
            <div className="h-px w-16 bg-primary" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {lightCubes.map((cube) => (
            <div
              key={cube.id}
              className="group relative aspect-[4/3] bg-card border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden"
            >
              <img
                src={cube.image || "/placeholder.svg"}
                alt={`DAIVEXO Light Cube - ${cube.color} LED`}
                className="absolute inset-0 h-full w-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-primary text-xs tracking-[0.3em] uppercase block">
                  {cube.color} LED
                </span>
              </div>

              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-primary/30 group-hover:border-primary transition-colors duration-500" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-primary/30 group-hover:border-primary transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
