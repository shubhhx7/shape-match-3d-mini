/* Answer option cards — each card shows a recognisable HOUSE shaped after its geometry */

// ─── House SVGs ───────────────────────────────────────────────────────────────

/* Cube Home: boxy square house with flat roof — matches a cube's geometry */
function CubeHouseSVG() {
  return (
    <svg viewBox="0 0 88 88" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
      <defs>
        <linearGradient id="chBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="chRoof" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <filter id="chf" x="-8%" y="-8%" width="116%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="rgba(29,78,216,0.5)" />
        </filter>
      </defs>
      <g filter="url(#chf)">
        {/* House body — square/boxy */}
        <rect x="7" y="34" width="74" height="50" fill="url(#chBody)" rx="4" />
        {/* Flat roof — wide brim like a cube lid */}
        <rect x="3" y="24" width="82" height="13" fill="url(#chRoof)" rx="4" />
        {/* Chimney */}
        <rect x="60" y="9" width="12" height="20" fill="#2563EB" rx="3" />
        <rect x="59" y="8" width="14" height="4" fill="#1E40AF" rx="2" />
      </g>
      {/* Square door */}
      <rect x="31" y="52" width="26" height="32" fill="rgba(255,255,255,0.92)" rx="2" />
      <line x1="44" y1="52" x2="44" y2="84" stroke="rgba(37,99,235,0.3)" strokeWidth="1.5" />
      {/* Square windows */}
      <rect x="9"  y="38" width="16" height="11" fill="rgba(255,255,255,0.80)" rx="2" />
      <rect x="63" y="38" width="16" height="11" fill="rgba(255,255,255,0.80)" rx="2" />
      {/* Cross bars on windows */}
      <line x1="17" y1="38" x2="17" y2="49" stroke="rgba(37,99,235,0.25)" strokeWidth="1" />
      <line x1="9"  y1="43" x2="25" y2="43" stroke="rgba(37,99,235,0.25)" strokeWidth="1" />
      <line x1="71" y1="38" x2="71" y2="49" stroke="rgba(37,99,235,0.25)" strokeWidth="1" />
      <line x1="63" y1="43" x2="79" y2="43" stroke="rgba(37,99,235,0.25)" strokeWidth="1" />
      {/* Roof shine */}
      <rect x="3" y="24" width="36" height="5" fill="rgba(255,255,255,0.22)" rx="4" />
    </svg>
  );
}

/* Sphere Home: dome / igloo shape — matches a sphere's round geometry */
function SphereHouseSVG() {
  return (
    <svg viewBox="0 0 88 88" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
      <defs>
        <linearGradient id="shBase" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F87171" />
          <stop offset="100%" stopColor="#B91C1C" />
        </linearGradient>
        <radialGradient id="shDome" cx="38%" cy="38%" r="62%">
          <stop offset="0%" stopColor="#FCA5A5" />
          <stop offset="50%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#991B1B" />
        </radialGradient>
        <radialGradient id="shShine" cx="30%" cy="25%" r="42%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        <filter id="shf" x="-8%" y="-8%" width="116%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="rgba(153,27,27,0.5)" />
        </filter>
        <clipPath id="shClip">
          <rect x="0" y="44" width="88" height="44" />
        </clipPath>
      </defs>
      <g filter="url(#shf)">
        {/* Rectangular base */}
        <rect x="8" y="52" width="72" height="32" fill="url(#shBase)" rx="4" />
        {/* Dome — full circle clipped to show only upper half */}
        <circle cx="44" cy="44" r="36" fill="url(#shDome)" />
      </g>
      {/* Dome shine */}
      <ellipse cx="31" cy="22" rx="13" ry="8" fill="url(#shShine)" />
      {/* Round arched door */}
      <rect x="30" y="60" width="28" height="24" fill="rgba(255,255,255,0.92)" rx="14" />
      {/* Circular windows */}
      <circle cx="16" cy="60" r="9" fill="rgba(255,255,255,0.78)" />
      <circle cx="72" cy="60" r="9" fill="rgba(255,255,255,0.78)" />
      {/* Window cross */}
      <line x1="16" y1="51" x2="16" y2="69" stroke="rgba(185,28,28,0.3)" strokeWidth="1" />
      <line x1="7"  y1="60" x2="25" y2="60" stroke="rgba(185,28,28,0.3)" strokeWidth="1" />
      <line x1="72" y1="51" x2="72" y2="69" stroke="rgba(185,28,28,0.3)" strokeWidth="1" />
      <line x1="63" y1="60" x2="81" y2="60" stroke="rgba(185,28,28,0.3)" strokeWidth="1" />
    </svg>
  );
}

