"use client";

import { useLeadModal } from "../components/redesign/LeadModalContext";
import YouTubeEmbed from "../components/redesign/YouTubeEmbed";

const VIDEOS = [
  { id: "EIWOUtYAl7g", nm: "Chris", q: "'CrossFit is veel toegankelijker dan aan machines trekken in een sportschool'" },
  { id: "GCUpJQJJ8s0", nm: "Malou", q: "'Meer gaan beseffen hoe fijn het is om lekker in je vel te zitten'" },
  { id: "SKchVCAIx80", nm: "Steven", q: "'Houding en techniek, daar zijn de trainers hier ongelooflijk goed in'" },
  { id: "TTKyTPDzau0", nm: "Jeanine", q: "'Toen ik hier voor het eerst kwam dacht ik: dit is het!'" },
  { id: "PuLFkjD_quY", nm: "Aaike", q: "'De sfeer is gewoon super goed en de trainers zijn van een goed niveau!'" },
  { id: "0-XtIea19I0", nm: "Bert", q: "'Ik had niet verwacht dat ik het zó leuk zou vinden'" },
  { id: "BkYbL7jvYjY", nm: "Paula", q: "'Die zware boodschappentassen? Dat gaat nu gewoon een stuk beter!'" },
  { id: "1qhbmRPtysU", nm: "Jarrald", q: "'Lang sponsor geweest van sportscholen, nu 20 kilo afgevallen'" },
  { id: "xLOHro8eJZM", nm: "Maarten", q: "'CFA is voor mij een veilige haven'" },
  { id: "7_p0gpFtEvk", nm: "Lisette", q: "'Ik voel me sindsdien een stuk fitter!'" },
  { id: "fI6KBasjzaA", nm: "Simon", q: "'Je ziet mensen bij iedere workout fitter en sterker worden'" },
  { id: "a4ENPMXSTX8", nm: "Simone", q: "'Het zijn gewoon allemaal leuke mensen. Iedereen motiveert elkaar.'" },
  { id: "RBIMMk4WVj8", nm: "Souad", q: "'Vooral denken in mogelijkheden'" },
  { id: "HlqFX84ue3o", nm: "Tim", q: "'Ik voel me fit en m\\'n hartslag in rust is ook omlaaggegaan'" },
  { id: "R0ARPbmxRSg", nm: "Wilco", q: "'Het heeft m\\'n wereld compleet veranderd'" },
  { id: "9v3ijzMvgts", nm: "Harm", q: "'Ik hoef niet na te denken wat ik moet doen'" },
  { id: "jIZpGVRIIyI", nm: "Renze", q: "'Ik houd niet van fitness, dat vind ik veel te saai'" },
];

const ROT = [-3, 2.5, -2, 3, -2.5, 2, -3.5, 1.5, -2, 3, -1.5, 2.5, -3, 2];

export default function OnzeLedenPage() {
  const { open } = useLeadModal();
  const openModal = (source: string, section: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    open({ source, section, variant: "kennismaking" });
  };

  return (
    <>
      <style>{`
        .vwall { display: flex; flex-wrap: wrap; justify-content: center; align-items: flex-start; gap: clamp(22px,2.8vw,40px); margin-top: 40px; }
        .vwall .vp { width: 248px; max-width: 76vw; flex: 0 0 auto; position: relative; background: #fff; padding: 13px 13px 16px; border-radius: 3px; box-shadow: 0 12px 26px rgba(11,15,30,.18), 0 2px 6px rgba(0,0,0,.1); transition: transform .25s cubic-bezier(.2,.7,.3,1), box-shadow .25s; }
        .vwall .vp:hover { transform: rotate(0) translateY(-6px) scale(1.05) !important; box-shadow: 0 22px 44px rgba(11,15,30,.28); z-index: 5; }
        .vwall .video { position: relative; aspect-ratio: 9/16; border-radius: 1px; overflow: hidden; cursor: pointer; background: #000; }
        .vwall .video img { width: 100%; height: 100%; object-fit: cover; opacity: .92; }
        .vwall .video .play { position: absolute; inset: 0; display: grid; place-items: center; }
        .vwall .video .play span { width: 52px; height: 52px; border-radius: 50%; background: var(--hold); display: grid; place-items: center; box-shadow: 0 6px 24px rgba(0,0,0,.4); }
        .vwall .video .play svg { width: 21px; height: 21px; margin-left: 3px; }
        .vwall .nm { text-align: center; font-family: var(--font-head); font-weight: 700; text-transform: uppercase; letter-spacing: .06em; font-size: 15px; color: var(--cfa-ink); margin-top: 13px; }
        .vwall .vq { text-align: center; font-family: var(--font-body); font-style: italic; font-weight: 500; font-size: 13px; line-height: 1.4; color: var(--fg2); margin: 6px 4px 0; }
        @media (max-width: 600px) {
          .vwall { gap: 14px; margin-top: 28px; }
          .vwall .vp { width: 43vw; max-width: 43vw; padding: 8px 8px 11px; transform: none !important; }
          .vwall .nm { font-size: 13px; margin-top: 9px; letter-spacing: .04em; }
          .vwall .vq { font-size: 11.5px; margin-top: 5px; }
          .vwall .video .play span { width: 42px; height: 42px; }
          .vwall .video .play svg { width: 16px; height: 16px; }
        }
      `}</style>

      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/redesign/assets/header-onze-leden.jpg" alt="" style={{ objectPosition: "center 32%" }} />
        <div className="scrim" />
        <div className="wrap inner">
          <p className="eyebrow">Onze leden</p>
          <h1>Onze Leden</h1>
          <p className="lede">Mensen die hier al jaren trainen. En vertellen waarom ze blijven.</p>
          <div className="cta-row"><a className="btn btn--gold btn--lg" href="#" onClick={openModal("Plan je gratis kennismaking", "Hero")}>Plan je gratis kennismaking</a></div>
        </div>
      </section>

      <section className="sec sec--ivoor">
        <div className="wrap">
          <div className="center">
            <h2 className="sec-title">Bekijk de verhalen</h2>
            <p className="sec-sub">Van beginners tot gevorderden, van jong tot oud. Iedereen heeft zijn eigen reden om te trainen. Dit zijn hun verhalen.</p>
          </div>
          <div className="vwall">
            {VIDEOS.map((v, i) => (
              <div key={v.id} className="vp" style={{ transform: `rotate(${ROT[i % ROT.length]}deg)` }}>
                <div className="video"><YouTubeEmbed videoId={v.id} alt={v.nm} /></div>
                <div className="nm">{v.nm}</div>
                {v.q && <p className="vq">{v.q}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec page-cta" style={{ ["--cta-photo" as string]: "url('/redesign/assets/header-onze-leden.jpg')", backgroundPosition: "center 32%" } as React.CSSProperties}>
        <div className="wrap">
          <h2>Word ook onderdeel van CrossFit Alkmaar</h2>
          <p>Kom vrijblijvend kennismaken en ontdek of CrossFit Alkmaar bij jou past.</p>
          <a className="btn btn--gold btn--lg" href="#" onClick={openModal("Plan je kennismaking", "Word ook lid")}>Plan je kennismaking</a>
        </div>
      </section>
    </>
  );
}
