import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CrossFit voor Vrouwen Alkmaar - Word Sterker, Niet Groter",
  description:
    "CrossFit voor vrouwen in Alkmaar. Word sterker, fitter en zelfverzekerder zonder bodybuilder te worden. Kleine groepen, professionele coaching, voor alle niveaus. Probeer gratis!",
  keywords: ["crossfit vrouwen Alkmaar", "fitness vrouwen Alkmaar", "sportschool vrouwen Alkmaar", "krachttraining vrouwen Alkmaar", "afvallen vrouwen Alkmaar"],
  openGraph: {
    title: "CrossFit voor Vrouwen Alkmaar | CrossFit Alkmaar",
    description:
      "Word sterker, fitter en zelfverzekerder. CrossFit voor vrouwen met professionele coaching in kleine groepen.",
    url: "https://crossfitalkmaar.com/crossfit-vrouwen-alkmaar",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://crossfitalkmaar.com/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "CrossFit voor Vrouwen Alkmaar - CrossFit Alkmaar",
      },
    ],
  },
  alternates: {
    canonical: "https://crossfitalkmaar.com/crossfit-vrouwen-alkmaar",
  },
};

export default function CrossfitVrouwenAlkmaarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
