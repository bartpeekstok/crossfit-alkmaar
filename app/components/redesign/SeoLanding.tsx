"use client";

import Link from "next/link";
import Script from "next/script";
import { ReactNode } from "react";
import { useLeadModal } from "./LeadModalContext";
import YouTubeEmbed from "./YouTubeEmbed";
import ServiceSchema from "../ServiceSchema";

const Plus = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--cfa-blue)" strokeWidth="2.5" strokeLinecap="round">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export type SeoLandingProps = {
  // Schema + meta
  name: string; // Human-readable: "Afvallen Alkmaar"
  slug: string; // URL slug: "afvallen-alkmaar"
  description: string;
  // Hero
  heroPhoto: string; // /redesign/assets/header-X.jpg or /images/X.jpg
  heroPhotoPosition?: string; // e.g. "center 30%"
  heroTitle: string;
  heroSubtitle: string;
  eyebrow?: string;
  // Waarom-sectie
  waaromTitle: string;
  waaromContent: ReactNode; // Array of <p> elements
  // Aanpak grid (4 cards typically)
  aanpakTitle: string;
  aanpakCards: { title: string; body: ReactNode }[];
  // Voor wie prose
  voorwieTitle?: string;
  voorwieContent?: ReactNode;
  // AEO content (3 items)
  aeoTitle?: string;
  aeoItems?: { q: string; a: ReactNode }[];
  // Member video
  memberVideoId?: string;
  memberName?: string;
  memberQuote?: string;
  // FAQ
  faqItems: { q: string; a: ReactNode; aText: string }[]; // aText for JSON-LD plain text
  // CTA
  ctaTitle?: string;
  ctaSubtitle?: string;
};

