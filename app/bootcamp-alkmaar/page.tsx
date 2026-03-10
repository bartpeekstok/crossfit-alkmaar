"use client";

import { usePopup } from "../components/PopupContext";
import { trackCTAClick } from "../lib/analytics";
import ServiceSchema from "../components/ServiceSchema";
import Image from "next/image";
import Link from "next/link";
import TrackedYouTubeEmbed from "../components/TrackedYouTubeEmbed";
import Script from "next/script";

export default function BootcampAlkmaarPage() {
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen bg-gray-200">
      <ServiceSchema
        name="Bootcamp Alkmaar - CrossFit Alkmaar"
        description="Op zoek naar een bootcamp in Alkmaar? CrossFit Alkmaar biedt intensieve groepstraining met coaching, binnen en het hele jaar door."
        url="https://crossfitalkmaar.com/bootcamp-alkmaar"
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
                name: "Wat is het verschil tussen bootcamp en CrossFit?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Een bootcamp is meestal buiten en gericht op cardio. Bij CrossFit Alkmaar train je binnen, het hele jaar door, met professionele coaching en een mix van kracht, conditie en functionele bewegingen.",
                },
              },
              {
                "@type": "Question",
                name: "Is bootcamp geschikt voor beginners?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja. We passen elke oefening aan op jouw niveau. Via onze Kickstart leer je eerst de basis voordat je in een groepsles stapt.",
                },
              },
              {
                "@type": "Question",
                name: "Hoe intensief is een training?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Elke les duurt 60 minuten en is uitdagend maar schaalbaar. Je bepaalt zelf je intensiteit, de coach zorgt voor de juiste techniek.",
                },
              },
              {
                "@type": "Question",
                name: "Train ik buiten of binnen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Binnen, in onze volledig uitgeruste box aan de Phoenixstraat. Geen modder of regen — gewoon een goede training, elke dag.",
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
            name: "Lisette — lid bij CrossFit Alkmaar",
            description: "Ik voel me sindsdien een stuk fitter! - Lid bij CrossFit Alkmaar deelt haar ervaring",
            thumbnailUrl: `https://img.youtube.com/vi/WuOyAWYDeG0/maxresdefault.jpg`,
            uploadDate: "2025-01-01",
            contentUrl: `https://www.youtube.com/watch?v=WuOyAWYDeG0`,
            embedUrl: `https://www.youtube.com/embed/WuOyAWYDeG0`,
          }),
        }}
      />

      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        role="img"
        aria-label="Bootcamp Alkmaar - intensieve groepstraining bij CrossFit Alkmaar"
      >
        <Image
          src="/images/bootcamp-alkmaar-header.jpg"
          alt="Bootcamp Alkmaar - intensieve groepstraining bij CrossFit Alkmaar"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bootcamp Alkmaar
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            De energie van een bootcamp, maar dan binnen, het hele jaar door, en met échte coaching.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_bootcamp_hero", "bootcamp-alkmaar"); openPopup(); }}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Wat onze leden zeggen</h2>
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

      {/* Bootcamp vs CrossFit */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Waarom CrossFit het betere bootcamp is
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Een bootcamp is leuk: buiten trainen, hard werken in een groep, lekker zweten. Maar vaak zijn de groepen groot, is er weinig coaching op techniek, en als het regent of vriest gaat het niet door.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Bij CrossFit Alkmaar krijg je alles wat een bootcamp leuk maakt — de groepsenergie, de intensiteit, de variatie — maar dan beter. Binnen, in een volledig uitgeruste box. Met professionele coaches die op je techniek letten. In groepen van maximaal 12 personen.
          </p>
          <p className="text-lg text-gray-700">
            En het belangrijkste: je traint het hele jaar door, weer of geen weer. Geen seizoenen, geen excuses.
          </p>
        </div>
      </section>

      {/* Vergelijking */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Bootcamp vs. CrossFit Alkmaar
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Weer-onafhankelijk
              </h3>
              <p className="text-gray-700">
                Geen afgelaste trainingen door regen of kou. Je traint binnen in een professionele box, het hele jaar door.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Échte coaching
              </h3>
              <p className="text-gray-700">
                Niet alleen voordoen en natellen, maar techniekfeedback op elke beweging. In groepen van max 12 is daar ruimte voor.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Professionele apparatuur
              </h3>
              <p className="text-gray-700">
                Barbells, rowers, ski-ergs, pull-up rigs, dumbbells. Meer mogelijkheden dan een veldje in het park.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Geprogrammeerde progressie
              </h3>
              <p className="text-gray-700">
                Niet elke week hetzelfde circuit. Onze <Link href="/programmas" className="text-blue-900 font-semibold hover:underline">programmering</Link> is opgebouwd voor langetermijnresultaat: je wordt elke maand sterker en fitter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voor wie */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Mis je de bootcamp-sfeer? Die hebben we ook.
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            De sfeer bij CrossFit Alkmaar lijkt op de beste bootcamps: hard werken, lachen, samen afzien en daarna een high five. Het verschil is dat het hier elke dag zo is, niet alleen in de zomer.
          </p>
          <p className="text-lg text-gray-700">
            Nieuw? Je start met de <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">Kickstart</Link> — een persoonlijk introductietraject zodat je voorbereid in je eerste groepsles staat. Geen voorkennis of ervaring nodig.
          </p>
        </div>
      </section>

      {/* AEO Content */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Wat is het verschil met bootcamp?</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Wat is het verschil tussen bootcamp en CrossFit?</h3>
              <p className="text-gray-600">Bootcamps zijn vaak buiten, met veel cardio en weinig technische begeleiding. Bij CrossFit Alkmaar train je binnen met professionele apparatuur, leer je techniek en bouw je systematisch kracht op. De intensiteit is vergelijkbaar, maar de begeleiding en progressie zijn veel beter.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Is CrossFit zwaarder dan bootcamp?</h3>
              <p className="text-gray-600">Niet per se. Bij CrossFit Alkmaar wordt elke oefening geschaald naar jouw niveau. Een beginner doet dezelfde workout als een ervaren atleet, maar met aangepast gewicht en bewegingen. Zo is het uitdagend maar altijd haalbaar.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Waarom kiezen mensen voor CrossFit in plaats van bootcamp?</h3>
              <p className="text-gray-600">Drie redenen: professionele coaching bij elke rep, progressie in kracht en techniek die je bij bootcamp mist, en een community die je vasthoudt. Bij bootcamp haak je af als de motivatie wegvalt — bij CrossFit houden je groepsgenoten je vast.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lid aan het woord */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Lisette — lid bij CrossFit Alkmaar</h2>
          <p className="text-gray-600 text-center mb-8">&quot;Ik voel me sindsdien een stuk fitter!&quot;</p>
          <div className="relative w-full rounded-lg shadow-sm overflow-hidden" style={{ paddingBottom: "56.25%" }}>
            <div className="absolute top-0 left-0 w-full h-full">
              <TrackedYouTubeEmbed videoId="WuOyAWYDeG0" title="Lisette — lid bij CrossFit Alkmaar" />
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
              <h3 className="text-xl font-semibold mb-2">Wat is het verschil tussen bootcamp en CrossFit?</h3>
              <p className="text-gray-600">Een bootcamp is meestal buiten en gericht op cardio. Bij CrossFit Alkmaar train je binnen, het hele jaar door, met professionele coaching en een mix van kracht, conditie en functionele bewegingen. Bekijk ons <Link href="/groepslessen" className="text-blue-900 font-semibold hover:underline">lesrooster</Link> voor alle tijden.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Is bootcamp geschikt voor beginners?</h3>
              <p className="text-gray-600">Ja. We passen elke oefening aan op jouw niveau. Via onze <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">Kickstart</Link> leer je eerst de basis voordat je in een groepsles stapt.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Hoe intensief is een training?</h3>
              <p className="text-gray-600">Elke les duurt 60 minuten en is uitdagend maar schaalbaar. Je bepaalt zelf je intensiteit, de coach zorgt voor de juiste techniek. Bekijk onze <Link href="/tarieven" className="text-blue-900 font-semibold hover:underline">tarieven</Link> voor alle opties.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Train ik buiten of binnen?</h3>
              <p className="text-gray-600">Binnen, in onze volledig uitgeruste box aan de Phoenixstraat. Geen modder of regen — gewoon een goede training, elke dag.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Klaar voor het betere bootcamp?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Plan een gratis kennismakingsgesprek en ervaar het zelf.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_bootcamp_footer", "bootcamp-alkmaar"); openPopup(); }}
            className="bg-white text-blue-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>
    </div>
  );
}
