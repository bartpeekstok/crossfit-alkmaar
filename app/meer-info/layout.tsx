import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meer Informatie",
  description:
    "Alles wat je wilt weten over CrossFit Alkmaar. Informatie over onze faciliteiten, trainingstijden, prijzen en meer.",
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
    url: "https://crossfitalkmaar.com/meer-info",
  },
  alternates: {
    canonical: "https://crossfitalkmaar.com/meer-info",
  },
};

export default function MeerInfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
