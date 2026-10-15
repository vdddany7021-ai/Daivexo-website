
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"


export const metadata: Metadata = {
  title: {
    absolute: "Staantafel Huren & Statafel Huren | DAIVEXO",
  },
  description:
    "Staantafel huren of statafel huren? Reserveer LED staantafels en Light Cubes voor je feest of evenement. Vraag nu beschikbaarheid en een offerte aan bij DAIVEXO.",

  alternates: {
    canonical: "https://www.daivexo.com/statafel-huren",
    languages: {
      "nl-BE": "https://www.daivexo.com/statafel-huren",
      "nl-NL": "https://www.daivexo.com/statafel-huren",
      "fr-BE": "https://www.daivexo.com/fr/statafel-huren",
      "fr-FR": "https://www.daivexo.com/fr/statafel-huren",
      "fr-LU": "https://www.daivexo.com/fr/statafel-huren",
      "de-DE": "https://www.daivexo.com/de/statafel-huren",
      "de-LU": "https://www.daivexo.com/de/statafel-huren",
      en: "https://www.daivexo.com/en/statafel-huren",
      "x-default": "https://www.daivexo.com/en/statafel-huren",
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
    title: "Staantafel Huren & Statafel Huren | DAIVEXO",
    description:
      "Staantafel huren of statafel huren? Vraag nu een reservatie aan voor LED staantafels en Light Cubes voor jouw evenement.",
    url: "https://www.daivexo.com/statafel-huren",
    siteName: "DAIVEXO",
    locale: "nl_BE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Staantafel Huren & Statafel Huren | DAIVEXO",
    description:
      "LED staantafels en statafels huren voor je evenement? Vraag nu een reservatie en offerte aan bij DAIVEXO.",
  },
}


const faq = [
  {
    question: "Kan ik een staantafel huren of een statafel huren bij DAIVEXO?",
    answer:
      "Ja. Je kunt nu een reservatieaanvraag indienen voor een toekomstige evenementdatum. Geef je datum, locatie en het gewenste aantal LED staantafels door. DAIVEXO bevestigt de beschikbaarheid en voorwaarden.",
  },
  {
    question: "Wat is het verschil tussen een gewone staantafel en een LED staantafel?",
    answer:
      "Een gewone staantafel of statafel biedt vooral een praktische plek om te staan. Een LED staantafel combineert die functie met verlichting en wordt daardoor ook onderdeel van de aankleding van je evenement.",
  },
  {
    question: "Kan ik meerdere LED statafels huren?",
    answer:
      "Ja. Geef bij je aanvraag aan hoeveel LED staantafels je nodig hebt. DAIVEXO bekijkt welke aantallen en opstellingen voor jouw datum mogelijk zijn.",
  },
  {
    question: "Voor welke evenementen zijn de LED statafels geschikt?",
    answer:
      "De verlichte statafels zijn bedoeld voor onder andere recepties, verjaardagsfeesten, trouwfeesten, bedrijfsevenementen, horeca en professionele events.",
  },
  {
    question: "Kunnen Light Cubes ook als bar of DJ Booth worden gebruikt?",
    answer:
      "De modulaire Light Cubes kunnen naast statafels ook worden gecombineerd tot grotere concepten, zoals een verlichte bar, DJ Booth of Light Wall. Vraag naar de mogelijkheden voor jouw evenement.",
  },
  {
    question: "Hoe kan ik een LED staantafel huren of een offerte aanvragen?",
    answer:
      "Via de contactpagina van DAIVEXO kun je een reservatieaanvraag of offerteaanvraag indienen. Vermeld de datum, locatie, het soort evenement en het gewenste aantal tafels. Een reservatie is pas definitief na bevestiging door DAIVEXO.",
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

const applications = [
  {
    title: "Feesten",
    description:
      "Lichtgevende statafels en LED sfeerverlichting voor een feestelijke ontmoetingsplek.",
  },
  {
    title: "Recepties",
    description:
      "LED statafels die ontvangst, gezelligheid en verlichting combineren.",
  },
  {
    title: "Bedrijfsevenementen",
    description:
      "LED eventmeubilair voor zakelijke bijeenkomsten en productpresentaties.",
  },
  {
    title: "Horeca en events",
    description:
      "Modulaire Light Cubes voor uiteenlopende evenementen en opstellingen.",
  },
]

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
              LED staantafels en statafels voor feesten en evenementen
            </p>

            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Staantafel huren of statafel huren?
              <span className="mt-2 block text-primary">
                Ontdek onze LED Light Cubes
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">
              Wil je een{" "}
              <strong className="text-white">staantafel huren</strong>{" "}
              of een <strong className="text-white">statafel huren</strong>{" "}
              die meer biedt dan een gewone tafel?
              DAIVEXO combineert de praktische functie van een
              staantafel met sfeervolle verlichting.
              Onze{" "}
              <strong className="text-white">LED statafels</strong>{" "}
              en Light Cubes geven feesten, recepties en
              bedrijfsevenementen een bijzondere uitstraling.
            </p>

            <p className="mt-5 max-w-2xl leading-7 text-white/70">
              Reserveer tijdig voor een feest of evenement dat pas over enkele
              maanden plaatsvindt. Vraag vrijblijvend beschikbaarheid
              aan voor één of meerdere modulaire Light Cubes.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-primary px-7 py-4 text-center font-semibold text-black transition hover:brightness-110"
              >
                Vraag je reservatie aan
              </Link>

              <Link
                href="/light-cubes-inspiratie"
                className="rounded-full border border-primary px-7 py-4 text-center font-semibold text-primary transition hover:bg-primary hover:text-black"
              >
                Bekijk onze LED statafels
              </Link>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-white/10">
            <Image
              src="/images/light-cube-green.jpeg"
              alt="Groene lichtgevende LED statafel van DAIVEXO voor evenementen"
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
          Staantafel huren: ontdek LED staantafels en statafels
        </h2>

        <div className="mt-7 space-y-5 text-lg leading-8 text-white/75">
          <p>
            Een traditionele statafel is vooral praktisch.
            Een{" "}
            <strong className="text-white">
              lichtgevende statafel
            </strong>{" "}
            voegt daar iets extra's aan toe: verlichting,
            sfeer en een moderne uitstraling.
            De DAIVEXO Light Cube combineert deze eigenschappen
            in één opvallend eventmeubel.
          </p>

          <p>
            Onze lichtgevende statafels en verlichte staantafels passen bij uiteenlopende
            gelegenheden, waaronder verjaardagsfeesten,
            trouwfeesten, recepties, bedrijfsevents,
            productpresentaties en horecagelegenheden.
          </p>

          <p>
            Wie een{" "}
            <strong className="text-white">LED staantafel wil huren</strong>,{" "}
            kan nu een reservatieaanvraag indienen voor één Light Cube
            als blikvanger, of van meerdere Light Cubes voor een grotere opstelling.
            Zo wordt het meubilair niet alleen functioneel,
            maar ook een zichtbaar onderdeel van de aankleding.
          </p>
        </div>
      </section>

      {/* TOEPASSINGEN */}
      <section className="border-y border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Voor verschillende evenementen
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              LED staantafels huren voor feesten, recepties en bedrijfsevents
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/70">
              Lichtgevende statafels zorgen voor een combinatie
              van praktisch gebruik en visuele uitstraling.
              Ontdek hoe DAIVEXO Light Cubes kunnen worden
              ingezet bij verschillende soorten evenementen.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {applications.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-black p-6"
              >
                <h3 className="text-xl font-semibold text-primary">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-white/70">
                  {item.description}
                </p>
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
              alt="Blauwe lichtgevende LED statafels en Light Cubes in een eventopstelling"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Van één LED statafel tot een complete eventopstelling
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/75">
              De DAIVEXO Light Cube is ontworpen als een
              modulair element dat op verschillende manieren
              kan worden ingezet.
              Als individuele staantafel vormt hij een
              lichtgevend ontmoetingspunt voor gasten.
            </p>

            <p className="mt-5 text-lg leading-8 text-white/75">
              Door meerdere Cubes te combineren ontstaan
              grotere visuele opstellingen.
              Denk aan een reeks verlichte statafels,
              een Light Bar, DJ Booth of Light Wall.
            </p>

            <p className="mt-5 text-lg leading-8 text-white/75">
              Welke opstelling geschikt is, hangt af van
              het type evenement, de beschikbare ruimte
              en het gewenste resultaat.
            </p>

            <Link
              href="/light-cubes-inspiratie"
              className="mt-8 inline-block font-semibold text-primary underline underline-offset-4"
            >
              Bekijk inspiratie met onze Light Cubes
            </Link>
          </div>
        </div>
      </section>

      {/* ANDERE TOEPASSINGEN */}
      <section className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Meer dan een gewone staantafel
            </p>

            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Van verlichte eventbar tot indrukwekkende Light Wall
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/70">
              De modulaire opbouw van DAIVEXO Light Cubes
              maakt verschillende creatieve toepassingen
              mogelijk. Naast individuele LED statafels
              kunnen de Cubes samen grotere verlichte
              elementen vormen.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <article>
              <div className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-white/10">
                <Image
                  src="/images/light-cubes-inspiratie/bar-blauw-wit.jpg"
                  alt="Blauw-witte verlichte eventbar met DAIVEXO Light Cubes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                Verlichte eventbar
              </h3>

              <p className="mt-3 leading-7 text-white/70">
                Meerdere Light Cubes kunnen samen een
                opvallende verlichte baropstelling vormen.
                Een creatief concept voor feesten,
                recepties en professionele evenementen.
              </p>
            </article>

            <article>
              <div className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-white/10">
                <Image
                  src="/images/light-cubes-inspiratie/lightwall-multicolor.webp"
                  alt="Meerkleurige verlichte Light Wall opgebouwd uit DAIVEXO Light Cubes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                Light Wall
              </h3>

              <p className="mt-3 leading-7 text-white/70">
                Een combinatie van meerdere verlichte
                Cubes kan dienen als opvallende achtergrond,
                decoratief element of blikvanger
                tijdens een evenement.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* WAAROM DAIVEXO */}
      <section className="border-y border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Waarom kiezen voor lichtgevende statafels?
          </h2>

          <div className="mt-7 space-y-5 text-lg leading-8 text-white/75">
            <p>
              Bij de organisatie van een feest of evenement
              speelt het meubilair een belangrijke rol.
              Gasten moeten comfortabel kunnen samenkomen,
              terwijl de inrichting aansluit bij de
              gewenste sfeer.
            </p>

            <p>
              Een gewone statafel vervult vooral een
              praktische functie. Met de{" "}
              <strong className="text-white">
                LED staantafels van DAIVEXO
              </strong>{" "}
              krijgt datzelfde meubel een extra visuele
              functie dankzij de geïntegreerde verlichting.
            </p>

            <p>
              De Light Cubes combineren een moderne vormgeving
              met verschillende toepassingsmogelijkheden.
              Daardoor kunnen ze zowel afzonderlijk
              worden gebruikt als onderdeel van
              een grotere eventopstelling.
            </p>

            <p>
              Zoek je{" "}
              <strong className="text-white">
                een staantafel om te huren
              </strong>{" "}
              voor een receptie, feest of bedrijfsevent?
              Dan is een verlichte Light Cube een
              opvallend alternatief voor traditioneel
              eventmeubilair.
            </p>
          </div>
        </div>
      </section>

      {/* LED SFEERVERLICHTING EN EVENTMEUBILAIR */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Sfeer en eventinrichting
        </p>

        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
          LED sfeerverlichting en eventmeubilair voor feesten
        </h2>

        <div className="mt-7 space-y-5 text-lg leading-8 text-white/75">
          <p>
            Zoek je LED verlichting voor evenementen die meer doet dan
            alleen een ruimte verlichten? De DAIVEXO Light Cubes
            combineren functioneel meubilair met LED sfeerverlichting
            voor een feest, receptie of bedrijfsevenement.
          </p>

          <p>
            Dit LED eventmeubilair kan worden ingezet als lichtgevende
            statafel of als onderdeel van een grotere decoratieve
            opstelling. Zo vormen de Cubes een alternatief voor wie
            sfeer en een praktische ontmoetingsplek wil combineren.
          </p>

          <p>
            Of je nu lichtgevende statafels zoekt, verlichte statafels
            wilt huren of ideeën verzamelt voor de aankleding van je
            evenement: bekijk onze Light Cubes en informeer naar de
            mogelijkheden om nu al te reserveren voor jouw evenementdatum.
          </p>
        </div>

        <Link
          href="/light-cubes-inspiratie"
          className="mt-8 inline-block font-semibold text-primary underline underline-offset-4"
        >
          Ontdek inspiratie voor LED eventmeubilair
        </Link>
      </section>

      {/* INTERNATIONALE VERHUUR */}
      <section className="border-t border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-semibold md:text-4xl">
            LED statafels huren in België en Europa
          </h2>

          <div className="mt-7 space-y-5 text-lg leading-8 text-white/75">
            <p>
              Bij DAIVEXO kun je nu een verhuur- of reservatieaanvraag indienen
              voor LED statafels, lichtgevende staantafels en modulaire
              Light Cubes. Vermeld je evenementlocatie zodat we de
              mogelijkheden en eventuele levering kunnen beoordelen.
            </p>

            <p>
              Onze verlichte Light Cubes zijn ontworpen voor
              trouwfeesten, recepties, bedrijfsevenementen,
              beurzen en andere bijzondere gelegenheden.
            </p>

            <p>
              Organiseer je binnenkort of over enkele maanden een evenement?
              Vraag nu vrijblijvend de beschikbaarheid en een offerte
              aan. Je reservatie wordt pas definitief nadat DAIVEXO
              de datum en de voorwaarden heeft bevestigd.
            </p>
          </div>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-primary px-8 py-4 font-semibold text-black transition hover:brightness-110"
          >
            Vraag beschikbaarheid aan
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <h2 className="text-3xl font-semibold md:text-4xl">
          Veelgestelde vragen over staantafel huren en statafel huren
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

              <p className="mt-3 leading-7 text-white/70">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-primary/20">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            DAIVEXO Light Cubes
          </p>

          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
            Een LED staantafel huren voor jouw evenement?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Op zoek naar één of meerdere lichtgevende
            statafels voor je feest, receptie of
            bedrijfsevenement?
            Geef de datum, locatie en het gewenste aantal tafels door.
            DAIVEXO bekijkt de beschikbaarheid en bezorgt je
            de mogelijkheden voor jouw evenement.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-primary px-8 py-4 font-semibold text-black transition hover:brightness-110"
          >
            Vraag je offerte of reservatie aan
          </Link>
        </div>
      </section>
    </main>
  )
}
