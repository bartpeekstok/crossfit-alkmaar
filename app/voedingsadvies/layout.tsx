import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voedingsadvies",
  description:
    "Persoonlijk voedingsadvies bij CrossFit Alkmaar. Geen strenge diëten maar praktische tips die passen bij jouw levensstijl voor optimale resultaten.",
  openGraph: {
    title: "Voedingsadvies | CrossFit Alkmaar",
    description:
      "Persoonlijk voedingsadvies. Geen strenge diëten maar praktische tips die passen bij jouw levensstijl voor optimale resultaten.",
    url: "https://crossfitalkmaar.com/voedingsadvies",
  },
  alternates: {
    canonical: "https://crossfitalkmaar.com/voedingsadvies",
  },
};

export default function VoedingsadviesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
