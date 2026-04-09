import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarieven - CrossFit Alkmaar",
  description:
    "Tarieven CrossFit Alkmaar: groepslessen vanaf €99,95/maand, BUILD small group training vanaf €245/maand, 28 Day Kickstart €350 eenmalig. Inclusief professionele coaching in kleine groepen. Maandelijks opzegbaar.",
  keywords: [
    "tarieven crossfit alkmaar",
    "prijzen sportschool alkmaar",
    "abonnement crossfit",
    "kosten personal training alkmaar",
  ],
  openGraph: {
    title: "Tarieven | CrossFit Alkmaar",
    description:
      "Tarieven CrossFit Alkmaar: groepslessen vanaf €99,95/maand, BUILD vanaf €245/maand, Kickstart €350. Maandelijks opzegbaar.",
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
