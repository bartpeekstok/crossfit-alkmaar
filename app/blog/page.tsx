"use client";

import { usePopup } from "../components/PopupContext";
import Link from "next/link";

export default function BlogPage() {
  const { openPopup } = usePopup();

  const blogPosts = [
    {
      id: 1,
      slug: "waarom-krachttraining-voor-50-plussers",
      title: "Waarom krachttraining juist voor 50-plussers essentieel is",
      excerpt: "Spieren worden zwakker naarmate je ouder wordt. Maar dat hoeft niet! Ontdek waarom krachttraining na je 50e belangrijker is dan ooit.",
      image: "/images/blog/krachttraining-50plus.jpg",
      date: "12 december 2024",
      category: "Gezondheid"
    },
    {
      id: 2,
      slug: "5-tips-om-consistent-te-blijven",
      title: "5 tips om consistent te blijven met trainen",
      excerpt: "We kennen het allemaal: vol goede moed beginnen en na een paar weken afhaken. Deze 5 tips helpen je om wél vol te houden.",
      image: "/images/blog/consistent-trainen.jpg",
      date: "8 december 2024",
      category: "Mindset"
    },
    {
      id: 3,
      slug: "wat-eet-je-voor-en-na-training",
      title: "Wat eet je het beste voor en na je training?",
      excerpt: "Voeding en training gaan hand in hand. Leer wat je het beste kunt eten om maximaal resultaat te halen uit je workouts.",
      image: "/images/blog/voeding-training.jpg",
      date: "1 december 2024",
      category: "Voeding"
    },
    {
      id: 4,
      slug: "crossfit-voor-beginners",
      title: "CrossFit voor beginners: wat kun je verwachten?",
      excerpt: "Nieuwsgierig naar CrossFit maar geen idee wat je te wachten staat? We leggen uit wat je kunt verwachten bij je eerste les.",
      image: "/images/blog/crossfit-beginners.jpg",
      date: "25 november 2024",
      category: "CrossFit"
    },
    {
      id: 5,
      slug: "blessures-voorkomen",
      title: "Zo voorkom je blessures tijdens het sporten",
      excerpt: "Niemand wil geblesseerd raken. Met deze tips minimaliseer je het risico en kun je veilig blijven trainen.",
      image: "/images/blog/blessures-voorkomen.jpg",
      date: "18 november 2024",
      category: "Gezondheid"
    },
    {
      id: 6,
      slug: "meer-energie-door-beweging",
      title: "Waarom beweging je juist meer energie geeft",
      excerpt: "Het klinkt tegenstrijdig: moe zijn en dan gaan sporten. Toch geeft regelmatige beweging je meer energie. Dit is waarom.",
      image: "/images/blog/energie-beweging.jpg",
      date: "10 november 2024",
      category: "Gezondheid"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/blog-header.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Tips, inzichten en verhalen over training, voeding en een gezonde levensstijl.
          </p>
          <button
            onClick={openPopup}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Gratis intake
          </button>
        </div>
      </section>

      {/* Blog posts grid */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                {/* Placeholder image */}
                <div 
                  className="h-48 bg-gray-300 flex items-center justify-center"
                  style={{
                    backgroundImage: `linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)`,
                  }}
                >
                  <span className="text-white text-sm opacity-75">Afbeelding: {post.title.substring(0, 30)}...</span>
                </div>
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Zelf ervaren wat CrossFit voor jou kan betekenen?</h2>
          <p className="text-xl mb-8">
            Plan een gratis intake en ontdek hoe wij je kunnen helpen je doelen te bereiken.
          </p>
          <button
            onClick={openPopup}
            className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Gratis intake
          </button>
        </div>
      </section>
    </div>
  );
}