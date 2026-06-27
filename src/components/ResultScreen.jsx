import { useMemo, useState } from 'react';
import SoundToggle from './SoundToggle';

function StarBadge({ index, total }) {
  const lit = index < total;
  return (
    <div
      className="anim-resultStar"
      style={{
        animationDelay: `${index * 0.18}s`,
        opacity: 0,
        fontSize: lit ? 'clamp(2.4rem, 8vw, 3.6rem)' : 'clamp(1.8rem, 6vw, 2.6rem)',
        filter: lit
          ? 'drop-shadow(0 2px 10px rgba(255,210,0,0.65))'
          : 'grayscale(1) opacity(0.3)',
        transform: lit ? 'none' : 'scale(0.8)',
        display: 'inline-block',
      }}
    >
      {lit ? '⭐' : '☆'}
    </div>
  );
}

const CONFETTI_COLORS = ['#FF6B6B','#FFE66D','#4ECDC4','#45B7D1','#96CEB4','#DDA0DD','#FF69B4','#FFA500'];
function ResultConfetti({ score }) {
  const pieces = useMemo(() =>
    Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: (i * 37 + 13) % 100,
      delay: (i * 0.05) % 2.5,
      duration: 1.8 + (i % 8) * 0.2,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      size: 8 + (i % 5) * 3,
      isCircle: i % 2 === 0,
    })),
  []);

  if (score < 3) return null;

  return (
    <div aria-hidden="true" style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 1 }}>
      {pieces.map(p => (
        <div
          key={p.id}
          className="anim-confetti"
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: '-20px',
            width: p.size,
            height: p.isCircle ? p.size : p.size * 0.55,
            borderRadius: p.isCircle ? '50%' : '2px',
            background: p.color,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

const MESSAGES = {
  5: { title: 'PERFECT!',    sub: 'You matched all 5 shapes! Amazing!' },
  4: { title: 'SO CLOSE!',   sub: 'You got 4 out of 5 — wow!' },
  3: { title: 'GREAT JOB!',  sub: 'You matched 3 shapes!' },
  2: { title: 'NICE TRY!',   sub: "Let's practice more!" },
  1: { title: 'KEEP GOING!', sub: "You'll get them next time!" },
  0: { title: 'TRY AGAIN!',  sub: 'Practice makes perfect!' },
};

export default function ResultScreen({ score, totalRounds, onPlayAgain, onHome, soundEnabled, onToggleSound }) {
  const [pressedBtn, setPressedBtn] = useState(null);
  const msg   = MESSAGES[Math.max(0, Math.min(5, score))] || MESSAGES[0];
  const stars = Math.round((score / totalRounds) * 3);
  const icon  = score === 5 ? '🏆' : score >= 3 ? '🎉' : '🌈';

  function btnPress(id, fn) {
    setPressedBtn(id);
    setTimeout(fn, 130);
  }

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: 'clamp(16px, 4vw, 32px)',
    }}>

      {/* ── Background: 3.png covers the full viewport ── */}
      <img
        src="/3.png"
        alt=""
        aria-hidden="true"
        draggable={false}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center',
          display: 'block',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />

      {/* Very light overlay — keeps the scene bright & celebratory */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(160deg, rgba(60,10,120,0.22) 0%, rgba(10,40,120,0.14) 55%, rgba(50,5,90,0.26) 100%)',
        pointerEvents: 'none',
      }} />

      <ResultConfetti score={score} />

      {/* Sound toggle */}
      <div style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 10 }}>
        <SoundToggle enabled={soundEnabled} onToggle={onToggleSound} />
      </div>

      {/* ── Result card ─────────────────────────────────────────────── */}
      <div
        className="anim-popIn"
        style={{
          position: 'relative',
          zIndex: 5,
          width: 'min(92vw, 820px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(12px, 2.6vh, 20px)',
          padding: 'clamp(22px, 4vw, 42px) clamp(24px, 5vw, 52px)',
          background: 'rgba(255,255,255,0.13)',
          backdropFilter: 'blur(7px)',
          WebkitBackdropFilter: 'blur(7px)',
          borderRadius: '28px',
          boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
          textAlign: 'center',
        }}
      >
        {/* Trophy / celebration icon */}
        <div style={{
          fontSize: 'clamp(3rem, 10vw, 4.8rem)',
          lineHeight: 1,
          filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))',
        }}>
          {icon}
        </div>

        {/* Title */}
        <h1
          className="anim-fadeInUp"
          style={{
            margin: 0,
            fontSize: 'clamp(1.8rem, 7vw, 3rem)',
            fontWeight: 900,
            color: 'white',
            textShadow: '0 3px 18px rgba(0,0,0,0.55)',
            lineHeight: 1.1,
            letterSpacing: '1px',
          }}
        >
          {msg.title}
        </h1>

        {/* Subtitle */}
        <p style={{
          margin: 0,
          fontSize: 'clamp(0.88rem, 2.8vw, 1.15rem)',
          fontWeight: 700,
          color: 'rgba(255,255,255,0.93)',
          textShadow: '0 2px 10px rgba(0,0,0,0.45)',
          lineHeight: 1.4,
        }}>
          {msg.sub}
        </p>

        {/* Stars */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(8px, 3vw, 18px)' }}>
          {[0, 1, 2].map(i => <StarBadge key={i} index={i} total={stars} />)}
        </div>

        {/* Score pill */}
        <div style={{
          background: 'rgba(255,255,255,0.14)',
          borderRadius: '50px',
          padding: 'clamp(8px, 1.8vw, 13px) clamp(20px, 4vw, 34px)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <span style={{
            fontSize: 'clamp(1.2rem, 4.5vw, 1.8rem)',
            fontWeight: 900,
            color: '#fde68a',
            textShadow: '0 2px 10px rgba(0,0,0,0.45)',
          }}>
            {score}
          </span>
          <span style={{
            fontSize: 'clamp(0.88rem, 2.6vw, 1.1rem)',
            fontWeight: 800,
            color: 'rgba(255,255,255,0.9)',
            textShadow: '0 2px 8px rgba(0,0,0,0.35)',
          }}>
            / {totalRounds} matched
          </span>
        </div>

        {/* Buttons */}
        <div style={{
          display: 'flex',
          gap: 'clamp(10px, 3vw, 18px)',
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: '100%',
        }}>
          <button
            aria-label="Play again"
            onClick={() => btnPress('again', onPlayAgain)}
            style={{
              flex: '1 1 140px',
              maxWidth: '260px',
              padding: 'clamp(12px, 2.8vw, 18px) clamp(20px, 4vw, 36px)',
              fontSize: 'clamp(0.95rem, 3vw, 1.15rem)',
              fontWeight: 900,
              color: 'white',
              background: pressedBtn === 'again'
                ? 'linear-gradient(135deg, #6d28d9, #be185d)'
                : 'linear-gradient(135deg, #8b5cf6, #ec4899)',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              transform: pressedBtn === 'again' ? 'scale(0.93)' : 'scale(1)',
              transition: 'transform 0.12s, background 0.12s',
              boxShadow: '0 8px 26px rgba(139,92,246,0.5)',
              textShadow: '0 2px 6px rgba(0,0,0,0.2)',
              whiteSpace: 'nowrap',
              WebkitTapHighlightColor: 'transparent',
              touchAction: 'manipulation',
            }}
            onPointerDown={e => { e.currentTarget.style.transform = 'scale(0.93)'; }}
            onPointerUp={e =>   { e.currentTarget.style.transform = 'scale(1)'; }}
            onPointerLeave={e =>{ e.currentTarget.style.transform = 'scale(1)'; }}
          >
            Play Again
          </button>

          <button
            aria-label="Go to home screen"
            onClick={() => btnPress('home', onHome)}
            style={{
              flex: '1 1 110px',
              maxWidth: '200px',
              padding: 'clamp(12px, 2.8vw, 18px) clamp(20px, 4vw, 36px)',
              fontSize: 'clamp(0.95rem, 3vw, 1.15rem)',
              fontWeight: 900,
              color: 'white',
              background: pressedBtn === 'home'
                ? 'rgba(255,255,255,0.26)'
                : 'rgba(255,255,255,0.16)',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              transform: pressedBtn === 'home' ? 'scale(0.93)' : 'scale(1)',
              transition: 'transform 0.12s, background 0.12s',
              boxShadow: '0 6px 18px rgba(0,0,0,0.18)',
              textShadow: '0 2px 8px rgba(0,0,0,0.35)',
              whiteSpace: 'nowrap',
              WebkitTapHighlightColor: 'transparent',
              touchAction: 'manipulation',
            }}
            onPointerDown={e => { e.currentTarget.style.transform = 'scale(0.93)'; }}
            onPointerUp={e =>   { e.currentTarget.style.transform = 'scale(1)'; }}
            onPointerLeave={e =>{ e.currentTarget.style.transform = 'scale(1)'; }}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
