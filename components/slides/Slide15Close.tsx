'use client';

const lines = [
  'Your music. Your server. Your catalog.',
  'Every track tagged, searchable, and found in seconds.',
  'All audio stays on hardware you own — no cloud, no fees.',
  'Share with clients in one click. Control who downloads what.',
];

const heroBadges = [
  'AI Auto-tagging',
  'Natural Language Search',
  'Your server. Your data.',
];

export default function Slide15Close() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(26,86,160,0.06) 1px, transparent 0)',
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        maxWidth: 680,
        padding: '0 40px',
      }}>
        {/* Main title */}
        <h1 style={{
          fontSize: 'clamp(56px, 8vw, 96px)',
          fontWeight: 800,
          letterSpacing: '-0.04em',
          lineHeight: 1,
          marginBottom: 40,
          animation: 'float-up 0.5s ease 0.05s forwards',
          opacity: 0,
        }}>
          <span style={{ color: '#1A56A0' }}>RS</span>
          <span style={{ color: '#1A56A0' }}>.</span>
          <span style={{ color: '#0D1117' }}>CATALOG</span>
        </h1>

        {/* Closing lines */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
          {lines.map((line, i) => (
            <p key={i} style={{
              fontSize: 'clamp(13px, 1.4vw, 17px)',
              color: i === 0 ? '#0D1117' : '#6B7280',
              fontWeight: i === 0 ? 600 : 400,
              lineHeight: 1.5,
              animation: `float-up 0.4s ease ${0.15 + i * 0.08}s forwards`,
              opacity: 0,
            }}>
              {line}
            </p>
          ))}
        </div>

        {/* Hero-style feature badges */}
        <div style={{
          display: 'flex',
          gap: 12,
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: 36,
        }}>
          {heroBadges.map((badge, i) => (
            <div key={i} style={{
              background: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: 100,
              padding: '8px 18px',
              fontSize: 13,
              fontWeight: 600,
              color: '#374151',
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
              animation: `float-up 0.5s ease ${0.47 + i * 0.09}s forwards`,
              opacity: 0,
            }}>
              {badge}
            </div>
          ))}
        </div>

        {/* CTA */}
        <p style={{
          fontSize: 'clamp(22px, 3vw, 36px)',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          color: '#1A56A0',
          animation: 'float-up 0.5s ease 0.75s forwards',
          opacity: 0,
        }}>
          Let&apos;s build it.
        </p>
      </div>

      {/* Confidential */}
      <div style={{
        position: 'absolute',
        bottom: 28,
        right: 40,
        fontSize: 11,
        fontWeight: 600,
        color: '#9CA3AF',
        letterSpacing: '0.08em',
        zIndex: 2,
      }}>
        Confidential · April 2026
      </div>
    </div>
  );
}
