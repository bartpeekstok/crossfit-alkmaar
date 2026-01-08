import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onze Leden",
  description:
    "Bekijk video's en verhalen van onze leden. Ontdek waarom zij kozen voor CrossFit Alkmaar en wat het voor hen heeft betekend.",
  openGraph: {
    title: "Onze Leden | CrossFit Alkmaar",
    description:
      "Bekijk video's en verhalen van onze leden. Ontdek waarom zij kozen voor CrossFit Alkmaar.",
    url: "https://crossfitalkmaar.com/onze-leden",
  },
  alternates: {
    canonical: "https://crossfitalkmaar.com/onze-leden",
  },
};

export default function OnzeLedenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
