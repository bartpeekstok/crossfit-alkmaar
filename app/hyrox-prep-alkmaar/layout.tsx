import type { Metadata } from "next";

// HYROX Prep Alkmaar: 8-weeks voorbereidingsprogramma voor HYROX Utrecht.
// Pagina is gebouwd maar nog NIET live: noindex via meta en niet in de sitemap.
// Bewust NIET in robots.ts geblokkeerd, zodat de WhatsApp/Facebook-scraper de
// Open Graph-tags mag lezen voor een nette deel-preview.
// Bij livegang: noindex weghalen, toevoegen aan sitemap.ts en BreadcrumbSchema.
const OG_IMAGE = "https://www.crossfitalkmaar.com/redesign/assets/header-hyrox.jpg";
const OG_DESC =
  "8 weken gerichte voorbereiding op HYROX Utrecht. Twee trainingen per week, maximaal 16 deelnemers, van 4 oktober tot en met 25 november bij CrossFit Alkmaar.";

export const metadata: Metadata = {
  title: "HYROX Prep Alkmaar | Klaar voor HYROX Utrecht in 8 weken",
  description: OG_DESC,
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.crossfitalkmaar.com/hyrox-prep-alkmaar" },
  openGraph: {
    title: "HYROX Prep Alkmaar | Klaar voor HYROX Utrecht in 8 weken",
    description: OG_DESC,
    url: "https://www.crossfitalkmaar.com/hyrox-prep-alkmaar",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1600, height: 1066, alt: "HYROX training bij CrossFit Alkmaar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HYROX Prep Alkmaar | Klaar voor HYROX Utrecht in 8 weken",
    description: OG_DESC,
    images: [OG_IMAGE],
  },
};

export default function HyroxPrepLayout({ children }: { children: React.ReactNode }) {
  return children;
}
