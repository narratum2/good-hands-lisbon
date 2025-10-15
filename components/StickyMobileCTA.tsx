'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px down
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    trackEvent('sticky_cta_clicked', { 
      location: 'mobile_bottom',
      scroll_position: window.scrollY 
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="bg-white border-t border-harbor/10 shadow-lg px-4 py-3">
            <Link 
              href="/book"
              onClick={handleClick}
              className="btn-gold w-full text-center block py-4 text-base font-medium"
            >
              Book Your Experience
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

