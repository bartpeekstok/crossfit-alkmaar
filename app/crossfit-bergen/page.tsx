"use client";

import Link from "next/link";
import SeoLanding from "../components/redesign/SeoLanding";

export default function CrossfitBergenPage() {
  return (
    <SeoLanding
      name="CrossFit Bergen NH"
      slug="crossfit-bergen"
      description="CrossFit voor Bergen NH, Schoorl en de Egmonden. Train in kleine groepen met persoonlijke begeleiding bij CrossFit Alkmaar, op een kwartier rijden."
      heroPhoto="/images/CFA-juni-03-community.jpg"
      heroTitle="CrossFit voor Bergen NH"
      heroSubtitle="Van duinrennen naar deadlifts: op een kwartier van Bergen train je kracht én conditie onder begeleiding."
      waaromTitle="Sterker worden naast het buitensporten"
      waaromContent={
        <>
          <p>Bergen, Schoorl en de Egmonden zijn een paradijs voor hardlopers en wielrenners — maar een officiële CrossFit-box vind je er niet. Wie naast het duinlopen ook sterker wil worden, rijdt in een kwartier naar CrossFit Alkmaar.</p>
          <p>Krachttraining is de perfecte aanvulling op duursport: je wordt belastbaarder, blijft langer blessurevrij en loopt of fietst er uiteindelijk harder door. Bij ons train je dat niet solo aan een apparaat, maar in kleine groepen met een coach die je techniek bewaakt.</p>
          <p>Elke les combineert kracht, conditie en mobiliteit. Ook als je nooit iets met halters hebt gedaan: alles wordt geschaald naar jouw niveau.</p>
        </>
      }
      aanpakTitle="Wat je bij ons vindt"
      aanpakCards={[
        { title: "Kracht voor duursporters", body: "Sterker worden zonder uren extra te trainen: twee gerichte sessies per week maken al het verschil." },
        { title: "Coach elke les", body: "Er staat altijd een coach op de vloer die je techniek corrigeert — juist belangrijk als barbells nieuw voor je zijn." },
        { title: "Kleine groepen", body: "Maximaal 12 personen per les. Persoonlijke aandacht in plaats van een anonieme sportschool." },
        { title: "HYROX-klaar", body: "Hardlopen combineren met functionele kracht? Onze box is volledig uitgerust voor HYROX-training." },
      ]}
      voorwieTitle="Zo begin je"
      voorwieContent={
        <>
          <p>Iedereen begint met een gratis kennismakingsgesprek. We bespreken je doelen — of dat nu sterker worden, blessurepreventie of een eerste <Link href="/hyrox-alkmaar">HYROX</Link> is — en laten de gym zien.</p>
          <p>Daarna start je met de <Link href="/kickstart">Kickstart</Link>: een persoonlijk traject waarin je alle basisbewegingen leert voordat je de <Link href="/groepslessen">groepslessen</Link> in gaat.</p>
        </>
      }
      aeoTitle="CrossFit in de buurt van Bergen"
      aeoItems={[
        { q: "Is er een CrossFit-box in Bergen NH?", a: "Nee, in Bergen, Schoorl en de Egmonden zit geen officiële CrossFit-box. De dichtstbijzijnde is CrossFit Alkmaar, op ongeveer een kwartier rijden vanaf het centrum van Bergen." },
        { q: "Is CrossFit goed voor hardlopers en wielrenners?", a: "Ja. Gerichte krachttraining maakt duursporters belastbaarder en sneller, en verkleint de kans op blessures. Twee sessies per week naast je duurtraining is genoeg voor merkbaar resultaat." },
        { q: "Wat is een goede sportschool voor inwoners van Bergen?", a: "Wie meer wil dan solo trainen in een standaard sportschool, kiest vaak voor CrossFit Alkmaar: elke les een coach, kleine groepen en een programma op maat — op een kwartier van Bergen." },
        { q: "Moet ik fit zijn voordat ik begin?", a: "Nee. Elke workout wordt geschaald naar jouw niveau en je start met een persoonlijk introductietraject waarin je alle basisbewegingen leert." },
      ]}
      members={[
        { videoId: "a4ENPMXSTX8", name: "Simone", quote: "Het zijn gewoon allemaal leuke mensen. Iedereen motiveert elkaar." },
        { videoId: "fI6KBasjzaA", name: "Simon", quote: "Je ziet mensen bij iedere workout fitter en sterker worden" },
      ]}
      faqItems={[
        { q: "Hoe ver is het vanaf Bergen?", aText: "Ongeveer een kwartier met de auto naar de Phoenixstraat 33 in Alkmaar. Parkeren is gratis.", a: "Ongeveer een kwartier met de auto naar de Phoenixstraat 33 in Alkmaar. Parkeren is gratis." },
        { q: "Kan ik CrossFit combineren met hardlopen of wielrennen?", aText: "Ja, veel leden doen dat. Coaches helpen je de trainingen in te plannen zodat kracht en duursport elkaar versterken in plaats van tegenwerken.", a: "Ja, veel leden doen dat. Coaches helpen je de trainingen in te plannen zodat kracht en duursport elkaar versterken in plaats van tegenwerken." },
        { q: "Trainen er meer mensen uit Bergen en Schoorl?", aText: "Ja, onze leden komen uit de hele regio: Bergen, Schoorl, de Egmonden en Heiloo.", a: "Ja, onze leden komen uit de hele regio: Bergen, Schoorl, de Egmonden en Heiloo." },
        { q: "Kan ik eerst komen kijken?", aText: "Ja, plan een gratis kennismaking. We laten de gym zien en bespreken je doelen, zonder verplichtingen.", a: <>Ja, plan een <Link href="/free-intro">gratis kennismaking</Link>. We laten de gym zien en bespreken je doelen, zonder verplichtingen.</> },
      ]}
      ctaTitle="Kom een keer kijken"
      ctaSubtitle="Plan een gratis kennismaking en ontdek wat kracht naast je buitensport doet."
    />
  );
}
