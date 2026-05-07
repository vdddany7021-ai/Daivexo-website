"use client"

import { useState } from "react"
import { X, ExternalLink } from "lucide-react"

const artworks = [
  {
    id: 1,
    title: "Golden Cipher",
    artist: "Elena Voss",
    year: "2024",
    category: "Digital Art",
  },
  {
    id: 2,
    title: "Nocturnal Fragment",
    artist: "Marcus Chen",
    year: "2024",
    category: "Photography",
  },
  {
    id: 3,
    title: "Ethereal Geometry",
    artist: "Aria Nakamura",
    year: "2023",
    category: "Abstract",
  },
  {
    id: 4,
    title: "Silent Resonance",
    artist: "Dimitri Volkov",
    year: "2024",
    category: "Mixed Media",
  },
  {
    id: 5,
    title: "Obsidian Dreams",
    artist: "Luna Blackwood",
    year: "2023",
    category: "Digital Art",
  },
  {
    id: 6,
    title: "Temporal Shift",
    artist: "James Sterling",
    year: "2024",
    category: "Photography",
  },
]

export function GallerySection() {
  const [selectedArtwork, setSelectedArtwork] = useState<
    (typeof artworks)[0] | null
  >(null)

  return (
    <section id="gallery" className="py-32 bg-secondary/30 relative">
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-primary to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-primary text-sm tracking-[0.3em] uppercase">
            Exclusive
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
            Art Gallery
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-primary" />
            <div className="h-2 w-2 rotate-45 bg-primary" />
            <div className="h-px w-16 bg-primary" />
          </div>
          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Curated collection of exclusive artworks, each authenticated and
            connected through our QR technology.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((artwork) => (
            <button
              key={artwork.id}
              onClick={() => setSelectedArtwork(artwork)}
              className="group relative aspect-[4/5] bg-card border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden text-left"
            >
              {/* Placeholder art background */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-muted via-card to-muted"
                style={{
                  backgroundImage: `
                    linear-gradient(135deg, transparent 40%, rgba(212, 175, 55, 0.05) 50%, transparent 60%),
                    radial-gradient(circle at ${30 + artwork.id * 10}% ${20 + artwork.id * 8}%, rgba(212, 175, 55, 0.08) 0%, transparent 50%)
                  `,
                }}
              />

              {/* Abstract shapes for visual interest */}
              <div
                className="absolute opacity-10"
                style={{
                  top: `${10 + artwork.id * 5}%`,
                  left: `${15 + artwork.id * 8}%`,
                  width: `${40 + artwork.id * 3}%`,
                  height: `${30 + artwork.id * 5}%`,
                  border: "1px solid currentColor",
                  transform: `rotate(${artwork.id * 15}deg)`,
                }}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6">
                <span className="text-primary text-xs tracking-[0.3em] uppercase mb-2">
                  {artwork.category}
                </span>
                <h3 className="font-serif text-2xl text-center mb-2">
                  {artwork.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {artwork.artist}, {artwork.year}
                </p>
                <ExternalLink className="h-5 w-5 text-primary mt-6" />
              </div>

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-primary/30 group-hover:border-primary transition-colors duration-500" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-primary/30 group-hover:border-primary transition-colors duration-500" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedArtwork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
          onClick={() => setSelectedArtwork(null)}
        >
          <div
            className="relative max-w-4xl w-full mx-6 p-12 bg-card border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArtwork(null)}
              className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="text-center">
              <span className="text-primary text-xs tracking-[0.3em] uppercase">
                {selectedArtwork.category}
              </span>
              <h3 className="font-serif text-4xl mt-4 mb-4">
                {selectedArtwork.title}
              </h3>
              <p className="text-muted-foreground">
                {selectedArtwork.artist}, {selectedArtwork.year}
              </p>

              <div className="flex items-center justify-center gap-4 my-8">
                <div className="h-px w-16 bg-primary" />
                <div className="h-2 w-2 rotate-45 bg-primary" />
                <div className="h-px w-16 bg-primary" />
              </div>

              <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                This exclusive piece is authenticated via DAIVEXO QR technology,
                ensuring provenance and ownership verification for collectors.
              </p>

              <a
                href="#contact"
                onClick={() => setSelectedArtwork(null)}
                className="inline-flex items-center gap-3 mt-10 px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 tracking-widest uppercase text-sm"
              >
                Inquire About This Piece
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
