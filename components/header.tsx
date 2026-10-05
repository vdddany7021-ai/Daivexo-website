"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/statafel-huren/", label: "Statafels huren" },
  { href: "/#light-cubes", label: "Light Cubes" },
  { href: "/light-cubes-inspiratie/", label: "Inspiratie" },
  { href: "/#qr-labels", label: "QR Labels" },
  { href: "/#aegis", label: "DAIVEXO AEGIS" },
  { href: "/#contact", label: "Contact" },
]

const languageLinks = [
  { href: "/statafel-huren/", label: "NL", title: "Nederlands" },
  { href: "/en/statafel-huren/", label: "EN", title: "English" },
  { href: "/fr/statafel-huren/", label: "FR", title: "Français" },
  { href: "/de/statafel-huren/", label: "DE", title: "Deutsch" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 bg-black/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/#home"
            className="font-serif text-2xl tracking-[0.18em] text-primary transition-all duration-300 hover:brightness-110 md:text-3xl"
          >
            DAIVEXO
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-5 md:flex lg:gap-7">
            <nav className="flex items-center gap-5 lg:gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="whitespace-nowrap text-xs uppercase tracking-widest text-primary transition-colors duration-300 hover:text-white lg:text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Language Selector */}
            <div
              className="ml-1 flex items-center gap-2 border-l border-primary/30 pl-4"
              aria-label="Taal kiezen"
            >
              {languageLinks.map((language) => (
                <Link
                  key={language.label}
                  href={language.href}
                  title={language.title}
                  hrefLang={
                    language.label === "NL"
                      ? "nl"
                      : language.label === "EN"
                        ? "en"
                        : language.label === "FR"
                          ? "fr"
                          : "de"
                  }
                  className="text-[11px] font-semibold tracking-wider text-primary/70 transition-colors duration-300 hover:text-white"
                >
                  {language.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-primary transition-colors duration-300 hover:text-white md:hidden"
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
          <nav className="border-t border-primary/20 py-6 md:hidden">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm uppercase tracking-widest text-primary transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Language Selector */}
              <div className="mt-2 border-t border-primary/20 pt-5">
                <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/50">
                  Taal
                </p>

                <div className="flex items-center gap-5">
                  {languageLinks.map((language) => (
                    <Link
                      key={language.label}
                      href={language.href}
                      title={language.title}
                      hrefLang={
                        language.label === "NL"
                          ? "nl"
                          : language.label === "EN"
                            ? "en"
                            : language.label === "FR"
                              ? "fr"
                              : "de"
                      }
                      onClick={() => setIsOpen(false)}
                      className="text-sm font-semibold tracking-wider text-primary transition-colors duration-300 hover:text-white"
                    >
                      {language.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
