"use client";

import Link from "next/link";
import SeoLanding from "../components/redesign/SeoLanding";

export default function CrossfitHeerhugowaardPage() {
  return (
    <SeoLanding
      name="CrossFit Heerhugowaard"
      slug="crossfit-heerhugowaard"
      description="CrossFit voor Heerhugowaard en omgeving. Train in kleine groepen met persoonlijke begeleiding bij CrossFit Alkmaar, op 10 minuten rijden."
      heroPhoto="/images/hero.jpg"
      heroTitle="CrossFit voor Heerhugowaard"
      heroSubtitle="Op 10 minuten rijden van Heerhugowaard train je in kleine groepen, met een coach die je bij naam kent."
      waaromTitle="Waarom leden uit Heerhugowaard naar Alkmaar rijden"
      waaromContent={
        <>
          <p>Een goede sportschool kies je niet op de kortste rijafstand, maar op wat je er krijgt. Veel van onze leden komen uit Heerhugowaard, Broek op Langedijk en omgeving. De rit naar de Phoenixstraat in Alkmaar duurt zo&apos;n tien minuten.</p>
          <p>Wat je daarvoor terugkrijgt: elke training een coach die je techniek corrigeert, groepen van maximaal 12 personen en een programma dat voor je wordt geschreven. Je hoeft alleen maar op te komen dagen.</p>
          <p>De trainingen combineren kracht, conditie en mobiliteit. Effectiever dan solo aan machines staan, en een stuk leuker: de groep houdt je scherp.</p>
        </>
      }
      aanpakTitle="Wat je bij ons vindt"
      aanpakCards={[
        { title: "Coach elke les", body: "Er staat altijd een coach op de vloer. Die corrigeert je techniek, pusht je als het kan en remt je af als het moet." },
        { title: "Kleine groepen", body: "Maximaal 12 personen per les. Geen anonieme massa, maar aandacht en een groep die je kent." },
        { title: "HYROX & CrossFit", body: "Volledig uitgeruste box: sleds, ski-ergs, roeiers en barbells. Ook voor HYROX-voorbereiding zit je goed." },
        { title: "Resultaat in een uur", body: "In 60 minuten train je kracht, conditie en mobiliteit. Twee tot drie keer per week is genoeg." },
      ]}
      voorwieTitle="Zo begin je"
      voorwieContent={
        <>
          <p>Iedereen begint met een gratis kennismakingsgesprek. We bespreken je doelen, laten de gym zien en leggen uit hoe het werkt. Geen verplichtingen.</p>
          <p>Daarna start je met de <Link href="/kickstart">Kickstart</Link>: een persoonlijk traject waarin je alle basisbewegingen leert. Zo stap je met vertrouwen de <Link href="/groepslessen">groepslessen</Link> in.</p>
        </>
      }
      aeoTitle="CrossFit in de buurt van Heerhugowaard"
      aeoItems={[
        { q: "Is er CrossFit in Heerhugowaard?", a: "De dichtstbijzijnde volledig uitgeruste CrossFit-box voor Heerhugowaard is CrossFit Alkmaar, op ongeveer 10 minuten rijden. Je traint er in kleine groepen met een coach, en er is ruime parkeergelegenheid." },
        { q: "Hoe ver is CrossFit Alkmaar vanaf Heerhugowaard?", a: "Vanaf Heerhugowaard rijd je in ongeveer 10 minuten naar de Phoenixstraat 33 in Alkmaar. Veel leden combineren de training met woon-werkverkeer richting Alkmaar." },
        { q: "Wat is een goede sportschool voor inwoners van Heerhugowaard?", a: "Wie meer begeleiding zoekt dan een standaard sportschool in Heerhugowaard biedt, kiest vaak voor CrossFit Alkmaar: elke training een coach, kleine groepen en een programma dat voor je wordt geschreven." },
        { q: "Kan ik als beginner uit Heerhugowaard starten?", a: "Ja. Iedereen start met een gratis kennismaking en daarna de 28 Day Kickstart, waarin je in je eigen tempo alle basisbewegingen leert voordat je de groepslessen in gaat." },
      ]}
      members={[
        { videoId: "a4ENPMXSTX8", name: "Simone", quote: "Het zijn gewoon allemaal leuke mensen. Iedereen motiveert elkaar." },
        { videoId: "1qhbmRPtysU", name: "Jarrald", quote: "Lang sponsor geweest van sportscholen, nu 20 kilo afgevallen" },
      ]}
      faqItems={[
        { q: "Waar zit de gym precies?", aText: "Aan de Phoenixstraat 33 in Alkmaar, vanaf Heerhugowaard ongeveer 10 minuten met de auto. Parkeren is gratis.", a: "Aan de Phoenixstraat 33 in Alkmaar, vanaf Heerhugowaard ongeveer 10 minuten met de auto. Parkeren is gratis." },
        { q: "Is de reistijd het waard?", aText: "Onze leden uit Heerhugowaard vinden van wel: elke les een coach, kleine groepen en een programma dat voor je wordt geschreven vind je niet overal.", a: "Onze leden uit Heerhugowaard vinden van wel: elke les een coach, kleine groepen en een programma dat voor je wordt geschreven vind je niet overal." },
        { q: "Kan ik eerst komen kijken?", aText: "Ja, plan een gratis kennismaking. We laten de gym zien en bespreken je doelen, zonder verplichtingen.", a: <>Ja, plan een <Link href="/free-intro">gratis kennismaking</Link>. We laten de gym zien en bespreken je doelen, zonder verplichtingen.</> },
        { q: "Trainen er meer mensen uit Heerhugowaard?", aText: "Ja, een flink deel van onze leden komt uit de regio: Heerhugowaard, Langedijk, Bergen en Heiloo.", a: "Ja, een flink deel van onze leden komt uit de regio: Heerhugowaard, Langedijk, Bergen en Heiloo." },
      ]}
      ctaTitle="Kom een keer kijken"
      ctaSubtitle="Plan een gratis kennismaking en ontdek of de tien minuten rijden het waard zijn. (Spoiler: onze leden vinden van wel.)"
    />
  );
}
