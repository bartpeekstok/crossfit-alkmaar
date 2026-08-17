import type { Metadata } from "next";

// Bedankt-pagina na betaling: niet indexeren (interne thank-you, alleen via
// redirect vanuit het betaal-project bereikbaar).
export const metadata: Metadata = {
  title: "Inschrijving betaald - The Hardest Mile",
  robots: { index: false, follow: false },
};

export default function HardestMileBetaaldLayout({ children }: { children: React.ReactNode }) {
  return children;
}
