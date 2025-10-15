'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if already shown this session
    const shown = sessionStorage.getItem('exitIntentShown')
    if (shown) {
      setHasShown(true)
      return
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from top (closing tab/window)
      if (e.clientY <= 0 && !hasShown && !isVisible) {
        setIsVisible(true)
        setHasShown(true)
        sessionStorage.setItem('exitIntentShown', 'true')
        trackEvent('exit_intent_shown', { timestamp: new Date().toISOString() })
      }
    }

    // Add small delay before activating to avoid false triggers
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave)
    }, 3000)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [hasShown, isVisible])

  const handleClose = () => {
    setIsVisible(false)
    trackEvent('exit_intent_closed', { action: 'close_button' })
  }

  const handleCTA = (action: string) => {
    trackEvent('exit_intent_cta_clicked', { action })
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-ink/60 backdrop-blur-sm z-[9998]"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] w-[90%] max-w-md"
          >
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-harbor/10 hover:bg-harbor/20 transition-colors z-10"
                aria-label="Close popup"
              >
                <svg className="w-5 h-5 text-harbor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Content */}
              <div className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                {/* Headline */}
                <h2 className="text-2xl font-serif text-center mb-3">
                  Wait! Before You Go...
                </h2>

                {/* Subheadline */}
                <p className="text-harbor text-center mb-6">
                  Get <strong className="text-gold">15% off</strong> your first beauty experience in Lisbon
                </p>

                {/* Benefits */}
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Vetted professionals, perfect matches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Expert concierge service included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>100% satisfaction guaranteed</span>
                  </li>
                </ul>

                {/* CTAs */}
                <div className="space-y-3">
                  <Link 
                    href="/book" 
                    onClick={() => handleCTA('book_now')}
                    className="btn-gold w-full text-center block"
                  >
                    Claim Your 15% Off
                  </Link>
                  <button
                    onClick={handleClose}
                    className="w-full text-sm text-harbor hover:text-ink transition-colors"
                  >
                    No thanks, I'll pay full price
                  </button>
                </div>

                {/* Fine print */}
                <p className="text-xs text-harbor/60 text-center mt-4">
                  * First-time customers only. Use code WELCOME15 at checkout.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

