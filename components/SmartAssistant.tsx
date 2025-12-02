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
  const [inputMessage, setInputMessage] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [userId] = useState(() => {
    // Generate unique user ID
    if (typeof window !== 'undefined') {
      let id = localStorage.getItem('goodhands_user_id')
      if (!id) {
        id = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
        localStorage.setItem('goodhands_user_id', id)
      }
      return id
    }
    return 'anonymous'
  })
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'assistant',
      content: "👋 Hi! I'm your Good Hands beauty concierge. How can I help you today?",
      actions: [
        { label: '📅 Book Now', href: '/book' },
        { label: '💬 Ask a Question', href: '#' },
        { label: '📞 Contact Us', href: '/about' },
      ],
    },
  ])
  const [hasInteracted, setHasInteracted] = useState(false)

  // Removed auto-open after 3 seconds - better UX to let users initiate
  // The assistant button is visible and accessible when needed

  // Removed scroll-triggered popup - intrusive UX
  // Users can click the assistant button when they need help

  const handleOpen = () => {
    setIsOpen(true)
    setIsMinimized(false)
    setHasInteracted(true)
  }

  const handleMinimize = () => {
    setIsMinimized(true)
    setTimeout(() => setIsOpen(false), 300)
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isSending) return

    const userMessage: Message = {
      id: Date.now(),
      type: 'user',
      content: inputMessage
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsSending(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: inputMessage,
          userId,
          userName: '', // Can be filled from booking data later
          userEmail: ''
        })
      })

      const data = await response.json()

      if (data.reply) {
        const assistantMessage: Message = {
          id: Date.now() + 1,
          type: 'assistant',
          content: data.reply,
          actions: getActionsForMessage(inputMessage)
        }
        setMessages(prev => [...prev, assistantMessage])
      }
    } catch (error) {
      console.error('Chat error:', error)
      const errorMessage: Message = {
        id: Date.now() + 1,
        type: 'assistant',
        content: "Sorry, I'm having trouble connecting. Please email us at hello@beautysalonlisbon.com or use our booking page."
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsSending(false)
    }
  }

  const getActionsForMessage = (message: string): Array<{ label: string; href: string }> => {
    const lowerMessage = message.toLowerCase()
    
    if (lowerMessage.includes('book') || lowerMessage.includes('appointment')) {
      return [{ label: '📅 Book Now', href: '/book' }]
    }
    
    if (lowerMessage.includes('hair')) {
      return [{ label: '💇 Book Hair Service', href: '/book?service=hair' }]
    }
    
    if (lowerMessage.includes('nail')) {
      return [{ label: '💅 Book Nail Service', href: '/book?service=nails' }]
    }
    
    if (lowerMessage.includes('spa') || lowerMessage.includes('massage')) {
      return [{ label: '✨ Book Spa Service', href: '/book?service=wellness' }]
    }
    
    return [
      { label: '📅 Book Service', href: '/book' },
      { label: '📞 Contact Us', href: '/about' }
    ]
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

            {/* Chat Input */}
            <div className="border-t border-gray-light/20 p-4 bg-white">
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your question..."
                  className="flex-1 px-4 py-2 border border-gray-light/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-sm"
                  disabled={isSending}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isSending}
                  className="px-4 py-2 bg-gold text-white rounded-lg hover:bg-gold-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSending ? '...' : '→'}
                </button>
              </div>
              
              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/book"
                  onClick={() => setHasInteracted(true)}
                  className="flex items-center justify-center gap-2 px-3 py-2 bg-gold/10 hover:bg-gold/20 text-gold rounded-lg text-xs font-medium transition-colors"
                >
                  <Calendar className="w-3 h-3" />
                  Book Now
                </Link>
                <Link
                  href="/services"
                  className="flex items-center justify-center gap-2 px-3 py-2 bg-shell hover:bg-gray-light/30 text-ink rounded-lg text-xs font-medium transition-colors"
                >
                  <MessageCircle className="w-3 h-3" />
                  Services
                </Link>
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

