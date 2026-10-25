
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SCANMIJ | QR-stickers voor verloren voorwerpen",
  description:
    "SCANMIJ QR-stickers helpen verloren voorwerpen terug te bezorgen. Voor schoolspullen, bagage, sleutels en meer.",
}

const pakketten = [
  { naam: "Start Pack", prijs: "€ 16,95" },
  { naam: "Family Pack", prijs: "€ 27,95" },
  { naam: "Pro Pack", prijs: "€ 44,95" },
]

export default function ScanmijHome() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 px-6 py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/scanmij" className="text-2xl font-bold">
            SCANMIJ
          </Link>
          <span className="text-sm text-slate-500">
            Slimme QR-stickers
          </span>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h1 className="mb-5 text-4xl font-bold md:text-6xl">
          Verloren? Met SCANMIJ sneller teruggevonden.
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-slate-600">
          Bescherm schoolspullen, boekentassen, drinkflessen,
          sleutels en bagage met een unieke QR-sticker.
          Een vinder scant de code en kan rechtstreeks
          contact opnemen met de eigenaar. Geen app nodig.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-16 md:grid-cols-3">
        {[
          {
            titel: "SCANMIJ QR-sticker",
            afbeelding: "/images/scanmij-sticker.jpeg",
          },
          {
            titel: "SCANMIJ Flyer",
            afbeelding: "/images/scanmij-flyer.jpeg",
          },
          {
            titel: "SCANMIJ in gebruik",
            afbeelding: "/images/scanmij-in-use.jpeg",
          },
        ].map((item) => (
          <div
            key={item.titel}
            className="overflow-hidden rounded-xl border border-slate-200"
          >
            <img
              src={item.afbeelding}
              alt={item.titel}
              className="aspect-[4/5] w-full object-cover"
            />
            <h2 className="p-5 text-center text-xl font-semibold">
              {item.titel}
            </h2>
          </div>
        ))}
      </section>

      <section className="bg-slate-100 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Onze SCANMIJ-pakketten
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {pakketten.map((pakket) => (
              <div
                key={pakket.naam}
                className="rounded-xl bg-white p-8 text-center shadow-sm"
              >
                <h3 className="text-2xl font-semibold">
                  {pakket.naam}
                </h3>
                <p className="my-5 text-3xl font-bold">
                  {pakket.prijs}
                </p>
                <p className="text-sm text-slate-600">
                  Bestellen binnenkort beschikbaar.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-6 py-10 text-center text-sm text-slate-500">
        SCANMIJ by DAIVEXO
      </footer>
    </main>
  )
}
