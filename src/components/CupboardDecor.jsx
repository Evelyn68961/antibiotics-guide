// Witchy curios that share the shelves with the powder jars.
// Each is a self-contained SVG. They render at the height of a bottle
// so the line of items along a shelf stays visually anchored.

function Candle() {
  return (
    <svg className="curio curio-candle" viewBox="0 0 60 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="cd-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#fff4c4" stopOpacity="0.95" />
          <stop offset="55%" stopColor="#ffae3a" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#ff7a2a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="30" cy="40" rx="34" ry="44" fill="url(#cd-glow)" />
      {/* candle body */}
      <rect x="20" y="70" width="20" height="110" rx="1.5" fill="#efe2c0" />
      <rect x="20" y="70" width="3" height="110" fill="#d8c699" opacity="0.6" />
      {/* dripping wax */}
      <path d="M 20 96 Q 16 110 18 124 Q 20 128 22 122 Q 18 110 22 96 Z" fill="#efe2c0" />
      <path d="M 40 84 Q 44 100 42 116 Q 40 120 38 116 Q 42 100 38 84 Z" fill="#efe2c0" />
      <path d="M 28 130 Q 26 140 28 150 Q 30 152 32 148 Q 28 140 30 130 Z" fill="#efe2c0" />
      {/* iron holder */}
      <rect x="14" y="178" width="32" height="10" rx="1" fill="#241612" />
      <rect x="10" y="186" width="40" height="4" rx="1" fill="#120906" />
      {/* wick */}
      <line x1="30" y1="64" x2="30" y2="72" stroke="#1a0c08" strokeWidth="1.4" />
      {/* flame */}
      <g className="flame">
        <path d="M 30 38 Q 22 56 26 70 Q 30 76 34 70 Q 38 56 30 38 Z" fill="#ffcf5a" />
        <path d="M 30 50 Q 26 60 30 70 Q 34 60 30 50 Z" fill="#fff3b8" />
        <circle cx="30" cy="68" r="2" fill="#fff8d0" />
      </g>
    </svg>
  )
}

function Skull() {
  return (
    <svg className="curio curio-skull" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* halo */}
      <ellipse cx="50" cy="60" rx="48" ry="56" fill="#ffe6c0" opacity="0.06" />
      {/* cranium */}
      <path d="M 18 56 Q 18 18 50 18 Q 82 18 82 56 Q 82 76 74 86 L 74 96 Q 74 102 68 102 L 32 102 Q 26 102 26 96 L 26 86 Q 18 76 18 56 Z" fill="#ece1c8" />
      {/* shadow under jaw */}
      <path d="M 26 86 Q 50 96 74 86 L 74 96 Q 74 102 68 102 L 32 102 Q 26 102 26 96 Z" fill="#bdaf8c" />
      {/* eye sockets */}
      <ellipse cx="36" cy="58" rx="9" ry="11" fill="#1a0e08" />
      <ellipse cx="64" cy="58" rx="9" ry="11" fill="#1a0e08" />
      {/* faint glow in left socket */}
      <circle cx="36" cy="58" r="2.5" fill="#7ec8d8" opacity="0.7" />
      {/* nasal */}
      <path d="M 50 70 L 46 84 L 54 84 Z" fill="#1a0e08" />
      {/* teeth */}
      <rect x="32" y="92" width="36" height="6" fill="#ece1c8" />
      <line x1="38" y1="92" x2="38" y2="98" stroke="#5a4a30" strokeWidth="0.8" />
      <line x1="44" y1="92" x2="44" y2="98" stroke="#5a4a30" strokeWidth="0.8" />
      <line x1="50" y1="92" x2="50" y2="98" stroke="#5a4a30" strokeWidth="0.8" />
      <line x1="56" y1="92" x2="56" y2="98" stroke="#5a4a30" strokeWidth="0.8" />
      <line x1="62" y1="92" x2="62" y2="98" stroke="#5a4a30" strokeWidth="0.8" />
      {/* crack */}
      <path d="M 42 22 L 48 30 L 44 38 L 50 46" stroke="#7a6a4a" strokeWidth="1" fill="none" />
    </svg>
  )
}

