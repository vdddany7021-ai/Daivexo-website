import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.daivexo.com"),

  title: {
    default: "DAIVEXO | Verlichte statafels, Light Cubes & eventmeubilair",
    template: "%s | DAIVEXO",
  },

  description:
    "DAIVEXO creëert en verhuurt premium verlichte statafels, LED Light Cubes, lichtgevende bars, DJ Booths en Light Walls voor feesten, bedrijfsevents, recepties en evenementen in België.",

  keywords: [
    "verlichte statafel",
    "verlichte statafels",
    "lichtgevende statafel",
    "lichtgevende statafels",
    "LED statafel",
    "LED statafel huren",
    "verlichte statafel huren",
    "Light Cube",
    "Light Cubes",
    "Light Cube huren",
    "LED Light Cube",
    "IBC statafel",
    "IBC container verlichting",
    "verlichte IBC container",
    "LED IBC container",
    "IBC eventmeubilair",
    "eventmeubilair",
    "verlicht eventmeubilair",
    "lichtgevend eventmeubilair",
    "LED eventmeubilair",
    "verlichte bar",
    "LED bar",
    "Light Bar",
    "DJ Booth",
    "verlichte DJ Booth",
    "Light Wall",
    "lichtgevende eventwand",
    "eventmeubilair huren België",
    "statafel huren België",
    "event verlichting",
    "DAIVEXO",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "nl_BE",
    url: "https://www.daivexo.com",
    siteName: "DAIVEXO",
    title: "DAIVEXO | Verlichte statafels, Light Cubes & eventmeubilair",
    description:
      "Premium verlichte statafels, LED Light Cubes, Light Bars, DJ Booths en Light Walls voor feesten en evenementen.",
    images: [
      {
        url: "/images/hero-bg.png",
        alt: "DAIVEXO - premium verlichte eventmeubels en Light Cubes",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DAIVEXO | Verlichte statafels & Light Cubes",
    description:
      "Premium verlichte statafels en eventmeubilair voor feesten, bedrijfsevents en evenementen.",
    images: ["/images/hero-bg.png"],
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

  category: "Eventmeubilair",

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
  colorScheme: "dark",
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