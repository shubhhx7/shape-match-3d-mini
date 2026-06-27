import { useMemo } from 'react';

const COLORS = ['#FF6B6B', '#FFE66D', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98FB98', '#FF69B4', '#FFA500'];

export default function Confetti({ active }) {
  const pieces = useMemo(() =>
    Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: (i * 37 + 13) % 100,
      delay: (i * 0.07) % 1.8,
      duration: 1.4 + (i % 6) * 0.25,
      color: COLORS[i % COLORS.length],
      size: 7 + (i % 5) * 3,
      shape: i % 3 === 0 ? 'circle' : i % 3 === 1 ? 'rect' : 'star',
    })),
  []);

  if (!active) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 50,
      }}
    >
      {pieces.map(p => (
        <div
          key={p.id}
          className="anim-confetti"
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: '-20px',
            width: p.shape === 'circle' ? p.size : p.size,
            height: p.shape === 'circle' ? p.size : p.shape === 'rect' ? p.size * 0.5 : p.size,
            borderRadius: p.shape === 'circle' ? '50%' : p.shape === 'rect' ? '2px' : '0',
            background: p.shape === 'star' ? 'none' : p.color,
            fontSize: p.shape === 'star' ? p.size + 'px' : undefined,
            color: p.color,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.shape === 'star' ? '★' : null}
        </div>
      ))}
    </div>
  );
}
