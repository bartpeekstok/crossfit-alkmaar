"use client";

import Link from "next/link";
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

export default function SmallGroupTrainingPage() {
  const { open } = useLeadModal();
  const openModal = (source: string, section: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    open({ source, section, variant: "kennismaking" });
  };

  return (
    <>
      <ServiceSchema name="Small Group Training" description="Training in kleine groepen met persoonlijke aandacht. BUILD is voor wie meer wil dan een reguliere groepsles." url="https://crossfitalkmaar.com/small-group-training" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
        { "@type": "Question", name: "Wat is Small Group Training bij CrossFit Alkmaar?", acceptedAnswer: { "@type": "Answer", text: "Semi personal training in een vaste groep van maximaal 6 personen. Je krijgt persoonlijke aandacht van de coach gecombineerd met de motivatie van samen trainen." } },
        { "@type": "Question", name: "Wat kost Small Group Training?", acceptedAnswer: { "@type": "Answer", text: "Onze tarieven voor BUILD Small Group Training bespreken we tijdens je gratis kennismaking. Inclusief groepslessen en een programma op maat. Maandelijks opzegbaar." } },
        { "@type": "Question", name: "Wat is het verschil met groepslessen?", acceptedAnswer: { "@type": "Answer", text: "Bij Small Group Training train je in een vaste groep van max 6 (i.p.v. 12), met een programma op maat en meer persoonlijke aandacht. Het is de tussenstap tussen groepslessen en personal training." } },
      ] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "HealthClub", "@id": "https://crossfitalkmaar.com/#organization", name: "CrossFit Alkmaar", aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", bestRating: "5", worstRating: "1", ratingCount: "273", reviewCount: "273" } }) }} />

      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/redesign/assets/header-sgt.jpg" alt="" style={{ objectPosition: "center 8%" }} />
        <div className="scrim" />
        <div className="wrap inner">
          <p className="eyebrow">Programma · BUILD</p>
          <h1>Small Group Training</h1>
          <p className="lede">Semi-personal training in een vaste groep van zes. Geen drukke fitnessklas, geen losse personal trainer.</p>
          <div className="cta-row"><a className="btn btn--gold btn--lg" href="#" onClick={openModal("Plan je gratis kennismaking", "Hero")}>Plan je gratis kennismaking</a></div>
        </div>
      </section>

      <section className="sec sec--ivoor" style={{ paddingTop: "clamp(30px,4vw,48px)", paddingBottom: "clamp(16px,2.2vw,30px)" }}>
        <div className="wrap prose">
          <h2 className="sec-title" style={{ textAlign: "left", marginBottom: 18 }}>Wat is Small Group Training?</h2>
          <p>Small Group Training combineert het beste van twee werelden: de persoonlijke aandacht van personal training met de energie en motivatie van samen trainen. Je traint in een kleine groep van maximaal 6 personen.</p>
          <p>Elke sessie wordt begeleid door een ervaren coach die iedereen individueel in de gaten houdt. Je krijgt feedback op je techniek en het programma wordt aangepast aan jouw niveau.</p>
          <p>Ideaal voor mensen die meer begeleiding willen dan in een reguliere groepsles, maar ook genieten van de sociale kant van samen sporten.</p>
          <p>We houden de groepen bewust klein. Jouw coach kent je na drie sessies: je techniek, je niveau, en wanneer je vastloopt. Dat lukt niet in een groep van dertig.</p>
        </div>
      </section>

      <section className="sec sec--white">
        <div className="wrap">
          <div className="vpair">
            <div className="vp"><div className="video"><YouTubeEmbed videoId="HlqFX84ue3o" alt="Tim" /></div><div className="nm">Tim</div><p className="vq">&apos;Ik zit een stuk lekkerder in m&apos;n vel, ik voel me fit en m&apos;n hartslag in rust is ook omlaaggegaan!&apos;</p></div>
            <div className="vp"><div className="video"><YouTubeEmbed videoId="jIZpGVRIIyI" alt="Renze" /></div><div className="nm">Renze</div><p className="vq">&apos;Ik houd niet van fitness, dat vind ik veel te saai.&apos;</p></div>
          </div>
        </div>
      </section>

      <section className="sec sec--ivoor">
        <div className="wrap">
          <div className="center"><h2 className="sec-title">Wat je krijgt</h2></div>
          <div className="ppg" style={{ marginTop: 34 }}>
            <div className="ppi"><h3><Check />Maximaal 6 personen</h3><p>Kleine groep betekent meer aandacht van de coach en beter zicht op je techniek.</p></div>
            <div className="ppi"><h3><Check />Samen trainen, samen groeien</h3><p>De energie van een groep motiveert je om net dat beetje extra te geven.</p></div>
            <div className="ppi"><h3><Check />Programma op maat</h3><p>Je schema bouwt op over weken en maanden. Wat je in week één doet, is de basis voor wat je in maand drie kunt.</p></div>
            <div className="ppi"><h3><Check />Voordeliger dan personal training</h3><p>Profiteer van persoonlijke begeleiding tegen een lagere prijs door de kosten te delen.</p></div>
          </div>
        </div>
      </section>

      <section className="sec sec--white">
        <div className="wrap">
          <div className="center"><h2 className="sec-title">Veelgestelde vragen</h2></div>
          <div className="faq" style={{ marginTop: 8 }}>
            <details open><summary>Wat is Small Group Training bij CrossFit Alkmaar?<span className="ic"><Plus /></span></summary><div className="body">Semi personal training in een vaste groep van maximaal 6 personen. Je krijgt persoonlijke aandacht van de coach gecombineerd met de motivatie van samen trainen.</div></details>
            <details><summary>Wat kost Small Group Training?<span className="ic"><Plus /></span></summary><div className="body">Onze tarieven voor BUILD Small Group Training bespreken we tijdens je gratis kennismaking. Inclusief groepslessen en een programma op maat. Maandelijks opzegbaar.</div></details>
            <details><summary>Wat is het verschil met groepslessen?<span className="ic"><Plus /></span></summary><div className="body">Bij Small Group Training train je in een vaste groep van max 6 (i.p.v. 12), met een programma op maat en meer persoonlijke aandacht. Het is de tussenstap tussen <Link href="/groepslessen">groepslessen</Link> en <Link href="/personal-training">personal training</Link>.</div></details>
          </div>
        </div>
      </section>

      <section className="sec page-cta" style={{ ["--cta-photo" as string]: "url('/redesign/assets/header-sgt.jpg')", backgroundPosition: "center 8%" } as React.CSSProperties}>
        <div className="wrap">
          <h2>Klaar om te starten?</h2>
          <p>Kom vrijblijvend kennismaken en ontdek of Small Group Training bij jou past.</p>
          <a className="btn btn--gold btn--lg" href="#" onClick={openModal("Plan je kennismaking", "Klaar om te starten")}>Plan je kennismaking</a>
        </div>
      </section>
    </>
  );
}
