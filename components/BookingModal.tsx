'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import BookingForm from './BookingForm'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />

          {/* Sliding Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full md:w-[600px] lg:w-[700px] bg-white shadow-2xl z-[101] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-harbor/10 hover:bg-harbor/20 transition-colors z-10"
              aria-label="Close booking panel"
            >
              <X className="w-5 h-5 text-ink" />
            </button>

            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-serif text-ink mb-3">
                  Book Your Experience
                </h2>
                <p className="text-harbor text-lg">
                  Tell us what you need. We'll match you with the perfect professional.
                </p>
              </div>

              {/* Booking Form */}
              <BookingForm />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