/* Cone Home: peaked triangular roof house — matches a cone's pointed geometry */
function ConeHouseSVG() {
  return (
    <svg viewBox="0 0 88 92" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
      <defs>
        <linearGradient id="cnBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
        <linearGradient id="cnRoof" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="50%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <filter id="cnf" x="-8%" y="-4%" width="116%" height="114%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="rgba(180,83,9,0.5)" />
        </filter>
      </defs>
      <g filter="url(#cnf)">
        {/* House body */}
        <rect x="8" y="48" width="72" height="40" fill="url(#cnBody)" rx="4" />
        {/* Cone / triangle roof */}
        <polygon points="44,4 3,48 85,48" fill="url(#cnRoof)" />
      </g>
      {/* Roof edge highlight */}
      <line x1="44" y1="4" x2="16" y2="44" stroke="rgba(255,255,255,0.42)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Pointed arch door */}
      <path d="M 31,88 L 31,67 Q 31,57 44,55 Q 57,57 57,67 L 57,88 Z" fill="rgba(255,255,255,0.92)" />
      {/* Windows */}
      <rect x="9"  y="54" width="16" height="11" fill="rgba(255,255,255,0.78)" rx="2" />
      <rect x="63" y="54" width="16" height="11" fill="rgba(255,255,255,0.78)" rx="2" />
      {/* Window cross */}
      <line x1="17" y1="54" x2="17" y2="65" stroke="rgba(180,83,9,0.28)" strokeWidth="1" />
      <line x1="9"  y1="59" x2="25" y2="59" stroke="rgba(180,83,9,0.28)" strokeWidth="1" />
      <line x1="71" y1="54" x2="71" y2="65" stroke="rgba(180,83,9,0.28)" strokeWidth="1" />
      <line x1="63" y1="59" x2="79" y2="59" stroke="rgba(180,83,9,0.28)" strokeWidth="1" />
    </svg>
  );
}

/* Cylinder Home: round tower / turret — matches a cylinder's circular geometry */
function CylinderHouseSVG() {
  return (
    <svg viewBox="0 0 80 90" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
      <defs>
        <linearGradient id="cyBody" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="40%" stopColor="#34D399" />
          <stop offset="60%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#065F46" />
        </linearGradient>
        <radialGradient id="cyCap" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#A7F3D0" />
          <stop offset="100%" stopColor="#059669" />
        </radialGradient>
        <filter id="cyf" x="-10%" y="-5%" width="120%" height="115%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="rgba(6,78,59,0.5)" />
        </filter>
      </defs>
      <g filter="url(#cyf)">
        {/* Cylinder tower body — heavily rounded sides evoke cylinder cross-section */}
        <rect x="8" y="20" width="64" height="66" fill="url(#cyBody)" rx="32" />
        {/* Top cap ellipse */}
        <ellipse cx="40" cy="20" rx="32" ry="10" fill="url(#cyCap)" />
      </g>
      {/* Highlight stripe — suggests cylindrical curvature */}
      <rect x="10" y="20" width="12" height="66" fill="rgba(255,255,255,0.12)" rx="6" />
      {/* Oval door */}
      <rect x="24" y="60" width="32" height="26" fill="rgba(255,255,255,0.92)" rx="16" />
      {/* Oval windows */}
      <ellipse cx="18" cy="44" rx="9" ry="7" fill="rgba(255,255,255,0.78)" />
      <ellipse cx="62" cy="44" rx="9" ry="7" fill="rgba(255,255,255,0.78)" />
      {/* Window cross */}
      <line x1="18" y1="37" x2="18" y2="51" stroke="rgba(6,78,59,0.3)"  strokeWidth="1" />
      <line x1="9"  y1="44" x2="27" y2="44" stroke="rgba(6,78,59,0.3)"  strokeWidth="1" />
      <line x1="62" y1="37" x2="62" y2="51" stroke="rgba(6,78,59,0.3)"  strokeWidth="1" />
      <line x1="53" y1="44" x2="71" y2="44" stroke="rgba(6,78,59,0.3)"  strokeWidth="1" />
    </svg>
  );
}