function CrystalBall() {
  return (
    <svg className="curio curio-crystal" viewBox="0 0 100 130" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="cb-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#cae8ff" stopOpacity="0.7" />
          <stop offset="60%" stopColor="#7ea8d8" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#7ea8d8" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="cb-orb" cx="0.35" cy="0.35" r="0.7">
          <stop offset="0%" stopColor="#d8efff" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#6e8eb8" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#2a3a5a" stopOpacity="0.85" />
        </radialGradient>
      </defs>
      <ellipse cx="50" cy="55" rx="46" ry="46" fill="url(#cb-glow)" />
      {/* base / claw stand */}
      <path d="M 26 100 Q 26 110 32 116 L 30 124 L 70 124 L 68 116 Q 74 110 74 100 Z" fill="#3a2818" />
      <path d="M 30 100 L 28 118" stroke="#1a0c08" strokeWidth="1" />
      <path d="M 70 100 L 72 118" stroke="#1a0c08" strokeWidth="1" />
      <path d="M 50 100 L 50 122" stroke="#1a0c08" strokeWidth="1" />
      {/* orb */}
      <circle cx="50" cy="60" r="36" fill="url(#cb-orb)" stroke="rgba(0,0,0,0.4)" strokeWidth="0.6" />
      {/* swirl inside */}
      <path d="M 30 58 Q 50 36 70 58 Q 50 72 30 58 Z" fill="rgba(255,255,255,0.18)" />
      <circle cx="42" cy="50" r="3" fill="#fff" opacity="0.85" />
      <ellipse cx="38" cy="46" rx="8" ry="4" fill="#fff" opacity="0.35" />
      {/* foreboding eye */}
      <ellipse cx="50" cy="62" rx="6" ry="3" fill="#1a0c08" opacity="0.6" />
      <circle cx="50" cy="62" r="1.6" fill="#ff7a2a" opacity="0.9" />
    </svg>
  )
}

function Mushroom() {
  return (
    <svg className="curio curio-mushroom" viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* big cap */}
      <path d="M 8 50 Q 8 18 40 18 Q 72 18 72 50 Q 72 56 64 56 L 16 56 Q 8 56 8 50 Z" fill="#a8344a" />
      <path d="M 8 50 Q 8 22 40 20 Q 50 22 56 30 Q 40 26 24 36 Q 14 44 10 52 Z" fill="#c84a64" />
      {/* white spots */}
      <circle cx="22" cy="34" r="4" fill="#fff5e0" />
      <circle cx="36" cy="28" r="5" fill="#fff5e0" />
      <circle cx="52" cy="36" r="3.5" fill="#fff5e0" />
      <circle cx="60" cy="30" r="2.5" fill="#fff5e0" />
      <circle cx="44" cy="44" r="2.5" fill="#fff5e0" />
      {/* gills under cap */}
      <path d="M 12 56 Q 40 64 68 56 L 68 60 Q 40 68 12 60 Z" fill="#3a1818" />
      <line x1="22" y1="58" x2="22" y2="64" stroke="#1a0c08" strokeWidth="0.6" />
      <line x1="32" y1="58" x2="32" y2="65" stroke="#1a0c08" strokeWidth="0.6" />
      <line x1="42" y1="58" x2="42" y2="65" stroke="#1a0c08" strokeWidth="0.6" />
      <line x1="52" y1="58" x2="52" y2="65" stroke="#1a0c08" strokeWidth="0.6" />
      {/* stem */}
      <path d="M 32 60 Q 30 80 28 92 L 52 92 Q 50 80 48 60 Z" fill="#f4e6c8" />
      <path d="M 34 64 Q 32 80 32 92" stroke="#c9b48a" strokeWidth="0.8" fill="none" />
      {/* tiny baby mushroom beside */}
      <path d="M 60 84 Q 60 76 66 76 Q 72 76 72 84 Q 72 86 70 86 L 62 86 Q 60 86 60 84 Z" fill="#a8344a" />
      <rect x="64" y="86" width="4" height="8" fill="#f4e6c8" />
    </svg>
  )
}

