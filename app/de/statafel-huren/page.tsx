import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "LED Stehtische Mieten | Beleuchtete Stehtische | DAIVEXO",
  description:
    "LED Stehtische, beleuchtete Stehtische und Light Cubes für Partys, Empfänge, Firmenveranstaltungen und professionelle Events mieten.",
alternates: {
  canonical: "https://www.daivexo.com/de/statafel-huren/",
  languages: {
    "nl-BE": "https://www.daivexo.com/statafel-huren/",
    "nl-NL": "https://www.daivexo.com/statafel-huren/",
    "fr-BE": "https://www.daivexo.com/fr/statafel-huren/",
    "fr-FR": "https://www.daivexo.com/fr/statafel-huren/",
    "fr-LU": "https://www.daivexo.com/fr/statafel-huren/",
    "de-DE": "https://www.daivexo.com/de/statafel-huren/",
    "de-LU": "https://www.daivexo.com/de/statafel-huren/",
    "en": "https://www.daivexo.com/en/statafel-huren/",
    "x-default": "https://www.daivexo.com/en/statafel-huren/",
  },
},
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "LED Stehtische Mieten | DAIVEXO",
    description:
      "Beleuchtete LED Stehtische und Light Cubes für Partys, Empfänge, Firmenveranstaltungen und Events mieten.",
    url: "https://www.daivexo.com/de/statafel-huren/",
    siteName: "DAIVEXO",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LED Stehtische Mieten | DAIVEXO",
    description:
      "LED Stehtische und beleuchtete Eventmöbel für Partys, Empfänge und Veranstaltungen mieten.",
  },
}

