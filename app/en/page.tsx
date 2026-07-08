"use client";

import "../styles/page-home.css";
import Image from "next/image";
import Script from "next/script";
import { useLeadModal } from "../components/redesign/LeadModalContext";
import YouTubeEmbed from "../components/redesign/YouTubeEmbed";
import ScrollReveal from "../components/redesign/ScrollReveal";

const Star = () => (
  <svg viewBox="0 0 24 24" fill="#E0A325"><path d="M12 2l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.6 6.1 20.8l1.2-6.6L2.5 9l6.6-.9z" /></svg>
);
const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#1F9D55" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
);
const Plus = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--cfa-blue)" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
);

export default function EnHome() {
  const { open } = useLeadModal();
  const openModal = (source: string, section: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    open({ source, section, variant: "kennismaking" });
  };

  return (
    <>
      <ScrollReveal />

      <section className="hero">
        <Image className="bg" src="/redesign/assets/photo-hero-team.webp" alt="Members of CrossFit Alkmaar high-fiving after a workout" fill priority sizes="100vw" />
        <div className="scrim" />
        <div className="badge">
          <div className="stars"><Star /><Star /><Star /><Star /><Star /></div>
          <div className="big">300+</div>
          <div className="lab">Google Reviews</div>
        </div>
        <div className="wrap inner">
          <h1 className="eyebrow">CrossFit Alkmaar</h1>
          <p className="htitle"><span className="ln">Training only works</span><span className="ln">if you keep <span className="accent">at it.</span></span></p>
          <p className="lede">Small groups, coaches who know your name, and people who miss you when you&apos;re not there.</p>
          <div className="cta-row">
            <a className="btn btn--gold btn--lg" href="#" onClick={openModal("Book your free intro", "Hero")}>Book your free intro</a>
          </div>
        </div>
      </section>

      <section className="sec sec--ivoor">
        <div className="wrap">
          <div className="center"><h2 className="sec-title">How training at CrossFit Alkmaar works</h2></div>
          <div className="steps">
            <div className="step"><div className="n">01</div><h3>Free intro</h3><p>Drop by for a free intro. We&apos;d love to hear about your goals, what you&apos;re struggling with and what you&apos;ve already tried.</p></div>
            <div className="step"><div className="n">02</div><h3>Personal training plan</h3><p>Every workout is adapted to your level, goals and any limitations. You always train under the guidance of professional coaches.</p></div>
            <div className="step"><div className="n">03</div><h3>See and feel results</h3><p>Within weeks you&apos;ll feel stronger, more energetic and fitter. Every three months you have a check-in with one of the coaches.</p></div>
          </div>
        </div>
      </section>

      <section className="sec sec--ivoor" id="programmas">
        <div className="wrap">
          <div className="center">
            <h2 className="sec-title">Choose the program<br />that suits you</h2>
            <p className="sec-sub">Everyone starts with the 28 Day Kickstart. After that you grow at your own pace, in small fixed groups or with personal coaching. No finish line, always a next step.</p>
          </div>
          <div className="progs">
            <div className="prog">
              <div className="ph">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/redesign/assets/photo-box1.webp" alt="28 Day Kickstart" /></div>
              <div className="body">
                <h3>28 day kickstart</h3>
                <p className="lede">Everyone starts here. In four weeks we build a solid foundation together.</p>
                <ul>
                  <li><Check />Get stronger and fitter</li>
                  <li><Check />Structure and accountability</li>
                  <li><Check />Small groups (max 6)</li>
                  <li><Check />Basic lifestyle advice</li>
                </ul>
                <a className="btn btn--primary btn--block" href="/en/kickstart">More info</a>
              </div>
            </div>
            <div className="prog">
              <div className="ph">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/redesign/assets/photo-box2.webp" alt="BUILD - semi personal training" /></div>
              <div className="body">
                <h3>BUILD</h3>
                <p className="lede">Semi personal training in a fixed group.</p>
                <ul>
                  <li><Check />The benefits of personal training</li>
                  <li><Check />In a fixed group of max 6 people</li>
                  <li><Check />A structured program</li>
                  <li><Check />With your own coaches</li>
                </ul>
                <a className="btn btn--primary btn--block" href="/small-group-training">More info</a>
              </div>
            </div>
            <div className="prog">
              <div className="ph">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/redesign/assets/photo-box3.webp" alt="Group classes CrossFit Alkmaar" /></div>
              <div className="body">
                <h3>Group classes</h3>
                <p className="lede">Varied, challenging, and always scalable to your level.</p>
                <ul>
                  <li><Check />The best coaches in Alkmaar</li>
                  <li><Check />Flexible booking and cancelling</li>
                  <li><Check />Meet new friends</li>
                  <li><Check />For all levels</li>
                </ul>
                <a className="btn btn--primary btn--block" href="/groepslessen">More info</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec--white community">
        <div className="wrap">
          <div className="center">
            <h2 className="sec-title">You never train alone</h2>
            <p className="sec-sub">People who miss you when you&apos;re not there. That&apos;s what makes training at CrossFit Alkmaar different.</p>
          </div>
          <div className="cstrip" style={{ marginTop: 36 }}>
            <div className="cell">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/redesign/assets/photo-community.webp" alt="Members during a workout" /></div>
            <div className="cell">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/redesign/assets/community-3.jpg" alt="Coach guiding a member" style={{ objectPosition: "center 65%" }} /></div>
            <div className="cell zoom">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/redesign/assets/community-2.jpg" alt="Members carrying kettlebells" /></div>
            <div className="cell">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/redesign/assets/community-1.jpg" alt="High-five during a workout" /></div>
          </div>
          <div className="comm-cta">
            <h3>Join 300+ happy members</h3>
            <a className="btn btn--gold btn--lg" href="#" onClick={openModal("Come meet us, no obligation", "Join us")}>Come meet us, no obligation</a>
          </div>
        </div>
      </section>

      <section className="sec sec--ivoor" style={{ paddingBottom: "clamp(12px,1.6vw,20px)" }}>
        <div className="wrap">
          <div className="center"><h2 className="sec-title">Real stories from members</h2></div>
          <div className="vtrio">
            <div className="vp"><div className="video"><YouTubeEmbed videoId="EIWOUtYAl7g" alt="Chris" /></div><div className="nm">Chris</div><p className="vq">&apos;CrossFit is far more accessible than pulling on machines in a regular gym&apos;</p></div>
            <div className="vp"><div className="video"><YouTubeEmbed videoId="SKchVCAIx80" alt="Steven" /></div><div className="nm">Steven</div><p className="vq">&apos;Posture and technique, the trainers here are incredibly good at that&apos;</p></div>
            <div className="vp"><div className="video"><YouTubeEmbed videoId="GCUpJQJJ8s0" alt="Malou" /></div><div className="nm">Malou</div><p className="vq">&apos;I&apos;ve come to realise how good it feels to be comfortable in your own skin&apos;</p></div>
          </div>
        </div>
      </section>

      <section className="sec sec--ivoor" style={{ paddingTop: "clamp(16px,2.4vw,28px)" }}>
        <div className="wrap">
          <div className="center"><h2 className="sec-title">What our members say</h2></div>
          <div className="reviews-embed">
            <Script src="https://ghl.crossfitalkmaar.com/reputation/assets/review-widget.js" strategy="lazyOnload" />
            <iframe className="lc_reviews_widget" src="https://ghl.crossfitalkmaar.com/reputation/widgets/review_widget/elOOWDMoCEHJO4WhphRj" style={{ minWidth: "100%", width: "100%", border: 0 }} scrolling="no" title="Google Reviews" />
          </div>
        </div>
      </section>

      <section className="sec sec--ivoor" style={{ padding: "clamp(44px,6vw,72px) 0" }}>
        <div className="wrap">
          <div className="statline">
            <div className="st"><div className="v">7</div><div className="lbl">Professional coaches</div></div>
            <div className="st"><div className="v">300+</div><div className="lbl">Active members</div></div>
            <div className="st"><div className="v">12+</div><div className="lbl">Years of experience</div></div>
            <div className="st"><div className="v">35+</div><div className="lbl">Average age</div></div>
            <div className="st"><div className="v">15.000</div><div className="lbl">Cups of coffee per year</div></div>
          </div>
        </div>
      </section>

      <section className="sec sec--white">
        <div className="wrap">
          <div className="center"><h2 className="sec-title">Frequently asked questions</h2></div>
          <div className="faq">
            <details open><summary>I&apos;m not fit enough to start<span className="ic"><Plus /></span></summary><div className="body">That&apos;s exactly why you should start. We scale every workout to your level.</div></details>
            <details><summary>I don&apos;t have time to train 5x a week<span className="ic"><Plus /></span></summary><div className="body">You don&apos;t have to. Many members train 2-3x a week and already see great results.</div></details>
            <details><summary>Am I too old to start training?<span className="ic"><Plus /></span></summary><div className="body">Absolutely not. Our average age is 35+. We have members from 20 to 70+ who train safely.</div></details>
            <details><summary>What if I have injuries or limitations?<span className="ic"><Plus /></span></summary><div className="body">We adjust movements or choose alternatives. Our coaches have experience with rehabilitation.</div></details>
            <details><summary>Is CrossFit suitable for beginners?<span className="ic"><Plus /></span></summary><div className="body">Absolutely. At CrossFit Alkmaar everyone starts with a 28 day kickstart where you learn all the basic movements in small groups (max 6 people). Every exercise is adapted to your level, so no experience is needed.</div></details>
            <details><summary>What&apos;s the difference between CrossFit and a regular gym?<span className="ic"><Plus /></span></summary><div className="body">At a regular gym you train alone on machines without guidance. At CrossFit Alkmaar you always train under professional coaches, in small groups with varied workouts. You get stronger, fitter and build a community.</div></details>
            <details><summary>Who is CrossFit Alkmaar for?<span className="ic"><Plus /></span></summary><div className="body">CrossFit Alkmaar is for everyone: from 20 to 70+, from complete beginners to experienced athletes. Our average age is 35+. Every workout is scalable to your level, goals and any limitations.</div></details>
          </div>
        </div>
      </section>

      <section className="sec final">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/redesign/assets/photo-community.webp" alt="" width={679} height={1018} loading="lazy" style={{ objectPosition: "center 42%" }} />
        <div className="scrim" />
        <div className="wrap inner">
          <h2>Ready to start?</h2>
          <p>Drop by, no obligations.</p>
          <a className="btn btn--gold btn--lg" href="#" onClick={openModal("Book your intro", "Ready to start")}>Book your intro</a>
        </div>
      </section>
    </>
  );
}
