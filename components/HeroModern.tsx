'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroModern() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-white" style={{ height: 'calc(100vh - 80px)', marginTop: '80px', minHeight: '500px', maxHeight: '800px' }}>
      {/* Background Image with Better Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/brand-images/hero-salon-interior.png"
          alt="Luxury beauty salon in Lisbon with sage green arches"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Stronger, more consistent overlay for better text readability */}
        <div className="absolute inset-0 bg-ink/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-serif font-medium mb-6 md:mb-8 text-white" style={{ fontSize: 'clamp(2.5rem, 7vw, 4rem)', lineHeight: '1.2', letterSpacing: '-0.01em' }}>
            Lisbon's Premier Beauty Concierge
          </h1>
          <p className="text-lg md:text-xl mb-10 md:mb-12 text-white max-w-2xl mx-auto font-normal" style={{ lineHeight: '1.6' }}>
            We match you with Lisbon's finest vetted beauty professionals. No trial-and-error. Just perfect results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
            <a href="/book" className="btn-gold w-full sm:w-auto text-lg px-10 py-4">
              Book Now
            </a>
            <a href="/services" className="btn-secondary w-full sm:w-auto text-lg px-10 py-4" style={{ borderColor: 'white', color: 'white', backgroundColor: 'transparent' }}>
              View Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Simplified Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden lg:flex"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-white/70"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
