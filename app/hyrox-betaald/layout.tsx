import type { Metadata } from "next";

// Bedankt-pagina na betaling: niet indexeren (interne thank-you, alleen via
// redirect vanuit het betaal-project bereikbaar).
export const metadata: Metadata = {
  title: "Inschrijving betaald - HYROX Simulatie",
  robots: { index: false, follow: false },
};

export default function HyroxBetaaldLayout({ children }: { children: React.ReactNode }) {
  return children;
}
