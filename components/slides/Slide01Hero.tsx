'use client';

export default function Slide01Hero() {
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
      {/* Subtle background grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(26,86,160,0.06) 1px, transparent 0)',
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
      }} />

      {/* Center content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        animation: 'float-up 0.6s ease forwards',
      }}>
        {/* Main title */}
        <h1 style={{
          fontSize: 'clamp(56px, 8vw, 108px)',
          fontWeight: 800,
          letterSpacing: '-0.04em',
          lineHeight: 1,
          marginBottom: 28,
        }}>
          <span style={{ color: '#1A56A0' }}>RS</span>
          <span style={{ color: '#1A56A0' }}>.</span>
          <span style={{ color: '#0D1117' }}>CATALOG</span>
        </h1>

        {/* Tagline */}
        <p style={{
          fontSize: 'clamp(20px, 2.5vw, 32px)',
          fontWeight: 300,
          color: '#374151',
          letterSpacing: '-0.01em',
          marginBottom: 16,
        }}>
          Your music. Instantly found.
        </p>

        {/* Sub */}
        <p style={{
          fontSize: 'clamp(13px, 1.4vw, 17px)',
          color: '#6B7280',
          maxWidth: 560,
          lineHeight: 1.7,
          fontWeight: 400,
          marginBottom: 48,
        }}>
          A self-hosted music catalog and intelligence platform — AI-powered,
          privately hosted, built for music professionals.
        </p>

        {/* Badges */}
        <div style={{
          display: 'flex',
          gap: 12,
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: 16,
        }}>
          {['AI Auto-tagging', 'Natural Language Search', 'Your server. Your data.'].map((badge, i) => (
            <div key={i} style={{
              background: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: 100,
              padding: '8px 18px',
              fontSize: 13,
              fontWeight: 600,
              color: '#374151',
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
              animation: `float-up 0.5s ease ${0.2 + i * 0.1}s forwards`,
              opacity: 0,
            }}>
              {badge}
            </div>
          ))}
        </div>

        {/* Search & Find badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          border: '1px solid rgba(26,86,160,0.5)',
          borderRadius: 100,
          padding: '5px 18px',
          fontSize: 13,
          fontWeight: 600,
          color: '#1A56A0',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          animation: 'float-up 0.5s ease 0.25s forwards',
          opacity: 0,
        }}>
          <span>🔍</span>
          <span>Search &amp; Find</span>
        </div>
      </div>

      {/* Confidential badge */}
      <div style={{
        position: 'absolute',
        bottom: 28,
        right: 40,
        fontSize: 11,
        fontWeight: 600,
        color: '#9CA3AF',
        letterSpacing: '0.08em',
      }}>
        Confidential · April 2026
      </div>
    </div>
  );
}
