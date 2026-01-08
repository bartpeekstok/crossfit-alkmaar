import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Veelgestelde Vragen - FAQ CrossFit Alkmaar",
  description:
    "Antwoorden op veelgestelde vragen over CrossFit Alkmaar. Wat kost het? Moet ik fit zijn? Hoe werkt een proefles? Alles wat je wilt weten!",
  keywords: ["CrossFit FAQ", "sportschool vragen", "fitness beginners", "CrossFit kosten"],
  openGraph: {
    title: "FAQ | Alles Wat Je Wilt Weten",
    description:
      "Antwoorden op de meest gestelde vragen. Van kosten tot beginnen - alles uitgelegd.",
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
