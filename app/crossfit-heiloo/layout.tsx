import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CrossFit Heiloo - Train bij CrossFit Alkmaar",
  description:
    "Geen CrossFit-box in Heiloo? CrossFit Alkmaar zit op 10 minuten rijden. Train in kleine groepen met een coach, voor alle niveaus. Plan je gratis kennismaking!",
  keywords: ["CrossFit Heiloo", "sportschool Heiloo", "fitness Heiloo", "krachttraining Heiloo", "HYROX Heiloo"],
  openGraph: {
    title: "CrossFit Heiloo | CrossFit Alkmaar",
    description:
      "Op 10 minuten van Heiloo: CrossFit met persoonlijke begeleiding in kleine groepen.",
    url: "https://www.crossfitalkmaar.com/crossfit-heiloo",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://www.crossfitalkmaar.com/images/groepslessen-header.jpg",
        width: 1200,
        height: 630,
        alt: "CrossFit Heiloo - CrossFit Alkmaar",
      },
    ],
  },
  alternates: {
    canonical: "https://www.crossfitalkmaar.com/crossfit-heiloo",
  },
};

export default function CrossfitHeilooLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
