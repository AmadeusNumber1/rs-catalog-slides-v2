'use client';

const pillars = [
  {
    title: 'Stored on your hardware',
    detail: 'Audio files live on your drives. No copies ever leave the machine.',
    bg: '#F0F7FF',
    accent: '#1A56A0',
  },
  {
    title: 'No external AI',
    detail: 'All AI models run locally on Mac Studio. Zero API calls to OpenAI, AWS, or anyone.',
    bg: '#F0FDF4',
    accent: '#059669',
  },
  {
    title: 'No public IP address',
    detail: 'Access is via Tailscale encrypted mesh VPN — invisible to the public internet.',
    bg: '#FFF7ED',
    accent: '#D97706',
  },
  {
    title: 'Military-grade encryption',
    detail: 'AES-256 at rest. TLS 1.3 in transit. WireGuard VPN layer end-to-end.',
    bg: '#FDF4FF',
    accent: '#7C3AED',
  },
];

export default function Slide10Security() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '52px 80px 72px',
    }}>
      <div style={{ maxWidth: 900, width: '100%' }}>
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
          Security
        </div>

        <h2 style={{
          fontSize: 'clamp(28px, 3.5vw, 48px)',
          fontWeight: 700,
          letterSpacing: '-0.025em',
          color: '#0D1117',
          marginBottom: 40,
          animation: 'float-up 0.4s ease 0.05s forwards',
          opacity: 0,
        }}>
          Your files never leave the building.
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 16,
          marginBottom: 32,
        }}>
          {pillars.map((p, i) => (
            <div key={i} style={{
              background: p.bg,
              borderRadius: 14,
              padding: '24px 28px',
              borderLeft: `3px solid ${p.accent}`,
              animation: `float-up 0.4s ease ${0.1 + i * 0.08}s forwards`,
              opacity: 0,
            }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#0D1117', marginBottom: 8 }}>{p.title}</div>
              <div style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.6 }}>{p.detail}</div>
            </div>
          ))}
        </div>

        {/* Footer strip */}
        <div style={{
          background: '#0D1117',
          borderRadius: 12,
          padding: '14px 28px',
          display: 'flex',
          justifyContent: 'center',
          gap: 32,
          flexWrap: 'wrap',
          animation: 'float-up 0.4s ease 0.45s forwards',
          opacity: 0,
        }}>
          {[
            'No per-track fees',
            'No vendor lock-in',
            'No price increases',
            'Owned outright',
          ].map((item, i) => (
            <span key={i} style={{
              fontSize: 12,
              fontWeight: 700,
              color: 'rgba(255,255,255,0.75)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
