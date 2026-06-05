"use client";

import Link from "next/link";
import SeoLanding from "../components/redesign/SeoLanding";

export default function HyroxGymAlkmaarPage() {
  return (
    <SeoLanding
      name="HYROX Gym Alkmaar"
      slug="hyrox-gym-alkmaar"
      description="De beste gym voor HYROX training in Alkmaar. Alle apparatuur, professionele coaching en een community van HYROX-atleten."
      heroPhoto="/images/hyrox-alkmaar-header.jpg"
      heroTitle="HYROX Gym Alkmaar"
      heroSubtitle="Alle HYROX-apparatuur, professionele coaches en een team om mee te trainen. Alles op één plek."
      waaromTitle="Waarom CrossFit Alkmaar dé HYROX gym is in de regio"
      waaromContent={
        <>
          <p>HYROX trainen in een normale sportschool is lastig. Waar vind je een sled? Een SkiErg? Sandbags? Bij CrossFit Alkmaar staat alles klaar. Onze box is volledig uitgerust voor alle 8 HYROX-stations.</p>
          <p>Maar apparatuur alleen is niet genoeg. Je hebt coaching nodig. Onze trainers kennen de HYROX-race en helpen je met strategie, pacing en techniek. Niet alleen voor de stations, maar ook voor de 8 km hardlopen ertussen.</p>
          <p>En je traint met een groep. Meerdere leden van CrossFit Alkmaar doen mee aan HYROX - als singles, doubles en relay teams. Samen trainen maakt de voorbereiding leuker en effectiever.</p>
        </>
      }
      aanpakTitle="Onze HYROX-uitrusting"
      aanpakCards={[
        { title: "Sleds", body: "Sled push en sled pull op een turf-baan. Train met de juiste gewichten en afstanden voor jouw HYROX-divisie." },
        { title: "Rowers & SkiErgs", body: "Concept2 rowers en SkiErgs voor de exacte machines die je op racedag tegenkomt." },
        { title: "Wall Balls & Sandbags", body: "Alle gewichten beschikbaar voor mannen en vrouwen. Train de stations tot ze routine zijn." },
        { title: "Farmers Carry & Lunges", body: "Kettlebells en voldoende ruimte voor farmers carries en lunges op wedstrijdafstand." },
      ]}
      voorwieTitle="Hoe je bij ons kunt trainen voor HYROX"
      voorwieContent={
        <>
          <p>Bij CrossFit Alkmaar kun je op verschillende manieren trainen voor HYROX. De dagelijkse <Link href="/groepslessen">groepslessen</Link> bouwen de basis: kracht, conditie en alle functionele bewegingen die je nodig hebt.</p>
          <p>Wil je specifiekere HYROX-voorbereiding? Combineer groepslessen met <Link href="/personal-training">personal training</Link> of gebruik de Open Gym uren om gericht aan je stations te werken.</p>
          <p>Nieuw bij CrossFit? Start met de <Link href="/kickstart">Kickstart</Link> en bouw in je eigen tempo naar je eerste HYROX toe.</p>
          <p>Klaar om het te testen? Schrijf je in voor de <Link href="/hyrox-simulatie-alkmaar">HYROX Simulatie op 22 augustus</Link> of <Link href="/hyrox-simulatie-24-oktober">24 oktober</Link>.</p>
        </>
      }
      aeoTitle="Waar train je voor HYROX?"
      aeoItems={[
        { q: "Wat maakt een gym geschikt voor HYROX-training?", a: "Je hebt specifieke apparatuur nodig: ski erg, roeier, sled, wall balls en een baan om te hardlopen. CrossFit Alkmaar heeft al deze apparatuur en biedt specifieke HYROX-lessen aan onder professionele begeleiding." },
        { q: "Kan ik voor HYROX trainen in een gewone sportschool?", a: "In een gewone sportschool ontbreken meestal sled, ski erg en de ruimte voor functionele oefeningen. Bij CrossFit Alkmaar heb je alles onder één dak, inclusief coaches die wedstrijdervaring hebben." },
        { q: "Hoe combineer je HYROX met andere training?", a: "Het beste resultaat behaal je door HYROX-lessen te combineren met krachttraining. Bij CrossFit Alkmaar kun je HYROX, CrossFit en Strength mixen in je weekschema voor een optimale voorbereiding." },
      ]}
      members={[
        { videoId: "GCUpJQJJ8s0", name: "Malou", quote: "Meer gaan beseffen hoe fijn het is om lekker in je vel te zitten" },
        { videoId: "fI6KBasjzaA", name: "Simon", quote: "Je ziet mensen bij iedere workout fitter en sterker worden" },
      ]}
      faqItems={[
        { q: "Hebben jullie alle HYROX-apparatuur?", aText: "Ja. We hebben sleds, ski-ergs, roeiers, sandbags, wall balls en voldoende ruimte om alle wedstrijdonderdelen te trainen.", a: "Ja. We hebben sleds, ski-ergs, roeiers, sandbags, wall balls en voldoende ruimte om alle wedstrijdonderdelen te trainen." },
        { q: "Kan ik ook buiten de lessen om HYROX trainen?", aText: "Onze focus ligt op begeleide groepslessen zodat je techniek en intensiteit optimaal zijn. Neem contact op voor de mogelijkheden.", a: <>Onze focus ligt op begeleide <Link href="/groepslessen">groepslessen</Link> zodat je techniek en intensiteit optimaal zijn. Neem contact op voor de mogelijkheden.</> },
        { q: "Wat maakt CrossFit Alkmaar de beste HYROX gym?", aText: "Alle apparatuur, ervaren coaches, specifieke HYROX-programmering en een community van gelijkgestemde atleten - alles onder een dak.", a: <>Alle apparatuur, ervaren coaches, specifieke <Link href="/hyrox-training-alkmaar">HYROX-programmering</Link> en een community van gelijkgestemde atleten - alles onder een dak.</> },
        { q: "Bieden jullie ook HYROX Doubles training?", aText: "Ja. Je kunt samen met een trainingspartner trainen voor HYROX Doubles. Onze coaches helpen jullie met een strategie.", a: "Ja. Je kunt samen met een trainingspartner trainen voor HYROX Doubles. Onze coaches helpen jullie met een strategie." },
      ]}
      ctaTitle="Kom de gym bekijken"
      ctaSubtitle="Plan een gratis kennismakingsgesprek, bekijk de apparatuur en bespreek je HYROX-plannen."
    />
  );
}
