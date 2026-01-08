import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Groepslessen Alkmaar - CrossFit & Fitness Classes",
  description:
    "Groepslessen bij CrossFit Alkmaar. Gevarieerde workouts met kracht, conditie en mobiliteit. Professionele coaches, alle niveaus welkom. Probeer gratis!",
  keywords: ["groepslessen Alkmaar", "fitness classes Alkmaar", "CrossFit lessen", "groepstraining Alkmaar"],
  openGraph: {
    title: "Groepslessen | Samen Sterker Worden",
    description:
      "Gevarieerde workouts in een motiverende groep. Elke les anders, altijd uitdagend.",
    url: "https://crossfitalkmaar.com/groepslessen",
  },
  alternates: {
    canonical: "https://crossfitalkmaar.com/groepslessen",
  },
};

export default function GroepslessenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
