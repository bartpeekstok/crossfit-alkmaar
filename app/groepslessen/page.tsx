"use client";

import { useLeadModal } from "../components/redesign/LeadModalContext";
import ServiceSchema from "../components/ServiceSchema";
import YouTubeEmbed from "../components/redesign/YouTubeEmbed";

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

export default function GroepslessenPage() {
  const { open } = useLeadModal();
  const openModal = (source: string, section: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    open({ source, section, variant: "kennismaking" });
  };

  return (
    <>
      <ServiceSchema name="Groepslessen" description="CrossFit groepslessen met gevarieerde workouts. Kracht, conditie en mobiliteit onder begeleiding van ervaren coaches." url="https://crossfitalkmaar.com/groepslessen" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
        { "@type": "Question", name: "Wat zijn de groepslessen bij CrossFit Alkmaar?", acceptedAnswer: { "@type": "Answer", text: "Gevarieerde workouts in kleine groepen van maximaal 12 personen, begeleid door een professionele coach. Elke les combineert kracht, conditie en mobiliteit." } },
        { "@type": "Question", name: "Zijn de groepslessen geschikt voor beginners?", acceptedAnswer: { "@type": "Answer", text: "Ja. Elke oefening wordt aangepast aan jouw niveau. Beginners en gevorderden trainen samen, iedereen op eigen niveau. Nieuwe leden starten met de 28 Day Kickstart." } },
        { "@type": "Question", name: "Wat kosten groepslessen bij CrossFit Alkmaar?", acceptedAnswer: { "@type": "Answer", text: "Onze abonnementen starten vanaf €69 per maand. Het exacte pakket dat bij jou past, bespreken we tijdens je gratis kennismaking. Alle abonnementen zijn maandelijks opzegbaar." } },
        { "@type": "Question", name: "Hoe groot zijn de groepen?", acceptedAnswer: { "@type": "Answer", text: "Maximaal 12 deelnemers per les. Zo krijgt iedereen persoonlijke aandacht van de coach." } },
      ] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "HealthClub", "@id": "https://crossfitalkmaar.com/#organization", name: "CrossFit Alkmaar", aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", bestRating: "5", worstRating: "1", ratingCount: "273", reviewCount: "273" } }) }} />

      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/redesign/assets/header-groepslessen.jpg" alt="" style={{ objectPosition: "center 36%" }} />
        <div className="scrim" />
        <div className="wrap inner">
          <p className="eyebrow">Programma</p>
          <h1>Groepslessen</h1>
          <p className="lede">Geen anonieme drukke fitnessklas. Train met mensen die je niveau kennen en het merken als je er niet bent.</p>
          <div className="cta-row"><a className="btn btn--gold btn--lg" href="#" onClick={openModal("Plan je gratis kennismaking", "Hero")}>Plan je gratis kennismaking</a></div>
        </div>
      </section>

      <section className="sec sec--ivoor" style={{ paddingTop: "clamp(30px,4vw,48px)", paddingBottom: "clamp(16px,2.2vw,30px)" }}>
        <div className="wrap prose">
          <h2 className="sec-title" style={{ textAlign: "left", marginBottom: 18 }}>Wat zijn Groepslessen?</h2>
          <p>Onze groepslessen zijn de kern van CrossFit Alkmaar. Elke les is anders en combineert kracht, conditie en mobiliteit in een uitdagende workout. Je traint samen met anderen onder begeleiding van een ervaren coach.</p>
          <p>Elke training wordt aangepast aan jouw niveau. Of je nu beginner bent of al jaren traint, je doet dezelfde workout maar op jouw eigen niveau. Dat maakt het toegankelijk én uitdagend.</p>
          <p>De energie van de groep en de afwisseling in trainingen zorgen ervoor dat je gemotiveerd blijft en resultaten blijft boeken.</p>
        </div>
      </section>

      <section className="sec sec--white">
        <div className="wrap">
          <div className="vpair">
            <div className="vp"><div className="video"><YouTubeEmbed videoId="GCUpJQJJ8s0" alt="Malou" /></div><div className="nm">Malou</div><p className="vq">&apos;Ik ben door het sporten bij CFA meer gaan beseffen hoe fijn het is om lekker in je vel te zitten.&apos;</p></div>
            <div className="vp"><div className="video"><YouTubeEmbed videoId="EIWOUtYAl7g" alt="Chris" /></div><div className="nm">Chris</div><p className="vq">&apos;CrossFit is veel toegankelijker dan aan machines trekken in een sportschool.&apos;</p></div>
          </div>
        </div>
      </section>

      <section className="sec sec--ivoor">
        <div className="wrap">
          <div className="center"><h2 className="sec-title">Wat je krijgt</h2></div>
          <div className="pp-grid" style={{ marginTop: 34 }}>
            <div className="pp-item"><h3><Check />Gevarieerde workouts</h3><p>Elke dag een andere training. Je weet nooit precies wat je te wachten staat, maar het is altijd effectief.</p></div>
            <div className="pp-item"><h3><Check />Professionele coaching</h3><p>Ervaren coaches begeleiden elke les en zorgen dat je techniek goed is en je veilig traint.</p></div>
            <div className="pp-item"><h3><Check />Schaalbaar voor elk niveau</h3><p>Elke oefening kan aangepast worden aan jouw niveau. Beginners en gevorderden trainen samen.</p></div>
            <div className="pp-item"><h3><Check />Motiverende groepssfeer</h3><p>Vaste gezichten die jouw progressie zien en je aansporen. Mensen die merken als je er niet bent.</p></div>
          </div>
        </div>
      </section>

      <section className="sec sec--white">
        <div className="wrap">
          <div className="center"><h2 className="sec-title">Veelgestelde vragen</h2></div>
          <div className="faq" style={{ marginTop: 8 }}>
            <details open><summary>Wat zijn de groepslessen bij CrossFit Alkmaar?<span className="ic"><Plus /></span></summary><div className="body">Gevarieerde workouts in kleine groepen van maximaal 12 personen, begeleid door een professionele coach. Elke les combineert kracht, conditie en mobiliteit.</div></details>
            <details><summary>Zijn de groepslessen geschikt voor beginners?<span className="ic"><Plus /></span></summary><div className="body">Ja. Elke oefening wordt aangepast aan jouw niveau. Beginners en gevorderden trainen samen, iedereen op eigen niveau. Nieuwe leden starten met de 28 Day Kickstart.</div></details>
            <details><summary>Wat kosten groepslessen bij CrossFit Alkmaar?<span className="ic"><Plus /></span></summary><div className="body">Onze abonnementen starten vanaf €69 per maand. Het exacte pakket dat bij jou past, bespreken we tijdens je gratis kennismaking. Alle abonnementen zijn maandelijks opzegbaar.</div></details>
            <details><summary>Hoe groot zijn de groepen?<span className="ic"><Plus /></span></summary><div className="body">Maximaal 12 deelnemers per les. Zo krijgt iedereen persoonlijke aandacht van de coach.</div></details>
          </div>
        </div>
      </section>

      <section className="sec page-cta" style={{ ["--cta-photo" as string]: "url('/redesign/assets/header-groepslessen.jpg')", backgroundPosition: "center 36%" } as React.CSSProperties}>
        <div className="wrap">
          <h2>Klaar om te starten?</h2>
          <p>Kom vrijblijvend kennismaken en ervaar zelf de energie van onze groepslessen.</p>
          <a className="btn btn--gold btn--lg" href="#" onClick={openModal("Plan je kennismaking", "Klaar om te starten")}>Plan je kennismaking</a>
        </div>
      </section>
    </>
  );
}
