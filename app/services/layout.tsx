import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beauty Services in Lisbon | Good Hands Concierge',
  description: 'Browse our curated selection of beauty services — hair styling, makeup, skincare, nails, wellness, and more. All practitioners personally vetted.',
  alternates: {
    canonical: 'https://beautysalonlisbon.com/services',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
