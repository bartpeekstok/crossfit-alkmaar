"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const IG = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
  </svg>
);

const FB = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const NL_DAYS = ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"];
const EN_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const TIMES = [
  "06:30 – 22:00",
  "06:30 – 21:00",
  "06:30 – 21:00",
  "06:30 – 21:00",
  "06:30 – 21:00",
  "08:00 – 12:30",
  "08:00 – 12:30",
];

export default function Footer() {
  const pathname = usePathname();
  const isEN = pathname.startsWith("/en");
  const days = isEN ? EN_DAYS : NL_DAYS;
  const year = 2026;

  return (
    <footer className="site-footer">
      <div className="wrap ftop">
        <div>
          <Link href="/" className="logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/redesign/assets/cfa-logo.png"
              alt="CrossFit Alkmaar"
              style={{ height: 64, width: "auto" }}
            />
          </Link>
          <p className="intro">
            {isEN
              ? "Gym in Alkmaar for strength training, fitness and weight loss, with personal coaching for all levels."
              : "Sportschool in Alkmaar voor krachttraining, fitness en afvallen, met persoonlijke begeleiding voor alle niveaus."}
          </p>
          <div className="fsocial">
            <a
              href="https://www.instagram.com/crossfitalkmaar"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IG />
            </a>
            <a
              href="https://www.facebook.com/crossfitalkmaar"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FB />
            </a>
          </div>
          <div className="powered" style={{ marginTop: 22, display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--fg3)", letterSpacing: ".04em" }}>Powered by</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/redesign/assets/gymops-logo.png" alt="GymOps" style={{ height: 36, width: "auto" }} />
          </div>
        </div>
        <div>
          <h4>{isEN ? "Opening hours" : "Openingstijden"}</h4>
          <ul className="hours">
            {days.map((d, i) => (
              <li key={d}>
                <b>{d}</b>
                <span>{TIMES[i]}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <span
                style={{
                  color: "var(--cfa-blue)",
                  fontSize: 12,
                  letterSpacing: ".08em",
                  fontWeight: 600,
                }}
              >
                {isEN ? "PHONE" : "TELEFOON"}
              </span>
              <br />
              <a href="tel:+31722340560">072-2340560</a>
            </li>
            <li>
              <span
                style={{
                  color: "var(--cfa-blue)",
                  fontSize: 12,
                  letterSpacing: ".08em",
                  fontWeight: 600,
                }}
              >
                EMAIL
              </span>
              <br />
              <a href="mailto:info@crossfitalkmaar.nl">info@crossfitalkmaar.nl</a>
            </li>
            <li>
              <span
                style={{
                  color: "var(--cfa-blue)",
                  fontSize: 12,
                  letterSpacing: ".08em",
                  fontWeight: 600,
                }}
              >
                {isEN ? "MEMBER SERVICE" : "LEDENSERVICE"}
              </span>
              <br />
              <a href="mailto:ledenservice@crossfitalkmaar.nl">ledenservice@crossfitalkmaar.nl</a>
            </li>
            <li style={{ color: "var(--fg2)", lineHeight: 1.5, marginTop: 4 }}>
              Phoenixstraat 33
              <br />
              1812 PP Alkmaar
              <br />
              <a
                href="https://maps.google.com/?q=Phoenixstraat+33+1812+PP+Alkmaar"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--cfa-blue)" }}
              >
                {isEN ? "View on Google Maps →" : "Bekijk op Google Maps →"}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="fbottom">
        <div className="wrap fb">
          <span>
            © {year} CrossFit Alkmaar ·{" "}
            {isEN ? "All rights reserved" : "Alle rechten voorbehouden"} · KvK 61162825
          </span>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
