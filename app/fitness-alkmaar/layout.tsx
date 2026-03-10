import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fitness Alkmaar - Persoonlijke Begeleiding bij CrossFit Alkmaar",
  description:
    "Fitness in Alkmaar met persoonlijke begeleiding in kleine groepen. CrossFit, strength training en meer. Geen abonnement nodig om te starten. Boek een gratis kennismaking!",
  keywords: ["fitness Alkmaar", "fitnessen Alkmaar", "fitness begeleiding Alkmaar", "personal training Alkmaar", "fitness voor beginners Alkmaar", "fitness centrum Alkmaar"],
  openGraph: {
    title: "Fitness Alkmaar | CrossFit Alkmaar",
    description:
      "Fitness met persoonlijke begeleiding. Elke training wordt begeleid door een coach die je bij naam kent.",
    url: "https://crossfitalkmaar.com/fitness-alkmaar",
  },
  alternates: {
    canonical: "https://crossfitalkmaar.com/fitness-alkmaar",
  },
};

export default function FitnessAlkmaarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
