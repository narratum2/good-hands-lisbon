'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ArrowLeft, ArrowRight, CheckCircle, Calendar, MapPin, User, Mail, Phone, MessageSquare, Loader2, AlertCircle } from 'lucide-react'

interface BookingData {
  service: string
  date: string
  time: string
  neighborhood: string
  name: string
  email: string
  phone: string
  message: string
}

const STORAGE_KEY = 'goodhands_booking_draft'

const services = [
  { id: 'hair', name: 'Hair Styling', description: 'Color, cuts, styling', duration: '90 min', price: 'From €105' },
  { id: 'nails', name: 'Nails', description: 'Manicures, pedicures, art', duration: '60 min', price: 'From €60' },
  { id: 'skincare', name: 'Skincare', description: 'Facials, treatments', duration: '75 min', price: 'From €125' },
  { id: 'makeup', name: 'Makeup', description: 'Events, weddings, lessons', duration: '45 min', price: 'From €92' },
  { id: 'wellness', name: 'Wellness', description: 'Massage, spa, relaxation', duration: '60 min', price: 'From €120' },
  { id: 'wedding', name: 'Wedding Package', description: 'Complete bridal experience', duration: 'Custom', price: 'From €800' },
]

const neighborhoods = [
  { id: 'chiado', name: 'Chiado', description: 'Historic elegance', recommended: ['hair', 'makeup'] },
  { id: 'principe-real', name: 'Príncipe Real', description: 'Bohemian charm', recommended: ['wellness', 'skincare'] },
  { id: 'baixa', name: 'Baixa', description: 'Grand boulevards', recommended: ['hair', 'nails'] },
  { id: 'avenida', name: 'Avenida', description: 'Upscale district', recommended: ['skincare', 'makeup'] },
  { id: 'alfama', name: 'Alfama', description: 'Ancient streets', recommended: ['wellness'] },
  { id: 'belem', name: 'Belém', description: 'Riverside beauty', recommended: ['wellness', 'spa'] },
  { id: 'cascais', name: 'Cascais', description: 'Coastal elegance', recommended: ['wellness', 'wedding'] },
  { id: 'sintra', name: 'Sintra', description: 'Enchanted hills', recommended: ['wellness', 'wedding'] },
]

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
]

