import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Groepstraining Alkmaar - Train Samen, Word Sterker",
  description:
    "Groepstraining in Alkmaar bij CrossFit Alkmaar. Train in kleine groepen van max 12 personen met professionele coaching. Gevarieerde workouts, voor alle niveaus. Probeer gratis!",
  keywords: ["groepstraining Alkmaar", "groepstraining fitness Alkmaar", "samen trainen Alkmaar", "groepsfitness Alkmaar", "crossfit groepstraining"],
  openGraph: {
    title: "Groepstraining Alkmaar | CrossFit Alkmaar",
    description:
      "Train samen in kleine groepen met professionele coaching. Gevarieerde workouts voor alle niveaus.",
    url: "https://crossfitalkmaar.com/groepstraining-alkmaar",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://crossfitalkmaar.com/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Groepstraining Alkmaar - CrossFit Alkmaar",
      },
    ],
  },
  alternates: {
    canonical: "https://crossfitalkmaar.com/groepstraining-alkmaar",
  },
};

export default function GroepstrainingAlkmaarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
