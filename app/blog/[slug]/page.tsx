"use client";

import { useLeadModal } from "../../components/redesign/LeadModalContext";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCallback } from "react";
import ArticleSchema from "../../components/ArticleSchema";
import { getBlogPost } from "./blogData";

export default function BlogPostPage() {
  const { open } = useLeadModal();
  const openPopup = () => open({ source: "Plan je kennismaking", section: "Blog artikel" });
  const params = useParams();
  const slug = params.slug as string;

  const handleContentClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const link = target.closest("a");
    if (link && link.getAttribute("href") === "/free-intro") {
      e.preventDefault();
      open({ source: "Plan je kennismaking", section: "Blog artikel" });
    }
  }, [open]);

  const post = getBlogPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog niet gevonden</h1>
          <p className="text-gray-600 mb-6">Dit artikel bestaat niet of is verwijderd.</p>
          <Link href="/blog" className="text-blue-900 font-semibold hover:underline">
            ← Terug naar blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        image={post.image}
        datePublished={post.date}
        slug={slug}
        category={post.category}
        author={post.author}
      />

      {post.faq && post.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: post.faq.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
              })),
            }),
          }}
        />
      )}

      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[400px] flex items-end"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url('${post.image}')`,
          backgroundSize: "cover",
          backgroundPosition: post.imagePosition || "center",
        }}
        role="img"
        aria-label={`${post.title} - CrossFit Alkmaar blog`}
      >
        <img src={post.image} alt={`${post.title} - CrossFit Alkmaar blog`} className="sr-only" />
        <div className="max-w-3xl mx-auto w-full relative z-10">
          <span className="text-xs font-semibold bg-blue-600 px-3 py-1 rounded mb-4 inline-block">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "#fff" }}>{post.title}</h1>
          <p className="text-gray-300" style={{ color: "rgba(255,255,255,.85)" }}>{post.author} · {post.date}</p>
        </div>
      </section>

      {/* Article content */}
      <article className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-900 [&>p]:mb-8 [&>p]:leading-relaxed [&>h2]:mt-12 [&>h2]:mb-4 [&>h2]:text-2xl [&>h2]:font-bold"
            dangerouslySetInnerHTML={{ __html: post.content }}
            onClick={handleContentClick}
          />

          {/* Back link */}
          <div className="mt-12 pt-8 border-t">
            <Link href="/blog" className="text-blue-900 font-semibold hover:underline">
              ← Terug naar alle artikelen
            </Link>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="sec page-cta" style={{ ["--cta-photo" as string]: "url('/redesign/assets/header-community.jpg')" } as React.CSSProperties}>
        <div className="wrap">
          <h2>Zelf ervaren?</h2>
          <p>Kom vrijblijvend kennismaken bij CrossFit Alkmaar.</p>
          <a className="btn btn--gold btn--lg" href="#" onClick={(e) => { e.preventDefault(); openPopup(); }}>Plan je kennismaking</a>
        </div>
      </section>
    </div>
  );
}
