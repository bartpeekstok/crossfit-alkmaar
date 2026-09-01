import { Metadata } from "next";

export const metadata: Metadata = {
  title: "28 Day Kickstart - Starte mit Training in Alkmaar",
  description:
    "Starte deine Fitnessreise mit unserem 28 Day Kickstart in Alkmaar. In 4 Wochen baust du eine starke Basis auf mit begleitetem Training und Ernährungsberatung. Kostenloses Probetraining!",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "28 Day Kickstart | Starte deine Transformation",
    description:
      "In 4 Wochen vom Anfänger zum Fitten. Persönliche Betreuung, Ernährungsberatung und eine starke Basis.",
    url: "https://www.crossfitalkmaar.com/de/kickstart",
  },
  alternates: {
    canonical: "https://www.crossfitalkmaar.com/de/kickstart",
    languages: {
      "nl-NL": "https://www.crossfitalkmaar.com/kickstart",
      "en-GB": "https://www.crossfitalkmaar.com/en/kickstart",
      "de-DE": "https://www.crossfitalkmaar.com/de/kickstart",
    },
  },
};

export default function KickstartDELayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
