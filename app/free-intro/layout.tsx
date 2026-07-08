import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gratis Kennismaking",
  description:
    "Plan je gratis kennismaking bij CrossFit Alkmaar. Maak kennis met onze coaches, bekijk de faciliteiten en ontdek welk programma bij jou past.",
  keywords: [
    "gratis kennismaking crossfit alkmaar",
    "proefles sportschool alkmaar",
    "gratis intake crossfit",
  ],
  openGraph: {
    title: "Gratis Kennismaking | CrossFit Alkmaar",
    description:
      "Plan je gratis kennismaking. Maak kennis met onze coaches en ontdek welk programma bij jou past.",
    url: "https://www.crossfitalkmaar.com/free-intro",
  },
  alternates: {
    canonical: "https://www.crossfitalkmaar.com/free-intro",
  },
};

export default function FreeIntroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
