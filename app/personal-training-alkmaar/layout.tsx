import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Training Alkmaar | CrossFit Alkmaar",
  description:
    "Personal training in Alkmaar bij CrossFit Alkmaar. Individuele begeleiding afgestemd op jouw doelen en niveau.",
  alternates: {
    canonical: "https://crossfitalkmaar.com/personal-training-alkmaar",
  },
  openGraph: {
    title: "Personal Training Alkmaar | CrossFit Alkmaar",
    description:
      "Personal training in Alkmaar bij CrossFit Alkmaar. Individuele begeleiding afgestemd op jouw doelen en niveau.",
    url: "https://crossfitalkmaar.com/personal-training-alkmaar",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://crossfitalkmaar.com/images/personal-training-header.jpg",
        width: 1200,
        height: 630,
        alt: "Personal Training Alkmaar - CrossFit Alkmaar",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
