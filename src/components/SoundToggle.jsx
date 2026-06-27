export default function SoundToggle({ enabled, onToggle }) {
  return (
    <button
      aria-label={enabled ? 'Mute sound' : 'Enable sound'}
      onClick={onToggle}
      style={{
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        border: '3px solid rgba(255,255,255,0.6)',
        background: 'rgba(255,255,255,0.25)',
        backdropFilter: 'blur(8px)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        transition: 'transform 0.15s',
        flexShrink: 0,
      }}
      onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.9)'; }}
      onMouseUp={e => { e.currentTarget.style.transform = 'scale(1)'; }}
      onTouchStart={e => { e.currentTarget.style.transform = 'scale(0.9)'; }}
      onTouchEnd={e => { e.currentTarget.style.transform = 'scale(1)'; }}
    >
      {enabled ? '🔊' : '🔇'}
    </button>
  );
}
