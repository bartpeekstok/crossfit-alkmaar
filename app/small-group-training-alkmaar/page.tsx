"use client";

import Link from "next/link";
import SeoLanding from "../components/redesign/SeoLanding";

export default function SmallGroupTrainingAlkmaarPage() {
  return (
    <SeoLanding
      name="Small Group Training Alkmaar"
      slug="small-group-training-alkmaar"
      description="Small group training in Alkmaar bij CrossFit Alkmaar. Train in kleine groepen van max 12 personen met persoonlijke coaching en groepsenergie."
      heroPhoto="/images/CFA-november-lowres-12.jpg"
      heroTitle="Small Group Training Alkmaar"
      heroSubtitle="Persoonlijke aandacht van een coach, gecombineerd met de energie en motivatie van een kleine groep."
      waaromTitle="Het beste van twee werelden"
      waaromContent={
        <>
          <p>Small group training combineert de persoonlijke aandacht van <Link href="/personal-training">personal training</Link> met de energie en motivatie van trainen in een groep - tegen een veel voordeliger tarief.</p>
          <p>Bij CrossFit Alkmaar train je in groepen van maximaal 12 personen. Dat betekent dat je coach je kent, je bewegingen corrigeert en je training aanpast waar nodig. Geen anonieme sportschool, maar échte begeleiding.</p>
          <p>Elke training wordt geprogrammeerd door onze coaches en is afgestemd op functionele fitness: bewegen zoals je lichaam bedoeld is. Kracht, conditie, mobiliteit en coördinatie - alles komt aan bod.</p>
        </>
      }
      aanpakTitle="Waarom small group training?"
      aanpakCards={[
        { title: "Max 12 per groep", body: "Kleine groepen zodat je coach iedereen persoonlijk kan begeleiden. Je bent geen nummer, maar een naam." },
        { title: "Persoonlijke coaching", body: "Gecertificeerde coaches die je techniek bewaken, bewegingen aanpassen en je helpen groeien - elke training opnieuw." },
        { title: "Betaalbaar alternatief voor PT", body: <>Profiteer van professionele coaching zonder het prijskaartje van 1-op-1 personal training. Bekijk onze <Link href="/meer-info#tarieven">tarieven</Link>.</> },
        { title: "Motivatie van de groep", body: "De groepsenergie tilt je training naar een hoger niveau. Samen trainen motiveert en maakt het leuker om vol te houden." },
      ]}
      voorwieTitle="Small Group vs Personal Training"
      voorwieContent={
        <>
          <p>Beide opties bieden persoonlijke begeleiding, maar op een andere manier. Welke past het beste bij jou?</p>
          <p>Small group training: groepen van max 12 personen, persoonlijke coaching tijdens de les, groepsenergie en sociale motivatie, voordeliger tarief en vaste lestijden met veel keuze. <Link href="/small-group-training">Meer over small group training</Link>.</p>
          <p>Personal training: 1-op-1 begeleiding, een volledig gepersonaliseerd programma, flexibel inplannen, ideaal voor specifieke doelen of revalidatie en maximale aandacht en focus. <Link href="/personal-training">Meer over personal training</Link>.</p>
          <p>Twijfel je? Start met een <Link href="/kickstart">gratis Kickstart</Link> en ontdek welke vorm het beste bij je past.</p>
        </>
      }
      aeoTitle="Wat is small group training?"
      aeoItems={[
        { q: "Wat is small group training en hoe verschilt het van personal training?", a: <>Small group training is trainen in een groep van max 6 personen met een coach die iedereen persoonlijk begeleidt. Je krijgt bijna dezelfde aandacht als bij 1-op-1 <Link href="/personal-training">personal training</Link>, maar deelt de kosten en profiteert van groepsmotivatie.</> },
        { q: "Voor wie is small group training bedoeld?", a: "Voor iedereen die meer persoonlijke aandacht wil dan in een groepsles van 12, maar niet de prijs van personal training wil betalen. Bij CrossFit Alkmaar is onze BUILD-les een voorbeeld: max 6 personen, gericht op spiermassa opbouwen." },
        { q: "Wat kost small group training vergeleken met personal training?", a: "Small group training is aanzienlijk goedkoper dan 1-op-1 personal training, terwijl je nog steeds persoonlijke coaching krijgt. Bij CrossFit Alkmaar is BUILD inbegrepen in je abonnement vanaf 3x per week." },
      ]}
      members={[
        { videoId: "HlqFX84ue3o", name: "Tim", quote: "Ik voel me fit en m'n hartslag in rust is ook omlaaggegaan" },
        { videoId: "SKchVCAIx80", name: "Steven", quote: "Houding en techniek, daar zijn de trainers hier ongelooflijk goed in" },
      ]}
      faqItems={[
        { q: "Hoe groot zijn de groepen?", aText: "Bij CrossFit Alkmaar trainen we in kleine groepen van maximaal 12 personen. Zo krijgt iedereen persoonlijke aandacht en coaching tijdens de training.", a: "Bij CrossFit Alkmaar trainen we in kleine groepen van maximaal 12 personen. Zo krijgt iedereen persoonlijke aandacht en coaching tijdens de training." },
        { q: "Wat is het verschil met personal training?", aText: "Bij personal training krijg je 1-op-1 begeleiding met een volledig gepersonaliseerd programma. Bij small group training train je in een kleine groep met persoonlijke coaching, maar deel je de energie en motivatie van de groep - tegen een lagere prijs.", a: <>Bij <Link href="/personal-training">personal training</Link> krijg je 1-op-1 begeleiding met een volledig gepersonaliseerd programma. Bij small group training train je in een kleine groep met persoonlijke coaching, maar deel je de energie en motivatie van de groep - tegen een lagere prijs.</> },
        { q: "Is small group training geschikt voor beginners?", aText: "Absoluut. Onze coaches passen elke oefening aan op jouw niveau. Via het Kickstart-programma leer je de basis in 3 persoonlijke sessies voordat je aan de groepstrainingen begint.", a: <>Absoluut. Onze coaches passen elke oefening aan op jouw niveau. Via het <Link href="/kickstart">Kickstart-programma</Link> leer je de basis in 3 persoonlijke sessies voordat je aan de groepstrainingen begint.</> },
        { q: "Hoeveel kost small group training?", aText: "Bekijk onze tarievenpagina voor actuele prijzen. Small group training is aanzienlijk voordeliger dan personal training, terwijl je toch persoonlijke coaching krijgt.", a: <>Bekijk onze <Link href="/meer-info#tarieven">tarievenpagina</Link> voor actuele prijzen. Small group training is aanzienlijk voordeliger dan personal training, terwijl je toch persoonlijke coaching krijgt.</> },
      ]}
      ctaTitle="Ervaar small group training zelf"
      ctaSubtitle="Plan een gratis kennismakingsgesprek en ontdek waarom onze leden zo enthousiast zijn."
    />
  );
}
