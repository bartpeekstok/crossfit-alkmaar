"use client";

import Link from "next/link";
import SeoLanding from "../components/redesign/SeoLanding";

export default function GroepstrainingAlkmaarPage() {
  return (
    <SeoLanding
      name="Groepstraining Alkmaar"
      slug="groepstraining-alkmaar"
      description="Groepstraining in Alkmaar bij CrossFit Alkmaar. Train in kleine groepen van max 12 personen met professionele coaching en gevarieerde workouts."
      heroPhoto="/images/CFA-november-lowres-96.jpg"
      heroTitle="Groepstraining Alkmaar"
      heroSubtitle="Train samen in kleine groepen, word sterker met professionele coaching. Voor elk niveau, elke dag anders."
      waaromTitle="Waarom groepstraining werkt"
      waaromContent={
        <>
          <p>Alleen trainen is lastig vol te houden. Je mist motivatie, stelt uit, of weet niet of je het goed doet. Groepstraining lost dat op. Je traint samen met anderen, op een vast tijdstip, onder begeleiding van een coach die je kent.</p>
          <p>Onderzoek laat keer op keer zien: mensen die in een groep trainen, houden het langer vol en behalen betere resultaten. Bij CrossFit Alkmaar combineren we die groepsdynamiek met persoonlijke aandacht. Maximaal 12 personen per training, zodat je coach je naam kent, je doelen weet en je techniek kan bijsturen.</p>
          <p>Het resultaat: je wordt sterker, fitter en je hebt er plezier in. Niet voor een paar weken, maar voor de lange termijn.</p>
        </>
      }
      aanpakTitle="Wat maakt onze groepstraining anders?"
      aanpakCards={[
        { title: "Motivatie van de groep", body: "Samen trainen geeft energie. Je groepsgenoten moedigen je aan, houden je scherp en maken elke training leuker dan alleen sporten." },
        { title: "Professionele coaching", body: "Elke training wordt begeleid door een gecertificeerde coach. Je krijgt feedback op techniek, hulp bij het kiezen van gewichten en aanpassingen waar nodig." },
        { title: "Gevarieerde workouts", body: "Geen dag is hetzelfde. Kracht, conditie, gymnastics en functionele bewegingen wisselen elkaar af. Zo blijf je gemotiveerd en voorkom je plateaus." },
        { title: "Community & support", body: "Bij CrossFit Alkmaar ben je geen nummertje. Je wordt onderdeel van een hechte community die elkaar motiveert, binnen en buiten de box." },
      ]}
      voorwieTitle="Hoe ziet een groepstraining eruit?"
      voorwieContent={
        <>
          <p>Elke training duurt 60 minuten en volgt een vaste structuur: een warming-up, een techniek- of krachtdeel en een workout. De coach legt alles uit, demonstreert de bewegingen en past aan waar nodig. Beginners krijgen een lichtere variant, gevorderden worden extra uitgedaagd.</p>
          <p>Je kiest zelf hoe vaak je traint. Bekijk het <Link href="/groepslessen">lesrooster</Link> voor alle beschikbare lessen en tijden. Van CrossFit en Strength tot HYROX en BUILD - er is altijd een training die bij je past.</p>
          <p>Nog nooit getraind? Geen probleem. Je start met de <Link href="/kickstart">28 Day Kickstart</Link> - een persoonlijk introductietraject waarin je alle basisbewegingen leert en klaargestoomd wordt voor de groep.</p>
        </>
      }
      aeoTitle="Waarom is groepstraining effectief?"
      aeoItems={[
        { q: "Waarom is groepstraining effectiever dan alleen trainen?", a: "Onderzoek toont aan dat je harder traint in een groep. De sociale druk, aanmoediging en vaste afspraken zorgen voor meer consistentie en betere resultaten dan solo trainen." },
        { q: "Hoe groot zijn de groepen bij CrossFit Alkmaar?", a: "Maximaal 12 personen per les, en bij BUILD zelfs max 6. Zo krijg je de energie van een groep mét de persoonlijke aandacht van een coach die je naam kent en je techniek bewaakt." },
        { q: "Is groepstraining geschikt als je nog nooit hebt gesport?", a: <>Ja. Bij CrossFit Alkmaar start je met de <Link href="/kickstart">Kickstart</Link> in een groep van max 6 beginners. Je leert de basis samen met andere starters, zodat je niet alleen staat en op je gemak bent.</> },
      ]}
      members={[
        { videoId: "SKchVCAIx80", name: "Steven", quote: "Houding en techniek, daar zijn de trainers hier ongelooflijk goed in" },
        { videoId: "a4ENPMXSTX8", name: "Simone", quote: "Het zijn gewoon allemaal leuke mensen. Iedereen motiveert elkaar." },
      ]}
      faqItems={[
        { q: "Wat is groepstraining bij CrossFit Alkmaar?", aText: "Groepstraining bij CrossFit Alkmaar betekent samen trainen in kleine groepen van maximaal 12 personen, onder begeleiding van een professionele coach. Elke training is gevarieerd en wordt aangepast aan jouw niveau.", a: "Groepstraining bij CrossFit Alkmaar betekent samen trainen in kleine groepen van maximaal 12 personen, onder begeleiding van een professionele coach. Elke training is gevarieerd en wordt aangepast aan jouw niveau." },
        { q: "Is groepstraining geschikt voor beginners?", aText: "Ja, absoluut. Je start met onze 28 Day Kickstart waarin je alle basisbewegingen leert. Daarna sluit je aan bij de groep, op jouw eigen niveau.", a: <>Ja, absoluut. Je start met onze <Link href="/kickstart">28 Day Kickstart</Link> waarin je alle basisbewegingen leert. Daarna sluit je aan bij de groep, op jouw eigen niveau.</> },
        { q: "Hoeveel mensen trainen er in een groep?", aText: "Maximaal 12 personen per training. Zo krijgt iedereen persoonlijke aandacht en feedback van de coach op techniek en uitvoering.", a: "Maximaal 12 personen per training. Zo krijgt iedereen persoonlijke aandacht en feedback van de coach op techniek en uitvoering." },
        { q: "Wat kost groepstraining bij CrossFit Alkmaar?", aText: "Bekijk onze tarieven op de website. We bieden verschillende abonnementen aan, van 2x per week tot onbeperkt trainen. Je eerste kennismaking is altijd gratis.", a: <>Bekijk onze <Link href="/meer-info#tarieven">tarieven</Link> op de website. We bieden verschillende abonnementen aan, van 2x per week tot onbeperkt trainen. Je eerste kennismaking is altijd gratis.</> },
      ]}
      ctaTitle="Ervaar de kracht van groepstraining"
      ctaSubtitle="Plan een gratis kennismakingsgesprek en ontdek waarom samen trainen beter werkt."
    />
  );
}
