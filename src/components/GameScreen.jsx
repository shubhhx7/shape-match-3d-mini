import { useState, useEffect, useCallback, useRef } from 'react';
import ShapeCharacter from './ShapeCharacter';
import ShapeHome from './ShapeHome';
import RoundCounter from './RoundCounter';
import Confetti from './Confetti';
import SoundToggle from './SoundToggle';

/* Per-shape colour tint layered over the 3.png gameplay background */
const SHAPE_TINTS = {
  cube:     'rgba(20,48,160,0.42)',
  cuboid:   'rgba(109,40,217,0.42)',
  sphere:   'rgba(145,18,18,0.42)',
  cone:     'rgba(148,80,4,0.42)',
  cylinder: 'rgba(4,90,52,0.42)',
};

export default function GameScreen({
  round, roundNumber, totalRounds, score,
  soundEnabled, onToggleSound,
  onCorrect, onWrong, onNextRound,
}) {
  const [selectedId, setSelectedId] = useState(null);
  const [feedbackState, setFeedbackState] = useState(null); // null | 'correct' | 'wrong'
  const [shapeAnim, setShapeAnim] = useState('idle');
  const [showConfetti, setShowConfetti] = useState(false);
  const [shakeKey, setShakeKey] = useState(0);
  const [hint, setHint] = useState('');
  const [isLocked, setIsLocked] = useState(false);
  const timerRef = useRef(null);

  /* Reset state when round changes */
  useEffect(() => {
    setSelectedId(null);
    setFeedbackState(null);
    setShapeAnim('idle');
    setShowConfetti(false);
    setHint('');
    setIsLocked(false);
    if (timerRef.current) clearTimeout(timerRef.current);
  }, [round]);

  /* Cleanup on unmount */
  useEffect(() => {
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  const handleSelect = useCallback((shape) => {
    if (isLocked) return;
    setIsLocked(true);
    setSelectedId(shape.id);

    if (shape.id === round.target.id) {
      /* Correct! */
      setFeedbackState('correct');
      setShapeAnim('correct');
      setShowConfetti(true);
      onCorrect();
      timerRef.current = setTimeout(() => {
        setShowConfetti(false);
        onNextRound();
      }, 1600);
    } else {
      /* Wrong */
      setFeedbackState('wrong');
      setShakeKey(k => k + 1);
      setHint(round.target.hint);
      onWrong();
      timerRef.current = setTimeout(() => {
        setSelectedId(null);
        setFeedbackState(null);
        setHint('');
        setIsLocked(false);
      }, 1100);
    }
  }, [isLocked, round, onCorrect, onWrong, onNextRound]);

  /* Keyboard: 1/2/3 keys select options */
  useEffect(() => {
    function onKey(e) {
      if (['1','2','3'].includes(e.key)) {
        const idx = parseInt(e.key) - 1;
        if (round.options[idx]) handleSelect(round.options[idx]);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [round, handleSelect]);

  const tint = SHAPE_TINTS[round.target.id] || SHAPE_TINTS.sphere;
  const isCorrect = feedbackState === 'correct';

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        /* 3.png game world + per-shape colour tint + pure-gradient fallback */
        background: `
          linear-gradient(${tint}, ${tint}),
          url('/3.png') center/cover no-repeat,
          linear-gradient(160deg, #1e3a8a 0%, #3b82f6 50%, #93c5fd 100%)
        `,
        overflow: 'hidden',
      }}
    >
      <Confetti active={showConfetti} />

      {/* Top bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'clamp(10px, 2.5vw, 16px) clamp(14px, 3vw, 20px)',
        flexShrink: 0,
        background: 'rgba(0,0,0,0.18)',
        backdropFilter: 'blur(6px)',
      }}>
        <RoundCounter current={roundNumber} total={totalRounds} score={score} />
        <SoundToggle enabled={soundEnabled} onToggle={onToggleSound} />
      </div>

      {/* Instruction card */}
      <div style={{
        margin: 'clamp(6px, 1.5vw, 12px) clamp(14px, 4vw, 20px) 0',
        padding: 'clamp(9px, 2.2vw, 13px) clamp(16px, 4vw, 24px)',
        background: 'rgba(255,255,255,0.22)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderRadius: '22px',
        border: '2.5px solid rgba(255,255,255,0.5)',
        textAlign: 'center',
        flexShrink: 0,
        boxShadow: '0 4px 18px rgba(0,0,0,0.18)',
      }}>
        <p style={{
          margin: 0,
          fontSize: 'clamp(0.95rem, 3vw, 1.22rem)',
          fontWeight: 900,
          color: 'white',
          textShadow: '0 2px 8px rgba(0,0,0,0.35)',
          lineHeight: 1.35,
        }}>
          🏠 {round.question}
        </p>
      </div>

      {/* Shape character area — flex:1 absorbs remaining space; min-height:0 prevents overflow */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'clamp(6px, 1.5vh, 12px)',
        minHeight: 0,
        padding: '0 12px',
        overflow: 'hidden',
      }}>
        <ShapeCharacter shape={round.target} animState={shapeAnim} />

        {/* Shape name label */}
        <div style={{
          padding: '6px 20px',
          background: 'rgba(255,255,255,0.25)',
          borderRadius: '50px',
          border: '2px solid rgba(255,255,255,0.5)',
        }}>
          <span style={{
            fontWeight: 900,
            fontSize: 'clamp(0.85rem, 2.8vw, 1.1rem)',
            color: 'white',
            textShadow: '0 2px 6px rgba(0,0,0,0.3)',
          }}>
            {round.target.name}
          </span>
        </div>
      </div>

      {/* Feedback area */}
      <div style={{
        height: 'clamp(42px, 8vh, 56px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 20px',
        flexShrink: 0,
      }}>
        {isCorrect && (
          <div
            className="anim-slideDown"
            style={{
              background: 'linear-gradient(135deg, #22c55e, #16a34a)',
              padding: '8px 24px',
              borderRadius: '50px',
              border: '3px solid rgba(255,255,255,0.6)',
              boxShadow: '0 4px 16px rgba(34,197,94,0.45)',
            }}
          >
            <span style={{ fontSize: 'clamp(0.9rem, 2.8vw, 1.1rem)', fontWeight: 900, color: 'white' }}>
              🎉 Great job! ⭐
            </span>
          </div>
        )}
        {feedbackState === 'wrong' && hint && (
          <div
            className="anim-slideDown"
            style={{
              background: 'rgba(255,255,255,0.9)',
              padding: '8px 18px',
              borderRadius: '50px',
              border: '3px solid #f87171',
              boxShadow: '0 4px 14px rgba(248,113,113,0.35)',
              maxWidth: '320px',
            }}
          >
            <span style={{ fontSize: 'clamp(0.75rem, 2.3vw, 0.9rem)', fontWeight: 800, color: '#b91c1c' }}>
              💡 {hint}
            </span>
          </div>
        )}
      </div>

      {/* Shape answer cards row — bigger, clearer for kids */}
      <div style={{
        display: 'flex',
        gap: 'clamp(7px, 2.2vw, 14px)',
        padding: 'clamp(6px, 1.5vw, 10px) clamp(10px, 2.5vw, 18px)',
        paddingBottom: 'max(clamp(10px, 2.5vw, 16px), env(safe-area-inset-bottom, 10px))',
        flexShrink: 0,
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        {round.options.map((option) => {
          const isSelected = selectedId === option.id;
          const fb = isSelected ? feedbackState : null;
          return (
            <ShapeHome
              key={option.id}
              shape={option}
              onSelect={() => handleSelect(option)}
              feedbackState={fb}
              shakeKey={fb === 'wrong' ? shakeKey : 0}
              disabled={isLocked && !isSelected}
            />
          );
        })}
      </div>
    </div>
  );
}
