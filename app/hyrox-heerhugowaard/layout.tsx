import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HYROX Heerhugowaard - Train bij CrossFit Alkmaar",
  description:
    "HYROX trainen vanuit Heerhugowaard? Op 10 minuten rijden vind je een officiële HYROX gym met alle stations, coaching en simulatie-events. Plan je gratis kennismaking!",
  keywords: ["HYROX Heerhugowaard", "HYROX training Heerhugowaard", "HYROX gym Heerhugowaard", "HYROX Dijk en Waard", "functional fitness Heerhugowaard"],
  openGraph: {
    title: "HYROX Heerhugowaard | CrossFit Alkmaar",
    description:
      "Op 10 minuten van Heerhugowaard: officiële HYROX gym met alle stations en coaching.",
    url: "https://www.crossfitalkmaar.com/hyrox-heerhugowaard",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://www.crossfitalkmaar.com/images/hyrox-alkmaar-header.jpg",
        width: 1200,
        height: 630,
        alt: "HYROX Heerhugowaard - CrossFit Alkmaar",
      },
    ],
  },
  alternates: {
    canonical: "https://www.crossfitalkmaar.com/hyrox-heerhugowaard",
  },
};

export default function HyroxHeerhugowaardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
