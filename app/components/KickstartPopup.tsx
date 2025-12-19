'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
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
  const hasAutoOpened = useRef(false);
  const pathname = usePathname();

  // Pagina's waar de popup NIET automatisch moet openen
  const excludedPages = ['/faq'];

  // Fetch data bij laden
  useEffect(() => {
    fetchKickstartData();
  }, []);

  // Auto-open na 5 seconden - 1x per sessie (ook bij navigatie naar andere pagina's)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!dataReady) return;
    if (hasAutoOpened.current) return;
    if (sessionStorage.getItem('kickstartPopupShown')) return;
    
    // Niet openen op uitgesloten pagina's
    if (excludedPages.includes(pathname)) return;

    const timer = setTimeout(() => {
      hasAutoOpened.current = true;
      sessionStorage.setItem('kickstartPopupShown', 'true');
      openPopup();
    }, 5000);

    return () => clearTimeout(timer);
  }, [openPopup, dataReady, pathname]);

  const handleMeerInfo = () => {
    closePopup();
    openIntakePopup();
  };

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

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full relative shadow-2xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 text-white hover:text-gray-200 transition z-10"
          aria-label="Sluiten"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Blue header */}
        <div style={{ backgroundColor: '#1e3a8a', padding: '20px 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>
            Start met de 28-Day Kickstart
          </h2>
          <p style={{ color: '#ffffff', marginTop: '4px', marginBottom: 0 }}>
            Kies een startdatum die bij jou past
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {loading && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-900 mx-auto"></div>
              <p className="text-gray-500 mt-2">Laden...</p>
            </div>
          )}

          {!loading && events.length === 0 && (
            <div className="text-center py-4 mb-4">
              <p className="text-gray-600">Neem contact op voor de eerstvolgende startdatum.</p>
            </div>
          )}

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

          <button
            onClick={handleMeerInfo}
            style={{ backgroundColor: '#1e3a8a' }}
            className="block w-full hover:opacity-90 text-white font-semibold py-4 px-6 rounded-lg text-center transition"
          >
            Meer info
          </button>
        </div>
      </div>
    </div>
  );
}