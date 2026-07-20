import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CrossFit Heerhugowaard - Train bij CrossFit Alkmaar",
  description:
    "CrossFit voor Heerhugowaard: op 10 minuten rijden train je bij CrossFit Alkmaar in kleine groepen met een coach. Voor alle niveaus. Plan je gratis kennismaking!",
  keywords: ["CrossFit Heerhugowaard", "sportschool Heerhugowaard", "fitness Heerhugowaard", "HYROX Heerhugowaard", "krachttraining Heerhugowaard"],
  openGraph: {
    title: "CrossFit Heerhugowaard | CrossFit Alkmaar",
    description:
      "Op 10 minuten van Heerhugowaard: CrossFit met persoonlijke begeleiding in kleine groepen.",
    url: "https://www.crossfitalkmaar.com/crossfit-heerhugowaard",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://www.crossfitalkmaar.com/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "CrossFit Heerhugowaard - CrossFit Alkmaar",
      },
    ],
  },
  alternates: {
    canonical: "https://www.crossfitalkmaar.com/crossfit-heerhugowaard",
  },
};

export default function CrossfitHeerhugowaardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
