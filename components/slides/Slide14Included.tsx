'use client';

const features = [
  { label: 'Auto-tagging', icon: '🏷️', desc: 'BPM, key, mood, genre, instrumentation' },
  { label: 'Smart search', icon: '🔍', desc: 'Natural language + filter combos' },
  { label: 'Playlist manager', icon: '📋', desc: 'Build, reorder, export playlists' },
  { label: 'Share links', icon: '🔗', desc: 'Branded, expiring, revokable links' },
  { label: 'Download control', icon: '⬇️', desc: 'Per-link download permission' },
  { label: 'Multi-user', icon: '👥', desc: 'Team roles and access control' },
  { label: 'Mobile', icon: '📱', desc: 'Spotify-style iOS + Android' },
  { label: 'Lyrics', icon: '🎤', desc: 'Whisper transcription, 99 languages' },
  { label: 'Self-hosted infra', icon: '🖥️', desc: 'Your hardware, your data, always' },
];

export default function Slide14Included() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '44px 72px 64px',
    }}>
      <div style={{ maxWidth: 960, width: '100%' }}>
        {/* Label */}
        <div style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.22em',
          color: '#1A56A0',
          textTransform: 'uppercase',
          marginBottom: 12,
          animation: 'float-up 0.4s ease forwards',
        }}>
          What&apos;s Included
        </div>

        <h2 style={{
          fontSize: 'clamp(24px, 3.2vw, 42px)',
          fontWeight: 700,
          letterSpacing: '-0.025em',
          color: '#0D1117',
          marginBottom: 6,
          animation: 'float-up 0.4s ease 0.05s forwards',
          opacity: 0,
        }}>
          Everything that comes with it.
        </h2>
        <p style={{
          fontSize: 14,
          color: '#9CA3AF',
          marginBottom: 28,
          animation: 'float-up 0.4s ease 0.08s forwards',
          opacity: 0,
        }}>
          Included in the build — and what can be added after launch.
        </p>

        {/* 9-item grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 12,
          marginBottom: 20,
        }}>
          {features.map((f, i) => (
            <div key={i} style={{
              background: '#F9FAFB',
              border: '1px solid #F0F0EC',
              borderRadius: 10,
              padding: '16px 18px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 12,
              animation: `float-up 0.35s ease ${0.1 + i * 0.05}s forwards`,
              opacity: 0,
            }}>
              <span style={{ fontSize: 20 }}>{f.icon}</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#0D1117', marginBottom: 2 }}>{f.label}</div>
                <div style={{ fontSize: 11, color: '#9CA3AF', lineHeight: 1.5 }}>{f.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          background: 'rgba(26,86,160,0.04)',
          border: '1px solid rgba(26,86,160,0.12)',
          borderRadius: 10,
          padding: '12px 20px',
          fontSize: 12,
          color: '#6B7280',
          lineHeight: 1.6,
          animation: 'float-up 0.4s ease 0.65s forwards',
          opacity: 0,
        }}>
          <span style={{ fontWeight: 700, color: '#1A56A0' }}>Future add-ons: </span>
          Similar track search · Synced lyrics · Download watermarking · Smart auto-playlists · Analytics · Rights &amp; licensing module
        </div>
      </div>
    </div>
  );
}
