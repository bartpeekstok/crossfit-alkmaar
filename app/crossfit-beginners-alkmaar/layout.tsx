import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CrossFit voor Beginners Alkmaar | CrossFit Alkmaar",
  description:
    "CrossFit voor beginners in Alkmaar. Start veilig met persoonlijke begeleiding via het Kickstart-traject bij CrossFit Alkmaar.",
  keywords: ["CrossFit beginners Alkmaar", "CrossFit starten Alkmaar", "CrossFit voor beginners", "beginnen met CrossFit Alkmaar", "CrossFit introductie Alkmaar", "CrossFit Kickstart Alkmaar"],
  alternates: {
    canonical: "https://crossfitalkmaar.com/crossfit-beginners-alkmaar",
  },
  openGraph: {
    title: "CrossFit voor Beginners Alkmaar | CrossFit Alkmaar",
    description:
      "CrossFit voor beginners in Alkmaar. Start veilig met persoonlijke begeleiding via het Kickstart-traject bij CrossFit Alkmaar.",
    url: "https://crossfitalkmaar.com/crossfit-beginners-alkmaar",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://crossfitalkmaar.com/images/crossfit-beginners-header.jpg",
        width: 1200,
        height: 630,
        alt: "CrossFit voor Beginners Alkmaar - CrossFit Alkmaar",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
