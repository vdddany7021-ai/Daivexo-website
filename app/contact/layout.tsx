import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact & Offerte LED Statafels | DAIVEXO",
  description:
    "Contacteer DAIVEXO voor informatie of een vrijblijvende offerte voor LED statafels, lichtgevende staantafels, Light Cubes, eventmeubilair en SCANMIJ QR-labels.",
  alternates: {
    canonical: "https://www.daivexo.com/contact/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contact & Offerte LED Statafels | DAIVEXO",
    description:
      "Vraag informatie of een vrijblijvende offerte aan voor LED statafels, staantafels, Light Cubes, eventmeubilair en SCANMIJ QR-labels.",
    url: "https://www.daivexo.com/contact/",
    siteName: "DAIVEXO",
    locale: "nl_BE",
    type: "website",
  },
}

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
