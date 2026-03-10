import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Groepslessen Alkmaar | CrossFit Alkmaar",
  description:
    "Groepslessen met professionele coaching in kleine groepen van max 12. CrossFit, Strength, HYROX en BUILD bij CrossFit Alkmaar.",
  keywords: ["groepslessen Alkmaar", "groepstraining Alkmaar", "fitness groepslessen Alkmaar", "CrossFit lessen Alkmaar", "kleine groepen training Alkmaar", "groepsles begeleiding Alkmaar"],
  alternates: {
    canonical: "https://crossfitalkmaar.com/groepslessen-alkmaar",
  },
  openGraph: {
    title: "Groepslessen Alkmaar | CrossFit Alkmaar",
    description:
      "Groepslessen met professionele coaching in kleine groepen van max 12. CrossFit, Strength, HYROX en BUILD bij CrossFit Alkmaar.",
    url: "https://crossfitalkmaar.com/groepslessen-alkmaar",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://crossfitalkmaar.com/images/groepslessen-alkmaar-header.jpg",
        width: 1200,
        height: 630,
        alt: "Groepslessen Alkmaar - CrossFit Alkmaar",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
