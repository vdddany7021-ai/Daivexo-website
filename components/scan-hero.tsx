"use client"

import Link from "next/link"

export function ScanHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Decorative gold lines */}
      <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute top-1/4 right-0 w-32 h-px bg-gradient-to-l from-transparent via-primary to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-32 h-px bg-gradient-to-l from-transparent via-primary to-transparent" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Decorative element */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-primary" />
          <div className="h-2 w-2 rotate-45 border border-primary" />
          <div className="h-px w-16 bg-primary" />
        </div>

        {/* Main headline */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight mb-6">
          <span className="block text-foreground">FOUND IT?</span>
          <span className="block text-primary mt-2">SCAN</span>
        </h1>

        {/* Subtext */}
        <p className="text-muted-foreground text-lg md:text-xl tracking-wide max-w-2xl mx-auto mb-12 leading-relaxed">
          Premium QR labels that connect the physical to the digital.
          <br className="hidden sm:block" />
          Discover art. Authenticate ownership. Experience luxury.
        </p>

        {/* CTA Button */}
        <Link
          href="/#qr-labels"
          className="inline-flex items-center gap-3 px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 tracking-widest uppercase text-sm"
        >
          Explore Collection
        </Link>

        {/* Decorative element */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <div className="h-px w-16 bg-primary" />
          <div className="h-2 w-2 rotate-45 border border-primary" />
          <div className="h-px w-16 bg-primary" />
        </div>
      </div>
    </section>
  )
}
