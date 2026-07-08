import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HYROX Training Alkmaar - Wedstrijdvoorbereiding bij CrossFit Alkmaar",
  description:
    "HYROX training in Alkmaar bij CrossFit Alkmaar. Train voor je eerste of volgende HYROX wedstrijd met professionele coaching. Functionele fitness, running en strength in kleine groepen.",
  keywords: ["HYROX training Alkmaar", "HYROX Alkmaar", "HYROX voorbereiding", "HYROX gym Alkmaar", "functionele fitness Alkmaar", "HYROX coaching"],
  openGraph: {
    title: "HYROX Training Alkmaar | CrossFit Alkmaar",
    description:
      "Bereid je voor op HYROX met professionele coaching. Functionele fitness, running en strength training in kleine groepen.",
    url: "https://www.crossfitalkmaar.com/hyrox-training-alkmaar",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://www.crossfitalkmaar.com/images/hyrox-alkmaar-header.jpg",
        width: 1200,
        height: 630,
        alt: "HYROX Training Alkmaar - CrossFit Alkmaar",
      },
    ],
  },
  alternates: {
    canonical: "https://www.crossfitalkmaar.com/hyrox-training-alkmaar",
  },
};

export default function HyroxTrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
