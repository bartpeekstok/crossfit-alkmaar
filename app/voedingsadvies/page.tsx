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

export default function VoedingsadviesPage() {
  const { open } = useLeadModal();
  const openModal = (source: string, section: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    open({ source, section, variant: "kennismaking" });
  };

  return (
    <>
      <ServiceSchema name="Voedingsadvies" description="Persoonlijk voedingsadvies dat aansluit op je training en past in je dagelijks leven." url="https://www.crossfitalkmaar.com/voedingsadvies" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
        { "@type": "Question", name: "Wat houdt het voedingsadvies bij CrossFit Alkmaar in?", acceptedAnswer: { "@type": "Answer", text: "Persoonlijk voedingsadvies afgestemd op jouw doelen en levensstijl. Geen strenge diëten maar praktische handvatten die aansluiten op je trainingsschema en passen in een druk leven." } },
        { "@type": "Question", name: "Moet ik lid zijn om voedingsadvies te krijgen?", acceptedAnswer: { "@type": "Answer", text: "Voedingsadvies is beschikbaar als aanvulling op je lidmaatschap. De combinatie van training en voeding geeft het beste resultaat." } },
      ] }) }} />

      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/redesign/assets/header-voedingsadvies.jpg" alt="" />
        <div className="scrim" />
        <div className="wrap inner">
          <p className="eyebrow">Programma</p>
          <h1>Voedingsadvies</h1>
          <p className="lede">Voeding die past bij hoe je écht leeft, niet bij een schema dat na drie weken instort.</p>
          <div className="cta-row"><a className="btn btn--gold btn--lg" href="#" onClick={openModal("Plan je gratis kennismaking", "Hero")}>Plan je gratis kennismaking</a></div>
        </div>
      </section>

      <section className="sec sec--ivoor" style={{ paddingTop: "clamp(30px,4vw,48px)", paddingBottom: "clamp(16px,2.2vw,30px)" }}>
        <div className="wrap prose">
          <h2 className="sec-title" style={{ textAlign: "left", marginBottom: 18 }}>Waarom Voedingsadvies?</h2>
          <p>Je kunt nog zo hard trainen, zonder de juiste voeding bereik je nooit je volledige potentieel. Of je nu wilt afvallen, spiermassa wilt opbouwen of gewoon fitter wilt worden, voeding speelt een cruciale rol.</p>
          <p>Ons voedingsadvies is geen streng dieet, maar een praktische aanpak die past bij jouw levensstijl. We kijken naar wat je nu eet, wat je doelen zijn en hoe we stap voor stap verbeteringen kunnen maken.</p>
          <p>Geen ingewikkelde macro&apos;s tellen of onrealistische beperkingen. Gewoon eerlijk advies dat werkt in het echte leven.</p>
        </div>
      </section>

      <section className="sec sec--white">
        <div className="wrap">
          <div className="center"><h2 className="sec-title">Echte verhalen van leden</h2></div>
          <div className="vpair" style={{ marginTop: 34 }}>
            <div className="vp"><div className="video"><YouTubeEmbed videoId="1qhbmRPtysU" alt="Jarrald" /></div><div className="nm">Jarrald</div><p className="vq">&apos;Lang sponsor geweest van sportscholen waar ik niet naartoe ging, nu 20 kilo afgevallen.&apos;</p></div>
            <div className="vp"><div className="video"><YouTubeEmbed videoId="a4ENPMXSTX8" alt="Simone" /></div><div className="nm">Simone</div><p className="vq">&apos;Het zijn gewoon allemaal leuke mensen. Iedereen motiveert elkaar.&apos;</p></div>
          </div>
        </div>
      </section>

      <section className="sec sec--ivoor">
        <div className="wrap">
          <div className="center"><h2 className="sec-title">Wat je krijgt</h2></div>
          <div className="ppg" style={{ marginTop: 34 }}>
            <div className="ppi"><h3><Check />Persoonlijk voedingsplan</h3><p>Een plan dat past bij jouw doelen, voorkeuren en levensstijl. Geen one-size-fits-all aanpak.</p></div>
            <div className="ppi"><h3><Check />Praktische tips</h3><p>Concrete handvatten die je direct kunt toepassen. Van boodschappenlijstjes tot meal prep ideeën.</p></div>
            <div className="ppi"><h3><Check />Regelmatige check-ins</h3><p>We volgen je voortgang en passen het plan aan waar nodig. Zo blijf je op koers.</p></div>
            <div className="ppi"><h3><Check />Combinatie met training</h3><p>Het voedingsadvies sluit perfect aan op je trainingsschema voor optimale resultaten.</p></div>
          </div>
        </div>
      </section>

      <section className="sec sec--white">
        <div className="wrap">
          <div className="center"><h2 className="sec-title">Veelgestelde vragen</h2></div>
          <div className="faq" style={{ marginTop: 8 }}>
            <details open><summary>Wat houdt het voedingsadvies bij CrossFit Alkmaar in?<span className="ic"><Plus /></span></summary><div className="body">Persoonlijk voedingsadvies afgestemd op jouw doelen en levensstijl. Geen strenge diëten maar praktische handvatten die aansluiten op je trainingsschema en passen in een druk leven.</div></details>
            <details><summary>Moet ik lid zijn om voedingsadvies te krijgen?<span className="ic"><Plus /></span></summary><div className="body">Voedingsadvies is beschikbaar als aanvulling op je lidmaatschap. De combinatie van training en voeding geeft het beste resultaat.</div></details>
          </div>
        </div>
      </section>

      <section className="sec page-cta" style={{ ["--cta-photo" as string]: "url('/redesign/assets/header-voedingsadvies.jpg')" } as React.CSSProperties}>
        <div className="wrap">
          <h2>Klaar om te starten?</h2>
          <p>Kom vrijblijvend kennismaken en ontdek hoe voedingsadvies jou kan helpen je doelen te bereiken.</p>
          <a className="btn btn--gold btn--lg" href="#" onClick={openModal("Plan je kennismaking", "Klaar om te starten")}>Plan je kennismaking</a>
        </div>
      </section>
    </>
  );
}
