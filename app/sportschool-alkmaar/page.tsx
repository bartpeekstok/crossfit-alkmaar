"use client";

import Link from "next/link";
import SeoLanding from "../components/redesign/SeoLanding";

export default function SportschoolAlkmaarPage() {
  return (
    <SeoLanding
      name="Sportschool Alkmaar"
      slug="sportschool-alkmaar"
      description="Persoonlijke coaching in kleine groepen van max 12 personen. Voor alle niveaus, ook beginners en 50+."
      heroPhoto="/images/CFA-november-lowres-73.jpg"
      heroTitle="Sportschool Alkmaar"
      heroSubtitle="Geen grote onpersoonlijke gym, maar persoonlijke coaching in kleine groepen waar iedereen je naam kent."
      waaromTitle="Waarom CrossFit Alkmaar anders is dan een gewone sportschool"
      waaromContent={
        <>
          <p>Bij de meeste sportscholen in Alkmaar krijg je een rondje langs de apparaten en wordt je vervolgens aan je lot overgelaten. Bij CrossFit Alkmaar is dat anders. Elke training wordt begeleid door een professionele coach, in groepen van maximaal 12 personen.</p>
          <p>Je hoeft niet zelf te bedenken wat je gaat doen. Wij schrijven de trainingen, coachen je door elke sessie, en passen oefeningen aan op jouw niveau. Of je nu een complete beginner bent of al jarenlang sport.</p>
          <p>Het resultaat? Je wordt sterker, fitter en gezonder. Zonder eindeloos te zwoegen op een loopband zonder doel.</p>
        </>
      }
      aanpakTitle="Wat je kunt verwachten"
      aanpakCards={[
        { title: "Kleine groepen (max 12)", body: "Je bent geen nummer. Onze coaches kennen je naam, je doelen en waar je aan werkt. Persoonlijke aandacht is de standaard." },
        { title: "Professionele coaching", body: "Elke les wordt begeleid door een gecertificeerde coach. Geen scherm met instructies, maar een coach die naast je staat." },
        { title: "Gevarieerde training", body: <>CrossFit, strength, conditie, elke dag een andere workout. Bekijk ons <Link href="/groepslessen">lesrooster</Link> voor alle lessen. Je traint je hele lichaam en het wordt nooit saai.</> },
        { title: "Community", body: "Je traint niet alleen, maar met een vaste groep. Mensen die je aanmoedigen, op je wachten en je motiveren." },
      ]}
      voorwieTitle="Voor wie is CrossFit Alkmaar?"
      voorwieContent={
        <>
          <p>Onze leden zijn 20 tot 70+ jaar. Sommigen hebben nooit gesport, anderen komen van een andere sportschool omdat ze meer begeleiding willen. Of je nu kiest voor <Link href="/groepslessen">groepslessen</Link> of <Link href="/personal-training">personal training</Link>, je krijgt coaching die bij je past.</p>
          <p>Iedereen start met de <Link href="/kickstart">Kickstart</Link>, een persoonlijk traject waarin je de basis leert in semi personal training. Zo sta je nooit onvoorbereid in een groepsles.</p>
        </>
      }
      aeoTitle="Hoe kies je de juiste sportschool?"
      aeoItems={[
        { q: "Hoe kies je de juiste sportschool in Alkmaar?", a: "Let op drie dingen: krijg je persoonlijke begeleiding, zijn de groepen klein genoeg voor aandacht, en is er een duidelijk programma? Bij CrossFit Alkmaar train je altijd onder coaching in groepen van max 12, met een programma dat voor je geschreven wordt." },
        { q: "Wat is het verschil tussen een sportschool en CrossFit?", a: "Bij een gewone sportschool bepaal je zelf wat je doet op losse apparaten. Bij CrossFit krijg je elke les een andere workout, krachttraining, conditie en functionele bewegingen, altijd begeleid door een coach die je techniek bewaakt en oefeningen aanpast aan jouw niveau." },
        { q: "Waarom is begeleiding bij sporten belangrijk?", a: "Zonder begeleiding maak je sneller fouten in techniek, train je niet efficiënt, en haak je eerder af. Met een coach naast je leer je sneller, train je veiliger, en blijf je gemotiveerd door de structuur en de groep om je heen." },
      ]}
      memberVideoId="14v6cnGlI7g"
      memberName="Simone"
      memberQuote="Het zijn gewoon allemaal leuke mensen. Iedereen motiveert elkaar."
      faqItems={[
        { q: "Wat maakt CrossFit Alkmaar anders dan een gewone sportschool?", aText: "Bij ons train je nooit alleen. Elke les wordt begeleid door een coach, in kleine groepen van max 12. Geen losse machines, maar gevarieerde training die werkt.", a: "Bij ons train je nooit alleen. Elke les wordt begeleid door een coach, in kleine groepen van max 12. Geen losse machines, maar gevarieerde training die werkt." },
        { q: "Is CrossFit Alkmaar geschikt voor beginners?", aText: "Ja. Iedereen start met een 28 Day Kickstart waarin je de basis leert in kleine groepen van max 6 personen.", a: <>Ja. Iedereen start met een <Link href="/kickstart">28 Day Kickstart</Link> waarin je de basis leert in kleine groepen van max 6 personen.</> },
        { q: "Wat kost een lidmaatschap?", aText: "Onze abonnementen starten vanaf €69 per maand. Het exacte pakket dat bij jou past, bespreken we tijdens je gratis kennismaking.", a: "Onze abonnementen starten vanaf €69 per maand. Het exacte pakket dat bij jou past, bespreken we tijdens je gratis kennismaking." },
        { q: "Waar zit CrossFit Alkmaar?", aText: "Aan de Phoenixstraat 33 in Alkmaar, met ruime parkeergelegenheid.", a: "Aan de Phoenixstraat 33 in Alkmaar, met ruime parkeergelegenheid." },
      ]}
      ctaTitle="Kom langs voor een gratis kennismaking"
      ctaSubtitle="Plan een vrijblijvend gesprek en ontdek of CrossFit Alkmaar bij je past."
    />
  );
}