/* Cuboid Home: long rectangular house with flat roof — wider than cube house */
function CuboidHouseSVG() {
  return (
    <svg viewBox="0 0 110 88" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
      <defs>
        <linearGradient id="cbdBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#6D28D9" />
        </linearGradient>
        <linearGradient id="cbdRoof" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C4B5FD" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <filter id="cbdf" x="-8%" y="-8%" width="116%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="rgba(109,40,217,0.5)" />
        </filter>
      </defs>
      <g filter="url(#cbdf)">
        {/* Long rectangular house body — wider aspect ratio than cube house */}
        <rect x="4"  y="36" width="102" height="48" fill="url(#cbdBody)" rx="4" />
        {/* Flat roof overhangs body */}
        <rect x="1"  y="26" width="108" height="13" fill="url(#cbdRoof)" rx="4" />
        {/* Chimney */}
        <rect x="86" y="11" width="10"  height="19" fill="#7C3AED" rx="3" />
        <rect x="85" y="10" width="12"  height="4"  fill="#5B21B6" rx="2" />
      </g>
      {/* Rectangle door — portrait rectangle, clearly rectangular proportions */}
      <rect x="41" y="52" width="28" height="32" fill="rgba(255,255,255,0.92)" rx="2" />
      <line x1="55" y1="52" x2="55" y2="84" stroke="rgba(109,40,217,0.3)" strokeWidth="1.5" />
      {/* Rectangle windows */}
      <rect x="7"  y="41" width="18" height="10" fill="rgba(255,255,255,0.78)" rx="2" />
      <rect x="85" y="41" width="18" height="10" fill="rgba(255,255,255,0.78)" rx="2" />
      {/* Cross bars */}
      <line x1="16" y1="41" x2="16" y2="51" stroke="rgba(109,40,217,0.25)" strokeWidth="1" />
      <line x1="7"  y1="46" x2="25" y2="46" stroke="rgba(109,40,217,0.25)" strokeWidth="1" />
      <line x1="94" y1="41" x2="94" y2="51" stroke="rgba(109,40,217,0.25)" strokeWidth="1" />
      <line x1="85" y1="46" x2="103" y2="46" stroke="rgba(109,40,217,0.25)" strokeWidth="1" />
      {/* Roof shine */}
      <rect x="1" y="26" width="42" height="5" fill="rgba(255,255,255,0.22)" rx="4" />
    </svg>
  );
}

const HOUSE_SVG = {
  cube:     CubeHouseSVG,
  cuboid:   CuboidHouseSVG,
  sphere:   SphereHouseSVG,
  cone:     ConeHouseSVG,
  cylinder: CylinderHouseSVG,
};

// ─── Card component ───────────────────────────────────────────────────────────

