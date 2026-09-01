import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CrossFit Alkmaar | Fitnessstudio & Krafttraining in Alkmaar",
  description:
    "Fitnessstudio in Alkmaar für Krafttraining, Fitness und Abnehmen. Kleingruppentraining mit persönlicher Betreuung. Für alle Niveaus, auch 50+. Buche dein kostenloses Probetraining!",
  keywords: ["Fitnessstudio Alkmaar", "Krafttraining Alkmaar", "CrossFit Alkmaar", "Personal Training Alkmaar", "Fitness Alkmaar"],
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "CrossFit Alkmaar | Fitnessstudio & Krafttraining",
    description:
      "Fitnessstudio in Alkmaar für Krafttraining, Fitness und Abnehmen. Kleingruppentraining mit persönlicher Betreuung.",
    url: "https://www.crossfitalkmaar.com/de",
    locale: "de_DE",
  },
  alternates: {
    canonical: "https://www.crossfitalkmaar.com/de",
    languages: {
      "nl-NL": "https://www.crossfitalkmaar.com",
      "en-GB": "https://www.crossfitalkmaar.com/en",
      "de-DE": "https://www.crossfitalkmaar.com/de",
    },
  },
};

export default function GermanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
