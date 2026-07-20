import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lesrooster, Tarieven & Contact",
  description:
    "Bekijk het lesrooster, de tarieven en de locatie van CrossFit Alkmaar. Alle praktische info op een rij, plus direct een gratis kennismaking plannen.",
  keywords: [
    "crossfit alkmaar informatie",
    "sportschool alkmaar info",
    "crossfit alkmaar faciliteiten",
    "trainingstijden crossfit alkmaar",
  ],
  openGraph: {
    title: "Meer Informatie | CrossFit Alkmaar",
    description:
      "Alles wat je wilt weten over CrossFit Alkmaar. Faciliteiten, trainingstijden, prijzen en meer.",
    url: "https://www.crossfitalkmaar.com/meer-info",
  },
  alternates: {
    canonical: "https://www.crossfitalkmaar.com/meer-info",
  },
};

export default function MeerInfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
