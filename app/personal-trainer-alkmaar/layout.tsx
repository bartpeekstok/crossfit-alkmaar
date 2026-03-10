import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Trainer Alkmaar | CrossFit Alkmaar",
  description:
    "Zoek je een personal trainer in Alkmaar? Bij CrossFit Alkmaar krijg je 1-op-1 begeleiding op maat voor jouw doelen.",
  keywords: ["personal trainer Alkmaar", "PT Alkmaar", "personal trainer zoeken Alkmaar", "1 op 1 training Alkmaar", "personal coaching Alkmaar", "personal trainer fitness Alkmaar"],
  alternates: {
    canonical: "https://crossfitalkmaar.com/personal-trainer-alkmaar",
  },
  openGraph: {
    title: "Personal Trainer Alkmaar | CrossFit Alkmaar",
    description:
      "Zoek je een personal trainer in Alkmaar? Bij CrossFit Alkmaar krijg je 1-op-1 begeleiding op maat voor jouw doelen.",
    url: "https://crossfitalkmaar.com/personal-trainer-alkmaar",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://crossfitalkmaar.com/images/personal-training-header.jpg",
        width: 1200,
        height: 630,
        alt: "Personal Trainer Alkmaar - CrossFit Alkmaar",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
