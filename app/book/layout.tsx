import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Service — Good Hands Lisbon',
  description: 'Request a curated beauty, wellness, or styling service in Lisbon. Tell us what you need and we\'ll match you with the perfect professional within 24 hours.',
  openGraph: {
    title: 'Book a Service — Good Hands Lisbon',
    description: 'Request a curated beauty, wellness, or styling service in Lisbon. Matched within 24 hours.',
    type: 'website',
  },
}

export default function BookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
