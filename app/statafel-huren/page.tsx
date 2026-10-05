import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Statafel Huren | LED Statafels & Staantafels | DAIVEXO",
  description:
    "Statafel of staantafel huren voor een feest of evenement? Ontdek LED statafels, lichtgevende staantafels en Light Cubes van DAIVEXO voor feesten, recepties en bedrijfsevents.",
alternates: {
  canonical: "https://www.daivexo.com/statafel-huren/",
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
    title: "Statafel Huren | LED Statafels & Staantafels | DAIVEXO",
    description:
      "Huur verlichte LED statafels, staantafels en Light Cubes voor feesten, recepties, bedrijfsevents en evenementen.",
    url: "https://www.daivexo.com/statafel-huren/",
    siteName: "DAIVEXO",
    locale: "nl_BE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Statafel Huren | LED Statafels & Staantafels | DAIVEXO",
    description:
      "LED statafels en lichtgevende staantafels huren voor feesten en evenementen.",
  },
}

const faq = [
  {
    question: "Kan ik een statafel huren bij DAIVEXO?",
    answer:
      "Ja. DAIVEXO verhuurt verlichte statafels en Light Cubes voor feesten, recepties, bedrijfsevents en andere evenementen.",
  },
  {
    question: "Wat is een LED statafel?",
    answer:
      "Een LED statafel is een lichtgevende statafel waarbij verlichting voor extra sfeer en visuele impact zorgt. De DAIVEXO Light Cubes kunnen als opvallende verlichte statafels worden gebruikt.",
  },
  {
    question: "Kan ik meerdere LED statafels huren?",
    answer:
      "Ja. Meerdere Light Cubes kunnen worden gecombineerd als verlichte statafels en kunnen ook deel uitmaken van grotere eventopstellingen.",
  },
  {
    question: "Zijn de statafels geschikt voor een feest of receptie?",
    answer:
      "Ja. De lichtgevende statafels zijn bedoeld voor onder andere feesten, recepties, bedrijfsevenementen en professionele events.",
  },
  {
    question: "Kan DAIVEXO ook grotere opstellingen maken?",
    answer:
      "Ja. Naast individuele lichtgevende statafels kunnen Light Cubes worden gecombineerd in grotere opstellingen zoals bars, DJ Booths en Light Walls.",
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

export default function StatafelHurenPage() {
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
              LED statafels voor feesten & evenementen
            </p>

            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Statafel huren?
              <span className="mt-2 block text-primary">
                Ontdek onze LED statafels
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">
              Zoek je een <strong className="text-white">statafel</strong> of{" "}
              <strong className="text-white">staantafel om te huren</strong> voor
              een feest, receptie of evenement? DAIVEXO verhuurt opvallende{" "}
              <strong className="text-white">LED statafels</strong>,{" "}
              <strong className="text-white">lichtgevende staantafels</strong>{" "}
              en Light Cubes die sfeer en verlichting combineren in één
              eventmeubel.
            </p>

            <p className="mt-5 max-w-2xl leading-7 text-white/70">
              Van één verlichte statafel tot meerdere Light Cubes voor een
              complete eventsetting: de opstelling kan worden aangepast aan het
              type feest of evenement.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact/"
                className="rounded-full bg-primary px-7 py-4 text-center font-semibold text-black transition hover:brightness-110"
              >
                Offerte voor statafels aanvragen
              </Link>

              <Link
                href="/light-cubes-inspiratie/"
                className="rounded-full border border-primary px-7 py-4 text-center font-semibold text-primary transition hover:bg-primary hover:text-black"
              >
                Bekijk LED statafels
              </Link>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-white/10">
            <Image
              src="/images/light-cube-green.jpeg"
              alt="LED statafel huren - groene lichtgevende staantafel van DAIVEXO"
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
          LED statafels en staantafels huren
        </h2>

        <div className="mt-7 space-y-5 text-lg leading-8 text-white/75">
          <p>
            Een gewone statafel is praktisch. Een{" "}
            <strong className="text-white">lichtgevende statafel</strong> wordt
            tegelijk een onderdeel van de aankleding van je evenement. De
            DAIVEXO Light Cube combineert de functie van een staantafel met
            verlichting en een moderne uitstraling.
          </p>

          <p>
            Onze <strong className="text-white">verlichte statafels</strong>{" "}
            zijn geschikt voor onder andere recepties, verjaardagsfeesten,
            trouwfeesten, bedrijfsfeesten, horeca, productpresentaties en
            professionele evenementen.
          </p>

          <p>
            Wie meerdere <strong className="text-white">statafels huurt</strong>,
            kan de Light Cubes als afzonderlijke staantafels gebruiken of
            combineren tot een grotere visuele eventopstelling.
          </p>
        </div>
      </section>

      {/* USE CASES */}
      <section className="border-y border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Voor elk type evenement
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Statafels huren voor feest, receptie of bedrijfsevent
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/70">
              De Light Cubes zijn inzetbaar waar traditionele statafels worden
              gebruikt, maar voegen verlichting en uitstraling toe aan de
              ruimte.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Feesten", "Lichtgevende statafels als sfeervol ontmoetingspunt."],
              ["Recepties", "Verlichte staantafels voor ontvangst en networking."],
              ["Bedrijfsevents", "LED statafels voor professionele eventsettings."],
              ["Horeca & events", "Flexibel inzetbaar als opvallend eventmeubilair."],
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
              alt="Meerdere blauwe LED statafels en lichtgevende staantafels huren voor evenement"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Van één lichtgevende statafel tot een complete setting
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/75">
              Je kunt een Light Cube inzetten als individuele{" "}
              <strong className="text-white">LED staantafel</strong>, maar
              meerdere elementen kunnen samen een veel grotere uitstraling
              creëren.
            </p>

            <p className="mt-5 text-lg leading-8 text-white/75">
              Dezelfde modulaire Light Cubes kunnen worden gebruikt voor
              verlichte statafels en grotere toepassingen zoals een Light Bar,
              DJ Booth of Light Wall.
            </p>

            <Link
              href="/light-cubes-inspiratie/"
              className="mt-8 inline-block font-semibold text-primary underline underline-offset-4"
            >
              Bekijk voorbeelden van onze Light Cubes en LED statafels
            </Link>
          </div>
        </div>
      </section>
      {/* MEER LIGHT CUBE TOEPASSINGEN */}
      <section className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Meer dan een LED statafel
            </p>

            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Van verlichte bar tot indrukwekkende Light Wall
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/70">
              DAIVEXO Light Cubes zijn modulair. Naast individuele LED
              statafels en verlichte staantafels kunnen meerdere Cubes worden
              gecombineerd tot grotere verlichte opstellingen voor feesten,
              recepties en evenementen.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Verlichte bar */}
            <article>
              <div className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-white/10">
                <Image
                  src="/images/light-cubes-inspiratie/bar-blauw-wit.jpg"
                  alt="Verlichte LED bar opgebouwd met DAIVEXO Light Cubes voor evenementen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                Verlichte eventbar
              </h3>

              <p className="mt-3 leading-7 text-white/70">
                Combineer meerdere Light Cubes tot een opvallende verlichte bar
                voor feesten, recepties en professionele evenementen.
              </p>
            </article>

            {/* Light Wall */}
            <article>
              <div className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-white/10">
                <Image
                  src="/images/light-cubes-inspiratie/lightwall-multicolor.jpg"
                  alt="Multicolor verlichte Light Wall opgebouwd met DAIVEXO Light Cubes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                Light Wall
              </h3>

              <p className="mt-3 leading-7 text-white/70">
                Bouw met meerdere Light Cubes een grote verlichte blikvanger als
                achtergrond, decoratie of opvallend element voor jouw evenement.
              </p>
            </article>
          </div>
        </div>
      </section>
      {/* SEARCH / COMMERCIAL CONTENT */}
      <section className="border-y border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Een alternatief voor de klassieke statafel
          </h2>

          <div className="mt-7 space-y-5 text-lg leading-8 text-white/75">
            <p>
              Wie zoekt naar <strong className="text-white">statafel huren</strong>,{" "}
              <strong className="text-white">staantafel huren</strong> of{" "}
              <strong className="text-white">statafels huren</strong>, zoekt
              meestal een praktische oplossing voor gasten tijdens een feest of
              evenement. Met een DAIVEXO Light Cube krijgt die praktische
              functie tegelijk een opvallende visuele uitstraling.
            </p>

            <p>
              Daardoor zijn onze{" "}
              <strong className="text-white">LED statafels</strong> interessant
              wanneer standaard eventmeubilair niet voldoende uitstraling
              biedt. De verlichting maakt de staantafels onderdeel van de
              totale sfeer en aankleding.
            </p>

            <p>
              Of je nu één <strong className="text-white">statafel wilt huren</strong>{" "}
              of meerdere <strong className="text-white">LED statafels</strong>{" "}
              nodig hebt: neem contact op met DAIVEXO voor de mogelijkheden van
              jouw evenement.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <h2 className="text-3xl font-semibold md:text-4xl">
          Veelgestelde vragen over statafels huren
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
            LED statafel huren voor jouw evenement?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Vertel ons hoeveel statafels je nodig hebt en voor welk evenement.
            We bekijken samen welke Light Cube-opstelling het beste aansluit.
          </p>

          <Link
            href="/contact/"
            className="mt-8 inline-block rounded-full bg-primary px-8 py-4 font-semibold text-black transition hover:brightness-110"
          >
            Vraag een offerte aan
          </Link>
        </div>
      </section>
    </main>
  )
}
