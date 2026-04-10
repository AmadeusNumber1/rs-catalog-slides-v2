'use client';
import Image from 'next/image';

const bullets = [
  'Live search as you type',
  'Filter by mood, BPM, key, genre',
  'Full-screen now-playing view',
  'AI-generated lyrics',
  'Access via Tailscale VPN',
];

export default function Slide08Mobile() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '52px 72px',
      gap: 72,
    }}>
      {/* Left text */}
      <div style={{ flex: '0 0 auto', maxWidth: 360, animation: 'float-up 0.4s ease forwards' }}>
        <div style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.22em',
          color: '#1A56A0',
          textTransform: 'uppercase',
          marginBottom: 14,
        }}>
          Mobile
        </div>
        <h2 style={{
          fontSize: 'clamp(28px, 3.2vw, 42px)',
          fontWeight: 700,
          letterSpacing: '-0.025em',
          color: '#0D1117',
          lineHeight: 1.15,
          marginBottom: 12,
        }}>
          Works on every device.
        </h2>
        <p style={{
          fontSize: 14,
          color: '#6B7280',
          lineHeight: 1.7,
          marginBottom: 28,
        }}>
          Spotify-style mobile interface. Search, filter, play — from any phone on your team&#39;s network.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {bullets.map((b, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 10,
              animation: `float-up 0.35s ease ${0.1 + i * 0.07}s forwards`,
              opacity: 0,
            }}>
              <div style={{
                width: 18,
                height: 18,
                borderRadius: '50%',
                background: 'rgba(26,86,160,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: 1,
              }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#1A56A0' }} />
              </div>
              <span style={{ fontSize: 14, color: '#374151', lineHeight: 1.5, fontWeight: 500 }}>{b}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right — iPhone screenshot — full phone, no crop */}
      <div style={{
        flex: '1 1 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'float-up 0.5s ease 0.15s forwards',
        opacity: 0,
        minWidth: 0,
      }}>
        <div style={{
          boxShadow: '0 24px 80px rgba(0,0,0,0.16)',
          borderRadius: 36,
          border: '2px solid #E5E7EB',
          display: 'inline-flex',
          overflow: 'visible',
        }}>
          <Image
            src="/RS_Catalog_Mobile_v2.png"
            alt="RS.Catalog Mobile"
            width={280}
            height={580}
            style={{
              display: 'block',
              objectFit: 'contain',
              width: 'auto',
              height: 480,
              maxWidth: '100%',
              borderRadius: 34,
            }}
          />
        </div>
      </div>
    </div>
  );
}
