import { useState } from 'react';

export default function InstructionOverlay({ onStart }) {
  const [pressed, setPressed] = useState(false);

  function handleStart() {
    setPressed(true);
    setTimeout(onStart, 120);
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        /* Use same background as home screen — image + dark overlay for readability */
        background: `
          linear-gradient(160deg, rgba(15,4,55,0.72) 0%, rgba(50,16,90,0.55) 40%, rgba(10,0,45,0.78) 80%),
          url('/2.png') center/cover no-repeat,
          linear-gradient(160deg, #3b0764 0%, #4c1d95 50%, #7c3aed 100%)
        `,
        zIndex: 100,
        padding: 'clamp(16px, 4vw, 28px)',
      }}
    >
      <div
        className="anim-popIn"
        style={{
          /* Glassmorphism card */
          background: 'rgba(255,255,255,0.13)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          borderRadius: '32px',
          padding: 'clamp(22px, 4.5vw, 38px) clamp(22px, 5vw, 42px)',
          maxWidth: '380px',
          width: '100%',
          boxShadow: '0 8px 48px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.25)',
          border: '2px solid rgba(255,255,255,0.28)',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(10px, 2.5vw, 16px)',
        }}
      >
        {/* Emoji icon with glow */}
        <div style={{
          fontSize: 'clamp(2.6rem, 7vw, 3.8rem)',
          filter: 'drop-shadow(0 0 16px rgba(251,191,36,0.8))',
          lineHeight: 1,
        }}>
          🏠
        </div>

        {/* Title */}
        <h2 style={{
          margin: 0,
          fontSize: 'clamp(1.35rem, 5vw, 1.9rem)',
          fontWeight: 900,
          color: 'white',
          lineHeight: 1.2,
          textShadow: '0 2px 14px rgba(0,0,0,0.4)',
        }}>
          How to Play!
        </h2>

        {/* Steps — glassmorphism row style */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
          {[
            { icon: '👀', text: 'Look at the shape in the middle' },
            { icon: '🏠', text: 'Find its matching home below' },
            { icon: '👆', text: 'Tap the right home!' },
          ].map((step, i) => (
            <div
              key={i}
              className="anim-fadeInUp"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: 'rgba(255,255,255,0.15)',
                borderRadius: '16px',
                padding: 'clamp(8px, 2vw, 12px) clamp(12px, 3vw, 16px)',
                border: '1.5px solid rgba(255,255,255,0.28)',
                animationDelay: `${i * 0.12}s`,
                opacity: 0,
              }}
            >
              <span style={{ fontSize: 'clamp(1.2rem, 4vw, 1.6rem)', flexShrink: 0 }}>{step.icon}</span>
              <span style={{
                fontWeight: 800,
                fontSize: 'clamp(0.82rem, 2.4vw, 0.98rem)',
                color: 'rgba(255,255,255,0.95)',
                textAlign: 'left',
                textShadow: '0 1px 6px rgba(0,0,0,0.3)',
              }}>
                {step.text}
              </span>
            </div>
          ))}
        </div>

        {/* 5 rounds badge */}
        <div style={{
          background: 'linear-gradient(135deg, #fbbf24, #f97316)',
          borderRadius: '50px',
          padding: 'clamp(6px, 1.5vw, 10px) clamp(16px, 4vw, 24px)',
          color: 'white',
          fontWeight: 900,
          fontSize: 'clamp(0.78rem, 2.3vw, 0.92rem)',
          boxShadow: '0 4px 16px rgba(251,191,36,0.45)',
          textShadow: '0 1px 5px rgba(0,0,0,0.2)',
        }}>
          ⭐ 5 rounds — can you get them all?
        </div>

        {/* Let's Play button */}
        <button
          aria-label="Start playing"
          onClick={handleStart}
          style={{
            width: '100%',
            padding: 'clamp(13px, 3vw, 17px) clamp(24px, 6vw, 40px)',
            fontSize: 'clamp(1.05rem, 3.2vw, 1.35rem)',
            fontWeight: 900,
            color: 'white',
            background: pressed
              ? 'linear-gradient(135deg, #7c3aed, #db2777)'
              : 'linear-gradient(135deg, #8b5cf6, #ec4899)',
            border: '2.5px solid rgba(255,255,255,0.55)',
            borderRadius: '50px',
            cursor: 'pointer',
            transform: pressed ? 'scale(0.94)' : 'scale(1)',
            transition: 'transform 0.12s, background 0.12s',
            boxShadow: '0 8px 28px rgba(139,92,246,0.5), 0 2px 8px rgba(0,0,0,0.2)',
            textShadow: '0 2px 6px rgba(0,0,0,0.22)',
          }}
        >
          🎮 Let&apos;s Play!
        </button>
      </div>
    </div>
  );
}
