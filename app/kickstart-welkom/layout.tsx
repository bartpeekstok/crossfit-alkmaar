import type { Metadata } from "next";

// Verborgen pagina: alleen via directe link te delen met Kickstart-deelnemers.
// NIET indexeren (geen Google) en niet in de sitemap. Bewust NIET in robots.ts
// geblokkeerd, zodat de WhatsApp/Facebook-scraper de Open Graph-tags wél mag
// lezen voor een nette deel-preview (de noindex hieronder houdt 'm uit Google).
const OG_IMAGE = "https://www.crossfitalkmaar.com/redesign/assets/header-community.jpg";
const OG_DESC =
  "Over een paar dagen begin je aan de 28 day kickstart. Hier vind je alles om goed voorbereid aan de start te staan. Tot snel!";

export const metadata: Metadata = {
  title: "Welkom bij CrossFit Alkmaar",
  description: OG_DESC,
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.crossfitalkmaar.com/kickstart-welkom" },
  openGraph: {
    title: "Welkom bij CrossFit Alkmaar",
    description: OG_DESC,
    url: "https://www.crossfitalkmaar.com/kickstart-welkom",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [{ url: OG_IMAGE, width: 2262, height: 1508, alt: "Welkom bij CrossFit Alkmaar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Welkom bij CrossFit Alkmaar",
    description: OG_DESC,
    images: [OG_IMAGE],
  },
};

export default function KickstartWelkomLayout({ children }: { children: React.ReactNode }) {
  return children;
}
