import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CrossFit Bergen NH - Train bij CrossFit Alkmaar",
  description:
    "Geen CrossFit-box in Bergen NH? CrossFit Alkmaar zit op een kwartier rijden. Kracht en conditie in kleine groepen met een coach. Plan je gratis kennismaking!",
  keywords: ["CrossFit Bergen NH", "sportschool Bergen NH", "fitness Bergen", "krachttraining Bergen", "CrossFit Schoorl", "CrossFit Egmond"],
  openGraph: {
    title: "CrossFit Bergen NH | CrossFit Alkmaar",
    description:
      "Op een kwartier van Bergen: CrossFit met persoonlijke begeleiding in kleine groepen.",
    url: "https://www.crossfitalkmaar.com/crossfit-bergen",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://www.crossfitalkmaar.com/images/CFA-juni-03-community.jpg",
        width: 1200,
        height: 630,
        alt: "CrossFit Bergen NH - CrossFit Alkmaar",
      },
    ],
  },
  alternates: {
    canonical: "https://www.crossfitalkmaar.com/crossfit-bergen",
  },
};

export default function CrossfitBergenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
