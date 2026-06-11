import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welkom terug | CrossFit Alkmaar",
  description:
    "Leuk dat je er weer bent! Kom een week gratis meetrainen bij CrossFit Alkmaar. Laat je gegevens achter en we nemen snel contact met je op.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function WelkomTerugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
