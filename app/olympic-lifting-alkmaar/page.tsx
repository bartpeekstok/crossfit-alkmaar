"use client";

import Link from "next/link";
import SeoLanding from "../components/redesign/SeoLanding";

export default function OlympicLiftingAlkmaarPage() {
  return (
    <SeoLanding
      name="Olympic Lifting Alkmaar"
      slug="olympic-lifting-alkmaar"
      description="Olympic lifting in Alkmaar met professionele coaching. Leer de snatch en clean & jerk onder begeleiding. Voor beginners en gevorderden."
      heroPhoto="/images/olympic-lifting-header.jpg"
      heroTitle="Olympic Lifting Alkmaar"
      heroSubtitle="Leer de snatch en clean & jerk onder professionele begeleiding. Voor beginners en gevorderden."
      waaromTitle="Wat is olympic lifting?"
      waaromContent={
        <>
          <p>Olympic lifting - ook wel olympisch gewichtheffen - bestaat uit twee explosieve liften: de <strong>snatch</strong> en de <strong>clean &amp; jerk</strong>. Bij de snatch breng je de barbell in een vloeiende beweging van de grond naar boven je hoofd. Bij de clean &amp; jerk til je de barbell eerst naar je schouders (clean) en druk je hem daarna boven je hoofd (jerk).</p>
          <p>Deze liften zijn de ultieme test van <strong>explosiviteit</strong>, <strong>coordinatie</strong> en <strong>kracht</strong>. Ze verbeteren je atletisch vermogen, mobiliteit en lichaamsbewustzijn als geen andere oefening.</p>
          <p>Bij CrossFit Alkmaar is olympic lifting een vast onderdeel van onze training. Of je nu voor het eerst een barbell oppakt of je PR wilt verbeteren - onze coaches begeleiden je bij elke stap.</p>
        </>
      }
      aanpakTitle="Waarom olympic lifting bij CrossFit Alkmaar?"
      aanpakCards={[
        { title: "Professionele techniekcoaching", body: "Onze coaches zijn getraind in olympisch gewichtheffen en helpen je de snatch en clean & jerk met de juiste techniek uit te voeren. Zo haal je het maximale uit elke lift." },
        { title: "Stap-voor-stap opbouw", body: "We breken elke lift op in deelbewegingen. Eerst leer je de posities en het bewegingspatroon, daarna voeg je snelheid en gewicht toe. Zo bouw je een solide technische basis." },
        { title: "Geschikt voor beginners", body: "Je hoeft geen ervaring te hebben. Iedereen begint met een lege barbell of PVC-pijp. De kracht en techniek bouw je geleidelijk op onder begeleiding van onze coaches." },
        { title: "Olympische faciliteiten", body: "We beschikken over bumper plates, olympische barbells en lifting platforms. Alles wat je nodig hebt om veilig en effectief te liften, staat klaar in onze box." },
      ]}
      voorwieTitle="Hoe we olympic lifting leren"
      voorwieContent={
        <>
          <p>Olympic lifting leer je niet in een dag. Daarom hanteren we een progressieve aanpak: we starten met de basisbewegingen en bouwen stap voor stap op naar de volledige lift. Elke les bevat techniekwerk zodat je continu verbetert.</p>
          <p>Nieuwe leden starten met de <Link href="/kickstart">Kickstart</Link> om de fundamentele bewegingspatronen te leren, waaronder de basis van olympic lifting. Daarna sluit je aan bij de <Link href="/groepslessen">groepslessen</Link> waar olympic lifting regelmatig in de programmering terugkomt.</p>
          <p>Olympic lifting bouwt ook fantastische <Link href="/krachttraining-alkmaar">kracht</Link> op. De combinatie van explosieve liften en functionele training maakt je een completere atleet. Bekijk onze <Link href="/meer-info#tarieven">tarieven</Link> om te starten.</p>
        </>
      }
      aeoTitle="Wat is olympic lifting?"
      aeoItems={[
        { q: "Wat is olympic lifting en wat leer je ermee?", a: "Olympic lifting omvat twee liften: de snatch en de clean & jerk. Het zijn technische, explosieve bewegingen die kracht, snelheid en coordinatie trainen. Bij CrossFit Alkmaar leer je deze liften stap voor stap onder professionele begeleiding." },
        { q: "Is olympic lifting gevaarlijk?", a: "Niet met goede begeleiding. Bij CrossFit Alkmaar bouw je de techniek op van licht naar zwaar, met een coach die elke rep bewaakt. We gebruiken bumper plates en platforms zodat je veilig kunt trainen." },
        { q: "Moet je al sterk zijn om met olympic lifting te beginnen?", a: "Nee. Olympic lifting gaat eerst over techniek, daarna over gewicht. Bij CrossFit Alkmaar beginnen veel leden met een lege barbell of zelfs een PVC-pijp om de bewegingspatronen te leren." },
      ]}
      members={[
        { videoId: "a4ENPMXSTX8", name: "Simone", quote: "Het zijn gewoon allemaal leuke mensen. Iedereen motiveert elkaar." },
        { videoId: "SKchVCAIx80", name: "Steven", quote: "Houding en techniek, daar zijn de trainers hier ongelooflijk goed in" },
      ]}
      faqItems={[
        { q: "Wat is olympic lifting?", aText: "Olympic lifting (olympisch gewichtheffen) bestaat uit twee explosieve liften: de snatch en de clean & jerk. Het draait om techniek, snelheid en kracht. Bij CrossFit Alkmaar leer je beide liften stap voor stap onder professionele begeleiding.", a: "Olympic lifting (olympisch gewichtheffen) bestaat uit twee explosieve liften: de snatch en de clean & jerk. Het draait om techniek, snelheid en kracht. Bij CrossFit Alkmaar leer je beide liften stap voor stap onder professionele begeleiding." },
        { q: "Is olympic lifting gevaarlijk?", aText: "Nee, mits je het onder goede begeleiding leert. Bij CrossFit Alkmaar bouwen we de techniek stap voor stap op. We gebruiken bumper plates en platforms, en onze coaches letten op correcte uitvoering. Zo leer je veilig en effectief liften.", a: "Nee, mits je het onder goede begeleiding leert. Bij CrossFit Alkmaar bouwen we de techniek stap voor stap op. We gebruiken bumper plates en platforms, en onze coaches letten op correcte uitvoering. Zo leer je veilig en effectief liften." },
        { q: "Moet ik al sterk zijn om te beginnen?", aText: "Nee. Olympic lifting draait meer om techniek dan om brute kracht. Iedereen begint met een lege barbell of PVC-pijp om de bewegingspatronen te leren. De kracht bouw je geleidelijk op naarmate je techniek verbetert.", a: "Nee. Olympic lifting draait meer om techniek dan om brute kracht. Iedereen begint met een lege barbell of PVC-pijp om de bewegingspatronen te leren. De kracht bouw je geleidelijk op naarmate je techniek verbetert." },
        { q: "Hoe leer ik de snatch en clean & jerk?", aText: "Bij CrossFit Alkmaar leer je de snatch en clean & jerk via een stap-voor-stap aanpak. We breken elke lift op in deelbewegingen die je apart oefent. Start met de Kickstart om de basisbewegingen te leren, en bouw daarna verder op in de groepslessen.", a: <>Bij CrossFit Alkmaar leer je de snatch en clean &amp; jerk via een stap-voor-stap aanpak. We breken elke lift op in deelbewegingen die je apart oefent. Start met de <Link href="/kickstart">Kickstart</Link> om de basisbewegingen te leren, en bouw daarna verder op in de <Link href="/groepslessen">groepslessen</Link>.</> },
      ]}
      ctaTitle="Klaar om olympic lifting te leren?"
      ctaSubtitle="Plan een gratis kennismaking en ontdek hoe onze coaches je de snatch en clean & jerk leren."
    />
  );
}
