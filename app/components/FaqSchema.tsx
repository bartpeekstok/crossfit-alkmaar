export default function FaqSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Ik ben niet fit genoeg om te starten",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dat is precies waarom je juist wél moet starten. Elke training schalen we naar jouw niveau.",
        },
      },
      {
        "@type": "Question",
        name: "Ik heb geen tijd voor 5x per week trainen",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hoeft ook niet. Veel leden trainen 2-3x per week en zien al goede resultaten.",
        },
      },
      {
        "@type": "Question",
        name: "Ben ik niet te oud om met trainen te beginnen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absoluut niet. Onze gemiddelde leeftijd is 35+. We hebben leden van 20 tot 70+ die veilig trainen.",
        },
      },
      {
        "@type": "Question",
        name: "Wat als ik blessures of beperkingen heb?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We passen bewegingen aan of kiezen alternatieven. Onze coaches hebben ervaring met revalidatie.",
        },
      },
      {
        "@type": "Question",
        name: "Is CrossFit geschikt voor beginners?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absoluut. Bij CrossFit Alkmaar start iedereen met een 28 day kickstart waarin je in kleine groepen (max 6 personen) alle basisbewegingen leert. Elke oefening wordt aangepast aan jouw niveau, dus ervaring is niet nodig.",
        },
      },
      {
        "@type": "Question",
        name: "Wat is het verschil tussen CrossFit en een gewone sportschool?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bij een gewone sportschool train je alleen met machines en zonder begeleiding. Bij CrossFit Alkmaar train je altijd onder leiding van professionele coaches, in kleine groepen met gevarieerde trainingen. Je wordt sterker, fitter én je bouwt een community op.",
        },
      },
      {
        "@type": "Question",
        name: "Voor wie is CrossFit Alkmaar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CrossFit Alkmaar is voor iedereen: van 20 tot 70+, van complete beginners tot ervaren sporters. Onze gemiddelde leeftijd is 35+. Elke training is schaalbaar naar jouw niveau, doelen en eventuele beperkingen.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema),
      }}
    />
  );
}
