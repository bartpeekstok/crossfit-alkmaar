"use client";

const Plus = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--cfa-blue)" strokeWidth="2.5" strokeLinecap="round">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQSection {
  title: string;
  icon: React.ReactNode;
  items: FAQItem[];
}

export default function FAQPage() {
  const faqSections: FAQSection[] = [
    {
      title: "Community en contact",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      items: [
        {
          question: "Hoe doe ik mee aan de WhatsApp Community?",
          answer: (
            <>
              <p className="mb-3">
                Ga naar{" "}
                <a href="/community" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">crossfitalkmaar.com/community</a>{" "}
                en klik op de uitnodiging, dan zit je er meteen in.
              </p>
              <p className="mb-3">
                Je komt standaard in de mededelingengroep. Daar delen we alles wat er speelt in de box: rooster, events en nieuws. Geen spam, alleen belangrijke info. Vind je meer interactie leuk? In de Community staan een paar extra groepen waar je jezelf aan kunt toevoegen.
              </p>
            </>
          ),
        },
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
                Vanaf nu vind je alles wat er speelt in de box op één plek: onze{" "}
                <a href="/community" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">WhatsApp Community</a>. Rooster, events, nieuws en de nieuwsbrief, zonder dat je je mail hoeft door te spitten.
              </p>
              <p className="mb-3">
                Je komt standaard in de mededelingengroep terecht: geen spam, alleen belangrijke info. Vind je meer interactie leuk? Dan kun je jezelf daarnaast toevoegen aan een paar andere groepen.
              </p>
              <p className="mb-3">
                Het belangrijkste nieuws sturen we ook nog per e-mail. Die berichten komen helaas soms in je spam terecht. Markeer ons domein @crossfitalkmaar.com daarom als veilig in je mailprogramma.
              </p>
              <p className="mb-3">
                Daarnaast hebben we een besloten leden groep op{" "}
                <a href="https://www.facebook.com/groups/1484077655156155" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Facebook</a>.
              </p>
              <p className="mb-3">
                Op onze{" "}
                <a href="https://www.instagram.com/crossfitalkmaar/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Instagram pagina</a>{" "}
                posten we ook veel foto's en video's van trainingen, leden, tips en nog veel meer.
              </p>
            </>
          ),
        },
        {
          question: "Ik wil liever niet op foto of video, waar kan ik dit aangeven?",
          answer: "We maken regelmatig foto- en video opnamen bij CrossFit Alkmaar. Deze gebruiken we ter promotie en op onze website en social media. Als je liever niet wordt vastgelegd, geef het even aan bij de fotograaf op het moment dat hij/zij bezig is.",
        },
        {
          question: "Waar kan ik mijn vragen stellen?",
          answer: (
            <>
              Je kunt al je vragen stellen via{" "}
              <a href="https://wa.me/31722340560" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">WhatsApp</a>{" "}
              of{" "}
              <a href="mailto:ledenservice@crossfitalkmaar.nl" className="text-blue-600 hover:underline">e-mail</a>. We proberen op weekdagen altijd binnen 24 uur te antwoorden.
            </>
          ),
        },
        {
          question: "Hoe boek ik een check in gesprek?",
          answer: (
            <>Dat doe je <a href="https://ghl.crossfitalkmaar.com/widget/booking/bBgBvZjuga1BPExTMj8b" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">via deze link</a>.</>
          ),
        },
        {
          question: "Een bekende van me heeft interesse, wat moet hij/zij doen?",
          answer: (
            <>Hij/zij kan zelf een gratis kennismaking plannen, dat kan heel makkelijk <a href="https://www.crossfitalkmaar.com/free-intro/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">via deze link</a>. Als er geen geschikt moment in de planner staat, kan hij/zij gegevens op onze website achterlaten.</>
          ),
        },
        {
          question: "Kan ik iemand meenemen voor een proefles?",
          answer: (
            <>
              <p className="mb-3">Dat kan niet in een reguliere les. Je kunt wel altijd iemand meenemen naar Flex friday op vrijdag in de middag en in de avond.</p>
              <p>Schrijf jezelf in in SportBit en laat je introducee <a href="https://ghl.crossfitalkmaar.com/widget/booking/txawhkLQuRyHhMe8qG8M" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">dit formulier</a> invullen.</p>
            </>
          ),
        },
        {
          question: "Op welke feestdagen zijn jullie gesloten?",
          answer: (
            <>
              <p className="mb-2 font-medium">Gesloten:</p>
              <p className="mb-3 text-gray-600">Nieuwjaarsdag, Eerste Paasdag, Eerste Kerstdag</p>
              <p className="mb-2 font-medium">Open met weekendrooster:</p>
              <p className="text-gray-600">Tweede Paasdag, Koningsdag, Hemelvaart, Tweede Pinksterdag, Kerstavond, Tweede Kerstdag, Oudejaarsdag</p>
            </>
          ),
        },
        {
          question: "Het lijkt me leuk om bij CrossFit Alkmaar te werken, kan dat?",
          answer: "We zijn altijd op zoek naar leuke en enthousiaste mensen om Team CFA te versterken! Ervaring als trainer/coach is handig, maar zeker geen vereiste. Spreek ons gerust aan!",
        },
        {
          question: "Hoe kan ik jullie helpen?",
          answer: (
            <>Door superfit te worden bij CrossFit Alkmaar, dat is de beste reclame die er is! Met een <a href="https://g.page/r/CZw1MzAZmSpFEBM/review" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google review</a> zijn we ook heel erg blij.</>
          ),
        },
      ],
    },
    {
      title: "Lidmaatschappen en betaling",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      items: [
        {
          question: "Welke lidmaatschappen zijn er?",
          answer: (
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-blue-900 mb-2">Groepslessen</p>
                <div className="text-gray-600 space-y-1">
                  <p>1x per week - €69,95</p>
                  <p>10x per maand - €99,95</p>
                  <p>15x per maand - €127,50</p>
                  <p>Onbeperkt - €159,95</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-blue-900 mb-2">BUILD Small group</p>
                <div className="text-gray-600 space-y-1">
                  <p>2x per week - €245/maand</p>
                  <p>3x per week - €367,50/maand</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-blue-900 mb-2">Personal training</p>
                <p className="text-gray-600">Op abonnementsvorm - €95/uur</p>
                <p className="text-gray-600">Losse sessie - €100/uur</p>
              </div>
            </div>
          ),
        },
        {
          question: "Kan ik credits meenemen naar de volgende maand?",
          answer: "Nee, aan de start van de nieuwe maand begin je weer met het aantal credits dat bij jouw abonnement hoort.",
        },
        {
          question: "Hoe kan ik iets uit de shop kopen?",
          answer: "Alle artikelen in de shop kun je gelijk meenemen. De aanwezige coach slaat je aankoop aan in onze kassa, het bedrag wordt bij de volgende incasso meegenomen.",
        },
        {
          question: "Wanneer wordt er geïncasseerd?",
          answer: "We incasseren het abonnementsgeld rond de 28e van elke maand vooruit. Eventuele storneringen of andere openstaande bestellingen worden rond de 15e van elke maand geïncasseerd.",
        },
        {
          question: "Kan ik facturen downloaden?",
          answer: "Jazeker. Dat doe je makkelijk via de SportBit app. Ga naar de drie streepjes linksboven → 'mijn account' → 'rekeningen & facturen'. Hier vind je al jouw facturen.",
        },
        {
          question: "Mijn incasso is mislukt, en nu?",
          answer: "Je hoeft niks te doen. Bij de volgende incasso, rond de 15e of 28e, incasseren we het bedrag opnieuw. Je hoeft liever niet zelf het verschuldigde bedrag over te maken.",
        },
        {
          question: "Wat is de opzegtermijn?",
          answer: "Er geldt een opzegtermijn van één kalendermaand. Dus, als je opzegt betaal je alleen nog de maand daarna en dan eindigt je lidmaatschap.",
        },
        {
          question: "Hoe kan ik opzeggen?",
          answer: (<>Dit doe je door een e-mail te sturen naar <a href="mailto:ledenservice@crossfitalkmaar.nl" className="text-blue-600 hover:underline">ledenservice@crossfitalkmaar.nl</a>.</>),
        },
        {
          question: "Kan ik mijn abonnement pauzeren?",
          answer: "Nee, er worden geen abonnementen gepauzeerd. Natuurlijk denken we met je mee in het geval van blessures.",
        },
        {
          question: "Hoe kan ik up- of downgraden?",
          answer: (
            <>
              <p className="mb-2">Door een e-mail te sturen naar <a href="mailto:ledenservice@crossfitalkmaar.nl" className="text-blue-600 hover:underline">ledenservice@crossfitalkmaar.nl</a>.</p>
              <p className="mb-2">Upgraden kan vanaf het moment dat je de upgrade doet.</p>
              <p>Downgraden kan met een kalendermaand opzegtermijn.</p>
            </>
          ),
        },
      ],
    },
    {
      title: "Lessen en trainingen",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      items: [
        {
          question: "Welke soorten lessen zijn er?",
          answer: (
            <div className="space-y-4">
              <p>Bij CrossFit Alkmaar zijn er geen beginners- of gevorderden lessen, elk lid is welkom in elke les.</p>
              <div className="grid gap-3">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                  <p className="font-semibold text-blue-900">CrossFit</p>
                  <p className="text-gray-600 text-sm mt-1">Kracht, conditie en vaardigheidstraining. Duur: 60 min.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                  <p className="font-semibold text-green-900">Oxygen</p>
                  <p className="text-gray-600 text-sm mt-1">Zonder zware gewichten, meer cardio focus. Duur: 45 min.</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
                  <p className="font-semibold text-orange-900">Strength</p>
                  <p className="text-gray-600 text-sm mt-1">Puur kracht opbouwen. Duur: 60 min.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                  <p className="font-semibold text-purple-900">Flex friday</p>
                  <p className="text-gray-600 text-sm mt-1">Buddy workout op vrijdag, introducees welkom!</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-gray-600">
                  <p className="font-semibold text-gray-900">BUILD</p>
                  <p className="text-gray-600 text-sm mt-1">Small group training met vaste groep en gestructureerd programma.</p>
                </div>
              </div>
            </div>
          ),
        },
        {
          question: "Kan ik ook vrij trainen?",
          answer: (<>Nee, je kunt bij CrossFit Alkmaar niet vrij trainen met eigen programma's. <a href="https://ghl.crossfitalkmaar.com/widget/booking/bBgBvZjuga1BPExTMj8b" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Boek een check in gesprek</a> als je hier interesse in hebt.</>),
        },
        {
          question: "Wat als ik een blessure heb?",
          answer: (
            <>
              <p className="mb-3">Helemaal stoppen met bewegen is meestal niet de beste manier om te herstellen. Onze coaches hebben een oneindige toolbox met aanpassingen.</p>
              <p>Ben je onzeker? <a href="https://ghl.crossfitalkmaar.com/widget/booking/bBgBvZjuga1BPExTMj8b" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Plan dan een check in gesprek</a> in met één van onze coaches.</p>
            </>
          ),
        },
        {
          question: "Wat is het beleid voor het aan- en afmelden voor de lessen?",
          answer: "Je kunt vanaf twee weken van tevoren tot vijf minuten voor aanvang aanmelden. Uitschrijven kan tot drie uur voor aanvang van de les.",
        },
        {
          question: "Kan ik meerdere lessen per dag meedoen?",
          answer: "Nee, al onze lessen geven een prikkel die meer dan genoeg is voor één dag.",
        },
      ],
    },
    {
      title: "90 Day check ins",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      items: [
        {
          question: "Wat is een 90 day check in?",
          answer: "Elk lid van CrossFit Alkmaar heeft elke negentig dagen recht op een één op één gesprek met onze coaches. We horen graag van je wat er goed gaat, wat je wilt bereiken en waar je tegenaan loopt.",
        },
        {
          question: "En als ik geen doelen heb?",
          answer: "Ook dan spreken we je graag. CrossFit Alkmaar is meer dan een sportschool waar je anoniem komt sporten. We kennen al onze leden bij naam!",
        },
        {
          question: "Hoe gaat zo'n check in?",
          answer: "We hebben een standaard vragenlijst die we met je doornemen. We starten met wat er goed is gegaan, daarna bespreken we wat je graag verbeterd zou willen zien. Duurt ongeveer een kwartier.",
        },
        {
          question: "Hoe plan ik een check in?",
          answer: (<>Dat doe je makkelijk <a href="https://ghl.crossfitalkmaar.com/widget/booking/bBgBvZjuga1BPExTMj8b" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">via deze link</a>. Ideaal om voor of na een training te plannen.</>),
        },
      ],
    },
    {
      title: "BUILD small group training",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      items: [
        {
          question: "Waarom zou ik kiezen voor BUILD?",
          answer: "Bij BUILD train je op je vaste momenten in een vaste groep volgens een gestructureerde programmering. Door deze structuur en focus wordt er snel progressie gemaakt. Elke acht weken ligt de focus op bepaalde spiergroepen en bewegingen.",
        },
        {
          question: "Waarom kost het meer dan de groepslessen?",
          answer: "BUILD is onze brug tussen personal training en de grote groepslessen. We reserveren jouw eigen plek in een groep van maximaal zes personen. Hierdoor is er veel aandacht voor jouw doelen en beperkingen.",
        },
        {
          question: "Doe ik dan helemaal geen groepslessen meer?",
          answer: "Dat mag je zelf weten. Bij BUILD 2x/week ontvang je 1 credit per week voor groepslessen. Bij BUILD 3x/week ontvang je 2 credits per week.",
        },
        {
          question: "Kan ik mijn BUILD abonnement wel pauzeren?",
          answer: "Je kunt je BUILD abonnement per kalenderjaar vier weken pauzeren. Dat kan in één keer of in twee keer twee weken.",
        },
      ],
    },
    {
      title: "Personal training",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      items: [
        {
          question: "Waarom zou ik kiezen voor personal training?",
          answer: "Een personal training sessie is de beste keuze als je op zoek bent naar extra begeleiding, sneller resultaat en een aanpak die volledig is afgestemd op jouw doelen.",
        },
        {
          question: "Wat kost personal training?",
          answer: (
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="mb-2">Op abonnementsvorm: <span className="font-semibold">€95</span> per sessie van een uur</p>
              <p>Losse skill sessie: <span className="font-semibold">€100</span> voor een uur</p>
            </div>
          ),
        },
        {
          question: "Hoe start ik met personal training?",
          answer: (<>Dat begint met een check in gesprek waar we bespreken wat je doelen zijn. <a href="https://ghl.crossfitalkmaar.com/widget/booking/bBgBvZjuga1BPExTMj8b" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Boek je check in via deze link</a>.</>),
        },
        {
          question: "Hoe werkt het annuleren of wijzigen van afspraken?",
          answer: "Je kunt zelf je afspraak wijzigen of annuleren tot 24 uur van tevoren via de link in je bevestigingsmail.",
        },
        {
          question: "Kan ik zelf kiezen met welke coach ik train?",
          answer: (<>Jazeker, geef aan met wie je graag wilt werken tijdens <a href="https://ghl.crossfitalkmaar.com/widget/booking/bBgBvZjuga1BPExTMj8b" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">je check in gesprek</a>.</>),
        },
      ],
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/images/faq-header.jpg" alt="" style={{ objectPosition: "center 35%" }} />
        <div className="scrim" />
        <div className="wrap inner">
          <h1>Ledenservice</h1>
          <p className="lede">Hier vind je antwoorden op de meest gestelde vragen van onze leden.</p>
          <div className="cta-row">
            <a
              className="btn btn--gold btn--lg"
              href="https://wa.me/31722340560"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat via WhatsApp
            </a>
            <a
              className="btn btn--outline btn--lg"
              href="mailto:ledenservice@crossfitalkmaar.nl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Stuur een e-mail
            </a>
          </div>
        </div>
      </section>

      {/* QUICK NAV */}
      <section className="sec--white" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="wrap" style={{ paddingTop: 18, paddingBottom: 18 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {faqSections.map((section, index) => (
              <a
                key={index}
                href={`#section-${index}`}
                style={{ padding: "8px 16px", background: "var(--blue-50)", color: "var(--cfa-blue)", borderRadius: 999, fontFamily: "var(--font-head)", fontWeight: 600, fontSize: 14, textDecoration: "none" }}
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTIONS */}
      {faqSections.map((section, sectionIndex) => (
        <section
          key={sectionIndex}
          id={`section-${sectionIndex}`}
          className={`sec ${sectionIndex % 2 === 0 ? "sec--ivoor" : "sec--white"}`}
          style={{ scrollMarginTop: 80, paddingTop: "clamp(40px,6vw,72px)", paddingBottom: "clamp(40px,6vw,72px)" }}
        >
          <div className="wrap">
            <div style={{ maxWidth: 840, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: "var(--cfa-blue)", color: "#fff", display: "grid", placeItems: "center", flexShrink: 0 }}>
                  {section.icon}
                </div>
                <h2 className="sec-title" style={{ fontSize: "clamp(26px,3.4vw,40px)", textAlign: "left", margin: 0 }}>{section.title}</h2>
              </div>
              <div className="faq" style={{ marginTop: 8, marginLeft: 0, marginRight: 0, maxWidth: "100%" }}>
                {section.items.map((item, itemIndex) => (
                  <details key={itemIndex}>
                    <summary>
                      {item.question}
                      <span className="ic"><Plus /></span>
                    </summary>
                    <div className="body">
                      {typeof item.answer === "string" ? <p>{item.answer}</p> : item.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="sec sec--blue" style={{ textAlign: "center" }}>
        <div className="wrap">
          <h2 className="sec-title" style={{ color: "#fff" }}>Staat je vraag er niet tussen?</h2>
          <p className="sec-sub" style={{ margin: "14px auto 26px" }}>
            Neem gerust contact met ons op via WhatsApp of e-mail. We helpen je graag! Al het nieuws uit de box delen we in onze{" "}
            <a href="/community" target="_blank" rel="noopener noreferrer" style={{ color: "var(--hold)", fontWeight: 600, textDecoration: "underline" }}>WhatsApp Community</a>.
          </p>
          <a className="btn btn--gold btn--lg" href="https://wa.me/31722340560" target="_blank" rel="noopener noreferrer">
            Chat via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}