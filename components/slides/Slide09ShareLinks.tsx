'use client';

const features = [
  {
    title: 'One link, instant access',
    detail: 'Send a single URL. Recipients open it directly in their browser — no login, no app required.',
    icon: '🔗',
  },
  {
    title: 'Control downloads',
    detail: 'Choose whether recipients can stream only, or download full-quality files.',
    icon: '⬇️',
  },
  {
    title: 'Expiry & revocation',
    detail: 'Set link expiry dates. Revoke access with one click — no more "I already sent the files" awkwardness.',
    icon: '⏱️',
  },
  {
    title: 'Full audit trail',
    detail: 'See who opened the link, when, and how many times. Full logging.',
    icon: '📊',
  },
];

export default function Slide09ShareLinks() {
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
          Sharing
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
          Share with anyone. No login required.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 28 }}>
          {features.map((f, i) => (
            <div key={i} style={{
              background: '#FFFFFF',
              border: '1px solid #E9EAEC',
              borderRadius: 12,
              padding: '20px 24px',
              animation: `float-up 0.4s ease ${0.1 + i * 0.08}s forwards`,
              opacity: 0,
            }}>
              <div style={{ fontSize: 22, marginBottom: 10 }}>{f.icon}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#0D1117', marginBottom: 6 }}>{f.title}</div>
              <div style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.6 }}>{f.detail}</div>
            </div>
          ))}
        </div>

        {/* Mock share link card */}
        <div style={{
          background: '#FFFFFF',
          border: '1.5px solid #1A56A0',
          borderRadius: 14,
          padding: '20px 28px',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          boxShadow: '0 4px 24px rgba(26,86,160,0.08)',
          animation: 'float-up 0.4s ease 0.45s forwards',
          opacity: 0,
        }}>
          {/* Play button */}
          <div style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: '#1A56A0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21"/></svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#0D1117', marginBottom: 4 }}>
              Summer Vibes — Demo Mix
            </div>
            <div style={{ fontSize: 12, color: '#9CA3AF', fontFamily: 'monospace' }}>
              share.rscatalog.com/s/abc123xyz
            </div>
          </div>
          <div style={{
            background: 'rgba(26,86,160,0.1)',
            color: '#1A56A0',
            fontSize: 11,
            fontWeight: 700,
            padding: '4px 12px',
            borderRadius: 100,
            letterSpacing: '0.06em',
          }}>
            Expires Apr 30
          </div>
        </div>
      </div>
    </div>
  );
}
