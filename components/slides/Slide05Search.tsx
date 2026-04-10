'use client';
import Image from 'next/image';

const queries = [
  { query: '"chill hip hop 90bpm"', result: '47 tracks · Jazz, Lo-fi, Hip-hop' },
  { query: '"dark cinematic no vocals"', result: '23 tracks · Orchestral, Score' },
  { query: '"upbeat summer guitar"', result: '31 tracks · Pop, Indie, Acoustic' },
  { query: '"melancholy piano slow"', result: '18 tracks · Classical, Ambient' },
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
        <div style={{ flex: 1, marginLeft: 10, background: '#E9EAEC', borderRadius: 4, height: 18 }} />
      </div>
      {children}
    </div>
  );
}

export default function Slide05Search() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: '#F7F6F3',
      display: 'flex',
      alignItems: 'center',
      padding: '40px 72px',
      gap: 64,
    }}>
      {/* Left */}
      <div style={{ flex: '0 0 auto', maxWidth: 380 }}>
        <div style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.22em',
          color: '#1A56A0',
          textTransform: 'uppercase',
          marginBottom: 14,
          animation: 'float-up 0.4s ease forwards',
        }}>
          Search &amp; Discover
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
          Search the way you think.
        </h2>

        <p style={{
          fontSize: 14,
          color: '#6B7280',
          marginBottom: 28,
          animation: 'float-up 0.4s ease 0.1s forwards',
          opacity: 0,
        }}>
          Type a feeling, a tempo, a genre, a scene, a vibe.
        </p>

        {/* Query examples */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {queries.map((q, i) => (
            <div key={i} style={{
              background: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: 10,
              padding: '12px 16px',
              animation: `float-up 0.35s ease ${0.15 + i * 0.08}s forwards`,
              opacity: 0,
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#0D1117', fontFamily: 'monospace', marginBottom: 4 }}>
                {q.query}
              </div>
              <div style={{ fontSize: 12, color: '#1A56A0', fontWeight: 500 }}>
                → {q.result}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right screenshot */}
      <div style={{
        flex: 1,
        animation: 'float-up 0.5s ease 0.15s forwards',
        opacity: 0,
        minWidth: 0,
      }}>
        <BrowserChrome>
          <Image
            src="/RS_Catalog_UI_Template.png"
            alt="RS.Catalog UI"
            width={900}
            height={580}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </BrowserChrome>
      </div>
    </div>
  );
}
