import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RS Catalog — Presentation',
  description: 'RS Catalog v2 — AI-powered self-hosted music catalog',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
