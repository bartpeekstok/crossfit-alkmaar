import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CrossFit Alkmaar | Fitnessstudio & Krafttraining in Alkmaar",
  description:
    "Fitnessstudio in Alkmaar für Krafttraining, Fitness und Abnehmen. Kleingruppentraining mit persönlicher Betreuung. Für alle Niveaus, auch 50+. Buche dein kostenloses Probetraining!",
  keywords: ["Fitnessstudio Alkmaar", "Krafttraining Alkmaar", "CrossFit Alkmaar", "Personal Training Alkmaar", "Fitness Alkmaar"],
  openGraph: {
    title: "CrossFit Alkmaar | Fitnessstudio & Krafttraining",
    description:
      "Fitnessstudio in Alkmaar für Krafttraining, Fitness und Abnehmen. Kleingruppentraining mit persönlicher Betreuung.",
    url: "https://crossfitalkmaar.com/de",
    locale: "de_DE",
  },
  alternates: {
    canonical: "https://crossfitalkmaar.com/de",
    languages: {
      "nl-NL": "https://crossfitalkmaar.com",
      "en-GB": "https://crossfitalkmaar.com/en",
      "de-DE": "https://crossfitalkmaar.com/de",
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
