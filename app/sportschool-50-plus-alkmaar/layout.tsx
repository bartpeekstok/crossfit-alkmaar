import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sportschool 50+ Alkmaar - Veilig Sporten met Begeleiding",
  description:
    "Sportschool voor 50-plussers in Alkmaar. Bij CrossFit Alkmaar trainen leden van 20 tot 70+. Elke oefening wordt aangepast aan jouw niveau. Kleine groepen, persoonlijke coaching. Probeer gratis!",
  keywords: ["sportschool 50+ Alkmaar", "fitness 50 plus Alkmaar", "sporten ouderen Alkmaar", "sportschool senioren Alkmaar", "bewegen 50 plus Alkmaar", "fit blijven 50+"],
  openGraph: {
    title: "Sportschool 50+ Alkmaar | CrossFit Alkmaar",
    description:
      "Veilig sporten met professionele begeleiding. Onze leden zijn 20 tot 70+ jaar. Elke oefening wordt aangepast aan jouw niveau.",
    url: "https://crossfitalkmaar.com/sportschool-50-plus-alkmaar",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://crossfitalkmaar.com/images/50+-header.jpg",
        width: 1200,
        height: 630,
        alt: "Sportschool 50+ Alkmaar - CrossFit Alkmaar",
      },
    ],
  },
  alternates: {
    canonical: "https://crossfitalkmaar.com/sportschool-50-plus-alkmaar",
  },
};

export default function Sportschool50PlusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
