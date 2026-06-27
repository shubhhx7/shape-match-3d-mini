/* Answer option cards — each card shows the shape-house PNG asset */

// ─── Asset map ────────────────────────────────────────────────────────────────
const shapeAssetMap = {
  cube:     '/cube.png',
  cuboid:   '/cuboid.png',
  sphere:   '/sphere.png',
  cone:     '/cone.png',
  cylinder: '/cylinder.png',
};

// ─── Card component ───────────────────────────────────────────────────────────

export default function ShapeHome({ shape, onSelect, feedbackState, shakeKey, disabled }) {
  const assetSrc = shapeAssetMap[shape.id];

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
        {/* Shape house image */}
        <div style={{
          width: '100%',
          maxHeight: 'clamp(62px, 10vh, 94px)',
          flex: '1 1 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: disabled && !isWrong && !isCorrect ? 0.5 : 1,
          transition: 'opacity 0.2s',
          overflow: 'hidden',
          minHeight: 0,
        }}>
          {assetSrc ? (
            <img
              src={assetSrc}
              alt={`${shape.name} home`}
              draggable={false}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center center',
                display: 'block',
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            />
          ) : (
            <span style={{ fontSize: '2rem', opacity: 0.6 }}>🏠</span>
          )}
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
