import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Functional Fitness Alkmaar - Train voor het Echte Leven",
  description:
    "Functional fitness in Alkmaar bij CrossFit Alkmaar. Train bewegingen die je dagelijks gebruikt: tillen, duwen, trekken, hurken. Kleine groepen, professionele coaching. Probeer gratis!",
  keywords: ["functional fitness Alkmaar", "functioneel trainen Alkmaar", "functional training Alkmaar", "crossfit Alkmaar", "fitness Alkmaar"],
  openGraph: {
    title: "Functional Fitness Alkmaar | CrossFit Alkmaar",
    description:
      "Train bewegingen die je dagelijks gebruikt. Functional fitness met professionele coaching in kleine groepen.",
    url: "https://crossfitalkmaar.com/functional-fitness-alkmaar",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://crossfitalkmaar.com/images/CFA-november-lowres-94.jpg",
        width: 1200,
        height: 630,
        alt: "Functional Fitness Alkmaar - CrossFit Alkmaar",
      },
    ],
  },
  alternates: {
    canonical: "https://crossfitalkmaar.com/functional-fitness-alkmaar",
  },
};

export default function FunctionalFitnessAlkmaarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
