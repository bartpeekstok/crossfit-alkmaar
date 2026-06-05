"use client";

import Link from "next/link";
import SeoLanding from "../components/redesign/SeoLanding";

export default function PersonalTrainingAlkmaarPage() {
  return (
    <SeoLanding
      name="Personal Training Alkmaar"
      slug="personal-training-alkmaar"
      description="Personal training in Alkmaar met gecertificeerde coaches. 1-op-1 of in kleine groepen, volledig afgestemd op jouw doelen."
      heroPhoto="/images/personal-training-header.jpg"
      heroTitle="Personal Training Alkmaar"
      heroSubtitle="Training die volledig om jou draait. Jouw doelen, jouw schema, jouw coach."
      waaromTitle="Personal training met een plan"
      waaromContent={
        <>
          <p>Personal training is meer dan een trainer die naast je staat. Bij CrossFit Alkmaar krijg je een volledig trainingsplan, afgestemd op jouw doelen. Of je nu wilt afvallen, sterker worden, revalideren of je voorbereiden op een wedstrijd.</p>
          <p>Onze coaches zijn gecertificeerd en gespecialiseerd in functionele fitness. Ze kijken niet alleen naar je training, maar ook naar je bewegingskwaliteit, mobiliteit en - als je dat wilt - je <Link href="/voedingsadvies">voeding</Link>.</p>
          <p>Je traint in een volledig uitgeruste box met professionele apparatuur. Geen wachten op machines, geen drukte - gewoon jij en je coach.</p>
        </>
      }
      aanpakTitle="Trainingsopties"
      aanpakCards={[
        { title: "1-op-1 sessies", body: "Maximale aandacht en volledig gepersonaliseerd. Ideaal voor specifieke doelen, revalidatie of als je de voorkeur geeft aan privétraining." },
        { title: "Small Group (max 4)", body: <>De persoonlijke aanpak van PT, maar samen met een klein groepje. Betaalbaar én effectief. Bekijk onze <Link href="/small-group-training">small group training</Link>.</> },
        { title: "Combi-abonnement", body: "Combineer personal training met groepslessen voor het beste van twee werelden. Persoonlijke aandacht én de groepsenergie." },
        { title: "Flexibel plannen", body: "Plan je sessies op tijden die jou uitkomen. Wij passen ons aan jouw agenda aan, niet andersom." },
      ]}
      voorwieTitle="Voor wie is personal training?"
      voorwieContent={
        <>
          <p>Voor iedereen die meer wil dan een standaard sportschool. Of je nu net begint via de <Link href="/kickstart">Kickstart</Link>, terugkomt na een blessure, of al jaren traint maar een nieuw doel hebt - personal training geeft je de begeleiding die het verschil maakt.</p>
          <p>Bekijk onze <Link href="/meer-info#tarieven">tarieven</Link> of plan direct een gratis kennismakingsgesprek.</p>
        </>
      }
      aeoTitle="Wanneer kies je personal training?"
      aeoItems={[
        { q: "Wanneer is personal training beter dan groepslessen?", a: <>Als je specifieke doelen hebt (revalidatie, wedstrijdvoorbereiding, sneller resultaat) of liever 1-op-1 traint. Bij CrossFit Alkmaar combineren veel leden <Link href="/personal-training">personal training</Link> met groepslessen voor het beste van beide werelden.</> },
        { q: "Hoe ziet een personal training sessie eruit?", a: "Je trainer maakt een programma op maat, gebaseerd op jouw doelen en mogelijkheden. Elke sessie bevat warming-up, techniekwerk, de training en een cooling-down - volledig afgestemd op jou." },
        { q: "Wat is het verschil tussen personal training en small group training?", a: <>Bij personal training train je 1-op-1. Bij <Link href="/small-group-training">small group training</Link> train je in een groep van max 6 met bijna dezelfde persoonlijke aandacht, maar voor een lagere prijs en met de extra motivatie van een groep.</> },
      ]}
      members={[
        { videoId: "HlqFX84ue3o", name: "Tim", quote: "Ik voel me fit en m'n hartslag in rust is ook omlaaggegaan" },
        { videoId: "a4ENPMXSTX8", name: "Simone", quote: "Het zijn gewoon allemaal leuke mensen. Iedereen motiveert elkaar." },
      ]}
      faqItems={[
        { q: "Wat is het verschil tussen personal training en groepslessen?", aText: "Bij personal training krijg je 1-op-1 begeleiding met een programma volledig afgestemd op jouw doelen. Bij groepslessen train je in kleine groepen van max 12.", a: <>Bij personal training krijg je 1-op-1 begeleiding met een programma volledig afgestemd op jouw doelen. Bij <Link href="/groepslessen">groepslessen</Link> train je in kleine groepen van max 12.</> },
        { q: "Voor wie is personal training geschikt?", aText: "Voor iedereen die extra aandacht wil: van beginners die de basis willen leren tot ervaren sporters met specifieke doelen.", a: "Voor iedereen die extra aandacht wil: van beginners die de basis willen leren tot ervaren sporters met specifieke doelen." },
        { q: "Kan ik personal training combineren met groepslessen?", aText: "Ja, dat raden we zelfs aan. Veel leden combineren 1 personal training sessie met 2-3 groepslessen per week.", a: <>Ja, dat raden we zelfs aan. Veel leden combineren 1 personal training sessie met 2-3 <Link href="/groepslessen">groepslessen</Link> per week.</> },
        { q: "Hoe lang duurt een personal training sessie?", aText: "Een sessie duurt 60 minuten. Je coach bereidt de training voor op basis van je doelen en voortgang.", a: "Een sessie duurt 60 minuten. Je coach bereidt de training voor op basis van je doelen en voortgang." },
      ]}
      ctaTitle="Start met personal training"
      ctaSubtitle="Plan een gratis kennismakingsgesprek en ontdek wat personal training voor jou kan betekenen."
    />
  );
}
