"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programmaOpen, setProgrammaOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <img src="/images/logo.png" alt="CrossFit Alkmaar" className="h-14" style={{ width: "180px", objectFit: "contain" }} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Programma's dropdown */}
            <div className="relative" onMouseEnter={() => setProgrammaOpen(true)} onMouseLeave={() => setProgrammaOpen(false)}>
              <button className="text-gray-700 hover:text-blue-900 font-medium flex items-center">
                Programma&apos;s
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {programmaOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[200px]">
                  <Link href="/kickstart" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">28 Day Kickstart</Link>
                  <Link href="/personal-training" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Personal Training</Link>
                  <Link href="/small-group" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Small Group Training</Link>
                  <Link href="/groepslessen" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Groepslessen</Link>
                  <Link href="/voeding" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Voedingsadvies</Link>
                </div>
              )}
            </div>
            <Link href="/blog" className="text-gray-700 hover:text-blue-900 font-medium">Blog</Link>
            <Link href="/over-ons" className="text-gray-700 hover:text-blue-900 font-medium">Over ons</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-900 font-medium">Contact</Link>
            <button onClick={() => setPopupOpen(true)} className="bg-blue-900 hover:bg-blue-950 text-white font-semibold px-6 py-2 rounded-lg transition">
              Gratis intake
            </button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2">
              <button onClick={() => setProgrammaOpen(!programmaOpen)} className="w-full text-left py-2 text-gray-700 font-medium flex items-center justify-between">
                Programma&apos;s
                <svg className={`w-4 h-4 transition-transform ${programmaOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {programmaOpen && (
                <div className="pl-4 pb-2">
                  <Link href="/kickstart" className="block py-2 text-sm text-gray-600" onClick={() => setMobileMenuOpen(false)}>28 Day Kickstart</Link>
                  <Link href="/personal-training" className="block py-2 text-sm text-gray-600" onClick={() => setMobileMenuOpen(false)}>Personal Training</Link>
                  <Link href="/small-group" className="block py-2 text-sm text-gray-600" onClick={() => setMobileMenuOpen(false)}>Small Group Training</Link>
                  <Link href="/groepslessen" className="block py-2 text-sm text-gray-600" onClick={() => setMobileMenuOpen(false)}>Groepslessen</Link>
                  <Link href="/voeding" className="block py-2 text-sm text-gray-600" onClick={() => setMobileMenuOpen(false)}>Voedingsadvies</Link>
                </div>
              )}
            </div>
            <Link href="/blog" className="block px-4 py-2 text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <Link href="/over-ons" className="block px-4 py-2 text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>Over ons</Link>
            <Link href="/contact" className="block px-4 py-2 text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <div className="px-4 py-4">
              <button onClick={() => { setPopupOpen(true); setMobileMenuOpen(false); }} className="w-full bg-blue-900 hover:bg-blue-950 text-white font-semibold px-6 py-3 rounded-lg transition">
                Gratis intake
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Popup */}
      {popupOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setPopupOpen(false)}></div>
          <div className="relative w-full max-w-lg bg-blue-900 rounded-lg overflow-hidden shadow-2xl">
            <button onClick={() => setPopupOpen(false)} className="absolute top-4 right-4 text-white hover:text-gray-300 z-10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-blue-900 text-white text-center py-6 px-8">
              <h2 className="text-2xl font-bold mb-2">PLAN JE GRATIS INTAKE</h2>
              <p className="text-gray-300">Laat je gegevens achter, we nemen snel contact met je op.</p>
            </div>
            <div className="bg-white p-6">
              <iframe src="https://kilo.gymleadmachine.com/widget/form/peswXaJSSZHHMPxZQ4es" style={{ width: "100%", height: "350px", border: "none" }} title="Website Form"></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}