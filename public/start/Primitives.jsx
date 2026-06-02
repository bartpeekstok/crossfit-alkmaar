/* global React */
// CFA UI Kit — shared primitives (buttons, chips, section frame)
const { useState } = React;

function Btn({ variant = 'primary', size = 'md', children, onClick, type = 'button', style }) {
  const base = {
    fontFamily: "'Oswald', sans-serif", fontWeight: 600, textTransform: 'uppercase',
    letterSpacing: '.1em', border: 'none', cursor: 'pointer', borderRadius: 4,
    transition: 'all .18s cubic-bezier(.2,.7,.2,1)', display: 'inline-flex',
    alignItems: 'center', justifyContent: 'center', gap: 8, whiteSpace: 'nowrap',
  };
  const sizes = {
    sm: { padding: '9px 16px', fontSize: 12 },
    md: { padding: '13px 26px', fontSize: 14 },
    lg: { padding: '17px 34px', fontSize: 16 },
  };
  const variants = {
    primary: { background: 'var(--cfa-blue)', color: '#fff', boxShadow: 'var(--sh-blue)' },
    ink: { background: 'var(--cfa-ink)', color: '#fff' },
    ghost: { background: 'transparent', color: 'var(--cfa-ink)', boxShadow: 'inset 0 0 0 2px var(--cfa-ink)' },
    ghostLight: { background: 'transparent', color: '#fff', boxShadow: 'inset 0 0 0 2px rgba(255,255,255,.6)' },
    link: { background: 'none', color: 'var(--cfa-blue)', padding: '6px 2px', boxShadow: 'none' },
  };
  const [hover, setHover] = useState(false);
  const hoverStyle = hover ? {
    primary: { background: 'var(--blue-700)', transform: 'translateY(-1px)' },
    ink: { background: 'var(--steel-800)', transform: 'translateY(-1px)' },
    ghost: { background: 'var(--cfa-ink)', color: '#fff' },
    ghostLight: { background: '#fff', color: 'var(--cfa-ink)' },
    link: { textDecoration: 'underline' },
  }[variant] : {};
  return (
    <button type={type} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ ...base, ...sizes[size], ...variants[variant], ...hoverStyle, ...style }}>
      {children}
    </button>
  );
}

function Eyebrow({ children, light }) {
  return <div style={{
    fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 13,
    letterSpacing: '.22em', textTransform: 'uppercase',
    color: light ? 'var(--blue-300)' : 'var(--cfa-blue)',
  }}>{children}</div>;
}

function DoubleRule({ light }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5, margin: '18px 0' }}>
      <div style={{ height: 6, background: light ? '#fff' : 'var(--cfa-ink)' }} />
      <div style={{ height: 2, background: 'var(--cfa-steel)' }} />
    </div>
  );
}

function Chip({ tone = 'steel', children }) {
  const tones = {
    go: { background: 'var(--go-soft)', color: '#15703c', dot: '#1F9D55' },
    hold: { background: 'var(--hold-soft)', color: '#8a6512', dot: '#E0A325' },
    stop: { background: 'var(--stop-soft)', color: '#9c2723', dot: '#D23A36' },
    rx: { background: 'var(--cfa-ink)', color: '#fff' },
    scaled: { background: 'var(--blue-50)', color: 'var(--cfa-blue)' },
    steel: { background: 'var(--steel-100)', color: 'var(--fg2)' },
  };
  const t = tones[tone];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 12,
      letterSpacing: '.08em', textTransform: 'uppercase', padding: '5px 11px',
      borderRadius: 999, background: t.background, color: t.color, whiteSpace: 'nowrap',
    }}>
      {t.dot && <span style={{ width: 7, height: 7, borderRadius: '50%', background: t.dot }} />}
      {children}
    </span>
  );
}

Object.assign(window, { Btn, Eyebrow, DoubleRule, Chip });
