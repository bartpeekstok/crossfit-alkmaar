"use client";

import { useState } from "react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (sectionIndex: number, itemIndex: number) => {
    const key = `${sectionIndex}-${itemIndex}`;
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const faqSections: FAQSection[] = [
    {
      title: "Community en contact",
      items: [
        {
          question: "Hoe werkt SportBit?",
          answer: (
            <>
              Dat zie je in{" "}
              <a
                href="https://www.youtube.com/playlist?list=PL0vONwaaFHENiMQmNuVuPmTPqp-iiCA2j"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                deze video's
              </a>
              .
            </>
          ),
        },
        {
          question: "Hoe blijf ik van alles rondom CrossFit Alkmaar op de hoogte?",
          answer: (
            <>
              <p className="mb-3">
                Het belangrijkste nieuws delen we altijd via nieuwsbrieven via e-mail. Helaas komen deze soms in je spam terecht. Om dit te voorkomen, kun je het beste ons domein @crossfitalkmaar.com als veilig markeren in je mail programma.
              </p>
              <p className="mb-3">
                Daarnaast hebben we een besloten leden groep op{" "}
                <a
                  href="https://www.facebook.com/groups/1484077655156155"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Facebook
                </a>
                .
              </p>
              <p className="mb-3">
                Op onze{" "}
                <a
                  href="https://www.instagram.com/crossfitalkmaar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Instagram pagina
                </a>{" "}
                posten we ook veel foto's en video's van trainingen, leden, tips en nog veel meer.
              </p>
              <p>
                In de besloten Facebook groep{" "}
                <a
                  href="https://www.facebook.com/groups/1739696760224721"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Fit en gezond worden in Alkmaar
                </a>{" "}
                delen we tips op het gebied van trainen, voeding en mindset. Deze is niet alleen voor leden toegankelijk.
              </p>
            </>
          ),
        },
        {
          question: "Ik wil liever niet op foto of video, waar kan ik dit aangeven?",
          answer:
            "We maken regelmatig foto- en video opnamen bij CrossFit Alkmaar. Deze gebruiken we ter promotie en op onze website en social media. Als je liever niet wordt vastgelegd, geef het even aan bij de fotograaf op het moment dat hij/zij bezig is. Dan zorgt hij/zij ervoor dat je niet wordt vastgelegd.",
        },
        {
          question: "Waar kan ik mijn vragen stellen?",
          answer: (
            <>
              Je kunt al je vragen stellen via{" "}
              <a
                href="https://wa.me/31640124097"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                WhatsApp
              </a>{" "}
              of{" "}
              <a
                href="mailto:info@crossfitalkmaar.nl"
                className="text-blue-600 hover:underline"
              >
                e-mail
              </a>
              . We proberen op weekdagen altijd binnen 24 uur te antwoorden.
            </>
          ),
        },
        {
          question: "Hoe boek ik een check in gesprek?",
          answer: (
            <>
              Dat doe je{" "}
              <a
                href="https://kilo.gymleadmachine.com/widget/bookings/crossfitalkmaar/check-in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                via deze link
              </a>
              .
            </>
          ),
        },
        {
          question: "Een bekende van me heeft interesse, wat moet hij/zij doen?",
          answer: (
            <>
              Hij/zij kan zelf een gratis intake boeken, dat kan heel makkelijk{" "}
              <a
                href="https://crossfitalkmaar.com/free-intro/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                via deze link
              </a>
              . Als er geen geschikt moment in de planner staat, kan hij/zij gegevens op onze website achterlaten. Dan nemen wij snel contact op.
            </>
          ),
        },
        {
          question: "Kan ik iemand meenemen voor een proefles?",
          answer: (
            <>
              <p className="mb-3">
                Dat kan niet in een reguliere les. Je kunt wel altijd iemand meenemen naar Flex friday op vrijdag in de middag en in de avond.
              </p>
              <p>
                Schrijf jezelf in in SportBit en laat je introducee{" "}
                <a
                  href="https://kilo.gymleadmachine.com/widget/bookings/crossfitalkmaar/flexfriday"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  dit formulier
                </a>{" "}
                invullen. Je hoeft niet al samen met iemand te komen of af te spreken, er zijn altijd meer mensen die ook nog geen buddy hebben.
              </p>
            </>
          ),
        },
        {
          question: "Op welke feestdagen zijn jullie gesloten?",
          answer: (
            <>
              <p className="mb-3">Op onderstaande feestdagen is CrossFit Alkmaar gesloten:</p>
              <ul className="list-disc list-inside mb-3 text-gray-600">
                <li>Nieuwjaarsdag</li>
                <li>Eerste Paasdag</li>
                <li>Eerste Kerstdag</li>
              </ul>
              <p className="mb-3">Op deze dagen is CrossFit Alkmaar open volgens weekendrooster met meer leden per les, meestal met een leuke buddy workout:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Tweede Paasdag</li>
                <li>Koningsdag</li>
                <li>Hemelvaart</li>
                <li>Tweede Pinksterdag</li>
                <li>Kerstavond</li>
                <li>Tweede Kerstdag</li>
                <li>Oudejaarsdag</li>
              </ul>
            </>
          ),
        },
        {
          question: "Het lijkt me leuk om bij CrossFit Alkmaar te werken, kan dat?",
          answer:
            "We zijn altijd op zoek naar leuke en enthousiaste mensen om Team CFA te versterken! Ervaring als trainer/coach is handig, maar zeker geen vereiste. Spreek ons gerust aan als je op zoek bent naar een MEGA leuke plek om parttime of fulltime te werken.",
        },
        {
          question: "Hoe kan ik jullie helpen?",
          answer: (
            <>
              <p className="mb-3">
                Door superfit te worden bij CrossFit Alkmaar, dat is de beste reclame die er is en dat vinden wij supermooi om te zien.
              </p>
              <p>
                Met een{" "}
                <a
                  href="https://g.page/r/CZw1MzAZmSpFEBM/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Google review
                </a>{" "}
                zijn we ook heel erg blij, die laat je binnen een minuutje achter!
              </p>
            </>
          ),
        },
      ],
    },
    {
      title: "Lidmaatschappen en betaling",
      items: [
        {
          question: "Welke lidmaatschappen zijn er?",
          answer: (
            <>
              <p className="font-semibold mb-2">Groepslessen</p>
              <ul className="list-disc list-inside mb-4 text-gray-600">
                <li>10x per maand €94,95</li>
                <li>15x per maand €119,95</li>
                <li>Onbeperkt per maand €149,95</li>
              </ul>
              <p className="font-semibold mb-2">BUILD Small group</p>
              <ul className="list-disc list-inside mb-4 text-gray-600">
                <li>2x per week €235 per maand</li>
                <li>3x per week €342,50 per maand</li>
              </ul>
              <p className="font-semibold mb-2">Personal training</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Op abonnementsvorm €95 per uur</li>
              </ul>
            </>
          ),
        },
        {
          question: "Kan ik credits meenemen naar de volgende maand?",
          answer:
            "Nee, aan de start van de nieuwe maand begin je weer met het aantal credits dat bij jouw abonnement hoort.",
        },
        {
          question: "Hoe kan ik iets uit de shop kopen?",
          answer:
            "Alle artikelen in de shop kun je gelijk meenemen. De aanwezige coach slaat je aankoop aan in onze kassa, het bedrag wordt bij de volgende incasso meegenomen.",
        },
        {
          question: "Wanneer wordt er geïncasseerd?",
          answer:
            "We incasseren het abonnementsgeld rond de 28e van elke maand vooruit. Eventuele storneringen of andere openstaande bestellingen worden rond de 15e van elke maand geïncasseerd.",
        },
        {
          question: "Kan ik facturen downloaden?",
          answer:
            "Jazeker. Dat doe je makkelijk via de SportBit app. Ga naar de drie streepjes linksboven → 'mijn account' → 'rekeningen & facturen'. Hier vind je al jouw facturen.",
        },
        {
          question: "Mijn incasso is mislukt, en nu?",
          answer:
            "Je hoeft niks te doen. Bij de volgende incasso, rond de 15e of 28e, incasseren we het bedrag opnieuw. Je hoeft liever niet zelf het verschuldigde bedrag over te maken, dat geeft een stuk meer administratie.",
        },
        {
          question: "Wat is de opzegtermijn?",
          answer:
            "Er geldt een opzegtermijn van één kalendermaand. Dus, als je opzegt betaal je alleen nog de maand daarna en dan eindigt je lidmaatschap.",
        },
        {
          question: "Hoe kan ik opzeggen?",
          answer: (
            <>
              Dit doe je door een e-mail te sturen naar{" "}
              <a
                href="mailto:info@crossfitalkmaar.nl"
                className="text-blue-600 hover:underline"
              >
                info@crossfitalkmaar.nl
              </a>
              .
            </>
          ),
        },
        {
          question: "Kan ik mijn abonnement pauzeren?",
          answer:
            "Nee, er worden geen abonnementen gepauzeerd. Natuurlijk denken we met je mee in het geval van blessures.",
        },
        {
          question: "Hoe kan ik up- of downgraden?",
          answer: (
            <>
              <p className="mb-3">
                Door een e-mail te sturen naar{" "}
                <a
                  href="mailto:info@crossfitalkmaar.nl"
                  className="text-blue-600 hover:underline"
                >
                  info@crossfitalkmaar.nl
                </a>
                .
              </p>
              <p className="mb-3">
                Upgraden kan vanaf het moment dat je de upgrade doet, overal in de maand.
              </p>
              <p>
                Downgraden kan met een kalendermaand opzegtermijn van je huidige abonnement.
              </p>
            </>
          ),
        },
      ],
    },
    {
      title: "Lessen en trainingen",
      items: [
        {
          question: "Welke soorten lessen zijn er?",
          answer: (
            <>
              <p className="mb-3">Bij CrossFit Alkmaar zijn er geen beginners- of gevorderden lessen, elk lid is welkom in elke les.</p>
              
              <p className="font-semibold mb-1">CrossFit</p>
              <p className="mb-3 text-gray-600">Onze dagelijkse CrossFit lessen zijn gericht op algemene fysieke fitheid. Elke sessie heeft een andere focus, met aandacht voor kracht, conditie en vaardigheidstraining (gymnastiek). Geen enkele training is hetzelfde, zodat het leuk én effectief blijft om te trainen. Duur: 60 minuten.</p>
              
              <p className="font-semibold mb-1">Oxygen</p>
              <p className="mb-3 text-gray-600">Al het goede van CrossFit, maar zonder zware gewichten of complexe technieken. Wat meer nadruk op cardio en wat langere workouts. Duur: 45 minuten.</p>
              
              <p className="font-semibold mb-1">Strength</p>
              <p className="mb-3 text-gray-600">Hier werk je puur aan het opbouwen van kracht in je boven- en onderlichaam. Geen workout, maar je gaat evengoed voldaan naar huis. Duur: 60 minuten.</p>
              
              <p className="font-semibold mb-1">Flex friday</p>
              <p className="mb-3 text-gray-600">
                Ons alternatief voor de vrijdagmiddag borrel! Kom op vrijdagmiddag of -avond een lekkere buddy workout doen. Introducees zijn ook welkom, CrossFit ervaring is niet vereist. Neem je iemand mee van buiten CrossFit Alkmaar? Laat hem/haar{" "}
                <a
                  href="https://kilo.gymleadmachine.com/widget/bookings/crossfitalkmaar/flexfriday"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  dit formulier
                </a>{" "}
                invullen.
              </p>
              
              <p className="font-semibold mb-1">BUILD</p>
              <p className="text-gray-600">De BUILD lessen zijn small group trainingen waar de deelnemers hun vaste plek hebben op bepaalde tijden en dagen. Doordat iedereen in een vast ritme traint, kunnen we bij BUILD volgens een erg gestructureerd programma trainen. We trainen alles, maar elke acht weken ligt er de focus op één of twee bewegingen. Door deze structuur en focus wordt er snel progressie gemaakt.</p>
            </>
          ),
        },
        {
          question: "Kan ik ook vrij trainen?",
          answer: (
            <>
              Nee, je kunt bij CrossFit Alkmaar niet vrij trainen met eigen programma's. Alleen trainen gebeurt alleen in combinatie met personal training en programma's die door onze coaches voor jou zijn geschreven.{" "}
              <a
                href="https://kilo.gymleadmachine.com/widget/bookings/crossfitalkmaar/check-in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Boek een check in gesprek
              </a>{" "}
              als je hier interesse in hebt.
            </>
          ),
        },
        {
          question: "Wat als ik een blessure heb?",
          answer: (
            <>
              <p className="mb-3">
                Helemaal stoppen met bewegen is meestal niet de beste manier om te herstellen. Onze coaches hebben een oneindige toolbox met aanpassingen voor nagenoeg elke beweging. Daarom moedigen we je aan om wel te blijven trainen en in te schrijven voor de lessen.
              </p>
              <p>
                Voel je niet bezwaard, de coaches zijn er juist om alles passend voor je te maken en denken graag met je mee. Ben je toch onzeker of nerveus om (weer) in de groep te trainen vanwege je blessure?{" "}
                <a
                  href="https://kilo.gymleadmachine.com/widget/bookings/crossfitalkmaar/check-in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Plan dan een check in gesprek
                </a>{" "}
                in met één van onze coaches.
              </p>
            </>
          ),
        },
        {
          question: "Wat is het beleid voor het aan- en afmelden voor de lessen?",
          answer:
            "Je kunt vanaf twee weken van tevoren tot vijf minuten voor aanvang aanmelden voor alle lessen. Uitschrijven kan tot drie uur voor aanvang van de les.",
        },
        {
          question: "Kan ik meerdere lessen per dag meedoen?",
          answer:
            "Nee, al onze lessen geven een prikkel die meer dan genoeg is voor één dag. Meerdere lessen per dag is niet verstandig in verband met blessures en de rust die je lijf nodig heeft na een trainingsprikkel.",
        },
      ],
    },
    {
      title: "90 Day check ins",
      items: [
        {
          question: "Wat is een 90 day check in?",
          answer:
            "Elk lid van CrossFit Alkmaar heeft elke negentig dagen recht op een één op één gesprek met onze coaches. We horen graag van je wat er goed gaat, wat je wilt bereiken en waar je tegenaan loopt. Zo kunnen we je echt helpen op weg naar je doelen en dit is voor ons een manier om in contact te blijven met al onze leden.",
        },
        {
          question: "En als ik geen doelen heb?",
          answer:
            "Ook dan spreken we je graag. CrossFit Alkmaar is meer dan een sportschool waar je anoniem komt sporten. We kennen al onze leden bij naam en willen het graag weten als er zaken zijn waar je tegenaan loopt.",
        },
        {
          question: "Hoe gaat zo'n check in?",
          answer:
            "We hebben een standaard vragenlijst die we met je doornemen. We starten met wat er de afgelopen tijd goed is gegaan, daarna hebben we het over wat je graag verbeterd zou willen zien. Dat kan een bepaalde oefening zijn, een bepaald gewicht dat je wilt kunnen tillen maar ook het aankomen of afvallen van een bepaald aantal kilo's is iets dat besproken kan worden. We vertellen je hoe wij denken dat je je doelen het snelste kunt bereiken en daarna boeken we je volgende check in over negentig dagen.",
        },
        {
          question: "Hoe plan ik een check in?",
          answer: (
            <>
              Dat doe je makkelijk{" "}
              <a
                href="https://kilo.gymleadmachine.com/widget/bookings/crossfitalkmaar/check-in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                via deze link
              </a>
              . Ideaal om voor of na een training te plannen, wij gaan uit van een kwartier tijd voor de check in.
            </>
          ),
        },
      ],
    },
    {
      title: "BUILD small group training",
      items: [
        {
          question: "Waarom zou ik kiezen voor BUILD?",
          answer:
            "Bij BUILD train je op je vaste momenten in een vaste groep volgens een gestructureerde programmering. Door deze structuur en focus wordt er snel progressie gemaakt. BUILD is voor mensen die liever niet in een grote groep trainen, maar ook voor mensen die gestructureerd willen trainen en snel progressie willen maken. Doordat we elke acht weken de focus op bepaalde spiergroepen en bewegingen leggen, wordt er snel progressie gemaakt op alle vlakken.",
        },
        {
          question: "Waarom kost het meer dan de groepslessen?",
          answer:
            "BUILD is onze brug tussen personal training en de grote groepslessen. We reserveren jouw eigen plek in een groep van maximaal zes personen. Hierdoor is er maar een beperkt aantal plekken beschikbaar en vol is dus vol. Doordat de groep zo klein is en je altijd met dezelfde coaches werkt, is er erg veel aandacht voor jouw doelen en beperkingen. Onze coaches en het opbouwende programma zorgen ervoor dat je bij BUILD serieuze stappen in je progressie maakt.",
        },
        {
          question: "Doe ik dan helemaal geen groepslessen meer?",
          answer:
            "Dat mag je zelf weten. Bij het BUILD abonnement voor twee keer per week ontvang je ook één credit per week voor de groepslessen. Bij het BUILD abonnement voor drie keer per week ontvang je twee credits per week voor de groepslessen.",
        },
        {
          question: "Kan ik mijn BUILD abonnement wel pauzeren?",
          answer:
            "Je kunt je BUILD abonnement per kalenderjaar vier weken pauzeren. Dat kan in één keer of in twee keer twee weken.",
        },
      ],
    },
    {
      title: "Personal training",
      items: [
        {
          question: "Waarom zou ik kiezen voor personal training?",
          answer:
            "Een personal training sessie is de beste keuze als je op zoek bent naar extra begeleiding, sneller resultaat en een aanpak die volledig is afgestemd op jouw doelen. Je krijgt een plan dat helemaal is afgestemd op jouw doel: sterker worden, vet verliezen, je conditie verbeteren of juist werken aan een specifieke vaardigheid. Loop je vast in je progressie? Dan kan een personal training sessie net dat zetje geven. Met nieuwe inzichten, slimme aanpassingen en frisse motivatie.",
        },
        {
          question: "Wat kost personal training?",
          answer: (
            <>
              <p className="mb-2">Personal training op abonnementsvorm kost €95 per sessie van een uur.</p>
              <p>Één losse skill sessie kost €100 voor een sessie van een uur.</p>
            </>
          ),
        },
        {
          question: "Hoe start ik met personal training?",
          answer: (
            <>
              Dat begint allemaal met een check in gesprek waar we bespreken wat je doelen zijn en hoe we daarnaartoe kunnen werken.{" "}
              <a
                href="https://kilo.gymleadmachine.com/widget/bookings/crossfitalkmaar/check-in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Boek je check in via deze link
              </a>
              .
            </>
          ),
        },
        {
          question: "Hoe werkt het annuleren of wijzigen van afspraken voor personal training?",
          answer:
            "Je kunt zelf je afspraak wijzigen of annuleren tot 24 uur van tevoren. Dit doe je door middel van een link in de bevestigingsmail van je afspraak.",
        },
        {
          question: "Kan ik zelf kiezen met welke coach ik train?",
          answer: (
            <>
              Jazeker, geef aan met wie je graag wilt werken tijdens{" "}
              <a
                href="https://kilo.gymleadmachine.com/widget/bookings/crossfitalkmaar/check-in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                je check in gesprek
              </a>
              .
            </>
          ),
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[400px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/hero.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Ledenservice</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Hier vind je antwoorden op de meest gestelde vragen van onze leden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/31640124097"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat via WhatsApp
            </a>
            <a
              href="mailto:info@crossfitalkmaar.nl"
              className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-3 px-6 rounded-lg transition inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Stuur een e-mail
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Veelgestelde vragen</h2>

          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-blue-900">{section.title}</h3>
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => {
                  const isOpen = openItems[`${sectionIndex}-${itemIndex}`];
                  return (
                    <div
                      key={itemIndex}
                      className="bg-white rounded-lg shadow-sm overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(sectionIndex, itemIndex)}
                        className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition"
                      >
                        <span className="font-semibold text-gray-900 pr-4">
                          {item.question}
                        </span>
                        <svg
                          className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4 text-gray-600">
                          {typeof item.answer === "string" ? (
                            <p>{item.answer}</p>
                          ) : (
                            item.answer
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Staat je vraag er niet tussen?</h2>
          <p className="text-xl mb-8">
            Neem gerust contact met ons op via WhatsApp of e-mail.
          </p>
          <a
            href="https://wa.me/31640124097"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Chat via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}