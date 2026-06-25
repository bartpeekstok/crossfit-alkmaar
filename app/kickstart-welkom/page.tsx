import TrackedYouTubeEmbed from "../components/TrackedYouTubeEmbed";

const Plus = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--cfa-blue)" strokeWidth="2.5" strokeLinecap="round">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

// TODO: vervang door de echte YouTube-ID zodra de video klaar is.
const VIDEO_ID = "VIDEO_ID_PLACEHOLDER";

export default function KickstartWelkomPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/redesign/assets/header-community.jpg" alt="" style={{ objectPosition: "center 35%" }} />
        <div className="scrim" />
        <div className="wrap inner">
          <h1>Welkom bij je Kickstart</h1>
          <p className="lede">
            Over een paar dagen begin je. Op deze pagina bereiden we je in een paar minuten voor, zodat je
            vol vertrouwen aan je eerste training begint. [PLACEHOLDER intro-zin, nog aanpassen]
          </p>
        </div>
      </section>

      {/* VIDEO */}
      <section className="sec sec--ivoor">
        <div className="wrap">
          <div className="center reveal">
            <h2 className="sec-title">Bekijk dit eerst</h2>
            <p className="sec-sub">
              [PLACEHOLDER] Korte uitleg waar de video over gaat: wat je kunt verwachten, wat je meeneemt en
              hoe je je voorbereidt op je eerste week.
            </p>
          </div>
          <div
            className="reveal"
            style={{
              maxWidth: 860,
              margin: "28px auto 0",
              aspectRatio: "16 / 9",
              borderRadius: "var(--r-lg)",
              overflow: "hidden",
              boxShadow: "var(--sh-3)",
              background: "#000",
            }}
          >
            <TrackedYouTubeEmbed videoId={VIDEO_ID} title="Kickstart voorbereiding" autoplay={false} />
          </div>
        </div>
      </section>

      {/* TEKSTSECTIE 1 */}
      <section className="sec sec--white">
        <div className="wrap">
          <div className="center reveal">
            <h2 className="sec-title">[Placeholder kop 1]</h2>
            <p className="sec-sub">
              [PLACEHOLDER] Lorem ipsum tekstsectie. Hier komt straks bijvoorbeeld wat je de eerste week kunt
              verwachten, hoe laat je er moet zijn en wat je aantrekt. Vervang deze tekst later.
            </p>
            <p className="sec-sub">
              [PLACEHOLDER] Tweede alinea met meer details. We bepalen samen nog hoeveel tekstsecties je
              precies wilt; dit is er alvast eentje als voorbeeld.
            </p>
          </div>
        </div>
      </section>

      {/* TEKSTSECTIE 2 */}
      <section className="sec sec--ivoor">
        <div className="wrap">
          <div className="center reveal">
            <h2 className="sec-title">[Placeholder kop 2]</h2>
            <p className="sec-sub">
              [PLACEHOLDER] Nog een tekstsectie. Denk aan praktische info, tips voor je eerste training, of
              wat je vooraf kunt doen. Vul later in met de echte tekst.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec sec--white">
        <div className="wrap">
          <div className="center reveal">
            <h2 className="sec-title">Veelgestelde vragen</h2>
            <p className="sec-sub">[PLACEHOLDER] Korte intro boven de FAQ, of weghalen.</p>
          </div>
          <div className="faq">
            <details open className="reveal">
              <summary>[Placeholder vraag 1]<span className="ic"><Plus /></span></summary>
              <div className="body">[PLACEHOLDER antwoord 1] Vervang dit met het echte antwoord.</div>
            </details>
            <details className="reveal">
              <summary>[Placeholder vraag 2]<span className="ic"><Plus /></span></summary>
              <div className="body">[PLACEHOLDER antwoord 2] Vervang dit met het echte antwoord.</div>
            </details>
            <details className="reveal">
              <summary>[Placeholder vraag 3]<span className="ic"><Plus /></span></summary>
              <div className="body">[PLACEHOLDER antwoord 3] Vervang dit met het echte antwoord.</div>
            </details>
            <details className="reveal">
              <summary>[Placeholder vraag 4]<span className="ic"><Plus /></span></summary>
              <div className="body">[PLACEHOLDER antwoord 4] Vervang dit met het echte antwoord.</div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
