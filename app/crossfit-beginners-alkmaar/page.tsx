"use client";

import Link from "next/link";
import SeoLanding from "../components/redesign/SeoLanding";

export default function CrossFitBeginnersAlkmaarPage() {
  return (
    <SeoLanding
      name="CrossFit voor Beginners Alkmaar"
      slug="crossfit-beginners-alkmaar"
      description="CrossFit voor beginners in Alkmaar. Start veilig met persoonlijke begeleiding via ons Kickstart-traject."
      heroPhoto="/images/crossfit-beginners-header.jpg"
      heroTitle="CrossFit voor Beginners in Alkmaar"
      heroSubtitle="Nog nooit aan CrossFit gedaan? Geen probleem. Bij ons start iedereen op dezelfde manier: met persoonlijke begeleiding."
      waaromTitle="Je hoeft niet fit te zijn om te beginnen"
      waaromContent={
        <>
          <p>De grootste misvatting over CrossFit? Dat je al fit moet zijn. Niets is minder waar. Meer dan de helft van onze leden had weinig tot geen sportervaring toen ze begonnen.</p>
          <p>CrossFit is schaalbaar. Dat betekent dat elke oefening wordt aangepast aan jouw niveau. Kun je nog geen pull-up? Dan beginnen we met een variant die je wél kunt. Zijn 60 kilo te zwaar? Dan pakken we een gewicht dat bij jou past. De workout is voor iedereen hetzelfde, maar de uitvoering is persoonlijk.</p>
          <p>En het mooiste: je hoeft het niet alleen uit te zoeken. Onze coaches staan naast je, elke training.</p>
        </>
      }
      aanpakTitle="Zo werkt de start bij CrossFit Alkmaar"
      aanpakCards={[
        { title: "Stap 1: Kennismaking", body: <>Een vrijblijvend <Link href="/meer-info">kennismakingsgesprek</Link> waarin we je doelen bespreken, de box laten zien en uitleggen hoe alles werkt. Geen verplichtingen.</> },
        { title: "Stap 2: Kickstart", body: <>Je start met de <Link href="/kickstart">Kickstart</Link> - persoonlijke sessies (semi personal training) waarin je alle basisbewegingen leert. In je eigen tempo.</> },
        { title: "Stap 3: Groepslessen", body: <>Na de Kickstart sluit je aan bij de reguliere <Link href="/groepslessen">groepslessen</Link>. Je kent de bewegingen, de coaches kennen jou, en je voelt je op je plek.</> },
      ]}
      aeoTitle="Hoe begin je met CrossFit?"
      aeoItems={[
        { q: "Hoe begin je met CrossFit als complete beginner?", a: <>Bij CrossFit Alkmaar start iedereen met de <Link href="/kickstart">28 Day Kickstart</Link>: vier weken in een kleine groep van max 6 personen. Je leert alle basisbewegingen onder intensieve begeleiding, zodat je met vertrouwen kunt doorstromen naar de groepslessen.</> },
        { q: "Moet je fit zijn om aan CrossFit te beginnen?", a: "Nee. Je hoeft niet fit te zijn om te starten - je start om fit te worden. Elke oefening wordt aangepast aan jouw niveau. Of je nu nog nooit een barbell hebt aangeraakt of al jaren sport." },
        { q: "Is CrossFit gevaarlijk voor beginners?", a: "Niet bij goede begeleiding. Bij CrossFit Alkmaar leer je eerst de techniek in kleine groepen voordat je in een groepsles stapt. Onze coaches bewaken je techniek en passen gewichten en oefeningen aan op jouw mogelijkheden." },
      ]}
      members={[
        { videoId: "7_p0gpFtEvk", name: "Lisette", quote: "Ik voel me sindsdien een stuk fitter!" },
        { videoId: "EIWOUtYAl7g", name: "Chris", quote: "CrossFit is veel toegankelijker dan aan machines trekken in een sportschool" },
      ]}
      faqItems={[
        { q: "Moet ik al een bepaald fitnessniveau hebben?", aText: "Nee. Alles wordt aangepast aan jouw niveau. Onze leden variëren van 20 tot 70+ jaar, van nooit gesport tot ex-topsporters.", a: "Nee. Alles wordt aangepast aan jouw niveau. Onze leden variëren van 20 tot 70+ jaar, van nooit gesport tot ex-topsporters." },
        { q: "Is CrossFit niet gevaarlijk?", aText: "Niet met goede coaching. Bij CrossFit Alkmaar train je in groepen van max 12 met een gecertificeerde coach die op je techniek let. Je leert eerst de basis in de Kickstart voordat je in een groepsles stapt.", a: <>Niet met goede coaching. Bij CrossFit Alkmaar train je in groepen van max 12 met een gecertificeerde coach die op je techniek let. Je leert eerst de basis in de <Link href="/kickstart">Kickstart</Link> voordat je in een groepsles stapt.</> },
        { q: "Hoeveel kost CrossFit voor beginners?", aText: "Onze tarieven bespreken we tijdens de gratis kennismaking. Dan kunnen we het beste pakket adviseren dat past bij jouw doelen en frequentie.", a: <>Bekijk onze <Link href="/meer-info#tarieven">tarieven</Link> voor alle opties. De kennismaking is altijd gratis en vrijblijvend.</> },
        { q: "Hoe vaak moet ik trainen?", aText: "We raden 3 keer per week aan, maar 2 keer is ook prima om te beginnen. Je bouwt op in je eigen tempo.", a: "We raden 3 keer per week aan, maar 2 keer is ook prima om te beginnen. Je bouwt op in je eigen tempo." },
      ]}
      ctaTitle="Zet de eerste stap"
      ctaSubtitle="Plan een gratis kennismakingsgesprek. Geen verplichtingen, wel een goed gesprek over wat je wilt bereiken."
    />
  );
}
