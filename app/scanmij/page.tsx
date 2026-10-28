
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SCANMIJ | QR-stickers voor verloren voorwerpen",
  description:
    "SCANMIJ QR-stickers helpen verloren voorwerpen terug te vinden. Voor brooddozen, drinkflessen, laptops, schoolspullen en bagage. Geen app of tracking nodig.",
  alternates: {
    canonical: "https://www.scanmij.com/",
  },
}

const afbeeldingen = [
  {
    titel: "SCANMIJ op brooddoos",
    afbeelding: "/images/Brooddoos met scanmij qr code.webp",
    beschrijving: "SCANMIJ QR-sticker op een brooddoos",
  },
  {
    titel: "SCANMIJ op drinkfles",
    afbeelding: "/images/Drinkfles met scanmij sticker.webp",
    beschrijving: "SCANMIJ QR-sticker op een drinkfles",
  },
  {
    titel: "SCANMIJ op laptop",
    afbeelding: "/images/Laptop met scanmij sticker.webp",
    beschrijving: "SCANMIJ QR-sticker op een laptop",
  },
  {
    titel: "SCANMIJ QR-code",
    afbeelding: "/images/Luxe moderne qr code afbeelding.webp",
    beschrijving: "SCANMIJ QR-code voor verloren voorwerpen",
  },
]

const pakketten = [
  {
    naam: "Start Pack",
    prijs: "€ 16,95",
    beschrijving: "Een eenvoudige start met SCANMIJ.",
  },
  {
    naam: "Family Pack",
    prijs: "€ 27,95",
    beschrijving: "Voor meerdere persoonlijke voorwerpen.",
  },
  {
    naam: "Pro Pack",
    prijs: "€ 44,95",
    beschrijving: "Voor wie meer voorwerpen wil beschermen.",
  },
]

