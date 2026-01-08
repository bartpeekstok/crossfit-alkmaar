import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips over training, voeding, herstel en mindset van CrossFit Alkmaar. Lees onze artikelen en verbeter je fitness kennis.",
  openGraph: {
    title: "Blog | CrossFit Alkmaar",
    description:
      "Tips over training, voeding, herstel en mindset. Lees onze artikelen en verbeter je fitness kennis.",
    url: "https://crossfitalkmaar.com/blog",
  },
  alternates: {
    canonical: "https://crossfitalkmaar.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
