"use client";

import { useLeadModal } from "../components/redesign/LeadModalContext";
import ServiceSchema from "../components/ServiceSchema";

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
const Plus = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--cfa-blue)" strokeWidth="2.5" strokeLinecap="round">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export default function TienersPage() {
  const { open } = useLeadModal();
  const openModal = (source: string, section: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    open({ source, section, variant: "kennismaking" });
  };

  return (
    <>
      <style>{`.ppg3 { grid-template-columns: repeat(3,1fr); } @media (max-width:720px){ .ppg3 { grid-template-columns: 1fr; } }`}</style>
      <ServiceSchema name="Tieners Programma" description="Speciaal trainingsprogramma voor jongeren van 14 t/m 17 jaar. Veilig leren trainen met professionele begeleiding." url="https://www.crossfitalkmaar.com/tieners" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
        { "@type": "Question", name: "Voor welke leeftijd is het tienerprogramma?", acceptedAnswer: { "@type": "Answer", text: "Het tienerprogramma is voor jongeren van 14 tot en met 17 jaar." } },
        { "@type": "Question", name: "Heeft mijn kind sportervaring nodig?", acceptedAnswer: { "@type": "Answer", text: "Nee, geen ervaring nodig. We beginnen bij de basis en bouwen stap voor stap op. Elke training wordt afgestemd op het niveau van je kind." } },
        { "@type": "Question", name: "Wat kost het tienerprogramma?", acceptedAnswer: { "@type": "Answer", text: "Het tienerprogramma kost €70 per maand voor twee keer per week trainen. De kennismaking is gratis." } },
        { "@type": "Question", name: "Waarom CrossFit Alkmaar en niet een gewone sportschool?", acceptedAnswer: { "@type": "Answer", text: "Bij grote sportscholen worden jongeren zonder begeleiding aan hun lot overgelaten. Bij ons staat er altijd een professionele coach naast je kind die zorgt voor veilige en effectieve training." } },
      ] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "HealthClub", "@id": "https://www.crossfitalkmaar.com/#organization", name: "CrossFit Alkmaar", aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", bestRating: "5", worstRating: "1", ratingCount: "273", reviewCount: "273" } }) }} />

      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/redesign/assets/header-tieners.webp" alt="" />
        <div className="scrim" />
        <div className="wrap inner">
          <p className="eyebrow">Programma · 14 t/m 17 jaar</p>
          <h1>Tieners Programma</h1>
          <p className="lede">Speciaal voor jongeren van 14 tot en met 17 jaar. Leer veilig en effectief trainen met altijd een professionele coach naast je.</p>
          <div className="cta-row"><a className="btn btn--gold btn--lg" href="#" onClick={openModal("Plan een gratis kennismaking", "Hero")}>Plan een gratis kennismaking</a></div>
        </div>
      </section>

      <section className="sec sec--ivoor" style={{ paddingTop: "clamp(30px,4vw,48px)", paddingBottom: "clamp(16px,2.2vw,30px)" }}>
        <div className="wrap prose">
          <h2 className="sec-title" style={{ textAlign: "left", marginBottom: 18 }}>Wat is het Tieners Programma?</h2>
          <p>Ons tienerprogramma is speciaal ontwikkeld voor jongeren van 14 tot en met 17 jaar. We geven tieners een alternatief voor de grote sportscholen waar ze zonder begeleiding aan hun lot worden overgelaten. Bij ons staat er altijd een professionele coach naast je die je leert hoe je veilig en effectief traint.</p>
          <p>Zo geven we jongeren een goede start met trainen. Ze leren de juiste technieken, bouwen kracht en conditie op, en ontdekken hoe het voelt om fit en sterk te zijn. Dat geeft enorm veel zelfvertrouwen, niet alleen in de gym, maar ook daarbuiten.</p>
          <p>De trainingen zijn uitdagend maar altijd afgestemd op het niveau en de ontwikkeling van elke tiener. Er wordt geen druk uitgeoefend: het draait om plezier, vooruitgang en een gezonde basis leggen voor de rest van hun leven.</p>
        </div>
      </section>

      <section className="sec sec--white">
        <div className="wrap">
          <div className="center"><h2 className="sec-title">Waarom CrossFit voor tieners?</h2></div>
          <div className="ppg ppg3" style={{ marginTop: 34 }}>
            <div className="ppi"><h3><Check />Sterker worden</h3><p>Bouw kracht en conditie op met gevarieerde trainingen die nooit saai worden. Elke les is anders.</p></div>
            <div className="ppi"><h3><Check />Meer zelfvertrouwen</h3><p>Ontdek wat je lichaam allemaal kan. Elke kleine overwinning bouwt zelfvertrouwen op dat verder reikt dan de gym.</p></div>
            <div className="ppi"><h3><Check />Samen met leeftijdsgenoten</h3><p>Train in een groep met jongeren van jouw leeftijd. Samen werken, samen lachen, samen groeien.</p></div>
          </div>
        </div>
      </section>

      <section className="sec sec--ivoor">
        <div className="wrap">
          <div className="center"><h2 className="sec-title">Wat je krijgt</h2></div>
          <div className="ppg ppg3" style={{ marginTop: 34 }}>
            <div className="ppi"><h3><Check />Professionele coaching</h3><p>Ervaren coaches die getraind zijn om met jongeren te werken. Veiligheid en plezier staan voorop.</p></div>
            <div className="ppi"><h3><Check />Kleine groepen</h3><p>Maximale persoonlijke aandacht door te trainen in kleine groepen. Iedereen wordt gezien.</p></div>
            <div className="ppi"><h3><Check />Aangepast aan elk niveau</h3><p>Of je nu nooit hebt gesport of al jaren bezig bent: elke training wordt afgestemd op jouw niveau.</p></div>
            <div className="ppi"><h3><Check />Gevarieerde trainingen</h3><p>Geen saaie herhalingen. Elke les is anders met een mix van kracht, conditie, coördinatie en plezier.</p></div>
            <div className="ppi"><h3><Check />Gezonde gewoontes</h3><p>Leg een sterke basis voor een actieve, gezonde levensstijl. Een investering voor het leven.</p></div>
            <div className="ppi"><h3><Check />Leuke sfeer</h3><p>Bij ons staat plezier centraal. Tieners komen hier graag naartoe, dat merk je aan de energie in de groep.</p></div>
          </div>
        </div>
      </section>

      <section className="sec sec--white" style={{ paddingTop: "clamp(28px,4vw,46px)", paddingBottom: "clamp(16px,2.2vw,30px)" }}>
        <div className="wrap prose">
          <h2 className="sec-title" style={{ textAlign: "left", marginBottom: 18 }}>Voor ouders</h2>
          <p>We begrijpen dat je als ouder wilt weten dat je kind in goede handen is. Bij CrossFit Alkmaar staat veiligheid altijd voorop. In tegenstelling tot grote sportscholen waar jongeren zonder begeleiding rondlopen, staat er bij ons altijd een ervaren coach naast je kind. Elke oefening wordt zorgvuldig uitgelegd en opgebouwd.</p>
          <p>Tieners leren bij ons niet alleen hoe ze veilig en effectief trainen, maar ontdekken ook hoe het voelt om fit en sterk te zijn. Dat heeft een enorm positief effect op hun zelfvertrouwen, niet alleen in de gym, maar ook op school en in het dagelijks leven.</p>
          <p>Benieuwd of dit iets voor jouw zoon of dochter is? Plan een gratis kennismaking, dan kun je zelf zien hoe we werken en al je vragen stellen.</p>
        </div>
      </section>

      <section className="sec sec--ivoor">
        <div className="wrap">
          <div className="center"><h2 className="sec-title">Veelgestelde vragen</h2></div>
          <div className="faq" style={{ marginTop: 8 }}>
            <details open><summary>Voor welke leeftijd is het tienerprogramma?<span className="ic"><Plus /></span></summary><div className="body">Het tienerprogramma is voor jongeren van 14 tot en met 17 jaar.</div></details>
            <details><summary>Heeft mijn kind sportervaring nodig?<span className="ic"><Plus /></span></summary><div className="body">Nee, geen ervaring nodig. We beginnen bij de basis en bouwen stap voor stap op. Elke training wordt afgestemd op het niveau van je kind.</div></details>
            <details><summary>Wat kost het tienerprogramma?<span className="ic"><Plus /></span></summary><div className="body">Het tienerprogramma kost €70 per maand voor twee keer per week trainen. De kennismaking is gratis.</div></details>
            <details><summary>Waarom CrossFit Alkmaar en niet een gewone sportschool?<span className="ic"><Plus /></span></summary><div className="body">Bij grote sportscholen worden jongeren zonder begeleiding aan hun lot overgelaten. Bij ons staat er altijd een professionele coach naast je kind die zorgt voor veilige en effectieve training.</div></details>
          </div>
        </div>
      </section>

      <section className="sec page-cta" style={{ ["--cta-photo" as string]: "url('/redesign/assets/header-tieners.webp')" } as React.CSSProperties}>
        <div className="wrap">
          <h2>Kennismaken?</h2>
          <p>Plan een gratis en vrijblijvende kennismaking.</p>
          <a className="btn btn--gold btn--lg" href="#" onClick={openModal("Plan een kennismaking", "Klaar om te starten")}>Plan een kennismaking</a>
        </div>
      </section>
    </>
  );
}
