// A witch's powder jar. Each one filled with a uniquely-colored powder,
// granular texture rendered as scattered dots, sealed with a cork and twine,
// floating sparkles drifting around.

const POWDER = {
  Carbapenem:      { powder: '#7e4ca8', dark: '#4a2a6a', light: '#b88fde', glow: '#c89efe' },
  Cephalosporin:   { powder: '#3a8e5a', dark: '#1d4a2d', light: '#7fc99a', glow: '#9fe0bf' },
  Penicillin:      { powder: '#d49a4a', dark: '#7a4a1a', light: '#f0c97a', glow: '#ffe8a8' },
  Glycopeptide:    { powder: '#a8b6c5', dark: '#5a6878', light: '#d8e0e8', glow: '#f0f5fa' },
  Fluoroquinolone: { powder: '#c4485a', dark: '#7a2a3a', light: '#e88a98', glow: '#ffaab8' },
  Macrolide:       { powder: '#d670a3', dark: '#7a3a5a', light: '#f0a0c8', glow: '#ffcae0' },
  Polymyxin:       { powder: '#3a5e9a', dark: '#1a2e5a', light: '#7095c8', glow: '#a0bce0' },
  Lipopeptide:     { powder: '#3a8e9e', dark: '#1d4a58', light: '#7ec8d8', glow: '#a8e0ec' },
  Glycylcycline:   { powder: '#d4744a', dark: '#7a3a1a', light: '#f0a888', glow: '#ffc8a8' },
  Oxazolidinone:   { powder: '#3a9e5a', dark: '#1a4a28', light: '#7ed4a3', glow: '#a8f0c8' },
  Nitroimidazole:  { powder: '#7e4ace', dark: '#4a228e', light: '#a888d8', glow: '#c8a8f0' },
  Aminoglycoside:  { powder: '#a87a3a', dark: '#5a3e1a', light: '#d4ae6e', glow: '#f0d09a' },
  Tetracycline:    { powder: '#a8743a', dark: '#5a3e1a', light: '#d49e6a', glow: '#f0c89a' },
  Lincosamide:     { powder: '#5a8e3a', dark: '#2d4a1d', light: '#9ec97a', glow: '#bfe09f' },
  Antifungal:      { powder: '#c45a8e', dark: '#7a2a4a', light: '#e88abe', glow: '#ffaade' },
  Antiviral:       { powder: '#3a4a9e', dark: '#1a2058', light: '#7080c8', glow: '#a0b0e0' },
}
const FALLBACK = { powder: '#5a4a6a', dark: '#2a1c3a', light: '#8a7aa0', glow: '#b0a0c8' }

function paletteFor(category) {
  if (!category) return FALLBACK
  if (POWDER[category]) return POWDER[category]
  for (const key of Object.keys(POWDER)) {
    if (category.includes(key) || key.includes(category)) return POWDER[key]
  }
  return FALLBACK
}

// Deterministic PRNG so each jar's grain pattern is unique but stable.
function seedFrom(s) {
  let h = 2166136261
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}
function rng(seed) {
  let x = seed || 1
  return () => {
    x = (x * 9301 + 49297) % 233280
    return x / 233280
  }
}

function makeGrains(seed, n, xMin, xMax, yMin, yMax) {
  const r = rng(seed)
  const out = []
  for (let i = 0; i < n; i++) {
    out.push({
      x: xMin + r() * (xMax - xMin),
      y: yMin + r() * (yMax - yMin),
      s: 0.4 + r() * 1.1,
    })
  }
  return out
}

function makeSparkles(seed, n) {
  const r = rng(seed + 1)
  const out = []
  for (let i = 0; i < n; i++) {
    out.push({
      x: 8 + r() * 84,
      y: 10 + r() * 160,
      s: 0.6 + r() * 1.4,
      delay: r() * 4,
    })
  }
  return out
}

