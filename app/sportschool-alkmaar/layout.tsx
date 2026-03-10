import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sportschool Alkmaar - Kleine Groepen, Persoonlijke Coaching",
  description:
    "Op zoek naar een sportschool in Alkmaar? CrossFit Alkmaar biedt persoonlijke coaching in kleine groepen van max 12 personen. Voor alle niveaus, ook beginners en 50+. Probeer gratis!",
  keywords: ["sportschool Alkmaar", "gym Alkmaar", "fitness Alkmaar", "sportschool Alkmaar centrum", "beste sportschool Alkmaar", "sportschool met begeleiding Alkmaar"],
  openGraph: {
    title: "Sportschool Alkmaar | CrossFit Alkmaar",
    description:
      "Persoonlijke coaching in kleine groepen. Geen grote onpersoonlijke sportschool, maar een community waar iedereen je naam kent.",
    url: "https://crossfitalkmaar.com/sportschool-alkmaar",
  },
  alternates: {
    canonical: "https://crossfitalkmaar.com/sportschool-alkmaar",
  },
};

export default function SportschoolAlkmaarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
