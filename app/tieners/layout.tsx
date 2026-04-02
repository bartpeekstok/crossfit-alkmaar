import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tieners Programma - CrossFit voor Jongeren (13-17 jaar) | CrossFit Alkmaar",
  description:
    "Speciaal tienerprogramma bij CrossFit Alkmaar voor jongeren van 14 tot en met 17 jaar. Leer veilig en effectief trainen onder professionele begeleiding. Een goede start met sporten, goed voor kracht en zelfvertrouwen.",
  keywords: ["tieners sporten Alkmaar", "CrossFit tieners", "jongeren fitness Alkmaar", "tiener training", "sport voor tieners Alkmaar", "CrossFit jeugd", "alternatief sportschool tieners"],
  openGraph: {
    title: "Tieners | CrossFit voor Jongeren",
    description:
      "Speciaal programma voor tieners (14-17 jaar). Leer veilig en effectief trainen met professionele coaching. Goed voor kracht en zelfvertrouwen.",
    url: "https://crossfitalkmaar.com/tieners",
  },
  alternates: {
    canonical: "https://crossfitalkmaar.com/tieners",
  },
};

export default function TienersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
