import { Metadata } from 'next'
import { getAllArticles } from '@/lib/articles'
import JournalClient, { type JournalArticle } from './JournalClient'

export const metadata: Metadata = {
  title: 'Journal — Stories & Insights | Good Hands Lisbon',
  description: 'Beauty, travel, and culture — reported from Lisbon and beyond. Expert guides on skincare, hair, wellness, weddings, and Portugal\'s vibrant beauty scene.',
  alternates: {
    canonical: 'https://beautysalonlisbon.com/journal',
  },
  openGraph: {
    title: 'Journal — Stories & Insights | Good Hands Lisbon',
    description: 'Beauty, travel, and culture — reported from Lisbon and beyond.',
    url: 'https://beautysalonlisbon.com/journal',
    type: 'website',
  },
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

function authorName(author: string | { name: string; bio?: string }): string {
  if (typeof author === 'string') return author
  return author.name
}

export default function JournalPage() {
  const allArticles = getAllArticles()

  const articles: JournalArticle[] = allArticles.map(a => ({
    title: a.title,
    excerpt: a.excerpt,
    image: a.image,
    date: formatDate(a.date),
    category: a.category,
    author: authorName(a.author),
    slug: a.slug,
  }))

  return <JournalClient articles={articles} />
}