function EyeJar() {
  return (
    <svg className="curio curio-eye" viewBox="0 0 80 130" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="ej-fluid" cx="0.5" cy="0.5" r="0.7">
          <stop offset="0%" stopColor="#a8d8c0" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#3a5e4a" stopOpacity="0.85" />
        </radialGradient>
      </defs>
      {/* lid */}
      <rect x="22" y="6" width="36" height="10" rx="1" fill="#3a2818" />
      <rect x="20" y="14" width="40" height="6" rx="1" fill="#241612" />
      {/* jar */}
      <path d="M 24 22 L 24 26 Q 12 30 12 44 L 12 110 Q 12 124 40 124 Q 68 124 68 110 L 68 44 Q 68 30 56 26 L 56 22 Z" fill="rgba(220,235,225,0.22)" stroke="rgba(0,0,0,0.4)" strokeWidth="0.6" />
      {/* fluid */}
      <path d="M 14 50 L 14 110 Q 14 122 40 122 Q 66 122 66 110 L 66 50 Q 40 56 14 50 Z" fill="url(#ej-fluid)" />
      {/* bubbles */}
      <circle cx="22" cy="80" r="2" fill="#fff" opacity="0.6" />
      <circle cx="58" cy="64" r="1.4" fill="#fff" opacity="0.5" />
      <circle cx="50" cy="100" r="1.6" fill="#fff" opacity="0.55" />
      {/* eyeball */}
      <circle cx="40" cy="80" r="14" fill="#fff5e8" />
      {/* veins */}
      <path d="M 28 78 Q 32 80 30 84" stroke="#a8344a" strokeWidth="0.6" fill="none" opacity="0.7" />
      <path d="M 52 76 Q 48 80 50 84" stroke="#a8344a" strokeWidth="0.6" fill="none" opacity="0.7" />
      <path d="M 40 68 Q 38 72 42 74" stroke="#a8344a" strokeWidth="0.5" fill="none" opacity="0.7" />
      {/* iris */}
      <circle cx="40" cy="80" r="6.5" fill="#3a8e9e" />
      <circle cx="40" cy="80" r="6.5" fill="url(#ej-fluid)" opacity="0.4" />
      {/* pupil */}
      <circle cx="40" cy="80" r="2.8" fill="#0a0604" />
      <circle cx="42" cy="78" r="1" fill="#fff" opacity="0.9" />
      {/* glass shine */}
      <path d="M 18 50 Q 16 80 18 110" stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  )
}

function Mortar() {
  return (
    <svg className="curio curio-mortar" viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* pestle leaning */}
      <g transform="rotate(-22 70 50)">
        <rect x="64" y="4" width="10" height="60" rx="2" fill="#5a3a22" />
        <ellipse cx="69" cy="64" rx="7" ry="4" fill="#3a2818" />
        <ellipse cx="69" cy="6" rx="5" ry="3" fill="#7a5232" />
      </g>
      {/* mortar bowl */}
      <ellipse cx="55" cy="70" rx="44" ry="10" fill="#1a0c08" />
      <path d="M 12 70 Q 18 100 55 102 Q 92 100 98 70 Z" fill="#3a2820" />
      <path d="M 18 72 Q 24 96 55 98 Q 86 96 92 72" fill="#5a3e2a" />
      {/* inner powder */}
      <ellipse cx="55" cy="74" rx="32" ry="6" fill="#7e4ca8" />
      <ellipse cx="55" cy="74" rx="32" ry="6" fill="#fff" opacity="0.08" />
      {/* grains */}
      <circle cx="40" cy="73" r="1" fill="#fff" opacity="0.6" />
      <circle cx="60" cy="76" r="0.8" fill="#fff" opacity="0.5" />
      <circle cx="70" cy="72" r="0.9" fill="#c89efe" opacity="0.7" />
      <circle cx="48" cy="76" r="0.7" fill="#c89efe" opacity="0.7" />
    </svg>
  )
}

