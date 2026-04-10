'use client';

const lines = [
  'Your music. Your server. Your catalog.',
  'Every track tagged, searchable, and found in seconds.',
  'All audio stays on hardware you own — no cloud, no fees.',
  'Share with clients in one click. Control who downloads what.',
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
        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: 'rgba(26,86,160,0.07)',
          border: '1px solid rgba(26,86,160,0.15)',
          borderRadius: 100,
          padding: '6px 16px',
          marginBottom: 36,
          animation: 'float-up 0.5s ease forwards',
        }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#1A56A0' }} />
          <span style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.25em',
            color: '#1A56A0',
            textTransform: 'uppercase',
          }}>RS · CATALOG</span>
        </div>

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
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 12 }}>
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
      </div>

      {/* Animated waveform */}
      <div style={{
        position: 'absolute',
        bottom: 40,
        left: 0,
        right: 0,
        height: 60,
        overflow: 'hidden',
        opacity: 0.35,
      }}>
        <svg
          viewBox="0 0 2400 60"
          style={{
            width: '200%',
            height: '100%',
            animation: 'wave 8s linear infinite',
          }}
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C50,5 100,55 150,30 C200,5 250,55 300,30 C350,5 400,55 450,30 C500,5 550,55 600,30 C650,5 700,55 750,30 C800,5 850,55 900,30 C950,5 1000,55 1050,30 C1100,5 1150,55 1200,30 C1250,5 1300,55 1350,30 C1400,5 1450,55 1500,30 C1550,5 1600,55 1650,30 C1700,5 1750,55 1800,30 C1850,5 1900,55 1950,30 C2000,5 2050,55 2100,30 C2150,5 2200,55 2250,30 C2300,5 2350,55 2400,30"
            stroke="#1A56A0"
            strokeWidth="2"
            fill="none"
          />
        </svg>
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
