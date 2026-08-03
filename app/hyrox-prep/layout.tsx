import type { Metadata } from "next";

// Wachtlijstpagina HYROX Prep Alkmaar. Sinds 3 aug 2026 publiek: geindexeerd,
// in de sitemap en gelinkt vanaf /events en /hyrox-alkmaar. De verkooppagina
// (/hyrox-prep-alkmaar) blijft verborgen tot de inschrijving opent op 1 sept;
// dan wisselen de rollen (verkooppagina indexeren, deze wachtlijst eruit).
const OG_IMAGE = "https://www.crossfitalkmaar.com/redesign/assets/header-hyrox.jpg";
const OG_DESC =
  "8 weken voorbereiding op HYROX Utrecht bij CrossFit Alkmaar. Zestien plekken. Wachtlijst krijgt 24 uur voorsprong en 50 euro korting.";

export const metadata: Metadata = {
  title: "HYROX Prep Alkmaar | Wachtlijst",
  description: OG_DESC,
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
