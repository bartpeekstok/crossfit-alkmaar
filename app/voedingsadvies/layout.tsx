import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voedingsadvies Alkmaar - Praktische Voedingstips",
  description:
    "Persoonlijk voedingsadvies in Alkmaar bij CrossFit Alkmaar. Geen strenge diëten, wel resultaat. Afvallen of spiermassa opbouwen? Wij helpen je!",
  keywords: ["voedingsadvies Alkmaar", "voedingscoach Alkmaar", "afvallen Alkmaar", "diëtist sportschool"],
  openGraph: {
    title: "Voedingsadvies | Eet Slim, Presteer Beter",
    description:
      "Praktisch voedingsadvies dat past bij jouw levensstijl. Geen diëten, wel resultaat.",
    url: "https://www.crossfitalkmaar.com/voedingsadvies",
  },
  alternates: {
    canonical: "https://www.crossfitalkmaar.com/voedingsadvies",
  },
};

export default function VoedingsadviesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
