import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sportschool met Begeleiding Alkmaar - Altijd een Coach Naast Je",
  description:
    "Sportschool met professionele begeleiding in Alkmaar. Bij CrossFit Alkmaar train je altijd onder leiding van een coach, in kleine groepen van max 12. Voor beginners en gevorderden. Probeer gratis!",
  keywords: ["sportschool met begeleiding Alkmaar", "sportschool coaching Alkmaar", "begeleid trainen Alkmaar", "personal coaching sportschool Alkmaar", "sportschool met trainer Alkmaar"],
  openGraph: {
    title: "Sportschool met Begeleiding Alkmaar | CrossFit Alkmaar",
    description:
      "Train altijd onder leiding van een professionele coach. Kleine groepen, persoonlijke aandacht.",
    url: "https://crossfitalkmaar.com/sportschool-begeleiding-alkmaar",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://crossfitalkmaar.com/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Sportschool met Begeleiding Alkmaar - CrossFit Alkmaar",
      },
    ],
  },
  alternates: {
    canonical: "https://crossfitalkmaar.com/sportschool-begeleiding-alkmaar",
  },
};

export default function SportschoolBegeleidingAlkmaarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
