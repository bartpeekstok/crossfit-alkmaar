import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HYROX Alkmaar | Training, Events & Gym | CrossFit Alkmaar",
  description:
    "Alles over HYROX bij CrossFit Alkmaar: officiële HYROX gym, trainingen, Physical Fitness Test en Simulatie. De beste HYROX-voorbereiding in Alkmaar.",
  keywords: ["HYROX Alkmaar", "HYROX training Alkmaar", "HYROX gym Alkmaar", "HYROX evenement Alkmaar", "HYROX PFT Alkmaar", "HYROX simulatie Alkmaar"],
  alternates: {
    canonical: "https://crossfitalkmaar.com/hyrox-alkmaar",
  },
  openGraph: {
    title: "HYROX Alkmaar | Training, Events & Gym | CrossFit Alkmaar",
    description:
      "Alles over HYROX bij CrossFit Alkmaar: officiële HYROX gym, trainingen, Physical Fitness Test en Simulatie.",
    url: "https://crossfitalkmaar.com/hyrox-alkmaar",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://crossfitalkmaar.com/images/hyrox-alkmaar-header.jpg",
        width: 1200,
        height: 630,
        alt: "HYROX Alkmaar - CrossFit Alkmaar officiële HYROX gym",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
