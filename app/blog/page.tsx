"use client";

import Link from "next/link";
import { useLeadModal } from "../components/redesign/LeadModalContext";
import { blogPosts } from "./[slug]/blogData";

const MND = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
function fmtDate(d: string) {
  const [y, m, day] = d.split("-");
  return `${parseInt(day, 10)} ${MND[parseInt(m, 10) - 1]} ${y}`;
}

export default function BlogPage() {
  const { open } = useLeadModal();
  const openModal = (source: string, section: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    open({ source, section, variant: "kennismaking" });
  };

  const posts = Object.entries(blogPosts)
    .map(([slug, p]) => ({ slug, ...p }))
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <style>{`
        .bgrid { display: grid; grid-template-columns: repeat(3,1fr); gap: clamp(20px,2.6vw,30px); }
        .bpost { background: #fff; border: 1px solid var(--border); border-radius: var(--r-lg); overflow: hidden; box-shadow: var(--sh-1); display: flex; flex-direction: column; transition: transform .18s, box-shadow .18s; }
        .bpost:hover { transform: translateY(-5px); box-shadow: var(--sh-3); }
        .bpost .ph { aspect-ratio: 16/10; overflow: hidden; position: relative; display: block; }
        .bpost .ph img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s; }
        .bpost:hover .ph img { transform: scale(1.05); }
        .bpost .body { padding: clamp(20px,2.4vw,26px); display: flex; flex-direction: column; flex: 1; }
        .bpost .meta { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
        .bpost .cat { font-family: var(--font-head); font-weight: 700; font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: var(--cfa-blue); background: var(--blue-50); padding: 4px 10px; border-radius: 999px; }
        .bpost .date { font-family: var(--font-body); font-size: 13px; color: var(--fg3); }
        .bpost h2 { font-family: var(--font-head); font-weight: 700; font-size: 21px; line-height: 1.15; letter-spacing: .005em; margin: 0 0 10px; color: var(--fg1); }
        .bpost p { font-family: var(--font-body); font-size: 15px; line-height: 1.55; color: var(--fg2); margin: 0 0 18px; }
        .bpost .more { margin-top: auto; font-family: var(--font-head); font-weight: 600; font-size: 15px; color: var(--cfa-blue); text-decoration: none; }
        .bpost .more:hover { text-decoration: underline; }
        @media (max-width: 900px) { .bgrid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 600px) { .bgrid { grid-template-columns: 1fr; } }
      `}</style>

      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/redesign/assets/photo-community.webp" alt="" style={{ objectPosition: "center 38%" }} />
        <div className="scrim" />
        <div className="wrap inner">
          <h1>Blog</h1>
          <p className="lede">Tips, inzichten en verhalen over training, voeding en een gezonde levensstijl.</p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(234,237,244,.7)", marginTop: 10 }}>Zelf geschreven, niet door AI. Echte verhalen vanuit CrossFit Alkmaar.</p>
          <div className="cta-row"><a className="btn btn--gold btn--lg" href="#" onClick={openModal("Plan je gratis kennismaking", "Hero")}>Plan je gratis kennismaking</a></div>
        </div>
      </section>

      <section className="sec sec--ivoor">
        <div className="wrap">
          <div className="bgrid">
            {posts.map((p) => (
              <article key={p.slug} className="bpost">
                <Link className="ph" href={`/blog/${p.slug}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt="" loading="lazy" />
                </Link>
                <div className="body">
                  <div className="meta">
                    <span className="cat">{p.category}</span>
                    <span className="date">{fmtDate(p.date)}</span>
                  </div>
                  <h2>{p.title}</h2>
                  <p>{p.excerpt}</p>
                  <Link className="more" href={`/blog/${p.slug}`}>Lees meer →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec page-cta" style={{ ["--cta-photo" as string]: "url('/redesign/assets/photo-community.webp')", backgroundPosition: "center 38%" } as React.CSSProperties}>
        <div className="wrap">
          <h2>Zelf ervaren wat CrossFit Alkmaar voor jou kan betekenen?</h2>
          <p>Kom vrijblijvend kennismaken en ontdek hoe wij je kunnen helpen je doelen te bereiken.</p>
          <a className="btn btn--gold btn--lg" href="#" onClick={openModal("Plan je kennismaking", "Klaar om te starten")}>Plan je kennismaking</a>
        </div>
      </section>
    </>
  );
}
