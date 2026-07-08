import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Groepslessen Alkmaar - CrossFit, Strength & Hyrox Classes",
  description:
    "Groepslessen bij CrossFit Alkmaar in groepen van max 12 personen. CrossFit, Strength en Hyrox classes met professionele coaches. Voor alle niveaus, ook beginners en 50+. Probeer gratis!",
  keywords: ["groepslessen Alkmaar", "fitness classes Alkmaar", "CrossFit lessen", "groepstraining Alkmaar", "sportschool groepslessen", "fitness beginners Alkmaar"],
  openGraph: {
    title: "Groepslessen | Samen Sterker Worden",
    description:
      "Gevarieerde workouts in een motiverende groep. Elke les anders, altijd uitdagend.",
    url: "https://www.crossfitalkmaar.com/groepslessen",
  },
  alternates: {
    canonical: "https://www.crossfitalkmaar.com/groepslessen",
  },
};

export default function GroepslessenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
