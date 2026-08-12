"use client";

import { useLeadModal } from "../components/redesign/LeadModalContext";
import ServiceSchema from "../components/ServiceSchema";
import YouTubeEmbed from "../components/redesign/YouTubeEmbed";

export default function KickstartPage() {
  const { open } = useLeadModal();
  const maanden = [
    "januari", "februari", "maart", "april", "mei", "juni",
    "juli", "augustus", "september", "oktober", "november", "december",
  ];
  const volgendeMaand = maanden[(new Date().getMonth() + 1) % 12];

  const openModal = (source: string, section: string, variant: "kennismaking" | "kickstart" = "kickstart") => (e: React.MouseEvent) => {
    e.preventDefault();
    open({ source, section, variant });
  };

  return (
    <>
      <style>{`
        .kk-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: clamp(16px,2.2vw,24px); max-width: 880px; margin: 0 auto; }
        .kk-item { background: #fff; border: 1px solid var(--border); border-radius: var(--r-lg); box-shadow: var(--sh-1); padding: clamp(22px,2.6vw,30px); }
        .kk-item h3 { display: flex; gap: 11px; font-family: var(--font-head); font-weight: 700; text-transform: uppercase; font-size: 18px; letter-spacing: .01em; margin: 0 0 9px; color: var(--fg1); }
        .kk-item h3 svg { width: 22px; height: 22px; flex-shrink: 0; color: var(--go); }
        .kk-item p { font-family: var(--font-body); font-size: 15.5px; line-height: 1.55; color: var(--fg2); margin: 0; }
        @media (max-width: 720px) { .kk-grid { grid-template-columns: 1fr; } }
      `}</style>

      <ServiceSchema
        name="28 Day Kickstart"
        description="4 weken introductieprogramma voor beginners. Bouw een sterke basis op met begeleide trainingen en voedingsadvies."
        url="https://www.crossfitalkmaar.com/kickstart"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "Wat is de 28 Day Kickstart bij CrossFit Alkmaar?", acceptedAnswer: { "@type": "Answer", text: "Een introductieprogramma van 4 weken waarin je 12 keer traint in kleine groepen van max 6 personen. Je leert de basis van kracht- en conditietraining onder professionele begeleiding." } },
              { "@type": "Question", name: "Wat kost de 28 Day Kickstart?", acceptedAnswer: { "@type": "Answer", text: "Het tarief van de 28 Day Kickstart bespreken we tijdens je gratis kennismaking. Het programma bestaat uit 12 trainingen in 4 weken en een eindgesprek met advies over doorstroming." } },
              { "@type": "Question", name: "Is de Kickstart geschikt voor beginners?", acceptedAnswer: { "@type": "Answer", text: "Ja, de Kickstart is speciaal ontworpen voor mensen die (weer) willen starten met trainen. Je leert alles vanaf de basis in een kleine groep van max 6 personen." } },
              { "@type": "Question", name: "Wat gebeurt er na de Kickstart?", acceptedAnswer: { "@type": "Answer", text: "Na de Kickstart kun je doorstromen naar onze groepslessen of BUILD Small Group Training. Tijdens een afsluitend adviesgesprek kijken we samen wat het beste bij je past en bespreken we de bijbehorende tarieven." } },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthClub",
            "@id": "https://www.crossfitalkmaar.com/#organization",
            name: "CrossFit Alkmaar",
            aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", bestRating: "5", worstRating: "1", ratingCount: "308", reviewCount: "308" },
          }),
        }}
      />

      {/* HERO */}
      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/redesign/assets/header-kickstart.jpg" alt="" style={{ objectPosition: "center 20%" }} />
        <div className="scrim" />
        <div className="wrap inner">
          <p className="eyebrow">Programma</p>
          <h1>28 day kickstart</h1>
          <p className="lede">Hier begint iedereen. Niet als proefperiode, maar als fundament voor de jaren daarna.</p>
          <div className="cta-row">
            <a className="btn btn--gold btn--lg" href="#" onClick={openModal(`Claim je plek voor ${volgendeMaand}`, "Hero", "kickstart")}>Claim je plek voor {volgendeMaand}</a>
          </div>
        </div>
      </section>

      {/* WAT IS */}
      <section className="sec sec--ivoor" style={{ paddingTop: "clamp(30px,4vw,48px)", paddingBottom: "clamp(16px,2.2vw,30px)" }}>
        <div className="wrap prose">
          <h2 className="sec-title" style={{ textAlign: "left", marginBottom: 18 }}>Wat is de 28 day Kickstart?</h2>
          <p>De Kickstart is speciaal ontworpen voor drukke mensen die (weer) willen starten met trainen maar niet weten waar te beginnen. Wij maken trainen leuk, veilig en effectief. Zo leggen we een goede basis om op verder te bouwen.</p>
          <p>Je traint in een kleine groep van maximaal 6 personen, zodat je persoonlijke aandacht krijgt. We nemen de tijd om alles goed uit te leggen en te oefenen.</p>
          <p>De Kickstart is geen losse module, het is je start. Na vier weken weten we wat jouw niveau is, wat je nodig hebt, en hoe we je verder helpen: in small group training, in onze grotere groepslessen, met personal training, of een combinatie daarvan. Dat bespreken we samen aan het eind.</p>
        </div>
      </section>

      {/* VIDEO */}
      <section className="sec sec--white">
        <div className="wrap">
          <div className="vpair">
            <div className="vp">
              <div className="video"><YouTubeEmbed videoId="SKchVCAIx80" alt="Steven" /></div>
              <div className="nm">Steven</div>
              <p className="vq">&apos;Houding en techniek zijn heel belangrijk, en daar zijn de trainers hier ongelooflijk goed in.&apos;</p>
            </div>
            <div className="vp">
              <div className="video"><YouTubeEmbed videoId="1qhbmRPtysU" alt="Jarrald" /></div>
              <div className="nm">Jarrald</div>
              <p className="vq">&apos;Lang sponsor geweest van sportscholen waar ik niet naartoe ging, nu 20 kilo afgevallen.&apos;</p>
            </div>
          </div>
        </div>
      </section>

      {/* WAT JE KRIJGT */}
      <section className="sec sec--ivoor">
        <div className="wrap">
          <div className="center"><h2 className="sec-title">Wat je krijgt</h2></div>
          <div className="kk-grid" style={{ marginTop: 34 }}>
            <div className="kk-item"><h3><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>12 trainingen in 4 weken</h3><p>Drie trainingen per week op vaste tijden, zodat het in je schema past.</p></div>
            <div className="kk-item"><h3><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Kleine groepen (max 6)</h3><p>Maximaal 6 personen per groep voor persoonlijke aandacht.</p></div>
            <div className="kk-item"><h3><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Een goede basis</h3><p>Je leert de basis van kracht- en conditietraining en we laten je ervaren dat trainen leuk is!</p></div>
            <div className="kk-item"><h3><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Basisleefstijladvies</h3><p>Naast training krijg je tips over voeding en herstel.</p></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec sec--white">
        <div className="wrap">
          <div className="center"><h2 className="sec-title">Veelgestelde vragen</h2></div>
          <div className="faq" style={{ marginTop: 8 }}>
            <details open>
              <summary>Wat is de 28 Day Kickstart bij CrossFit Alkmaar?<span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="var(--cfa-blue)" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg></span></summary>
              <div className="body">Een introductieprogramma van 4 weken waarin je 12 keer traint in kleine groepen van max 6 personen. Je leert de basis van kracht- en conditietraining onder professionele begeleiding.</div>
            </details>
            <details>
              <summary>Wat kost de 28 Day Kickstart?<span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="var(--cfa-blue)" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg></span></summary>
              <div className="body">Het tarief van de 28 Day Kickstart bespreken we tijdens je gratis kennismaking. Het programma bestaat uit 12 trainingen in 4 weken en een eindgesprek met advies over doorstroming.</div>
            </details>
            <details>
              <summary>Is de Kickstart geschikt voor beginners?<span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="var(--cfa-blue)" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg></span></summary>
              <div className="body">Ja, de Kickstart is speciaal ontworpen voor mensen die (weer) willen starten met trainen. Je leert alles vanaf de basis in een kleine groep van max 6 personen.</div>
            </details>
            <details>
              <summary>Wat gebeurt er na de Kickstart?<span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="var(--cfa-blue)" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg></span></summary>
              <div className="body">Na de Kickstart kun je doorstromen naar onze groepslessen of BUILD Small Group Training. Tijdens een afsluitend adviesgesprek kijken we samen wat het beste bij je past en bespreken we de bijbehorende tarieven.</div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec page-cta" style={{ ["--cta-photo" as string]: "url('/redesign/assets/header-kickstart.jpg')", backgroundPosition: "center 20%" } as React.CSSProperties}>
        <div className="wrap">
          <h2>Start in {volgendeMaand}</h2>
          <p>De Kickstart van {volgendeMaand} heeft nog plekken beschikbaar.</p>
          <a className="btn btn--gold btn--lg" href="#" onClick={openModal("Meld je aan", "Klaar om te starten", "kickstart")}>Meld je aan</a>
        </div>
      </section>
    </>
  );
}
