'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FullWidthImageBreak from '@/components/FullWidthImageBreak'
import { CheckIcon } from '@/components/icons/CustomIcons'

const articles = [
  {
    title: 'Todos Santos: Baja\'s Best-Kept Beauty Secret',
    excerpt: 'Where surf culture meets artisanal wellness in Mexico\'s most enchanting desert oasis.',
    image: '/brand-images/ai-generated/service-wellness.jpg', // Desert wellness vibes
    date: 'December 20, 2025',
    category: 'Global Exploration',
    author: 'Isabella Torres',
    slug: 'todos-santos-baja-beauty',
  },
  {
    title: 'Miami Beauty: Where Latin Glamour Meets Ocean Luxury',
    excerpt: 'Inside Miami\'s explosive beauty scene—from South Beach glam to Coconut Grove wellness sanctuaries.',
    image: '/brand-images/ai-generated/service-makeup.jpg', // Glamour vibes
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
    image: '/brand-images/ai-generated/service-makeup.jpg',
    date: 'October 1, 2025',
    category: 'Traditions',
    author: 'Maria Silva',
    slug: 'portuguese-beauty-rituals',
  },
  {
    title: 'Wedding Beauty Timeline: 6 Months to I Do',
    excerpt: 'A comprehensive guide to preparing your beauty routine for the big day.',
    image: '/brand-images/ai-generated/blog-bridal-hair.jpg',
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
    image: '/brand-images/ai-generated/service-facial-spa.jpg',
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

export default function JournalPage() {
  const [visibleArticles, setVisibleArticles] = useState(6) // Show 6 articles initially (1 featured + 5 in grid)

  const loadMore = () => {
    setVisibleArticles(prev => Math.min(prev + 6, articles.length))
  }

  const articlesToShow = articles.slice(1, visibleArticles) // Skip first (featured) and show up to visibleArticles

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/brand-images/ai-generated/service-hair-styling.jpg"
            alt="Good Hands Journal - beauty insights, Lisbon guides, and expert tips"
            fill
            className="object-cover object-center scale-105"
            priority
            sizes="100vw"
          />
          {/* More dramatic cinematic gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        </div>
        <div className="relative z-10 text-center text-white container-custom px-4">
          {/* Eyebrow text */}
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/70 mb-6 font-medium animate-fade-in">
            Stories & Insights
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 tracking-tight font-light" style={{ lineHeight: '0.95' }}>
            The Journal
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/85 max-w-2xl mx-auto leading-relaxed font-light">
            Beauty insights, city guides, and stories from around the world
          </p>
          
          {/* Quick scannable highlights */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-10 md:mt-14 text-sm">
            <div className="flex items-center gap-2.5 group">
              <CheckIcon size={18} className="text-gold" />
              <span className="text-white/90 tracking-wide">Expert beauty advice</span>
            </div>
            <div className="flex items-center gap-2.5 group">
              <CheckIcon size={18} className="text-gold" />
              <span className="text-white/90 tracking-wide">Local Lisbon guides</span>
            </div>
            <div className="flex items-center gap-2.5 group">
              <CheckIcon size={18} className="text-gold" />
              <span className="text-white/90 tracking-wide">Global beauty exploration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article - Editorial Design */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Link
            href={`/journal/${articles[0].slug}`}
            className="group block max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Image with elegant frame effect */}
              <div className="relative h-[400px] lg:h-[550px] overflow-hidden">
                <div className="absolute inset-0 rounded-sm overflow-hidden">
                  <Image
                    src={articles[0].image}
                    alt={articles[0].title}
                    fill
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              
              {/* Content with refined typography */}
              <div className="flex flex-col justify-center py-6 lg:py-0">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold px-3 py-1.5 bg-gold/10 rounded-full">
                    Featured
                  </span>
                  <span className="text-xs text-harbor tracking-wide">{articles[0].date}</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 group-hover:text-gold transition-colors duration-300 leading-tight">
                  {articles[0].title}
                </h2>
                <p className="text-harbor text-lg lg:text-xl mb-6 leading-relaxed font-light">{articles[0].excerpt}</p>
                <div className="flex items-center gap-4">
                  <p className="text-sm text-harbor font-medium">By {articles[0].author}</p>
                  <span className="w-12 h-px bg-gold group-hover:w-20 transition-all duration-300" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Visual Break - Full Width Image */}
      <FullWidthImageBreak
        image="/brand-images/ai-generated/service-hair-styling.jpg"
        alt="Expert hair styling and beauty treatments"
        height="medium"
        parallax={true}
      />

      {/* Articles Grid */}
      <section className="section-padding bg-shell">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 md:mb-16">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {articlesToShow.map((article, index) => (
              <Link
                key={article.slug}
                href={`/journal/${article.slug}`}
                className="group block bg-white overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-72 lg:h-80 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Hover overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Category badge overlay */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs uppercase tracking-[0.15em] text-white font-medium px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-sm">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-harbor/70 tracking-wide">{article.date}</span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-serif mb-3 group-hover:text-gold transition-colors duration-300 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-harbor text-sm mb-4 leading-relaxed line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-harbor font-medium">By {article.author}</p>
                    <span className="text-gold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Read →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More Button - Editorial Design */}
          {visibleArticles < articles.length && (
            <div className="text-center mt-16">
              <button
                onClick={loadMore}
                className="group relative inline-block"
              >
                <span 
                  className="block text-sm uppercase tracking-[0.2em] font-semibold mb-4 transition-colors duration-300"
                  style={{ color: 'var(--gray-medium)' }}
                >
                  Continue Reading
                </span>
                <span 
                  className="block text-2xl md:text-3xl font-serif font-light group-hover:text-gold transition-colors duration-300"
                  style={{ color: 'var(--black)', letterSpacing: '-0.01em' }}
                >
                  More Articles
                </span>
                <span 
                  className="block w-16 h-px mx-auto mt-6 transition-all duration-300 group-hover:w-24"
                  style={{ backgroundColor: 'var(--gold)' }}
                />
              </button>
              <p 
                className="text-xs uppercase tracking-[0.15em] mt-8"
                style={{ color: 'var(--gray-medium)' }}
              >
                {visibleArticles} of {articles.length}
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

