'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface JournalArticle {
  title: string
  excerpt: string
  image: string
  date: string
  category: string
  author: string
  slug: string
}

const categories_from = (articles: JournalArticle[]) =>
  ['All', ...Array.from(new Set(articles.map(a => a.category)))]

export default function JournalClient({ articles }: { articles: JournalArticle[] }) {
  const [visibleCount, setVisibleCount] = useState(9)
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = categories_from(articles)
  const filtered = activeCategory === 'All'
    ? articles
    : articles.filter(a => a.category === activeCategory)

  const featured = articles[0]
  const gridArticles = filtered.slice(activeCategory === 'All' ? 1 : 0, visibleCount)

  return (
    <div className="pt-20">
      <header className="bg-white border-b" style={{ borderColor: 'var(--gray-light)' }}>
        <div className="container-custom max-w-6xl py-16 md:py-24">
          <p
            className="text-xs uppercase tracking-[0.3em] mb-5 font-medium"
            style={{ color: 'var(--gold)' }}
          >
            Good Hands Journal
          </p>
          <h1
            className="font-serif font-light mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--black)' }}
          >
            Stories &amp; Insights
          </h1>
          <p
            className="max-w-xl text-lg font-light leading-relaxed"
            style={{ color: 'var(--harbor)' }}
          >
            Beauty, travel, and culture — reported from Lisbon and beyond.
          </p>

          <nav className="flex flex-wrap gap-2 mt-10" aria-label="Filter articles">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setVisibleCount(9) }}
                className="px-4 py-1.5 text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-200"
                style={{
                  color: activeCategory === cat ? 'var(--white)' : 'var(--harbor)',
                  backgroundColor: activeCategory === cat ? 'var(--black)' : 'transparent',
                  border: activeCategory === cat ? 'none' : '1px solid var(--gray-light)',
                }}
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {activeCategory === 'All' && (
        <section className="bg-white">
          <div className="container-custom max-w-6xl py-12 md:py-20">
            <Link
              href={`/journal/${featured.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
            >
              <div className="lg:col-span-7 relative aspect-[3/2] overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-ink/5 mix-blend-multiply" />
              </div>

              <div className="lg:col-span-5 flex flex-col justify-center">
                <span
                  className="text-xs uppercase tracking-[0.2em] font-medium mb-4 block"
                  style={{ color: 'var(--gold)' }}
                >
                  {featured.category}
                </span>
                <h2
                  className="font-serif font-light mb-4 group-hover:text-gold transition-colors duration-300"
                  style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', lineHeight: 1.15, letterSpacing: '-0.01em', color: 'var(--black)' }}
                >
                  {featured.title}
                </h2>
                <p className="text-harbor text-base lg:text-lg leading-relaxed mb-6 font-light">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs" style={{ color: 'var(--gray-medium)' }}>
                  <span className="font-medium" style={{ color: 'var(--black)' }}>{featured.author}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>{featured.date}</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="container-custom max-w-6xl">
            <div className="h-px" style={{ backgroundColor: 'var(--gray-light)' }} />
          </div>
        </section>
      )}

      <section className="bg-white">
        <div className="container-custom max-w-6xl py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {gridArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/journal/${article.slug}`}
                className="group block"
              >
                <div className="relative aspect-[3/2] overflow-hidden mb-5">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-600 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-ink/5 mix-blend-multiply" />
                </div>

                <span
                  className="text-[10px] uppercase tracking-[0.2em] font-medium block mb-2"
                  style={{ color: 'var(--gold)' }}
                >
                  {article.category}
                </span>
                <h3
                  className="font-serif font-normal mb-2 group-hover:text-gold transition-colors duration-200 leading-snug"
                  style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.35rem)', color: 'var(--black)' }}
                >
                  {article.title}
                </h3>
                <p className="text-sm leading-relaxed mb-3 line-clamp-2" style={{ color: 'var(--harbor)' }}>
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--gray-medium)' }}>
                  <span className="font-medium" style={{ color: 'var(--black)' }}>{article.author}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>{article.date}</span>
                </div>
              </Link>
            ))}
          </div>

          {gridArticles.length < (activeCategory === 'All' ? filtered.length - 1 : filtered.length) && (
            <div className="text-center mt-16 pt-12 border-t" style={{ borderColor: 'var(--gray-light)' }}>
              <button
                onClick={() => setVisibleCount(prev => prev + 6)}
                className="text-xs uppercase tracking-[0.2em] font-medium px-8 py-3 transition-colors duration-200 hover:text-white hover:bg-ink"
                style={{ color: 'var(--black)', border: '1px solid var(--black)' }}
              >
                Load more
              </button>
              <p className="text-xs mt-4" style={{ color: 'var(--gray-medium)' }}>
                Showing {gridArticles.length + (activeCategory === 'All' ? 1 : 0)} of {filtered.length}
              </p>
            </div>
          )}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://beautysalonlisbon.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Journal',
                item: 'https://beautysalonlisbon.com/journal',
              },
            ],
          }),
        }}
      />
    </div>
  )
}
