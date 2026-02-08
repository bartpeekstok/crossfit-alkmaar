"use client";

import { useEffect } from "react";
import Link from "next/link";
import { trackEvent } from "../lib/analytics";
import TrackedYouTubeEmbed from "../components/TrackedYouTubeEmbed";

export default function IntakeGeboektPage() {
  useEffect(() => {
    trackEvent("intake_booked", { page_location: "intake-geboekt" });
  }, []);

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Hero */}
      <section
        className="relative py-20 px-6 min-h-[500px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: 'white' }}
          >
            Je intake is geboekt!
          </h1>
          <p className="text-xl text-white mb-8">
            We sturen je een bevestiging via e-mail en Whatsapp, tot snel bij CrossFit Alkmaar!
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Terug naar home
          </Link>
        </div>
      </section>

      {/* Video sectie */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
            Zo ziet je intake eruit
          </h2>
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <TrackedYouTubeEmbed videoId="-3KF7VGVzdk" title="Intake bij CrossFit Alkmaar" />
          </div>
        </div>
      </section>
    </div>
  );
}