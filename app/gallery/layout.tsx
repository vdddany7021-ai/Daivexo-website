import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "UV-werend Gezichtsmasker | DAIVEXO",
  description:
    "Ontdek het door DAIVEXO ontwikkelde UV-werende gezichtsmasker: een op maat ontworpen oplossing met transparant gezichtsscherm en UV-werende bescherming voor gezicht, hals en nek.",
  alternates: {
    canonical: "https://www.daivexo.com/gallery/",
  },
  openGraph: {
    title: "UV-werend Gezichtsmasker | DAIVEXO",
    description:
      "Ontdek het door DAIVEXO ontwikkelde UV-werende gezichtsmasker met bescherming voor gezicht, hals en nek.",
    url: "https://www.daivexo.com/gallery/",
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
