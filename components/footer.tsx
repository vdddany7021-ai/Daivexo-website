import Link from "next/link"
import { Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">

          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-2xl tracking-[0.3em] text-primary"
          >
            DAIVEXO
          </Link>

          {/* Internal navigation */}
          <nav
            aria-label="Footer navigatie"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            <Link
              href="/statafel-huren/"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Statafels huren
            </Link>

            <Link
              href="/light-cubes-inspiratie/"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              LED statafels & Light Cubes
            </Link>

            <Link
              href="/qr-labels/"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              SCANMIJ QR-labels
            </Link>

            <Link
              href="/gallery/"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              UV-werend gezichtsmasker
            </Link>

            <Link
              href="/contact/"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              aria-label="Instagram"
              className="p-3 border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all duration-300"
            >
              <Instagram className="h-5 w-5" />
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="p-3 border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all duration-300"
            >
              <Twitter className="h-5 w-5" />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="p-3 border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-center text-sm text-muted-foreground tracking-widest">
            &copy; {new Date().getFullYear()} DAIVEXO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
