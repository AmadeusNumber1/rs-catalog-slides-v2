'use client';

const specs = [
  { label: 'CPU', value: '32-core', unit: 'Apple M3 Ultra' },
  { label: 'Memory', value: '192 GB', unit: 'Unified Memory' },
  { label: 'Storage', value: '8 TB', unit: 'NVMe SSD' },
  { label: 'GPU', value: '80-core', unit: 'GPU' },
  { label: 'Neural Engine', value: '32-core', unit: 'Neural Engine' },
];

export default function Slide11Hardware() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: '#F7F6F3',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '52px 80px',
    }}>
      <div style={{ maxWidth: 860, width: '100%', textAlign: 'center' }}>
        {/* Label */}
        <div style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.22em',
          color: '#1A56A0',
          textTransform: 'uppercase',
          marginBottom: 14,
          animation: 'float-up 0.4s ease forwards',
        }}>
          Hardware
        </div>

        <h2 style={{
          fontSize: 'clamp(28px, 3.8vw, 50px)',
          fontWeight: 700,
          letterSpacing: '-0.025em',
          color: '#0D1117',
          marginBottom: 12,
          animation: 'float-up 0.4s ease 0.05s forwards',
          opacity: 0,
        }}>
          Built on Apple Silicon.
        </h2>

        <p style={{
          fontSize: 'clamp(14px, 1.5vw, 18px)',
          color: '#6B7280',
          marginBottom: 36,
          fontWeight: 400,
          animation: 'float-up 0.4s ease 0.1s forwards',
          opacity: 0,
        }}>
          Mac Studio M3 Ultra — the most powerful desktop we&apos;ve ever built.
        </p>

        {/* Specs grid — 5 cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 16,
          marginBottom: 36,
        }}>
          {specs.map((spec, i) => (
            <div key={i} style={{
              background: '#FFFFFF',
              border: '1px solid #E9EAEC',
              borderRadius: 14,
              padding: '24px 20px',
              textAlign: 'center',
              animation: `float-up 0.4s ease ${0.15 + i * 0.07}s forwards`,
              opacity: 0,
            }}>
              <div style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.18em',
                color: '#9CA3AF',
                textTransform: 'uppercase',
                marginBottom: 8,
              }}>
                {spec.label}
              </div>
              <div style={{
                fontSize: 26,
                fontWeight: 800,
                color: '#1A56A0',
                letterSpacing: '-0.02em',
                marginBottom: 4,
              }}>
                {spec.value}
              </div>
              <div style={{ fontSize: 12, color: '#6B7280', fontWeight: 500 }}>{spec.unit}</div>
            </div>
          ))}
        </div>

        {/* Copy */}
        <p style={{
          fontSize: 15,
          color: '#6B7280',
          lineHeight: 1.7,
          maxWidth: 600,
          margin: '0 auto',
          animation: 'float-up 0.4s ease 0.55s forwards',
          opacity: 0,
        }}>
          One machine. Local AI, waveform storage, streaming server, and VPN endpoint
          — all running silently in your office.
        </p>
      </div>
    </div>
  );
}
