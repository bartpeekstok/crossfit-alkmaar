import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan je gratis intake | CrossFit Alkmaar",
  description:
    "Sportschool werkt niet voor jou? Bij CrossFit Alkmaar lukt het wel. Begeleiding in kleine groepen — leuk, veilig, effectief. Plan je gratis, vrijblijvende intake.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: "Plan je gratis intake | CrossFit Alkmaar",
    description:
      "Bij ons lukt het je wel. Begeleiding in kleine groepen — leuk, veilig, effectief. Plan je gratis intake.",
    url: "https://crossfitalkmaar.com/start",
    type: "website",
  },
  alternates: {
    canonical: "https://crossfitalkmaar.com/start",
  },
};

export default function StartLayout({ children }: { children: React.ReactNode }) {
  return children;
}
