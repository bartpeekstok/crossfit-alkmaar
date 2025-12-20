'use client';

import { useState, useEffect } from 'react';
import { useKickstartPopup } from './KickstartPopupContext';
import { usePopup } from './PopupContext';

interface KickstartEvent {
  datum: string;
  tijd: string;
  aantal: number;
  vrijePlekken: number;
}

export default function KickstartPopup() {
  const { isOpen, closePopup, openPopup } = useKickstartPopup();
  const { openPopup: openIntakePopup } = usePopup();
  const [events, setEvents] = useState<KickstartEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [dataReady, setDataReady] = useState(false);

  // Fetch data bij laden
  useEffect(() => {
    fetchKickstartData();
  }, []);

  // Auto-open na 5 seconden (één keer per sessie) - ALLEEN als data geladen is
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!dataReady) return;
    if (events.length === 0) return;
    if (sessionStorage.getItem('kickstartPopupShown')) return;

    const timer = setTimeout(() => {
      openPopup();
      sessionStorage.setItem('kickstartPopupShown', 'true');
    }, 5000);

    return () => clearTimeout(timer);
  }, [openPopup, dataReady, events]);

  const fetchKickstartData = async () => {
    try {
      const SHEET_ID = '1wGEcBMfrUPWWXNGubqpr_KmbIyxh4bMyJ33mnA4gXK4';
      const SHEET_NAME = 'Overzicht';
      
      const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}&range=A2:C8`;
      
      const response = await fetch(url);
      const text = await response.text();
      
      const jsonString = text.substring(47, text.length - 2);
      const json = JSON.parse(jsonString);
      
      if (!json.table || !json.table.rows) {
        setLoading(false);
        setDataReady(true);
        return;
      }

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const kickstartEvents: KickstartEvent[] = [];

      for (const row of json.table.rows) {
        if (!row.c || !row.c[0] || !row.c[1] || !row.c[2]) continue;
        
        const datumFormatted = row.c[0].f || '';
        const tijdFormatted = row.c[1].f || '';
        const aantalRaw = row.c[2].v;
        
        const aantal = typeof aantalRaw === 'number' ? aantalRaw : parseInt(aantalRaw);
        if (isNaN(aantal)) continue;
        
        if (!tijdFormatted.includes('20:00')) continue;
        
        let eventDate: Date;
        const datumValue = row.c[0].v;
        
        if (typeof datumValue === 'string' && datumValue.startsWith('Date(')) {
          const match = datumValue.match(/Date\((\d+),(\d+),(\d+)\)/);
          if (match) {
            eventDate = new Date(parseInt(match[1]), parseInt(match[2]), parseInt(match[3]));
          } else {
            continue;
          }
        } else {
          eventDate = parseNLDate(datumFormatted);
        }
        
        if (eventDate < today) continue;
        
        const vrijePlekken = Math.max(0, 6 - aantal);
        
        kickstartEvents.push({
          datum: datumFormatted,
          tijd: tijdFormatted,
          aantal: aantal,
          vrijePlekken: vrijePlekken
        });
      }

      kickstartEvents.sort((a, b) => {
        return parseNLDate(a.datum).getTime() - parseNLDate(b.datum).getTime();
      });

      setEvents(kickstartEvents.slice(0, 2));
      setLoading(false);
      setDataReady(true);
      
    } catch (error) {
      console.error('Error fetching Kickstart data:', error);
      setLoading(false);
      setDataReady(true);
    }
  };

  const parseNLDate = (dateStr: string): Date => {
    const months: { [key: string]: number } = {
      'januari': 0, 'februari': 1, 'maart': 2, 'april': 3,
      'mei': 4, 'juni': 5, 'juli': 6, 'augustus': 7,
      'september': 8, 'oktober': 9, 'november': 10, 'december': 11
    };
    
    const parts = dateStr.toLowerCase().split(' ');
    if (parts.length >= 3) {
      const day = parseInt(parts[0]);
      const month = months[parts[1]];
      const year = parseInt(parts[2]);
      if (!isNaN(day) && month !== undefined && !isNaN(year)) {
        return new Date(year, month, day);
      }
    }
    return new Date();
  };

  const handleMeerInfoClick = () => {
    closePopup();
    openIntakePopup();
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
          {/* Loading state */}
          {loading && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="text-gray-500 mt-2">Laden...</p>
            </div>
          )}

          {/* Geen events */}
          {!loading && events.length === 0 && (
            <div className="text-center py-4 mb-4">
              <p className="text-gray-600">Neem contact op voor de eerstvolgende startdatum.</p>
            </div>
          )}

          {/* Events lijst */}
          {!loading && events.length > 0 && (
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
                    <p className={`font-semibold ${
                      event.vrijePlekken <= 2 ? 'text-orange-500' : 'text-green-500'
                    }`}>
                      {event.vrijePlekken} {event.vrijePlekken === 1 ? 'plek' : 'plekken'} vrij
                    </p>
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