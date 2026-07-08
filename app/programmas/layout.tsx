import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programma's - Sportschool Alkmaar met Begeleiding",
  description:
    "Alle trainingsprogramma's van CrossFit Alkmaar: groepslessen, BUILD small group, personal training en de 28 day kickstart. Voor beginners tot gevorderden, altijd met professionele coaches.",
  keywords: [
    "programma's crossfit alkmaar",
    "groepslessen alkmaar",
    "personal training alkmaar",
    "small group training alkmaar",
    "kickstart programma",
  ],
  openGraph: {
    title: "Programma's | CrossFit Alkmaar",
    description:
      "Ontdek alle trainingsprogramma's van CrossFit Alkmaar. Voor elk niveau en elke doelstelling.",
    url: "https://www.crossfitalkmaar.com/programmas",
  },
  alternates: {
    canonical: "https://www.crossfitalkmaar.com/programmas",
  },
};

export default function ProgrammasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
