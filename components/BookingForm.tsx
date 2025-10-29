'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TrustBadges from './TrustBadges'
import LoadingSpinner from './ui/LoadingSpinner'

interface BookingFormData {
  name: string
  email: string
  phone: string
  service: string
  neighborhood: string
  date: string
  time: string
  message: string
}

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    neighborhood: '',
    date: '',
    time: '',
    message: '',
  })
  const [currentStep, setCurrentStep] = useState(1)
  const [isMobile, setIsMobile] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.name && formData.email && formData.phone)
      case 2:
        return !!(formData.service && formData.date && formData.time)
      case 3:
        return true // Optional fields
      default:
        return false
    }
  }

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Capture UTM parameters
      const urlParams = new URLSearchParams(window.location.search)
      const utmParams = {
        utm_source: urlParams.get('utm_source') || '',
        utm_medium: urlParams.get('utm_medium') || '',
        utm_campaign: urlParams.get('utm_campaign') || '',
        utm_term: urlParams.get('utm_term') || '',
        utm_content: urlParams.get('utm_content') || '',
      }

      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          ...utmParams,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setCurrentStep(1)
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          neighborhood: '',
          date: '',
          time: '',
          message: '',
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Booking error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="booking" className="section-padding bg-white scroll-mt-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4">
              Request Your Service
            </h2>
            <p className="text-harbor text-lg mb-4">
              Tell us what you need. We'll respond within 2 hours with availability and pricing.
            </p>
            <div className="inline-flex items-center gap-2 bg-gold/10 px-6 py-3 rounded-lg">
              <span className="text-2xl">✨</span>
              <p className="text-sm font-medium text-gold">
                On-site concierge service • Premium rates apply
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-shell rounded-lg p-8 md:p-12">
            {/* Progress indicator for mobile */}
            {isMobile && (
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-harbor">
                    Step {currentStep} of 3
                  </span>
                  <span className="text-sm font-medium text-harbor">
                    {Math.round((currentStep / 3) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-porcelain h-2 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gold"
                    initial={{ width: '33%' }}
                    animate={{ width: `${(currentStep / 3) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="flex justify-between mt-3 text-xs text-harbor/60">
                  <span className={currentStep >= 1 ? 'text-gold font-medium' : ''}>
                    Contact
                  </span>
                  <span className={currentStep >= 2 ? 'text-gold font-medium' : ''}>
                    Service
                  </span>
                  <span className={currentStep >= 3 ? 'text-gold font-medium' : ''}>
                    Details
                  </span>
                </div>
              </div>
            )}

            {/* Mobile: Step-by-step */}
            {isMobile ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step 1: Contact Info */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="input-field"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="input-field"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="input-field"
                          placeholder="+351..."
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 2: Service Details */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium mb-2">
                          Service Type *
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="input-field"
                        >
                          <option value="">Select a service</option>
                          <option value="hair">Hair Styling</option>
                          <option value="nails">Nail Care</option>
                          <option value="skincare">Skincare</option>
                          <option value="makeup">Makeup</option>
                          <option value="wellness">Wellness</option>
                          <option value="wedding">Wedding Package</option>
                          <option value="retreat">Retreat Package</option>
                          <option value="corporate">Corporate Package</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="date" className="block text-sm font-medium mb-2">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="input-field"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>

                      <div>
                        <label htmlFor="time" className="block text-sm font-medium mb-2">
                          Preferred Time *
                        </label>
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="input-field"
                        >
                          <option value="">Select a time</option>
                          <option value="09:00">9:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="12:00">12:00 PM</option>
                          <option value="13:00">1:00 PM</option>
                          <option value="14:00">2:00 PM</option>
                          <option value="15:00">3:00 PM</option>
                          <option value="16:00">4:00 PM</option>
                          <option value="17:00">5:00 PM</option>
                          <option value="18:00">6:00 PM</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Additional Details */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="neighborhood" className="block text-sm font-medium mb-2">
                          Preferred Neighborhood
                        </label>
                        <select
                          id="neighborhood"
                          name="neighborhood"
                          value={formData.neighborhood}
                          onChange={handleChange}
                          className="input-field"
                        >
                          <option value="">Select a neighborhood</option>
                          <option value="chiado">Chiado</option>
                          <option value="principe-real">Príncipe Real</option>
                          <option value="baixa">Baixa</option>
                          <option value="avenida">Avenida</option>
                          <option value="alfama">Alfama</option>
                          <option value="belem">Belém</option>
                          <option value="sintra">Sintra</option>
                          <option value="cascais">Cascais</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Additional Details
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="input-field resize-none"
                          placeholder="Tell us more about what you're looking for..."
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            ) : (
              /* Desktop: All fields at once */
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Type *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="input-field"
                    >
                      <option value="">Select a service</option>
                      <option value="hair">Hair Styling</option>
                      <option value="nails">Nail Care</option>
                      <option value="skincare">Skincare</option>
                      <option value="makeup">Makeup</option>
                      <option value="wellness">Wellness</option>
                      <option value="wedding">Wedding Package</option>
                      <option value="retreat">Retreat Package</option>
                      <option value="corporate">Corporate Package</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="neighborhood" className="block text-sm font-medium mb-2">
                      Preferred Neighborhood
                    </label>
                    <select
                      id="neighborhood"
                      name="neighborhood"
                      value={formData.neighborhood}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Select a neighborhood</option>
                      <option value="chiado">Chiado</option>
                      <option value="principe-real">Príncipe Real</option>
                      <option value="baixa">Baixa</option>
                      <option value="avenida">Avenida</option>
                      <option value="alfama">Alfama</option>
                      <option value="belem">Belém</option>
                      <option value="sintra">Sintra</option>
                      <option value="cascais">Cascais</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="input-field"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium mb-2">
                      Preferred Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="input-field"
                    >
                      <option value="">Select a time</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="input-field resize-none"
                    placeholder="Tell us more about what you\'re looking for..."
                  />
                </div>
              </>
            )}

            {/* Mobile: Navigation buttons */}
            {isMobile ? (
              <div className="mt-8 flex gap-3">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 btn-secondary"
                  >
                    ← Back
                  </button>
                )}
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!validateStep(currentStep)}
                    className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue →
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </button>
                )}
              </div>
            ) : (
              /* Desktop: Single submit button */
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
              </button>
            )}

            {submitStatus === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center text-sage font-medium"
              >
                Request received! We'll respond within 2 hours with availability, pricing, and next steps.
              </motion.p>
            )}

            {submitStatus === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center text-coral font-medium"
              >
                Something went wrong. Please try again or contact us directly.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}

