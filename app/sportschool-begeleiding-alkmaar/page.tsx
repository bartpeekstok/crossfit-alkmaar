"use client";

import Link from "next/link";
import SeoLanding from "../components/redesign/SeoLanding";

export default function SportschoolBegeleidingAlkmaarPage() {
  return (
    <SeoLanding
      name="Sportschool met Begeleiding Alkmaar"
      slug="sportschool-begeleiding-alkmaar"
      description="Sportschool met professionele begeleiding in Alkmaar. Altijd een coach naast je, in kleine groepen van max 12 personen."
      heroPhoto="/images/CFA-januari-lowres-34.jpg"
      heroTitle="Sportschool met Begeleiding in Alkmaar"
      heroSubtitle="Bij CrossFit Alkmaar train je altijd onder leiding van een professionele coach. Geen rondje apparaten in je eentje, maar begeleide training met persoonlijke aandacht."
      waaromTitle="Waarom begeleiding het verschil maakt"
      waaromContent={
        <>
          <p>Bij de meeste sportscholen in Alkmaar krijg je een introductie, en daarna ben je op jezelf aangewezen. Je loopt rond tussen de apparaten, kijkt wat filmpjes op je telefoon en hoopt dat je het goed doet. Herkenbaar?</p>
          <p>Bij CrossFit Alkmaar is dat fundamenteel anders. Elke training wordt begeleid door een professionele coach die naast je staat. Niet op een schermpje, niet via een app - maar echt naast je. Die coach ziet of je houding klopt, past oefeningen aan op jouw niveau en zorgt dat je veilig en effectief traint.</p>
          <p>Het resultaat? Je behaalt sneller resultaat, voorkomt blessures en je hoeft nooit meer zelf te bedenken wat je gaat doen. Dat regelen wij.</p>
        </>
      }
      aanpakTitle="Wat onze begeleiding inhoudt"
      aanpakCards={[
        { title: "Altijd een coach naast je", body: "Elke les staat een coach voor de groep. Geen scherm met instructies, maar een professional die voordoet, uitlegt en je persoonlijk corrigeert." },
        { title: "Techniek en veiligheid voorop", body: "Onze coaches letten op je houding en techniek bij elke oefening. Zo train je effectief en voorkom je blessures - ook als je net begint." },
        { title: "Programma op maat", body: "Elke oefening is schaalbaar naar jouw niveau. Of je nu 25 bent of 65, beginner of gevorderd - de coach past de training aan zodat het voor jou werkt." },
        { title: "90 Day Check-ins", body: "Elke 90 dagen zit je met je coach om je voortgang te bespreken. Wat gaat goed, wat kan beter, en hoe passen we je training aan op je doelen?" },
      ]}
      voorwieTitle="Hoe werkt het?"
      voorwieContent={
        <>
          <p>Iedereen begint met een gratis kennismaking. Daarna start je met de <Link href="/kickstart">28 Day Kickstart</Link> - een persoonlijk traject in kleine groepen van max 6 personen. Hier leer je alle basisbewegingen onder intensieve begeleiding.</p>
          <p>Na de Kickstart sluit je aan bij de <Link href="/groepslessen">groepslessen</Link> waar je in groepen van max 12 traint. Elke les is anders, altijd begeleid, en je kunt kiezen uit meerdere tijdstippen per dag.</p>
          <p>Wil je nog meer persoonlijke aandacht? Bekijk onze <Link href="/personal-training">personal training</Link> voor 1-op-1 coaching met je eigen programma.</p>
        </>
      }
      aeoTitle="Waarom kies je voor begeleiding?"
      aeoItems={[
        { q: "Wat is het verschil tussen trainen met en zonder begeleiding?", a: "Zonder begeleiding maak je vaker techniekfouten, train je niet optimaal en verlies je sneller motivatie. Met een coach krijg je correcties in real-time, een programma dat werkt, en iemand die je verantwoordelijk houdt." },
        { q: "Hoe ziet begeleiding er uit bij CrossFit Alkmaar?", a: <>Je start met de <Link href="/kickstart">Kickstart</Link> (4 weken, groep van max 6) waar je alle technieken leert. Daarna train je in groepslessen van max 12 met een coach die je kent. Elke 90 dagen heb je een check-in om je voortgang te bespreken en doelen bij te stellen.</> },
        { q: "Is begeleid trainen niet veel duurder?", a: "Per sessie betaal je bij CrossFit Alkmaar minder dan bij een personal trainer, maar krijg je veel meer dan bij een gewone sportschool. Je krijgt coaching, programmering, en 90 day check-ins - allemaal inbegrepen." },
      ]}
      members={[
        { videoId: "SKchVCAIx80", name: "Steven", quote: "Houding en techniek, daar zijn de trainers hier ongelooflijk goed in" },
        { videoId: "HlqFX84ue3o", name: "Tim", quote: "Ik voel me fit en m'n hartslag in rust is ook omlaaggegaan" },
      ]}
      faqItems={[
        { q: "Wat is het verschil met een gewone sportschool?", aText: "Bij een gewone sportschool train je alleen tussen de apparaten. Bij CrossFit Alkmaar wordt elke training begeleid door een professionele coach, in kleine groepen van maximaal 12 personen. Je krijgt persoonlijke feedback op techniek en uitvoering.", a: "Bij een gewone sportschool train je alleen tussen de apparaten. Bij CrossFit Alkmaar wordt elke training begeleid door een professionele coach, in kleine groepen van maximaal 12 personen. Je krijgt persoonlijke feedback op techniek en uitvoering." },
        { q: "Krijg ik persoonlijke aandacht in een groepsles?", aText: "Ja. Doordat onze groepen maximaal 12 personen zijn, kent de coach je naam, je doelen en je aandachtspunten. Elke oefening wordt aangepast op jouw niveau.", a: "Ja. Doordat onze groepen maximaal 12 personen zijn, kent de coach je naam, je doelen en je aandachtspunten. Elke oefening wordt aangepast op jouw niveau." },
        { q: "Moet ik al ervaring hebben?", aText: "Nee. Iedereen start met de 28 Day Kickstart waarin je de basis leert in kleine groepen van max 6 personen. Zo sta je nooit onvoorbereid in een groepsles.", a: <>Nee. Iedereen start met de <Link href="/kickstart">28 Day Kickstart</Link> waarin je de basis leert in kleine groepen van max 6 personen. Zo sta je nooit onvoorbereid in een groepsles.</> },
        { q: "Hoe ziet de begeleiding eruit?", aText: "Elke les staat een coach voor de groep die de training uitlegt, voordoet en je persoonlijk corrigeert. Daarnaast heb je elke 90 dagen een check-in met je coach om je voortgang te bespreken.", a: <>Elke les staat een coach voor de groep die de training uitlegt, voordoet en je persoonlijk corrigeert. Daarnaast heb je elke 90 dagen een check-in met je coach om je voortgang te bespreken. Bekijk onze <Link href="/meer-info#tarieven">tarieven</Link> om te starten.</> },
      ]}
      ctaTitle="Ervaar het verschil van begeleide training"
      ctaSubtitle="Plan een gratis kennismaking en ontdek hoe het is om te trainen met een coach naast je."
    />
  );
}