function Spider() {
  return (
    <svg className="curio curio-spider" viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* thread */}
      <line x1="40" y1="0" x2="40" y2="48" stroke="#cdbfa0" strokeWidth="0.6" opacity="0.65" />
      {/* legs */}
      <g stroke="#1a0c08" strokeWidth="1.6" fill="none" strokeLinecap="round">
        <path d="M 40 60 Q 22 50 14 64" />
        <path d="M 40 60 Q 20 60 10 76" />
        <path d="M 40 60 Q 22 70 16 86" />
        <path d="M 40 60 Q 30 76 28 92" />
        <path d="M 40 60 Q 58 50 66 64" />
        <path d="M 40 60 Q 60 60 70 76" />
        <path d="M 40 60 Q 58 70 64 86" />
        <path d="M 40 60 Q 50 76 52 92" />
      </g>
      {/* body */}
      <ellipse cx="40" cy="62" rx="13" ry="10" fill="#241010" />
      <ellipse cx="40" cy="58" rx="6" ry="4" fill="#3a1820" />
      {/* hourglass mark */}
      <path d="M 38 60 L 42 60 L 40 64 L 42 66 L 38 66 L 40 64 Z" fill="#c4485a" />
      {/* eyes */}
      <circle cx="37" cy="56" r="0.9" fill="#ffd566" />
      <circle cx="43" cy="56" r="0.9" fill="#ffd566" />
    </svg>
  )
}

function Vial() {
  return (
    <svg className="curio curio-vial" viewBox="0 0 50 130" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* halo */}
      <ellipse cx="25" cy="80" rx="22" ry="36" fill="#7ec8d8" opacity="0.18" />
      {/* cork */}
      <rect x="18" y="6" width="14" height="10" rx="1.5" fill="#8b6537" />
      <rect x="18" y="6" width="14" height="2" fill="#5a3a1c" />
      {/* twine */}
      <rect x="16" y="18" width="18" height="1.6" fill="#3a2818" />
      <line x1="34" y1="18" x2="40" y2="32" stroke="#3a2818" strokeWidth="0.8" />
      {/* small tag */}
      <rect x="36" y="30" width="10" height="8" fill="#f4e6c8" stroke="#8b6f3d" strokeWidth="0.4" transform="rotate(12 41 34)" />
      {/* glass body — tall narrow vial */}
      <path d="M 18 20 L 18 28 Q 8 36 8 60 L 8 110 Q 8 124 25 124 Q 42 124 42 110 L 42 60 Q 42 36 32 28 L 32 20 Z" fill="rgba(255,255,255,0.1)" stroke="rgba(0,0,0,0.4)" strokeWidth="0.6" />
      {/* fluid */}
      <path d="M 10 70 L 10 110 Q 10 122 25 122 Q 40 122 40 110 L 40 70 Q 25 76 10 70 Z" fill="#3a8e5a" opacity="0.85" />
      {/* shine */}
      <path d="M 14 50 Q 12 90 14 118" stroke="rgba(255,255,255,0.45)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      {/* bubble */}
      <circle cx="25" cy="92" r="1.4" fill="#fff" opacity="0.7" />
      <circle cx="32" cy="104" r="1" fill="#fff" opacity="0.6" />
    </svg>
  )
}

const CURIOS = [Candle, Skull, CrystalBall, Mushroom, EyeJar, Mortar, Spider, Vial, Candle]

// Pick a curio for a given (shelf, slot) pair so it stays stable across renders.
export function CurioFor({ shelf, slot }) {
  const Comp = CURIOS[(shelf * 3 + slot * 5) % CURIOS.length]
  return (
    <div className={`curio-slot curio-slot-${slot}`} aria-hidden="true">
      <Comp />
    </div>
  )
}

