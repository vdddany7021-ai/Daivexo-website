import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.daivexo.com"),

  title: {
    default: "Statafel Huren | LED Statafels & Staantafels Huren | DAIVEXO",
    template: "%s | DAIVEXO",
  },

  description:
    "Statafel of staantafel huren voor een feest of evenement? Huur LED statafels, lichtgevende staantafels en Light Cubes bij DAIVEXO. Ook verlichte bars, DJ Booths en Light Walls voor feesten, recepties en bedrijfsevents.",

  keywords: [
    "statafel huren",
    "statafels huren",
    "staantafel huren",
    "staantafels huren",
    "LED statafel huren",
    "LED statafels huren",
    "LED staantafel huren",
    "LED staantafels huren",
    "lichtgevende statafel huren",
    "lichtgevende statafels huren",
    "verlichte statafel huren",
    "verlichte statafels huren",
    "statafel verhuur",
    "staantafel verhuur",
    "LED statafel verhuur",
    "Light Cube huren",
    "Light Cubes huren",
    "eventmeubilair huren",
    "feestmeubilair huren",
    "verlichte bar huren",
    "DJ Booth huren",
    "Light Wall huren",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Statafel Huren | LED Statafels & Staantafels | DAIVEXO",
    description:
      "LED statafels, lichtgevende staantafels en Light Cubes huren voor feesten, recepties, bedrijfsevents en evenementen.",
    url: "https://www.daivexo.com/",
    siteName: "DAIVEXO",
    locale: "nl_BE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Statafel Huren | LED Statafels & Staantafels | DAIVEXO",
    description:
      "Huur LED statafels, lichtgevende staantafels en Light Cubes voor feesten en evenementen.",
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

  generator: "v0.app",

  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0f0f0f",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="nl-BE"
      className={`${inter.variable} ${playfair.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
