import { useState, useEffect } from 'react';
import SoundToggle from './SoundToggle';

/*
  Home screen uses /1.png (1774 × 887 px, aspect ≈ 2.0 : 1).

  object-fit: COVER fills the viewport edge-to-edge on every screen size —
  no letterbox bars, no gaps. The image is clipped on the overflow sides but
  because the "Tap to Start" pill and title are horizontally centred they stay
  visible on any aspect ratio.

  The invisible hotspot uses COVER geometry (mirror of CSS cover math) so it
  always tracks the exact rendered position of the blue pill.
*/

// ─── Image constants ──────────────────────────────────────────────────────────
const IMG_W      = 1774;
const IMG_H      = 887;
const IMG_ASPECT = IMG_W / IMG_H;   // ≈ 2.0

// ─── "Tap to Start" pill inside the native image (fractions 0–1) ──────────────
// cx / cy = centre of the pill.
// w / h are intentionally larger than the pill so every edge + corner is hit.
//
// Measured in the 1774 × 887 native image:
//   pill x: ~540 → ~1230  (width ≈ 690 px = 38.9 % of 1774)
//   pill y: ~720 → ~840   (height ≈ 120 px = 13.5 % of 887, centre ≈ 88 %)
// We add ~15 % extra on each axis so corners are always inside the hotspot.
const BTN = {
  cx: 0.500,   // horizontal centre (pill is centred)
  cy: 0.825,   // vertical centre   (≈ 82.5 % from top — shifted 1 cm up)
  w:  0.440,   // width  — 44 % covers the ~39 % pill with generous margin
  h:  0.160,   // height — 16 % covers the ~13.5 % pill + rounded-corner margin
};

// ─── Cover geometry helper ────────────────────────────────────────────────────
// Mirrors exactly what CSS `object-fit: cover` does so the hotspot
// follows the rendered pill regardless of viewport size / orientation.
function computeHotspot() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  let imgW, imgH, imgX, imgY;

  if (vw / vh >= IMG_ASPECT) {
    // Viewport wider than image → cover scales by width
    imgW = vw;
    imgH = vw / IMG_ASPECT;
    imgX = 0;
    imgY = (vh - imgH) / 2;        // typically negative → image taller than viewport (clipped T/B)
  } else {
    // Viewport narrower than image → cover scales by height
    imgH = vh;
    imgW = vh * IMG_ASPECT;
    imgX = (vw - imgW) / 2;        // typically negative → image wider than viewport (clipped L/R)
    imgY = 0;
  }

  return {
    left:   imgX + imgW * (BTN.cx - BTN.w / 2),
    top:    imgY + imgH * (BTN.cy - BTN.h / 2),
    width:  imgW * BTN.w,
    height: imgH * BTN.h,
  };
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function HomeScreen({ onStart, soundEnabled, onToggleSound }) {
  const [started, setStarted] = useState(false);
  const [isDown,  setIsDown]  = useState(false);
  const [hotspot, setHotspot] = useState(computeHotspot);

  useEffect(() => {
    const update = () => setHotspot(computeHotspot());
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  function handleStart() {
    if (started) return;
    setStarted(true);
    setTimeout(onStart, 130);
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset:    0,
        overflow: 'hidden',
        background: '#0ea5e9',   /* sky-blue fallback while image loads */
      }}
    >
      {/* ── Full-bleed home image — cover fills edge to edge, no gaps ── */}
      <img
        src="/1.png"
        alt="Shape Match 3D"
        draggable={false}
        style={{
          position:       'absolute',
          inset:          0,
          width:          '100%',
          height:         '100%',
          objectFit:      'cover',          /* edge-to-edge, no letterbox */
          objectPosition: 'center center',
          display:        'block',
          pointerEvents:  'none',
          userSelect:     'none',
        }}
      />

      {/* ── Sound toggle ── */}
      <div
        style={{ position: 'absolute', top: '14px', right: '14px', zIndex: 20 }}
        onClick={e => e.stopPropagation()}
      >
        <SoundToggle enabled={soundEnabled} onToggle={onToggleSound} />
      </div>

      {/*
        ── Invisible hotspot over the blue "Tap to Start" pill ──
        Pixel coords mirror CSS cover geometry so the hotspot is always
        exactly on the pill — left, right, top, bottom edges included.
      */}
      <button
        aria-label="Tap to Start"
        onClick={handleStart}
        onPointerDown={() => setIsDown(true)}
        onPointerUp={()   => { setIsDown(false); handleStart(); }}
        onPointerLeave={()  => setIsDown(false)}
        onPointerCancel={() => setIsDown(false)}
        style={{
          position:     'absolute',
          left:         hotspot.left,
          top:          hotspot.top,
          width:        hotspot.width,
          height:       hotspot.height,
          background:   isDown ? 'rgba(255,255,255,0.18)' : 'transparent',
          border:       'none',
          borderRadius: '999px',
          cursor:       'pointer',
          outline:      'none',
          transform:    isDown ? 'scale(0.96)' : 'scale(1)',
          transition:   'transform 0.1s, background 0.1s',
          zIndex:       10,
          WebkitTapHighlightColor: 'transparent',
          touchAction:  'manipulation',
        }}
      />
    </div>
  );
}
