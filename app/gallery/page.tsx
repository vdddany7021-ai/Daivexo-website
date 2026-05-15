"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageBackground } from "@/components/page-background"
import { X, ExternalLink } from "lucide-react"
import Link from "next/link"

const artworks = [
  {
    id: 1,
    title: "Fusion X #1",
    artist: "Dany Van den Driessche",
    year: "2026",
    category: "Original Painting",
    image: "/images/fusionx1.jpeg",
  },
  {
    id: 2,
    title: "Fusion X Red Circle",
    artist: "Dany Van den Driessche",
    year: "2026",
    category: "Original Painting",
    image: "/images/fusion%20x%20abstract%20met%20rode%20volle%20cirkel.jpeg",
  },
  {
    id: 3,
    title: "Fusion X Yellow Red",
    artist: "Dany Van den Driessche",
    year: "2026",
    category: "Original Painting",
    image: "/images/fusion%20x%20abstract%20roze%20geel%20en%20rode%20stip.jpeg",
  },
  {
    id: 4,
    title: "Fusion X Blue Grey",
    artist: "Dany Van den Driessche",
    year: "2026",
    category: "Original Painting",
    image: "/images/fusion%20x%20wit%20geel%20blauw.jpeg",
  },
  {
    id: 5,
    title: "Fusion X Black White",
    artist: "Dany Van den Driessche",
    year: "2026",
    category: "Original Painting",
    image: "/images/fusion%20x%20wit%20zwart.jpeg",
  },
  {
    id: 6,
    title: "Fusion X Gold Blue",
    artist: "Dany Van den Driessche",
    year: "2026",
    category: "Original Painting",
    image: "/images/fusion%20x%20zwart%20geel%20blauw.jpeg",
  },
]

export default function GalleryPage() {
  const [selectedArtwork, setSelectedArtwork] = useState<
    (typeof artworks)[0] | null
  >(null)

  return (
    <main className="relative min-h-screen">
      <PageBackground />
      <Header />

      <section className="min-h-screen flex items-center justify-center px-6 py-32">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-20">
            <span className="text-primary text-sm tracking-[0.3em] uppercase">
              Exclusive
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
              Art Gallery
            </h1>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artworks.map((artwork) => (
              <button
                key={artwork.id}
                onClick={() => setSelectedArtwork(artwork)}
                className="group relative aspect-[4/5] bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden text-left"
              >
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/65 transition-all duration-500" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-primary text-xs tracking-[0.3em] uppercase mb-2 block">
                    {artwork.category}
                  </span>
                  <h3 className="font-serif text-2xl mb-2 text-white">
                    {artwork.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {artwork.artist}, {artwork.year}
                  </p>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <ExternalLink className="h-7 w-7 text-primary" />
                </div>

                <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-primary/30 group-hover:border-primary transition-colors duration-500" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-primary/30 group-hover:border-primary transition-colors duration-500" />
              </button>
            ))}
          </div>
        </div>
      </section>

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

            <img
              src={selectedArtwork.image}
              alt={selectedArtwork.title}
              className="w-full max-h-[520px] object-cover mb-8 border border-primary/20"
            />

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

              <Link
                href="/contact"
                onClick={() => setSelectedArtwork(null)}
                className="inline-flex items-center gap-3 mt-10 px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 tracking-widest uppercase text-sm"
              >
                Inquire About This Piece
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}