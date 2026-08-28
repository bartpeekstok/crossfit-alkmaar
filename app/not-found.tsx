import Link from "next/link";

export default function NotFound() {
  return (
    <section className="sec sec--ivoor" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
      <div className="wrap center" style={{ maxWidth: 720 }}>
        <p className="eyebrow center-eb">404</p>
        <h1 className="sec-title" style={{ marginTop: 14 }}>Pagina niet gevonden</h1>
        <p className="sec-sub">
          Oeps! De pagina die je zoekt bestaat niet of is verplaatst. Geen zorgen, je kunt altijd terug naar onze homepage.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", marginTop: 30 }}>
          <Link href="/" className="btn btn--primary">Naar homepage</Link>
          <Link href="/free-intro" className="btn btn--ghost-light" style={{ boxShadow: "inset 0 0 0 2px var(--cfa-blue)" }}>
            Plan een kennismaking
          </Link>
        </div>
      </div>
    </section>
  );
}
