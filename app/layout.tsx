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
    default:
      "DAIVEXO | Verlichte statafels, Light Cubes & slimme QR labels",
    template: "%s | DAIVEXO",
  },

  description:
    "DAIVEXO creëert premium verlichte statafels, LED Light Cubes, lichtgevende bars, DJ Booths en Light Walls voor events, én slimme QR labels en QR stickers voor verloren voorwerpen.",

  keywords: [
    // LIGHT CUBES / EVENTMEUBILAIR
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

    // QR LABELS / SCANMIJ
    "QR label",
    "QR labels",
    "QR sticker",
    "QR stickers",
    "QR code sticker",
    "QR code label",
    "slim QR label",
    "slimme QR labels",
    "QR label verloren voorwerp",
    "QR sticker verloren voorwerp",
    "verloren voorwerpen terugvinden",
    "gevonden voorwerp QR",
    "scan QR label",
    "QR label school",
    "QR sticker school",
    "QR label kinderen",
    "QR sticker kinderen",
    "QR label brooddoos",
    "QR label drinkfles",
    "QR sticker schoolspullen",
    "naamlabel QR code",
    "Scanmij",
    "Scan mij QR",
    "gevonden scan mij",

    // MERK
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
    title:
      "DAIVEXO | Verlichte statafels, Light Cubes & slimme QR labels",
    description:
      "Premium verlichte eventmeubels en slimme QR-oplossingen voor verloren voorwerpen.",
    images: [
      {
        url: "/images/hero-bg.png",
        alt: "DAIVEXO - premium eventmeubilair en slimme QR oplossingen",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "DAIVEXO | Light Cubes, verlichte statafels & slimme QR labels",
    description:
      "Premium eventmeubilair en slimme QR labels voor verloren voorwerpen.",
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

  category: "Eventmeubilair en slimme QR-oplossingen",

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