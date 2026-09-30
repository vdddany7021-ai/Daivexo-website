import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Light Cubes & LED Statafels Huren | DAIVEXO",
  description:
    "Ontdek DAIVEXO Light Cubes: verlichte LED statafels, bars, DJ-booths en Light Walls voor feesten, events, horeca en bedrijfsevenementen.",
  alternates: {
    canonical: "https://www.daivexo.com/light-cubes-inspiratie/",
  },
  openGraph: {
    title: "Light Cubes & LED Statafels | DAIVEXO",
    description:
      "Ontdek verlichte Light Cubes als statafel, bar, DJ-booth en Light Wall voor feesten en evenementen.",
    url: "https://www.daivexo.com/light-cubes-inspiratie/",
    siteName: "DAIVEXO",
    type: "website",
  },
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
