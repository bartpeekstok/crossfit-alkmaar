"use client";

import Link from "next/link";
import SeoLanding from "../components/redesign/SeoLanding";

export default function HyroxHeerhugowaardPage() {
  return (
    <SeoLanding
      name="HYROX Heerhugowaard"
      slug="hyrox-heerhugowaard"
      description="HYROX training voor Heerhugowaard en Dijk en Waard. Officiële HYROX gym met alle stations op 10 minuten rijden, bij CrossFit Alkmaar."
      heroPhoto="/images/hyrox-alkmaar-header.jpg"
      heroPhotoPosition="center 22%"
      heroTitle="HYROX voor Heerhugowaard"
      heroSubtitle="Geen sleds of SkiErgs in Heerhugowaard? Op 10 minuten rijden staat een officiële HYROX gym volledig voor je klaar."
      waaromTitle="HYROX trainen vanuit Heerhugowaard"
      waaromContent={
        <>
          <p>Wil je in Heerhugowaard voor HYROX trainen, dan loop je snel vast: sleds, SkiErgs en wall balls vind je in een gewone sportschool niet. De dichtstbijzijnde officiële HYROX gym is CrossFit Alkmaar, op zo&apos;n tien minuten rijden vanuit Heerhugowaard.</p>
          <p>Bij ons train je alle 8 stations op wedstrijdgewicht, met coaches die de race zelf kennen. Zij helpen je met pacing, techniek en strategie, ook voor de 8 kilometer hardlopen tussen de stations door.</p>
          <p>En je hoeft het niet alleen te doen: meerdere leden uit Dijk en Waard bereiden zich bij ons voor op HYROX-races, als singles, doubles en relay teams.</p>
        </>
      }
      aanpakTitle="Wat je bij ons vindt"
      aanpakCards={[
        { title: "Alle 8 stations", body: "Sleds, SkiErg, roeiers, sandbags, wall balls, farmers carry en lunges: alles op wedstrijdgewicht en -afstand." },
        { title: "Coaches met race-ervaring", body: "Trainers die zelf HYROX hebben gelopen en je voorbereiden op precies wat er op racedag komt." },
        { title: "HYROX-lessen op het rooster", body: "Wekelijkse HYROX-groepslessen naast CrossFit en Strength. Combineer wat bij jouw doel past." },
        { title: "Eigen simulatie-events", body: "Test je racevorm bij onze HYROX Simulatie op 24 oktober, inclusief tijdwaarneming." },
      ]}
      voorwieTitle="Zo begin je"
      voorwieContent={
        <>
          <p>Iedereen begint met een gratis kennismakingsgesprek. We bespreken je HYROX-doel (eerste race of een snellere tijd) en laten de gym zien.</p>
          <p>Nieuw met functioneel trainen? Start dan met de <Link href="/kickstart">Kickstart</Link> en bouw rustig op. Al ervaring? Dan kun je direct de <Link href="/hyrox-training-alkmaar">HYROX-trainingen</Link> in.</p>
        </>
      }
      aeoTitle="HYROX in de buurt van Heerhugowaard"
      aeoItems={[
        { q: "Waar kun je HYROX trainen in Heerhugowaard?", a: "In Heerhugowaard zelf is geen officiële HYROX gym. De dichtstbijzijnde is CrossFit Alkmaar, op ongeveer 10 minuten rijden, met alle 8 stations, HYROX-lessen en eigen simulatie-events." },
        { q: "Wat heb je nodig om voor HYROX te trainen?", a: "Naast een goede loopbasis train je de stations: sled push en pull, SkiErg, roeien, burpee broad jumps, wall balls, farmers carry en lunges. Daarvoor heb je specifieke apparatuur nodig die CrossFit Alkmaar allemaal in huis heeft." },
        { q: "Kan ik als beginner uit Heerhugowaard starten met HYROX?", a: "Ja. HYROX is heel schaalbaar en je eerste race kan al na enkele maanden gerichte training. Je start met een gratis kennismaking en een opbouwprogramma op jouw niveau." },
      ]}
      members={[
        { videoId: "fI6KBasjzaA", name: "Simon", quote: "Je ziet mensen bij iedere workout fitter en sterker worden" },
        { videoId: "GCUpJQJJ8s0", name: "Malou", quote: "Meer gaan beseffen hoe fijn het is om lekker in je vel te zitten" },
      ]}
      faqItems={[
        { q: "Hoe ver is de gym vanaf Heerhugowaard?", aText: "Ongeveer 10 minuten met de auto naar de Phoenixstraat 33 in Alkmaar. Parkeren is gratis.", a: "Ongeveer 10 minuten met de auto naar de Phoenixstraat 33 in Alkmaar. Parkeren is gratis." },
        { q: "Hebben jullie alle HYROX-apparatuur?", aText: "Ja. Sleds, SkiErgs, roeiers, sandbags, wall balls en voldoende ruimte om alle wedstrijdonderdelen te trainen.", a: <>Ja. Sleds, SkiErgs, roeiers, sandbags, wall balls en voldoende ruimte om alle wedstrijdonderdelen te trainen. Bekijk de <Link href="/hyrox-gym-alkmaar">HYROX gym</Link>.</> },
        { q: "Organiseren jullie ook HYROX-events?", aText: "Ja, we organiseren HYROX Simulaties en Physical Fitness Tests. De eerstvolgende Simulatie is op 24 oktober.", a: <>Ja, we organiseren <Link href="/hyrox-simulatie-alkmaar">HYROX Simulaties</Link> en <Link href="/hyrox-pft-alkmaar">Physical Fitness Tests</Link>. De eerstvolgende Simulatie is op 24 oktober.</> },
        { q: "Trainen er meer mensen uit Heerhugowaard?", aText: "Ja, een flink deel van onze leden komt uit Heerhugowaard en Langedijk. Je traint dus met bekenden uit de buurt.", a: "Ja, een flink deel van onze leden komt uit Heerhugowaard en Langedijk. Je traint dus met bekenden uit de buurt." },
      ]}
      ctaTitle="Klaar voor je eerste HYROX?"
      ctaSubtitle="Plan een gratis kennismaking, bekijk de stations en bespreek je race-doelen met een coach."
    />
  );
}
