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
    
    // Simulate API call (replace with actual implementation)
    setTimeout(() => {
      setStatus('success')
      setMessage('Thank you! Check your inbox for exclusive beauty tips.')
      setEmail('')
      
      // Reset after 5 seconds
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
    }, 1000)
  }

  return (
    <div className="bg-sage/10 rounded-lg p-6">
      <div className="flex items-start gap-3 mb-4">
        <div className="flex-shrink-0 w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="font-serif text-lg mb-1">Beauty Insider Tips</h3>
          <p className="text-sm text-harbor">
            Get exclusive Lisbon beauty guides & special offers
          </p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 text-sm text-green-700 bg-green-50 p-3 rounded"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{message}</span>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              disabled={status === 'loading'}
              className="flex-1 px-4 py-2 text-sm border border-harbor/20 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-4 py-2 bg-gold text-ink text-sm font-medium rounded hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {status === 'loading' ? 'Joining...' : 'Subscribe'}
            </button>
          </form>
        )}
      </AnimatePresence>

      <p className="text-xs text-harbor/60 mt-2">
        No spam, ever. Unsubscribe anytime.
      </p>
    </div>
  )
}

