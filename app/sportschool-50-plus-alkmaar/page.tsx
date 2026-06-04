"use client";

import Link from "next/link";
import SeoLanding from "../components/redesign/SeoLanding";

export default function Sportschool50PlusPage() {
  return (
    <SeoLanding
      name="Sportschool 50+ Alkmaar"
      slug="sportschool-50-plus-alkmaar"
      description="Veilig sporten voor 50-plussers met professionele begeleiding. Kleine groepen, aangepaste oefeningen, voor elk niveau."
      heroPhoto="/images/50+-header.jpg"
      heroTitle="Sportschool 50+ Alkmaar"
      heroSubtitle="Veilig en verantwoord sporten met professionele begeleiding. Onze leden zijn 20 tot 70+ jaar."
      waaromTitle="Waarom CrossFit Alkmaar geschikt is voor 50+"
      waaromContent={
        <>
          <p>Veel mensen denken dat CrossFit alleen voor jonge, fitte mensen is. Dat is een misverstand. Bij CrossFit Alkmaar trainen leden van 20 tot ruim 70 jaar. De trainingen worden voor iedereen aangepast aan het eigen niveau.</p>
          <p>Juist als je ouder wordt is het belangrijk om te blijven bewegen. Spiermassa neemt af vanaf je 30e, je botten worden zwakker, en je balans verslechtert. <Link href="/krachttraining-alkmaar">Krachttraining</Link> is bewezen de beste manier om dit tegen te gaan.</p>
          <p>Bij ons hoef je geen zwaar gewicht te tillen als je dat niet wilt. Onze coaches passen elke oefening aan: een andere variant, een lichter gewicht, of een ander tempo. Jij bepaalt je eigen grenzen, wij begeleiden je veilig.</p>
        </>
      }
      aanpakTitle="Voordelen van sporten bij CrossFit Alkmaar als 50-plusser"
      aanpakCards={[
        { title: "Aangepaste oefeningen", body: "Elke oefening heeft varianten. Kun je iets niet? Dan biedt de coach een alternatief dat hetzelfde effect heeft, maar binnen jouw mogelijkheden past." },
        { title: "Kleine groepen, veel aandacht", body: "Maximaal 12 personen per les. De coach ziet iedereen en let op correcte uitvoering. Geen risico op blessures door verkeerde techniek." },
        { title: "Sterkere botten en spieren", body: "Krachttraining stimuleert botdichtheid en spiergroei. Dit helpt bij het voorkomen van osteoporose, vallen en algehele achteruitgang." },
        { title: "Sociale omgeving", body: "Sporten in een groep zorgt voor motivatie en sociale contacten. Onze community is warm en inclusief, iedereen is welkom." },
      ]}
      voorwieTitle="Hoe werkt het?"
      voorwieContent={
        <>
          <p>Je begint met een gratis kennismakingsgesprek. We bespreken je achtergrond, eventuele blessures of beperkingen, en je doelen. Geen verplichtingen.</p>
          <p>Daarna start je met de <Link href="/kickstart">Kickstart</Link>, semi personal training sessies waarin je in je eigen tempo alle bewegingen leert. Je gaat pas naar de groepslessen als je je er klaar voor voelt.</p>
          <p>Bekijk de verhalen van <Link href="/onze-leden">onze leden</Link> en ontdek hoe mensen van alle leeftijden hier sterker en fitter zijn geworden.</p>
        </>
      }
      aeoTitle="Hoe blijf je fit na je 50e?"
      aeoItems={[
        { q: "Waarom is krachttraining belangrijk na je 50e?", a: "Vanaf je 50e verlies je jaarlijks spiermassa en botdichtheid. Krachttraining remt dit af en kan het zelfs omkeren. Bij CrossFit Alkmaar trainen leden van 20 tot 70+ veilig samen, omdat elke oefening wordt aangepast aan jouw niveau." },
        { q: "Is CrossFit geschikt voor 50-plussers?", a: "Ja. Onze gemiddelde leeftijd is 35+ en we hebben veel leden boven de 50. Elke oefening is schaalbaar. Je hoeft geen pull-ups of handstanden te doen, je werkt op jouw niveau met een coach die je begeleidt." },
        { q: "Hoe begin je met sporten als je al jaren niet hebt gesport?", a: <>Start met de <Link href="/kickstart">28 Day Kickstart</Link>: vier weken in een kleine groep van max 6 personen waar je alle basisbewegingen leert. Je coach past alles aan op jouw mogelijkheden, ook als je beperkingen hebt.</> },
      ]}
      members={[
        { videoId: "iJ6KoiK5QZk", name: "Renze", quote: "Ik houd niet van fitness, dat vind ik veel te saai" },
        { videoId: "BkYbL7jvYjY", name: "Paula", quote: "Die zware boodschappentassen? Dat gaat nu gewoon een stuk beter!" },
      ]}
      faqItems={[
        { q: "Is CrossFit veilig voor 50-plussers?", aText: "Ja. Elke oefening wordt aangepast aan jouw niveau en eventuele beperkingen. Onze coaches hebben ervaring met het begeleiden van oudere sporters.", a: "Ja. Elke oefening wordt aangepast aan jouw niveau en eventuele beperkingen. Onze coaches hebben ervaring met het begeleiden van oudere sporters." },
        { q: "Ik heb last van mijn knieën/rug, kan ik toch trainen?", aText: "In veel gevallen wel. Onze coaches passen oefeningen aan of kiezen alternatieven. Bewegen is vaak juist goed bij gewrichtsklachten.", a: <>In veel gevallen wel. Onze coaches passen oefeningen aan of kiezen alternatieven. Bewegen is vaak juist goed bij gewrichtsklachten. Overweeg eventueel <Link href="/personal-training">personal training</Link> voor extra begeleiding.</> },
        { q: "Zijn er speciale lessen voor ouderen?", aText: "Onze reguliere lessen zijn geschikt voor alle leeftijden. Elke oefening is schaalbaar. Je traint samen met anderen, ieder op eigen niveau.", a: <>Onze reguliere <Link href="/groepslessen">lessen</Link> zijn geschikt voor alle leeftijden. Elke oefening is schaalbaar. Je traint samen met anderen, ieder op eigen niveau.</> },
        { q: "Wat is de gemiddelde leeftijd bij CrossFit Alkmaar?", aText: "Onze leden zijn 20 tot 70+ jaar. De gemiddelde leeftijd is 35+. Je bent dus zeker niet de enige 50-plusser.", a: "Onze leden zijn 20 tot 70+ jaar. De gemiddelde leeftijd is 35+. Je bent dus zeker niet de enige 50-plusser." },
      ]}
      ctaTitle="Kom vrijblijvend kennismaken"
      ctaSubtitle="Ontdek hoe veilig en leuk sporten kan zijn, ook na je 50e. Plan een gratis gesprek."
    />
  );
}
