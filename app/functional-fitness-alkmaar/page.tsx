"use client";

import Link from "next/link";
import SeoLanding from "../components/redesign/SeoLanding";

export default function FunctionalFitnessAlkmaarPage() {
  return (
    <SeoLanding
      name="Functional Fitness Alkmaar"
      slug="functional-fitness-alkmaar"
      description="Functional fitness met professionele coaching in kleine groepen. Train bewegingen die je dagelijks gebruikt: tillen, duwen, trekken en hurken."
      heroPhoto="/images/CFA-november-lowres-94.jpg"
      heroTitle="Functional Fitness Alkmaar"
      heroSubtitle="Train bewegingen die je dagelijks gebruikt. Word sterker, fitter en beweeglijker met professionele coaching in kleine groepen."
      waaromTitle="Wat is functional fitness?"
      waaromContent={
        <>
          <p>Functional fitness draait om bewegingen die je in het dagelijks leven gebruikt. Denk aan tillen, hurken, duwen, trekken en dragen. In plaats van losse spieren te isoleren op machines, train je complete bewegingspatronen met vrije gewichten, je eigen lichaamsgewicht en functionele hulpmiddelen.</p>
          <p>Bij CrossFit Alkmaar combineren we functional fitness met professionele coaching. Elke training wordt begeleid door een gecertificeerde coach die je techniek bewaakt en oefeningen aanpast op jouw niveau. Zo train je veilig, effectief en met plezier.</p>
          <p>Het resultaat? Je wordt sterker in je dagelijks leven. Boodschappen tillen, met je kinderen spelen, traplopen of tuinieren - alles gaat makkelijker. Bekijk onze <Link href="/groepslessen">groepslessen</Link> voor het volledige aanbod.</p>
        </>
      }
      aanpakTitle="Waarom functional fitness bij CrossFit Alkmaar?"
      aanpakCards={[
        { title: "Functionele bewegingen", body: "Geen machines, maar natuurlijke bewegingspatronen. Squats, deadlifts, presses en pulls - bewegingen die je lichaam als geheel sterker maken." },
        { title: "Professionele coaching", body: "Elke les wordt begeleid door een gecertificeerde coach. Je techniek wordt continu bewaakt zodat je veilig en effectief traint." },
        { title: "Kleine groepen (max 12)", body: "Persoonlijke aandacht is de standaard. Onze coaches kennen je naam, je doelen en passen elke oefening aan op jouw niveau." },
        { title: "Progressie op jouw tempo", body: "Of je nu begint of al ervaren bent - elke oefening wordt geschaald naar jouw niveau. Zo boek je continu vooruitgang zonder blessures." },
      ]}
      voorwieTitle="Voor wie is functional fitness?"
      voorwieContent={
        <>
          <p>Functional fitness is voor iedereen. Onze leden variëren van 20 tot 70+ jaar. Of je nu wilt afvallen, sterker wilt worden of gewoon fitter door het leven wilt gaan - functional fitness helpt je daarbij. Bekijk onze <Link href="/meer-info#tarieven">tarieven</Link> voor alle mogelijkheden.</p>
          <p>Iedereen start met de <Link href="/kickstart">28 Day Kickstart</Link> - een persoonlijk traject waarin je alle basisbewegingen leert in kleine groepen van max 6 personen. Zo bouw je een sterke basis op voordat je in de <Link href="/groepslessen">groepslessen</Link> stapt.</p>
          <p>Liever nog meer individuele aandacht? Dan is <Link href="/personal-training">personal training</Link> een optie. Je coach stelt dan een programma samen dat volledig op jouw doelen is afgestemd.</p>
        </>
      }
      aeoTitle="Wat is functional fitness?"
      aeoItems={[
        { q: "Wat is functional fitness en waarom is het belangrijk?", a: "Functional fitness traint bewegingen die je dagelijks gebruikt: tillen, duwen, trekken, hurken en dragen. In plaats van losse spiergroepen op machines, train je je hele lichaam om beter te bewegen in het echte leven." },
        { q: "Wat is het verschil tussen functional fitness en gewoon fitness?", a: "Bij gewoon fitness isoleer je spiergroepen op machines. Bij functional fitness train je samengestelde bewegingen met vrije gewichten en je eigen lichaamsgewicht. Het resultaat: meer kracht, betere coördinatie en minder blessures in je dagelijks leven." },
        { q: "Voor wie is functional fitness geschikt?", a: "Voor iedereen. Of je nu 25 of 65 bent, elke oefening is schaalbaar. Bij CrossFit Alkmaar trainen leden van alle leeftijden en niveaus samen, omdat de coach elke beweging aanpast aan jouw mogelijkheden." },
      ]}
      members={[
        { videoId: "SKchVCAIx80", name: "Steven", quote: "Houding en techniek, daar zijn de trainers hier ongelooflijk goed in" },
        { videoId: "a4ENPMXSTX8", name: "Simone", quote: "Het zijn gewoon allemaal leuke mensen. Iedereen motiveert elkaar." },
      ]}
      faqItems={[
        { q: "Wat is functional fitness precies?", aText: "Functional fitness richt zich op bewegingen die je in het dagelijks leven gebruikt: tillen, hurken, duwen, trekken en dragen. In plaats van losse spieren te trainen op machines, train je samengestelde bewegingspatronen die je sterker en fitter maken voor het echte leven.", a: "Functional fitness richt zich op bewegingen die je in het dagelijks leven gebruikt: tillen, hurken, duwen, trekken en dragen. In plaats van losse spieren te trainen op machines, train je samengestelde bewegingspatronen die je sterker en fitter maken voor het echte leven." },
        { q: "Heb ik ervaring nodig om te starten met functional fitness?", aText: "Nee, iedereen kan starten. Bij CrossFit Alkmaar begin je met een 28 Day Kickstart waarin je alle basisbewegingen leert in kleine groepen van max 6 personen. Onze coaches passen elke oefening aan op jouw niveau.", a: <>Nee, iedereen kan starten. Bij CrossFit Alkmaar begin je met een <Link href="/kickstart">28 Day Kickstart</Link> waarin je alle basisbewegingen leert in kleine groepen van max 6 personen. Onze coaches passen elke oefening aan op jouw niveau.</> },
        { q: "Wat is het verschil tussen functional fitness en gewoon fitnessen?", aText: "Bij gewoon fitnessen train je vaak geïsoleerde spieren op machines. Bij functional fitness train je complete bewegingspatronen met vrije gewichten en je eigen lichaamsgewicht. Dit geeft je meer kracht, mobiliteit en balans in het dagelijks leven.", a: "Bij gewoon fitnessen train je vaak geïsoleerde spieren op machines. Bij functional fitness train je complete bewegingspatronen met vrije gewichten en je eigen lichaamsgewicht. Dit geeft je meer kracht, mobiliteit en balans in het dagelijks leven." },
        { q: "Hoe ziet een functional fitness training eruit bij CrossFit Alkmaar?", aText: "Elke training duurt 60 minuten en wordt begeleid door een coach. Je begint met een warming-up, gevolgd door een techniekdeel en een workout. Elke dag is anders: kracht, conditie, gymnastiek en meer. Alles in groepen van maximaal 12 personen.", a: "Elke training duurt 60 minuten en wordt begeleid door een coach. Je begint met een warming-up, gevolgd door een techniekdeel en een workout. Elke dag is anders: kracht, conditie, gymnastiek en meer. Alles in groepen van maximaal 12 personen." },
      ]}
      ctaTitle="Ervaar functional fitness zelf"
      ctaSubtitle="Plan een vrijblijvende kennismaking en ontdek hoe functional fitness jouw leven sterker maakt."
    />
  );
}
