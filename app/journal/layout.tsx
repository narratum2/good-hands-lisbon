import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Journal — Good Hands Lisbon',
  description: 'Beauty, wellness, and lifestyle stories from Lisbon and beyond. Expert guides, insider tips, and editorial features from Good Hands.',
  openGraph: {
    title: 'Journal — Good Hands Lisbon',
    description: 'Beauty, wellness, and lifestyle stories from Lisbon. Expert guides and editorial features.',
    type: 'website',
  },
}

export default function JournalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
