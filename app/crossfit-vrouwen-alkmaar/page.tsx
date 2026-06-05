"use client";

import Link from "next/link";
import SeoLanding from "../components/redesign/SeoLanding";

export default function CrossFitVrouwenAlkmaarPage() {
  return (
    <SeoLanding
      name="CrossFit vrouwen Alkmaar"
      slug="crossfit-vrouwen-alkmaar"
      description="CrossFit voor vrouwen in Alkmaar. Word sterker, fitter en zelfverzekerder met professionele coaching in kleine groepen."
      heroPhoto="/images/CFA-november-lowres-12.jpg"
      heroTitle="CrossFit voor Vrouwen in Alkmaar"
      heroSubtitle="Word sterker, fitter en zelfverzekerder - zonder bodybuilder te worden. Bij CrossFit Alkmaar train je op jouw niveau, met professionele coaching in kleine groepen."
      waaromTitle="Waarom steeds meer vrouwen kiezen voor CrossFit"
      waaromContent={
        <>
          <p>Veel vrouwen denken bij CrossFit aan zware gewichten en gespierde lichamen. Maar de realiteit is anders. CrossFit maakt je sterk, niet groot. Vrouwen hebben van nature veel minder testosteron dan mannen - je wordt dus niet &quot;bulky&quot; van krachttraining. Wat je wél krijgt: een strak, atletisch lichaam en meer zelfvertrouwen.</p>
          <p>Bij CrossFit Alkmaar zien we dagelijks wat krachttraining doet voor vrouwen. Meer energie, beter slapen, minder stress, en het gevoel dat je lichaam iets kán. Geen eindeloos cardio op een loopband, maar gevarieerde workouts die je uitdagen en leuk zijn om te doen.</p>
          <p>En het belangrijkste: alles wordt aangepast aan jouw niveau. Of je nu nooit hebt gesport of al jaren traint - je doet dezelfde workout, maar op jouw manier.</p>
        </>
      }
      aanpakTitle="Wat CrossFit je als vrouw oplevert"
      aanpakCards={[
        { title: "Sterker zonder bulky te worden", body: "Krachttraining maakt je strakker en sterker, niet groter. Je bouwt functionele kracht op die je in het dagelijks leven merkt - van boodschappen tillen tot met je kinderen spelen." },
        { title: "Afvallen op een gezonde manier", body: "CrossFit combineert kracht en cardio in elke workout. Je verbrandt veel calorieën en bouwt spiermassa op, waardoor je stofwisseling omhoog gaat. Effectiever dan alleen cardio." },
        { title: "Meer energie en zelfvertrouwen", body: "Onze leden vertellen ons keer op keer: ze voelen zich fitter, energieker en zekerder over zichzelf. CrossFit laat je zien waartoe je lichaam in staat is." },
        { title: "Trainingen aangepast aan jouw niveau", body: "Elke oefening heeft variaties. Je coach past gewichten en bewegingen aan zodat jij veilig en effectief traint, of je nu beginner bent of gevorderd." },
      ]}
      voorwieTitle="Meer dan alleen trainen"
      voorwieContent={
        <>
          <p>Bij CrossFit Alkmaar word je onderdeel van een hechte community. Veel vrouwen vinden het juist fijn om samen te trainen - je motiveert elkaar, lacht samen en viert elkaars successen. Het voelt niet als een sportschool, maar als een team.</p>
          <p>Je start met de <Link href="/kickstart">Kickstart</Link>: persoonlijke sessies waarin je alle basisbewegingen leert. Daarna sluit je aan bij de <Link href="/groepslessen">groepslessen</Link> met maximaal 12 personen per coach. Zo krijg je altijd de aandacht die je nodig hebt.</p>
          <p>Geen lange contracten, geen verkooppraatje. Gewoon goed sporten in een fijne omgeving.</p>
        </>
      }
      aeoTitle="CrossFit voor vrouwen"
      aeoItems={[
        { q: "Word je gespierd van CrossFit als vrouw?", a: "Nee, vrouwen hebben van nature veel minder testosteron dan mannen, waardoor je niet zomaar een bodybuilder wordt. Wat je wél krijgt: een strak, sterk en gezond lichaam. Onze vrouwelijke leden worden sterker, niet groter." },
        { q: "Is CrossFit geschikt voor vrouwen die willen afvallen?", a: "Ja. De combinatie van krachttraining en conditie bij CrossFit is ideaal om vet te verliezen en spiermassa te behouden. Je stofwisseling gaat omhoog en je verbrandt ook na de training door." },
        { q: "Voel ik me als vrouw op mijn gemak bij CrossFit?", a: "Absoluut. Bij CrossFit Alkmaar is de sfeer ondersteunend, niet competitief. Je traint in een groep waar iedereen op zijn eigen niveau werkt. Veel van onze leden zijn vrouwen die hier zijn begonnen zonder sportervaring." },
      ]}
      members={[
        { videoId: "GCUpJQJJ8s0", name: "Malou", quote: "Meer gaan beseffen hoe fijn het is om lekker in je vel te zitten" },
        { videoId: "q3Fb97wdLKU", name: "Demi", quote: "Iedereen moedigt je aan" },
      ]}
      faqItems={[
        { q: "Word ik niet te gespierd van CrossFit?", aText: "Nee. Vrouwen hebben van nature veel minder testosteron dan mannen, waardoor je niet zomaar 'bulky' wordt. CrossFit maakt je strakker, sterker en fitter - niet groter. Je krijgt een atletisch, getraind lichaam.", a: <>Nee. Vrouwen hebben van nature veel minder testosteron dan mannen, waardoor je niet zomaar &quot;bulky&quot; wordt. CrossFit maakt je strakker, sterker en fitter - niet groter. Je krijgt een atletisch, getraind lichaam.</> },
        { q: "Is CrossFit geschikt voor vrouwen die nog nooit hebben gesport?", aText: "Absoluut. Via het Kickstart-traject leer je alle basisbewegingen met persoonlijke begeleiding. Alles wordt aangepast aan jouw niveau, dus je hoeft niet fit te zijn om te beginnen.", a: <>Absoluut. Via het <Link href="/kickstart">Kickstart-traject</Link> leer je alle basisbewegingen met persoonlijke begeleiding. Alles wordt aangepast aan jouw niveau, dus je hoeft niet fit te zijn om te beginnen.</> },
        { q: "Kan ik afvallen met CrossFit?", aText: "Ja. CrossFit combineert kracht- en conditietraining, waardoor je veel calorieën verbrandt en spiermassa opbouwt. Meer spiermassa verhoogt je stofwisseling, waardoor je ook in rust meer verbrandt. In combinatie met gezonde voeding is CrossFit zeer effectief voor gewichtsverlies.", a: <>Ja. CrossFit combineert kracht- en conditietraining, waardoor je veel calorieën verbrandt en spiermassa opbouwt. In combinatie met gezonde voeding is het zeer effectief voor gewichtsverlies. Bekijk ook onze <Link href="/meer-info#tarieven">tarieven</Link>.</> },
        { q: "Train ik samen met mannen?", aText: "Ja, onze groepslessen zijn gemengd. Maar iedereen traint op eigen niveau - de workout is hetzelfde, het gewicht en de intensiteit pas je aan. Veel vrouwen vinden dit juist motiverend. De sfeer is ondersteunend en inclusief.", a: <>Ja, onze <Link href="/groepslessen">groepslessen</Link> zijn gemengd. Maar iedereen traint op eigen niveau - de workout is hetzelfde, het gewicht en de intensiteit pas je aan. Veel vrouwen vinden dit juist motiverend.</> },
      ]}
      ctaTitle="Klaar om sterker te worden?"
      ctaSubtitle="Plan een gratis kennismakingsgesprek. We laten je de box zien, bespreken je doelen en leggen uit hoe je kunt starten. Geen verplichtingen."
    />
  );
}
