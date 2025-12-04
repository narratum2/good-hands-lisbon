'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const articles = [
  {
    title: 'The Art of Portuguese Beauty Rituals',
    excerpt: 'Discover centuries-old beauty traditions from Portugal that modern experts still swear by...',
    image: '/brand-images/ai-generated/blog-portuguese-beauty.jpg',
    date: 'October 1, 2025',
    category: 'Traditions',
    href: '/journal/portuguese-beauty-rituals',
  },
  {
    title: 'Wedding Beauty Timeline: 6 Months to I Do',
    excerpt: 'A comprehensive guide to preparing your beauty routine for the big day...',
    image: '/brand-images/ai-generated/blog-bridal-hair.jpg',
    date: 'September 28, 2025',
    category: 'Weddings',
    href: '/journal/wedding-beauty-timeline',
  },
  {
    title: 'Lisbon\'s Hidden Beauty Gems',
    excerpt: 'Our editors share their favorite under-the-radar salons and spas across the city...',
    image: '/brand-images/ai-generated/hero-salon-interior.jpg',
    date: 'September 25, 2025',
    category: 'City Guide',
    href: '/journal/lisbon-hidden-gems',
  },
]

export default function JournalPreview() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container-custom">
        {/* Header - Better Alignment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-4"
        >
          <div className="text-center md:text-left w-full md:w-auto">
            <p 
              className="text-xs uppercase tracking-[0.25em] font-semibold mb-3"
              style={{ color: 'var(--gold)' }}
            >
              From the Journal
            </p>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-serif mb-3 font-light"
              style={{ 
                letterSpacing: '-0.02em',
                color: 'var(--black)'
              }}
            >
              Beauty Insights & Guides
            </h2>
            <p 
              className="text-base md:text-lg"
              style={{ color: 'var(--gray-dark)' }}
            >
              Expert advice, city guides, and beauty inspiration
            </p>
          </div>
          <Link
            href="/journal"
            className="hidden md:inline-flex items-center gap-2 text-sm uppercase tracking-wider font-semibold transition-colors duration-300 hover:opacity-80"
            style={{ 
              color: 'var(--gold)',
              letterSpacing: '0.1em'
            }}
          >
            View All Articles
            <span>→</span>
          </Link>
        </motion.div>

        {/* Articles Grid - Equal Height Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <Link
                href={article.href}
                className="group block focus-visible-ring h-full flex flex-col"
              >
                {/* Image */}
                <div className="relative h-56 md:h-60 overflow-hidden mb-4 flex-shrink-0">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                {/* Content */}
                <div className="flex flex-col flex-grow">
                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-2">
                    <span 
                      className="text-xs uppercase tracking-wider font-medium"
                      style={{ 
                        color: 'var(--gold)',
                        letterSpacing: '0.1em'
                      }}
                    >
                      {article.category}
                    </span>
                    <span 
                      className="text-xs"
                      style={{ color: 'var(--gray-medium)' }}
                    >
                      {article.date}
                    </span>
                  </div>
                  {/* Title */}
                  <h3 
                    className="text-lg md:text-xl font-serif mb-2 group-hover:text-gold transition-colors duration-300 font-light"
                    style={{ color: 'var(--black)' }}
                  >
                    {article.title}
                  </h3>
                  {/* Excerpt */}
                  <p 
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--gray-dark)' }}
                  >
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10 md:hidden"
        >
          <Link href="/journal" className="btn-secondary inline-block">
            View All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

