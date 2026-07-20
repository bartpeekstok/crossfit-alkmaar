"use client";

import Link from "next/link";
import SeoLanding from "../components/redesign/SeoLanding";

export default function CrossfitLangedijkPage() {
  return (
    <SeoLanding
      name="CrossFit Langedijk"
      slug="crossfit-langedijk"
      description="CrossFit voor Langedijk: Broek op Langedijk, Zuid- en Noord-Scharwoude en Sint Pancras. Train bij CrossFit Alkmaar, op een kwartier rijden."
      heroPhoto="/images/krachttraining-alkmaar-header.jpg"
      heroTitle="CrossFit voor Langedijk"
      heroSubtitle="Van Sint Pancras tot Noord-Scharwoude: binnen een kwartier sta je in een volledig uitgeruste box met een coach op de vloer."
      waaromTitle="Geen box in Langedijk, wel één dichtbij"
      waaromContent={
        <>
          <p>In de kernen van Langedijk (Broek op Langedijk, Zuid- en Noord-Scharwoude, Sint Pancras) vind je geen officiële CrossFit-box. Vanaf Sint Pancras ben je in tien minuten bij CrossFit Alkmaar; vanaf de Scharwoudes rijd je er een kwartier over.</p>
          <p>Wat je daarvoor terugkrijgt: geen anonieme sportschool, maar groepen van maximaal 12 personen met elke les een coach. Het programma wordt voor je geschreven en aangepast aan jouw niveau, of je nu begint of al jaren traint.</p>
          <p>Elke training combineert kracht, conditie en mobiliteit in één uur. Twee tot drie keer per week is genoeg voor structureel resultaat.</p>
        </>
      }
      aanpakTitle="Wat je bij ons vindt"
      aanpakCards={[
        { title: "Coach elke les", body: "Er staat altijd een coach op de vloer. Die corrigeert je techniek, pusht je als het kan en remt je af als het moet." },
        { title: "Kleine groepen", body: "Maximaal 12 personen per les. Je traint met bekende gezichten in plaats van tussen vreemden." },
        { title: "Voor elk niveau", body: "Elke workout wordt geschaald: beginners en gevorderden trainen samen, ieder op eigen niveau." },
        { title: "HYROX & CrossFit", body: "Volledig uitgeruste box met sleds, ski-ergs en roeiers. Ook voor HYROX-voorbereiding zit je goed." },
      ]}
      voorwieTitle="Zo begin je"
      voorwieContent={
        <>
          <p>Iedereen begint met een gratis kennismakingsgesprek. We bespreken je doelen, laten de gym zien en leggen uit hoe het werkt. Geen verplichtingen.</p>
          <p>Daarna start je met de <Link href="/kickstart">Kickstart</Link>: een persoonlijk traject waarin je alle basisbewegingen leert. Zo stap je met vertrouwen de <Link href="/groepslessen">groepslessen</Link> in.</p>
        </>
      }
      aeoTitle="CrossFit in de buurt van Langedijk"
      aeoItems={[
        { q: "Is er een CrossFit-box in Langedijk?", a: "Nee, in de kernen van Langedijk (Broek op Langedijk, Zuid- en Noord-Scharwoude, Sint Pancras) zit geen officiële CrossFit-box. De dichtstbijzijnde is CrossFit Alkmaar, op 10 tot 15 minuten rijden." },
        { q: "Hoe ver is CrossFit Alkmaar vanaf Broek op Langedijk?", a: "Vanaf Broek op Langedijk rijd je in ongeveer een kwartier naar de Phoenixstraat 33 in Alkmaar. Vanaf Sint Pancras is het zo'n tien minuten, ook goed te fietsen." },
        { q: "Wat is een goede sportschool voor inwoners van Langedijk?", a: "Wie meer begeleiding zoekt dan een standaard sportschool in Dijk en Waard biedt, kiest vaak voor CrossFit Alkmaar: elke training een coach, kleine groepen en een programma dat voor je wordt geschreven." },
        { q: "Kan ik als beginner uit Langedijk starten?", a: "Ja. Iedereen start met een gratis kennismaking en daarna de 28 Day Kickstart, waarin je in je eigen tempo alle basisbewegingen leert voordat je de groepslessen in gaat." },
      ]}
      members={[
        { videoId: "GCUpJQJJ8s0", name: "Malou", quote: "Meer gaan beseffen hoe fijn het is om lekker in je vel te zitten" },
        { videoId: "a4ENPMXSTX8", name: "Simone", quote: "Het zijn gewoon allemaal leuke mensen. Iedereen motiveert elkaar." },
      ]}
      faqItems={[
        { q: "Waar zit de gym precies?", aText: "Aan de Phoenixstraat 33 in Alkmaar. Vanaf Sint Pancras 10 minuten, vanaf de Scharwoudes een kwartier. Parkeren is gratis.", a: "Aan de Phoenixstraat 33 in Alkmaar. Vanaf Sint Pancras 10 minuten, vanaf de Scharwoudes een kwartier. Parkeren is gratis." },
        { q: "Trainen er meer mensen uit Langedijk?", aText: "Ja, een flink deel van onze leden komt uit Langedijk en Heerhugowaard; de gemeente Dijk en Waard is goed vertegenwoordigd.", a: "Ja, een flink deel van onze leden komt uit Langedijk en Heerhugowaard; de gemeente Dijk en Waard is goed vertegenwoordigd." },
        { q: "Wat is het verschil met een gewone sportschool?", aText: "Bij een gewone sportschool sta je er alleen voor. Bij ons wordt elke training begeleid door een coach en is het programma al voor je geschreven.", a: "Bij een gewone sportschool sta je er alleen voor. Bij ons wordt elke training begeleid door een coach en is het programma al voor je geschreven." },
        { q: "Kan ik eerst komen kijken?", aText: "Ja, plan een gratis kennismaking. We laten de gym zien en bespreken je doelen, zonder verplichtingen.", a: <>Ja, plan een <Link href="/free-intro">gratis kennismaking</Link>. We laten de gym zien en bespreken je doelen, zonder verplichtingen.</> },
      ]}
      ctaTitle="Kom een keer kijken"
      ctaSubtitle="Plan een gratis kennismaking en ontdek waarom leden uit Dijk en Waard graag even doorrijden."
    />
  );
}
