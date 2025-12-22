'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroModern() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-black" style={{ height: 'calc(100vh - 80px)', marginTop: '80px', minHeight: '650px', maxHeight: '1000px' }}>
      {/* Full-Bleed Background Image - Boutique-inspired with parallax-like effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="/brand-images/hero-salon-interior.png"
            alt="Luxury beauty salon in Lisbon with sage green arches"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            quality={90}
          />
        </motion.div>
        {/* Multi-layer gradient for depth and drama */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        {/* Subtle vignette */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 100%)' }} />
      </div>

      {/* Content - Editorial Layout with staggered animations */}
      <div className="relative z-10 container-custom text-center text-white px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-5xl mx-auto"
        >
          {/* Eyebrow with reveal animation */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/70 mb-8 md:mb-10 font-medium"
          >
            Lisbon's Premier Beauty Concierge
          </motion.p>
          
          {/* Large, Dramatic Headline with split animation */}
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.4, 0, 0.2, 1] }}
            className="font-serif font-light mb-10 md:mb-14 text-white text-center leading-none"
            style={{ fontSize: 'clamp(2.75rem, 9vw, 6.5rem)', letterSpacing: '-0.03em' }}
          >
            <span className="block">The Beauty Concierge</span>
            <span className="block mt-2" style={{ color: 'rgba(255,255,255,0.95)' }}>Lisbon Trusts</span>
          </motion.h1>
          
          {/* Refined Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-base md:text-xl mb-14 md:mb-18 text-white/85 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Lisbon's most exceptional beauty professionals. 
            <span className="hidden md:inline"><br /></span>
            <span className="md:hidden"> </span>
            Proven expertise. Flawless results. Every time.
          </motion.p>
          
          {/* Elegant CTAs with hover effects */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center max-w-md sm:max-w-none mx-auto"
          >
            <a href="/book" className="btn-gold w-full sm:w-auto px-10 py-5 text-sm tracking-[0.15em]">
              Request Your Experience
            </a>
            <a href="/services" className="btn-secondary-light w-full sm:w-auto px-10 py-5 text-sm tracking-[0.15em] border-white/30 hover:border-white hover:bg-white hover:text-black">
              Explore Services
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Refined Scroll Indicator with elegant animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-white/50 hidden md:block">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-white/50 hover:text-white/80 transition-colors cursor-pointer"
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
