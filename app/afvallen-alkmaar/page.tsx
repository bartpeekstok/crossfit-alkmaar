"use client";

import Link from "next/link";
import SeoLanding from "../components/redesign/SeoLanding";

export default function AfvallenAlkmaarPage() {
  return (
    <SeoLanding
      name="Afvallen Alkmaar"
      slug="afvallen-alkmaar"
      description="Gezond afvallen met professionele begeleiding. Effectieve training en voedingsadvies bij CrossFit Alkmaar."
      heroPhoto="/images/afvallen-alkmaar-header.jpg"
      heroTitle="Afvallen in Alkmaar"
      heroSubtitle="Geen crashdiëten of eindeloos cardio. Wél effectieve training en begeleiding die werkt."
      waaromTitle="Waarom CrossFit werkt als je wilt afvallen"
      waaromContent={
        <>
          <p>Veel mensen proberen af te vallen door alleen te cardio-en of minder te eten. Dat werkt even, maar niet lang. Bij CrossFit Alkmaar pak je het anders aan: je bouwt spiermassa op, verhoogt je stofwisseling en verbrandt calorieën, ook na de training.</p>
          <p>Onze <Link href="/groepslessen">trainingen</Link> combineren kracht en conditie in gevarieerde workouts van een uur. Elke sessie wordt begeleid door een coach die je pusht én remt waar nodig. Zo train je effectief zonder blessures.</p>
          <p>En het belangrijkste: je traint in een groep die je motiveert. Geen eenzame uren op de loopband, maar energie van mensen die hetzelfde doel hebben.</p>
        </>
      }
      aanpakTitle="Onze aanpak voor gezond afvallen"
      aanpakCards={[
        { title: "Effectieve training", body: "CrossFit combineert kracht en conditie. Je verbetert je lichaamsamenstelling: minder vet, meer spiermassa. Dat is duurzamer dan alleen gewicht verliezen." },
        { title: "Voedingsbegeleiding", body: <>Training alleen is niet genoeg. Onze <Link href="/voedingsadvies">voedingscoaches</Link> helpen je met een eetpatroon dat past bij jouw leven, geen strenge diëten.</> },
        { title: "Persoonlijke coaching", body: "Elke les wordt begeleid in groepen van max 12. Je coach kent je doelen en past de training aan op jouw niveau en conditie." },
        { title: "Motivatie van de groep", body: "De community bij CrossFit Alkmaar houdt je op de been. Je traint met mensen die je aanmoedigen en missen als je er niet bent." },
      ]}
      voorwieTitle="Je hoeft niet fit te zijn om te beginnen"
      voorwieContent={
        <>
          <p>Veel van onze leden zijn begonnen met het doel om af te vallen. Sommigen hadden nog nooit gesport, anderen kwamen van een andere sportschool waar ze niet de resultaten kregen die ze wilden.</p>
          <p>Iedereen start met de <Link href="/kickstart">Kickstart</Link>, een persoonlijk traject waarin je de basis leert. Zo bouw je op in je eigen tempo en sta je nooit onvoorbereid in een groepsles.</p>
        </>
      }
      aeoTitle="Hoe val je duurzaam af?"
      aeoItems={[
        { q: "Waarom werken diëten niet op de lange termijn?", a: "De meeste diëten focussen alleen op minder eten, waardoor je spiermassa verliest en je stofwisseling vertraagt. Duurzaam afvallen combineer je caloriebeperking met krachttraining om spiermassa te behouden. Zo verbrand je ook in rust meer calorieën." },
        { q: "Wat is de beste sport om af te vallen?", a: "Een combinatie van krachttraining en conditietraining. Bij CrossFit Alkmaar doe je beide in elke les. Krachttraining bouwt spiermassa die je stofwisseling verhoogt, conditietraining verbetert je uithoudingsvermogen en verbrandt calorieën." },
        { q: "Hoe snel kun je afvallen met sporten?", a: <>Met 2-3 trainingen per week en gezonde voeding is 0,5 tot 1 kilo per week realistisch en duurzaam. Bij CrossFit Alkmaar bieden we ook <Link href="/voedingsadvies">voedingsadvies</Link> aan om je resultaten te versnellen.</> },
      ]}
      memberVideoId="1qhbmRPtysU"
      memberName="Jarrald"
      memberQuote="Lang sponsor geweest van sportscholen, nu 20 kilo afgevallen"
      faqItems={[
        { q: "Kan ik afvallen met CrossFit?", aText: "Ja. Onze trainingen combineren kracht en cardio, ideaal voor vetverbranding. Veel leden zien resultaat binnen een paar weken, zeker in combinatie met ons voedingsadvies.", a: <>Ja. Onze trainingen combineren kracht en cardio, ideaal voor vetverbranding. Veel leden zien resultaat binnen een paar weken, zeker in combinatie met ons <Link href="/voedingsadvies">voedingsadvies</Link>.</> },
        { q: "Hoe vaak moet ik trainen om af te vallen?", aText: "2 tot 3 keer per week is al genoeg om resultaat te zien. Consistentie is belangrijker dan frequentie.", a: "2 tot 3 keer per week is al genoeg om resultaat te zien. Consistentie is belangrijker dan frequentie." },
        { q: "Bieden jullie ook voedingsbegeleiding?", aText: "Ja. We bieden voedingsadvies aan als aanvulling op je training. Afvallen begint in de keuken, onze coaches helpen je met praktische tips.", a: <>Ja. We bieden <Link href="/voedingsadvies">voedingsadvies</Link> aan als aanvulling op je training. Afvallen begint in de keuken, onze coaches helpen je met praktische tips.</> },
        { q: "Is CrossFit niet te zwaar als ik wil afvallen?", aText: "Nee. Elke oefening wordt aangepast aan jouw niveau. Je hoeft niet fit te zijn om te starten, je wordt fit doordat je start.", a: <>Nee. Elke oefening wordt aangepast aan jouw niveau. Je hoeft niet fit te zijn om te starten, je wordt fit doordat je start. Begin met de <Link href="/kickstart">Kickstart</Link> en bouw op in je eigen tempo.</> },
      ]}
      ctaTitle="Klaar om te beginnen?"
      ctaSubtitle="Plan een gratis kennismakingsgesprek en ontdek hoe wij je kunnen helpen met gezond afvallen."
    />
  );
}
