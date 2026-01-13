'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useKickstartPopup } from './KickstartPopupContext';
import { useKickstartFormPopup } from './KickstartFormPopupContext';

// Module-level variable - resets bij page refresh, blijft bestaan bij interne navigatie
let popupShownThisPageLoad = false;

// Referentiedatum: 26 januari 2025 is een Kickstart startdatum
const REFERENCE_KICKSTART = new Date(2025, 0, 26); // 26 jan 2025
const CYCLE_DAYS = 14; // Elke 2 weken

interface KickstartEvent {
  datum: string;
  date: Date;
  plekkenVrij: number | 'vol';
}

// Bereken plekken vrij op basis van dagen tot start
function getPlekkenVrij(daysUntilStart: number): number | 'vol' {
  if (daysUntilStart < 2) return 'vol';      // 2 dagen voor start: VOL
  if (daysUntilStart < 7) return 1;           // 1 week voor start: 1 plek
  if (daysUntilStart < 14) return 2;          // 2 weken voor start: 2 plekken
  if (daysUntilStart < 21) return 3;          // 3 weken voor start: 3 plekken
  return 5;                                    // 4+ weken voor start: 5 plekken
}

// Formatteer datum naar Nederlandse notatie
function formatDateNL(date: Date): string {
  const months = [
    'januari', 'februari', 'maart', 'april', 'mei', 'juni',
    'juli', 'augustus', 'september', 'oktober', 'november', 'december'
  ];
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

// Bereken de eerstvolgende 2 Kickstart datums
function getUpcomingKickstarts(): KickstartEvent[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Bereken dagen sinds referentie
  const diffTime = today.getTime() - REFERENCE_KICKSTART.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // Bereken hoeveel complete cycli zijn verstreken
  const completedCycles = Math.floor(diffDays / CYCLE_DAYS);

  // Eerstvolgende Kickstart
  let nextKickstart = new Date(REFERENCE_KICKSTART);
  nextKickstart.setDate(REFERENCE_KICKSTART.getDate() + (completedCycles + 1) * CYCLE_DAYS);

  // Als vandaag een startdatum is, pak de volgende
  if (nextKickstart.getTime() === today.getTime()) {
    nextKickstart.setDate(nextKickstart.getDate() + CYCLE_DAYS);
  }

  // Tweede Kickstart
  const secondKickstart = new Date(nextKickstart);
  secondKickstart.setDate(nextKickstart.getDate() + CYCLE_DAYS);

  const events: KickstartEvent[] = [];

  // Eerste event
  const daysUntilFirst = Math.floor((nextKickstart.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  events.push({
    datum: formatDateNL(nextKickstart),
    date: nextKickstart,
    plekkenVrij: getPlekkenVrij(daysUntilFirst)
  });

  // Tweede event
  const daysUntilSecond = Math.floor((secondKickstart.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  events.push({
    datum: formatDateNL(secondKickstart),
    date: secondKickstart,
    plekkenVrij: getPlekkenVrij(daysUntilSecond)
  });

  return events;
}

export default function KickstartPopup() {
  const { isOpen, closePopup, openPopup } = useKickstartPopup();
  const { openPopup: openKickstartFormPopup } = useKickstartFormPopup();
  const pathname = usePathname();
  const [events, setEvents] = useState<KickstartEvent[]>([]);
  const [dataReady, setDataReady] = useState(false);

  // Bereken data bij laden
  useEffect(() => {
    const kickstarts = getUpcomingKickstarts();
    setEvents(kickstarts);
    setDataReady(true);
  }, []);

  // Auto-open na 5 seconden
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!dataReady) return;
    if (events.length === 0) return;

    // Niet tonen op faq en free-intro pagina's
    if (pathname === '/faq' || pathname === '/free-intro') return;

    // Niet opnieuw tonen als al getoond is tijdens deze page load
    if (popupShownThisPageLoad) return;

    const timer = setTimeout(() => {
      openPopup();
      popupShownThisPageLoad = true;
    }, 5000);

    return () => clearTimeout(timer);
  }, [openPopup, dataReady, events, pathname]);

  const handleMeerInfoClick = () => {
    closePopup();
    openKickstartFormPopup();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={closePopup}
      ></div>
      
      {/* Popup */}
      <div className="relative bg-white rounded-xl shadow-xl max-w-md w-full mx-4 z-[101] overflow-hidden">
        {/* Close button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-white hover:text-gray-200 transition z-10"
          aria-label="Sluiten"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Blue header */}
        <div style={{ backgroundColor: '#1e3a8a', padding: '24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#ffffff', textTransform: 'uppercase', margin: 0, letterSpacing: '0.5px' }}>
            Start met de 28-Day Kickstart
          </h2>
          <p style={{ color: '#ffffff', marginTop: '8px', marginBottom: 0, opacity: 0.9 }}>
            Kies een startdatum die bij jou past
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Events lijst */}
          {events.length > 0 && (
            <div className="space-y-3 mb-6">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium text-gray-900">{event.datum}</p>
                  </div>
                  <div className="text-right">
                    {event.plekkenVrij === 'vol' ? (
                      <p className="font-semibold text-red-500">VOL</p>
                    ) : (
                      <p className={`font-semibold ${
                        event.plekkenVrij <= 2 ? 'text-orange-500' : 'text-green-500'
                      }`}>
                        {event.plekkenVrij} {event.plekkenVrij === 1 ? 'plek' : 'plekken'} vrij
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTA Button */}
          <button
            onClick={handleMeerInfoClick}
            className="block w-full text-white font-semibold py-4 px-6 rounded-lg text-center transition"
            style={{ backgroundColor: '#1e3a8a' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1e40af'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1e3a8a'}
          >
            Meer info
          </button>
        </div>
      </div>
    </div>
  );
}