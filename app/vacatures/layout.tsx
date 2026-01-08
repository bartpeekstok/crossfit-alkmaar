import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vacatures",
  description:
    "Werk bij CrossFit Alkmaar! Bekijk onze vacatures voor coaches, gym managers en meer. Word onderdeel van ons team.",
  openGraph: {
    title: "Vacatures | CrossFit Alkmaar",
    description:
      "Werk bij CrossFit Alkmaar! Bekijk onze vacatures en word onderdeel van ons team.",
    url: "https://crossfitalkmaar.com/vacatures",
  },
  alternates: {
    canonical: "https://crossfitalkmaar.com/vacatures",
  },
};

export default function VacaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