// Cobwebs in the corners of the cupboard frame.
export function Cobwebs() {
  return (
    <>
      <svg className="cobweb cobweb-tl" viewBox="0 0 120 120" aria-hidden="true">
        <g stroke="rgba(240,230,210,0.5)" strokeWidth="0.7" fill="none">
          <path d="M 0 0 L 120 0" />
          <path d="M 0 0 L 0 120" />
          <path d="M 0 0 L 120 120" />
          <path d="M 0 0 L 110 40" />
          <path d="M 0 0 L 40 110" />
          <path d="M 0 0 L 80 24" />
          <path d="M 0 0 L 24 80" />
          <path d="M 14 0 Q 8 14 0 14" />
          <path d="M 30 0 Q 18 30 0 30" />
          <path d="M 50 0 Q 30 50 0 50" />
          <path d="M 75 0 Q 45 75 0 75" />
          <path d="M 105 0 Q 60 105 0 105" />
        </g>
      </svg>
      <svg className="cobweb cobweb-tr" viewBox="0 0 120 120" aria-hidden="true">
        <g stroke="rgba(240,230,210,0.5)" strokeWidth="0.7" fill="none">
          <path d="M 120 0 L 0 0" />
          <path d="M 120 0 L 120 120" />
          <path d="M 120 0 L 0 120" />
          <path d="M 120 0 L 10 40" />
          <path d="M 120 0 L 80 110" />
          <path d="M 120 0 L 40 24" />
          <path d="M 120 0 L 96 80" />
          <path d="M 106 0 Q 112 14 120 14" />
          <path d="M 90 0 Q 102 30 120 30" />
          <path d="M 70 0 Q 90 50 120 50" />
          <path d="M 45 0 Q 75 75 120 75" />
          <path d="M 15 0 Q 60 105 120 105" />
        </g>
      </svg>
    </>
  )
}

