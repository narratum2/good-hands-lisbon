'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroModern() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-white" style={{ height: 'calc(100vh - 80px)', marginTop: '80px', minHeight: '600px', maxHeight: '900px' }}>
      {/* Full-Bleed Background Image - VOGUE STYLE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/brand-images/hero-salon-interior.png"
          alt="Luxury beauty salon in Lisbon with sage green arches"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Subtle cinematic gradient overlay - 60% for more image visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content - Editorial Layout */}
      <div className="relative z-10 container-custom text-center text-white px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-5xl mx-auto"
        >
          {/* Eyebrow - Editorial Detail */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/80 mb-6 md:mb-8 font-semibold"
          >
            Lisbon's Premier Beauty Concierge
          </motion.p>
          
          {/* Large, Confident Headline */}
          <h1 className="font-serif font-light mb-8 md:mb-12 text-white" style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', lineHeight: '1.05', letterSpacing: '-0.02em' }}>
            The Beauty Concierge
            <br />
            Lisbon Trusts
          </h1>
          
          {/* Refined Subheading */}
          <p className="text-base md:text-lg mb-12 md:mb-16 text-white/90 max-w-2xl mx-auto font-light" style={{ lineHeight: '1.7', letterSpacing: '0.01em' }}>
            Lisbon's most exceptional beauty professionals. 
            Proven expertise. Flawless results. Every time.
          </p>
          
          {/* Minimal, Sophisticated CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
            <a href="/book" className="btn-gold w-full sm:w-auto">
              Book Your Experience
            </a>
            <a href="/services" className="btn-secondary-light w-full sm:w-auto">
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Refined Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 hidden lg:flex"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-white/60"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
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
