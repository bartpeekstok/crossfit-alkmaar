import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Fitness Tips & Adviezen",
  description:
    "Fitness blog van CrossFit Alkmaar. Tips over training, voeding, herstel en mindset. Gratis kennis om je fit te houden en je doelen te bereiken.",
  keywords: ["fitness blog", "training tips", "voeding tips", "workout advies", "fitness artikelen"],
  openGraph: {
    title: "Blog | Fitness Tips & Inspiratie",
    description:
      "Gratis tips over training, voeding en mindset. Alles wat je nodig hebt om je doelen te bereiken.",
    url: "https://www.crossfitalkmaar.com/blog",
  },
  alternates: {
    canonical: "https://www.crossfitalkmaar.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