export default function BookingPage() {
  const searchParams = useSearchParams()
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [bookingRef, setBookingRef] = useState<string>('')
  const [bookingData, setBookingData] = useState<BookingData>({
    service: searchParams?.get('service') || '',
    date: '',
    time: '',
    neighborhood: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [validationErrors, setValidationErrors] = useState<Partial<Record<keyof BookingData, string>>>({})

  const totalSteps = 4

  // Load saved draft from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        // Only restore if less than 24 hours old
        if (parsed.timestamp && Date.now() - parsed.timestamp < 86400000) {
          setBookingData(parsed.data)
        } else {
          localStorage.removeItem(STORAGE_KEY)
        }
      } catch (e) {
        console.error('Failed to restore booking draft', e)
      }
    }
  }, [])

  // Auto-save to localStorage on data change
  useEffect(() => {
    if (bookingData.service || bookingData.name) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        data: bookingData,
        timestamp: Date.now(),
      }))
    }
  }, [bookingData])

  // Track analytics
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'booking_flow_started', {
        source: searchParams?.get('utm_source') || 'direct',
        service_preselected: bookingData.service || 'none',
      })
    }
  }, [])

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    // Basic validation - accepts +351 format
    return phone.length >= 9
  }

  const validateStep4 = (): boolean => {
    const errors: Partial<Record<keyof BookingData, string>> = {}
    
    if (!bookingData.name.trim()) {
      errors.name = 'Name is required'
    }
    if (!validateEmail(bookingData.email)) {
      errors.email = 'Please enter a valid email address'
    }
    if (!validatePhone(bookingData.phone)) {
      errors.phone = 'Please enter a valid phone number'
    }
    
    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1)
      
      // Track step completion
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', `booking_step_${step}_completed`, {
          service: bookingData.service,
          timestamp: new Date().toISOString(),
        })
      }
    }
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = async () => {
    // Validate before submitting
    if (!validateStep4()) {
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    // Track submission attempt
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'booking_submit_attempted', {
        service: bookingData.service,
        date: bookingData.date,
        location: bookingData.neighborhood,
      })
    }

    try {
      // Capture UTM parameters
      const utmParams = {
        utm_source: searchParams?.get('utm_source') || '',
        utm_medium: searchParams?.get('utm_medium') || '',
        utm_campaign: searchParams?.get('utm_campaign') || '',
      }

      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...bookingData,
          ...utmParams,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        const ref = data.bookingId || `GH-${Date.now().toString().slice(-6)}`
        setBookingRef(ref)
        
        // Clear saved draft
        localStorage.removeItem(STORAGE_KEY)
        
        // Track success
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'booking_submit_success', {
            booking_id: ref,
            service: bookingData.service,
            total_time: Date.now(), // Could track from start
          })
        }
        
        setStep(5) // Success screen
      } else {
        throw new Error('Booking submission failed')
      }
    } catch (error) {
      console.error('Booking error:', error)
      setSubmitError('We couldn\'t process your request right now. Please try again or contact us directly.')
      
      // Track error
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'booking_submit_error', {
          error_message: error instanceof Error ? error.message : 'Unknown error',
        })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const selectedService = services.find(s => s.id === bookingData.service)

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <div className="bg-shell border-b border-gray-light/20">
        <div className="container-custom py-8">
          <Link href="/" className="inline-flex items-center gap-2 text-harbor hover:text-gold transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
          <h1 className="text-3xl md:text-4xl font-serif text-ink mb-2">
            Request Your Experience
          </h1>
          <p className="text-harbor text-lg">
            Tell us your preferences and we&apos;ll curate the perfect match for you
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      {step <= totalSteps && (
        <div className="bg-white border-b border-gray-light/20 sticky top-20 z-40">
          <div className="container-custom py-4">
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center flex-1">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
                    step >= s ? 'bg-gold border-gold text-white' : 'bg-white border-gray-light text-harbor'
                  }`}>
                    {step > s ? <CheckCircle className="w-5 h-5" /> : s}
                  </div>
                  {s < 4 && (
                    <div className={`flex-1 h-1 mx-2 transition-all ${
                      step > s ? 'bg-gold' : 'bg-gray-light'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-harbor">
                Step {step} of {totalSteps}: {
                  step === 1 ? 'Choose Service' :
                  step === 2 ? 'Select Date & Time' :
                  step === 3 ? 'Location Preference' :
                  'Your Details'
                }
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-serif mb-4">What do you need?</h2>
                  <p className="text-harbor text-lg">Select the service you&apos;re looking for</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => {
                        setBookingData({ ...bookingData, service: service.id })
                        setTimeout(() => nextStep(), 200)
                      }}
                      className={`p-6 rounded-lg border-2 transition-all text-left hover:border-gold hover:shadow-md group ${
                        bookingData.service === service.id
                          ? 'border-gold bg-gold/5 scale-105'
                          : 'border-gray-light/30 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-serif">{service.name}</h3>
                        {bookingData.service === service.id && (
                          <CheckCircle className="w-6 h-6 text-gold" />
                        )}
                      </div>
                      <p className="text-sm text-harbor mb-3">{service.description}</p>
                      <div className="flex items-center justify-between text-xs text-harbor">
                        <span>{service.duration}</span>
                        <span className="text-gold font-medium">{service.price}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-serif mb-4">When works for you?</h2>
                  <p className="text-harbor text-lg">Choose your preferred date and time</p>
                  {selectedService && (
                    <p className="text-sm text-gold mt-2">
                      {selectedService.name} • {selectedService.duration}
                    </p>
                  )}
                </div>

                <div className="bg-shell rounded-lg p-8 mb-8">
                  <label className="block text-sm font-medium mb-3 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gold" />
                    Select Date
                  </label>
                  <input
                    type="date"
                    value={bookingData.date}
                    onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                    min={new Date(Date.now() + 86400000).toISOString().split('T')[0]} // Tomorrow
                    className="input-field mb-6"
                  />

                  <label className="block text-sm font-medium mb-3">
                    Preferred Time
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setBookingData({ ...bookingData, time })}
                        className={`p-3 rounded border-2 transition-all ${
                          bookingData.time === time
                            ? 'border-gold bg-gold text-white'
                            : 'border-gray-light/30 hover:border-gold/50 bg-white'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-harbor mt-4">
                    ⏰ These are preferences, not confirmed times. We&apos;ll match you with the perfect professional and confirm details within 24 hours.
                  </p>
                </div>

                <div className="flex gap-4">
                  <button onClick={prevStep} className="btn-secondary flex items-center justify-center gap-2 flex-1">
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={!bookingData.date || !bookingData.time}
                    className="btn-gold flex items-center justify-center gap-2 flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Location */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-serif mb-4">Where in Lisbon?</h2>
                  <p className="text-harbor text-lg">Choose your preferred neighborhood</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {neighborhoods.map((neighborhood) => {
                    const isRecommended = neighborhood.recommended.includes(bookingData.service)
                    return (
                      <button
                        key={neighborhood.id}
                        onClick={() => {
                          setBookingData({ ...bookingData, neighborhood: neighborhood.id })
                        }}
                        className={`p-6 rounded-lg border-2 transition-all text-left hover:border-gold hover:shadow-md ${
                          bookingData.neighborhood === neighborhood.id
                            ? 'border-gold bg-gold/5'
                            : 'border-gray-light/30 bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-gold" />
                            <h3 className="text-lg font-serif">{neighborhood.name}</h3>
                          </div>
                          {isRecommended && (
                            <span className="text-xs bg-gold/20 text-gold px-2 py-1 rounded">Recommended</span>
                          )}
                        </div>
                        <p className="text-sm text-harbor">{neighborhood.description}</p>
                      </button>
                    )
                  })}
                </div>

                <div className="flex gap-4">
                  <button onClick={prevStep} className="btn-secondary flex items-center justify-center gap-2 flex-1">
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={!bookingData.neighborhood}
                    className="btn-gold flex items-center justify-center gap-2 flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Contact Details */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-serif mb-4">Almost there!</h2>
                  <p className="text-harbor text-lg">Just need a few details to send your request</p>
                </div>

                {/* Error Message */}
                {submitError && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 mb-6 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-red-900 font-medium mb-1">Request Error</p>
                      <p className="text-red-700 text-sm">{submitError}</p>
                    </div>
                  </div>
                )}

                <div className="bg-shell rounded-lg p-8 mb-8 space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <User className="w-4 h-4 text-gold" />
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={bookingData.name}
                      onChange={(e) => {
                        setBookingData({ ...bookingData, name: e.target.value })
                        setValidationErrors({ ...validationErrors, name: undefined })
                      }}
                      className={`input-field ${validationErrors.name ? 'border-red-500' : ''}`}
                      placeholder="John Doe"
                    />
                    {validationErrors.name && (
                      <p className="text-red-600 text-sm mt-1">{validationErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gold" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={bookingData.email}
                      onChange={(e) => {
                        setBookingData({ ...bookingData, email: e.target.value })
                        setValidationErrors({ ...validationErrors, email: undefined })
                      }}
                      onBlur={() => {
                        if (bookingData.email && !validateEmail(bookingData.email)) {
                          setValidationErrors({ ...validationErrors, email: 'Please enter a valid email address' })
                        }
                      }}
                      className={`input-field ${validationErrors.email ? 'border-red-500' : ''}`}
                      placeholder="john@example.com"
                    />
                    {validationErrors.email && (
                      <p className="text-red-600 text-sm mt-1">{validationErrors.email}</p>
                    )}
                    <p className="text-xs text-harbor/70 mt-1">We&apos;ll only contact you about this booking</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gold" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={bookingData.phone}
                      onChange={(e) => {
                        setBookingData({ ...bookingData, phone: e.target.value })
                        setValidationErrors({ ...validationErrors, phone: undefined })
                      }}
                      className={`input-field ${validationErrors.phone ? 'border-red-500' : ''}`}
                      placeholder="+351 912 345 678"
                    />
                    {validationErrors.phone && (
                      <p className="text-red-600 text-sm mt-1">{validationErrors.phone}</p>
                    )}
                    <p className="text-xs text-harbor/70 mt-1">Format: +351 XXX XXX XXX</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-gold" />
                      Additional Details (Optional)
                    </label>
                    <textarea
                      value={bookingData.message}
                      onChange={(e) => setBookingData({ ...bookingData, message: e.target.value })}
                      className="input-field resize-none"
                      rows={4}
                      placeholder="Any specific requests or preferences?"
                    />
                  </div>

                  {/* Privacy Reassurance */}
                  <div className="flex items-start gap-2 text-xs text-harbor/70 bg-white p-3 rounded">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <p>Your data is secure. We use it only to coordinate your booking and will never share it with third parties.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={prevStep} 
                    className="btn-secondary flex items-center justify-center gap-2 flex-1"
                    disabled={isSubmitting}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting || !bookingData.name || !bookingData.email || !bookingData.phone}
                    className="btn-gold flex items-center justify-center gap-2 flex-1 disabled:opacity-50 disabled:cursor-not-allowed relative"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting request...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <CheckCircle className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {submitError && (
                  <div className="mt-4 text-center">
                    <button
                      onClick={() => setSubmitError(null)}
                      className="text-gold hover:underline text-sm"
                    >
                      Dismiss error and try again
                    </button>
                  </div>
                )}
              </motion.div>
            )}

            {/* Step 5: Success */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', damping: 15 }}
                  className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="w-12 h-12 text-white" />
                </motion.div>

                <h2 className="text-4xl font-serif mb-2">Request Submitted!</h2>
                <p className="text-gold font-medium text-lg mb-2">Request #{bookingRef}</p>
                <p className="text-harbor text-sm mb-8 max-w-lg mx-auto">
                  Your request is being reviewed by our concierge team. We&apos;re curating the perfect match for you and will respond within 24 hours.
                </p>

                {/* Request Summary */}
                <div className="bg-shell rounded-lg p-8 max-w-md mx-auto mb-8 text-left">
                  <h3 className="font-serif text-xl mb-4 text-center">Your Preferences</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-harbor">Service:</span>
                      <span className="font-medium">{selectedService?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-harbor">Date:</span>
                      <span className="font-medium">{new Date(bookingData.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-harbor">Time:</span>
                      <span className="font-medium">{bookingData.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-harbor">Location:</span>
                      <span className="font-medium capitalize">{bookingData.neighborhood.replace('-', ' ')}</span>
                    </div>
                  </div>
                </div>

                {/* What's Next */}
                <div className="bg-white rounded-lg p-6 max-w-md mx-auto mb-8 border border-gray-light/20">
                  <h3 className="font-serif text-lg mb-4">What Happens Next?</h3>
                  <ul className="text-left space-y-3 text-sm text-harbor">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span>Request confirmation sent to {bookingData.email}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span>Our concierge team reviews your preferences and curates 2-3 perfect professional matches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span>We&apos;ll send you their profiles with availability and pricing within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span>You choose your preferred match and we coordinate everything</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-gray-light/20">
                    <p className="text-xs text-harbor italic">
                      💎 This is curation, not instant booking. Quality matches take time, but are worth it.
                    </p>
                  </div>
                </div>

                {/* Next Actions - Beautiful Loop Closure */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
                  <a
                    href={`data:text/calendar;charset=utf8,${encodeURIComponent(`BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:Good Hands - ${selectedService?.name}
DTSTART:${bookingData.date.replace(/-/g, '')}T${bookingData.time.replace(':', '')}00
DURATION:PT${selectedService?.duration.split(' ')[0]}M
DESCRIPTION:Booking ${bookingRef} - ${selectedService?.name} in ${bookingData.neighborhood}
LOCATION:${bookingData.neighborhood}, Lisbon
END:VEVENT
END:VCALENDAR`)}`}
                    download={`goodhands-booking-${bookingRef}.ics`}
                    className="btn-gold flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    Add to Calendar
                  </a>

                  <Link
                    href="/book"
                    onClick={() => {
                      setStep(1)
                      setBookingData({
                        service: '',
                        date: '',
                        time: '',
                        neighborhood: '',
                        name: bookingData.name, // Preserve contact info
                        email: bookingData.email,
                        phone: bookingData.phone,
                        message: '',
                      })
                      setBookingRef('')
                    }}
                    className="btn-secondary flex items-center justify-center gap-2"
                  >
                    Request Another Service
                  </Link>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Link href="/services" className="text-harbor hover:text-gold transition-colors text-sm">
                    ← Browse More Services
                  </Link>
                  <Link href="/" className="text-harbor hover:text-gold transition-colors text-sm">
                    Return to Homepage
                  </Link>
                </div>

                <p className="text-xs text-harbor/60 mt-8">
                  Questions? Contact us at{' '}
                  <a href="mailto:hello@goodhands.com" className="text-gold hover:underline">
                    hello@goodhands.com
                  </a>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
