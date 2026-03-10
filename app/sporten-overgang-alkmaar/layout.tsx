import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sporten in de Overgang Alkmaar - Sterker Door de Overgang",
  description:
    "Sporten in de overgang in Alkmaar bij CrossFit Alkmaar. Krachttraining helpt bij overgangsklachten: betere botdichtheid, meer energie, minder klachten. Professionele begeleiding, voor alle niveaus. Probeer gratis!",
  keywords: ["sporten overgang Alkmaar", "overgang fitness Alkmaar", "menopauze sporten Alkmaar", "krachttraining overgang Alkmaar", "bewegen overgang Alkmaar", "sportschool vrouwen overgang Alkmaar"],
  openGraph: {
    title: "Sporten in de Overgang Alkmaar | CrossFit Alkmaar",
    description:
      "Krachttraining helpt bij overgangsklachten. Betere botdichtheid, meer energie, minder klachten. Professionele begeleiding.",
    url: "https://crossfitalkmaar.com/sporten-overgang-alkmaar",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://crossfitalkmaar.com/images/sporten-overgang-header.jpg",
        width: 1200,
        height: 630,
        alt: "Sporten in de Overgang Alkmaar - CrossFit Alkmaar",
      },
    ],
  },
  alternates: {
    canonical: "https://crossfitalkmaar.com/sporten-overgang-alkmaar",
  },
};

export default function SportenOvergangAlkmaarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
