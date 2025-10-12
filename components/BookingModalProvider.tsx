'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import BookingModal from './BookingModal'

interface BookingModalContextType {
  openBooking: () => void
  closeBooking: () => void
  isOpen: boolean
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined)

export function useBookingModal() {
  const context = useContext(BookingModalContext)
  if (!context) {
    throw new Error('useBookingModal must be used within BookingModalProvider')
  }
  return context
}

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openBooking = () => setIsOpen(true)
  const closeBooking = () => setIsOpen(false)

  return (
    <BookingModalContext.Provider value={{ openBooking, closeBooking, isOpen }}>
      {children}
      <BookingModal isOpen={isOpen} onClose={closeBooking} />
    </BookingModalContext.Provider>
  )
}