// Hanging clutter strung along the top of the cupboard.
export function HangingClutter() {
  return (
    <div className="hanging-row" aria-hidden="true">
      {/* dried herb bundle */}
      <svg className="hanging hanging-herbs" viewBox="0 0 60 140">
        <line x1="30" y1="0" x2="30" y2="20" stroke="#3a2818" strokeWidth="1" />
        <rect x="22" y="20" width="16" height="6" fill="#7a5a3a" />
        <line x1="22" y1="22" x2="38" y2="22" stroke="#3a2818" strokeWidth="0.4" />
        {/* leaves */}
        {[0, 8, -8, 4, -4].map((dx, i) => (
          <g key={i} transform={`translate(${30 + dx} ${30 + i * 4}) rotate(${i * 12 - 24})`}>
            <path d="M 0 0 Q -4 14 0 30 Q 4 14 0 0 Z" fill={['#4a6a3a', '#5a7a3a', '#6a8a4a', '#3a5a2a', '#5a7a4a'][i % 5]} />
          </g>
        ))}
        {/* lower fronds */}
        <path d="M 30 60 Q 18 80 14 110 Q 22 92 30 80" fill="#4a6a3a" />
        <path d="M 30 60 Q 42 80 46 110 Q 38 92 30 80" fill="#5a7a3a" />
        <path d="M 30 70 Q 28 100 28 130" stroke="#3a4a28" strokeWidth="1.5" fill="none" />
        <path d="M 30 80 Q 32 110 32 130" stroke="#3a4a28" strokeWidth="1.2" fill="none" />
      </svg>

      {/* garlic strand */}
      <svg className="hanging hanging-garlic" viewBox="0 0 50 160">
        <line x1="25" y1="0" x2="25" y2="14" stroke="#3a2818" strokeWidth="1" />
        {[0, 24, 50, 80, 110].map((y, i) => (
          <g key={i} transform={`translate(${25 + (i % 2 === 0 ? -8 : 8)} ${20 + y})`}>
            <ellipse cx="0" cy="10" rx="11" ry="14" fill="#f0e6c8" />
            <ellipse cx="-3" cy="8" rx="3" ry="6" fill="#fff8e0" opacity="0.6" />
            <path d="M -1 -4 L 1 -4 L 0 0 Z" fill="#7a5a3a" />
          </g>
        ))}
      </svg>

      {/* bat silhouette */}
      <svg className="hanging hanging-bat" viewBox="0 0 80 60">
        <line x1="40" y1="0" x2="40" y2="6" stroke="#1a0c08" strokeWidth="1" />
        <path d="M 40 8 Q 28 6 14 16 Q 24 18 28 26 Q 32 18 40 22 Q 48 18 52 26 Q 56 18 66 16 Q 52 6 40 8 Z" fill="#1a0c08" />
        <ellipse cx="36" cy="16" rx="1" ry="1" fill="#ff7a2a" />
        <ellipse cx="44" cy="16" rx="1" ry="1" fill="#ff7a2a" />
        <path d="M 40 22 L 36 30 L 44 30 Z" fill="#1a0c08" />
      </svg>

      {/* bone */}
      <svg className="hanging hanging-bone" viewBox="0 0 40 110">
        <line x1="20" y1="0" x2="20" y2="14" stroke="#3a2818" strokeWidth="0.8" />
        <g transform="translate(0 14)">
          <circle cx="14" cy="6" r="6" fill="#ece1c8" />
          <circle cx="26" cy="6" r="6" fill="#ece1c8" />
          <rect x="16" y="8" width="8" height="70" fill="#ece1c8" />
          <circle cx="14" cy="82" r="6" fill="#ece1c8" />
          <circle cx="26" cy="82" r="6" fill="#ece1c8" />
        </g>
      </svg>

      {/* feather */}
      <svg className="hanging hanging-feather" viewBox="0 0 40 130">
        <line x1="20" y1="0" x2="20" y2="14" stroke="#3a2818" strokeWidth="0.6" />
        <path d="M 20 18 Q 8 50 12 100 Q 18 110 20 118 Q 22 110 28 100 Q 32 50 20 18 Z" fill="#5a3e6a" />
        <line x1="20" y1="20" x2="20" y2="118" stroke="#1a0c1a" strokeWidth="1" />
        {[0, 10, 20, 30, 40, 50, 60, 70, 80].map((d, i) => (
          <g key={i}>
            <line x1="20" y1={28 + d} x2={14 - i * 0.4} y2={36 + d} stroke="#3a2030" strokeWidth="0.5" />
            <line x1="20" y1={28 + d} x2={26 + i * 0.4} y2={36 + d} stroke="#3a2030" strokeWidth="0.5" />
          </g>
        ))}
        {/* iridescent eye */}
        <ellipse cx="20" cy="86" rx="6" ry="9" fill="#7e4ca8" />
        <ellipse cx="20" cy="86" rx="3" ry="5" fill="#3a8e9e" />
        <circle cx="20" cy="86" r="1.5" fill="#0a0604" />
      </svg>

      {/* second herb bundle */}
      <svg className="hanging hanging-herbs hanging-herbs-2" viewBox="0 0 60 140">
        <line x1="30" y1="0" x2="30" y2="20" stroke="#3a2818" strokeWidth="1" />
        <rect x="22" y="20" width="16" height="6" fill="#7a5a3a" />
        <path d="M 30 26 Q 18 50 16 100 Q 24 80 30 70" fill="#7a4a6a" />
        <path d="M 30 26 Q 42 50 44 100 Q 36 80 30 70" fill="#9a6a8a" />
        <path d="M 30 36 Q 30 80 30 120" stroke="#3a1a3a" strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  )
}

// Floating dust motes / fireflies in the room.
export function Atmosphere() {
  return (
    <div className="atmosphere" aria-hidden="true">
      {Array.from({ length: 14 }).map((_, i) => (
        <span
          key={i}
          className="firefly"
          style={{
            left: `${(i * 71) % 100}%`,
            top: `${(i * 37) % 100}%`,
            animationDelay: `${(i % 6) * 0.7}s`,
            animationDuration: `${5 + (i % 5)}s`,
          }}
        />
      ))}
    </div>
  )
}
