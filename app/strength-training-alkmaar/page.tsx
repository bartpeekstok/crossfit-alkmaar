"use client";

import Link from "next/link";
import SeoLanding from "../components/redesign/SeoLanding";

export default function StrengthTrainingAlkmaarPage() {
  return (
    <SeoLanding
      name="Strength Training Alkmaar"
      slug="strength-training-alkmaar"
      description="Strength training met professionele coaching in Alkmaar. Squats, deadlifts, presses en compound lifts onder begeleiding."
      heroPhoto="/images/strength-training-header.jpg"
      heroTitle="Strength Training Alkmaar"
      heroSubtitle="Word sterker met squats, deadlifts en presses onder professionele coaching. Voor beginners en gevorderden."
      waaromTitle="Wat is strength training?"
      waaromContent={
        <>
          <p>Strength training draait om het systematisch opbouwen van kracht met compound lifts - oefeningen die meerdere spiergroepen tegelijk aanspreken. Denk aan squats, deadlifts, overhead presses en bench presses. Dit zijn de meest effectieve bewegingen om sterker te worden.</p>
          <p>Het principe is eenvoudig: progressive overload. Elke week voeg je een klein beetje gewicht toe, zodat je lichaam zich aanpast en sterker wordt. Bij CrossFit Alkmaar volgen we een geprogrammeerde aanpak zodat je consistent progressie maakt, zonder blessures.</p>
          <p>De voordelen gaan verder dan alleen kracht. Strength training verhoogt je stofwisseling, versterkt je botten en gewrichten, verbetert je houding en geeft je meer energie in het dagelijks leven. Het is de basis van elke goede fitnesstroutine. Lees ook onze pagina over <Link href="/krachttraining-alkmaar">krachttraining in Alkmaar</Link> voor meer informatie.</p>
        </>
      }
      aanpakTitle="Wat je kunt verwachten"
      aanpakCards={[
        { title: "Compound liften", body: "Squat, deadlift, bench press en overhead press. De meest effectieve oefeningen voor het opbouwen van totale lichaamskracht, altijd met coaching op techniek." },
        { title: "Progressief sterker worden", body: "Onze programmering volgt een periodisering. Je bouwt systematisch kracht op over weken en maanden met progressive overload - niet willekeurig, maar doelgericht." },
        { title: "Techniekcoaching bij elke rep", body: "Geen solo-sessies aan machines. Bij elke training staat een coach naast je die je techniek bewaakt, corrigeert en optimaliseert voor veiligheid en resultaat." },
        { title: "Geschikt voor elk niveau", body: "Of je nu voor het eerst een barbell oppakt of al jaren traint - het gewicht wordt aangepast aan jouw niveau. Iedereen traint samen, op eigen kracht." },
      ]}
      voorwieTitle="Onze Strength lessen"
      voorwieContent={
        <>
          <p>Strength training is een vast onderdeel van onze dagelijkse programmering. Elke les begint met een krachtcomponent: squats, deadlifts, presses of Olympic lifts. Daarna volgt een workout die kracht combineert met conditie.</p>
          <p>Onze coaches programmeren in cycli zodat je alle grote lifts regelmatig traint en meetbaar sterker wordt. Je hoeft zelf niets te plannen - stap binnen en volg het programma.</p>
          <p>Nieuw bij strength training? Start met onze <Link href="/kickstart">Kickstart</Link> om de basisbewegingen te leren. Daarna sluit je aan bij de reguliere <Link href="/groepslessen">groepslessen</Link> waar je het rooster en de lestijden vindt.</p>
          <p>Bekijk onze <Link href="/meer-info#tarieven">tarieven</Link> om te zien welk abonnement bij je past.</p>
        </>
      }
      aeoTitle="Wat is strength training?"
      aeoItems={[
        { q: "Wat is strength training en hoe verschilt het van fitness?", a: "Strength training focust op compound liften: squat, deadlift, bench press en overhead press. In plaats van machines gebruik je barbells en vrije gewichten, waardoor je hele lichaam samenwerkt. Bij CrossFit Alkmaar heb je specifieke Strength-lessen gericht op progressief sterker worden." },
        { q: "Hoe vaak moet je strength trainen per week?", a: "Twee tot drie keer is optimaal voor de meeste mensen. Je spieren hebben 48 uur herstel nodig na een zware sessie. Bij CrossFit Alkmaar kun je Strength combineren met CrossFit-lessen voor een uitgebalanceerd programma." },
        { q: "Is strength training veilig zonder ervaring?", a: <>Ja, mits je begeleiding hebt. Bij CrossFit Alkmaar start je met de <Link href="/kickstart">Kickstart</Link> waar je alle liften leert in een groep van max 6. Onze coaches bewaken je techniek bij elke rep, ook in de groepslessen.</> },
      ]}
      members={[
        { videoId: "a4ENPMXSTX8", name: "Simone", quote: "Het zijn gewoon allemaal leuke mensen. Iedereen motiveert elkaar." },
        { videoId: "SKchVCAIx80", name: "Steven", quote: "Houding en techniek, daar zijn de trainers hier ongelooflijk goed in" },
      ]}
      faqItems={[
        { q: "Wat is strength training?", aText: "Strength training is gericht trainen op kracht met compound oefeningen zoals squats, deadlifts en presses. Het doel is progressief sterker worden door systematisch meer gewicht of volume toe te voegen.", a: "Strength training is gericht trainen op kracht met compound oefeningen zoals squats, deadlifts en presses. Het doel is progressief sterker worden door systematisch meer gewicht of volume toe te voegen." },
        { q: "Is strength training geschikt voor beginners?", aText: "Ja, strength training is juist ideaal voor beginners. Je leert de basisbewegingen onder professionele coaching en bouwt stap voor stap kracht op. Onze Kickstart bereidt je volledig voor.", a: <>Ja, strength training is juist ideaal voor beginners. Je leert de basisbewegingen onder professionele coaching en bouwt stap voor stap kracht op. Onze <Link href="/kickstart">Kickstart</Link> bereidt je volledig voor.</> },
        { q: "Hoe vaak moet ik strength trainen?", aText: "2 tot 4 keer per week is ideaal. Onze programmering zorgt voor de juiste balans tussen belasting en herstel, zodat je consistent sterker wordt zonder overtraining.", a: "2 tot 4 keer per week is ideaal. Onze programmering zorgt voor de juiste balans tussen belasting en herstel, zodat je consistent sterker wordt zonder overtraining." },
        { q: "Wat is het verschil tussen strength training en bodybuilding?", aText: "Strength training richt zich op het opbouwen van functionele kracht met compound lifts. Bodybuilding focust op spiergroei en uiterlijk. Bij strength training train je bewegingen, niet individuele spieren.", a: "Strength training richt zich op het opbouwen van functionele kracht met compound lifts. Bodybuilding focust op spiergroei en uiterlijk. Bij strength training train je bewegingen, niet individuele spieren." },
      ]}
      ctaTitle="Start met strength training"
      ctaSubtitle="Plan een gratis kennismakingsgesprek en ontdek hoe je sterker wordt bij CrossFit Alkmaar."
    />
  );
}
