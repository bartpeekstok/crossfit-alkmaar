import { Metadata } from "next";

export const metadata: Metadata = {
  title: "28 Day Kickstart - Start Training in Alkmaar",
  description:
    "Start your fitness journey with our 28 Day Kickstart in Alkmaar. In 4 weeks, build a strong foundation with guided training and nutrition advice. Free intro!",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "28 Day Kickstart | Start Your Transformation",
    description:
      "In 4 weeks from beginner to fit. Personal guidance, nutrition advice, and a strong foundation.",
    url: "https://crossfitalkmaar.com/en/kickstart",
  },
  alternates: {
    canonical: "https://crossfitalkmaar.com/en/kickstart",
  },
};

export default function KickstartENLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
