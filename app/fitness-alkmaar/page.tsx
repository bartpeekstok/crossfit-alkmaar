"use client";

import Link from "next/link";
import SeoLanding from "../components/redesign/SeoLanding";

export default function FitnessAlkmaarPage() {
  return (
    <SeoLanding
      name="Fitness Alkmaar"
      slug="fitness-alkmaar"
      description="Fitness met persoonlijke begeleiding in kleine groepen. CrossFit, strength training en meer bij CrossFit Alkmaar."
      heroPhoto="/images/fitness-alkmaar-header.jpg"
      heroTitle="Fitness Alkmaar"
      heroSubtitle="Fitness met een coach die je kent, in een groep die je motiveert. Geen eindeloos rondjes lopen op de loopband."
      waaromTitle="Fitness met echte begeleiding"
      waaromContent={
        <>
          <p>Bij veel fitnesscentra in Alkmaar sta je er alleen voor. Je maakt een schema, probeert het een paar weken vol te houden, en voor je het weet sta je weer op de bank. Herkenbaar?</p>
          <p>Bij CrossFit Alkmaar werkt het anders. Elke training is gepland, gevarieerd en wordt begeleid door een coach. Je hoeft niet na te denken over wat je gaat doen, wij regelen dat. Jij hoeft alleen maar op te komen dagen.</p>
          <p>De trainingen combineren kracht, conditie en mobiliteit. Je traint je hele lichaam, elke week. Dat is effectiever dan vier keer per week dezelfde spiergroep isoleren op een apparaat.</p>
        </>
      }
      aanpakTitle="CrossFit Alkmaar vs. een gewone fitness"
      aanpakCards={[
        { title: "Coach elke les", body: "Bij ons staat er altijd een coach. Die corrigeert je techniek, pusht je als het kan, en remt je af als het moet." },
        { title: "Elke dag een andere workout", body: "Geen standaard schema dat je wekenlang herhaalt. Elke training is anders, zodat je lichaam blijft groeien." },
        { title: "Resultaat in minder tijd", body: "In 60 minuten train je kracht, conditie en mobiliteit. Geen 2 uur in de gym nodig voor dezelfde resultaten." },
        { title: "Motivatie van de groep", body: "Samen trainen werkt. De groep houdt je verantwoordelijk, als je er niet bent merken mensen dat." },
      ]}
      voorwieTitle="Hoe begin je?"
      voorwieContent={
        <>
          <p>Iedereen begint met een gratis kennismakingsgesprek. We bespreken je doelen, laten de gym zien en leggen uit hoe het werkt. Geen verplichtingen.</p>
          <p>Daarna start je met de <Link href="/kickstart">Kickstart</Link>, een persoonlijk traject van semi personal training sessies waarin je alle basis-bewegingen leert. Zo ben je klaar voor de <Link href="/groepslessen">groepslessen</Link> en weet je precies wat je doet.</p>
        </>
      }
      aeoTitle="Hoe word je fit in Alkmaar?"
      aeoItems={[
        { q: "Hoe word je het snelst fit?", a: "Door gevarieerd te trainen: kracht, conditie en mobiliteit combineren. Bij CrossFit Alkmaar wissel je dagelijks af tussen deze elementen, waardoor je lichaam zich breed ontwikkelt in plaats van eenzijdig." },
        { q: "Wat is beter: een fitness abonnement of CrossFit?", a: "Bij fitness train je solo op apparaten. Bij CrossFit train je in kleine groepen van max 12 met een coach die je programma schrijft, je techniek corrigeert en je motiveert. Je betaalt meer, maar krijgt veel meer begeleiding en resultaat." },
        { q: "Hoe vaak moet je trainen om resultaat te zien?", a: "Twee tot drie keer per week is genoeg om fitter en sterker te worden. Consistentie is belangrijker dan frequentie. Bij CrossFit Alkmaar bouwen we je trainingen zo op dat je met 2-3 sessies al serieus vooruit gaat." },
      ]}
      members={[
        { videoId: "a4ENPMXSTX8", name: "Simone", quote: "Het zijn gewoon allemaal leuke mensen. Iedereen motiveert elkaar." },
        { videoId: "1qhbmRPtysU", name: "Jarrald", quote: "Lang sponsor geweest van sportscholen, nu 20 kilo afgevallen" },
      ]}
      faqItems={[
        { q: "Wat is het verschil tussen fitness en CrossFit?", aText: "Bij fitness train je meestal solo aan machines. Bij CrossFit Alkmaar train je in kleine groepen met begeleiding, gevarieerde workouts en een community die je motiveert.", a: "Bij fitness train je meestal solo aan machines. Bij CrossFit Alkmaar train je in kleine groepen met begeleiding, gevarieerde workouts en een community die je motiveert." },
        { q: "Kan ik ook vrij trainen?", aText: "Onze focus ligt op begeleide groepslessen. Zo haal je het maximale uit je training en voorkom je blessures.", a: <>Onze focus ligt op begeleide <Link href="/groepslessen">groepslessen</Link>. Zo haal je het maximale uit je training en voorkom je blessures.</> },
        { q: "Hoe snel zie ik resultaat?", aText: "De meeste leden merken binnen 2-4 weken verschil in energie en kracht. Zichtbare veranderingen volgen vaak na 6-8 weken consistent trainen.", a: "De meeste leden merken binnen 2-4 weken verschil in energie en kracht. Zichtbare veranderingen volgen vaak na 6-8 weken consistent trainen." },
        { q: "Is het geschikt als ik nog nooit heb gesport?", aText: "Ja. Via onze Kickstart leer je de basis in 4 weken. Alles wordt aangepast aan jouw startniveau.", a: <>Ja. Via onze <Link href="/kickstart">Kickstart</Link> leer je de basis in 4 weken. Alles wordt aangepast aan jouw startniveau.</> },
      ]}
      ctaTitle="Klaar om te beginnen?"
      ctaSubtitle="Plan een gratis kennismaking en ontdek waarom onze leden niet meer terug willen naar een gewone sportschool."
    />
  );
}
