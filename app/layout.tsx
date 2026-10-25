import type { Metadata, Viewport } from 'next'
import { headers } from 'next/headers'
import './globals.css'
import { profile } from '@/lib/data'
const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.vercel.app'
export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: `${profile.name} | AI & Robotics`,
  description: 'Atri Dasgupta is an Artificial Intelligence and Robotics undergraduate working on robotics, practical autonomous systems, and applied AI projects.',
  applicationName: 'Atri Dasgupta — Portfolio',
  robots: { index: true, follow: true },
  openGraph: { title: `${profile.name} | AI & Robotics`, description: 'Selected engineering projects, robotics research, and technical experience.', type: 'website', url: site },
}
export const viewport: Viewport = { width: 'device-width', initialScale: 1, colorScheme: 'light dark' }
export default async function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  // Reading request headers makes nonce-based CSP render per request instead of
  // allowing a statically generated page to ship scripts without the matching nonce.
  const nonce = (await headers()).get('x-nonce') ?? undefined
  return <html lang="en" suppressHydrationWarning>
    <head>
      <script nonce={nonce} dangerouslySetInnerHTML={{ __html: `(() => {
        try {
          const saved = localStorage.getItem('atri-theme');
          const theme = saved === 'dark' || saved === 'light'
            ? saved
            : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
          document.documentElement.dataset.theme = theme;
          document.documentElement.style.colorScheme = theme;
        } catch (_) {
          document.documentElement.dataset.theme = 'light';
          document.documentElement.style.colorScheme = 'light';
        }
      })();` }} />
    </head>
    <body>{children}</body>
  </html>
}
