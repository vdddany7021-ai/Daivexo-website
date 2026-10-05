import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Location Mange-Debout LED | Tables Hautes Lumineuses | DAIVEXO",
  description:
    "Location de mange-debout LED, tables hautes lumineuses et Light Cubes pour fêtes, réceptions, événements d'entreprise et événements professionnels.",
alternates: {
  canonical: "https://www.daivexo.com/fr/statafel-huren/",
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
    title: "Location Mange-Debout LED | DAIVEXO",
    description:
      "Louez des mange-debout LED, tables hautes lumineuses et Light Cubes pour fêtes, réceptions et événements professionnels.",
    url: "https://www.daivexo.com/fr/statafel-huren/",
    siteName: "DAIVEXO",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Location Mange-Debout LED | DAIVEXO",
    description:
      "Mange-debout LED et tables hautes lumineuses à louer pour fêtes, réceptions et événements.",
  },
}

const faq = [
  {
    question: "Puis-je louer des mange-debout LED chez DAIVEXO ?",
    answer:
      "Oui. DAIVEXO propose des mange-debout lumineux et des Light Cubes pour les fêtes, réceptions, événements d'entreprise et autres événements.",
  },
  {
    question: "Qu'est-ce qu'un mange-debout LED ?",
    answer:
      "Un mange-debout LED est une table haute lumineuse qui combine la fonction pratique d'un mange-debout avec un éclairage d'ambiance. Les Light Cubes DAIVEXO peuvent être utilisés comme mange-debout lumineux au design original.",
  },
  {
    question: "Puis-je louer plusieurs tables hautes LED ?",
    answer:
      "Oui. Plusieurs Light Cubes peuvent être utilisés comme tables hautes lumineuses individuelles ou combinés pour créer une installation événementielle plus importante.",
  },
  {
    question: "Les mange-debout conviennent-ils aux fêtes et réceptions ?",
    answer:
      "Oui. Les tables lumineuses conviennent notamment aux fêtes, réceptions, événements d'entreprise et événements professionnels.",
  },
  {
    question: "DAIVEXO peut-il créer de plus grandes installations ?",
    answer:
      "Oui. En plus des mange-debout lumineux individuels, plusieurs Light Cubes peuvent être combinés pour créer un bar lumineux, un DJ booth ou un Light Wall.",
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

export default function LocationMangeDeboutPage() {
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
              Mange-debout LED pour fêtes & événements
            </p>

            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Location de mange-debout LED
              <span className="mt-2 block text-primary">
                Découvrez les Light Cubes DAIVEXO
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">
              Vous recherchez un{" "}
              <strong className="text-white">mange-debout à louer</strong> ou
              une{" "}
              <strong className="text-white">table haute lumineuse</strong>{" "}
              pour une fête, une réception ou un événement ? DAIVEXO propose
              des <strong className="text-white">mange-debout LED</strong>, des{" "}
              <strong className="text-white">tables hautes lumineuses</strong>{" "}
              et des Light Cubes qui associent fonctionnalité, éclairage et
              design événementiel.
            </p>

            <p className="mt-5 max-w-2xl leading-7 text-white/70">
              D'un seul mange-debout lumineux à plusieurs Light Cubes pour une
              installation complète, la configuration peut être adaptée au
              type d'événement.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact/"
                className="rounded-full bg-primary px-7 py-4 text-center font-semibold text-black transition hover:brightness-110"
              >
                Demander un devis
              </Link>

              <Link
                href="/light-cubes-inspiratie/"
                className="rounded-full border border-primary px-7 py-4 text-center font-semibold text-primary transition hover:bg-primary hover:text-black"
              >
                Découvrir nos tables LED
              </Link>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-white/10">
            <Image
              src="/images/light-cube-green.jpeg"
              alt="Mange-debout LED vert lumineux DAIVEXO pour événements"
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
          Location de mange-debout LED et tables hautes lumineuses
        </h2>

        <div className="mt-7 space-y-5 text-lg leading-8 text-white/75">
          <p>
            Un mange-debout classique est pratique. Un{" "}
            <strong className="text-white">mange-debout lumineux</strong>{" "}
            devient également un élément de décoration de votre événement. Le
            Light Cube DAIVEXO combine la fonction d'une table haute avec un
            éclairage intégré et un design moderne.
          </p>

          <p>
            Nos{" "}
            <strong className="text-white">tables hautes lumineuses</strong>{" "}
            conviennent notamment aux réceptions, anniversaires, mariages,
            événements d'entreprise, établissements horeca, présentations de
            produits et événements professionnels.
          </p>

          <p>
            Lorsque vous louez plusieurs{" "}
            <strong className="text-white">mange-debout LED</strong>, les Light
            Cubes peuvent être utilisés individuellement ou combinés pour créer
            une installation événementielle plus importante.
          </p>
        </div>
      </section>

      {/* USE CASES */}
      <section className="border-y border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Pour tous types d'événements
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Location de mange-debout pour fêtes, réceptions et événements
              d'entreprise
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/70">
              Les Light Cubes peuvent être utilisés partout où des
              mange-debout traditionnels sont nécessaires, tout en ajoutant
              éclairage, ambiance et impact visuel à l'espace.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Fêtes",
                "Des mange-debout lumineux comme points de rencontre élégants pour vos invités.",
              ],
              [
                "Réceptions",
                "Des tables hautes LED pour accueillir les invités et favoriser les échanges.",
              ],
              [
                "Événements d'entreprise",
                "Des mange-debout LED pour des installations professionnelles.",
              ],
              [
                "Horeca & événements",
                "Un mobilier événementiel lumineux flexible et visuellement remarquable.",
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
              alt="Plusieurs mange-debout LED bleus et tables hautes lumineuses pour événement"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">
              D'un mange-debout lumineux à une installation complète
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/75">
              Un Light Cube peut être utilisé comme{" "}
              <strong className="text-white">table haute LED</strong>{" "}
              individuelle, tandis que plusieurs éléments peuvent être
              combinés pour créer une installation visuelle plus importante.
            </p>

            <p className="mt-5 text-lg leading-8 text-white/75">
              Les mêmes Light Cubes modulaires peuvent servir de mange-debout
              lumineux ou être assemblés pour créer un bar lumineux, un DJ
              booth ou un Light Wall.
            </p>

            <Link
              href="/light-cubes-inspiratie/"
              className="mt-8 inline-block font-semibold text-primary underline underline-offset-4"
            >
              Voir des exemples de nos Light Cubes et tables LED
            </Link>
          </div>
        </div>
      </section>

      {/* SEARCH / COMMERCIAL CONTENT */}
      <section className="border-y border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Une alternative originale au mange-debout classique
          </h2>

          <div className="mt-7 space-y-5 text-lg leading-8 text-white/75">
            <p>
              Si vous recherchez une{" "}
              <strong className="text-white">location de mange-debout</strong>,
              des{" "}
              <strong className="text-white">
                tables hautes à louer
              </strong>{" "}
              ou du{" "}
              <strong className="text-white">
                mobilier événementiel en location
              </strong>
              , vous avez généralement besoin d'une solution pratique pour
              accueillir vos invités. Avec un Light Cube DAIVEXO, cette
              fonction pratique s'accompagne d'un design lumineux distinctif.
            </p>

            <p>
              Nos <strong className="text-white">mange-debout LED</strong>{" "}
              constituent une solution intéressante lorsque le mobilier
              événementiel classique ne crée pas suffisamment d'impact visuel.
              L'éclairage intégré fait des tables une véritable partie de
              l'ambiance et de la décoration.
            </p>

            <p>
              Que vous souhaitiez louer un seul{" "}
              <strong className="text-white">mange-debout lumineux</strong> ou
              plusieurs{" "}
              <strong className="text-white">tables hautes LED</strong>,
              contactez DAIVEXO pour discuter des possibilités pour votre
              événement.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <h2 className="text-3xl font-semibold md:text-4xl">
          Questions fréquentes sur la location de mange-debout LED
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
            Vous souhaitez louer des mange-debout LED pour votre événement ?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Indiquez-nous le nombre de tables dont vous avez besoin et le type
            d'événement que vous organisez. Nous étudierons avec vous la
            configuration Light Cube la plus adaptée.
          </p>

          <Link
            href="/contact/"
            className="mt-8 inline-block rounded-full bg-primary px-8 py-4 font-semibold text-black transition hover:brightness-110"
          >
            Demander un devis
          </Link>
        </div>
      </section>
    </main>
  )
}
