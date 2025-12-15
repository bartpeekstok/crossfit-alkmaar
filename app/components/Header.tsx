"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">CrossFit Alkmaar</Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-blue-400 transition">Home</Link>
            <Link href="/programmas" className="hover:text-blue-400 transition">Programma's</Link>
            <Link href="/kickstart" className="hover:text-blue-400 transition">28-Day Kickstart</Link>
            <Link href="/over-ons" className="hover:text-blue-400 transition">Over ons</Link>
            <Link href="/contact" className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg transition">Contact</Link>
          </nav>
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="/programmas" onClick={() => setIsMenuOpen(false)}>Programma's</Link>
              <Link href="/kickstart" onClick={() => setIsMenuOpen(false)}>28-Day Kickstart</Link>
              <Link href="/over-ons" onClick={() => setIsMenuOpen(false)}>Over ons</Link>
              <Link href="/contact" className="bg-blue-700 px-4 py-2 rounded-lg text-center" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}