'use client';

const layers = [
  {
    label: 'Frontend',
    items: ['Next.js (Browser)'],
    bg: '#F3F4F6',
    color: '#374151',
    border: '0.5px solid #E4E2DC',
    accentColor: '#6B7280',
  },
  {
    label: 'API',
    items: ['FastAPI + Python', 'Celery Workers'],
    bg: '#F3F4F6',
    color: '#374151',
    border: '0.5px solid #E4E2DC',
    accentColor: '#6B7280',
  },
  {
    label: 'AI Layer',
    items: ['Essentia', 'Whisper', 'Ollama / Mistral 7B'],
    bg: '#1A56A0',
    color: '#FFFFFF',
    border: 'none',
    accentColor: '#1A56A0',
  },
  {
    label: 'Data',
    items: ['PostgreSQL', 'Redis', 'FFmpeg'],
    bg: '#F3F4F6',
    color: '#374151',
    border: '0.5px solid #E4E2DC',
    accentColor: '#6B7280',
  },
  {
    label: 'Hardware',
    items: ['Mac Studio M2 Ultra', 'OWC ThunderBlade 8TB × 2'],
    bg: '#0D1117',
    color: '#FFFFFF',
    border: 'none',
    accentColor: '#0D1117',
  },
];

export default function Slide12TechStack() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '52px 80px',
    }}>
      <div style={{ maxWidth: 860, width: '100%' }}>
        {/* Label */}
        <div style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.22em',
          color: '#1A56A0',
          textTransform: 'uppercase',
          marginBottom: 14,
          textAlign: 'center',
          animation: 'float-up 0.4s ease forwards',
        }}>
          Tech Stack
        </div>

        <h2 style={{
          fontSize: 'clamp(28px, 3.5vw, 46px)',
          fontWeight: 700,
          letterSpacing: '-0.025em',
          color: '#0D1117',
          marginBottom: 36,
          textAlign: 'center',
          lineHeight: 1.15,
          animation: 'float-up 0.4s ease 0.05s forwards',
          opacity: 0,
        }}>
          Built to last.
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, position: 'relative' }}>
          {layers.map((layer, li) => (
            <div key={li} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {li > 0 && (
                <div style={{ width: 2, height: 14, background: '#D1D5DB', flexShrink: 0 }} />
              )}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                width: '100%',
                padding: li === 2 ? '8px 12px' : '0',
                background: li === 2 ? 'rgba(26,86,160,0.05)' : 'transparent',
                borderRadius: li === 2 ? 10 : 0,
                animation: `float-up 0.4s ease ${li * 0.08}s forwards`,
                opacity: 0,
              }}>
                {/* Row label */}
                <div style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  color: '#9CA3AF',
                  textTransform: 'uppercase',
                  minWidth: 88,
                  textAlign: 'right',
                }}>
                  {layer.label}
                </div>
                <div style={{ width: 20, height: 1, background: '#D1D5DB', flexShrink: 0 }} />
                <div style={{ display: 'flex', gap: 10, flex: 1, flexWrap: 'wrap' }}>
                  {layer.items.map((item, ii) => (
                    <div key={ii} style={{
                      background: layer.bg,
                      color: layer.color,
                      border: layer.border,
                      borderRadius: 8,
                      padding: '10px 18px',
                      fontSize: 14,
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                    }}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
