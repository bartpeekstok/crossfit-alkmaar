"use client";

import Link from "next/link";
import Script from "next/script";
import { useLeadModal } from "../components/redesign/LeadModalContext";
import ServiceSchema from "../components/ServiceSchema";
import YouTubeEmbed from "../components/redesign/YouTubeEmbed";

const Plus = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--cfa-blue)" strokeWidth="2.5" strokeLinecap="round">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const FAQS = [
  { q: "Wanneer is personal training beter dan groepslessen?", a: "Als je specifieke doelen hebt (revalidatie, wedstrijdvoorbereiding, sneller resultaat) of liever 1-op-1 traint. Bij CrossFit Alkmaar combineren veel leden personal training met groepslessen voor het beste van beide werelden." },
  { q: "Hoe ziet een personal training sessie eruit?", a: "Je trainer maakt een programma op maat, gebaseerd op jouw doelen en mogelijkheden. Elke sessie bevat warming-up, techniekwerk, de training en een cooling-down, volledig afgestemd op jou." },
  { q: "Wat is het verschil tussen personal training en small group training?", a: "Bij personal training train je 1-op-1. Bij small group training train je in een groep van max 6 met bijna dezelfde persoonlijke aandacht, maar voor een lagere prijs en met de extra motivatie van een groep." },
  { q: "Wat is het verschil tussen personal training en groepslessen?", a: "Bij personal training krijg je 1-op-1 begeleiding met een programma volledig afgestemd op jouw doelen. Bij groepslessen train je in kleine groepen van max 12." },
  { q: "Voor wie is personal training geschikt?", a: "Voor iedereen die extra aandacht wil: van beginners die de basis willen leren tot ervaren sporters met specifieke doelen." },
  { q: "Kan ik personal training combineren met groepslessen?", a: "Ja, dat raden we zelfs aan. Veel leden combineren 1 personal training sessie met 2-3 groepslessen per week." },
  { q: "Hoe lang duurt een personal training sessie?", a: "Een sessie duurt 60 minuten. Je coach bereidt de training voor op basis van je doelen en voortgang." },
];

