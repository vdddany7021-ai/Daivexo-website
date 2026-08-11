"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#light-cubes", label: "Light Cubes" },
  { href: "#qr-labels", label: "QR Labels" },
  { href: "#aegis", label: "DAIVEXO AEGIS" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 border-b border-border/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className="font-serif text-xl md:text-2xl tracking-[0.3em] text-primary"
          >
            DAIVEXO
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs lg:text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
            aria-label={isOpen ? "Menu sluiten" : "Menu openen"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-6 border-t border-border/50">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}