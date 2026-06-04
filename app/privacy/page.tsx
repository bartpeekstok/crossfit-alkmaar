"use client";

import Link from "next/link";

export default function PrivacyPage() {
  return (
    <>
      <style>{`
        .legal { max-width: 820px; margin: 0 auto; background: #fff; border: 1px solid var(--border); border-radius: var(--r-lg); box-shadow: var(--sh-1); padding: clamp(28px,4vw,56px); }
        .legal h2 { font-family: var(--font-head); font-weight: 700; text-transform: uppercase; font-size: clamp(20px,2.2vw,24px); letter-spacing: .01em; color: var(--fg1); margin: 34px 0 12px; }
        .legal h2:first-child { margin-top: 0; }
        .legal h3 { font-family: var(--font-head); font-weight: 600; font-size: 18px; color: var(--fg1); margin: 22px 0 8px; }
        .legal p { font-family: var(--font-body); font-size: 16.5px; line-height: 1.65; color: var(--fg2); margin: 0 0 14px; }
        .legal ul { margin: 0 0 16px; padding-left: 22px; display: grid; gap: 7px; }
        .legal li { font-family: var(--font-body); font-size: 16px; line-height: 1.5; color: var(--fg2); }
        .legal strong { color: var(--fg1); }
        .legal a { color: var(--cfa-blue); font-weight: 600; text-decoration: none; }
        .legal a:hover { text-decoration: underline; }
        .back { text-align: center; margin-top: 28px; }
        .back a { font-family: var(--font-head); font-weight: 600; font-size: 15px; color: var(--cfa-blue); text-decoration: none; }
      `}</style>

      <section className="page-hero" style={{ minHeight: "auto" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/redesign/assets/photo-community.webp" alt="" />
        <div className="scrim" />
        <div className="wrap inner" style={{ padding: "clamp(52px,8vw,88px) 0" }}>
          <h1>Privacy Policy</h1>
          <p className="lede">Laatst bijgewerkt: december 2024</p>
        </div>
      </section>

      <section className="sec sec--ivoor">
        <div className="wrap">
          <div className="legal">
            <h2>1. Wie zijn wij?</h2>
            <p>CrossFit Alkmaar is verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring.</p>
            <p><strong>Contactgegevens:</strong><br />CrossFit Alkmaar<br />Phoenixstraat 33<br />1812 PP Alkmaar<br />info@crossfitalkmaar.nl</p>

            <h2>2. Welke gegevens verzamelen wij?</h2>
            <p>Wij verzamelen de volgende persoonsgegevens:</p>
            <ul><li>Naam</li><li>E-mailadres</li><li>Telefoonnummer</li><li>Gegevens die je invult in ons contactformulier</li></ul>

            <h2>3. Waarom verzamelen wij deze gegevens?</h2>
            <p>Wij verwerken jouw persoonsgegevens voor de volgende doelen:</p>
            <ul><li>Om contact met je op te nemen over een gratis intake of kennismaking</li><li>Om je te informeren over onze diensten</li><li>Om je vragen te beantwoorden</li></ul>

            <h2>4. Cookies</h2>
            <p>Onze website maakt gebruik van cookies. Een cookie is een klein tekstbestand dat bij je bezoek aan onze website wordt opgeslagen op je computer, tablet of smartphone.</p>
            <h3>Functionele cookies</h3>
            <p>Deze cookies zijn noodzakelijk voor het functioneren van de website.</p>
            <h3>Analytische cookies</h3>
            <p>Wij kunnen analytische cookies gebruiken om het gebruik van de website te analyseren en te verbeteren.</p>
            <h3>Cookies van derde partijen</h3>
            <p>Onze website maakt gebruik van:</p>
            <ul><li><strong>YouTube:</strong> Voor het tonen van video&apos;s. YouTube kan cookies plaatsen.</li><li><strong>GoHighLevel:</strong> Voor het tonen van Google Reviews. GoHighLevel kan cookies plaatsen.</li></ul>
            <p>Je kunt cookies uitschakelen via je browserinstellingen. Let op: hierdoor werken sommige onderdelen van de website mogelijk niet optimaal.</p>

            <h2>5. Hoe lang bewaren wij gegevens?</h2>
            <p>Wij bewaren je persoonsgegevens niet langer dan strikt noodzakelijk is. Gegevens die je via het contactformulier instuurt, bewaren wij maximaal 1 jaar.</p>

            <h2>6. Delen met derden</h2>
            <p>Wij delen je gegevens niet met derden, tenzij dit noodzakelijk is voor de uitvoering van onze diensten of wanneer wij hiertoe wettelijk verplicht zijn.</p>

            <h2>7. Jouw rechten</h2>
            <p>Je hebt het recht om:</p>
            <ul><li>Je persoonsgegevens in te zien</li><li>Je persoonsgegevens te laten corrigeren</li><li>Je persoonsgegevens te laten verwijderen</li><li>Bezwaar te maken tegen de verwerking van je persoonsgegevens</li></ul>
            <p>Neem hiervoor contact met ons op via info@crossfitalkmaar.nl.</p>

            <h2>8. Beveiliging</h2>
            <p>Wij nemen passende maatregelen om misbruik, verlies, onbevoegde toegang en andere ongewenste handelingen met persoonsgegevens tegen te gaan.</p>

            <h2>9. Vragen?</h2>
            <p>Heb je vragen over deze privacyverklaring of over hoe wij omgaan met je gegevens? Neem dan contact met ons op via info@crossfitalkmaar.nl.</p>
          </div>
          <div className="back"><Link href="/">← Terug naar home</Link></div>
        </div>
      </section>
    </>
  );
}
