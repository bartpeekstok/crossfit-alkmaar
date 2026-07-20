import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CrossFit Langedijk - Train bij CrossFit Alkmaar",
  description:
    "Geen CrossFit-box in Langedijk? Vanaf Broek op Langedijk of Sint Pancras train je binnen 15 minuten bij CrossFit Alkmaar. Plan je gratis kennismaking!",
  keywords: ["CrossFit Langedijk", "sportschool Langedijk", "CrossFit Broek op Langedijk", "CrossFit Sint Pancras", "fitness Langedijk", "CrossFit Dijk en Waard"],
  openGraph: {
    title: "CrossFit Langedijk | CrossFit Alkmaar",
    description:
      "Op een kwartier van Langedijk: CrossFit met persoonlijke begeleiding in kleine groepen.",
    url: "https://www.crossfitalkmaar.com/crossfit-langedijk",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://www.crossfitalkmaar.com/images/krachttraining-alkmaar-header.jpg",
        width: 1200,
        height: 630,
        alt: "CrossFit Langedijk - CrossFit Alkmaar",
      },
    ],
  },
  alternates: {
    canonical: "https://www.crossfitalkmaar.com/crossfit-langedijk",
  },
};

export default function CrossfitLangedijkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
