"use client";

import Link from "next/link";
import Script from "next/script";
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

export default function HyroxAlkmaarPage() {
  const { open } = useLeadModal();
  const openModal = (source: string, section: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    open({ source, section, variant: "kennismaking" });
  };

  return (
    <>
      <ServiceSchema
        name="HYROX Alkmaar - CrossFit Alkmaar"
        description="Officiële HYROX gym in Alkmaar. Training, events en alles wat je nodig hebt voor HYROX bij CrossFit Alkmaar."
        url="https://www.crossfitalkmaar.com/hyrox-alkmaar"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
        { "@type": "Question", name: "Wat is HYROX?", acceptedAnswer: { "@type": "Answer", text: "HYROX is een fitness race waarbij je 8 rondes van 1 kilometer hardlopen afwisselt met 8 functionele workoutstations. Het is geschikt voor alle niveaus en je kunt solo of als duo (Doubles) meedoen." } },
        { "@type": "Question", name: "Is CrossFit Alkmaar een officiële HYROX gym?", acceptedAnswer: { "@type": "Answer", text: "Ja, CrossFit Alkmaar is een officiële HYROX gym met alle benodigde apparatuur, specifieke HYROX-lessen en ervaren coaches." } },
        { "@type": "Question", name: "Kan ik bij CrossFit Alkmaar trainen voor HYROX als beginner?", acceptedAnswer: { "@type": "Answer", text: "Absoluut. Onze HYROX-trainingen zijn geschikt voor alle niveaus. Start met de Kickstart en bouw in je eigen tempo op naar je eerste HYROX race." } },
        { "@type": "Question", name: "Welke HYROX events organiseert CrossFit Alkmaar?", acceptedAnswer: { "@type": "Answer", text: "We organiseren regelmatig HYROX Physical Fitness Tests (PFT) en HYROX Simulaties. De eerstvolgende Simulaties zijn op 22 augustus en 24 oktober 2026." } },
      ] }) }} />

      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/images/hyrox-alkmaar-header.jpg" alt="" style={{ objectPosition: "center 22%" }} />
        <div className="scrim" />
        <div className="wrap inner">
          <p className="eyebrow">Programma</p>
          <h1>HYROX Alkmaar</h1>
          <p className="lede">Officiële HYROX gym. Training, events en de beste voorbereiding op jouw eerste (of snelste) HYROX race.</p>
          <div className="cta-row"><a className="btn btn--gold btn--lg" href="#" onClick={openModal("Plan je gratis kennismaking", "Hero")}>Plan je gratis kennismaking</a></div>
        </div>
      </section>

      <section className="sec sec--ivoor" style={{ paddingTop: "clamp(30px,4vw,48px)", paddingBottom: "clamp(16px,2.2vw,30px)" }}>
        <div className="wrap prose">
          <h2 className="sec-title" style={{ textAlign: "left", marginBottom: 18 }}>Waarom CrossFit Alkmaar voor HYROX?</h2>
          <p>CrossFit Alkmaar is een <Link href="/hyrox-gym-alkmaar">officiële HYROX gym</Link>. We hebben alle apparatuur die je op racedag tegenkomt: sleds, SkiErg, roeiers, sandbags, wall balls en kettlebells.</p>
          <p>Maar het verschil zit in de coaching. Onze trainers kennen de HYROX-race en helpen je met pacing, strategie en techniek. Niet alleen voor de stations, maar ook voor de 8 kilometer hardlopen ertussen.</p>
          <p>En je traint niet alleen. Meerdere leden bereiden zich voor op HYROX, als singles, doubles en relay teams. Samen trainen maakt de <Link href="/hyrox-voorbereiding-alkmaar">HYROX-voorbereiding</Link> leuker én effectiever.</p>
        </div>
      </section>

      <section className="sec sec--white">
        <div className="wrap">
          <div className="center"><h2 className="sec-title">Aankomende HYROX events</h2></div>
          <div className="pp-grid" style={{ marginTop: 34 }}>
            <div className="pp-item"><h3><Check />HYROX Prep: 8 weken naar Utrecht</h3><p>Gericht voorbereidingsprogramma op HYROX Utrecht (26 t/m 30 november). Maximaal 16 plekken. <Link href="/hyrox-prep">Zet je op de wachtlijst →</Link></p></div>
            <div className="pp-item"><h3><Check />Simulatie: za 22 augustus</h3><p>Volledige HYROX race: 8x 1 km run + 8 stations. Voor beginners én ervaren atleten. <Link href="/hyrox-simulatie-alkmaar">Meer info en inschrijven →</Link></p></div>
            <div className="pp-item"><h3><Check />Simulatie: za 24 oktober</h3><p>Volledige HYROX race: 8x 1 km run + 8 stations. Voor beginners én ervaren atleten. <Link href="/hyrox-simulatie-24-oktober">Meer info en inschrijven →</Link></p></div>
            <div className="pp-item"><h3><Check />HYROX PFT</h3><p>De officiële Physical Fitness Test: meet waar je staat en volg je progressie richting racedag. <Link href="/hyrox-pft-alkmaar">Meer over de PFT →</Link></p></div>
            <div className="pp-item"><h3><Check />Alle events</h3><p>Van simulaties tot community-events: bekijk de volledige agenda. <Link href="/events">Naar de eventkalender →</Link></p></div>
          </div>
        </div>
      </section>

      <section className="sec sec--ivoor">
        <div className="wrap">
          <div className="center"><h2 className="sec-title">Meer over HYROX bij CrossFit Alkmaar</h2></div>
          <div className="pp-grid" style={{ marginTop: 34 }}>
            <div className="pp-item"><h3><Check />HYROX Training</h3><p>Specifieke HYROX-lessen en trainingsopbouw, elke week op het rooster. <Link href="/hyrox-training-alkmaar">Bekijk de trainingen →</Link></p></div>
            <div className="pp-item"><h3><Check />HYROX Voorbereiding</h3><p>Van nul naar racedag: zo bouw je je voorbereiding slim op. <Link href="/hyrox-voorbereiding-alkmaar">Lees de aanpak →</Link></p></div>
            <div className="pp-item"><h3><Check />HYROX Gym</h3><p>Alle apparatuur en faciliteiten op een rij, van sleds tot SkiErgs. <Link href="/hyrox-gym-alkmaar">Bekijk de gym →</Link></p></div>
            <div className="pp-item"><h3><Check />Groepslessen</h3><p>De HYROX-les is één van onze vaste lestypes, naast CrossFit, Strength en Flex Friday. <Link href="/groepslessen">Naar de groepslessen →</Link></p></div>
          </div>
        </div>
      </section>

      <section className="sec sec--white">
        <div className="wrap">
          <div className="vpair">
            <div className="vp"><div className="video"><YouTubeEmbed videoId="G9HkOnSsKg8" alt="Malou" /></div><div className="nm">Malou</div><p className="vq">&apos;Meer gaan beseffen hoe fijn het is om lekker in je vel te zitten.&apos;</p></div>
            <div className="vp"><div className="video"><YouTubeEmbed videoId="fI6KBasjzaA" alt="Simon" /></div><div className="nm">Simon</div><p className="vq">&apos;Je ziet mensen bij iedere workout fitter en sterker worden.&apos;</p></div>
          </div>
        </div>
      </section>

      <section className="sec sec--ivoor">
        <div className="wrap">
          <Script src="https://ghl.crossfitalkmaar.com/reputation/assets/review-widget.js" strategy="lazyOnload" />
          <iframe
            className="lc_reviews_widget"
            src="https://ghl.crossfitalkmaar.com/reputation/widgets/review_widget/elOOWDMoCEHJO4WhphRj"
            frameBorder="0"
            scrolling="no"
            style={{ minWidth: "100%", width: "100%" }}
            title="Google Reviews"
          ></iframe>
        </div>
      </section>

      <section className="sec sec--white">
        <div className="wrap">
          <div className="center"><h2 className="sec-title">Veelgestelde vragen</h2></div>
          <div className="faq" style={{ marginTop: 8 }}>
            <details open><summary>Wat is HYROX?<span className="ic"><Plus /></span></summary><div className="body">HYROX is een fitness race waarbij je 8 rondes van 1 kilometer hardlopen afwisselt met 8 functionele workoutstations. Het is geschikt voor alle niveaus en je kunt solo of als duo (Doubles) meedoen.</div></details>
            <details><summary>Is CrossFit Alkmaar een officiële HYROX gym?<span className="ic"><Plus /></span></summary><div className="body">Ja, CrossFit Alkmaar is een officiële HYROX gym met alle benodigde apparatuur, specifieke HYROX-lessen en ervaren coaches.</div></details>
            <details><summary>Kan ik als beginner trainen voor HYROX?<span className="ic"><Plus /></span></summary><div className="body">Absoluut. Start met de <Link href="/kickstart">Kickstart</Link> en bouw in je eigen tempo op naar je eerste HYROX race.</div></details>
            <details><summary>Welke HYROX events organiseert CrossFit Alkmaar?<span className="ic"><Plus /></span></summary><div className="body">We organiseren regelmatig HYROX Physical Fitness Tests en Simulaties. De eerstvolgende Simulaties zijn op 22 augustus en 24 oktober 2026.</div></details>
          </div>
        </div>
      </section>

      <section className="sec page-cta" style={{ ["--cta-photo" as string]: "url('/images/hyrox-alkmaar-header.jpg')", backgroundPosition: "center 22%" } as React.CSSProperties}>
        <div className="wrap">
          <h2>Start met HYROX bij CrossFit Alkmaar</h2>
          <p>Plan een gratis kennismakingsgesprek en ontdek hoe wij je kunnen helpen met je HYROX-doelen.</p>
          <a className="btn btn--gold btn--lg" href="#" onClick={openModal("Plan je gratis kennismaking", "Footer CTA")}>Plan je gratis kennismaking</a>
        </div>
      </section>
    </>
  );
}
