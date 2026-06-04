import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HYROX Simulatie Alkmaar | Race Simulatie 24 oktober",
  description:
    "Doe mee aan de HYROX Simulatie op 24 oktober bij CrossFit Alkmaar. Een volledige HYROX race: 8x 1km hardlopen afgewisseld met 8 functionele workouts.",
  keywords: ["HYROX simulatie Alkmaar", "HYROX race Alkmaar", "HYROX wedstrijd Alkmaar", "HYROX evenement Alkmaar", "HYROX oefenrace", "HYROX mock race Alkmaar"],
  alternates: {
    canonical: "https://crossfitalkmaar.com/hyrox-simulatie-24-oktober",
  },
  openGraph: {
    title: "HYROX Simulatie Alkmaar | Race Simulatie 24 oktober",
    description:
      "Doe mee aan de HYROX Simulatie op 24 oktober bij CrossFit Alkmaar. Een volledige HYROX race: 8x 1km hardlopen afgewisseld met 8 functionele workouts.",
    url: "https://crossfitalkmaar.com/hyrox-simulatie-24-oktober",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://crossfitalkmaar.com/images/hyrox-pft-header.jpg",
        width: 1200,
        height: 630,
        alt: "HYROX Simulatie Alkmaar - 24 oktober bij CrossFit Alkmaar",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
