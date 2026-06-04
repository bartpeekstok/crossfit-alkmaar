"use client";

import Link from "next/link";
import SeoLanding from "../components/redesign/SeoLanding";

export default function KrachttrainingAlkmaarPage() {
  return (
    <SeoLanding
      name="Krachttraining Alkmaar"
      slug="krachttraining-alkmaar"
      description="Krachttraining met professionele coaching in Alkmaar. Squats, deadlifts en Olympic lifting in kleine groepen."
      heroPhoto="/images/krachttraining-alkmaar-header.jpg"
      heroTitle="Krachttraining Alkmaar"
      heroSubtitle="Sterker worden met begeleiding. Squats, deadlifts en meer, altijd met een coach die op je techniek let."
      waaromTitle="Krachttraining met coaching, niet alleen met gewichten"
      waaromContent={
        <>
          <p>In de meeste sportscholen pak je een halter en hoop je dat je techniek klopt. Bij CrossFit Alkmaar staat er altijd een coach naast je. Of je nu voor het eerst een barbell oppakt of al jaren squats, je krijgt feedback op elke rep.</p>
          <p>Onze krachtsessies zijn onderdeel van het dagelijkse CrossFit-programma. Bekijk onze <Link href="/programmas">programma&apos;s</Link> voor meer details. Elke training begint met een krachtcomponent: squats, deadlifts, presses, Olympic lifts. Daarna volgt een workout die kracht combineert met conditie.</p>
          <p>Het resultaat: je wordt niet alleen sterker, maar ook functioneel fitter. Kracht die je in het dagelijks leven gebruikt.</p>
        </>
      }
      aanpakTitle="Wat je kunt verwachten"
      aanpakCards={[
        { title: "Compound lifts", body: "Back squat, front squat, deadlift, bench press, overhead press. De basis van elke goede krachttraining, met coaching op techniek." },
        { title: "Olympic lifting", body: "Clean & jerk en snatch. Explosieve lifts die kracht, coördinatie en mobiliteit trainen. Altijd onder begeleiding van een coach." },
        { title: "Gymnastics & bodyweight", body: "Pull-ups, muscle-ups, handstand push-ups. Functionele kracht met je eigen lichaamsgewicht, opgebouwd in progressies." },
        { title: "Geprogrammeerd voor resultaat", body: "Onze programmering volgt een periodisering. Je bouwt systematisch kracht op over weken en maanden, niet willekeurig." },
      ]}
      voorwieTitle="Voor elk niveau"
      voorwieContent={
        <>
          <p>Je hoeft geen ervaring te hebben met krachttraining. Onze <Link href="/kickstart">Kickstart</Link> leert je de basis van alle bewegingen. Daarna train je in <Link href="/groepslessen">groepslessen</Link> waar de coach het gewicht en de bewegingen aanpast aan jouw niveau.</p>
          <p>Onze leden variëren van complete beginners tot mensen die al jaren trainen. Iedereen volgt dezelfde les, maar op een niveau dat bij hen past.</p>
        </>
      }
      aeoTitle="Hoe word je sterker?"
      aeoItems={[
        { q: "Waarom is krachttraining goed voor iedereen?", a: "Krachttraining verbetert je botdichtheid, versnelt je stofwisseling, voorkomt blessures en maakt dagelijkse activiteiten makkelijker. Het is niet alleen voor bodybuilders, het is essentieel voor je gezondheid, ongeacht je leeftijd." },
        { q: "Hoe begin je met krachttraining als beginner?", a: <>Begin met de basisbewegingen: squats, deadlifts en presses. Bij CrossFit Alkmaar start je met de <Link href="/kickstart">Kickstart</Link> waar je deze technieken leert in een kleine groep van max 6, onder begeleiding van een coach die elke rep bewaakt.</> },
        { q: "Wat is het verschil tussen krachttraining en bodybuilding?", a: "Bodybuilding richt zich op spiermassa en uiterlijk. Krachttraining bij CrossFit Alkmaar richt zich op functionele kracht: sterker worden in bewegingen die je dagelijks gebruikt. Je wordt sterker, niet per se groter." },
      ]}
      members={[
        { videoId: "a4ENPMXSTX8", name: "Simone", quote: "Het zijn gewoon allemaal leuke mensen. Iedereen motiveert elkaar." },
        { videoId: "SKchVCAIx80", name: "Steven", quote: "Houding en techniek, daar zijn de trainers hier ongelooflijk goed in" },
      ]}
      faqItems={[
        { q: "Is krachttraining geschikt voor beginners?", aText: "Absoluut. In onze Strength Classes leer je de basistechnieken zoals squats, deadlifts en presses onder begeleiding van een coach.", a: <>Absoluut. In onze Strength Classes leer je de basistechnieken zoals squats, deadlifts en presses onder begeleiding van een coach. Start met de <Link href="/kickstart">Kickstart</Link> en bouw stap voor stap op.</> },
        { q: "Wat is het verschil met een gewone sportschool?", aText: "Bij ons train je altijd met coaching. Geen solo-sessies aan machines, maar geprogrammeerde trainingen in kleine groepen met focus op techniek en progressie.", a: "Bij ons train je altijd met coaching. Geen solo-sessies aan machines, maar geprogrammeerde trainingen in kleine groepen met focus op techniek en progressie." },
        { q: "Hoe vaak per week krachttraining?", aText: "2 tot 3 keer per week is ideaal voor krachtopbouw. Onze programmering zorgt voor de juiste balans tussen belasting en herstel.", a: "2 tot 3 keer per week is ideaal voor krachtopbouw. Onze programmering zorgt voor de juiste balans tussen belasting en herstel." },
        { q: "Kan ik ook Olympic lifting leren?", aText: "Ja. Onze coaches zijn opgeleid in Olympic weightlifting. Snatch en clean & jerk komen regelmatig terug in onze programmering.", a: "Ja. Onze coaches zijn opgeleid in Olympic weightlifting. Snatch en clean & jerk komen regelmatig terug in onze programmering." },
      ]}
      ctaTitle="Begin met krachttraining"
      ctaSubtitle="Plan een gratis kennismakingsgesprek en ontdek hoe je sterker wordt bij CrossFit Alkmaar."
    />
  );
}
