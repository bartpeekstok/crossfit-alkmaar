"use client";

import { usePopup } from "../components/PopupContext";
import { trackCTAClick } from "../lib/analytics";
import ServiceSchema from "../components/ServiceSchema";
import Image from "next/image";
import Link from "next/link";
import TrackedYouTubeEmbed from "../components/TrackedYouTubeEmbed";
import Script from "next/script";

export default function PersonalTrainingAlkmaarPage() {
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen bg-gray-200">
      <ServiceSchema
        name="Personal Training Alkmaar - CrossFit Alkmaar"
        description="Personal training in Alkmaar met gecertificeerde coaches. 1-op-1 of in kleine groepen, volledig afgestemd op jouw doelen."
        url="https://crossfitalkmaar.com/personal-training-alkmaar"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Wat is het verschil tussen personal training en groepslessen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bij personal training krijg je 1-op-1 begeleiding met een programma volledig afgestemd op jouw doelen. Bij groepslessen train je in kleine groepen van max 12.",
                },
              },
              {
                "@type": "Question",
                name: "Voor wie is personal training geschikt?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Voor iedereen die extra aandacht wil: van beginners die de basis willen leren tot ervaren sporters met specifieke doelen.",
                },
              },
              {
                "@type": "Question",
                name: "Kan ik personal training combineren met groepslessen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja, dat raden we zelfs aan. Veel leden combineren 1 personal training sessie met 2-3 groepslessen per week.",
                },
              },
              {
                "@type": "Question",
                name: "Hoe lang duurt een personal training sessie?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Een sessie duurt 60 minuten. Je coach bereidt de training voor op basis van je doelen en voortgang.",
                },
              },
            ],
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
              ratingCount: "260",
              reviewCount: "260",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "Tim — lid bij CrossFit Alkmaar",
            description: "Ik voel me fit en m'n hartslag in rust is ook omlaaggegaan - Lid bij CrossFit Alkmaar deelt zijn ervaring",
            thumbnailUrl: `https://img.youtube.com/vi/HlqFX84ue3o/maxresdefault.jpg`,
            uploadDate: "2025-01-01",
            contentUrl: `https://www.youtube.com/watch?v=HlqFX84ue3o`,
            embedUrl: `https://www.youtube.com/embed/HlqFX84ue3o`,
          }),
        }}
      />

      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        role="img"
        aria-label="Personal training Alkmaar - individuele begeleiding bij CrossFit Alkmaar"
      >
        <Image
          src="/images/personal-training-header.jpg"
          alt="Personal training Alkmaar - individuele begeleiding bij CrossFit Alkmaar"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Personal Training Alkmaar
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Training die volledig om jou draait. Jouw doelen, jouw schema, jouw coach.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_pt_alkmaar_hero", "personal-training-alkmaar"); openPopup(); }}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>

      {/* Waarom PT bij CFA */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Personal training met een plan
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Personal training is meer dan een trainer die naast je staat. Bij CrossFit Alkmaar krijg je een volledig trainingsplan, afgestemd op jouw doelen. Of je nu wilt afvallen, sterker worden, revalideren of je voorbereiden op een wedstrijd.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Onze coaches zijn gecertificeerd en gespecialiseerd in functionele fitness. Ze kijken niet alleen naar je training, maar ook naar je bewegingskwaliteit, mobiliteit en — als je dat wilt — je <Link href="/voedingsadvies" className="text-blue-900 font-semibold hover:underline">voeding</Link>.
          </p>
          <p className="text-lg text-gray-700">
            Je traint in een volledig uitgeruste box met professionele apparatuur. Geen wachten op machines, geen drukte — gewoon jij en je coach.
          </p>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <Script src="https://ghl.crossfitalkmaar.com/reputation/assets/review-widget.js" strategy="lazyOnload" />
          <iframe
            className="lc_reviews_widget"
            src="https://ghl.crossfitalkmaar.com/reputation/widgets/review_widget/elOOWDMoCEHJO4WhphRj"
            frameBorder="0"
            scrolling="no"
            style={{ minWidth: '100%', width: '100%' }}
            title="Google Reviews"
          ></iframe>
        </div>
      </section>

      {/* Opties */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Trainingsopties
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                1-op-1 sessies
              </h3>
              <p className="text-gray-700">
                Maximale aandacht en volledig gepersonaliseerd. Ideaal voor specifieke doelen, revalidatie of als je de voorkeur geeft aan privétraining.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Small Group (max 4)
              </h3>
              <p className="text-gray-700">
                De persoonlijke aanpak van PT, maar samen met een klein groepje. Betaalbaar én effectief. Bekijk onze <Link href="/small-group-training" className="text-blue-900 font-semibold hover:underline">small group training</Link>.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Combi-abonnement
              </h3>
              <p className="text-gray-700">
                Combineer personal training met groepslessen voor het beste van twee werelden. Persoonlijke aandacht én de groepsenergie.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Flexibel plannen
              </h3>
              <p className="text-gray-700">
                Plan je sessies op tijden die jou uitkomen. Wij passen ons aan jouw agenda aan, niet andersom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voor wie */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Voor wie is personal training?
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Voor iedereen die meer wil dan een standaard sportschool. Of je nu net begint via de <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">Kickstart</Link>, terugkomt na een blessure, of al jaren traint maar een nieuw doel hebt — personal training geeft je de begeleiding die het verschil maakt.
          </p>
          <p className="text-lg text-gray-700">
            Bekijk onze <Link href="/tarieven" className="text-blue-900 font-semibold hover:underline">tarieven</Link> of plan direct een gratis kennismakingsgesprek.
          </p>
        </div>
      </section>

      {/* AEO Content */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Wanneer kies je personal training?</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Wanneer is personal training beter dan groepslessen?</h3>
              <p className="text-gray-600">Als je specifieke doelen hebt (revalidatie, wedstrijdvoorbereiding, sneller resultaat) of liever 1-op-1 traint. Bij CrossFit Alkmaar combineren veel leden <Link href="/personal-training" className="text-blue-900 font-semibold hover:underline">personal training</Link> met groepslessen voor het beste van beide werelden.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Hoe ziet een personal training sessie eruit?</h3>
              <p className="text-gray-600">Je trainer maakt een programma op maat, gebaseerd op jouw doelen en mogelijkheden. Elke sessie bevat warming-up, techniekwerk, de training en een cooling-down — volledig afgestemd op jou.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Wat is het verschil tussen personal training en small group training?</h3>
              <p className="text-gray-600">Bij personal training train je 1-op-1. Bij <Link href="/small-group-training" className="text-blue-900 font-semibold hover:underline">small group training</Link> train je in een groep van max 6 met bijna dezelfde persoonlijke aandacht, maar voor een lagere prijs en met de extra motivatie van een groep.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lid aan het woord */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Tim — lid bij CrossFit Alkmaar</h2>
          <p className="text-gray-600 text-center mb-8">&quot;Ik voel me fit en m&apos;n hartslag in rust is ook omlaaggegaan&quot;</p>
          <div className="relative w-full rounded-lg shadow-sm overflow-hidden" style={{ paddingBottom: "56.25%" }}>
            <div className="absolute top-0 left-0 w-full h-full">
              <TrackedYouTubeEmbed videoId="HlqFX84ue3o" title="Tim — lid bij CrossFit Alkmaar" />
            </div>
          </div>
          <p className="text-center mt-6">
            <Link href="/onze-leden" className="text-blue-900 font-semibold hover:underline">Bekijk meer verhalen van onze leden →</Link>
          </p>
        </div>
      </section>

      {/* Veelgestelde vragen */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Veelgestelde vragen</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Wat is het verschil tussen personal training en groepslessen?</h3>
              <p className="text-gray-600">Bij personal training krijg je 1-op-1 begeleiding met een programma volledig afgestemd op jouw doelen. Bij <Link href="/groepslessen" className="text-blue-900 font-semibold hover:underline">groepslessen</Link> train je in kleine groepen van max 12.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Voor wie is personal training geschikt?</h3>
              <p className="text-gray-600">Voor iedereen die extra aandacht wil: van beginners die de basis willen leren tot ervaren sporters met specifieke doelen.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Kan ik personal training combineren met groepslessen?</h3>
              <p className="text-gray-600">Ja, dat raden we zelfs aan. Veel leden combineren 1 personal training sessie met 2-3 <Link href="/groepslessen" className="text-blue-900 font-semibold hover:underline">groepslessen</Link> per week.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Hoe lang duurt een personal training sessie?</h3>
              <p className="text-gray-600">Een sessie duurt 60 minuten. Je coach bereidt de training voor op basis van je doelen en voortgang.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start met personal training
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Plan een gratis kennismakingsgesprek en ontdek wat personal training voor jou kan betekenen.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_pt_alkmaar_footer", "personal-training-alkmaar"); openPopup(); }}
            className="bg-white text-blue-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>
    </div>
  );
}
