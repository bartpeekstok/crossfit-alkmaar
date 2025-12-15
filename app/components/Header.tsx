"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
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

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/programmas" className="hover:text-blue-400 transition">Programma's</Link>
          <Link href="/kickstart" className="hover:text-blue-400 transition">Kickstart</Link>
          <Link href="/over-ons" className="hover:text-blue-400 transition">Over ons</Link>
          <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </nav>

        {/* CTA Button */}
        <Link 
          href="/contact" 
          className="hidden md:block bg-blue-900 hover:bg-blue-950 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Gratis proefles
        </Link>

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden mt-4 space-y-4 text-center">
          <Link href="/programmas" className="block hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Programma's</Link>
          <Link href="/kickstart" className="block hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Kickstart</Link>
          <Link href="/over-ons" className="block hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Over ons</Link>
          <Link href="/contact" className="block hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/contact" className="block bg-blue-900 hover:bg-blue-950 text-white font-semibold py-2 px-4 rounded-lg transition mx-4" onClick={() => setMenuOpen(false)}>Gratis proefles</Link>
        </nav>
      )}
    </header>
  );
}