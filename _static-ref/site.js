/* CFA website — shared header + footer injection, nav interactions, language toggle */
(function () {
  var ON_EN = location.pathname.indexOf('/en/') !== -1;
  var LANG = ON_EN ? 'en' : 'nl';
  var BASE = ON_EN ? '../' : '';
  function curFile() { return location.pathname.split('/').pop() || 'index.html'; }

  var T = {
    nl: { moreInfo:'Meer info', schedule:'Rooster', pricing:'Tarieven', ourMembers:'Onze leden', jobs:'Vacatures',
          programs:"Programma's", kickstart:'28 Day Kickstart', groupClasses:'Groepslessen', personalTraining:'Personal Training',
          smallGroup:'Small Group Training', nutrition:'Voedingsadvies', teens:'Tieners', events:'Events', blog:'Blog',
          freeIntro:'Gratis kennismaking' },
    en: { moreInfo:'More info', schedule:'Schedule', pricing:'Pricing', ourMembers:'Our members', jobs:'Jobs',
          programs:'Programs', kickstart:'28 Day Kickstart', groupClasses:'Group classes', personalTraining:'Personal Training',
          smallGroup:'Small Group Training', nutrition:'Nutrition coaching', teens:'Teens', events:'Events', blog:'Blog',
          freeIntro:'Free intro' },
    de: { moreInfo:'Mehr Info', schedule:'Stundenplan', pricing:'Preise', ourMembers:'Unsere Mitglieder', jobs:'Stellenangebote',
          programs:'Programme', kickstart:'28 Day Kickstart', groupClasses:'Gruppenkurse', personalTraining:'Personal Training',
          smallGroup:'Small Group Training', nutrition:'Ernährungsberatung', teens:'Jugendliche', events:'Events', blog:'Blog',
          freeIntro:'Kostenloses Probetraining' }
  };

  var caret = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';

  function headerHTML(t) {
    return '' +
    '<div class="wrap bar">' +
      '<a class="logo" href="index.html" aria-label="CrossFit Alkmaar"><img src="'+BASE+'assets/cfa-logo.png" alt="CrossFit Alkmaar"></a>' +
      '<nav class="nav">' +
        '<div class="nav-item"><a class="nav-link" href="meer-info.html">'+t.moreInfo+' '+caret+'</a>' +
          '<div class="dropdown">' +
            '<a href="meer-info.html#rooster">'+t.schedule+'</a>' +
            '<a href="meer-info.html#tarieven">'+t.pricing+'</a>' +
            '<a href="onze-leden.html">'+t.ourMembers+'</a>' +
            '<a href="vacatures.html">'+t.jobs+'</a>' +
          '</div></div>' +
        '<div class="nav-item"><button class="nav-link">'+t.programs+' '+caret+'</button>' +
          '<div class="dropdown">' +
            '<a href="kickstart.html">'+t.kickstart+'</a>' +
            '<a href="groepslessen.html">'+t.groupClasses+'</a>' +
            '<a href="personal-training.html">'+t.personalTraining+'</a>' +
            '<a href="small-group-training.html">'+t.smallGroup+'</a>' +
            '<a href="voedingsadvies.html">'+t.nutrition+'</a>' +
            '<a href="tieners.html">'+t.teens+'</a>' +
          '</div></div>' +
        '<div class="nav-item"><button class="nav-link">'+t.events+' '+caret+'</button>' +
          '<div class="dropdown"><a href="hyrox-simulatie-22-augustus.html">HYROX Simulatie — 22 aug</a><a href="hyrox-simulatie-24-oktober.html">HYROX Simulatie — 24 okt</a></div></div>' +
        '<a class="nav-link" href="blog.html">'+t.blog+'</a>' +
        '<a class="btn btn--primary" href="free-intro.html">'+t.freeIntro+'</a>' +
        '<span class="lang">' +
          '<button data-lang="nl">NL</button><button data-lang="en">EN</button>' +
        '</span>' +
      '</nav>' +
      '<button class="hamburger" aria-label="Menu"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>' +
    '</div>' +
    '<div class="mobile-menu"><div class="mwrap">' +
      '<div class="m-sec"><button class="m-head">'+t.moreInfo+' '+caret+'</button><div class="m-sub">' +
        '<a href="meer-info.html#rooster">'+t.schedule+'</a><a href="meer-info.html#tarieven">'+t.pricing+'</a>' +
        '<a href="onze-leden.html">'+t.ourMembers+'</a><a href="vacatures.html">'+t.jobs+'</a></div></div>' +
      '<div class="m-sec"><button class="m-head">'+t.programs+' '+caret+'</button><div class="m-sub">' +
        '<a href="kickstart.html">'+t.kickstart+'</a><a href="groepslessen.html">'+t.groupClasses+'</a>' +
        '<a href="personal-training.html">'+t.personalTraining+'</a><a href="small-group-training.html">'+t.smallGroup+'</a>' +
        '<a href="voedingsadvies.html">'+t.nutrition+'</a><a href="tieners.html">'+t.teens+'</a></div></div>' +
      '<div class="m-sec"><button class="m-head">'+t.events+' '+caret+'</button><div class="m-sub">' +
        '<a href="hyrox-simulatie-22-augustus.html">HYROX Simulatie — 22 aug</a><a href="hyrox-simulatie-24-oktober.html">HYROX Simulatie — 24 okt</a></div></div>' +
      '<a class="m-head" href="blog.html">'+t.blog+'</a>' +
      '<a class="btn btn--primary" style="margin-top:12px" href="free-intro.html">'+t.freeIntro+'</a>' +
      '<span class="lang" style="margin-top:14px"><button data-lang="nl">NL</button><button data-lang="en">EN</button></span>' +
    '</div></div>';
  }

  function footerHTML() {
    var ig = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>';
    var fb = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>';
    var dy = LANG === 'en' ? ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'] : ['Ma','Di','Wo','Do','Vr','Za','Zo'];
    var times = ['06:30 – 22:00','06:30 – 21:00','06:30 – 21:00','06:30 – 21:00','06:30 – 21:00','08:00 – 12:30','08:00 – 12:30'];
    var hours = dy.map(function (d, i) { return [d, times[i]]; });
    var hoursLi = hours.map(function (h) { return '<li><b>'+h[0]+'</b><span>'+h[1]+'</span></li>'; }).join('');
    return '' +
    '<div class="wrap ftop">' +
      '<div>' +
        '<a class="logo" href="index.html"><img src="'+BASE+'assets/cfa-logo.png" alt="CrossFit Alkmaar" style="height:64px;width:auto"></a>' +
        '<p class="intro">' + (LANG === 'en' ? 'Gym in Alkmaar for strength training, fitness and weight loss — with personal coaching for all levels.' : 'Sportschool in Alkmaar voor krachttraining, fitness en afvallen, met persoonlijke begeleiding voor alle niveaus.') + '</p>' +
        '<div class="fsocial"><a href="https://www.instagram.com/crossfitalkmaar" aria-label="Instagram">'+ig+'</a><a href="https://www.facebook.com/crossfitalkmaar" aria-label="Facebook">'+fb+'</a></div>' +
      '</div>' +
      '<div><h4>'+(LANG==='en'?'Opening hours':'Openingstijden')+'</h4><ul class="hours">'+hoursLi+'</ul></div>' +
      '<div><h4>Contact</h4><ul>' +
        '<li><span style="color:var(--cfa-blue);font-size:12px;letter-spacing:.08em;font-weight:600">'+(LANG==='en'?'PHONE':'TELEFOON')+'</span><br><a href="tel:+31722340560">072-2340560</a></li>' +
        '<li><span style="color:var(--cfa-blue);font-size:12px;letter-spacing:.08em;font-weight:600">EMAIL</span><br><a href="mailto:info@crossfitalkmaar.nl">info@crossfitalkmaar.nl</a></li>' +
        '<li><span style="color:var(--cfa-blue);font-size:12px;letter-spacing:.08em;font-weight:600">'+(LANG==='en'?'MEMBER SERVICE':'LEDENSERVICE')+'</span><br><a href="mailto:ledenservice@crossfitalkmaar.nl">ledenservice@crossfitalkmaar.nl</a></li>' +
        '<li style="color:var(--fg2);line-height:1.5;margin-top:4px">Phoenixstraat 33<br>1812 PP Alkmaar<br><a href="https://maps.google.com/?q=Phoenixstraat+33+1812+PP+Alkmaar" style="color:var(--cfa-blue)">'+(LANG==='en'?'View on Google Maps →':'Bekijk op Google Maps →')+'</a></li>' +
      '</ul></div>' +
    '</div>' +
    '<div class="fbottom"><div class="wrap fb">' +
      '<span>© '+ new Date().getFullYear() +' CrossFit Alkmaar · '+(LANG==='en'?'All rights reserved':'Alle rechten voorbehouden')+' · KvK 61162825</span>' +
      '<a href="privacy.html">Privacy Policy</a>' +
    '</div></div>';
  }

  function setLang(lang) {
    if (lang === LANG) return;
    location.href = (lang === 'en') ? (BASE + 'en/index.html') : (ON_EN ? '../index.html' : 'index.html');
  }

  function render() {
    var t = T[LANG] || T.nl;
    var h = document.getElementById('site-header');
    var f = document.getElementById('site-footer');
    if (h) { h.className = 'site-header'; h.innerHTML = headerHTML(t); if (curFile() !== 'index.html') h.querySelectorAll('.lang').forEach(function (e) { e.style.display = 'none'; }); }
    if (f) { f.className = 'site-footer'; f.innerHTML = footerHTML(); }
    document.documentElement.lang = LANG;

    // mobile menu toggle
    var burger = h && h.querySelector('.hamburger');
    var mm = h && h.querySelector('.mobile-menu');
    if (burger && mm) burger.addEventListener('click', function () { mm.classList.toggle('open'); });
    if (h) h.querySelectorAll('.m-sec .m-head').forEach(function (btn) {
      if (btn.tagName === 'BUTTON') btn.addEventListener('click', function () { btn.parentElement.classList.toggle('open'); });
    });
    // language buttons
    if (h) h.querySelectorAll('.lang button').forEach(function (b) {
      if (b.dataset.lang === LANG) b.classList.add('on');
      b.addEventListener('click', function () { setLang(b.dataset.lang); });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render); else render();
})();

/* ---- Lead capture modal (POST to GHL webhook) ---- */
(function () {
  var WEBHOOK = 'https://services.leadconnectorhq.com/hooks/elOOWDMoCEHJO4WhphRj/webhook-trigger/0b254396-9523-44b0-a59c-5c79dadd41b1';
  var VARIANTS = {
    kennismaking: { h: 'Plan je gratis kennismaking', s: 'Laat je gegevens achter, dan bellen we je binnen één werkdag om je kennismaking in te plannen.', ok: 'We hebben je aanvraag binnen en nemen binnen één werkdag contact met je op! Op de volgende pagina kun je alvast zelf je gratis kennismaking inplannen.', redirect: 'free-intro.html' },
    tarieven: { h: 'Meer informatie', s: 'Laat je gegevens achter, we nemen snel contact met je op.', ok: 'We hebben je aanvraag binnen en nemen binnen één werkdag contact met je op! Op de volgende pagina kun je alvast zelf je gratis kennismaking inplannen.', redirect: 'free-intro.html' },
    kickstart: { h: '28 Day Kickstart', s: '', dates: true, ok: 'We hebben je aanvraag binnen en nemen binnen één werkdag contact met je op! Op de volgende pagina kun je alvast zelf je gratis kennismaking inplannen.', redirect: 'free-intro.html' }
  };
  var modal, current = VARIANTS.kennismaking;
  function build() {
    modal = document.createElement('div');
    modal.id = 'cfa-modal';
    modal.innerHTML =
      '<div class="ovl" data-close></div>' +
      '<div class="box" role="dialog" aria-modal="true">' +
        '<button class="close" data-close aria-label="Sluiten"><svg viewBox="0 0 24 24" fill="none" stroke="#0B0F1E" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button>' +
        '<div class="content"></div>' +
      '</div>';
    document.body.appendChild(modal);
    modal.querySelectorAll('[data-close]').forEach(function (el) { el.addEventListener('click', close); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }
  function kickstarts() {
    var now = new Date(); var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var next = new Date(2026, 5, 8);
    while (next <= today) next.setDate(next.getDate() + 28);
    var second = new Date(next); second.setDate(second.getDate() + 28);
    var msd = 86400000;
    function plek(d) { if (d < 3) return 'vol'; if (d < 7) return 1; if (d < 14) return 2; if (d < 21) return 3; if (d < 28) return 4; return 5; }
    var M = ['januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december'];
    function fmt(d) { return d.getDate() + ' ' + M[d.getMonth()] + ' ' + d.getFullYear(); }
    return [
      { datum: fmt(next), plek: plek(Math.round((next - today) / msd)) },
      { datum: fmt(second), plek: plek(Math.round((second - today) / msd)) }
    ];
  }
  function datesHTML() {
    return '<div class="kk-dates">' + kickstarts().map(function (e) {
      var r = e.plek === 'vol' ? '<span class="vol">VOL</span>' : '<span class="' + (e.plek <= 2 ? 'laag' : 'ok') + '">' + e.plek + ' ' + (e.plek === 1 ? 'plek' : 'plekken') + ' vrij</span>';
      return '<div class="kk-row"><span class="dt">' + e.datum + '</span>' + r + '</div>';
    }).join('') + '</div>';
  }
  function renderForm() {
    modal.querySelector('.content').innerHTML =
      '<h3>' + current.h + '</h3>' +
      '<p class="sub">' + current.s + '</p>' +
      (current.dates ? datesHTML() : '') +
      '<form novalidate>' +
        '<label>Naam<input name="name" type="text" required placeholder="Voornaam Achternaam" autocomplete="name"></label>' +
        '<label>E-mail<input name="email" type="email" required autocomplete="email"></label>' +
        '<label>Telefoonnummer<input name="phone" type="tel" required inputmode="tel" autocomplete="tel"></label>' +
        '<div class="errmsg" style="display:none"></div>' +
        '<button class="btn btn--primary btn--block submit" type="submit">Verstuur</button>' +
      '</form>';
    modal.querySelector('form').addEventListener('submit', submit);
  }
  function open(source, section, variant) {
    if (!modal) build();
    current = VARIANTS[variant] || VARIANTS.kennismaking;
    modal.dataset.source = source || '';
    modal.dataset.section = section || '';
    modal.dataset.variant = variant || 'kennismaking';
    renderForm();
    modal.classList.add('open');
    document.documentElement.classList.add('cfa-modal-open');
    var f = modal.querySelector('input'); if (f) setTimeout(function () { f.focus(); }, 50);
  }
  function close() {
    if (modal) { modal.classList.remove('open'); document.documentElement.classList.remove('cfa-modal-open'); }
  }
  function submit(e) {
    e.preventDefault();
    var form = e.target, data = {}, ok = true, bads = [];
    var LBL = { name: 'naam', email: 'e-mailadres', phone: 'telefoonnummer' };
    ['name','email','phone'].forEach(function (k) {
      var inp = form.querySelector('[name="'+k+'"]'); var v = (inp.value || '').trim(); data[k] = v;
      var digits = v.replace(/[^0-9]/g, '');
      var bad = !v ||
        (k === 'name' && v.length < 2) ||
        (k === 'email' && !/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v)) ||
        (k === 'phone' && !(digits.length === 10 || (digits.length === 11 && digits.slice(0, 2) === '31')));
      inp.classList.toggle('err', bad); if (bad) { ok = false; bads.push(LBL[k]); }
    });
    var em = form.querySelector('.errmsg');
    if (!ok) { em.textContent = 'Controleer je ' + bads.join(', ') + '.'; em.style.display = 'block'; return; }
    em.style.display = 'none';
    var parts = data.name.split(/\s+/); data.first_name = parts.shift() || ''; data.last_name = parts.join(' '); data.full_name = data.name;
    data.cta = modal.dataset.source || '';
    data.cta_sectie = modal.dataset.section || '';
    data.formulier = modal.dataset.variant || 'kennismaking';
    data.page = (location.pathname.split('/').pop() || 'home');
    data.url = location.href;
    var okMsg = current.ok;
    var btn = form.querySelector('.submit'); btn.disabled = true; btn.textContent = 'Versturen…';
    var body = Object.keys(data).map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]); }).join('&');
    fetch(WEBHOOK, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body }).then(done).catch(done);
    function done() {
      modal.querySelector('.content').innerHTML =
        '<div class="ok"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>' +
        '<h3>Top, ' + (data.first_name || 'tot snel') + '!</h3>' +
        '<p class="sub" style="margin:0">' + okMsg + '</p>' +
        '<a href="tel:+31722340560" style="font-family:var(--font-head);font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--cfa-blue);text-decoration:none;font-size:14px">Liever direct bellen? 072-2340560</a></div>';
      if (current.redirect) setTimeout(function () { location.href = current.redirect; }, 1600);
    }
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest("a[href$='free-intro.html'], [data-cta-form]");
    if (!a) return;
    e.preventDefault();
    var label = a.getAttribute('data-source') || (a.textContent || '').trim().slice(0, 60);
    var sec = a.closest('section'); var hd = sec && sec.querySelector('h1, h2');
    var ctx = hd ? hd.textContent.trim().slice(0, 80) : (a.closest('header') ? 'Navigatie' : '');
    open(label, ctx, a.getAttribute('data-variant'));
  });
})();
