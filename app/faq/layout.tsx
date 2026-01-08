import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Veelgestelde vragen",
  description:
    "Antwoorden op veelgestelde vragen over CrossFit Alkmaar. Alles over trainingen, lidmaatschap, beginnen en meer.",
  openGraph: {
    title: "Veelgestelde vragen | CrossFit Alkmaar",
    description:
      "Antwoorden op veelgestelde vragen over CrossFit Alkmaar. Alles over trainingen, lidmaatschap, beginnen en meer.",
    url: "https://crossfitalkmaar.com/faq",
  },
  alternates: {
    canonical: "https://crossfitalkmaar.com/faq",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
