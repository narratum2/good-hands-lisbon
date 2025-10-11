'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden" style={{ height: 'calc(100vh - 80px)', marginTop: '80px' }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop"
          alt="Luxury beauty salon in Lisbon"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        >
          <h1 className="font-serif font-normal mb-8 text-balance" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
            Lisbon's Premier Beauty Concierge
          </h1>
          <p className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto font-light" style={{ lineHeight: '1.7' }}>
            We navigate Lisbon's beauty scene for you.<br />
            Expert matching. Perfect results. Every time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#services" className="btn-gold">
              Explore Services
            </a>
            <a href="#booking" className="btn-secondary" style={{ borderColor: 'white', color: 'white' }}>
              Book Now
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-white/80">
          <span className="text-xs uppercase tracking-widest font-medium" style={{ letterSpacing: '0.15em' }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
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
        </div>
      </motion.div>
    </section>
  )
}