export default function PersonalTrainingPage() {
  const { open } = useLeadModal();
  const openModal = (source: string, section: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    open({ source, section, variant: "kennismaking" });
  };

  return (
    <>
      <ServiceSchema name="Personal Training" description="1-op-1 personal training sessies. Volledig afgestemd op jouw doelen en niveau." url="https://www.crossfitalkmaar.com/personal-training" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "HealthClub", "@id": "https://www.crossfitalkmaar.com/#organization", name: "CrossFit Alkmaar", aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", bestRating: "5", worstRating: "1", ratingCount: "308", reviewCount: "308" } }) }} />

      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/redesign/assets/header-personal-training.jpg" alt="" style={{ objectPosition: "center 80%" }} />
        <div className="scrim" />
        <div className="wrap inner">
          <p className="eyebrow">Programma</p>
          <h1>Personal Training Alkmaar</h1>
          <p className="lede">Training die volledig om jou draait. Jouw doelen, jouw schema, jouw coach.</p>
          <div className="cta-row"><a className="btn btn--gold btn--lg" href="#" onClick={openModal("Plan je gratis kennismaking", "Hero")}>Plan je gratis kennismaking</a></div>
        </div>
      </section>

      <section className="sec sec--ivoor" style={{ paddingTop: "clamp(30px,4vw,48px)", paddingBottom: "clamp(16px,2.2vw,30px)" }}>
        <div className="wrap prose">
          <h2 className="sec-title" style={{ textAlign: "left", marginBottom: 18 }}>Personal training met een plan</h2>
          <p>Personal training is meer dan een trainer die naast je staat. Bij CrossFit Alkmaar krijg je een volledig trainingsplan, afgestemd op jouw doelen. Of je nu wilt afvallen, sterker worden, revalideren of je voorbereiden op een wedstrijd.</p>
          <p>Onze coaches zijn gecertificeerd en gespecialiseerd in functionele fitness. Ze kijken niet alleen naar je training, maar ook naar je bewegingskwaliteit, mobiliteit en, eventueel, je voeding.</p>
          <p>Je traint in een volledig uitgeruste box met professionele apparatuur. Geen wachten op machines, geen drukte. Gewoon jij en je coach.</p>
        </div>
      </section>

      <section className="sec sec--white">
        <div className="wrap">
          <div className="center"><h2 className="sec-title">Wat onze leden zeggen</h2></div>
          <div className="reviews-embed" style={{ marginTop: 24 }}>
            <Script src="https://ghl.crossfitalkmaar.com/reputation/assets/review-widget.js" strategy="lazyOnload" />
            <iframe className="lc_reviews_widget" src="https://ghl.crossfitalkmaar.com/reputation/widgets/review_widget/elOOWDMoCEHJO4WhphRj" style={{ minWidth: "100%", width: "100%", border: 0 }} scrolling="no" title="Google Reviews" />
          </div>
        </div>
      </section>

      <section className="sec sec--ivoor">
        <div className="wrap">
          <div className="center"><h2 className="sec-title">Trainingsopties</h2></div>
          <div className="ppg" style={{ marginTop: 34 }}>
            <div className="ppi"><h3>1-op-1 sessies</h3><p>Maximale aandacht en volledig gepersonaliseerd. Ideaal voor specifieke doelen, revalidatie of als je de voorkeur geeft aan privétraining.</p></div>
            <div className="ppi"><h3>Small Group (max 4)</h3><p>De persoonlijke aanpak van PT, maar samen met een klein groepje. Betaalbaar én effectief. Bekijk onze <Link href="/small-group-training">small group training</Link>.</p></div>
            <div className="ppi"><h3>Combi-abonnement</h3><p>Combineer personal training met groepslessen voor het beste van twee werelden. Persoonlijke aandacht én de groepsenergie.</p></div>
            <div className="ppi"><h3>Flexibel plannen</h3><p>Plan je sessies op tijden die jou uitkomen. Wij passen ons aan jouw agenda aan, niet andersom.</p></div>
          </div>
        </div>
      </section>

      <section className="sec sec--white">
        <div className="wrap prose">
          <h2 className="sec-title" style={{ textAlign: "left", marginBottom: 18 }}>Voor wie is personal training?</h2>
          <p>Voor iedereen die meer wil dan een standaard sportschool. Of je nu net begint via de Kickstart, terugkomt na een blessure, of al jaren traint maar een nieuw doel hebt: personal training geeft je de begeleiding die het verschil maakt.</p>
        </div>
      </section>

      <section className="sec sec--ivoor">
        <div className="wrap">
          <div className="center"><h2 className="sec-title">Wanneer kies je personal training?</h2></div>
          <div className="faq" style={{ marginTop: 8 }}>
            <details open><summary>Wanneer is personal training beter dan groepslessen?<span className="ic"><Plus /></span></summary><div className="body">Als je specifieke doelen hebt (revalidatie, wedstrijdvoorbereiding, sneller resultaat) of liever 1-op-1 traint. Bij CrossFit Alkmaar combineren veel leden personal training met <Link href="/groepslessen">groepslessen</Link> voor het beste van beide werelden.</div></details>
            <details><summary>Hoe ziet een personal training sessie eruit?<span className="ic"><Plus /></span></summary><div className="body">Je trainer maakt een programma op maat, gebaseerd op jouw doelen en mogelijkheden. Elke sessie bevat warming-up, techniekwerk, de training en een cooling-down, volledig afgestemd op jou.</div></details>
            <details><summary>Wat is het verschil tussen personal training en small group training?<span className="ic"><Plus /></span></summary><div className="body">Bij personal training train je 1-op-1. Bij <Link href="/small-group-training">small group training</Link> train je in een groep van max 6 met bijna dezelfde persoonlijke aandacht, maar voor een lagere prijs en met de extra motivatie van een groep.</div></details>
          </div>
        </div>
      </section>

      <section className="sec sec--white">
        <div className="wrap">
          <div className="vpair">
            <div className="vp"><div className="video"><YouTubeEmbed videoId="HlqFX84ue3o" alt="Tim" /></div><div className="nm">Tim</div><p className="vq">&apos;Ik voel me fit en m&apos;n hartslag in rust is ook omlaaggegaan.&apos;</p></div>
            <div className="vp"><div className="video"><YouTubeEmbed videoId="xLOHro8eJZM" alt="Maarten" /></div><div className="nm">Maarten</div><p className="vq">&apos;CFA is voor mij een veilige haven.&apos;</p></div>
          </div>
          <p className="more" style={{ textAlign: "center", marginTop: 22 }}><Link href="/onze-leden">Bekijk meer verhalen van onze leden →</Link></p>
        </div>
      </section>

      <section className="sec sec--ivoor">
        <div className="wrap">
          <div className="center"><h2 className="sec-title">Veelgestelde vragen</h2></div>
          <div className="faq" style={{ marginTop: 8 }}>
            <details open><summary>Wat is het verschil tussen personal training en groepslessen?<span className="ic"><Plus /></span></summary><div className="body">Bij personal training krijg je 1-op-1 begeleiding met een programma volledig afgestemd op jouw doelen. Bij <Link href="/groepslessen">groepslessen</Link> train je in kleine groepen van max 12.</div></details>
            <details><summary>Voor wie is personal training geschikt?<span className="ic"><Plus /></span></summary><div className="body">Voor iedereen die extra aandacht wil: van beginners die de basis willen leren tot ervaren sporters met specifieke doelen.</div></details>
            <details><summary>Kan ik personal training combineren met groepslessen?<span className="ic"><Plus /></span></summary><div className="body">Ja, dat raden we zelfs aan. Veel leden combineren 1 personal training sessie met 2-3 <Link href="/groepslessen">groepslessen</Link> per week.</div></details>
            <details><summary>Hoe lang duurt een personal training sessie?<span className="ic"><Plus /></span></summary><div className="body">Een sessie duurt 60 minuten. Je coach bereidt de training voor op basis van je doelen en voortgang.</div></details>
          </div>
        </div>
      </section>

      <section className="sec page-cta" style={{ ["--cta-photo" as string]: "url('/redesign/assets/header-personal-training.jpg')", backgroundPosition: "center 80%" } as React.CSSProperties}>
        <div className="wrap">
          <h2>Start met personal training</h2>
          <p>Plan een gratis kennismakingsgesprek en ontdek wat personal training voor jou kan betekenen.</p>
          <a className="btn btn--gold btn--lg" href="#" onClick={openModal("Plan je gratis kennismaking", "Klaar om te starten")}>Plan je gratis kennismaking</a>
        </div>
      </section>
    </>
  );
}
