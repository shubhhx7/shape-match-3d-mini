import { useMemo, useState } from 'react';
import Confetti from './Confetti';
import SoundToggle from './SoundToggle';

const STARS = ['⭐', '⭐', '⭐'];

function StarBadge({ index, total }) {
  const lit = index < total;
  return (
    <div
      className="anim-resultStar"
      style={{
        animationDelay: `${index * 0.18}s`,
        opacity: 0,
        fontSize: lit ? 'clamp(2.5rem, 9vw, 4rem)' : 'clamp(1.8rem, 6vw, 2.8rem)',
        filter: lit ? 'none' : 'grayscale(1) opacity(0.35)',
        transform: lit ? 'none' : 'scale(0.8)',
        display: 'inline-block',
      }}
    >
      {lit ? '⭐' : '☆'}
    </div>
  );
}

/* Stable confetti pieces */
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
  5: { title: 'PERFECT! 🏆', sub: 'You matched all 5 shapes! Amazing!' },
  4: { title: 'SO CLOSE! 🌟', sub: 'You got 4 out of 5 — wow!' },
  3: { title: 'GREAT JOB! 🎉', sub: 'You matched 3 shapes!' },
  2: { title: 'NICE TRY! 💪', sub: 'Let\'s practice more!' },
  1: { title: 'KEEP GOING! 🌈', sub: 'You\'ll get them next time!' },
  0: { title: 'LET\'S TRY AGAIN! 🚀', sub: 'Practice makes perfect!' },
};

export default function ResultScreen({ score, totalRounds, onPlayAgain, onHome, soundEnabled, onToggleSound }) {
  const [pressedBtn, setPressedBtn] = useState(null);
  const msg = MESSAGES[Math.max(0, Math.min(5, score))] || MESSAGES[0];

  const stars = Math.round((score / totalRounds) * 3);

  function btnPress(id, fn) {
    setPressedBtn(id);
    setTimeout(fn, 130);
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: `
          linear-gradient(160deg, rgba(20,5,65,0.55) 0%, rgba(60,20,110,0.35) 40%, rgba(15,0,55,0.75) 80%, rgba(5,0,35,0.9) 100%),
          url('/2.png') center/cover no-repeat,
          linear-gradient(160deg, #4f46e5 0%, #7c3aed 30%, #db2777 70%, #f59e0b 100%)
        `,
        padding: '20px',
      }}
    >
      <ResultConfetti score={score} />

      {/* Sound toggle */}
      <div style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 10 }}>
        <SoundToggle enabled={soundEnabled} onToggle={onToggleSound} />
      </div>

      {/* Main card */}
      <div
        className="anim-popIn"
        style={{
          position: 'relative',
          zIndex: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(14px, 3.5vw, 22px)',
          padding: 'clamp(24px, 5vw, 44px) clamp(24px, 6vw, 52px)',
          background: 'rgba(255,255,255,0.2)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '32px',
          border: '3px solid rgba(255,255,255,0.45)',
          boxShadow: '0 24px 64px rgba(0,0,0,0.35)',
          maxWidth: '420px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        {/* Trophy / celebration emoji */}
        <div style={{
          fontSize: 'clamp(3.5rem, 12vw, 5.5rem)',
          lineHeight: 1,
          filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.3))',
        }}>
          {score === 5 ? '🏆' : score >= 3 ? '🎉' : '🌈'}
        </div>

        {/* Title */}
        <h1
          className="anim-fadeInUp"
          style={{
            margin: 0,
            fontSize: 'clamp(1.6rem, 7vw, 2.6rem)',
            fontWeight: 900,
            color: 'white',
            textShadow: '0 4px 16px rgba(0,0,0,0.3)',
            lineHeight: 1.15,
          }}
        >
          {msg.title}
        </h1>

        {/* Subtitle */}
        <p style={{
          margin: 0,
          fontSize: 'clamp(0.95rem, 3vw, 1.2rem)',
          fontWeight: 800,
          color: 'rgba(255,255,255,0.95)',
          textShadow: '0 2px 8px rgba(0,0,0,0.25)',
        }}>
          {msg.sub}
        </p>

        {/* Stars */}
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
          {[0, 1, 2].map(i => (
            <StarBadge key={i} index={i} total={stars} />
          ))}
        </div>

        {/* Score badge */}
        <div style={{
          background: 'rgba(255,255,255,0.28)',
          border: '3px solid rgba(255,255,255,0.55)',
          borderRadius: '50px',
          padding: '10px 28px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <span style={{
            fontSize: 'clamp(1.2rem, 4.5vw, 1.8rem)',
            fontWeight: 900,
            color: '#fde68a',
            textShadow: '0 2px 8px rgba(0,0,0,0.3)',
          }}>
            {score}
          </span>
          <span style={{
            fontSize: 'clamp(0.9rem, 3vw, 1.2rem)',
            fontWeight: 800,
            color: 'white',
            textShadow: '0 2px 6px rgba(0,0,0,0.25)',
          }}>
            / {totalRounds} matched
          </span>
        </div>

        {/* Buttons */}
        <div style={{
          display: 'flex',
          gap: 'clamp(10px, 3vw, 16px)',
          width: '100%',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          <button
            aria-label="Play again"
            onClick={() => btnPress('again', onPlayAgain)}
            style={{
              flex: '1 1 140px',
              padding: 'clamp(12px, 3vw, 18px) 20px',
              fontSize: 'clamp(1rem, 3.2vw, 1.25rem)',
              fontWeight: 900,
              color: 'white',
              background: pressedBtn === 'again'
                ? 'linear-gradient(135deg, #7c3aed, #db2777)'
                : 'linear-gradient(135deg, #8b5cf6, #ec4899)',
              border: '3px solid rgba(255,255,255,0.55)',
              borderRadius: '50px',
              cursor: 'pointer',
              transform: pressedBtn === 'again' ? 'scale(0.93)' : 'scale(1)',
              transition: 'transform 0.12s, background 0.12s',
              boxShadow: '0 8px 24px rgba(139,92,246,0.4)',
              textShadow: '0 2px 6px rgba(0,0,0,0.2)',
            }}
          >
            🔄 Play Again!
          </button>

          <button
            aria-label="Go to home screen"
            onClick={() => btnPress('home', onHome)}
            style={{
              flex: '1 1 120px',
              padding: 'clamp(12px, 3vw, 18px) 20px',
              fontSize: 'clamp(1rem, 3.2vw, 1.25rem)',
              fontWeight: 900,
              color: 'white',
              background: pressedBtn === 'home'
                ? 'rgba(255,255,255,0.3)'
                : 'rgba(255,255,255,0.2)',
              border: '3px solid rgba(255,255,255,0.55)',
              borderRadius: '50px',
              cursor: 'pointer',
              transform: pressedBtn === 'home' ? 'scale(0.93)' : 'scale(1)',
              transition: 'transform 0.12s, background 0.12s',
              boxShadow: '0 6px 18px rgba(0,0,0,0.2)',
              textShadow: '0 2px 6px rgba(0,0,0,0.2)',
            }}
          >
            🏠 Home
          </button>
        </div>
      </div>
    </div>
  );
}