export default function ShapeHome({ shape, onSelect, feedbackState, shakeKey, disabled }) {
  const HouseSVG = HOUSE_SVG[shape.id];

  const isCorrect = feedbackState === 'correct';
  const isWrong   = feedbackState === 'wrong';

  const borderColor = isCorrect ? '#22c55e' : isWrong ? '#ef4444' : 'rgba(255,255,255,0.65)';
  const borderWidth = isCorrect || isWrong ? '4px' : '2.5px';

  const cardBg = isCorrect
    ? 'linear-gradient(160deg, #bbf7d0, #4ade80)'
    : isWrong
    ? 'linear-gradient(160deg, #fecaca, #f87171)'
    : `linear-gradient(170deg, ${shape.colorLight}ee 0%, ${shape.color}cc 55%, ${shape.colorDark}99 100%)`;

  const shadow = isCorrect
    ? '0 0 28px 6px rgba(34,197,94,0.7), 0 6px 20px rgba(0,0,0,0.2)'
    : isWrong
    ? '0 0 24px 5px rgba(239,68,68,0.6),  0 6px 18px rgba(0,0,0,0.2)'
    : '0 6px 22px rgba(0,0,0,0.28), 0 2px 6px rgba(0,0,0,0.12)';

  const labelColor  = isCorrect || isWrong ? '#1e293b' : 'white';
  const labelShadow = isCorrect || isWrong ? 'none'    : '0 1px 5px rgba(0,0,0,0.45)';

  return (
    <div
      key={shakeKey}
      className={isWrong ? 'anim-shake' : isCorrect ? 'anim-glowPulse' : ''}
      style={{ flex: 1, minWidth: 0 }}
    >
      <button
        aria-label={`${shape.name} home — tap to select`}
        onClick={disabled ? undefined : onSelect}
        disabled={disabled}
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          /* Use vh-based height so cards stay compact on large desktop screens */
          height: 'clamp(106px, 17vh, 148px)',
          padding: 'clamp(6px, 1.5vh, 10px) clamp(4px, 1.2vw, 8px)',
          gap: '4px',
          border: `${borderWidth} solid ${borderColor}`,
          borderRadius: '22px',
          cursor: disabled ? 'default' : 'pointer',
          background: cardBg,
          boxShadow: shadow,
          transition: 'transform 0.12s ease, box-shadow 0.18s ease',
          WebkitTapHighlightColor: 'transparent',
          touchAction: 'manipulation',
        }}
        onPointerDown={e => { if (!disabled) e.currentTarget.style.transform = 'scale(0.91)'; }}
        onPointerUp={e =>   { if (!disabled) e.currentTarget.style.transform = 'scale(1)'; }}
        onPointerLeave={e =>{ e.currentTarget.style.transform = 'scale(1)'; }}
      >
        {/* House illustration */}
        <div style={{
          width: '100%',
          maxHeight: 'clamp(62px, 10vh, 94px)',
          flex: '1 1 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: disabled && !isWrong && !isCorrect ? 0.5 : 1,
          transition: 'opacity 0.2s',
          overflow: 'visible',
        }}>
          {HouseSVG && <HouseSVG />}
        </div>

        {/* Thin divider */}
        <div style={{
          width: '65%',
          height: '1.5px',
          background: 'rgba(255,255,255,0.3)',
          borderRadius: '2px',
          flexShrink: 0,
        }} />

        {/* Shape name label */}
        <span style={{
          fontWeight: 900,
          fontSize: 'clamp(0.68rem, 2.4vw, 0.9rem)',
          color: labelColor,
          textShadow: labelShadow,
          textAlign: 'center',
          letterSpacing: '0.3px',
          lineHeight: 1.2,
          flexShrink: 0,
        }}>
          {shape.name}
        </span>

        {/* Feedback icon */}
        {(isCorrect || isWrong) && (
          <span
            className={isCorrect ? 'anim-popIn' : ''}
            style={{ fontSize: 'clamp(0.9rem, 2.6vw, 1.2rem)', lineHeight: 1, flexShrink: 0 }}
          >
            {isCorrect ? '✅' : '❌'}
          </span>
        )}
      </button>
    </div>
  );
}
