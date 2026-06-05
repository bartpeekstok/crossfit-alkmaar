"use client";

import Link from "next/link";
import SeoLanding from "../components/redesign/SeoLanding";

export default function HyroxTrainingPage() {
  return (
    <SeoLanding
      name="HYROX Training Alkmaar"
      slug="hyrox-training-alkmaar"
      description="HYROX voorbereiding in Alkmaar met professionele coaching. Functionele fitness, running en strength training in kleine groepen."
      heroPhoto="/images/hyrox-alkmaar-header.jpg"
      heroTitle="HYROX Training Alkmaar"
      heroSubtitle="Train voor je eerste of volgende HYROX wedstrijd met professionele coaching en een groep die je pusht."
      waaromTitle="Wat is HYROX?"
      waaromContent={
        <>
          <p>HYROX is een indoor fitnesswedstrijd die draait om functionele fitness en uithoudingsvermogen. Het format: 8 rondes van 1 kilometer hardlopen, afgewisseld met 8 functionele oefeningen zoals sled push, sled pull, burpee broad jumps, rowing, farmers carry, sandbag lunges, wall balls en ski erg.</p>
          <p>Het is de snelst groeiende fitnesswedstrijd ter wereld en trekt zowel beginners als ervaren atleten. Je hoeft niet super fit te zijn om mee te doen - je moet gewoon bereid zijn om te trainen.</p>
        </>
      }
      aanpakTitle="Waarom CrossFit Alkmaar de perfecte HYROX voorbereiding is"
      aanpakCards={[
        { title: "Alle HYROX-oefeningen", body: "We hebben alle equipment in huis: sleds, rowers, ski ergs, wall balls, sandbags en meer. Je traint precies de bewegingen die je nodig hebt." },
        { title: "Kracht + conditie", body: "CrossFit combineert krachttraining met cardio - precies wat HYROX vraagt. Je bouwt zowel kracht als uithoudingsvermogen op." },
        { title: "Coaching op techniek", body: "Efficiënte techniek scheelt minuten op je HYROX tijd. Onze coaches helpen je elke beweging perfectioneren voor maximale efficiëntie." },
        { title: "Mentale hardheid", body: "HYROX is net zoveel mentaal als fysiek. De intensiteit van onze trainingen bereidt je voor op de momenten waarop je door wilt geven." },
      ]}
      voorwieTitle="Beginnen met HYROX training"
      voorwieContent={
        <>
          <p>Of je nu voor je eerste HYROX traint of je PR wilt verbeteren - onze training bereidt je voor. Je bouwt kracht, conditie en techniek op in een omgeving die je pusht.</p>
          <p>Nieuwe leden starten met de <Link href="/kickstart">Kickstart</Link> om de basis-bewegingen te leren. Daarna sluit je aan bij de <Link href="/groepslessen">groepslessen</Link> waar je 10 tot 15 keer per maand kunt trainen.</p>
          <p>Wil je nog gerichter trainen? Bekijk onze <Link href="/personal-training">personal training</Link> of <Link href="/small-group-training">BUILD small group training</Link> voor extra focus op je HYROX doelen.</p>
          <p>Een keer een echte HYROX proeven? Schrijf je in voor de <Link href="/hyrox-simulatie-alkmaar">HYROX Simulatie op 22 augustus</Link> of <Link href="/hyrox-simulatie-24-oktober">24 oktober</Link>.</p>
        </>
      }
      aeoTitle="Hoe train je voor HYROX?"
      aeoItems={[
        { q: "Wat is HYROX en hoe bereid je je voor?", a: "HYROX is een fitnesswedstrijd met 8 rondes hardlopen afgewisseld met functionele oefeningen zoals roeien, sled push en burpees. Bij CrossFit Alkmaar combineren we in onze HYROX-lessen specifieke wedstrijdoefeningen met conditie- en krachttraining." },
        { q: "Hoe vaak moet je trainen voor HYROX?", a: "Twee tot drie HYROX-gerichte sessies per week, aangevuld met krachttraining, is ideaal. Bij CrossFit Alkmaar kun je HYROX-lessen combineren met CrossFit en Strength voor een compleet programma." },
        { q: "Wat is het verschil tussen HYROX en CrossFit training?", a: "CrossFit is breed: kracht, conditie, gymnastiek en olympisch gewichtheffen. HYROX is specifieker: hardlopen gecombineerd met functionele oefeningen. Bij ons kun je beide doen en ze versterken elkaar." },
      ]}
      members={[
        { videoId: "GCUpJQJJ8s0", name: "Malou", quote: "Meer gaan beseffen hoe fijn het is om lekker in je vel te zitten" },
        { videoId: "SKchVCAIx80", name: "Steven", quote: "Houding en techniek, daar zijn de trainers hier ongelooflijk goed in" },
      ]}
      faqItems={[
        { q: "Wat is HYROX?", aText: "HYROX is een indoor fitnesswedstrijd met 8 rondes van 1 km hardlopen, afgewisseld met functionele oefeningen zoals roeien, sled push, burpees en meer.", a: "HYROX is een indoor fitnesswedstrijd met 8 rondes van 1 km hardlopen, afgewisseld met functionele oefeningen zoals roeien, sled push, burpees en meer." },
        { q: "Moet ik al fit zijn voor HYROX training?", aText: "Nee. Onze HYROX-lessen zijn schaalbaar. Of je nu voor je eerste race traint of een PR wilt neerzetten - de training past zich aan.", a: <>Nee. Onze HYROX-lessen zijn schaalbaar. Of je nu voor je eerste race traint of een PR wilt neerzetten - de training past zich aan. Start met de <Link href="/kickstart">Kickstart</Link> als je nieuw bent.</> },
        { q: "Hoe bereid ik me voor op een HYROX wedstrijd?", aText: "Door regelmatig onze HYROX- en CrossFit-lessen te volgen. We trainen alle onderdelen: hardlopen, roeien, sled work en functionele kracht.", a: "Door regelmatig onze HYROX- en CrossFit-lessen te volgen. We trainen alle onderdelen: hardlopen, roeien, sled work en functionele kracht." },
        { q: "Kan ik ook HYROX trainen zonder mee te doen aan een wedstrijd?", aText: "Natuurlijk. Veel leden volgen HYROX-lessen puur voor de training. Het is een geweldige manier om conditie en kracht te combineren.", a: <>Natuurlijk. Veel leden volgen HYROX-lessen puur voor de training. Het is een geweldige manier om conditie en kracht te combineren. Bekijk onze <Link href="/meer-info#tarieven">tarieven</Link> om te starten.</> },
      ]}
      ctaTitle="Klaar voor HYROX?"
      ctaSubtitle="Plan een gratis kennismaking en ontdek hoe wij je voorbereiden op je beste HYROX resultaat."
    />
  );
}
