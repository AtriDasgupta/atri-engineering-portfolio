import type { Metadata, Viewport } from 'next'
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
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>
}
