import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarieven - CrossFit Alkmaar",
  description:
    "Bekijk de tarieven van CrossFit Alkmaar. Flexibele abonnementen voor groepslessen, personal training en small group training. Inclusief professionele coaching.",
  keywords: [
    "tarieven crossfit alkmaar",
    "prijzen sportschool alkmaar",
    "abonnement crossfit",
    "kosten personal training alkmaar",
  ],
  openGraph: {
    title: "Tarieven | CrossFit Alkmaar",
    description:
      "Bekijk de tarieven van CrossFit Alkmaar. Flexibele abonnementen inclusief professionele coaching.",
    url: "https://crossfitalkmaar.com/tarieven",
  },
  alternates: {
    canonical: "https://crossfitalkmaar.com/tarieven",
  },
};

export default function TarievenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
