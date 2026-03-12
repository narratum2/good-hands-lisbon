'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const articles = [
  {
    title: 'Todos Santos: Baja\'s Best-Kept Beauty Secret',
    excerpt: 'Where surf culture meets artisanal wellness in Mexico\'s most enchanting desert oasis.',
    image: '/brand-images/ai-generated/blog-todos-santos.jpg',
    date: 'December 20, 2025',
    category: 'Global Exploration',
    author: 'Isabella Torres',
    slug: 'todos-santos-baja-beauty',
  },
  {
    title: 'Miami Beauty: Where Latin Glamour Meets Ocean Luxury',
    excerpt: 'Inside Miami\'s explosive beauty scene — from South Beach glam to Coconut Grove wellness sanctuaries.',
    image: '/brand-images/ai-generated/blog-miami-beauty.jpg',
    date: 'December 18, 2025',
    category: 'Global Exploration',
    author: 'Isabella Torres',
    slug: 'miami-beauty-scene',
  },
  {
    title: 'Global Beauty Exploration: Why Local Matters',
    excerpt: 'The case for seeking authentic beauty experiences while traveling and how Good Hands is expanding worldwide.',
    image: '/brand-images/ai-generated/blog-global-beauty.jpg',
    date: 'October 12, 2025',
    category: 'Global Exploration',
    author: 'Good Hands Editorial Team',
    slug: 'global-beauty-exploration',
  },
  {
    title: 'Yucatan Wellness: Ancient Mayan Beauty Secrets',
    excerpt: 'Discovering holistic beauty practices in the Yucatan Peninsula, from cenote rituals to Mayan herbal medicine.',
    image: '/brand-images/ai-generated/blog-yucatan-wellness.jpg',
    date: 'October 11, 2025',
    category: 'Global Exploration',
    author: 'Isabella Torres',
    slug: 'yucatan-wellness-beauty',
  },
  {
    title: 'Mexico City Beauty Scene: Where Tradition Meets Innovation',
    excerpt: 'Exploring the vibrant beauty culture of CDMX, from pre-Hispanic rituals to cutting-edge aesthetics.',
    image: '/brand-images/ai-generated/blog-mexico-city.jpg',
    date: 'October 10, 2025',
    category: 'Global Exploration',
    author: 'Isabella Torres',
    slug: 'mexico-city-beauty-scene',
  },
  {
    title: 'Bridal Hair Trends 2026: What Lisbon Brides Are Choosing',
    excerpt: 'From modern updos to romantic waves, the hairstyles dominating Portuguese weddings.',
    image: '/brand-images/ai-generated/blog-bridal-hair.jpg',
    date: 'October 8, 2025',
    category: 'Weddings',
    author: 'Sofia Martins',
    slug: 'bridal-hair-trends-2026',
  },
  {
    title: 'Wellness Rituals: How Lisbon Lives Well',
    excerpt: 'The daily practices that keep Lisboetas balanced, beautiful, and centered.',
    image: '/brand-images/ai-generated/blog-wellness-lisbon.jpg',
    date: 'October 5, 2025',
    category: 'Wellness',
    author: 'Teresa Alves',
    slug: 'wellness-rituals-lisbon',
  },
  {
    title: 'The Art of Portuguese Beauty Rituals',
    excerpt: 'Discover centuries-old beauty traditions from Portugal that modern experts still swear by.',
    image: '/brand-images/ai-generated/blog-portuguese-rituals.jpg',
    date: 'October 1, 2025',
    category: 'Traditions',
    author: 'Maria Silva',
    slug: 'portuguese-beauty-rituals',
  },
  {
    title: 'Wedding Beauty Timeline: 6 Months to I Do',
    excerpt: 'A comprehensive guide to preparing your beauty routine for the big day.',
    image: '/brand-images/ai-generated/blog-wedding-timeline.jpg',
    date: 'September 28, 2025',
    category: 'Weddings',
    author: 'Sofia Martins',
    slug: 'wedding-beauty-timeline',
  },
  {
    title: "Lisbon\'s Hidden Beauty Gems",
    excerpt: "Under-the-radar salons and spas that locals treasure.",
    image: '/brand-images/ai-generated/hero-salon-interior.jpg',
    date: 'September 25, 2025',
    category: 'City Guide',
    author: 'Good Hands Team',
    slug: 'lisbon-hidden-gems',
  },
  {
    title: 'Summer Skincare in Mediterranean Climate',
    excerpt: 'How to adjust your skincare routine for Lisbon summers with expert tips from dermatologists.',
    image: '/brand-images/ai-generated/blog-summer-skincare.jpg',
    date: 'September 20, 2025',
    category: 'Skincare',
    author: 'Dr. Ana Costa',
    slug: 'summer-skincare-mediterranean',
  },
  {
    title: 'The New Wave of Portuguese Nail Art',
    excerpt: 'Meet the artists bringing contemporary Portuguese design to nails.',
    image: '/brand-images/ai-generated/service-nails.jpg',
    date: 'September 15, 2025',
    category: 'Nail Art',
    author: 'Catarina Silva',
    slug: 'portuguese-nail-art',
  },
]

const categories = ['All', ...Array.from(new Set(articles.map(a => a.category)))]

export default function JournalPage() {
  const [visibleCount, setVisibleCount] = useState(9)
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? articles
    : articles.filter(a => a.category === activeCategory)

  const featured = articles[0]
  const gridArticles = filtered.slice(activeCategory === 'All' ? 1 : 0, visibleCount)

  return (
    <div className="pt-20">
      {/* Masthead — typographic, no hero image */}
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

          {/* Category filter — understated pill nav */}
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

      {/* Featured article — editorial lead */}
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
                {/* Tonal overlay for brand consistency */}
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

          {/* Thin rule divider */}
          <div className="container-custom max-w-6xl">
            <div className="h-px" style={{ backgroundColor: 'var(--gray-light)' }} />
          </div>
        </section>
      )}

      {/* Article grid — Monocle-inspired dense, clean layout */}
      <section className="bg-white">
        <div className="container-custom max-w-6xl py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {gridArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/journal/${article.slug}`}
                className="group block"
              >
                {/* Consistent 3:2 aspect ratio */}
                <div className="relative aspect-[3/2] overflow-hidden mb-5">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-600 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Subtle tonal overlay — every image gets the same warm treatment */}
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

          {/* Load more — minimal */}
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

      {/* Breadcrumb Schema */}
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

