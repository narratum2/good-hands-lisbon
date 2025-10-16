'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Target, Clock, MapPin, Heart, Star, Zap, TrendingUp, Brain } from 'lucide-react'

interface PersonalizedContent {
  heroMessage: string
  serviceHighlights: string[]
  neighborhoodFocus: string
  pricingTier: string
  ctaOptimization: string
  personalizedRecommendations: Array<{
    service: string
    confidence: number
    reasoning: string
    expectedSatisfaction: number
  }>
  behavioralTriggers: Array<{
    type: string
    message: string
    action: string
    urgency: string
  }>
}

export default function SmartPersonalization() {
  const [personalizedContent, setPersonalizedContent] = useState<PersonalizedContent | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(true)
  const [showInsights, setShowInsights] = useState(false)

  useEffect(() => {
    // Simulate AI personalization analysis
    const analyzePersonalization = async () => {
      setIsAnalyzing(true)
      
      // Simulate API call to personalization engine
      setTimeout(() => {
        setPersonalizedContent({
          heroMessage: 'Luxury beauty services crafted for your special moments',
          serviceHighlights: ['hair', 'wedding', 'wellness'],
          neighborhoodFocus: 'chiado',
          pricingTier: 'premium',
          ctaOptimization: 'Experience Luxury Beauty',
          personalizedRecommendations: [
            {
              service: 'hair',
              confidence: 0.92,
              reasoning: 'Based on your previous bookings and style preferences',
              expectedSatisfaction: 0.95
            },
            {
              service: 'wedding',
              confidence: 0.78,
              reasoning: 'Perfect match for your glamorous style and upcoming special occasions',
              expectedSatisfaction: 0.88
            },
            {
              service: 'wellness',
              confidence: 0.65,
              reasoning: 'Complete your beauty routine with premium wellness treatments',
              expectedSatisfaction: 0.82
            }
          ],
          behavioralTriggers: [
            {
              type: 'vip_retention',
              message: 'Exclusive VIP treatment - priority booking and complimentary consultation',
              action: 'offer_vip_package',
              urgency: 'medium'
            },
            {
              type: 'upsell',
              message: 'Complete your beauty routine - add nail care for the perfect look',
              action: 'suggest_complementary_service',
              urgency: 'low'
            }
          ]
        })
        setIsAnalyzing(false)
      }, 2500)
    }
    
    analyzePersonalization()
  }, [])

  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-ink via-harbor to-ink flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center text-white"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full mx-auto mb-6"
          />
          <h2 className="text-3xl font-serif mb-4">AI Personalization Engine</h2>
          <p className="text-porcelain/80 max-w-md mx-auto">
            Analyzing your preferences and behavior to create the perfect beauty experience
          </p>
        </motion.div>
      </div>
    )
  }

  if (!personalizedContent) return null

  return (
    <div className="min-h-screen bg-shell py-20">
      <div className="container-custom max-w-7xl">
        {/* Personalized Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-gold" />
            <h1 className="text-5xl md:text-6xl font-serif text-ink">
              Your Personal Beauty Concierge
            </h1>
            <Sparkles className="w-8 h-8 text-gold" />
          </div>
          <p className="text-2xl text-harbor max-w-4xl mx-auto mb-8">
            {personalizedContent.heroMessage}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowInsights(!showInsights)}
            className="bg-gold text-ink px-8 py-4 rounded-lg font-semibold hover:bg-gold-dark transition-colors shadow-lg"
          >
            {showInsights ? 'Hide' : 'View'} AI Insights
          </motion.button>
        </motion.div>

        {/* Personalized Service Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-ink mb-8 text-center">
            AI-Recommended Services for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalizedContent.personalizedRecommendations.map((recommendation, index) => (
              <PersonalizedServiceCard key={index} recommendation={recommendation} index={index} />
            ))}
          </div>
        </motion.div>

        {/* AI Insights Panel */}
        <AnimatePresence>
          {showInsights && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-16"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gold/20">
                <h3 className="text-2xl font-serif text-ink mb-6 flex items-center gap-3">
                  <Brain className="w-6 h-6 text-gold" />
                  AI Analysis & Insights
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Personalization Factors */}
                  <div>
                    <h4 className="text-lg font-semibold text-ink mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-gold" />
                      Personalization Factors
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-shell rounded-lg">
                        <span className="text-harbor">Neighborhood Focus</span>
                        <span className="font-semibold text-ink capitalize">
                          {personalizedContent.neighborhoodFocus}
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-shell rounded-lg">
                        <span className="text-harbor">Pricing Tier</span>
                        <span className="font-semibold text-ink capitalize">
                          {personalizedContent.pricingTier}
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-shell rounded-lg">
                        <span className="text-harbor">Style Preference</span>
                        <span className="font-semibold text-ink">Glamorous</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-shell rounded-lg">
                        <span className="text-harbor">Occasion Type</span>
                        <span className="font-semibold text-ink">Special Events</span>
                      </div>
                    </div>
                  </div>

                  {/* Behavioral Triggers */}
                  <div>
                    <h4 className="text-lg font-semibold text-ink mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-gold" />
                      Smart Triggers
                    </h4>
                    <div className="space-y-3">
                      {personalizedContent.behavioralTriggers.map((trigger, index) => (
                        <div key={index} className="p-3 bg-shell rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-ink capitalize">
                              {trigger.type.replace('_', ' ')}
                            </span>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              trigger.urgency === 'high' ? 'bg-red-100 text-red-600' :
                              trigger.urgency === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                              'bg-green-100 text-green-600'
                            }`}>
                              {trigger.urgency}
                            </span>
                          </div>
                          <p className="text-sm text-harbor">{trigger.message}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Personalized CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gold via-gold-dark to-gold text-white rounded-2xl p-12 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Ready for Your Personalized Experience?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our AI has analyzed your preferences to create the perfect beauty journey just for you
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gold px-12 py-4 rounded-lg text-lg font-semibold hover:bg-white/90 transition-colors shadow-xl"
            >
              {personalizedContent.ctaOptimization}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function PersonalizedServiceCard({ recommendation, index }: {
  recommendation: {
    service: string
    confidence: number
    reasoning: string
    expectedSatisfaction: number
  }
  index: number
}) {
  const serviceIcons = {
    'hair': <Heart className="w-8 h-8" />,
    'nails': <Star className="w-8 h-8" />,
    'wellness': <Zap className="w-8 h-8" />,
    'wedding': <Sparkles className="w-8 h-8" />,
    'photoshoot': <Target className="w-8 h-8" />
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl p-6 shadow-lg border border-gold/20"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="text-gold">
          {serviceIcons[recommendation.service as keyof typeof serviceIcons] || <Target className="w-8 h-8" />}
        </div>
        <div>
          <h3 className="text-xl font-serif text-ink capitalize">
            {recommendation.service}
          </h3>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span className="text-sm text-green-600 font-semibold">
              {(recommendation.confidence * 100).toFixed(0)}% match
            </span>
          </div>
        </div>
      </div>
      
      <p className="text-harbor text-sm mb-4">{recommendation.reasoning}</p>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-harbor">Expected Satisfaction</span>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.round(recommendation.expectedSatisfaction * 5)
                    ? 'text-gold fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gold h-2 rounded-full transition-all duration-1000"
            style={{ width: `${recommendation.expectedSatisfaction * 100}%` }}
          />
        </div>
      </div>
    </motion.div>
  )
}
