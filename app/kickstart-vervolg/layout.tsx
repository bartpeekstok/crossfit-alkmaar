import type { Metadata } from "next";

// Verborgen pagina: in week 4 van de Kickstart via link gedeeld. Niet indexeren
// (noindex via meta) en niet in de sitemap. Bewust NIET in robots.ts geblokkeerd,
// zodat de WhatsApp/Facebook-scraper de Open Graph-tags mag lezen voor een nette
// deel-preview.
const OG_IMAGE = "https://www.crossfitalkmaar.com/redesign/assets/header-groepslessen.jpg";
const OG_DESC =
  "Je Kickstart zit er bijna op. Ontdek hoe je verder gaat bij CrossFit Alkmaar: personal training, small group, groepslessen of voedingsadvies.";

export const metadata: Metadata = {
  title: "Hoe ga je verder na je Kickstart?",
  description: OG_DESC,
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.crossfitalkmaar.com/kickstart-vervolg" },
  openGraph: {
    title: "Hoe ga je verder na je Kickstart?",
    description: OG_DESC,
    url: "https://www.crossfitalkmaar.com/kickstart-vervolg",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1599, height: 1066, alt: "Verder trainen bij CrossFit Alkmaar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoe ga je verder na je Kickstart?",
    description: OG_DESC,
    images: [OG_IMAGE],
  },
};

export default function KickstartVervolgLayout({ children }: { children: React.ReactNode }) {
  return children;
}
