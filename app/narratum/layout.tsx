import type { Metadata } from 'next'
import Head from './head'

export const metadata: Metadata = {
  title: 'Narratum Intelligence Dashboard',
  description: 'Advanced analytics and intelligence platform for data-driven insights',
  keywords: 'narratum, intelligence dashboard, analytics, data insights, wonder portal',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://narratum.io/dashboard',
    siteName: 'Narratum',
    title: 'Narratum Intelligence Dashboard',
    description: 'Advanced analytics and intelligence platform for data-driven insights',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Narratum Intelligence Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Narratum Intelligence Dashboard',
    description: 'Advanced analytics and intelligence platform for data-driven insights',
    images: ['/api/og'],
  },
  other: {
    'ai-content-declaration': 'AI-powered intelligence platform for data analytics',
  },
}

export default function NarratumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head />
      {children}
    </>
  )
}