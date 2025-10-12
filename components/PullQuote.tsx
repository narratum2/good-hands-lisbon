'use client'

import { motion } from 'framer-motion'

interface PullQuoteProps {
  quote: string
  author?: string
  role?: string
  backgroundColor?: 'sage' | 'gold' | 'white'
}

export default function PullQuote({
  quote,
  author,
  role,
  backgroundColor = 'sage',
}: PullQuoteProps) {
  const bgClasses = {
    sage: 'bg-gradient-to-br from-sage-light to-sage',
    gold: 'bg-gradient-to-br from-gold-light to-gold',
    white: 'bg-white',
  }

  const textClasses = {
    sage: 'text-sage-dark',
    gold: 'text-ink',
    white: 'text-ink',
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className={`${bgClasses[backgroundColor]} rounded-lg p-8 md:p-12 my-12 relative overflow-hidden`}
    >
      {/* Decorative Quote Mark */}
      <div className="absolute top-4 left-4 text-9xl font-serif leading-none opacity-10">
        "
      </div>

      {/* Quote Text */}
      <blockquote className="relative z-10">
        <p
          className={`${textClasses[backgroundColor]} font-serif italic text-2xl md:text-3xl lg:text-4xl leading-snug mb-6`}
          style={{ textShadow: '0 1px 2px rgba(0,0,0,0.05)' }}
        >
          {quote}
        </p>

        {(author || role) && (
          <footer className="text-ink/70 text-base md:text-lg">
            {author && <cite className="not-italic font-semibold">{author}</cite>}
            {role && <span className="block text-sm mt-1">{role}</span>}
          </footer>
        )}
      </blockquote>

      {/* Decorative Element */}
      <div className="absolute bottom-4 right-4 w-24 h-24 rounded-full bg-white/20 blur-3xl" />
    </motion.div>
  )
}

