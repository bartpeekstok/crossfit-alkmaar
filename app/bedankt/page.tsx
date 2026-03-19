"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { trackEvent } from "../lib/analytics";

export default function BedanktPage() {
  useEffect(() => {
    trackEvent("hyrox_event_payment", { page_location: "bedankt" });
  }, []);

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Hero */}
      <section
        className="relative py-20 px-6 min-h-[500px] flex items-center"
        role="img"
        aria-label="Bedankt voor je inschrijving voor het HYROX event"
      >
        <Image
          src="/images/blog/Blog hyrox.jpg"
          alt="HYROX Official Gym - CrossFit Alkmaar"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Je inschrijving is bevestigd!
          </h1>
          <p className="text-xl text-white mb-4">
            Bedankt voor je aanmelding. Je ontvangt een bevestiging via e-mail.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            We zien je op de mat bij CrossFit Alkmaar!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/hyrox-pft-alkmaar"
              className="inline-block bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition text-lg"
            >
              HYROX PFT — 9 mei
            </Link>
            <Link
              href="/hyrox-simulatie-alkmaar"
              className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-semibold py-4 px-8 rounded-lg transition text-lg"
            >
              HYROX Simulatie — 30 mei
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
