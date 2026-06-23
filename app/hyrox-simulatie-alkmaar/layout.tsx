import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HYROX Simulatie Alkmaar | Race Simulatie 22 augustus",
  description:
    "Doe mee aan de HYROX Simulatie op 22 augustus bij CrossFit Alkmaar. Een volledige HYROX race: 8x 1km hardlopen afgewisseld met 8 functionele workouts.",
  keywords: ["HYROX simulatie Alkmaar", "HYROX race Alkmaar", "HYROX wedstrijd Alkmaar", "HYROX evenement Alkmaar", "HYROX oefenrace", "HYROX mock race Alkmaar"],
  alternates: {
    // www: het domein dat ook echt geserveerd wordt (kale .com 308't naar www).
    // Canonical naar non-www gaf een circulaire omleiding waardoor FB ads de URL
    // niet kon resolven.
    canonical: "https://www.crossfitalkmaar.com/hyrox-simulatie-alkmaar",
  },
  openGraph: {
    title: "HYROX Simulatie Alkmaar | Race Simulatie 22 augustus",
    description:
      "Doe mee aan de HYROX Simulatie op 22 augustus bij CrossFit Alkmaar. Een volledige HYROX race: 8x 1km hardlopen afgewisseld met 8 functionele workouts.",
    url: "https://www.crossfitalkmaar.com/hyrox-simulatie-alkmaar",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://www.crossfitalkmaar.com/images/hyrox-pft-header.jpg",
        width: 1200,
        height: 630,
        alt: "HYROX Simulatie Alkmaar - 22 augustus bij CrossFit Alkmaar",
      },
    ],
  },
  // twitter:title expliciet gelijk aan og:title (anders valt 'ie terug op de
  // homepage-titel uit de root-layout → mismatch-waarschuwing bij FB).
  twitter: {
    card: "summary_large_image",
    title: "HYROX Simulatie Alkmaar | Race Simulatie 22 augustus",
    description:
      "Doe mee aan de HYROX Simulatie op 22 augustus bij CrossFit Alkmaar. Een volledige HYROX race: 8x 1km hardlopen afgewisseld met 8 functionele workouts.",
    images: ["https://www.crossfitalkmaar.com/images/hyrox-pft-header.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
