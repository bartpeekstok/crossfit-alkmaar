"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="fixed top-[72px] md:top-[88px] left-0 right-0 bg-white shadow-sm z-40 py-2 md:py-3 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="CrossFit Alkmaar"
              width={180}
              height={60}
              className="h-10 md:h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/kickstart" className="text-gray-700 hover:text-blue-900 font-medium">
              Kickstart
            </Link>
            <Link href="/programmas" className="text-gray-700 hover:text-blue-900 font-medium">
              Programma's
            </Link>
            <Link href="/prijzen" className="text-gray-700 hover:text-blue-900 font-medium">
              Prijzen
            </Link>
            <Link href="/over-ons" className="text-gray-700 hover:text-blue-900 font-medium">
              Over ons
            </Link>
            <button
              onClick={() => setPopupOpen(true)}
              className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-2 px-6 rounded-lg transition"
            >
              Gratis intake
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/kickstart"
                className="text-gray-700 hover:text-blue-900 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kickstart
              </Link>
              <Link
                href="/programmas"
                className="text-gray-700 hover:text-blue-900 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Programma's
              </Link>
              <Link
                href="/prijzen"
                className="text-gray-700 hover:text-blue-900 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Prijzen
              </Link>
              <Link
                href="/over-ons"
                className="text-gray-700 hover:text-blue-900 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Over ons
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setPopupOpen(true);
                }}
                className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-2 px-6 rounded-lg transition text-center"
              >
                Gratis intake
              </button>
            </div>
          </nav>
        )}
      </header>

      {/* Spacer */}
      <div className="h-[56px] md:h-[80px]"></div>

      {/* Popup - BOVEN ALLES met z-[200] */}
      {popupOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50" 
            onClick={() => setPopupOpen(false)}
          ></div>
          <div className="relative w-full max-w-lg bg-blue-900 rounded-lg overflow-hidden shadow-2xl">
            <button 
              onClick={() => setPopupOpen(false)} 
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-blue-900 text-white text-center py-6 px-8">
              <h2 className="text-2xl font-bold mb-2">VUL HIER JE GEGEVENS IN OM VAN START TE GAAN</h2>
              <p className="text-gray-300">Neem de eerste stap op weg naar jouw fitness doelen</p>
            </div>
            <div className="bg-white p-6">
              <iframe 
                src="https://kilo.gymleadmachine.com/widget/form/peswXaJSSZHHMPxZQ4es" 
                style={{ width: "100%", height: "350px", border: "none" }} 
                title="Website Form"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}