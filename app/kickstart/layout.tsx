import { Metadata } from "next";

export const metadata: Metadata = {
  title: "28 Day CrossFit Kickstart - In 4 Weken een Vast Trainingsritme",
  description:
    "Begin zonder ervaring: de 28 Day Kickstart in Alkmaar geeft je in 4 weken een vast ritme, persoonlijke begeleiding en voedingsadvies. Plan je gratis kennismaking.",
  keywords: ["kickstart programma Alkmaar", "beginnen met fitness Alkmaar", "4 weken trainingsprogramma", "beginners sportschool Alkmaar", "CrossFit beginners"],
  openGraph: {
    title: "28 Day Kickstart | Begin Jouw Transformatie",
    description:
      "In 4 weken van beginner naar fit. Persoonlijke begeleiding, voedingsadvies en een sterke basis.",
    url: "https://www.crossfitalkmaar.com/kickstart",
  },
  alternates: {
    canonical: "https://www.crossfitalkmaar.com/kickstart",
    languages: {
      "nl-NL": "https://www.crossfitalkmaar.com/kickstart",
      "en-GB": "https://www.crossfitalkmaar.com/en/kickstart",
      "de-DE": "https://www.crossfitalkmaar.com/de/kickstart",
    },
  },
};

export default function KickstartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
