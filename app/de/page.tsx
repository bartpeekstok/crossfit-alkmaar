"use client";

import Link from "next/link";
import Script from "next/script";
import { usePopup } from "../components/PopupContext";

export default function HomePageDE() {
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Hero Section */}
      <section
        className="relative text-white py-20 px-6 min-h-[600px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Hier wirst du stärker und fitter
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-300">
            Kleine Gruppen, professionelle Coaches, skalierbar auf jedes Niveau.
          </p>
          <p className="text-lg mb-8 text-gray-400">
            Ob du 30, 50 oder 60+ bist, lange keinen Sport gemacht hast oder wieder anfangen möchtest: Wir helfen dir, sicher und effektiv stärker zu werden.
          </p>
          <button
            onClick={openPopup}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition cursor-pointer"
          >
            Kostenloses Probetraining
          </button>
        </div>
      </section>

      {/* How it works - 3 steps */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">So funktioniert das Training bei CrossFit Alkmaar</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <button onClick={openPopup} className="flex flex-col items-center text-center hover:scale-105 transition cursor-pointer">
              <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Kostenloses Probetraining</h3>
              <p className="text-gray-600">Komm vorbei für ein kostenloses Probetraining. Wir möchten alles über deine Ziele erfahren, womit du kämpfst und was du bereits versucht hast.</p>
            </button>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Persönlicher Trainingsplan</h3>
              <p className="text-gray-600">Jedes Training wird an dein Niveau, deine Ziele und eventuelle Einschränkungen angepasst. Du trainierst immer unter Anleitung professioneller Coaches.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Ergebnisse sehen und fühlen</h3>
              <p className="text-gray-600">Innerhalb von Wochen fühlst du dich stärker, energiegeladener und fitter. Alle drei Monate hast du ein Check-in-Gespräch mit einem der Coaches.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video - Jarrald */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg aspect-video">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/1qhbmRPtysU" title="CrossFit Alkmaar" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <p className="text-center text-gray-900 mt-6 text-xl font-medium italic">
            Jarrald (Kickstart-Teilnehmer Nov 2024): 'War lange Sponsor von Fitnessstudios, in die ich nie ging, jetzt 20 Kilo abgenommen.'
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Wähle das Programm, das zu dir passt</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Training für jeden und jedes Niveau.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-3">28 Day Kickstart</h3>
              <p className="text-gray-600 mb-6">Hier startet jeder. In vier Wochen bauen wir gemeinsam eine solide Basis auf.</p>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li>✓ Werde stärker und fitter</li>
                <li>✓ Struktur und Verantwortlichkeit</li>
                <li>✓ Kleine Gruppen (max. 6)</li>
                <li>✓ Grundlegende Lifestyle-Beratung</li>
              </ul>
              <Link href="/de/kickstart" className="block w-full text-center bg-blue-900 hover:bg-blue-950 text-white font-semibold py-3 rounded-lg transition">Mehr Info</Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-3">BUILD</h3>
              <p className="text-gray-600 mb-6">Semi-Personal Training in einer festen Gruppe.</p>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li>✓ Vorteile von Personal Training</li>
                <li>✓ In einer festen Gruppe von max. 6</li>
                <li>✓ Strukturierter Zeitplan</li>
                <li>✓ Mit deinen festen Coaches</li>
              </ul>
              <Link href="/small-group-training" className="block w-full text-center bg-blue-900 hover:bg-blue-950 text-white font-semibold py-3 rounded-lg transition">Mehr Info</Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-3">Gruppenkurse</h3>
              <p className="text-gray-600 mb-6">Abwechslungsreich, herausfordernd und immer an dein Niveau anpassbar.</p>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li>✓ Die besten Coaches in Alkmaar</li>
                <li>✓ Flexible Buchung</li>
                <li>✓ Lerne neue Freunde kennen</li>
                <li>✓ Für alle Niveaus</li>
              </ul>
              <Link href="/groepslessen" className="block w-full text-center bg-blue-900 hover:bg-blue-950 text-white font-semibold py-3 rounded-lg transition">Mehr Info</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Card */}
      <section className="py-12 px-6 bg-gray-200">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <h3 className="text-2xl font-bold mb-4">Bereit anzufangen?</h3>
            <button
              onClick={openPopup}
              className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-10 text-lg rounded-lg transition cursor-pointer"
            >
              Kostenloses Probetraining
            </button>
          </div>
        </div>
      </section>

      {/* Video - Bert */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg aspect-video">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/a2zbZIlU27Y" title="CrossFit Alkmaar" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <p className="text-center text-gray-900 mt-6 text-xl font-medium italic">
            Bert (2 Jahre Mitglied): 'Ich muss sagen, ich hätte nicht erwartet, dass es mir so viel Spaß macht wie jetzt'
          </p>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Was unsere Mitglieder sagen</h2>
          <Script src="https://reputationhub.site/reputation/assets/review-widget.js" strategy="lazyOnload" />
          <iframe
            className="lc_reviews_widget"
            src="https://reputationhub.site/reputation/widgets/review_widget/P4WyX9g1OWjtqUHseqEA?widgetId=697a1827aad816c8a635a513"
            frameBorder="0"
            scrolling="no"
            style={{ minWidth: '100%', width: '100%' }}
            title="Google Reviews"
          ></iframe>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">CrossFit Alkmaar in Zahlen</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <a
              href="https://www.google.com/search?q=crossfit+alkmaar#lrd=0x47cf573834f8b5b7:0x4a55c3c9c9a67e0e,1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center hover:scale-105 transition cursor-pointer"
            >
              <div className="text-5xl font-bold text-blue-900 mb-2">260+</div>
              <p className="text-gray-600">Google Bewertungen ⭐</p>
            </a>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">300+</div>
              <p className="text-gray-600">Aktive Mitglieder</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">12+</div>
              <p className="text-gray-600">Jahre Erfahrung</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">35+</div>
              <p className="text-gray-600">Durchschnittsalter</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">15K</div>
              <p className="text-gray-600">Tassen Kaffee/Jahr ☕</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Häufig gestellte Fragen</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Ich bin nicht fit genug, um anzufangen</h3>
              <p className="text-gray-600">Das ist genau der Grund, warum du anfangen solltest. Jedes Training wird an dein Niveau angepasst.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Ich habe keine Zeit, 5x pro Woche zu trainieren</h3>
              <p className="text-gray-600">Das musst du auch nicht. Viele Mitglieder trainieren 2-3x pro Woche und sehen tolle Ergebnisse.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Bin ich zu alt, um mit dem Training zu beginnen?</h3>
              <p className="text-gray-600">Absolut nicht. Unser Durchschnittsalter ist 35+. Wir haben Mitglieder von 20 bis 70+, die sicher trainieren.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Was ist, wenn ich Verletzungen oder Einschränkungen habe?</h3>
              <p className="text-gray-600">Wir passen Bewegungen an oder wählen Alternativen. Unsere Coaches haben Erfahrung mit Rehabilitation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bereit anzufangen?</h2>
          <p className="text-xl mb-8">Buche ein kostenloses Probetraining. Keine Verpflichtungen.</p>
          <button
            onClick={openPopup}
            className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-semibold py-4 px-8 rounded-lg transition text-lg cursor-pointer"
          >
            Kostenloses Probetraining
          </button>
        </div>
      </section>
    </div>
  );
}
