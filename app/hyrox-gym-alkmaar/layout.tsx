import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HYROX Gym Alkmaar | CrossFit Alkmaar",
  description:
    "De beste HYROX gym in Alkmaar. Alle wedstrijdapparatuur, specifieke lessen en ervaren coaches bij CrossFit Alkmaar.",
  keywords: ["HYROX gym Alkmaar", "HYROX sportschool Alkmaar", "HYROX apparatuur gym", "HYROX lessen Alkmaar", "beste HYROX gym", "HYROX trainingslocatie Alkmaar"],
  alternates: {
    canonical: "https://crossfitalkmaar.com/hyrox-gym-alkmaar",
  },
  openGraph: {
    title: "HYROX Gym Alkmaar | CrossFit Alkmaar",
    description:
      "De beste HYROX gym in Alkmaar. Alle wedstrijdapparatuur, specifieke lessen en ervaren coaches bij CrossFit Alkmaar.",
    url: "https://crossfitalkmaar.com/hyrox-gym-alkmaar",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://crossfitalkmaar.com/images/hyrox-alkmaar-header.jpg",
        width: 1200,
        height: 630,
        alt: "HYROX Gym Alkmaar - CrossFit Alkmaar",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
