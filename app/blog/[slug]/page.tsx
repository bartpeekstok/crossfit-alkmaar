"use client";

import { usePopup } from "../../components/PopupContext";
import Link from "next/link";
import { useParams } from "next/navigation";
import ArticleSchema from "../../components/ArticleSchema";
import { getBlogPost } from "./blogData";

export default function BlogPostPage() {
  const { openPopup } = usePopup();
  const params = useParams();
  const slug = params.slug as string;

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
      />

      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[400px] flex items-end"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url('${post.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-3xl mx-auto w-full relative z-10">
          <span className="text-xs font-semibold bg-blue-600 px-3 py-1 rounded mb-4 inline-block">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{post.title}</h1>
          <p className="text-gray-300">{post.date}</p>
        </div>
      </section>

      {/* Article content */}
      <article className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
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
      <section className="py-16 px-6 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Zelf ervaren?</h2>
          <p className="text-lg mb-6">
            Kom vrijblijvend kennismaken bij CrossFit Alkmaar.
          </p>
          <button
            onClick={openPopup}
            className="bg-white hover:bg-gray-100 text-blue-900 font-semibold py-3 px-8 rounded-lg transition text-lg"
          >
            Plan je kennismaking
          </button>
        </div>
      </section>
    </div>
  );
}
