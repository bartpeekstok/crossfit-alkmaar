"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <header className="bg-gray-900 text-white py-4 px-6 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo.png" 
              alt="CrossFit Alkmaar" 
              width={50} 
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/programmas" className="hover:text-blue-400 transition">Programma's</Link>
            <Link href="/kickstart" className="hover:text-blue-400 transition">Kickstart</Link>
            <Link href="/over-ons" className="hover:text-blue-400 transition">Over ons</Link>
            <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
          </nav>

          <button 
            onClick={() => setPopupOpen(true)}
            className="hidden md:block bg-blue-900 hover:bg-blue-950 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Gratis intake
          </button>

          <button 
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden mt-4 space-y-4 text-center">
            <Link href="/programmas" className="block hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Programma's</Link>
            <Link href="/kickstart" className="block hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Kickstart</Link>
            <Link href="/over-ons" className="block hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Over ons</Link>
            <Link href="/contact" className="block hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Contact</Link>
            <button 
              onClick={() => { setPopupOpen(true); setMenuOpen(false); }}
              className="block w-full bg-blue-900 hover:bg-blue-950 text-white font-semibold py-2 px-4 rounded-lg transition mx-auto max-w-xs"
            >
              Gratis intake
            </button>
          </nav>
        )}
      </header>

      {/* Popup met header */}
      {popupOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setPopupOpen(false)}
          ></div>
          
          <div className="relative w-full max-w-lg bg-[#1e3a5f] rounded-lg overflow-hidden shadow-2xl">
            {/* Close button */}
            <button 
              onClick={() => setPopupOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="bg-[#1e3a5f] text-white text-center py-6 px-8">
              <h2 className="text-2xl font-bold mb-2">VUL HIER JE GEGEVENS IN OM VAN START TE GAAN</h2>
              <p className="text-gray-300">Neem de eerste stap op weg naar jouw fitness doelen</p>
            </div>
            
            {/* Form */}
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