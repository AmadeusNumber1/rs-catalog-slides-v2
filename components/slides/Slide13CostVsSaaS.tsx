'use client';

export default function Slide13CostVsSaaS() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: '#F7F6F3',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 80px',
    }}>
      <div style={{ maxWidth: 900, width: '100%', textAlign: 'center' }}>
        {/* Label */}
        <div style={{
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: '0.2em',
          color: '#1A56A0',
          textTransform: 'uppercase',
          marginBottom: 16,
          animation: 'float-up 0.4s ease forwards',
        }}>
          Cost Comparison
        </div>

        <h2 style={{
          fontSize: 'clamp(32px, 4.5vw, 56px)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          color: '#0D1117',
          marginBottom: 52,
          animation: 'float-up 0.4s ease 0.05s forwards',
          opacity: 0,
        }}>
          The math is obvious.
        </h2>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 24,
          justifyContent: 'center',
        }}>
          {/* Cyanite card */}
          <div style={{
            background: '#FFFFFF',
            border: '0.5px solid #E4E2DC',
            borderTop: '3px solid #E53E3E',
            borderRadius: 16,
            padding: '36px 40px',
            flex: 1,
            maxWidth: 340,
            textAlign: 'center',
            animation: 'float-up 0.5s ease 0.1s forwards',
            opacity: 0,
          }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#374151', marginBottom: 16 }}>
              Cyanite Pro
            </div>
            <div style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, color: '#E53E3E', marginBottom: 16, letterSpacing: '-0.03em' }}>
              $800–$2,000<span style={{ fontSize: 22 }}>/mo</span>
            </div>
            <div style={{ fontSize: 14, color: '#9CA3AF', lineHeight: 1.6 }}>
              AI tagging only. No player. No lyrics. No share links.
            </div>
          </div>

          {/* VS */}
          <div style={{
            fontSize: 24,
            fontWeight: 800,
            color: '#D1D5DB',
            flexShrink: 0,
          }}>
            VS
          </div>

          {/* RS Catalog card */}
          <div style={{
            background: '#FFFFFF',
            border: '2px solid #1A56A0',
            borderRadius: 16,
            padding: '44px 48px',
            flex: 1,
            maxWidth: 380,
            textAlign: 'center',
            boxShadow: '0 8px 40px rgba(26,86,160,0.12)',
            position: 'relative',
            animation: 'float-up 0.5s ease 0.2s forwards',
            opacity: 0,
          }}>
            {/* Featured badge */}
            <div style={{
              position: 'absolute',
              top: -14,
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#1A56A0',
              color: '#FFFFFF',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '4px 16px',
              borderRadius: 100,
            }}>
              Your Platform
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#0D1117', marginBottom: 16 }}>
              RS Catalog
            </div>
            <div style={{ fontSize: 'clamp(40px, 5vw, 60px)', fontWeight: 800, color: '#1A56A0', marginBottom: 16, letterSpacing: '-0.03em' }}>
              ~$37<span style={{ fontSize: 28 }}>/mo</span>
            </div>
            <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.6, fontWeight: 500 }}>
              Everything. On your hardware. Forever.
            </div>
          </div>
        </div>

        {/* Sub-note */}
        <p style={{
          marginTop: 32,
          fontSize: 13,
          color: '#9CA3AF',
          animation: 'float-up 0.4s ease 0.4s forwards',
          opacity: 0,
        }}>
          ~$37/mo = electricity + hardware amortisation over 5 years. No subscription. No per-track charge.
        </p>
      </div>
    </div>
  );
}
