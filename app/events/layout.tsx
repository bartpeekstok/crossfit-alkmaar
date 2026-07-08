import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | CrossFit Alkmaar",
  description:
    "Alle events bij CrossFit Alkmaar op een rij: HYROX simulaties, challenges en community-events. Voor leden en niet-leden. Bekijk de agenda en schrijf je in.",
  keywords: ["events CrossFit Alkmaar", "HYROX simulatie Alkmaar", "sportevenement Alkmaar", "fitness event Alkmaar", "CrossFit evenement"],
  alternates: {
    canonical: "https://www.crossfitalkmaar.com/events",
  },
  openGraph: {
    title: "Events | CrossFit Alkmaar",
    description:
      "Alle events bij CrossFit Alkmaar op een rij: HYROX simulaties, challenges en community-events. Voor leden en niet-leden.",
    url: "https://www.crossfitalkmaar.com/events",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://www.crossfitalkmaar.com/redesign/assets/header-hyrox.jpg",
        width: 1200,
        height: 630,
        alt: "Events bij CrossFit Alkmaar",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
