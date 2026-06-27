export default function RoundCounter({ current, total, score }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      {/* Round dots */}
      <div style={{ display: 'flex', gap: '6px' }}>
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            style={{
              width: i < current ? '14px' : '10px',
              height: i < current ? '14px' : '10px',
              borderRadius: '50%',
              background: i < current
                ? '#fbbf24'
                : i === current - 1
                ? '#fbbf24'
                : 'rgba(255,255,255,0.35)',
              border: '2px solid rgba(255,255,255,0.6)',
              transition: 'all 0.3s',
              boxShadow: i < current ? '0 0 8px rgba(251,191,36,0.8)' : 'none',
            }}
          />
        ))}
      </div>
      {/* Round label */}
      <span style={{
        color: 'white',
        fontWeight: 800,
        fontSize: 'clamp(0.75rem, 2.5vw, 0.95rem)',
        textShadow: '0 2px 6px rgba(0,0,0,0.3)',
        whiteSpace: 'nowrap',
      }}>
        {current}/{total}
      </span>
      {/* Stars score */}
      <span style={{
        marginLeft: '4px',
        color: '#fbbf24',
        fontWeight: 900,
        fontSize: 'clamp(0.8rem, 2.5vw, 1rem)',
        textShadow: '0 2px 6px rgba(0,0,0,0.3)',
      }}>
        {'⭐'.repeat(score)}
      </span>
    </div>
  );
}
