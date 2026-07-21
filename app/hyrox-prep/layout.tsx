import type { Metadata } from "next";

// Wachtlijstpagina HYROX Prep Alkmaar. Gebouwd maar nog NIET live: noindex via
// meta en niet in de sitemap. Bewust NIET in robots.ts geblokkeerd, zodat de
// WhatsApp/Facebook-scraper de Open Graph-tags mag lezen voor een nette
// deel-preview. Bij livegang: noindex heroverwegen (advertentie-landingspagina
// kan noindex blijven) en eventueel toevoegen aan sitemap.ts.
const OG_IMAGE = "https://www.crossfitalkmaar.com/redesign/assets/header-hyrox.jpg";
const OG_DESC =
  "8 weken voorbereiding op HYROX Utrecht bij CrossFit Alkmaar. Zestien plekken. Wachtlijst krijgt 24 uur voorsprong en 50 euro korting.";

export const metadata: Metadata = {
  title: "HYROX Prep Alkmaar | Wachtlijst",
  description: OG_DESC,
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.crossfitalkmaar.com/hyrox-prep" },
  openGraph: {
    title: "HYROX Prep Alkmaar | Wachtlijst open",
    description: OG_DESC,
    url: "https://www.crossfitalkmaar.com/hyrox-prep",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1600, height: 1066, alt: "HYROX training bij CrossFit Alkmaar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HYROX Prep Alkmaar | Wachtlijst open",
    description: OG_DESC,
    images: [OG_IMAGE],
  },
};

export default function HyroxPrepWachtlijstLayout({ children }: { children: React.ReactNode }) {
  return children;
}
