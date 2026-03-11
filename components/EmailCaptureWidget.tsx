'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { trackEvent } from '@/lib/analytics'

export default function EmailCaptureWidget() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    trackEvent('email_capture_submitted', { source: 'footer_widget' })
    
    setTimeout(() => {
      setStatus('success')
      setMessage('Thank you. Check your inbox for exclusive beauty tips.')
      setEmail('')
      
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
    }, 1000)
  }

  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-3 font-sans">
        Beauty Insider
      </h3>
      <p className="text-sm text-white/50 mb-6 max-w-none">
        Exclusive Lisbon beauty guides and seasonal offers, delivered monthly.
      </p>

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-sm text-gold"
          >
            {message}
          </motion.p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              disabled={status === 'loading'}
              className="flex-1 px-4 py-3 text-sm bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 bg-gold text-ink text-xs font-semibold uppercase tracking-[0.1em] hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {status === 'loading' ? '...' : 'Join'}
            </button>
          </form>
        )}
      </AnimatePresence>

      <p className="text-xs text-white/20 mt-3">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  )
}