export default function ScanmijHome() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-[#b99343]/30 bg-black">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 py-6">
          <Link
            href="/"
            className="font-serif text-3xl tracking-[0.2em] text-[#d6b15b]"
          >
            SCANMIJ
          </Link>

          <nav className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.15em] text-[#d6b15b] sm:text-sm">
            <a href="#werking" className="hover:text-white">
              Hoe werkt het?
            </a>
            <a href="#voorbeelden" className="hover:text-white">
              Voorbeelden
            </a>
            <a href="#pakketten" className="hover:text-white">
              Pakketten
            </a>
            <Link href="/bestellen" className="hover:text-white">
              Bestellen
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 py-24 text-center md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(185,147,67,0.14),transparent_65%)]" />

        <div className="relative mx-auto max-w-5xl">
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#d6b15b] sm:text-sm">
            Slimme QR-stickers voor verloren voorwerpen
          </p>

          <h1 className="font-serif text-4xl leading-tight md:text-6xl lg:text-7xl">
            Verloren voorwerpen,
            <span className="block text-[#d6b15b]">
              sneller teruggevonden.
            </span>
          </h1>

          <div className="mx-auto my-9 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-[#b99343]" />
            <span className="h-2 w-2 rotate-45 bg-[#d6b15b]" />
            <span className="h-px w-16 bg-[#b99343]" />
          </div>

          <p className="mx-auto max-w-3xl text-base leading-8 text-gray-300 md:text-lg">
            Met SCANMIJ geef je verloren voorwerpen een grotere
            kans om teruggevonden te worden. Een vinder scant
            de unieke QR-code en kan rechtstreeks contact
            opnemen met de eigenaar.
          </p>

          <p className="mt-5 text-sm tracking-wide text-[#d6b15b]">
            Geen app. Geen tracking. Direct contact.
          </p>

          <Link
            href="/bestellen"
            className="mt-10 inline-flex min-h-12 items-center justify-center border border-[#d6b15b] bg-[#d6b15b] px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-black transition-colors hover:bg-black hover:text-[#d6b15b]"
          >
            Ontdek onze pakketten
          </Link>
        </div>
      </section>

      <section
        id="voorbeelden"
        className="mx-auto max-w-7xl px-6 pb-24"
      >
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#d6b15b]">
            Ontdek SCANMIJ
          </p>

          <h2 className="font-serif text-3xl md:text-5xl">
            Eén sticker. Tal van toepassingen.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {afbeeldingen.map((item) => (
            <a
              key={item.titel}
              href={item.afbeelding}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden border border-[#b99343]/40 bg-[#080808] transition-colors hover:border-[#d6b15b]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#101010]">
                <img
                  src={item.afbeelding}
                  alt={item.beschrijving}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <span className="pointer-events-none absolute left-4 top-4 h-7 w-7 border-l border-t border-[#d6b15b]/70" />
                <span className="pointer-events-none absolute bottom-4 right-4 h-7 w-7 border-b border-r border-[#d6b15b]/70" />
              </div>

              <div className="px-5 py-6 text-center">
                <h3 className="font-serif text-2xl">
                  {item.titel}
                </h3>

                <p className="mt-3 text-xs uppercase tracking-[0.22em] text-[#d6b15b]">
                  Klik om te vergroten
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section
        id="werking"
        className="border-y border-[#b99343]/25 bg-[#0b0b0b] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#d6b15b]">
              Eenvoudig en betrouwbaar
            </p>

            <h2 className="font-serif text-3xl md:text-5xl">
              Hoe werkt SCANMIJ?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                nummer: "01",
                titel: "Activeer je sticker",
                tekst: "Koppel je unieke SCANMIJ-code aan je contactgegevens.",
              },
              {
                nummer: "02",
                titel: "Kleef hem op je voorwerp",
                tekst: "Gebruik de sticker bijvoorbeeld op een brooddoos, drinkfles, laptop of bagage.",
              },
              {
                nummer: "03",
                titel: "Een vinder scant de code",
                tekst: "De vinder kan via de scanpagina rechtstreeks contact opnemen met de eigenaar.",
              },
            ].map((stap) => (
              <div
                key={stap.nummer}
                className="border border-[#b99343]/30 p-8"
              >
                <span className="font-serif text-4xl text-[#d6b15b]">
                  {stap.nummer}
                </span>

                <h3 className="mb-4 mt-7 font-serif text-2xl">
                  {stap.titel}
                </h3>

                <p className="leading-7 text-gray-400">
                  {stap.tekst}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pakketten"
        className="mx-auto max-w-7xl px-6 py-24"
      >
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#d6b15b]">
            Kies jouw pakket
          </p>

          <h2 className="font-serif text-3xl md:text-5xl">
            Onze SCANMIJ-pakketten
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {pakketten.map((pakket) => (
            <div
              key={pakket.naam}
              className="flex flex-col items-center border border-[#b99343]/40 bg-[#0b0b0b] px-7 py-12 text-center"
            >
              <h3 className="font-serif text-3xl">
                {pakket.naam}
              </h3>

              <p className="my-7 font-serif text-4xl text-[#d6b15b]">
                {pakket.prijs}
              </p>

              <p className="mb-10 flex-1 leading-7 text-gray-400">
                {pakket.beschrijving}
              </p>

              <Link
                href="/bestellen"
                className="inline-flex min-h-12 w-full items-center justify-center border border-[#d6b15b] px-6 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#d6b15b] transition-colors hover:bg-[#d6b15b] hover:text-black"
              >
                Bestellen
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="mb-6 text-gray-400">
            Ook grotere aantallen QR-stickers nodig?
          </p>

          <Link
            href="/bestellen"
            className="inline-flex border-b border-[#d6b15b] pb-2 text-sm uppercase tracking-[0.15em] text-[#d6b15b] hover:text-white"
          >
            Bekijk alle bestelmogelijkheden
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#b99343]/30 px-6 py-12 text-center">
        <p className="font-serif text-2xl tracking-[0.2em] text-[#d6b15b]">
          SCANMIJ
        </p>

        <p className="mt-4 text-sm text-gray-400">
          Veilig • Betrouwbaar • Zonder app
        </p>

        <p className="mt-6 text-xs text-gray-500">
          SCANMIJ by DAIVEXO
        </p>
      </footer>
    </main>
  )
}
