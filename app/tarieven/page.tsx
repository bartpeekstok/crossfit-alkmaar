"use client";

import Image from "next/image";
import Link from "next/link";
import { usePopup } from "../components/PopupContext";
import { trackCTAClick } from "../lib/analytics";

export default function TarievenPage() {
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[400px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tarieven</h1>
          <p className="text-xl text-gray-300 mb-8">
            Persoonlijke coaching in kleine groepen, een warme community en maandelijks opzegbare memberships. Geen verborgen kosten.
          </p>
          <button
            onClick={() => { trackCTAClick('gratis_intake_tarieven_hero', 'tarieven'); openPopup(); }}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>

      {/* Waarom investeren */}
      <section className="py-12 px-6 bg-gray-200">
        <div className="max-w-5xl mx-auto text-gray-700 leading-relaxed space-y-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Waarom investeren in coaching?</h2>
          <p>Bij een reguliere sportschool betaal je voor toegang tot een zaal. Bij CrossFit Alkmaar investeer je in begeleiding, resultaat en een community die je verder brengt.</p>
          <p>Elke training wordt gegeven door een professionele coach, in kleine groepen van maximaal 6 tot 12 personen. Je hoeft zelf geen programma te bedenken &mdash; dat doen wij. Onze coaches letten op jouw techniek, passen het programma aan op jouw niveau en houden je progressie bij met 90 day check ins.</p>
          <p>Daarnaast krijg je er iets bij wat geen sportschool kan bieden: een hechte community die je motiveert om te blijven komen. Geen ronddwalen in een drukke zaal, maar gerichte training met mensen die hetzelfde doel hebben. En als je er een tijdje niet bent geweest? Dan nemen we persoonlijk contact met je op &mdash; geen geautomatiseerd mailtje, maar een coach die even checkt hoe het gaat.</p>
          <p className="font-semibold text-gray-900">Dat is waar je in investeert. Niet in een pasje, maar in je gezondheid.</p>
        </div>
      </section>

      <div className="relative w-full h-80 md:h-96">
        <Image src="/images/groepslessen-header.jpg" alt="Groepslessen bij CrossFit Alkmaar" fill className="object-cover object-[center_35%]" />
      </div>

      {/* Groepslessen */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">Groepslessen</h2>
          <p className="text-center text-gray-600 mb-8">Inclusief 90 day check ins met een coach. Geschikt voor elk niveau.</p>
          <div className="mb-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8 max-w-3xl mx-auto">
            <p className="font-bold text-xl mb-5 text-center">Alle groepslesabonnementen inclusief:</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-gray-800 font-semibold">
              <p className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-900 rounded-full shrink-0"></span>Professionele coaches</p>
              <p className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-900 rounded-full shrink-0"></span>Max 12 deelnemers per les</p>
              <p className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-900 rounded-full shrink-0"></span>90 day check ins met een coach</p>
              <p className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-900 rounded-full shrink-0"></span>Geschikt voor elk niveau</p>
              <p className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-900 rounded-full shrink-0"></span>Groot rooster, flexibel plannen</p>
              <p className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-900 rounded-full shrink-0"></span>SportBit app</p>
              <p className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-900 rounded-full shrink-0"></span>Gratis koffie en thee</p>
              <p className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-900 rounded-full shrink-0"></span>Kleedkamers en douches</p>
              <p className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-900 rounded-full shrink-0"></span>Gratis parkeren</p>
              <p className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-900 rounded-full shrink-0"></span>CrossFit, Hyrox en Strength</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-4 text-center border border-gray-200">
              <p className="text-gray-800 text-base font-medium mb-1">2x per week</p>
              <p className="text-2xl font-bold text-blue-900">€99,95</p>
              <p className="text-gray-800 text-xs">per maand</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 text-center border-2 border-blue-900 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-900 text-white text-xs px-3 py-1 rounded-full">Populair</span>
              <p className="text-gray-800 text-base font-medium mb-1">3x per week</p>
              <p className="text-2xl font-bold text-blue-900">€127,50</p>
              <p className="text-gray-800 text-xs">per maand</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 text-center border border-gray-200">
              <p className="text-gray-800 text-base font-medium mb-1">Onbeperkt</p>
              <p className="text-2xl font-bold text-blue-900">€159,95</p>
              <p className="text-gray-800 text-xs">per maand</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link href="/groepslessen" className="text-blue-900 font-semibold hover:underline">Meer over groepslessen &rarr;</Link>
          </div>
        </div>
      </section>

      <div className="relative w-full h-80 md:h-96">
        <Image src="/images/small-group-training-header.jpg" alt="BUILD Small Group Training" fill className="object-cover object-top" />
      </div>

      {/* BUILD Small Group */}
      <section className="py-12 px-6 bg-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">BUILD Small Group Training</h2>
          <p className="text-center text-gray-600 mb-8">Semi personal training in een vaste groep van maximaal 6 personen.</p>
          <div className="mb-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8 max-w-3xl mx-auto">
            <p className="font-bold text-xl mb-2 text-center">BUILD inclusief:</p>
            <p className="text-gray-700 text-base mb-5 text-center">Alles van groepslessen, plus:</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-gray-800 font-semibold">
              <p className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-900 rounded-full shrink-0"></span>Max 6 deelnemers per training</p>
              <p className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-900 rounded-full shrink-0"></span>Programma op maat</p>
              <p className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-900 rounded-full shrink-0"></span>Vaste groep, vaste coaches</p>
              <p className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-900 rounded-full shrink-0"></span>Je plek is altijd gereserveerd</p>
              <p className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-900 rounded-full shrink-0"></span>Persoonlijke aandacht in een groep</p>
              <p className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-900 rounded-full shrink-0"></span>Voordeliger dan personal training</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-4 text-center border border-gray-200">
              <p className="text-gray-800 text-base font-medium mb-1">2x per week</p>
              <p className="text-2xl font-bold text-blue-900">€245</p>
              <p className="text-gray-800 text-xs">per maand</p>
              <p className="text-gray-800 text-base font-medium mt-2"><span className="text-blue-900">&#8226;</span> 2 BUILD trainingen</p>
              <p className="text-gray-800 text-base font-medium"><span className="text-blue-900">&#8226;</span> 1 groepsles</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 text-center border border-gray-200">
              <p className="text-gray-800 text-base font-medium mb-1">3x per week</p>
              <p className="text-2xl font-bold text-blue-900">€367,50</p>
              <p className="text-gray-800 text-xs">per maand</p>
              <p className="text-gray-800 text-base font-medium mt-2"><span className="text-blue-900">&#8226;</span> 3 BUILD trainingen</p>
              <p className="text-gray-800 text-base font-medium"><span className="text-blue-900">&#8226;</span> 2 groepslessen</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link href="/small-group-training" className="text-blue-900 font-semibold hover:underline">Meer over BUILD &rarr;</Link>
          </div>
        </div>
      </section>

      <div className="relative w-full h-80 md:h-96">
        <Image src="/images/kickstart-header.jpg" alt="28 Day Kickstart" fill className="object-cover object-[center_15%]" />
      </div>

      {/* Kickstart */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">28 Day Kickstart</h2>
          <p className="text-center text-gray-600 mb-8">Nieuw hier? Iedereen start met de Kickstart. In vier weken leggen we samen een solide basis.</p>
          <div className="mb-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8 max-w-3xl mx-auto">
            <p className="font-bold text-xl mb-5 text-center">Kickstart inclusief:</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-gray-800 font-semibold">
              <p className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-900 rounded-full shrink-0"></span>12 trainingen in 4 weken</p>
              <p className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-900 rounded-full shrink-0"></span>Max 6 deelnemers per groep</p>
              <p className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-900 rounded-full shrink-0"></span>Basis lifestyle advies</p>
              <p className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-900 rounded-full shrink-0"></span>Leer de juiste techniek</p>
              <p className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-900 rounded-full shrink-0"></span>Aandacht voor jouw doelen</p>
              <p className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-900 rounded-full shrink-0"></span>Een veilige start</p>
              <p className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-900 rounded-full shrink-0"></span>Geschikt voor beginners en gevorderden</p>
              <p className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-900 rounded-full shrink-0"></span>Eindgesprek met advies</p>
            </div>
          </div>
          <div className="max-w-xs mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-4 text-center border border-gray-200">
              <p className="text-gray-800 text-base font-medium mb-1">4 weken</p>
              <p className="text-2xl font-bold text-blue-900">€500</p>
              <p className="text-gray-800 text-xs">eenmalig</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">Meer over de Kickstart &rarr;</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Benieuwd welk programma bij jou past?</h2>
          <p className="text-xl mb-8">Plan een gratis kennismaking. We bespreken je doelen en adviseren het beste programma.</p>
          <button
            onClick={() => { trackCTAClick('gratis_intake_tarieven', 'tarieven'); openPopup(); }}
            className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-semibold py-4 px-8 rounded-lg transition text-lg cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>
    </div>
  );
}
