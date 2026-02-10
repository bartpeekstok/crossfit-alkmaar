import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gratis Kennismaking",
  description:
    "Plan je gratis kennismaking bij CrossFit Alkmaar. Maak kennis met onze coaches, bekijk de faciliteiten en ontdek welk programma bij jou past.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Gratis Kennismaking | CrossFit Alkmaar",
    description:
      "Plan je gratis kennismaking. Maak kennis met onze coaches en ontdek welk programma bij jou past.",
    url: "https://crossfitalkmaar.com/free-intro",
  },
  alternates: {
    canonical: "https://crossfitalkmaar.com/free-intro",
  },
};

export default function FreeIntroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
