"use client";

import Link from "next/link";

export default function IntakeGeboektPage() {
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
          <div className="w-20 h-20 bg-white text-blue-900 rounded-full flex items-center justify-center text-4xl mx-auto mb-8">
            ✓
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Je intake is geboekt!
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            We nemen zo snel mogelijk contact met je op om een moment te prikken. Tot snel!
          </p>
          <Link
            href="/"
            className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Terug naar home
          </Link>
        </div>
      </section>
    </div>
  );
}