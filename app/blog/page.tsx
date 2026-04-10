"use client";

import { usePopup } from "../components/PopupContext";
import Link from "next/link";
import { blogPosts as blogDataPosts } from "./[slug]/blogData";

export default function BlogPage() {
  const { openPopup } = usePopup();

  // Build listing from blogData (single source of truth)
  const blogPosts = Object.entries(blogDataPosts)
    .map(([slug, post]) => ({
      slug,
      title: post.title,
      excerpt: post.excerpt,
      image: post.image,
      date: post.date,
      category: post.category,
    }))
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        role="img"
        aria-label="CrossFit Alkmaar blog - tips over training, voeding en een gezonde levensstijl"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/CFA-juni-03-community.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <img src="/images/CFA-juni-03-community.jpg" alt="CrossFit Alkmaar blog - tips over training, voeding en een gezonde levensstijl" className="sr-only" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-200 mb-4">
            Tips, inzichten en verhalen over training, voeding en een gezonde levensstijl.
          </p>
          <p className="text-sm text-gray-300 mb-8">
            Zelf geschreven, niet door AI. Echte verhalen vanuit CrossFit Alkmaar.
          </p>
          <button
            onClick={openPopup}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>

      {/* Blog posts grid */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          {blogPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">Binnenkort verschijnen hier onze blogs.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.slug} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                  <Link href={`/blog/${post.slug}`}>
                    <div
                      className="h-48 bg-gray-300 bg-cover bg-center cursor-pointer hover:opacity-90 transition"
                      style={{
                        backgroundImage: `url('${post.image}')`,
                      }}
                    />
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-blue-900 bg-blue-100 px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-3 hover:text-blue-900 transition">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-900 font-semibold hover:underline"
                    >
                      Lees meer →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Zelf ervaren wat CrossFit voor jou kan betekenen?</h2>
          <p className="text-xl mb-8">
            Kom vrijblijvend kennismaken en ontdek hoe wij je kunnen helpen je doelen te bereiken.
          </p>
          <button
            onClick={openPopup}
            className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Plan je kennismaking
          </button>
        </div>
      </section>
    </div>
  );
}
