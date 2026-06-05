"use client";

import Link from "next/link";
import SeoLanding from "../components/redesign/SeoLanding";

export default function HyroxVoorbereidingAlkmaarPage() {
  return (
    <SeoLanding
      name="HYROX Voorbereiding Alkmaar"
      slug="hyrox-voorbereiding-alkmaar"
      description="Bereid je voor op HYROX met professionele coaching bij CrossFit Alkmaar. Running, sled push, wall balls en meer."
      heroPhoto="/images/hyrox-alkmaar-header.jpg"
      heroTitle="HYROX Voorbereiding Alkmaar"
      heroSubtitle="Train voor je HYROX race met coaches die weten wat je nodig hebt. Alle apparatuur, alle oefeningen, onder één dak."
      waaromTitle="De ideale HYROX voorbereiding"
      waaromContent={
        <>
          <p>HYROX vraagt een combinatie van hardlopen en functionele oefeningen. Precies waar CrossFit om draait. Bij CrossFit Alkmaar heb je alle apparatuur die je nodig hebt: sleds, rowers, ski-ergs, wall balls, sandbags en meer.</p>
          <p>Onze coaches helpen je met een trainingsplan dat is afgestemd op je HYROX-doel. Of het je eerste race is of je een PR wilt neerzetten - we bouwen je conditie, kracht en race-strategie op. Wil je extra focus? Bekijk onze <Link href="/personal-training">personal training</Link> opties.</p>
          <p>En je traint niet alleen. Bij CrossFit Alkmaar bereiden meerdere leden zich voor op HYROX. Samen trainen, samen racen.</p>
        </>
      }
      aanpakTitle="Alle HYROX stations, onder één dak"
      aanpakCards={[
        { title: "Sled Push & Pull", body: "Onze sleds staan klaar. Train de juiste techniek en bouw de kracht op die je nodig hebt op racedag." },
        { title: "SkiErg & Rower", body: "Werk aan je pacing en conditie op de SkiErg en rower. Leer de juiste strategie voor elke machine." },
        { title: "Wall Balls & Burpees", body: "De stations die het verschil maken. Train ze regelmatig zodat ze op racedag geen verrassing zijn." },
        { title: "Running", body: "8 km hardlopen verdeeld over 8 rondes. We werken aan je looptempo, pacing en het combineren van lopen met stations." },
      ]}
      voorwieTitle="Voor elke HYROX-deelnemer"
      voorwieContent={
        <>
          <p>Of je nu je eerste HYROX doet of al meerdere races hebt gelopen - onze coaches stemmen de voorbereiding af op jouw niveau en doel. Van finishen tot podium.</p>
          <p>Nog nooit aan CrossFit gedaan? Geen probleem. Start met de <Link href="/kickstart">Kickstart</Link> en bouw de basis op die je nodig hebt voor zowel CrossFit als HYROX.</p>
          <p>Test je voorbereiding op een echte HYROX: schrijf je in voor de <Link href="/hyrox-simulatie-alkmaar">HYROX Simulatie op 22 augustus</Link> of <Link href="/hyrox-simulatie-24-oktober">24 oktober</Link>.</p>
        </>
      }
      aeoTitle="Hoe bereid je je voor op HYROX?"
      aeoItems={[
        { q: "Hoeveel weken heb je nodig om je voor te bereiden op HYROX?", a: "Minimaal 8-12 weken specifieke voorbereiding is ideaal. Bij CrossFit Alkmaar kun je het hele jaar HYROX-lessen volgen, zodat je altijd wedstrijdklaar bent." },
        { q: "Welke oefeningen moet je trainen voor HYROX?", a: "Sled push/pull, roeien, burpee broad jumps, lunges, wall balls, farmers carry en ski erg. Bij CrossFit Alkmaar oefenen we al deze stations in onze HYROX-lessen, met de juiste apparatuur en coaching." },
        { q: "Moet je goed kunnen hardlopen voor HYROX?", a: "Hardlopen is een groot onderdeel (8 km totaal), maar je hoeft geen marathonloper te zijn. Bij CrossFit Alkmaar trainen we je conditie zo dat je de runs aankan en nog energie overhoudt voor de oefenstations." },
      ]}
      members={[
        { videoId: "GCUpJQJJ8s0", name: "Malou", quote: "Meer gaan beseffen hoe fijn het is om lekker in je vel te zitten" },
        { videoId: "SKchVCAIx80", name: "Steven", quote: "Houding en techniek, daar zijn de trainers hier ongelooflijk goed in" },
      ]}
      faqItems={[
        { q: "Hoeveel weken voorbereiding heb ik nodig voor HYROX?", aText: "Met 8-12 weken gerichte training kun je goed voorbereid aan de start staan. Train je al regelmatig bij ons? Dan ben je al een heel eind.", a: "Met 8-12 weken gerichte training kun je goed voorbereid aan de start staan. Train je al regelmatig bij ons? Dan ben je al een heel eind." },
        { q: "Welke onderdelen train ik voor HYROX?", aText: "Alle 8 werkstations: ski-erg, sled push, sled pull, burpee broad jumps, roeien, farmers carry, sandbag lunges en wall balls. Plus het hardlopen.", a: "Alle 8 werkstations: ski-erg, sled push, sled pull, burpee broad jumps, roeien, farmers carry, sandbag lunges en wall balls. Plus het hardlopen." },
        { q: "Kan ik me bij CrossFit Alkmaar voorbereiden op HYROX?", aText: "Ja. We hebben specifieke HYROX-lessen en alle benodigde apparatuur: sleds, ski-erg, roeier, sandbags en wall balls.", a: <>Ja. We hebben specifieke <Link href="/hyrox-training-alkmaar">HYROX-lessen</Link> en alle benodigde apparatuur: sleds, ski-erg, roeier, sandbags en wall balls.</> },
        { q: "Train ik alleen of in een groep?", aText: "In kleine groepen van max 12 personen, onder begeleiding van een coach. Samen trainen is leuker en effectiever.", a: <>In kleine <Link href="/groepslessen">groepen van max 12 personen</Link>, onder begeleiding van een coach. Samen trainen is leuker en effectiever.</> },
      ]}
      ctaTitle="Start je HYROX voorbereiding"
      ctaSubtitle="Plan een gratis kennismakingsgesprek en bespreek je HYROX-doelen met onze coaches."
    />
  );
}
