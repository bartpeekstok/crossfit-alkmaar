import type { Metadata } from "next";

// Verborgen pagina: alleen via directe link te delen met Kickstart-deelnemers.
// NIET indexeren (geen Google), niet in de sitemap, geblokkeerd in robots.ts.
export const metadata: Metadata = {
  title: "Welkom bij je Kickstart",
  robots: { index: false, follow: false },
};

export default function KickstartWelkomLayout({ children }: { children: React.ReactNode }) {
  return children;
}
