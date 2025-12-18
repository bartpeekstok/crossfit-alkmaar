'use client';

import { useState, useEffect } from 'react';
import { useKickstartPopup } from './KickstartPopupContext';

console.log('📦 KickstartPopup FILE LOADED');

interface KickstartEvent {
  datum: string;
  tijd: string;
  aantal: number;
  vrijePlekken: number;
}

export default function KickstartPopup() {
  const { isOpen, closePopup, openPopup } = useKickstartPopup();
  const [events, setEvents] = useState<KickstartEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [dataReady, setDataReady] = useState(false);

  console.log('🔵 KickstartPopup rendered, isOpen:', isOpen, 'dataReady:', dataReady);

  // Fetch data bij laden
  useEffect(() => {
    console.log('🟡 Starting fetchKickstartData...');
    fetchKickstartData();
  }, []);

  // Auto-open na 5 seconden (één keer per sessie) - ALLEEN als data geladen is
  useEffect(() => {
    console.log('🟢 Auto-open useEffect triggered, dataReady:', dataReady);
    
    if (typeof window === 'undefined') {
      console.log('🔴 Window undefined, skipping');
      return;
    }
    if (!dataReady) {
      console.log('🔴 Data not ready yet, skipping');
      return;
    }
    if (sessionStorage.getItem('kickstartPopupShown')) {
      console.log('🔴 Popup already shown this session, skipping');
      return;
    }

    console.log('🟢 Setting 5 second timer for popup...');
    const timer = setTimeout(() => {
      console.log('🟢 Timer fired! Opening popup...');
      openPopup();
      sessionStorage.setItem('kickstartPopupShown', 'true');
    }, 5000);

    return () => clearTimeout(timer);
  }, [openPopup, dataReady]);

  const fetchKickstartData = async () => {
    try {
      const SHEET_ID = '1wGEcBMfrUPWWXNGubqpr_KmbIyxh4bMyJ33mnA4gXK4';
      const SHEET_NAME = 'Overzicht';
      
      const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}&range=A2:C8`;
      
      console.log('🟡 Fetching from:', url);
      const response = await fetch(url);
      const text = await response.text();
      console.log('🟡 Response received, length:', text.length);
      
      const jsonString = text.substring(47, text.length - 2);
      const json = JSON.parse(jsonString);
      
      console.log('🟡 Parsed JSON:', json);
      
      if (!json.table || !json.table.rows) {
        console.log('🔴 No table or rows in response');
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

      console.log('🟢 Found events:', kickstartEvents);
      setEvents(kickstartEvents.slice(0, 2));
      setLoading(false);
      setDataReady(true);
      console.log('🟢 Data ready set to true!');
      
    } catch (error) {
      console.error('🔴 Error fetching Kickstart data:', error);
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

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-2xl">
        {/* Sluit knop */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
          aria-label="Sluiten"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Start met de 28-Day Kickstart</h2>
          <p className="text-gray-600 mt-2">Kies een startdatum die bij jou past</p>
        </div>

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
                className={`border-2 rounded-xl p-4 transition ${
                  event.vrijePlekken <= 2
                    ? 'border-orange-300 bg-orange-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-gray-900">{event.datum}</p>
                    <p className="text-gray-600">{event.tijd} uur</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold ${event.vrijePlekken <= 2 ? 'text-orange-600' : 'text-green-600'}`}>
                      {event.vrijePlekken} {event.vrijePlekken === 1 ? 'plek' : 'plekken'} vrij
                    </p>
                    {event.vrijePlekken <= 2 && (
                      <p className="text-xs text-orange-600">Bijna vol!</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Button */}
        <a
          href="/kickstart"
          onClick={closePopup}
          className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl text-center transition"
        >
          Bekijk de Kickstart
        </a>

        {/* Footer tekst */}
        <p className="text-center text-sm text-gray-500 mt-4">
          4 weken • 2x per week • Kleine groepen
        </p>
      </div>
    </div>
  );
}