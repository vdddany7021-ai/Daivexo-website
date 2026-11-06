import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

const siteUrl = "https://www.daivexo.com"
const pageUrl = `${siteUrl}/statafel-huren`
const reservationUrl = "/?lightcubes=reservation"

export const metadata: Metadata = {
  title: { absolute: "LED-statafels huren in België | DAIVEXO Deinze" },
  description:
    "LED-statafels en Light Cubes huren? DAIVEXO uit Deinze levert in België, Nederland, Frankrijk, Duitsland, Luxemburg en het VK. Vraag een offerte aan.",
  alternates: {
    canonical: pageUrl,
    languages: {
      "nl-BE": pageUrl,
      "nl-NL": pageUrl,
      "fr-BE": `${siteUrl}/fr/statafel-huren`,
      "fr-FR": `${siteUrl}/fr/statafel-huren`,
      "fr-LU": `${siteUrl}/fr/statafel-huren`,
      "de-DE": `${siteUrl}/de/statafel-huren`,
      "de-LU": `${siteUrl}/de/statafel-huren`,
      en: `${siteUrl}/en/statafel-huren`,
      "x-default": `${siteUrl}/en/statafel-huren`,
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
    title: "LED-statafels huren in België en Europa | DAIVEXO",
    description:
      "DAIVEXO verhuurt LED-statafels vanuit Deinze, met levering in België en vijf andere Europese landen. Vraag vrijblijvend een offerte aan.",
    url: pageUrl,
    siteName: "DAIVEXO",
    locale: "nl_BE",
    type: "website",
    images: [{ url: `${siteUrl}/images/light-cube-green.jpeg`, alt: "Groene DAIVEXO LED Light Cube" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LED-statafels huren | DAIVEXO Deinze",
    description: "LED-statafels en Light Cubes huren in België of daarbuiten? Vraag DAIVEXO vrijblijvend een offerte aan.",
  },
}

const benefits = [
  {
    title: "Statafel én sfeerverlichting",
    description: "Een ontmoetingsplek voor gasten die tegelijk een lichtaccent aan je evenement toevoegt.",
  },
  {
    title: "Van één Cube tot een opstelling",
    description: "Vraag één blikvanger of meerdere Light Cubes aan, afgestemd op je evenement.",
  },
  {
    title: "Voor privé- en bedrijfsevents",
    description: "Geschikt als concept voor recepties, trouwfeesten, verjaardagen en zakelijke bijeenkomsten.",
  },
]

const faq = [
  {
    question: "Kan ik een LED statafel huren bij DAIVEXO?",
    answer:
      "Je kunt een offerte- of reservatieaanvraag indienen voor een toekomstige evenementdatum. DAIVEXO bevestigt vervolgens de beschikbaarheid en voorwaarden.",
  },
  {
    question: "Kan ik meerdere verlichte staantafels aanvragen?",
    answer:
      "Ja. Vermeld het gewenste aantal Light Cubes in je aanvraag. DAIVEXO bekijkt welke aantallen en opstellingen mogelijk zijn.",
  },
  {
    question: "Voor welke evenementen zijn Light Cubes bedoeld?",
    answer:
      "Onder meer voor recepties, trouwfeesten, verjaardagsfeesten, bedrijfsevenementen, productpresentaties en andere events.",
  },
  {
    question: "Wat kost het om een LED statafel te huren?",
    answer:
      "Vraag een vrijblijvende offerte aan met je evenementdatum, locatie en gewenste aantal tafels. DAIVEXO kan je dan informeren over de toepasselijke prijs en voorwaarden.",
  },
  {
    question: "In welke landen levert DAIVEXO LED-statafels?",
    answer:
      "DAIVEXO levert vanuit Deinze in heel België en ook in Nederland, Frankrijk, Duitsland, Luxemburg en het Verenigd Koninkrijk. Geef de evenementlocatie door voor een offerte met de toepasselijke leveringskosten en voorwaarden.",
  },
  {
    question: "Is mijn reservatie meteen definitief?",
    answer:
      "Nee. Een aanvraag is pas een definitieve reservatie nadat DAIVEXO de beschikbaarheid en voorwaarden heeft bevestigd.",
  },
]

export default function StatafelHurenPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              DAIVEXO Light Cubes · Verhuur voor evenementen
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              LED statafels en staantafels huren
              <span className="mt-3 block text-primary">voor een sfeervol evenement</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/80">
              DAIVEXO is gevestigd in Deinze en verhuurt LED-statafels, verlichte staantafels
              en Light Cubes voor feesten, huwelijken, recepties en bedrijfsevenementen.
              Wij leveren in heel België en ook in Nederland, Frankrijk, Duitsland, Luxemburg
              en het Verenigd Koninkrijk. Vraag vrijblijvend een offerte aan voor jouw locatie en datum.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href={reservationUrl} className="rounded-full bg-primary px-7 py-4 text-center font-semibold text-black transition hover:brightness-110">
                Vraag vrijblijvend een offerte aan
              </Link>
              <Link href="/light-cubes-inspiratie" className="rounded-full border border-primary px-7 py-4 text-center font-semibold text-primary transition hover:bg-primary hover:text-black">
                Bekijk de Light Cubes
              </Link>
            </div>
            <p className="mt-4 text-sm leading-6 text-white/60">
              Vermeld je datum, locatie en gewenst aantal. Een aanvraag is nog geen definitieve reservatie.
            </p>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-[28px] border border-white/10 sm:min-h-[460px]">
            <Image
              src="/images/light-cube-green.jpeg"
              alt="Groene lichtgevende LED statafel van DAIVEXO voor een evenement"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold md:text-4xl">Waarom een verlichte statafel huren?</h2>
          <p className="mt-5 text-lg leading-8 text-white/75">
            Een gewone staantafel is praktisch. Een LED staantafel voegt daar sfeer en uitstraling
            aan toe. De Light Cube is daardoor zowel meubilair als een zichtbaar onderdeel van
            je evenementaankleding.
          </p>
        </div>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="rounded-2xl border border-white/10 bg-neutral-950 p-7">
              <h3 className="text-xl font-semibold text-primary">{benefit.title}</h3>
              <p className="mt-3 leading-7 text-white/70">{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-neutral-950">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-20">
          <div className="relative min-h-[360px] overflow-hidden rounded-[28px] sm:min-h-[440px]">
            <Image
              src="/images/light-cubes-inspiratie/light-cubes-luxe-tuin-leie-blauw.jpg"
              alt="Blauwe verlichte Light Cubes als LED statafels in een sfeervolle opstelling"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Voor elk type evenement</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Van receptie tot bedrijfsevent</h2>
            <p className="mt-6 text-lg leading-8 text-white/75">
              Verlichte staantafels zijn een blikvanger op een trouwfeest, verjaardag,
              receptie of zakelijke bijeenkomst. Je kunt informeren naar één Light Cube
              of naar meerdere tafels voor een grotere opstelling.
            </p>
            <p className="mt-5 leading-7 text-white/70">
              Wil je weten welke opstelling bij je ruimte en aantal gasten past?
              Geef die informatie mee in je offerteaanvraag.
            </p>
            <Link href={reservationUrl} className="mt-8 inline-block rounded-full bg-primary px-7 py-4 font-semibold text-black transition hover:brightness-110">
              Informeer naar beschikbaarheid
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold md:text-4xl">Meer inspiratie met DAIVEXO Light Cubes</h2>
          <p className="mt-5 text-lg leading-8 text-white/75">
            Naast afzonderlijke LED statafels zijn er creatieve concepten met meerdere
            Light Cubes mogelijk. Bekijk de voorbeelden en bespreek wat haalbaar is voor jouw evenement.
          </p>
        </div>
        <div className="mt-9 grid gap-8 md:grid-cols-2">
          <article>
            <div className="relative min-h-[300px] overflow-hidden rounded-[28px] border border-white/10 sm:min-h-[390px]">
              <Image src="/images/light-cubes-inspiratie/bar-blauw-wit.jpg" alt="Concept voor een blauw-witte verlichte eventbar met Light Cubes" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <h3 className="mt-5 text-2xl font-semibold">Verlichte eventbar</h3>
            <p className="mt-3 leading-7 text-white/70">Een mogelijke combinatie van Light Cubes voor een grotere eventopstelling.</p>
          </article>
          <article>
            <div className="relative min-h-[300px] overflow-hidden rounded-[28px] border border-white/10 sm:min-h-[390px]">
              <Image src="/images/light-cubes-inspiratie/lightwall-multicolor.webp" alt="Meerkleurige Light Wall als decoratief concept met Light Cubes" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <h3 className="mt-5 text-2xl font-semibold">Light Wall</h3>
            <p className="mt-3 leading-7 text-white/70">Een lichtgevende achtergrond of blikvanger als onderdeel van de aankleding.</p>
          </article>
        </div>
        <Link href="/light-cubes-inspiratie" className="mt-8 inline-block font-semibold text-primary underline underline-offset-4">
          Bekijk alle Light Cubes-inspiratie
        </Link>
      </section>

      <section className="border-y border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-20">
          <h2 className="text-3xl font-semibold md:text-4xl">LED-statafels huren vanuit Deinze, in België en Europa</h2>
          <p className="mt-6 text-lg leading-8 text-white/75">
            DAIVEXO is gevestigd in Deinze (België). Onze verlichte statafels en Light Cubes
            zijn te huur voor feesten, huwelijken, recepties en bedrijfsevenementen in heel België.
            Daarnaast verzorgen we ook leveringen in Nederland, Frankrijk, Duitsland, Luxemburg
            en het Verenigd Koninkrijk.
          </p>
          <p className="mt-5 leading-7 text-white/70">
            Elke evenementlocatie is anders. Vermeld daarom je datum, adres en het gewenste aantal
            Light Cubes in je aanvraag. Wij bevestigen de beschikbaarheid, transportmogelijkheden,
            eventuele bijkomende leveringskosten en huurvoorwaarden vooraf in de offerte.
          </p>
          <div className="mt-8 rounded-2xl border border-white/10 bg-black p-7">
            <h3 className="text-xl font-semibold">Wat vermeld je in je aanvraag?</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-white/75">
              <li>Datum en locatie van je evenement</li>
              <li>Gewenst aantal LED statafels of Light Cubes</li>
              <li>Type evenement en eventuele wensen voor de opstelling</li>
            </ul>
            <Link href={reservationUrl} className="mt-7 inline-block rounded-full bg-primary px-7 py-4 font-semibold text-black transition hover:brightness-110">
              Vraag je offerte aan
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-20">
        <h2 className="text-3xl font-semibold md:text-4xl">Veelgestelde vragen over statafels huren</h2>
        <div className="mt-9 space-y-4">
          {faq.map((item) => (
            <article key={item.question} className="rounded-2xl border border-white/10 bg-neutral-950 p-6">
              <h3 className="text-xl font-semibold">{item.question}</h3>
              <p className="mt-3 leading-7 text-white/70">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-primary/20">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">DAIVEXO Light Cubes</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Maak van je evenement een blikvanger</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Vraag vrijblijvend een offerte aan voor één of meerdere verlichte statafels.
            We bekijken de mogelijkheden voor jouw datum en locatie.
          </p>
          <Link href={reservationUrl} className="mt-8 inline-block rounded-full bg-primary px-8 py-4 font-semibold text-black transition hover:brightness-110">
            Vraag vrijblijvend een offerte aan
          </Link>
        </div>
      </section>
    </main>
  )
}
