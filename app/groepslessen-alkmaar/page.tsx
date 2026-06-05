"use client";

import Link from "next/link";
import SeoLanding from "../components/redesign/SeoLanding";

export default function GroepslessenAlkmaarPage() {
  return (
    <SeoLanding
      name="Groepslessen Alkmaar"
      slug="groepslessen-alkmaar"
      description="Groepslessen met professionele coaching in kleine groepen van max 12 personen. CrossFit, strength en conditie bij CrossFit Alkmaar."
      heroPhoto="/images/groepslessen-alkmaar-header.jpg"
      heroTitle="Groepslessen in Alkmaar"
      heroSubtitle="Samen trainen in kleine groepen met een coach die je kent. Geen massale lessen, maar persoonlijke aandacht."
      waaromTitle="Groepslessen die écht werken"
      waaromContent={
        <>
          <p>Groepslessen bij een sportschool betekent vaak: 30 mensen in een zaal, een instructeur op een podium, en hopen dat je het goed doet. Bij CrossFit Alkmaar is dat compleet anders.</p>
          <p>Onze groepen zijn maximaal 12 personen. Je coach kent je naam, je doelen en je beperkingen. Elke oefening wordt aangepast aan jouw niveau. Beginners trainen naast gevorderden - iedereen doet dezelfde workout, maar op een manier die bij hen past.</p>
          <p>Het resultaat: de motivatie van een groep, met de aandacht van personal training.</p>
        </>
      }
      aanpakTitle="Ons lesaanbod"
      aanpakCards={[
        { title: "CrossFit Classes", body: "Onze kern: gevarieerde workouts die kracht en conditie combineren. Elke dag anders, altijd uitdagend en altijd begeleid." },
        { title: "Strength Classes", body: "Focus op krachtopbouw met barbell-werk. Squats, deadlifts, presses - gestructureerd en geprogrammeerd voor progressie." },
        { title: "HYROX", body: <>Specifieke voorbereiding op <Link href="/hyrox-training-alkmaar">HYROX</Link>-wedstrijden. Hardlopen, roeien, sled push/pull en functionele oefeningen in wedstrijdformat.</> },
        { title: "BUILD", body: <>Gericht op spieropbouw en lichaamsvorm. Gestructureerde trainingen met focus op hypertrofie en aesthetics. <Link href="/programmas">Meer over BUILD →</Link></> },
      ]}
      voorwieTitle="Voor iedereen, van beginner tot gevorderd"
      voorwieContent={
        <>
          <p>Onze leden zijn 20 tot 70+ jaar. Sommigen hebben nooit gesport, anderen zijn doorgewinterde atleten. Wat ze delen: ze willen beter worden, samen met anderen, onder begeleiding van een coach.</p>
          <p>Nieuw? Je start altijd met de <Link href="/kickstart">Kickstart</Link> - een persoonlijk introductietraject zodat je voorbereid in je eerste groepsles staat.</p>
        </>
      }
      aeoTitle="Hoe werken groepslessen?"
      aeoItems={[
        { q: "Wat is het voordeel van groepslessen boven solo trainen?", a: "In een groep word je gedragen door de energie om je heen. Je wordt aangemoedigd, gemotiveerd en uitgedaagd. Bij CrossFit Alkmaar zijn groepen max 12 personen, zodat je de motivatie van een groep hebt mét de persoonlijke aandacht van een coach." },
        { q: "Welke groepslessen biedt CrossFit Alkmaar?", a: "CrossFit (complete workout), Strength (focus op kracht), HYROX (wedstrijdvoorbereiding) en BUILD (spiermassa opbouwen in groepen van max 6). Elke les duurt 60 minuten en wordt begeleid door een professionele coach." },
        { q: "Hoe vaak moet je groepslessen volgen voor resultaat?", a: "Twee tot drie keer per week is voldoende. Veel leden combineren CrossFit met Strength of HYROX voor variatie. Consistentie is belangrijker dan intensiteit." },
      ]}
      members={[
        { videoId: "7_p0gpFtEvk", name: "Lisette", quote: "Ik voel me sindsdien een stuk fitter!" },
        { videoId: "a4ENPMXSTX8", name: "Simone", quote: "Het zijn gewoon allemaal leuke mensen. Iedereen motiveert elkaar." },
      ]}
      faqItems={[
        { q: "Hoe groot zijn de groepen?", aText: "Maximaal 12 personen per les. Zo krijgt iedereen persoonlijke aandacht van de coach.", a: "Maximaal 12 personen per les. Zo krijgt iedereen persoonlijke aandacht van de coach." },
        { q: "Welke lessen bieden jullie aan?", aText: "CrossFit, Strength, HYROX en Build. Elke les duurt 60 minuten en wordt begeleid door een professionele coach.", a: <>CrossFit, Strength, <Link href="/hyrox-training-alkmaar">HYROX</Link> en <Link href="/programmas">Build</Link>. Elke les duurt 60 minuten en wordt begeleid door een professionele coach.</> },
        { q: "Moet ik van tevoren reserveren?", aText: "Ja, je reserveert via onze app. Zo weten we wie er komt en houden we de groepen klein.", a: "Ja, je reserveert via onze app. Zo weten we wie er komt en houden we de groepen klein." },
        { q: "Kan ik als beginner meedoen met groepslessen?", aText: "Ja, na het afronden van onze 28 Day Kickstart. Daarin leer je alle basisbewegingen zodat je veilig kunt meedoen.", a: <>Ja, na het afronden van onze <Link href="/kickstart">28 Day Kickstart</Link>. Daarin leer je alle basisbewegingen zodat je veilig kunt meedoen.</> },
      ]}
      ctaTitle="Probeer een groepsles"
      ctaSubtitle="Plan een gratis kennismakingsgesprek en ervaar zelf het verschil."
    />
  );
}
