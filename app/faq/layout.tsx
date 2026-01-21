import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ledenservice - CrossFit Alkmaar",
  description:
    "Ledenservice pagina voor leden van CrossFit Alkmaar.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
