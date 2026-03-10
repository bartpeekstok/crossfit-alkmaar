import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onze Leden",
  description:
    "Verhalen van echte leden van CrossFit Alkmaar. Bekijk video's van Malou, Steven, Jeanine en meer. Ontdek waarom zij kozen voor CrossFit Alkmaar.",
  keywords: [
    "leden crossfit alkmaar",
    "ervaringen crossfit alkmaar",
    "reviews sportschool alkmaar",
    "leden verhalen crossfit",
  ],
  openGraph: {
    title: "Onze Leden | CrossFit Alkmaar",
    description:
      "Verhalen van echte leden van CrossFit Alkmaar. Bekijk video's en ontdek waarom zij kozen voor ons.",
    url: "https://crossfitalkmaar.com/onze-leden",
  },
  alternates: {
    canonical: "https://crossfitalkmaar.com/onze-leden",
  },
};

export default function OnzeLedenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
