'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Slide01Hero from './slides/Slide01Hero';
import Slide02Problem from './slides/Slide02Problem';
import Slide03WhatItIs from './slides/Slide03WhatItIs';
import Slide04AutoTagging from './slides/Slide04AutoTagging';
import Slide05Search from './slides/Slide05Search';
import Slide06CatalogView from './slides/Slide06CatalogView';
import Slide07TrackDetail from './slides/Slide07TrackDetail';
import Slide08Mobile from './slides/Slide08Mobile';
import Slide09ShareLinks from './slides/Slide09ShareLinks';
import Slide10Security from './slides/Slide10Security';
import Slide11Hardware from './slides/Slide11Hardware';
import Slide12TechStack from './slides/Slide12TechStack';
import Slide13CostVsSaaS from './slides/Slide13CostVsSaaS';
import Slide14Included from './slides/Slide14Included';
import Slide15Close from './slides/Slide15Close';

const slides = [
  { component: Slide01Hero,        title: 'RS Catalog' },
  { component: Slide02Problem,     title: 'The Problem' },
  { component: Slide03WhatItIs,    title: 'The Solution' },
  { component: Slide04AutoTagging, title: 'AI Analysis' },
  { component: Slide05Search,      title: 'Search & Discover' },
  { component: Slide06CatalogView, title: 'The Catalog' },
  { component: Slide07TrackDetail, title: 'Track Detail' },
  { component: Slide08Mobile,      title: 'Mobile' },
  { component: Slide09ShareLinks,  title: 'Sharing' },
  { component: Slide10Security,    title: 'Security' },
  { component: Slide11Hardware,    title: 'Hardware' },
  { component: Slide12TechStack,   title: 'Tech Stack' },
  { component: Slide13CostVsSaaS,  title: 'Cost Comparison' },
  { component: Slide14Included,    title: "What's Included" },
  { component: Slide15Close,       title: 'Close' },
];

const TOTAL = slides.length;

export default function Presentation() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const [transitioning, setTransitioning] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  const goTo = useCallback((index: number) => {
    if (transitioning) return;
    if (index < 0 || index >= TOTAL) return;
    setTransitioning(true);
    setVisible(false);
    setTimeout(() => {
      setCurrent(index);
      setVisible(true);
      setTransitioning(false);
    }, 200);
  }, [transitioning]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prev();
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev, toggleFullscreen]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.clientX;
    const half = window.innerWidth / 2;
    if (x > half) next();
    else prev();
  };

  const SlideComponent = slides[current].component;
  const slideTitle = slides[current].title;
  const num = String(current + 1).padStart(2, '0');
  const tot = String(TOTAL).padStart(2, '0');

  // All slides are white — no dark slides
  const isDark = false;

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
        cursor: 'default',
        userSelect: 'none',
      }}
    >
      {/* Slide */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: visible ? 1 : 0,
        transition: 'opacity 200ms ease',
      }}>
        <SlideComponent />
      </div>

      {/* Fullscreen button */}
      <button
        onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }}
        title={isFullscreen ? 'Exit fullscreen (F)' : 'Fullscreen (F)'}
        style={{
          position: 'fixed',
          top: 20,
          right: 24,
          zIndex: 200,
          background: 'rgba(0,0,0,0.05)',
          border: '0.5px solid rgba(0,0,0,0.1)',
          borderRadius: 8,
          width: 36,
          height: 36,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'background 150ms ease',
          color: 'rgba(0,0,0,0.4)',
          pointerEvents: 'all',
        }}
      >
        {isFullscreen ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M21 8h-3a2 2 0 0 1-2-2V3"/>
            <path d="M3 16h3a2 2 0 0 1 2 2v3"/><path d="M16 21v-3a2 2 0 0 1 2-2h3"/>
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 7V3h4"/><path d="M21 7V3h-4"/>
            <path d="M3 17v4h4"/><path d="M21 17v4h-4"/>
          </svg>
        )}
      </button>

      {/* Bottom bar */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 40px 24px',
        pointerEvents: 'none',
        zIndex: 100,
      }}>
        <div style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'rgba(0,0,0,0.22)',
        }}>
          {slideTitle}
        </div>
        <div style={{
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: '0.1em',
          color: 'rgba(0,0,0,0.28)',
          fontVariantNumeric: 'tabular-nums',
        }}>
          {num} / {tot}
        </div>
      </div>

      {/* Progress dots */}
      <div style={{
        position: 'fixed',
        bottom: 8,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: 5,
        pointerEvents: 'none',
        zIndex: 100,
      }}>
        {slides.map((_, i) => (
          <div key={i} style={{
            width: i === current ? 18 : 5,
            height: 3,
            borderRadius: 2,
            background: i === current ? 'rgba(26,86,160,0.6)' : 'rgba(0,0,0,0.13)',
            transition: 'width 200ms ease, background 200ms ease',
          }} />
        ))}
      </div>
    </div>
  );
}