function AntibioticBottle({ antibiotic, onClick }) {
  const p = paletteFor(antibiotic.category)
  const seed = seedFrom(antibiotic.id || antibiotic.name || 'x')
  const labelTop = antibiotic.brandName || antibiotic.genericName
  const labelBottom = antibiotic.brandName ? antibiotic.genericName : ''

  // Granules in the powder — three layers for visual depth
  const grainsDark = makeGrains(seed, 26, 22, 78, 92, 158)
  const grainsLight = makeGrains(seed + 7, 22, 22, 78, 92, 158)
  const grainsGlint = makeGrains(seed + 13, 8, 22, 78, 92, 158)

  // Floating sparkles around the jar
  const sparkles = makeSparkles(seed, 6)

  // Wavy top edge of powder — make slightly irregular per jar
  const r = rng(seed + 31)
  const w1 = 86 + r() * 4
  const w2 = 88 + r() * 4
  const w3 = 86 + r() * 4
  const powderTopPath = `M 22 92 Q 35 ${w1} 50 ${w2 - 2} Q 65 ${w3} 78 92 L 78 158 L 22 158 Z`

  return (
    <button
      className="bottle"
      onClick={() => onClick(antibiotic)}
      style={{ '--glow': p.glow, '--powder': p.powder }}
      aria-label={`Open ${labelTop}`}
    >
      <svg
        className="bottle-svg"
        viewBox="0 0 100 180"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={`halo-${seed}`} cx="0.5" cy="0.55" r="0.5">
            <stop offset="0%" stopColor={p.glow} stopOpacity="0.6" />
            <stop offset="60%" stopColor={p.glow} stopOpacity="0.2" />
            <stop offset="100%" stopColor={p.glow} stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`glass-${seed}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
            <stop offset="40%" stopColor="#ffffff" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.18" />
          </linearGradient>
          <linearGradient id={`powder-${seed}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={p.light} />
            <stop offset="40%" stopColor={p.powder} />
            <stop offset="100%" stopColor={p.dark} />
          </linearGradient>
          <clipPath id={`jar-${seed}`}>
            <path d="M 38 30 L 38 38 Q 18 44 18 70 L 18 142 Q 18 168 50 170 Q 82 168 82 142 L 82 70 Q 82 44 62 38 L 62 30 Z" />
          </clipPath>
        </defs>

        {/* halo glow */}
        <ellipse cx="50" cy="120" rx="50" ry="68" fill={`url(#halo-${seed})`} />

        {/* floating sparkles around jar */}
        {sparkles.map((sp, i) => (
          <g key={i} className="sparkle" style={{ animationDelay: `${sp.delay}s` }}>
            <circle cx={sp.x} cy={sp.y} r={sp.s * 0.6} fill="#fff8e0" opacity="0.9" />
            <circle cx={sp.x} cy={sp.y} r={sp.s * 1.6} fill="#fff8e0" opacity="0.25" />
          </g>
        ))}

        {/* cork stopper */}
        <rect x="38" y="6" width="24" height="16" rx="1.5" fill="#8b6537" />
        <rect x="38" y="6" width="24" height="3" fill="#6b4827" />
        <rect x="38" y="18" width="24" height="3" fill="#5a3a1c" opacity="0.5" />

        {/* twine wrap around the neck */}
        <rect x="34" y="25" width="32" height="2" fill="#3a2818" />
        <rect x="34" y="28" width="32" height="2" fill="#5a3e22" />

        {/* jar body — glass outline */}
        <path
          d="M 38 30 L 38 38 Q 18 44 18 70 L 18 142 Q 18 168 50 170 Q 82 168 82 142 L 82 70 Q 82 44 62 38 L 62 30 Z"
          fill={`url(#glass-${seed})`}
          stroke="rgba(0,0,0,0.4)"
          strokeWidth="0.6"
        />

        {/* powder fill clipped inside the jar shape */}
        <g clipPath={`url(#jar-${seed})`}>
          <path d={powderTopPath} fill={`url(#powder-${seed})`} />
          {grainsDark.map((g, i) => (
            <circle key={`d${i}`} cx={g.x} cy={g.y} r={g.s} fill={p.dark} opacity="0.55" />
          ))}
          {grainsLight.map((g, i) => (
            <circle key={`l${i}`} cx={g.x} cy={g.y} r={g.s * 0.9} fill={p.light} opacity="0.7" />
          ))}
          {grainsGlint.map((g, i) => (
            <circle key={`g${i}`} cx={g.x} cy={g.y} r={g.s * 0.6} fill="#fff" opacity="0.85" />
          ))}
        </g>

        {/* glass shine highlights */}
        <path
          d="M 28 60 Q 24 100 28 150"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 73 70 Q 75 110 73 145"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* parchment label band across middle */}
        <rect
          x="20"
          y="110"
          width="60"
          height="28"
          fill="#f4e6c8"
          stroke="#8b6f3d"
          strokeWidth="0.6"
          opacity="0.95"
        />
        <line x1="20" y1="114" x2="80" y2="114" stroke="#8b6f3d" strokeWidth="0.3" opacity="0.5" />
        <line x1="20" y1="134" x2="80" y2="134" stroke="#8b6f3d" strokeWidth="0.3" opacity="0.5" />
      </svg>

      <div className="bottle-label">
        <span className="bottle-label-top">{labelTop}</span>
        {labelBottom && <span className="bottle-label-bottom">{labelBottom}</span>}
      </div>
    </button>
  )
}

export default AntibioticBottle
