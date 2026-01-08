import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Groepslessen",
  description:
    "Samen trainen in gevarieerde groepslessen bij CrossFit Alkmaar. Elke les combineert kracht, conditie en mobiliteit onder begeleiding van ervaren coaches.",
  openGraph: {
    title: "Groepslessen | CrossFit Alkmaar",
    description:
      "Samen trainen in gevarieerde groepslessen. Elke les combineert kracht, conditie en mobiliteit onder begeleiding van ervaren coaches.",
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
