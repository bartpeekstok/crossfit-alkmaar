import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programma's",
  description:
    "Ontdek alle trainingsprogramma's van CrossFit Alkmaar. Van groepslessen tot personal training, voor elk niveau en elke doelstelling.",
  openGraph: {
    title: "Programma's | CrossFit Alkmaar",
    description:
      "Ontdek alle trainingsprogramma's van CrossFit Alkmaar. Voor elk niveau en elke doelstelling.",
    url: "https://crossfitalkmaar.com/programmas",
  },
  alternates: {
    canonical: "https://crossfitalkmaar.com/programmas",
  },
};

export default function ProgrammasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
