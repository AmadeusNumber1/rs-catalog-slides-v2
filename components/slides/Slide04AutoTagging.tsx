'use client';
import Image from 'next/image';

const aiLayers = [
  { label: 'BPM & Key', detail: 'Precise tempo + harmonic analysis' },
  { label: 'Genre & Mood', detail: '400 genres, 56 moods' },
  { label: 'Vocal & Instruments', detail: 'Stem separation + detection' },
  { label: 'Lyrics', detail: 'Whisper — 99 languages' },
  { label: 'AI Description', detail: 'Mistral 7B — plain-English summary' },
];

function BrowserChrome({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: '#FFFFFF',
      borderRadius: 12,
      boxShadow: '0 12px 48px rgba(0,0,0,0.14)',
      overflow: 'hidden',
      border: '1px solid #E5E7EB',
    }}>
      {/* Chrome bar */}
      <div style={{
        background: '#F3F4F6',
        padding: '10px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        borderBottom: '1px solid #E5E7EB',
      }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFBD2E' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C840' }} />
        <div style={{
          flex: 1,
          marginLeft: 10,
          background: '#E9EAEC',
          borderRadius: 4,
          height: 18,
        }} />
      </div>
      {children}
    </div>
  );
}

export default function Slide04AutoTagging() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      padding: '40px 72px',
      gap: 64,
    }}>
      {/* Left */}
      <div style={{ flex: '0 0 auto', maxWidth: 400 }}>
        <div style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.22em',
          color: '#1A56A0',
          textTransform: 'uppercase',
          marginBottom: 14,
          animation: 'float-up 0.4s ease forwards',
        }}>
          AI AUTO-TAGGING
        </div>

        <h2 style={{
          fontSize: 'clamp(28px, 3.2vw, 42px)',
          fontWeight: 700,
          letterSpacing: '-0.025em',
          color: '#0D1117',
          lineHeight: 1.15,
          marginBottom: 10,
          animation: 'float-up 0.4s ease 0.05s forwards',
          opacity: 0,
        }}>
          Drop a file.<br />Get everything.
        </h2>

        <p style={{
          fontSize: 14,
          color: '#6B7280',
          marginBottom: 28,
          animation: 'float-up 0.4s ease 0.1s forwards',
          opacity: 0,
        }}>
          Five layers of open-source AI. All running locally.
        </p>

        {/* AI layer cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {aiLayers.map((layer, i) => (
            <div key={i} style={{
              background: '#F9FAFB',
              border: '1px solid #F0F0EC',
              borderRadius: 10,
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              animation: `float-up 0.35s ease ${0.15 + i * 0.07}s forwards`,
              opacity: 0,
            }}>
              <div style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#1A56A0',
                flexShrink: 0,
              }} />
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#0D1117' }}>{layer.label}</div>
                <div style={{ fontSize: 12, color: '#9CA3AF' }}>{layer.detail}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 20,
          fontSize: 12,
          color: '#9CA3AF',
          lineHeight: 1.5,
          animation: 'float-up 0.4s ease 0.6s forwards',
          opacity: 0,
        }}>
          All AI runs locally on your Mac Studio —<br />no external API calls, no data leaves the building.
        </div>
      </div>

      {/* Right — screenshot */}
      <div style={{
        flex: 1,
        animation: 'float-up 0.5s ease 0.15s forwards',
        opacity: 0,
        minWidth: 0,
      }}>
        <BrowserChrome>
          <Image
            src="/RS_Catalog_Upload_Page.png"
            alt="RS Catalog Upload Page"
            width={800}
            height={520}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </BrowserChrome>
      </div>
    </div>
  );
}
