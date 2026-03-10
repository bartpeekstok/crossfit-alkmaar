import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HYROX Voorbereiding Alkmaar | CrossFit Alkmaar",
  description:
    "Bereid je voor op HYROX bij CrossFit Alkmaar. Alle apparatuur, ervaren coaches en specifieke HYROX-programmering.",
  keywords: ["HYROX voorbereiding Alkmaar", "HYROX training Alkmaar", "HYROX wedstrijd voorbereiden", "HYROX coach Alkmaar", "HYROX programmering Alkmaar", "HYROX apparatuur Alkmaar"],
  alternates: {
    canonical: "https://crossfitalkmaar.com/hyrox-voorbereiding-alkmaar",
  },
  openGraph: {
    title: "HYROX Voorbereiding Alkmaar | CrossFit Alkmaar",
    description:
      "Bereid je voor op HYROX bij CrossFit Alkmaar. Alle apparatuur, ervaren coaches en specifieke HYROX-programmering.",
    url: "https://crossfitalkmaar.com/hyrox-voorbereiding-alkmaar",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://crossfitalkmaar.com/images/hyrox-alkmaar-header.jpg",
        width: 1200,
        height: 630,
        alt: "HYROX Voorbereiding Alkmaar - CrossFit Alkmaar",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
