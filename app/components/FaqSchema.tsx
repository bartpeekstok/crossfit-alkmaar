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
