"use client"

import { ArrowDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Full screen background image - logo only, no overlay */}
      <Image
        src="/images/hero-bg.png"
        alt="DAIVEXO - Forever Modern. Forever Secure."
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce z-10">
        <span className="text-xs tracking-widest uppercase text-muted-foreground">
          Scroll
        </span>
        <ArrowDown className="h-4 w-4 text-primary" />
      </div>
    </section>
  )
}
