'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle, Calendar, MapPin, User, Mail, Phone, MessageSquare } from 'lucide-react'

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

const services = [
  { id: 'hair', name: 'Hair Styling', icon: '💇', description: 'Color, cuts, styling' },
  { id: 'nails', name: 'Nails', icon: '💅', description: 'Manicures, pedicures, art' },
  { id: 'skincare', name: 'Skincare', icon: '✨', description: 'Facials, treatments' },
  { id: 'makeup', name: 'Makeup', icon: '💄', description: 'Events, weddings, lessons' },
  { id: 'wellness', name: 'Wellness', icon: '🧘', description: 'Massage, spa, relaxation' },
  { id: 'wedding', name: 'Wedding Package', icon: '👰', description: 'Complete bridal experience' },
]

const neighborhoods = [
  { id: 'chiado', name: 'Chiado', description: 'Historic elegance' },
  { id: 'principe-real', name: 'Príncipe Real', description: 'Bohemian charm' },
  { id: 'baixa', name: 'Baixa', description: 'Grand boulevards' },
  { id: 'avenida', name: 'Avenida', description: 'Upscale district' },
  { id: 'alfama', name: 'Alfama', description: 'Ancient streets' },
  { id: 'belem', name: 'Belém', description: 'Riverside beauty' },
  { id: 'cascais', name: 'Cascais', description: 'Coastal elegance' },
  { id: 'sintra', name: 'Sintra', description: 'Enchanted hills' },
]

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
]

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [bookingData, setBookingData] = useState<BookingData>({
    service: '',
    date: '',
    time: '',
    neighborhood: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const totalSteps = 4

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = async () => {
    // Submit booking
    console.log('Booking submitted:', bookingData)
    setStep(5) // Success screen
  }

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
            Book Your Experience
          </h1>
          <p className="text-harbor text-lg">
            Let's find your perfect match in just a few steps
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
                  <p className="text-harbor text-lg">Select the service you're looking for</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => {
                        setBookingData({ ...bookingData, service: service.id })
                        nextStep()
                      }}
                      className={`p-6 rounded-lg border-2 transition-all text-left hover:border-gold hover:shadow-md ${
                        bookingData.service === service.id
                          ? 'border-gold bg-gold/5'
                          : 'border-gray-light/30 bg-white'
                      }`}
                    >
                      <div className="text-4xl mb-3">{service.icon}</div>
                      <h3 className="text-xl font-serif mb-2">{service.name}</h3>
                      <p className="text-sm text-harbor">{service.description}</p>
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
                    min={new Date().toISOString().split('T')[0]}
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
                            : 'border-gray-light/30 hover:border-gold/50'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button onClick={prevStep} className="btn-secondary flex-1">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={!bookingData.date || !bookingData.time}
                    className="btn-gold flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
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
                  {neighborhoods.map((neighborhood) => (
                    <button
                      key={neighborhood.id}
                      onClick={() => {
                        setBookingData({ ...bookingData, neighborhood: neighborhood.id })
                        nextStep()
                      }}
                      className={`p-6 rounded-lg border-2 transition-all text-left hover:border-gold hover:shadow-md ${
                        bookingData.neighborhood === neighborhood.id
                          ? 'border-gold bg-gold/5'
                          : 'border-gray-light/30 bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <MapPin className="w-5 h-5 text-gold" />
                        <h3 className="text-lg font-serif">{neighborhood.name}</h3>
                      </div>
                      <p className="text-sm text-harbor">{neighborhood.description}</p>
                    </button>
                  ))}
                </div>

                <button onClick={prevStep} className="btn-secondary w-full">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </button>
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
                  <p className="text-harbor text-lg">Just need a few details to confirm your booking</p>
                </div>

                <div className="bg-shell rounded-lg p-8 mb-8 space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <User className="w-4 h-4 text-gold" />
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={bookingData.name}
                      onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                      className="input-field"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gold" />
                      Email *
                    </label>
                    <input
                      type="email"
                      value={bookingData.email}
                      onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                      className="input-field"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gold" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                      className="input-field"
                      placeholder="+351 912 345 678"
                    />
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
                </div>

                <div className="flex gap-4">
                  <button onClick={prevStep} className="btn-secondary flex-1">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={!bookingData.name || !bookingData.email || !bookingData.phone}
                    className="btn-gold flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Confirm Booking
                    <CheckCircle className="w-4 h-4 ml-2" />
                  </button>
                </div>
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
                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-4xl font-serif mb-4">Booking Confirmed!</h2>
                <p className="text-xl text-harbor mb-8 max-w-2xl mx-auto">
                  We've received your request and will match you with the perfect professional. 
                  Expect a confirmation email within 2 hours.
                </p>
                <div className="bg-shell rounded-lg p-8 max-w-md mx-auto mb-8">
                  <h3 className="font-serif text-xl mb-4">What's Next?</h3>
                  <ul className="text-left space-y-3 text-harbor">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span>We'll review your preferences and find your perfect match</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span>You'll receive confirmation with professional details</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span>Show up and enjoy your perfect beauty experience</span>
                    </li>
                  </ul>
                </div>
                <Link href="/" className="btn-gold inline-block">
                  Return to Home
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

