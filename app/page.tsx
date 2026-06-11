"use client";

import "./styles/page-home.css";
import VideoSchema from "./components/VideoSchema";
import Script from "next/script";
import { trackOutboundLink } from "./lib/analytics";
import { useLeadModal } from "./components/redesign/LeadModalContext";
import YouTubeEmbed from "./components/redesign/YouTubeEmbed";
import ScrollReveal from "./components/redesign/ScrollReveal";

const Star = () => (
  <svg viewBox="0 0 24 24" fill="#E0A325">
    <path d="M12 2l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.6 6.1 20.8l1.2-6.6L2.5 9l6.6-.9z" />
  </svg>
);

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#1F9D55" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const Plus = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--cfa-blue)" strokeWidth="2.5" strokeLinecap="round">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export default function HomePage() {
  const { open } = useLeadModal();

  const openModal = (source: string, section: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    open({ source, section, variant: "kennismaking" });
  };

  return (
    <>
      <ScrollReveal />
      {/* Video Schema voor SEO */}
      <VideoSchema
        name="Chris - lid van CrossFit Alkmaar"
        description="Chris deelt waarom CrossFit toegankelijker is dan een gewone sportschool."
        thumbnailUrl="https://img.youtube.com/vi/EIWOUtYAl7g/maxresdefault.jpg"
        uploadDate="2025-01-01T12:00:00+01:00"
        embedUrl="https://www.youtube.com/embed/EIWOUtYAl7g"
        duration="PT1M30S"
      />
      <VideoSchema
        name="Steven - lid van CrossFit Alkmaar"
        description="Steven over houding en techniek bij CrossFit Alkmaar."
        thumbnailUrl="https://img.youtube.com/vi/SKchVCAIx80/maxresdefault.jpg"
        uploadDate="2025-01-01T12:00:00+01:00"
        embedUrl="https://www.youtube.com/embed/SKchVCAIx80"
        duration="PT1M30S"
      />
      <VideoSchema
        name="Malou - lid van CrossFit Alkmaar"
        description="Malou over hoe sporten bij CrossFit Alkmaar haar leven heeft veranderd."
        thumbnailUrl="https://img.youtube.com/vi/GCUpJQJJ8s0/maxresdefault.jpg"
        uploadDate="2025-01-01T12:00:00+01:00"
        embedUrl="https://www.youtube.com/embed/GCUpJQJJ8s0"
        duration="PT1M30S"
      />

      {/* HERO */}
      <section className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/redesign/assets/photo-hero-team.jpg" alt="Leden van CrossFit Alkmaar geven elkaar een high-five na een training" fetchPriority="high" />
        <div className="scrim"></div>
        <div className="badge">
          <div className="stars"><Star /><Star /><Star /><Star /><Star /></div>
          <div className="big">300+</div>
          <div className="lab">Google Reviews</div>
        </div>
        <div className="wrap inner">
          <p className="eyebrow">CrossFit Alkmaar</p>
          <h1>
            <span className="ln">Sporten werkt pas</span>
            <span className="ln">als je het <span className="accent">volhoudt.</span></span>
          </h1>
          <p className="lede">Wij helpen mensen om sporten een blijvend onderdeel van hun leven te maken. Door persoonlijke coaching in een community waar je gekend wordt, je niveau telt en niemand er alleen voor staat.</p>
          <div className="cta-row">
            <a className="btn btn--gold btn--lg" href="#" onClick={openModal("Plan je gratis kennismaking", "Hero")}>Plan je gratis kennismaking</a>
          </div>
        </div>
      </section>

      {/* MISSIE */}
      <section className="sec sec--white missie">
        <div className="wrap">
          <div className="center reveal">
            <h2 className="sec-title">Waarom CrossFit Alkmaar bestaat</h2>
            <p className="sec-sub">De meeste mensen stoppen niet met sporten omdat ze lui zijn. Ze stoppen omdat de plek waar ze trainen hen in de steek laat. Geen begeleiding, geen verbinding, geen reden om terug te komen. Ze betalen maandelijks contributie voor een sportschool waar ze niet naartoe gaan.</p>
            <p className="sec-sub">Wij geloven dat dit anders kan.</p>
            <p className="sec-sub">Sporten werkt pas als je het volhoudt. En je houdt het vol als er mensen zijn die je kennen, je zien groeien, en je missen als je er niet bent. Dat is de reden dat CrossFit Alkmaar bestaat: om een plek te zijn waar mensen jarenlang blijven. Niet omdat ze moeten, maar omdat ze willen.</p>
          </div>
        </div>
      </section>

      {/* 3 STAPPEN */}
      <section className="sec sec--ivoor">
        <div className="wrap">
          <div className="center reveal">
            <h2 className="sec-title">Zo werkt trainen bij CrossFit Alkmaar</h2>
          </div>
          <div className="steps">
            <div className="step reveal">
              <div className="n">01</div>
              <h3>Gratis kennismaking</h3>
              <p>Kom langs voor een gratis kennismaking. We horen graag alles over je doelen, waar je tegenaan loopt en wat je al hebt geprobeerd.</p>
            </div>
            <div className="step reveal" data-d="1">
              <div className="n">02</div>
              <h3>Persoonlijk trainingsplan</h3>
              <p>Elke training wordt aangepast aan jouw niveau, doelen en eventuele beperkingen. Je traint altijd onder leiding van professionele coaches.</p>
            </div>
            <div className="step reveal" data-d="2">
              <div className="n">03</div>
              <h3>Resultaten zien en voelen</h3>
              <p>Binnen weken voel je je sterker, energieker en fitter. Elke drie maanden heb je een check-in gesprek met één van de coaches. Zo houden we contact en kunnen we je plan aanpassen waar nodig.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMMA'S */}
      <section className="sec sec--ivoor" id="programmas">
        <div className="wrap">
          <div className="center reveal">
            <h2 className="sec-title">Kies het programma<br />dat bij je past</h2>
            <p className="sec-sub">Onze aanpak is no-nonsense waarin we doen wat werkt en weglaten wat niet werkt. Geen anoniem rondlopen, geen losse sessies zonder opbouw, geen onhaalbare beloftes. Wel vaste coaches die je bij naam kennen, trainingen die op jouw niveau worden geschaald en opbouwen over weken en maanden. Slapende leden kennen we niet, wij zorgen dat je erbij blijft.</p>
          </div>
          <div className="progs">
            <div className="prog reveal">
              <div className="ph">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/redesign/assets/photo-box1.webp" alt="28 Day Kickstart" /></div>
              <div className="body">
                <h3>28 day kickstart</h3>
                <p className="lede">Hier start iedereen. In vier weken leggen we samen een solide basis.</p>
                <ul>
                  <li><Check />Word sterker en fitter</li>
                  <li><Check />Structuur en accountability</li>
                  <li><Check />Kleine groepen (max 6)</li>
                  <li><Check />Basis leefstijladvies</li>
                </ul>
                <a className="btn btn--primary btn--block" href="/kickstart">Meer info</a>
              </div>
            </div>
            <div className="prog reveal" data-d="1">
              <div className="ph">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/redesign/assets/photo-box2.webp" alt="BUILD - semi personal training" /></div>
              <div className="body">
                <h3>BUILD</h3>
                <p className="lede">Semi personal training in een vaste groep.</p>
                <ul>
                  <li><Check />De voordelen van personal training</li>
                  <li><Check />In een vaste groep van maximaal 6 personen</li>
                  <li><Check />Een gestructureerd schema</li>
                  <li><Check />Met jouw vaste coaches</li>
                </ul>
                <a className="btn btn--primary btn--block" href="/small-group-training">Meer info</a>
              </div>
            </div>
            <div className="prog reveal" data-d="2">
              <div className="ph">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/redesign/assets/photo-box3.webp" alt="Groepslessen CrossFit Alkmaar" /></div>
              <div className="body">
                <h3>Groepslessen</h3>
                <p className="lede">Gevarieerd, uitdagend, en altijd schaalbaar naar jouw niveau.</p>
                <ul>
                  <li><Check />De beste coaches van Alkmaar</li>
                  <li><Check />Flexibel in- en uitschrijven</li>
                  <li><Check />Ontmoet nieuwe vrienden</li>
                  <li><Check />Voor alle niveaus</li>
                </ul>
                <a className="btn btn--primary btn--block" href="/groepslessen">Meer info</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY STRIP */}
      <section className="sec sec--white community">
        <div className="wrap">
          <div className="center reveal">
            <h2 className="sec-title">Je traint nooit alleen</h2>
            <p className="sec-sub">Mensen die je missen als je er niet bent. Dat is wat trainen bij CrossFit Alkmaar anders maakt.</p>
          </div>
          <div className="cstrip reveal" style={{ marginTop: 36 }}>
            <div className="cell">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/redesign/assets/photo-community.webp" alt="Leden van CrossFit Alkmaar tijdens een training" /></div>
            <div className="cell">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/redesign/assets/community-3.jpg" alt="Coach begeleidt een lid bij CrossFit Alkmaar" style={{ objectPosition: "center 65%" }} /></div>
            <div className="cell zoom">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/redesign/assets/community-2.jpg" alt="Leden lopen met kettlebells door de box" /></div>
            <div className="cell">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/redesign/assets/community-1.jpg" alt="High-five tijdens een training bij CrossFit Alkmaar" /></div>
          </div>
          <div className="comm-cta reveal">
            <h3>Sluit je aan bij 300+ tevreden leden</h3>
            <a className="btn btn--gold btn--lg" href="#" onClick={openModal("Kom vrijblijvend kennismaken", "Sluit je aan")}>Kom vrijblijvend kennismaken</a>
          </div>
        </div>
      </section>

      {/* VIDEO TESTIMONIALS (portrait trio) */}
      <section className="sec sec--ivoor" style={{ paddingBottom: "clamp(12px,1.6vw,20px)" }}>
        <div className="wrap">
          <div className="center reveal"><h2 className="sec-title">Echte verhalen van leden</h2></div>
          <div className="vtrio reveal">
            <div className="vp">
              <div className="video"><YouTubeEmbed videoId="EIWOUtYAl7g" alt="Chris - lid van CrossFit Alkmaar" /></div>
              <div className="nm">Chris</div>
              <p className="vq">&apos;CrossFit is veel toegankelijker dan aan machines trekken in een sportschool&apos;</p>
            </div>
            <div className="vp">
              <div className="video"><YouTubeEmbed videoId="SKchVCAIx80" alt="Steven - lid van CrossFit Alkmaar" /></div>
              <div className="nm">Steven</div>
              <p className="vq">&apos;Houding en techniek, daar zijn de trainers hier ongelooflijk goed in&apos;</p>
            </div>
            <div className="vp">
              <div className="video"><YouTubeEmbed videoId="GCUpJQJJ8s0" alt="Malou - lid van CrossFit Alkmaar" /></div>
              <div className="nm">Malou</div>
              <p className="vq">&apos;Meer gaan beseffen hoe fijn het is om lekker in je vel te zitten&apos;</p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS (GoHighLevel widget) */}
      <section className="sec sec--ivoor" style={{ paddingTop: "clamp(16px,2.4vw,28px)" }}>
        <div className="wrap">
          <div className="center reveal"><h2 className="sec-title">Wat onze leden zeggen</h2></div>
          <div className="reviews-embed reveal">
            <Script src="https://ghl.crossfitalkmaar.com/reputation/assets/review-widget.js" strategy="lazyOnload" />
            <iframe
              className="lc_reviews_widget"
              src="https://ghl.crossfitalkmaar.com/reputation/widgets/review_widget/elOOWDMoCEHJO4WhphRj"
              style={{ minWidth: "100%", width: "100%", border: 0 }}
              scrolling="no"
              title="Google Reviews"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="sec sec--ivoor" style={{ padding: "clamp(44px,6vw,72px) 0" }}>
        <div className="wrap">
          <div className="statline reveal">
            <div className="st"><div className="v">7</div><div className="lbl">Professionele coaches</div></div>
            <a
              className="st"
              href="https://www.google.com/search?q=crossfit+alkmaar#lrd=0x47cf573834f8b5b7:0x4a55c3c9c9a67e0e,1"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackOutboundLink("google_reviews")}
            ><div className="v">300+</div><div className="lbl">Google Reviews <span className="star">★</span></div></a>
            <div className="st"><div className="v">12+</div><div className="lbl">Jaar ervaring</div></div>
            <div className="st"><div className="v">35+</div><div className="lbl">Gemiddelde leeftijd</div></div>
            <div className="st"><div className="v">15.000</div><div className="lbl">Bakjes koffie per jaar</div></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec sec--white">
        <div className="wrap">
          <div className="center reveal"><h2 className="sec-title">Veelgestelde vragen</h2></div>
          <div className="faq">
            <details open className="reveal"><summary>Ik ben niet fit genoeg om te starten<span className="ic"><Plus /></span></summary><div className="body">Dat is precies waarom je juist wél moet starten. Elke training schalen we naar jouw niveau.</div></details>
            <details className="reveal"><summary>Ik heb geen tijd voor 5x per week trainen<span className="ic"><Plus /></span></summary><div className="body">Hoeft ook niet. Veel leden trainen 2-3x per week en zien al goede resultaten.</div></details>
            <details className="reveal"><summary>Ben ik niet te oud om met trainen te beginnen?<span className="ic"><Plus /></span></summary><div className="body">Absoluut niet. Onze gemiddelde leeftijd is 35+. We hebben leden van 20 tot 70+ die veilig trainen.</div></details>
            <details className="reveal"><summary>Wat als ik blessures of beperkingen heb?<span className="ic"><Plus /></span></summary><div className="body">We passen bewegingen aan of kiezen alternatieven. Onze coaches hebben ervaring met revalidatie.</div></details>
            <details className="reveal"><summary>Is CrossFit geschikt voor beginners?<span className="ic"><Plus /></span></summary><div className="body">Absoluut. Bij CrossFit Alkmaar start iedereen met een 28 day kickstart waarin je in kleine groepen (max 6 personen) alle basisbewegingen leert. Elke oefening wordt aangepast aan jouw niveau, dus ervaring is niet nodig.</div></details>
            <details className="reveal"><summary>Wat is het verschil tussen CrossFit en een gewone sportschool?<span className="ic"><Plus /></span></summary><div className="body">Bij een gewone sportschool train je alleen met machines en zonder begeleiding. Bij CrossFit Alkmaar train je altijd onder leiding van professionele coaches, in kleine groepen met gevarieerde trainingen. Je wordt sterker, fitter én je bouwt een community op.</div></details>
            <details className="reveal"><summary>Voor wie is CrossFit Alkmaar?<span className="ic"><Plus /></span></summary><div className="body">CrossFit Alkmaar is voor iedereen: van 20 tot 70+, van complete beginners tot ervaren sporters. Onze gemiddelde leeftijd is 35+. Elke training is schaalbaar naar jouw niveau, doelen en eventuele beperkingen.</div></details>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="sec final">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/redesign/assets/photo-community.webp" alt="" style={{ objectPosition: "center 42%" }} />
        <div className="scrim"></div>
        <div className="wrap inner reveal">
          <h2>Klaar om te starten?</h2>
          <p>Kom vrijblijvend langs. Geen verplichtingen.</p>
          <a className="btn btn--gold btn--lg" href="#" onClick={openModal("Plan je kennismaking", "Klaar om te starten")}>Plan je kennismaking</a>
        </div>
      </section>
    </>
  );
}
