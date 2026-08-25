import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "LED Statafel & Staantafel Huren | Light Cubes | DAIVEXO",
  description:
    "Huur LED statafels en lichtgevende staantafels van DAIVEXO voor feesten, recepties, bedrijfsevents en evenementen. Ontdek Light Cubes, verlichte bars, DJ Booths en Light Walls.",
  keywords: [
    "LED statafel",
    "LED statafels",
    "LED staantafel",
    "LED staantafels",
    "statafel huren",
    "statafels huren",
    "staantafel huren",
    "staantafels huren",
    "verlichte statafel",
    "verlichte statafels",
    "lichtgevende statafel",
    "lichtgevende staantafel",
    "Light Cube huren",
    "Light Cubes huren",
    "eventmeubilair huren",
    "verlichte bar",
    "DJ Booth",
    "Light Wall",
    "DAIVEXO",
  ],
  openGraph: {
    title: "LED Statafels & Staantafels Huren | DAIVEXO",
    description:
      "Unieke LED statafels, lichtgevende staantafels, Light Cubes, bars, DJ Booths en Light Walls voor feesten en evenementen.",
    type: "website",
  },
}

export default function LightCubesInspiratieLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}