'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroModern() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=2000&q=80"
          alt="Luxury beauty experience in Lisbon"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink/80" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 h-full flex items-center justify-center"
      >
        <div className="container-custom text-center text-white px-4">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm text-gold px-6 py-3 rounded-full text-sm font-medium border border-gold/30">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              Lisbon's Premier Beauty Concierge
            </span>
          </motion.div>

          {/* Main Headline - Staggered Animation */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="block"
            >
              Stop Wasting Time
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="block bg-gradient-to-r from-gold via-amber-300 to-gold bg-clip-text text-transparent"
            >
              Finding Beauty
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="block"
            >
              Professionals
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-xl md:text-2xl lg:text-3xl mb-12 text-porcelain/90 max-w-3xl mx-auto font-light leading-relaxed"
          >
            We navigate Lisbon's beauty scene for you.
            <span className="block mt-2 text-gold font-normal">
              Expert matching. Perfect results. Every time.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/#booking"
              className="group relative px-8 py-4 bg-gold text-ink font-semibold rounded-full text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-gold/50"
            >
              <span className="relative z-10">Book Your Experience</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-400 to-gold"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            
            <Link
              href="/services"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full text-lg border border-white/20 transition-all hover:bg-white/20 hover:scale-105"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-porcelain/70"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>200+ Five-Star Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>100% Vetted Professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>24h Confirmation</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  )
}

