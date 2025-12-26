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
      className={`w-full ${!isCompact ? 'pt-16 mt-16 border-t' : 'py-8'} ${className}`}
      style={!isCompact ? { borderColor: 'var(--gold)/10' } : {}}
    >
      {/* Eyebrow - Perfectly Centered */}
      <p 
        className="text-xs uppercase tracking-[0.25em] mb-8 font-semibold w-full text-center mx-auto" 
        style={{ color: 'var(--gray-medium)', textAlign: 'center' }}
      >
        Trusted by Leading Hotels
      </p>
      
      {/* Hotel Names - Centered Single Line */}
      <div className="w-full flex justify-center">
        <div className="inline-flex flex-wrap justify-center items-center gap-x-3 md:gap-x-4">
          {partners.map((partner, index) => (
            <span key={index} className="inline-flex items-center">
              <span 
                className="text-xl md:text-2xl lg:text-3xl font-serif font-light hover:text-gold transition-colors duration-300 cursor-default whitespace-nowrap" 
                style={{ color: 'var(--black)', letterSpacing: '-0.01em' }}
              >
                {partner}
              </span>
              {index < partners.length - 1 && (
                <span 
                  className="text-xl md:text-2xl lg:text-3xl mx-3 md:mx-4" 
                  style={{ color: 'var(--gold)' }}
                >
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

