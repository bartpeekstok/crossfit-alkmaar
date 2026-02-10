"use client";

import { usePopup } from "../components/PopupContext";
import Link from "next/link";

export default function BlogPage() {
  const { openPopup } = usePopup();

  const blogPosts = [
    {
      id: 27,
      slug: "sporten-drukke-baan",
      title: "Sporten met een drukke baan: zo maak je tijd",
      excerpt: "Geen tijd om te sporten? Of is het een kwestie van prioriteiten? Zo maak je tijd voor beweging.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      date: "23 januari 2025",
      category: "Tips"
    },
    {
      id: 26,
      slug: "wat-is-crossfit",
      title: "Wat is CrossFit? Alles wat je moet weten",
      excerpt: "Je hebt er waarschijnlijk van gehoord. Maar wat is CrossFit nu eigenlijk? En is het iets voor jou?",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80",
      date: "22 januari 2025",
      category: "CrossFit"
    },
    {
      id: 25,
      slug: "motivatie-sporten-behouden",
      title: "Motivatie om te sporten: zo houd je het vol",
      excerpt: "Beginnen met sporten is makkelijk. Volhouden is de echte uitdaging. Zo zorg je dat jij bij de 20% hoort die wel doorzet.",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
      date: "21 januari 2025",
      category: "Mindset"
    },
    {
      id: 24,
      slug: "groepslessen-vs-alleen-trainen",
      title: "Groepslessen vs. alleen trainen: wat werkt beter?",
      excerpt: "Sommige mensen zweren bij alleen trainen. Anderen kunnen niet zonder hun groepsles. Wat werkt beter? De wetenschap geeft antwoord.",
      image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80",
      date: "20 januari 2025",
      category: "Training"
    },
    {
      id: 23,
      slug: "eerste-keer-crossfit",
      title: "Je eerste keer CrossFit: dit kun je verwachten",
      excerpt: "Je hebt je aangemeld voor je eerste CrossFit training. Wat kun je verwachten? Is het echt zo zwaar als het lijkt?",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      date: "19 januari 2025",
      category: "CrossFit"
    },
    {
      id: 22,
      slug: "spiermassa-opbouwen",
      title: "Spiermassa opbouwen: de complete gids",
      excerpt: "Of je nu wilt afvallen, sterker worden of gewoon fitter – spiermassa is de sleutel. Leer hoe je effectief spieren opbouwt.",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80",
      date: "18 januari 2025",
      category: "Training"
    },
    {
      id: 21,
      slug: "de-juiste-sportschool-kiezen",
      title: "De juiste sportschool kiezen: 7 vragen die je moet stellen",
      excerpt: "Niet elke sportschool is hetzelfde. Voor je een abonnement afsluit, stel jezelf deze 7 cruciale vragen. Het verschil tussen succes en afhaken zit in de details.",
      image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=800&q=80",
      date: "17 januari 2025",
      category: "Tips"
    },
    {
      id: 20,
      slug: "personal-training-alkmaar",
      title: "Personal training in Alkmaar: is het de investering waard?",
      excerpt: "Personal training kost al snel €50-100 per sessie. Is dat de investering waard? En zijn er alternatieven die net zo effectief zijn?",
      image: "https://images.unsplash.com/photo-1571388208497-71bedc66e932?w=800&q=80",
      date: "16 januari 2025",
      category: "Training"
    },
    {
      id: 19,
      slug: "fitness-voor-50-plussers",
      title: "Fitness voor 50+: sterker worden op latere leeftijd",
      excerpt: "Op zoek naar een sportschool in Alkmaar die geschikt is voor 50-plussers? Dit is waarom krachttraining op latere leeftijd juist zo belangrijk is.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
      date: "15 januari 2025",
      category: "Gezondheid"
    },
    {
      id: 18,
      slug: "sportschool-voor-beginners",
      title: "Sportschool voor beginners: waar moet je op letten?",
      excerpt: "Voor het eerst naar een sportschool? Begrijpelijk dat je niet weet waar je moet beginnen. Dit is alles wat je moet weten als beginner.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      date: "14 januari 2025",
      category: "Tips"
    },
    {
      id: 17,
      slug: "afvallen-in-alkmaar",
      title: "Afvallen in Alkmaar: de eerlijke waarheid over gewichtsverlies",
      excerpt: "Zoek je een sportschool in Alkmaar om af te vallen? Voor je je inschrijft, moet je dit weten over wat écht werkt bij gewichtsverlies.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      date: "13 januari 2025",
      category: "Gezondheid"
    },
    {
      id: 16,
      slug: "krachttraining-alkmaar",
      title: "Krachttraining in Alkmaar: waar begin je?",
      excerpt: "Krachttraining is de beste investering in je gezondheid. Maar waar begin je in Alkmaar? Een overzicht van je opties.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
      date: "12 januari 2025",
      category: "Training"
    },
    {
      id: 15,
      slug: "hoe-vaak-moet-je-trainen",
      title: "Hoe vaak moet je trainen voor resultaat?",
      excerpt: "2x per week? 5x per week? De optimale trainingsfrequentie hangt af van je doelen, ervaring en herstelvermogen.",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80",
      date: "11 januari 2025",
      category: "Training"
    },
    {
      id: 14,
      slug: "de-kracht-van-samen-trainen",
      title: "De kracht van samen trainen: waarom community werkt",
      excerpt: "Alleen trainen is lastig volhouden. Ontdek waarom mensen die samen trainen betere resultaten behalen én langer volhouden.",
      image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80",
      date: "10 januari 2025",
      category: "Community"
    },
    {
      id: 13,
      slug: "functioneel-trainen-vs-machines",
      title: "Functioneel trainen vs. machines: wat werkt beter?",
      excerpt: "Waarom functionele oefeningen zoals squats en deadlifts effectiever zijn dan geïsoleerde machine-oefeningen.",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80",
      date: "9 januari 2025",
      category: "Training"
    },
    {
      id: 10,
      slug: "waarom-warming-up-onmisbaar-is",
      title: "Waarom een goede warming-up onmisbaar is",
      excerpt: "Geen tijd voor warming-up? Dan heb je ook geen tijd voor resultaten. Ontdek waarom die 10 minuten het verschil maken.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      date: "8 januari 2025",
      category: "Training"
    },
    {
      id: 11,
      slug: "doelen-stellen-die-werken",
      title: "Doelen stellen die echt werken",
      excerpt: "Waarom 'afvallen' geen goed doel is en hoe je wél doelen stelt die je motiveren en resultaat opleveren.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      date: "7 januari 2025",
      category: "Mindset"
    },
    {
      id: 12,
      slug: "training-als-stressverlichter",
      title: "Training als de ultieme stressverlichter",
      excerpt: "Gestrest? Ga sporten. De wetenschap achter waarom beweging een van de beste remedies tegen stress is.",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
      date: "6 januari 2025",
      category: "Gezondheid"
    },
    {
      id: 7,
      slug: "de-kracht-van-goede-voeding",
      title: "De kracht van goede voeding: brandstof voor je prestaties",
      excerpt: "Voeding is de basis van al je resultaten. Ontdek hoe de juiste voedingskeuzes je training naar een hoger niveau tillen.",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
      date: "5 januari 2025",
      category: "Voeding"
    },
    {
      id: 8,
      slug: "herstel-de-vergeten-component",
      title: "Herstel: de vergeten component van vooruitgang",
      excerpt: "Je wordt niet sterker tijdens de training, maar tijdens het herstel. Leer hoe je optimaal herstelt voor maximale resultaten.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
      date: "3 januari 2025",
      category: "Herstel"
    },
    {
      id: 9,
      slug: "mindset-de-sleutel-tot-succes",
      title: "Mindset: de sleutel tot blijvend succes",
      excerpt: "Je lichaam kan meer dan je denkt. Ontdek hoe de juiste mindset het verschil maakt tussen opgeven en doorzetten.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
      date: "1 januari 2025",
      category: "Mindset"
    },
    {
      id: 1,
      slug: "waarom-krachttraining-voor-50-plussers",
      title: "Waarom krachttraining juist voor 50-plussers essentieel is",
      excerpt: "Spieren worden zwakker naarmate je ouder wordt. Maar dat hoeft niet! Ontdek waarom krachttraining na je 50e belangrijker is dan ooit.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
      date: "12 december 2024",
      category: "Gezondheid"
    },
    {
      id: 2,
      slug: "5-tips-om-consistent-te-blijven",
      title: "5 tips om consistent te blijven met trainen",
      excerpt: "We kennen het allemaal: vol goede moed beginnen en na een paar weken afhaken. Deze 5 tips helpen je om wél vol te houden.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
      date: "8 december 2024",
      category: "Mindset"
    },
    {
      id: 3,
      slug: "wat-eet-je-voor-en-na-training",
      title: "Wat eet je het beste voor en na je training?",
      excerpt: "Voeding en training gaan hand in hand. Leer wat je het beste kunt eten om maximaal resultaat te halen uit je workouts.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
      date: "1 december 2024",
      category: "Voeding"
    },
    {
      id: 4,
      slug: "crossfit-voor-beginners",
      title: "CrossFit voor beginners: wat kun je verwachten?",
      excerpt: "Nieuwsgierig naar CrossFit maar geen idee wat je te wachten staat? We leggen uit wat je kunt verwachten bij je eerste les.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      date: "25 november 2024",
      category: "CrossFit"
    },
    {
      id: 5,
      slug: "blessures-voorkomen",
      title: "Zo voorkom je blessures tijdens het sporten",
      excerpt: "Niemand wil geblesseerd raken. Met deze tips minimaliseer je het risico en kun je veilig blijven trainen.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
      date: "18 november 2024",
      category: "Gezondheid"
    },
    {
      id: 6,
      slug: "meer-energie-door-beweging",
      title: "Waarom beweging je juist meer energie geeft",
      excerpt: "Het klinkt tegenstrijdig: moe zijn en dan gaan sporten. Toch geeft regelmatige beweging je meer energie. Dit is waarom.",
      image: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=800&q=80",
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/hero.jpg')`,
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
            Plan je gratis kennismaking
          </button>
        </div>
      </section>

      {/* Blog posts grid */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                {/* Image from Unsplash */}
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