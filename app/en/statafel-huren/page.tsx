import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "LED Cocktail Tables for Hire | Event Furniture | DAIVEXO",
  description:
    "Hire illuminated LED cocktail tables, standing tables and Light Cubes for parties, receptions, corporate events and professional events. Discover DAIVEXO event furniture.",
  alternates: {
    canonical: "https://www.daivexo.com/en/statafel-huren/",
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
    title: "LED Cocktail Tables for Hire | DAIVEXO",
    description:
      "Hire illuminated LED cocktail tables, standing tables and Light Cubes for parties, receptions, corporate events and professional events.",
    url: "https://www.daivexo.com/en/statafel-huren/",
    siteName: "DAIVEXO",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LED Cocktail Tables for Hire | DAIVEXO",
    description:
      "Illuminated LED cocktail tables and Light Cubes for parties, receptions and events.",
  },
}

const faq = [
  {
    question: "Can I hire LED cocktail tables from DAIVEXO?",
    answer:
      "Yes. DAIVEXO offers illuminated cocktail tables and Light Cubes for parties, receptions, corporate events and other events.",
  },
  {
    question: "What is an LED cocktail table?",
    answer:
      "An LED cocktail table is an illuminated standing table that combines a practical table with atmospheric lighting. DAIVEXO Light Cubes can be used as distinctive illuminated cocktail tables.",
  },
  {
    question: "Can I hire several LED standing tables?",
    answer:
      "Yes. Multiple Light Cubes can be used as individual illuminated standing tables or combined as part of a larger event setup.",
  },
  {
    question: "Are the tables suitable for parties and receptions?",
    answer:
      "Yes. The illuminated tables are suitable for parties, receptions, corporate events and other professional events.",
  },
  {
    question: "Can DAIVEXO create larger event installations?",
    answer:
      "Yes. In addition to individual LED cocktail tables, multiple Light Cubes can be combined to create larger installations such as illuminated bars, DJ booths and Light Walls.",
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

export default function LedCocktailTablesPage() {
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
              LED cocktail tables for parties & events
            </p>

            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              LED cocktail tables for hire
              <span className="mt-2 block text-primary">
                Discover DAIVEXO Light Cubes
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">
              Looking for a{" "}
              <strong className="text-white">cocktail table</strong> or{" "}
              <strong className="text-white">standing table to hire</strong> for
              a party, reception or event? DAIVEXO offers distinctive{" "}
              <strong className="text-white">LED cocktail tables</strong>,{" "}
              <strong className="text-white">illuminated standing tables</strong>{" "}
              and Light Cubes that combine lighting, functionality and modern
              event design.
            </p>

            <p className="mt-5 max-w-2xl leading-7 text-white/70">
              From a single illuminated table to multiple Light Cubes for a
              complete event setting, the setup can be adapted to suit your
              event.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact/"
                className="rounded-full bg-primary px-7 py-4 text-center font-semibold text-black transition hover:brightness-110"
              >
                Request a quote
              </Link>

              <Link
                href="/light-cubes-inspiratie/"
                className="rounded-full border border-primary px-7 py-4 text-center font-semibold text-primary transition hover:bg-primary hover:text-black"
              >
                Discover our LED tables
              </Link>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-white/10">
            <Image
              src="/images/light-cube-green.jpeg"
              alt="Green illuminated LED cocktail table by DAIVEXO for events"
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
          LED cocktail tables and standing tables for hire
        </h2>

        <div className="mt-7 space-y-5 text-lg leading-8 text-white/75">
          <p>
            A conventional cocktail table is practical. An{" "}
            <strong className="text-white">illuminated cocktail table</strong>{" "}
            also becomes part of the visual design of your event. The DAIVEXO
            Light Cube combines the function of a standing table with integrated
            lighting and a contemporary appearance.
          </p>

          <p>
            Our <strong className="text-white">illuminated standing tables</strong>{" "}
            are suitable for receptions, birthday parties, weddings, corporate
            events, hospitality venues, product presentations and professional
            events.
          </p>

          <p>
            When hiring several{" "}
            <strong className="text-white">LED cocktail tables</strong>, the
            Light Cubes can be used individually or combined to create a larger
            visual event installation.
          </p>
        </div>
      </section>

      {/* USE CASES */}
      <section className="border-y border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              For every type of event
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Cocktail tables for parties, receptions and corporate events
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/70">
              DAIVEXO Light Cubes can be used wherever traditional standing
              tables are required, while adding atmospheric lighting and visual
              impact to the venue.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Parties",
                "Illuminated cocktail tables as stylish meeting points for your guests.",
              ],
              [
                "Receptions",
                "LED standing tables for welcoming guests and networking.",
              ],
              [
                "Corporate events",
                "Modern illuminated tables for professional event settings.",
              ],
              [
                "Hospitality & events",
                "Flexible illuminated event furniture with strong visual impact.",
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
              alt="Multiple blue illuminated LED cocktail tables for an event"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">
              From one illuminated table to a complete event setting
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/75">
              A Light Cube can be used as an individual{" "}
              <strong className="text-white">LED standing table</strong>, while
              multiple elements can be combined to create a much larger visual
              installation.
            </p>

            <p className="mt-5 text-lg leading-8 text-white/75">
              The same modular Light Cubes can be used as illuminated cocktail
              tables or combined into larger applications such as an
              illuminated bar, DJ booth or Light Wall.
            </p>

            <Link
              href="/light-cubes-inspiratie/"
              className="mt-8 inline-block font-semibold text-primary underline underline-offset-4"
            >
              View examples of our Light Cubes and LED tables
            </Link>
          </div>
        </div>
      </section>

      {/* SEARCH / COMMERCIAL CONTENT */}
      <section className="border-y border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-semibold md:text-4xl">
            A distinctive alternative to traditional cocktail tables
          </h2>

          <div className="mt-7 space-y-5 text-lg leading-8 text-white/75">
            <p>
              If you are looking for{" "}
              <strong className="text-white">cocktail tables for hire</strong>,{" "}
              <strong className="text-white">standing tables for hire</strong>{" "}
              or{" "}
              <strong className="text-white">event furniture rental</strong>,
              you usually need a practical place for guests to gather during a
              party or event. A DAIVEXO Light Cube combines that practical
              function with a distinctive illuminated design.
            </p>

            <p>
              Our <strong className="text-white">LED cocktail tables</strong>{" "}
              are particularly suited to events where conventional furniture
              does not provide enough visual impact. The integrated lighting
              makes the tables part of the atmosphere and overall event design.
            </p>

            <p>
              Whether you need one{" "}
              <strong className="text-white">illuminated standing table</strong>{" "}
              or several{" "}
              <strong className="text-white">LED tables for your event</strong>,
              contact DAIVEXO to discuss the possibilities for your event.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <h2 className="text-3xl font-semibold md:text-4xl">
          Frequently asked questions about LED cocktail table hire
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
            Looking to hire LED cocktail tables for your event?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Tell us how many tables you need and what type of event you are
            organising. We will help you find a suitable Light Cube setup.
          </p>

          <Link
            href="/contact/"
            className="mt-8 inline-block rounded-full bg-primary px-8 py-4 font-semibold text-black transition hover:brightness-110"
          >
            Request a quote
          </Link>
        </div>
      </section>
    </main>
  )
}
