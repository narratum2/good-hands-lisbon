'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, Calendar, MessageCircle, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface Message {
  id: number
  type: 'assistant' | 'user'
  content: string
  actions?: Array<{ label: string; href: string }>
}

export default function SmartAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'assistant',
      content: "👋 Hi! I'm your Good Hands beauty concierge. Looking for something specific?",
      actions: [
        { label: '💇 Book Hair', href: '/book?service=hair' },
        { label: '💅 Book Nails', href: '/book?service=nails' },
        { label: '✨ Book Spa', href: '/book?service=skincare' },
      ],
    },
  ])
  const [hasInteracted, setHasInteracted] = useState(false)

  // Show assistant after 3 seconds if user hasn't interacted
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setIsOpen(true)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [hasInteracted])

  // Track scroll depth and offer help
  useEffect(() => {
    let scrollThreshold = 0.5
    const handleScroll = () => {
      const scrolled = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = scrolled / height

      if (scrollPercent > scrollThreshold && !hasInteracted) {
        scrollThreshold = 1 // Don't trigger again
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            type: 'assistant',
            content: "Still browsing? Let me help you find the perfect service! 🎯",
            actions: [
              { label: '📅 Book Now', href: '/book' },
              { label: '💬 Chat with Us', href: '/contact' },
            ],
          },
        ])
        setIsOpen(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasInteracted])

  const handleOpen = () => {
    setIsOpen(true)
    setIsMinimized(false)
    setHasInteracted(true)
  }

  const handleMinimize = () => {
    setIsMinimized(true)
    setTimeout(() => setIsOpen(false), 300)
  }

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOpen}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-gold/50 transition-shadow"
            aria-label="Open Good Hands Assistant"
          >
            {/* Sophisticated Cat Mascot */}
            <svg className="w-9 h-9" viewBox="0 0 32 32" fill="currentColor">
              {/* Cat head */}
              <ellipse cx="16" cy="18" rx="8" ry="7" fill="currentColor"/>
              {/* Cat ears */}
              <path d="M10 12L12 8L14 12Z M18 12L20 8L22 12Z" fill="currentColor"/>
              {/* Inner ears */}
              <path d="M11 11L12 9L13 11Z M19 11L20 9L21 11Z" fill="white" opacity="0.3"/>
              {/* Eyes */}
              <ellipse cx="13" cy="16" rx="1.5" ry="2" fill="white"/>
              <ellipse cx="19" cy="16" rx="1.5" ry="2" fill="white"/>
              <ellipse cx="13" cy="16.5" rx="0.8" ry="1.2" fill="black"/>
              <ellipse cx="19" cy="16.5" rx="0.8" ry="1.2" fill="black"/>
              {/* Nose */}
              <path d="M16 19L15 20L17 20Z" fill="white" opacity="0.8"/>
              {/* Mouth */}
              <path d="M16 21Q14 22 12 21 M16 21Q18 22 20 21" stroke="white" strokeWidth="0.8" fill="none" opacity="0.7"/>
              {/* Whiskers */}
              <path d="M8 17L11 17 M21 17L24 17 M8 19L11 19 M21 19L24 19" stroke="white" strokeWidth="0.6" opacity="0.5"/>
              {/* Bow tie */}
              <path d="M14 24L16 26L18 24L16 25Z" fill="white" opacity="0.9"/>
              <circle cx="16" cy="25" r="0.8" fill="white"/>
            </svg>
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Assistant Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: isMinimized ? 0.9 : 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-light/20 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-gold to-gold-dark text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Good Hands Assistant</h3>
                  <p className="text-xs text-white/80">Always here to help</p>
                </div>
              </div>
              <button
                onClick={handleMinimize}
                className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Close assistant"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-shell/30">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-4 ${
                      message.type === 'user'
                        ? 'bg-gold text-white rounded-br-sm'
                        : 'bg-white shadow-sm rounded-bl-sm'
                    }`}
                  >
                    <p className={`text-sm leading-relaxed ${message.type === 'user' ? 'text-white' : 'text-ink'}`}>
                      {message.content}
                    </p>
                    
                    {/* Action Buttons */}
                    {message.actions && (
                      <div className="mt-3 space-y-2">
                        {message.actions.map((action, idx) => (
                          <Link
                            key={idx}
                            href={action.href}
                            onClick={() => setHasInteracted(true)}
                            className="block w-full text-center px-4 py-2 bg-gold/10 hover:bg-gold/20 text-gold rounded-lg text-sm font-medium transition-colors"
                          >
                            {action.label}
                            <ChevronRight className="inline w-4 h-4 ml-1" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions Footer */}
            <div className="border-t border-gray-light/20 p-4 bg-white">
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/book"
                  onClick={() => setHasInteracted(true)}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gold text-white rounded-lg text-sm font-medium hover:bg-gold-dark transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  Book Now
                </Link>
                <button
                  onClick={() => {
                    setMessages((prev) => [
                      ...prev,
                      {
                        id: Date.now(),
                        type: 'assistant',
                        content: "Great! What service are you interested in? 💁‍♀️",
                        actions: [
                          { label: 'Hair Services', href: '/services/hair' },
                          { label: 'Nail Services', href: '/services/nails' },
                          { label: 'Spa & Wellness', href: '/services/wellness' },
                        ],
                      },
                    ])
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-shell text-ink rounded-lg text-sm font-medium hover:bg-gray-light/30 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Ask Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Prominent Booking Bar (Full Width) */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, type: 'spring' }}
        className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-gold via-gold-dark to-gold text-white shadow-2xl md:hidden"
      >
        <div className="container-custom py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm font-medium">Ready for your transformation?</p>
              <p className="text-xs text-white/80">Book in 2 minutes</p>
            </div>
            <Link
              href="/book"
              className="px-6 py-3 bg-white text-gold rounded-lg font-semibold hover:bg-white/90 transition-colors whitespace-nowrap shadow-lg"
            >
              Book Now →
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  )
}