export default function SeoLanding({
  name,
  slug,
  description,
  heroPhoto,
  heroPhotoPosition,
  heroTitle,
  heroSubtitle,
  eyebrow,
  waaromTitle,
  waaromContent,
  aanpakTitle,
  aanpakCards,
  voorwieTitle,
  voorwieContent,
  aeoTitle,
  aeoItems,
  memberVideoId,
  memberName,
  memberQuote,
  faqItems,
  ctaTitle = "Klaar om te beginnen?",
  ctaSubtitle = "Plan een gratis kennismakingsgesprek en ontdek hoe wij je kunnen helpen.",
}: SeoLandingProps) {
  const { open } = useLeadModal();
  const url = `https://crossfitalkmaar.com/${slug}`;

  const openModal = (source: string, section: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    open({
      source,
      section,
      variant: "kennismaking",
      extraFields: { landingspagina: name },
    });
  };

  return (
    <>
      <ServiceSchema name={`${name} - CrossFit Alkmaar`} description={description} url={url} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.aText },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthClub",
            "@id": "https://crossfitalkmaar.com/#organization",
            name: "CrossFit Alkmaar",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              bestRating: "5",
              worstRating: "1",
              ratingCount: "273",
              reviewCount: "273",
            },
          }),
        }}
      />
      {memberVideoId && memberName && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              name: `${memberName} — lid bij CrossFit Alkmaar`,
              description: memberQuote || `${memberName} deelt zijn ervaring bij CrossFit Alkmaar.`,
              thumbnailUrl: `https://img.youtube.com/vi/${memberVideoId}/maxresdefault.jpg`,
              uploadDate: "2025-01-01",
              contentUrl: `https://www.youtube.com/watch?v=${memberVideoId}`,
              embedUrl: `https://www.youtube.com/embed/${memberVideoId}`,
            }),
          }}
        />
      )}

      {/* HERO */}
      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src={heroPhoto} alt="" style={heroPhotoPosition ? { objectPosition: heroPhotoPosition } : undefined} />
        <div className="scrim" />
        <div className="wrap inner">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1>{heroTitle}</h1>
          <p className="lede">{heroSubtitle}</p>
          <div className="cta-row">
            <a className="btn btn--gold btn--lg" href="#" onClick={openModal("Plan je gratis kennismaking", "Hero")}>Plan je gratis kennismaking</a>
          </div>
        </div>
      </section>

      {/* WAAROM */}
      <section className="sec sec--ivoor" style={{ paddingTop: "clamp(30px,4vw,48px)", paddingBottom: "clamp(16px,2.2vw,30px)" }}>
        <div className="wrap prose">
          <h2 className="sec-title" style={{ textAlign: "left", marginBottom: 18 }}>{waaromTitle}</h2>
          {waaromContent}
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <section className="sec sec--white" style={{ paddingTop: "clamp(28px,4vw,46px)", paddingBottom: "clamp(28px,4vw,46px)" }}>
        <div className="wrap">
          <Script src="https://ghl.crossfitalkmaar.com/reputation/assets/review-widget.js" strategy="lazyOnload" />
          <iframe
            className="lc_reviews_widget"
            src="https://ghl.crossfitalkmaar.com/reputation/widgets/review_widget/elOOWDMoCEHJO4WhphRj"
            style={{ minWidth: "100%", width: "100%", border: 0 }}
            scrolling="no"
            title="Google Reviews"
          />
        </div>
      </section>

      {/* AANPAK */}
      <section className="sec sec--ivoor">
        <div className="wrap">
          <div className="center"><h2 className="sec-title">{aanpakTitle}</h2></div>
          <div className="ppg" style={{ marginTop: 34 }}>
            {aanpakCards.map((c, i) => (
              <div key={i} className="ppi"><h3>{c.title}</h3><p>{c.body}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* VOOR WIE */}
      {voorwieContent && (
        <section className="sec sec--white" style={{ paddingTop: "clamp(28px,4vw,46px)", paddingBottom: "clamp(16px,2.2vw,30px)" }}>
          <div className="wrap prose">
            <h2 className="sec-title" style={{ textAlign: "left", marginBottom: 18 }}>{voorwieTitle || "Voor wie?"}</h2>
            {voorwieContent}
          </div>
        </section>
      )}

      {/* AEO */}
      {aeoItems && aeoItems.length > 0 && (
        <section className="sec sec--ivoor">
          <div className="wrap">
            <div className="center"><h2 className="sec-title">{aeoTitle || "Veelgestelde vragen"}</h2></div>
            <div className="ppg" style={{ marginTop: 34 }}>
              {aeoItems.map((item, i) => (
                <div key={i} className="ppi" style={{ display: "block" }}>
                  <h3 style={{ display: "block" }}>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* MEMBER VIDEO */}
      {memberVideoId && memberName && (
        <section className="sec sec--white">
          <div className="wrap">
            <div className="center"><h2 className="sec-title">{memberName} — lid bij CrossFit Alkmaar</h2></div>
            <div className="ppv" style={{ marginTop: 22 }}>
              <div className="video">
                <YouTubeEmbed videoId={memberVideoId} alt={`${memberName} - lid bij CrossFit Alkmaar`} />
              </div>
              {memberQuote && <p className="quote">&ldquo;{memberQuote}&rdquo;</p>}
              <p className="more"><Link href="/onze-leden">Bekijk meer verhalen van onze leden →</Link></p>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="sec sec--ivoor">
        <div className="wrap">
          <div className="center"><h2 className="sec-title">Veelgestelde vragen</h2></div>
          <div className="faq" style={{ marginTop: 8 }}>
            {faqItems.map((f, i) => (
              <details key={i} open={i === 0}>
                <summary>{f.q}<span className="ic"><Plus /></span></summary>
                <div className="body">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec page-cta" style={{ ["--cta-photo" as string]: `url('${heroPhoto}')`, backgroundPosition: heroPhotoPosition || "center" } as React.CSSProperties}>
        <div className="wrap">
          <h2>{ctaTitle}</h2>
          <p>{ctaSubtitle}</p>
          <a className="btn btn--gold btn--lg" href="#" onClick={openModal("Plan je gratis kennismaking", "Klaar om te beginnen")}>Plan je gratis kennismaking</a>
        </div>
      </section>
    </>
  );
}
