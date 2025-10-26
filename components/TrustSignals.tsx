'use client'

import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/motion-variants'

export default function TrustSignals() {
  const signals = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stat: '150+',
      label: 'Vetted Professionals',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      stat: '4.9★',
      label: 'Average Rating',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stat: '< 24h',
      label: 'Response Time',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      stat: '2,000+',
      label: 'Happy Clients',
    },
  ]

  const partners = [
    'Four Seasons',
    'Tivoli Hotels',
    'Pestana Hotels',
    'Memmo Hotels',
  ]

  return (
    <section className="section-padding bg-white border-y border-harbor/10">
      <div className="container-custom">
        {/* Trust Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
        >
          {signals.map((signal, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4" style={{ backgroundColor: 'var(--gold)/10', color: 'var(--gold)' }}>
                {signal.icon}
              </div>
              <div className="text-3xl md:text-4xl font-serif font-light mb-2" style={{ color: 'var(--black)' }}>
                {signal.stat}
              </div>
              <div className="text-xs uppercase tracking-[0.15em] font-semibold" style={{ color: 'var(--gray-medium)' }}>
                {signal.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partner Badges - ULTRA-MINIMAL LUXURY DESIGN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center pt-16 mt-16 border-t"
          style={{ borderColor: 'var(--gold)/10' }}
        >
          {/* Eyebrow */}
          <p className="text-xs uppercase tracking-[0.3em] mb-10 font-semibold" style={{ color: 'var(--gray-medium)' }}>
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
                  <span className="text-2xl md:text-3xl hidden md:inline" style={{ color: 'var(--gold)' }}>
                    ·
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

