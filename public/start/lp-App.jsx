/* global React, useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakSelect, TweakToggle, TweakText,
   LPHeader, Hero, StatBar, Objections, Steps, Testimonials, WhyCFA, PhotoBand, FinalCTA, Footer */

const LP_ANGLES = {
  volhouden: {
    h: 'Sporten werkt pas als je het volhoudt.',
    sub: 'Kleine groepen, coaches die je bij naam kennen, en mensen die je missen als je er niet bent.',
  },
  terugbeginnen: {
    h: 'Weer beginnen? Hier lukt het wél.',
    sub: 'Geen anonieme zaal vol machines. Wél persoonlijke begeleiding, voor elk niveau — ook als je al jaren niet hebt gesport.',
  },
  sterker: {
    h: 'Bouw een sterker jij.',
    sub: 'Functionele training in kleine groepen, volledig schaalbaar naar jouw niveau. Eén gratis kennismaking om te starten.',
  },
};

const LP_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroAngle": "volhouden",
  "formPlacement": "hero",
  "heroProof": true,
  "badgeText": "GRATIS KENNISMAKING",
  "ctaLabel": "PLAN MIJN GRATIS KENNISMAKING",
  "ghlWebhook": "https://services.leadconnectorhq.com/hooks/elOOWDMoCEHJO4WhphRj/webhook-trigger/Di0SoBWLkL51vYE0NJYK",
  "metaPixelId": "1745951116381755"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(LP_TWEAK_DEFAULTS);
  const angle = LP_ANGLES[t.heroAngle] || LP_ANGLES.volhouden;
  const formInHero = t.formPlacement === 'hero';
  const badge = t.badgeText === '— geen —' ? '' : t.badgeText;

  const scrollToForm = () => {
    const el = document.getElementById('aanmelden') || document.getElementById('aanmelden-eind');
    if (!el) return;
    const r = el.getBoundingClientRect();
    const top = window.scrollY + r.top - 90;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  };

  return (
    <div id="top">
      <LPHeader onCTA={scrollToForm} />
      <Hero angle={angle} badge={badge} ctaLabel={t.ctaLabel} formInHero={formInHero} showProof={t.heroProof}
        webhookUrl={t.ghlWebhook} pixelId={t.metaPixelId} />
      <StatBar />
      <Objections />
      <Steps />
      <Testimonials />
      <PhotoBand />
      <WhyCFA />
      <FinalCTA ctaLabel={t.ctaLabel} badge={badge} webhookUrl={t.ghlWebhook} pixelId={t.metaPixelId} />
      <Footer />

      <TweaksPanel>
        <TweakSection label="Hero-boodschap" />
        <TweakRadio label="Boodschap" value={t.heroAngle}
          options={[{ value: 'volhouden', label: 'Volhouden' }, { value: 'terugbeginnen', label: 'Terugbeginnen' }, { value: 'sterker', label: 'Sterker jij' }]}
          onChange={(v) => setTweak('heroAngle', v)} />
        <TweakToggle label="Reviews + leden in hero" value={t.heroProof} onChange={(v) => setTweak('heroProof', v)} />

        <TweakSection label="Conversie" />
        <TweakRadio label="Formulier" value={t.formPlacement}
          options={[{ value: 'hero', label: 'In de hero' }, { value: 'below', label: 'Onderaan' }]}
          onChange={(v) => setTweak('formPlacement', v)} />
        <TweakSelect label="Aanbod-badge" value={t.badgeText}
          options={['GRATIS KENNISMAKING', '1E TRAINING GRATIS', 'GEEN INSCHRIJFKOSTEN', '— geen —']}
          onChange={(v) => setTweak('badgeText', v)} />
        <TweakSelect label="Knop-tekst" value={t.ctaLabel}
          options={['PLAN MIJN GRATIS KENNISMAKING', 'JA, IK WIL KENNISMAKEN', 'BOEK MIJN KENNISMAKING', 'START VANDAAG']}
          onChange={(v) => setTweak('ctaLabel', v)} />

        <TweakSection label="Koppelingen" />
        <TweakText label="GHL webhook-URL" value={t.ghlWebhook}
          placeholder="https://services.leadconnectorhq.com/hooks/..."
          onChange={(v) => setTweak('ghlWebhook', v)} />
        <TweakText label="Meta Pixel ID" value={t.metaPixelId}
          placeholder="bijv. 1745951116381755"
          onChange={(v) => setTweak('metaPixelId', v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
