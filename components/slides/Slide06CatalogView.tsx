'use client';
import Image from 'next/image';

export default function Slide06CatalogView() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 60px 60px',
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 28, animation: 'float-up 0.4s ease forwards' }}>
        <div style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.22em',
          color: '#1A56A0',
          textTransform: 'uppercase',
          marginBottom: 12,
        }}>
          The Catalog
        </div>
        <h2 style={{
          fontSize: 'clamp(24px, 3vw, 38px)',
          fontWeight: 700,
          letterSpacing: '-0.025em',
          color: '#0D1117',
          lineHeight: 1.2,
        }}>
          Every track. Every tag. Every tool — in one view.
        </h2>
      </div>

      {/* Browser screenshot */}
      <div style={{
        width: '100%',
        flex: 1,
        minHeight: 0,
        animation: 'float-up 0.5s ease 0.1s forwards',
        opacity: 0,
        position: 'relative',
      }}>
        <div style={{
          background: '#FFFFFF',
          borderRadius: 12,
          boxShadow: '0 16px 56px rgba(0,0,0,0.14)',
          overflow: 'hidden',
          border: '1px solid #E5E7EB',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}>
          {/* Chrome bar */}
          <div style={{
            background: '#F3F4F6',
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            borderBottom: '1px solid #E5E7EB',
            flexShrink: 0,
          }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFBD2E' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C840' }} />
            <div style={{ flex: 1, marginLeft: 10, background: '#E9EAEC', borderRadius: 4, height: 18 }} />
          </div>
          <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
            <Image
              src="/RS_Catalog_UI_Template.png"
              alt="RS.Catalog"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>
        </div>
      </div>

      {/* Caption labels */}
      <div style={{
        display: 'flex',
        gap: 24,
        marginTop: 16,
        justifyContent: 'center',
        animation: 'float-up 0.4s ease 0.25s forwards',
        opacity: 0,
      }}>
        {[
          'Sidebar — filters & playlists',
          'Tracks with full metadata',
          'Lyrics + tags panel',
        ].map((label, i) => (
          <div key={i} style={{
            fontSize: 12,
            fontWeight: 600,
            color: '#6B7280',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#1A56A0' }} />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
