'use client';

const problems = [
  {
    quote: '"Where is that track?"',
    detail: 'Audio scattered across hard drives, Dropbox, USB sticks, and email.',
    icon: '📁',
  },
  {
    quote: '"What\'s the BPM on this?"',
    detail: 'No metadata. No tags. No way to search by mood, key, or energy.',
    icon: '🎵',
  },
  {
    quote: '"Our masters are on their servers."',
    detail: 'SaaS platforms require uploading your audio to their cloud. You lose control and pay every month — forever.',
    icon: '☁️',
  },
  {
    quote: '"Can you send me a few options?"',
    detail: 'Sharing means Dropbox links and email chains. No branding, no control over downloads.',
    icon: '📧',
  },
];

export default function Slide02Problem() {
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
      <div style={{ maxWidth: 960, width: '100%' }}>
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
          The Problem
        </div>

        {/* Title */}
        <h2 style={{
          fontSize: 'clamp(36px, 4.5vw, 56px)',
          fontWeight: 700,
          letterSpacing: '-0.025em',
          color: '#0D1117',
          marginBottom: 44,
          animation: 'float-up 0.4s ease 0.05s forwards',
          opacity: 0,
        }}>
          Sound familiar?
        </h2>

        {/* 4 cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 16,
          marginBottom: 36,
        }}>
          {problems.map((p, i) => (
            <div key={i} style={{
              background: '#F9FAFB',
              border: '1px solid #F0F0EC',
              borderLeft: '3px solid #E5E7EB',
              borderRadius: 12,
              padding: '24px 28px',
              animation: `float-up 0.4s ease ${0.1 + i * 0.07}s forwards`,
              opacity: 0,
            }}>
              <div style={{
                fontSize: 15,
                fontWeight: 700,
                color: '#0D1117',
                marginBottom: 10,
                fontStyle: 'italic',
              }}>
                {p.quote}
              </div>
              <div style={{
                fontSize: 14,
                color: '#6B7280',
                lineHeight: 1.6,
              }}>
                {p.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          textAlign: 'center',
          fontSize: 14,
          color: '#374151',
          fontWeight: 500,
          background: 'rgba(26,86,160,0.05)',
          border: '1px solid rgba(26,86,160,0.12)',
          borderRadius: 10,
          padding: '14px 28px',
          animation: 'float-up 0.4s ease 0.45s forwards',
          opacity: 0,
        }}>
          These are solved problems. RS Catalog fixes all of them — on hardware you own.
        </div>
      </div>
    </div>
  );
}
