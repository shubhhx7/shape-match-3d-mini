/* Large 3D-style shape with a cute face — displayed as the "target" in each round */

function CubeSVG() {
  return (
    <svg viewBox="0 0 130 120" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
      <defs>
        <linearGradient id="cubeFront" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id="cubeTop" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#DBEAFE" />
        </linearGradient>
        <linearGradient id="cubeRight" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1E40AF" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>
        <filter id="cubeShadow" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="rgba(30,64,175,0.45)" />
        </filter>
      </defs>
      <g filter="url(#cubeShadow)">
        <polygon points="10,48 78,48 78,110 10,110" fill="url(#cubeFront)" />
        <polygon points="10,48 78,48 114,20 46,20" fill="url(#cubeTop)" />
        <polygon points="78,48 114,20 114,82 78,110" fill="url(#cubeRight)" />
      </g>
      <line x1="10" y1="48" x2="78" y2="48" stroke="rgba(255,255,255,0.55)" strokeWidth="2" />
      <line x1="10" y1="48" x2="10" y2="110" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      <circle cx="30" cy="67" r="7.5" fill="white" />
      <circle cx="32" cy="66" r="4" fill="#1e293b" />
      <circle cx="33.5" cy="64" r="1.5" fill="white" />
      <circle cx="58" cy="67" r="7.5" fill="white" />
      <circle cx="60" cy="66" r="4" fill="#1e293b" />
      <circle cx="61.5" cy="64" r="1.5" fill="white" />
      <ellipse cx="22" cy="80" rx="9" ry="5.5" fill="#FCA5A5" opacity="0.75" />
      <ellipse cx="66" cy="80" rx="9" ry="5.5" fill="#FCA5A5" opacity="0.75" />
      <path d="M 24 88 Q 44 104 64 88" fill="none" stroke="#1e293b" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

function SphereSVG() {
  return (
    <svg viewBox="0 0 120 120" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
      <defs>
        <radialGradient id="sphereBody" cx="35%" cy="32%" r="65%">
          <stop offset="0%" stopColor="#FCA5A5" />
          <stop offset="50%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#991B1B" />
        </radialGradient>
        <radialGradient id="sphereShine" cx="30%" cy="30%" r="45%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.75)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        <filter id="sphereShadow" x="-20%" y="-20%" width="160%" height="160%">
          <feDropShadow dx="0" dy="9" stdDeviation="9" floodColor="rgba(153,27,27,0.45)" />
        </filter>
      </defs>
      <circle cx="60" cy="60" r="52" fill="url(#sphereBody)" filter="url(#sphereShadow)" />
      <ellipse cx="42" cy="38" rx="19" ry="12" fill="url(#sphereShine)" />
      <circle cx="46" cy="57" r="7.5" fill="white" />
      <circle cx="48" cy="56" r="4" fill="#1e293b" />
      <circle cx="49.5" cy="54" r="1.5" fill="white" />
      <circle cx="74" cy="57" r="7.5" fill="white" />
      <circle cx="76" cy="56" r="4" fill="#1e293b" />
      <circle cx="77.5" cy="54" r="1.5" fill="white" />
      <ellipse cx="37" cy="70" rx="9" ry="5.5" fill="#FCA5A5" opacity="0.7" />
      <ellipse cx="83" cy="70" rx="9" ry="5.5" fill="#FCA5A5" opacity="0.7" />
      <path d="M 40 78 Q 60 94 80 78" fill="none" stroke="#1e293b" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

function ConeSVG() {
  return (
    <svg viewBox="0 0 120 130" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
      <defs>
        <linearGradient id="coneBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="40%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <radialGradient id="coneBase" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="100%" stopColor="#92400E" />
        </radialGradient>
        <filter id="coneShadow" x="-20%" y="-10%" width="160%" height="140%">
          <feDropShadow dx="0" dy="9" stdDeviation="8" floodColor="rgba(146,64,14,0.4)" />
        </filter>
      </defs>
      <g filter="url(#coneShadow)">
        <path d="M 60,10 L 8,112 Q 60,128 112,112 Z" fill="url(#coneBody)" />
        <ellipse cx="60" cy="112" rx="52" ry="14" fill="url(#coneBase)" />
      </g>
      <line x1="60" y1="10" x2="20" y2="100" stroke="rgba(255,255,255,0.4)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="46" cy="80" r="7" fill="white" />
      <circle cx="48" cy="79" r="3.8" fill="#1e293b" />
      <circle cx="49.5" cy="77" r="1.4" fill="white" />
      <circle cx="74" cy="80" r="7" fill="white" />
      <circle cx="76" cy="79" r="3.8" fill="#1e293b" />
      <circle cx="77.5" cy="77" r="1.4" fill="white" />
      <ellipse cx="38" cy="93" rx="8" ry="5" fill="#FCA5A5" opacity="0.7" />
      <ellipse cx="82" cy="93" rx="8" ry="5" fill="#FCA5A5" opacity="0.7" />
      <path d="M 40 100 Q 60 114 80 100" fill="none" stroke="#1e293b" strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  );
}

function CylinderSVG() {
  return (
    <svg viewBox="0 0 120 130" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
      <defs>
        <linearGradient id="cylBody" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="35%" stopColor="#34D399" />
          <stop offset="65%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#065F46" />
        </linearGradient>
        <radialGradient id="cylTop" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#A7F3D0" />
          <stop offset="100%" stopColor="#059669" />
        </radialGradient>
        <radialGradient id="cylBottom" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#022C22" />
        </radialGradient>
        <filter id="cylShadow" x="-20%" y="-10%" width="160%" height="140%">
          <feDropShadow dx="0" dy="9" stdDeviation="8" floodColor="rgba(6,78,59,0.45)" />
        </filter>
      </defs>
      <g filter="url(#cylShadow)">
        <rect x="10" y="28" width="100" height="84" fill="url(#cylBody)" rx="4" />
        <ellipse cx="60" cy="112" rx="50" ry="15" fill="url(#cylBottom)" />
        <ellipse cx="60" cy="28" rx="50" ry="15" fill="url(#cylTop)" />
      </g>
      <rect x="20" y="28" width="18" height="84" fill="rgba(255,255,255,0.12)" rx="4" />
      <circle cx="44" cy="65" r="7.5" fill="white" />
      <circle cx="46" cy="64" r="4" fill="#1e293b" />
      <circle cx="47.5" cy="62" r="1.5" fill="white" />
      <circle cx="76" cy="65" r="7.5" fill="white" />
      <circle cx="78" cy="64" r="4" fill="#1e293b" />
      <circle cx="79.5" cy="62" r="1.5" fill="white" />
      <ellipse cx="35" cy="78" rx="9" ry="5.5" fill="#6EE7B7" opacity="0.75" />
      <ellipse cx="85" cy="78" rx="9" ry="5.5" fill="#6EE7B7" opacity="0.75" />
      <path d="M 38 86 Q 60 102 82 86" fill="none" stroke="#1e293b" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

function CuboidSVG() {
  /* Wider, flatter rectangular box — clearly different from the equal-sided Cube */
  return (
    <svg viewBox="0 0 150 110" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
      <defs>
        <linearGradient id="cuboidFront" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C4B5FD" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
        <linearGradient id="cuboidTop" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#EDE9FE" />
        </linearGradient>
        <linearGradient id="cuboidRight" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5B21B6" />
          <stop offset="100%" stopColor="#4C1D95" />
        </linearGradient>
        <filter id="cuboidShadow" x="-15%" y="-20%" width="130%" height="160%">
          <feDropShadow dx="0" dy="8" stdDeviation="7" floodColor="rgba(109,40,217,0.45)" />
        </filter>
      </defs>
      <g filter="url(#cuboidShadow)">
        {/* Front face — wide rectangle (102 × 54) emphasises cuboid shape */}
        <polygon points="8,42 110,42 110,96 8,96" fill="url(#cuboidFront)" />
        {/* Top face */}
        <polygon points="8,42 110,42 138,18 36,18" fill="url(#cuboidTop)" />
        {/* Right face */}
        <polygon points="110,42 138,18 138,72 110,96" fill="url(#cuboidRight)" />
      </g>
      {/* Edge highlights */}
      <line x1="8" y1="42" x2="110" y2="42" stroke="rgba(255,255,255,0.55)" strokeWidth="2" />
      <line x1="8" y1="42" x2="8"   y2="96" stroke="rgba(255,255,255,0.3)"  strokeWidth="1.5" />
      {/* Eyes */}
      <circle cx="38" cy="64" r="7.5" fill="white" />
      <circle cx="40" cy="63" r="4"   fill="#1e293b" />
      <circle cx="41.5" cy="61" r="1.5" fill="white" />
      <circle cx="80" cy="64" r="7.5" fill="white" />
      <circle cx="82" cy="63" r="4"   fill="#1e293b" />
      <circle cx="83.5" cy="61" r="1.5" fill="white" />
      {/* Cheeks */}
      <ellipse cx="24" cy="78" rx="9" ry="5.5" fill="#DDD6FE" opacity="0.75" />
      <ellipse cx="95" cy="78" rx="9" ry="5.5" fill="#DDD6FE" opacity="0.75" />
      {/* Smile */}
      <path d="M 28 84 Q 59 98 90 84" fill="none" stroke="#1e293b" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

const SHAPE_SVG = {
  cube: CubeSVG,
  cuboid: CuboidSVG,
  sphere: SphereSVG,
  cone: ConeSVG,
  cylinder: CylinderSVG,
};

export default function ShapeCharacter({ shape, animState }) {
  const ShapeSVG = SHAPE_SVG[shape.id] || null;

  const isCorrect = animState === 'correct';
  const isIdle    = animState === 'idle';

  return (
    /* perspective wrapper enables CSS 3D transforms on the child */
    <div style={{
      width: 'clamp(118px, 23vh, 178px)',
      height: 'clamp(118px, 23vh, 178px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      perspective: '520px',
    }}>
      <div
        className={isCorrect ? 'anim-correctPop' : isIdle ? 'anim-float3d' : ''}
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {ShapeSVG && <ShapeSVG />}
      </div>
    </div>
  );
}
