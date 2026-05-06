import Link from "next/link"
import { Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="font-serif text-2xl tracking-[0.3em] text-primary">
            DAIVEXO
          </Link>

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
          <p className="text-sm text-muted-foreground tracking-widest">
            &copy; {new Date().getFullYear()} DAIVEXO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
