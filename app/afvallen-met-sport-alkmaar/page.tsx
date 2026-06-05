"use client";

import Link from "next/link";
import SeoLanding from "../components/redesign/SeoLanding";

export default function AfvallenMetSportAlkmaarPage() {
  return (
    <SeoLanding
      name="Afvallen met sport Alkmaar"
      slug="afvallen-met-sport-alkmaar"
      description="Duurzaam afvallen door sport bij CrossFit Alkmaar. Combineer krachttraining en conditie met professionele coaching en voedingsadvies."
      heroPhoto="/images/CFA-december-lowres-21.jpg"
      heroTitle="Afvallen met Sport in Alkmaar"
      heroSubtitle="Duurzaam gewichtsverlies door de juiste combinatie van krachttraining, conditie en voeding. Geen crashdieet, maar blijvend resultaat."
      waaromTitle="Waarom crashdiëten niet werken"
      waaromContent={
        <>
          <p>Minder eten en meer cardio - het klinkt logisch, maar het werkt niet op de lange termijn. Je lichaam past zich aan, je stofwisseling vertraagt en zodra je stopt val je terug in oude patronen. Het jojo-effect is geen gebrek aan wilskracht, maar een voorspelbaar gevolg van een verkeerde aanpak.</p>
          <p>Duurzaam afvallen vraagt om een andere strategie: <strong>spiermassa opbouwen</strong> zodat je lichaam in rust meer calorieën verbrandt, <strong>gevarieerd trainen</strong> zodat je gemotiveerd blijft, en <strong>je voeding aanpassen</strong> zonder extreme restricties.</p>
          <p>Bij CrossFit Alkmaar combineren we precies die drie pijlers. Onze <Link href="/groepslessen">groepslessen</Link> zijn ontworpen om je lichaam op de juiste manier uit te dagen - elke dag anders, altijd effectief.</p>
        </>
      }
      aanpakTitle="Waarom sporten bij CrossFit Alkmaar werkt"
      aanpakCards={[
        { title: "Krachttraining versnelt je stofwisseling", body: "Meer spiermassa betekent een hogere basale stofwisseling. Je verbrandt meer calorieën, ook op de dagen dat je niet traint. Krachttraining is de meest onderschatte manier om af te vallen." },
        { title: "Gevarieerde training houdt je gemotiveerd", body: "Geen twee trainingen zijn hetzelfde. De afwisseling houdt je scherp en voorkomt dat je in een sleur raakt - de belangrijkste reden waarom mensen stoppen met sporten." },
        { title: "Voedingsadvies inbegrepen", body: <>Training alleen is niet genoeg. Onze <Link href="/voedingsadvies">voedingscoaches</Link> helpen je met een eetpatroon dat past bij jouw leven - geen strenge diëten, wel duurzaam resultaat.</> },
        { title: "Professionele coaching", body: "Elke les wordt begeleid door een ervaren coach in groepen van maximaal 12 personen. Je krijgt persoonlijke aandacht, correctie op techniek en een trainingsplan dat bij jou past." },
      ]}
      voorwieTitle="Onze aanpak: training én voeding"
      voorwieContent={
        <>
          <p>Afvallen met sport werkt het beste als je training en voeding combineert. Daarom bieden we naast onze trainingen ook <Link href="/voedingsadvies">voedingsadvies</Link> aan. Geen caloriëntellen of maaltijdplannen, maar praktische richtlijnen die passen bij jouw situatie.</p>
          <p>Je start met de <Link href="/kickstart">Kickstart</Link>: een persoonlijk introductietraject waarin je de basistechnieken leert, je doelen bespreekt en een plan maakt. Zo begin je met vertrouwen en bouw je op in je eigen tempo.</p>
          <p>Bekijk onze <Link href="/meer-info#tarieven">tarieven</Link> of plan direct een gratis kennismakingsgesprek om te ontdekken wat het beste bij je past.</p>
        </>
      }
      aeoTitle="Hoe val je af door te sporten?"
      aeoItems={[
        { q: "Welke sport is het beste om af te vallen?", a: "Een combinatie van kracht- en conditietraining. Krachttraining bouwt spiermassa die je stofwisseling verhoogt, conditietraining verbrandt calorieën. Bij CrossFit Alkmaar combineer je beide in elke les." },
        { q: "Hoeveel moet je sporten om af te vallen?", a: <>Twee tot drie keer per week trainen, gecombineerd met gezonde voeding, is genoeg voor duurzaam resultaat. Bij CrossFit Alkmaar bieden we ook <Link href="/voedingsadvies">voedingsadvies</Link> aan om je resultaten te versnellen.</> },
        { q: "Waarom is alleen cardio niet genoeg om af te vallen?", a: "Alleen cardio verbrand calorieën, maar je verliest ook spiermassa waardoor je stofwisseling daalt. Met krachttraining behoud je spieren en verbrand je ook in rust meer. Bij CrossFit Alkmaar train je altijd een mix van kracht en conditie." },
      ]}
      members={[
        { videoId: "1qhbmRPtysU", name: "Jarrald", quote: "Lang sponsor geweest van sportscholen, nu 20 kilo afgevallen" },
        { videoId: "a4ENPMXSTX8", name: "Simone", quote: "Het zijn gewoon allemaal leuke mensen. Iedereen motiveert elkaar." },
      ]}
      faqItems={[
        { q: "Kan ik afvallen met CrossFit?", aText: "Zeker. CrossFit combineert krachttraining met hoge-intensiteit conditietraining. Daardoor verbrand je niet alleen tijdens de training calorieën, maar ook daarna - doordat je spiermassa opbouwt die je stofwisseling verhoogt.", a: "Zeker. CrossFit combineert krachttraining met hoge-intensiteit conditietraining. Daardoor verbrand je niet alleen tijdens de training calorieën, maar ook daarna - doordat je spiermassa opbouwt die je stofwisseling verhoogt." },
        { q: "Hoe snel zie ik resultaat?", aText: "De meeste leden merken binnen 4 tot 6 weken verschil in energie, kracht en lichaamsamenstelling. Duurzaam afvallen gaat niet om snel gewicht verliezen, maar om een blijvende verandering in je levensstijl.", a: "De meeste leden merken binnen 4 tot 6 weken verschil in energie, kracht en lichaamsamenstelling. Duurzaam afvallen gaat niet om snel gewicht verliezen, maar om een blijvende verandering in je levensstijl." },
        { q: "Moet ik ook mijn voeding aanpassen?", aText: "Voeding speelt een grote rol bij afvallen. Bij CrossFit Alkmaar krijg je voedingsadvies als onderdeel van je traject. Geen strenge diëten, maar praktische richtlijnen die passen bij jouw leven.", a: <>Voeding speelt een grote rol bij afvallen. Bij CrossFit Alkmaar krijg je <Link href="/voedingsadvies">voedingsadvies</Link> als onderdeel van je traject. Geen strenge diëten, maar praktische richtlijnen die passen bij jouw leven.</> },
        { q: "Is CrossFit niet te zwaar als ik overgewicht heb?", aText: "Nee. Elke oefening wordt aangepast aan jouw niveau en mogelijkheden. Onze coaches zorgen ervoor dat je veilig traint en stap voor stap opbouwt. Veel van onze leden zijn begonnen met overgewicht en trainen nu meerdere keren per week.", a: <>Nee. Elke oefening wordt aangepast aan jouw niveau en mogelijkheden. Onze coaches zorgen ervoor dat je veilig traint en stap voor stap opbouwt. Begin met de <Link href="/kickstart">Kickstart</Link> en bouw op in je eigen tempo.</> },
      ]}
      ctaTitle="Klaar om duurzaam af te vallen?"
      ctaSubtitle="Plan een gratis kennismakingsgesprek en ontdek hoe sport je kan helpen bij gezond en blijvend gewichtsverlies."
    />
  );
}
