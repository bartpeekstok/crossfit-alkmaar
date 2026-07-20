"use client";

import Link from "next/link";
import SeoLanding from "../components/redesign/SeoLanding";

export default function CrossfitHeilooPage() {
  return (
    <SeoLanding
      name="CrossFit Heiloo"
      slug="crossfit-heiloo"
      description="CrossFit voor Heiloo en omgeving. Train in kleine groepen met persoonlijke begeleiding bij CrossFit Alkmaar, op 10 minuten rijden."
      heroPhoto="/images/groepslessen-header.jpg"
      heroTitle="CrossFit voor Heiloo"
      heroSubtitle="Heiloo heeft geen eigen CrossFit-box. Gelukkig zit er één op 10 minuten rijden — met coaches die je bij naam kennen."
      waaromTitle="De box om de hoek van Heiloo"
      waaromContent={
        <>
          <p>In Heiloo zelf vind je geen officiële CrossFit-box. Maar de Phoenixstraat in Alkmaar ligt praktisch naast de deur: vanaf de meeste plekken in Heiloo sta je er binnen tien minuten, ook op de fiets is het goed te doen.</p>
          <p>Bij CrossFit Alkmaar train je nooit alleen op een zaaltje: elke les staat er een coach die je techniek corrigeert en het programma voor je heeft klaargezet. De groepen zijn maximaal 12 personen, dus je verdwijnt niet in de massa.</p>
          <p>De trainingen combineren kracht, conditie en mobiliteit in één uur. Twee tot drie keer per week is genoeg om structureel fitter en sterker te worden.</p>
        </>
      }
      aanpakTitle="Wat je bij ons vindt"
      aanpakCards={[
        { title: "Coach elke les", body: "Er staat altijd een coach op de vloer. Die corrigeert je techniek, pusht je als het kan en remt je af als het moet." },
        { title: "Kleine groepen", body: "Maximaal 12 personen per les. Persoonlijke aandacht en een groep die je kent en mist als je er niet bent." },
        { title: "Alles in één uur", body: "Kracht, conditie en mobiliteit in 60 minuten. Efficiënt trainen naast werk en gezin." },
        { title: "HYROX & CrossFit", body: "Volledig uitgeruste box met sleds, ski-ergs en roeiers. Ook voor HYROX-voorbereiding zit je goed." },
      ]}
      voorwieTitle="Zo begin je"
      voorwieContent={
        <>
          <p>Iedereen begint met een gratis kennismakingsgesprek. We bespreken je doelen, laten de gym zien en leggen uit hoe het werkt. Geen verplichtingen.</p>
          <p>Daarna start je met de <Link href="/kickstart">Kickstart</Link>: een persoonlijk traject waarin je alle basisbewegingen leert. Zo stap je met vertrouwen de <Link href="/groepslessen">groepslessen</Link> in.</p>
        </>
      }
      aeoTitle="CrossFit in de buurt van Heiloo"
      aeoItems={[
        { q: "Is er een CrossFit-box in Heiloo?", a: "Nee, in Heiloo zelf zit geen officiële CrossFit-box. De dichtstbijzijnde is CrossFit Alkmaar aan de Phoenixstraat, op ongeveer 10 minuten rijden vanaf Heiloo." },
        { q: "Kan ik vanuit Heiloo op de fiets naar CrossFit Alkmaar?", a: "Ja, vanaf Heiloo fiets je in ongeveer een kwartier naar de box in Alkmaar. Veel leden combineren de rit als warming-up en cooling-down." },
        { q: "Wat is een goede sportschool voor inwoners van Heiloo?", a: "Wie meer begeleiding zoekt dan een standaard sportschool in Heiloo biedt, kiest vaak voor CrossFit Alkmaar: elke training een coach, kleine groepen en een programma dat voor je wordt geschreven." },
        { q: "Wat kost CrossFit bij CrossFit Alkmaar?", a: "De tarieven hangen af van hoe vaak je wilt trainen. Tijdens de gratis kennismaking bespreken we wat bij jouw doelen en agenda past, zonder verplichtingen." },
      ]}
      members={[
        { videoId: "GCUpJQJJ8s0", name: "Malou", quote: "Meer gaan beseffen hoe fijn het is om lekker in je vel te zitten" },
        { videoId: "1qhbmRPtysU", name: "Jarrald", quote: "Lang sponsor geweest van sportscholen, nu 20 kilo afgevallen" },
      ]}
      faqItems={[
        { q: "Hoe ver is het vanaf Heiloo?", aText: "Ongeveer 10 minuten met de auto naar de Phoenixstraat 33 in Alkmaar, of een kwartier fietsen. Parkeren is gratis.", a: "Ongeveer 10 minuten met de auto naar de Phoenixstraat 33 in Alkmaar, of een kwartier fietsen. Parkeren is gratis." },
        { q: "Trainen er meer mensen uit Heiloo?", aText: "Ja, een flink deel van onze leden komt uit Heiloo en de Egmonden. Grote kans dat je bekenden tegenkomt.", a: "Ja, een flink deel van onze leden komt uit Heiloo en de Egmonden. Grote kans dat je bekenden tegenkomt." },
        { q: "Ik heb nog nooit aan CrossFit gedaan, kan ik starten?", aText: "Ja. Via de Kickstart leer je in je eigen tempo alle basisbewegingen voordat je de groepslessen in gaat.", a: <>Ja. Via de <Link href="/kickstart">Kickstart</Link> leer je in je eigen tempo alle basisbewegingen voordat je de groepslessen in gaat.</> },
        { q: "Kan ik eerst komen kijken?", aText: "Ja, plan een gratis kennismaking. We laten de gym zien en bespreken je doelen, zonder verplichtingen.", a: <>Ja, plan een <Link href="/free-intro">gratis kennismaking</Link>. We laten de gym zien en bespreken je doelen, zonder verplichtingen.</> },
      ]}
      ctaTitle="Kom een keer kijken"
      ctaSubtitle="Plan een gratis kennismaking en ontdek waarom leden uit Heiloo die tien minuten graag rijden."
    />
  );
}
