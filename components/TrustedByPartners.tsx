'use client'

import { motion } from 'framer-motion'

interface TrustedByPartnersProps {
  className?: string
  variant?: 'default' | 'compact'
}

/**
 * TrustedByPartners - Centralized "Trusted By" component
 * Ultra-minimal luxury design - consistent across all pages
 * 
 * Design Standards:
 * - Font: text-2xl md:text-3xl font-serif font-light
 * - Color: var(--black) with hover to var(--gold)
 * - Gold dots (·) as separators
 * - Elegant single-line layout
 */
export default function TrustedByPartners({ 
  className = '', 
  variant = 'default' 
}: TrustedByPartnersProps) {
  const partners = [
    'Four Seasons',
    'Tivoli Hotels',
    'Pestana Hotels',
    'Memmo Hotels',
  ]

  const isCompact = variant === 'compact'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`text-center ${!isCompact ? 'pt-16 mt-16 border-t' : 'py-8'} ${className}`}
      style={!isCompact ? { borderColor: 'var(--gold)/10' } : {}}
    >
      {/* Eyebrow */}
      <p 
        className="text-xs uppercase tracking-[0.3em] mb-10 font-semibold" 
        style={{ color: 'var(--gray-medium)' }}
      >
        Trusted by Leading Hotels
      </p>
      
      {/* Hotel Names - Single Elegant Line */}
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 max-w-5xl mx-auto">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex items-center gap-6 md:gap-10"
          >
            <span 
              className="text-2xl md:text-3xl font-serif font-light hover:text-gold transition-colors duration-300 cursor-default" 
              style={{ color: 'var(--black)', letterSpacing: '-0.01em' }}
            >
              {partner}
            </span>
            {index < partners.length - 1 && (
              <span 
                className="text-2xl md:text-3xl hidden md:inline" 
                style={{ color: 'var(--gold)' }}
              >
                ·
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

