'use client'

import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/motion-variants'
import TrustedByPartners from './TrustedByPartners'

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

  return (
    <section 
      className="py-12 md:py-16"
      style={{ 
        backgroundColor: 'var(--white)',
        borderTop: '1px solid var(--gray-light)',
        borderBottom: '1px solid var(--gray-light)'
      }}
    >
      <div className="container-custom">
        {/* Trust Stats - Centered Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          {signals.map((signal, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="text-center flex flex-col items-center"
            >
              {/* Icon Circle */}
              <div 
                className="inline-flex items-center justify-center w-11 h-11 rounded-full mb-3"
                style={{ 
                  backgroundColor: 'rgba(184, 152, 95, 0.12)',
                  color: 'var(--gold)'
                }}
              >
                {signal.icon}
              </div>
              {/* Stat Number */}
              <div 
                className="text-2xl md:text-3xl lg:text-4xl font-serif font-light mb-1.5"
                style={{ color: 'var(--black)' }}
              >
                {signal.stat}
              </div>
              {/* Label */}
              <div 
                className="text-xs uppercase tracking-wider font-semibold"
                style={{ 
                  color: 'var(--gray-medium)',
                  letterSpacing: '0.12em'
                }}
              >
                {signal.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partner Badges - Use centralized component */}
        <TrustedByPartners />
      </div>
    </section>
  )
}

