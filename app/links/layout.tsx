import type { Metadata } from "next";

// Link-in-bio pagina (vervangt Linktree). Alleen een lijst met links, dus
// noindex: mag niet als dunne pagina naast de homepage in Google verschijnen.
// Bewust NIET in robots.ts disallow, zodat de Instagram/WhatsApp-scraper de
// OG-tags kan lezen voor een nette deel-preview.
export const metadata: Metadata = {
  title: "Links | CrossFit Alkmaar",
  description: "Gratis intake, 28 Day Kickstart, events en meer. Alle links van CrossFit Alkmaar op een rij.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.crossfitalkmaar.com/links" },
  openGraph: {
    title: "CrossFit Alkmaar",
    description: "Gratis intake, 28 Day Kickstart, events en meer.",
    url: "https://www.crossfitalkmaar.com/links",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [{ url: "https://www.crossfitalkmaar.com/redesign/assets/photo-community.webp" }],
  },
};

export default function LinksLayout({ children }: { children: React.ReactNode }) {
  return children;
}
