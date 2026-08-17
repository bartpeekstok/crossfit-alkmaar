import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Hardest Mile Alkmaar | Zondag 13 september",
  description:
    "Doe mee aan The Hardest Mile op zondag 13 september op de atletiekbaan van AV Hylas in Alkmaar. Eén mijl, vier onderdelen: burpees, lunges, bearcrawl en hardlopen. Voor alle niveaus, ook niet-leden.",
  keywords: ["The Hardest Mile", "Hardest Mile Alkmaar", "hardloopevent Alkmaar", "fitness event Alkmaar", "CrossFit Alkmaar event", "atletiekbaan Hylas"],
  alternates: {
    canonical: "https://www.crossfitalkmaar.com/hardest-mile",
  },
  openGraph: {
    title: "The Hardest Mile Alkmaar | Zondag 13 september",
    description:
      "Eén mijl, vier onderdelen: burpees, lunges, bearcrawl en hardlopen. Zondag 13 september op de atletiekbaan van AV Hylas in Alkmaar. Voor alle niveaus, ook niet-leden.",
    url: "https://www.crossfitalkmaar.com/hardest-mile",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://www.crossfitalkmaar.com/redesign/assets/header-hardest-mile.jpg",
        width: 1200,
        height: 630,
        alt: "Atletiekbaan met genummerde banen, het decor van The Hardest Mile",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
