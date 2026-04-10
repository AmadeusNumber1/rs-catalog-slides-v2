'use client';

export default function Slide03WhatItIs() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: '#F7F6F3',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 100px',
    }}>
      <div style={{ maxWidth: 780, width: '100%', textAlign: 'center' }}>
        {/* Label */}
        <div style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.22em',
          color: '#1A56A0',
          textTransform: 'uppercase',
          marginBottom: 18,
          animation: 'float-up 0.4s ease forwards',
        }}>
          The Solution
        </div>

        {/* Title */}
        <h2 style={{
          fontSize: 'clamp(28px, 3.8vw, 48px)',
          fontWeight: 700,
          letterSpacing: '-0.025em',
          color: '#0D1117',
          lineHeight: 1.2,
          marginBottom: 32,
          animation: 'float-up 0.4s ease 0.06s forwards',
          opacity: 0,
        }}>
          Every track in your catalog —<br />
          tagged, searchable, and under your control.
        </h2>

        {/* Body */}
        <p style={{
          fontSize: 'clamp(15px, 1.6vw, 19px)',
          color: '#4B5563',
          lineHeight: 1.75,
          marginBottom: 52,
          fontWeight: 400,
          animation: 'float-up 0.4s ease 0.12s forwards',
          opacity: 0,
        }}>
          Upload any audio file. RS.Catalog analyses it automatically — BPM, key, mood, genre,
          instrumentation, era, lyrics. Everything stays on hardware you own.
          No cloud. No per-track fees. No subscriptions.
        </p>

        {/* 3 pills — all consistent blue style */}
        <div style={{
          display: 'flex',
          gap: 14,
          justifyContent: 'center',
          flexWrap: 'wrap',
          animation: 'float-up 0.4s ease 0.18s forwards',
          opacity: 0,
        }}>
          {['AI-powered', 'Self-hosted', 'Share-ready'].map((label, i) => (
            <div key={i} style={{
              background: '#FFFFFF',
              border: '1.5px solid #1A56A0',
              borderRadius: 100,
              padding: '10px 24px',
              fontSize: 14,
              fontWeight: 700,
              color: '#1A56A0',
              letterSpacing: '0.02em',
            }}>
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
