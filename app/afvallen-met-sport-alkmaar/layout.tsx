import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Afvallen met Sport Alkmaar - Duurzaam Resultaat, Geen Crashdieet",
  description:
    "Afvallen met sport in Alkmaar bij CrossFit Alkmaar. Combineer krachttraining en conditie voor duurzaam gewichtsverlies. Professionele coaching en voedingsadvies. Probeer gratis!",
  keywords: ["afvallen met sport Alkmaar", "afvallen sportschool Alkmaar", "gewicht verliezen Alkmaar", "vetverbranding Alkmaar", "afvallen door sporten Alkmaar"],
  openGraph: {
    title: "Afvallen met Sport Alkmaar | CrossFit Alkmaar",
    description:
      "Duurzaam afvallen door krachttraining en conditie. Professionele coaching en voedingsadvies.",
    url: "https://crossfitalkmaar.com/afvallen-met-sport-alkmaar",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://crossfitalkmaar.com/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Afvallen met Sport Alkmaar - CrossFit Alkmaar",
      },
    ],
  },
  alternates: {
    canonical: "https://crossfitalkmaar.com/afvallen-met-sport-alkmaar",
  },
};

export default function AfvallenMetSportAlkmaarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
