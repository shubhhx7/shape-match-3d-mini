import { useRef } from 'react';

export function useSound(enabled) {
  const ctxRef = useRef(null);

  const getCtx = () => {
    if (!ctxRef.current) {
      try {
        ctxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      } catch {
        return null;
      }
    }
    if (ctxRef.current.state === 'suspended') {
      ctxRef.current.resume();
    }
    return ctxRef.current;
  };

  const tone = (freq, duration, delay = 0, vol = 0.25, type = 'sine') => {
    if (!enabled) return;
    const ctx = getCtx();
    if (!ctx) return;
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = type;
      osc.frequency.value = freq;
      const t = ctx.currentTime + delay;
      gain.gain.setValueAtTime(vol, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + duration);
      osc.start(t);
      osc.stop(t + duration + 0.01);
    } catch { /* silent fail */ }
  };

  const playCorrect = () => {
    tone(523.25, 0.25, 0);
    tone(659.25, 0.25, 0.14);
    tone(783.99, 0.35, 0.28);
  };

  const playWrong = () => {
    tone(300, 0.2, 0, 0.18);
    tone(240, 0.25, 0.18, 0.15);
  };

  const playComplete = () => {
    [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((f, i) => {
      tone(f, 0.38, i * 0.13);
    });
  };

  const playClick = () => {
    tone(900, 0.08, 0, 0.12);
  };

  return { playCorrect, playWrong, playComplete, playClick };
}