const faq = [
  {
    question: "Kann ich LED Stehtische bei DAIVEXO mieten?",
    answer:
      "Ja. DAIVEXO vermietet beleuchtete Stehtische und Light Cubes für Partys, Empfänge, Firmenveranstaltungen und andere Events.",
  },
  {
    question: "Was ist ein LED Stehtisch?",
    answer:
      "Ein LED Stehtisch ist ein beleuchteter Stehtisch, der praktische Funktion mit stimmungsvoller Beleuchtung verbindet. Die DAIVEXO Light Cubes können als auffällige beleuchtete Stehtische eingesetzt werden.",
  },
  {
    question: "Kann ich mehrere LED Stehtische mieten?",
    answer:
      "Ja. Mehrere Light Cubes können als einzelne beleuchtete Stehtische verwendet oder zu einer größeren Eventinstallation kombiniert werden.",
  },
  {
    question: "Sind die Stehtische für Partys und Empfänge geeignet?",
    answer:
      "Ja. Die beleuchteten Stehtische eignen sich unter anderem für Partys, Empfänge, Firmenveranstaltungen und professionelle Events.",
  },
  {
    question: "Kann DAIVEXO auch größere Eventaufbauten realisieren?",
    answer:
      "Ja. Neben einzelnen beleuchteten Stehtischen können mehrere Light Cubes zu größeren Installationen wie beleuchteten Bars, DJ-Booths und Light Walls kombiniert werden.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

export default function LedStehtischePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              LED Stehtische für Partys & Events
            </p>

            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              LED Stehtische mieten
              <span className="mt-2 block text-primary">
                Entdecken Sie die DAIVEXO Light Cubes
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">
              Sie möchten einen{" "}
              <strong className="text-white">Stehtisch mieten</strong> oder
              suchen{" "}
              <strong className="text-white">beleuchtete Stehtische</strong>{" "}
              für eine Party, einen Empfang oder eine Veranstaltung? DAIVEXO
              vermietet auffällige{" "}
              <strong className="text-white">LED Stehtische</strong>,{" "}
              <strong className="text-white">leuchtende Stehtische</strong>{" "}
              und Light Cubes, die Funktionalität, Beleuchtung und modernes
              Eventdesign miteinander verbinden.
            </p>

            <p className="mt-5 max-w-2xl leading-7 text-white/70">
              Vom einzelnen beleuchteten Stehtisch bis zu mehreren Light Cubes
              für eine komplette Eventgestaltung kann der Aufbau an Ihre
              Veranstaltung angepasst werden.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact/"
                className="rounded-full bg-primary px-7 py-4 text-center font-semibold text-black transition hover:brightness-110"
              >
                Angebot anfragen
              </Link>

              <Link
                href="/light-cubes-inspiratie/"
                className="rounded-full border border-primary px-7 py-4 text-center font-semibold text-primary transition hover:bg-primary hover:text-black"
              >
                LED Stehtische entdecken
              </Link>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-white/10">
            <Image
              src="/images/light-cube-green.jpeg"
              alt="Grüner beleuchteter LED Stehtisch von DAIVEXO für Veranstaltungen"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <h2 className="text-3xl font-semibold md:text-4xl">
          LED Stehtische und beleuchtete Stehtische mieten
        </h2>

        <div className="mt-7 space-y-5 text-lg leading-8 text-white/75">
          <p>
            Ein klassischer Stehtisch ist praktisch. Ein{" "}
            <strong className="text-white">beleuchteter Stehtisch</strong>{" "}
            wird gleichzeitig zu einem Teil der Eventgestaltung. Der DAIVEXO
            Light Cube verbindet die Funktion eines Stehtisches mit integrierter
            Beleuchtung und modernem Design.
          </p>

          <p>
            Unsere <strong className="text-white">LED Stehtische</strong>{" "}
            eignen sich unter anderem für Empfänge, Geburtstagsfeiern,
            Hochzeiten, Firmenfeiern, Gastronomie, Produktpräsentationen und
            professionelle Veranstaltungen.
          </p>

          <p>
            Wenn Sie mehrere{" "}
            <strong className="text-white">Stehtische mieten</strong>, können
            die Light Cubes einzeln verwendet oder zu einer größeren visuellen
            Eventinstallation kombiniert werden.
          </p>
        </div>
      </section>

      {/* USE CASES */}
      <section className="border-y border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Für unterschiedliche Veranstaltungen
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Stehtische für Partys, Empfänge und Firmenveranstaltungen mieten
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/70">
              Die Light Cubes können überall dort eingesetzt werden, wo
              klassische Stehtische benötigt werden, und sorgen gleichzeitig
              für zusätzliche Beleuchtung und visuelle Wirkung.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Partys",
                "Beleuchtete Stehtische als stilvolle Treffpunkte für Ihre Gäste.",
              ],
              [
                "Empfänge",
                "LED Stehtische für den Empfang von Gästen und zum Networking.",
              ],
              [
                "Firmenveranstaltungen",
                "Beleuchtete Stehtische für professionelle Eventkonzepte.",
              ],
              [
                "Gastronomie & Events",
                "Flexibel einsetzbare beleuchtete Eventmöbel mit besonderer Wirkung.",
              ],
            ].map(([title, text]) => (
              <article
                key={title}
                className="rounded-2xl border border-white/10 bg-black p-6"
              >
                <h3 className="text-xl font-semibold text-primary">{title}</h3>
                <p className="mt-3 leading-7 text-white/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[440px] overflow-hidden rounded-[28px]">
            <Image
              src="/images/light-cubes-inspiratie/light-cubes-luxe-tuin-leie-blauw.jpg"
              alt="Mehrere blaue LED Stehtische für eine Veranstaltung"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Vom einzelnen LED Stehtisch bis zur kompletten Eventinstallation
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/75">
              Ein Light Cube kann als einzelner{" "}
              <strong className="text-white">LED Stehtisch</strong> eingesetzt
              werden. Mehrere Elemente lassen sich zu einer größeren und
              auffälligen Installation kombinieren.
            </p>

            <p className="mt-5 text-lg leading-8 text-white/75">
              Dieselben modularen Light Cubes können als beleuchtete Stehtische
              oder für größere Anwendungen wie eine beleuchtete Bar, einen
              DJ-Booth oder eine Light Wall verwendet werden.
            </p>

            <Link
              href="/light-cubes-inspiratie/"
              className="mt-8 inline-block font-semibold text-primary underline underline-offset-4"
            >
              Beispiele unserer Light Cubes und LED Stehtische ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* SEARCH / COMMERCIAL CONTENT */}
      <section className="border-y border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Eine besondere Alternative zum klassischen Stehtisch
          </h2>

          <div className="mt-7 space-y-5 text-lg leading-8 text-white/75">
            <p>
              Wer nach{" "}
              <strong className="text-white">Stehtisch mieten</strong>,{" "}
              <strong className="text-white">Stehtische mieten</strong> oder{" "}
              <strong className="text-white">Eventmöbel mieten</strong> sucht,
              benötigt meist eine praktische Lösung für Gäste bei einer Feier
              oder Veranstaltung. Ein DAIVEXO Light Cube verbindet diese
              Funktion mit einem auffälligen beleuchteten Design.
            </p>

            <p>
              Unsere <strong className="text-white">LED Stehtische</strong>{" "}
              eignen sich besonders für Veranstaltungen, bei denen klassische
              Eventmöbel nicht genügend visuelle Wirkung bieten. Durch die
              Beleuchtung werden die Stehtische selbst zu einem Bestandteil
              der Atmosphäre und Eventgestaltung.
            </p>

            <p>
              Ob Sie einen{" "}
              <strong className="text-white">
                beleuchteten Stehtisch mieten
              </strong>{" "}
              oder mehrere{" "}
              <strong className="text-white">LED Stehtische</strong>{" "}
              benötigen: Kontaktieren Sie DAIVEXO, um die Möglichkeiten für
              Ihre Veranstaltung zu besprechen.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <h2 className="text-3xl font-semibold md:text-4xl">
          Häufige Fragen zur Miete von LED Stehtischen
        </h2>

        <div className="mt-10 space-y-4">
          {faq.map((item) => (
            <article
              key={item.question}
              className="rounded-2xl border border-white/10 bg-neutral-950 p-6"
            >
              <h3 className="text-xl font-semibold text-white">
                {item.question}
              </h3>
              <p className="mt-3 leading-7 text-white/70">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-primary/20">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            DAIVEXO
          </p>

          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
            LED Stehtische für Ihre Veranstaltung mieten?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Teilen Sie uns mit, wie viele Stehtische Sie benötigen und welche
            Art von Veranstaltung Sie planen. Gemeinsam finden wir die passende
            Light-Cube-Konfiguration.
          </p>

          <Link
            href="/contact/"
            className="mt-8 inline-block rounded-full bg-primary px-8 py-4 font-semibold text-black transition hover:brightness-110"
          >
            Angebot anfragen
          </Link>
        </div>
      </section>
    </main>
  )
}
