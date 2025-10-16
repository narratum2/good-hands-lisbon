'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TrendingUp, Users, DollarSign, Calendar, Target, Brain, Zap, BarChart3 } from 'lucide-react'

interface BusinessMetrics {
  conversionRate: number
  averageOrderValue: number
  customerRetentionRate: number
  seasonalTrends: Record<string, number>
  topPerformingServices: Array<{service: string, revenue: number, bookings: number}>
  neighborhoodPerformance: Record<string, {revenue: number, bookings: number}>
  peakBookingTimes: string[]
  revenueProjections: Array<{month: string, projected: number, confidence: number}>
}

interface PredictiveInsight {
  type: 'demand_forecast' | 'customer_churn' | 'upsell_opportunity' | 'seasonal_trend'
  confidence: number
  description: string
  actionableSteps: string[]
  expectedImpact: string
  timeframe: string
}

export default function AdvancedAnalytics() {
  const [metrics, setMetrics] = useState<BusinessMetrics | null>(null)
  const [insights, setInsights] = useState<PredictiveInsight[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading business intelligence data
    const loadAnalytics = async () => {
      setIsLoading(true)
      
      // In a real implementation, this would fetch from your BI API
      setTimeout(() => {
        setMetrics({
          conversionRate: 0.68,
          averageOrderValue: 95,
          customerRetentionRate: 0.72,
          seasonalTrends: {
            'spring': 1.2,
            'summer': 1.4,
            'fall': 1.1,
            'winter': 0.8
          },
          topPerformingServices: [
            {service: 'hair', revenue: 12000, bookings: 150},
            {service: 'wedding', revenue: 8000, bookings: 40},
            {service: 'wellness', revenue: 6000, bookings: 50}
          ],
          neighborhoodPerformance: {
            'chiado': {revenue: 8000, bookings: 80},
            'cascais': {revenue: 6000, bookings: 60},
            'alfama': {revenue: 4000, bookings: 45}
          },
          peakBookingTimes: ['Saturday 10:00', 'Saturday 14:00', 'Sunday 11:00'],
          revenueProjections: [
            {month: 'Nov 2024', projected: 25000, confidence: 0.85},
            {month: 'Dec 2024', projected: 18000, confidence: 0.75},
            {month: 'Jan 2025', projected: 22000, confidence: 0.80}
          ]
        })
        
        setInsights([
          {
            type: 'demand_forecast',
            confidence: 0.85,
            description: 'Wedding season approaching - 40% demand increase expected',
            actionableSteps: [
              'Hire additional wedding specialists',
              'Create premium wedding packages',
              'Increase pricing by 15% for peak season'
            ],
            expectedImpact: '+€8,000 monthly revenue',
            timeframe: 'Next 60 days'
          },
          {
            type: 'upsell_opportunity',
            confidence: 0.72,
            description: '67% of hair clients never book wellness services',
            actionableSteps: [
              'Create wellness add-on packages',
              'Implement post-service wellness recommendations',
              'Launch loyalty program with wellness rewards'
            ],
            expectedImpact: '+€3,500 monthly revenue',
            timeframe: 'Next 30 days'
          }
        ])
        
        setIsLoading(false)
      }, 2000)
    }
    
    loadAnalytics()
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-shell flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <Brain className="w-16 h-16 text-gold mx-auto mb-4 animate-pulse" />
          <h2 className="text-2xl font-serif text-ink">Analyzing Business Intelligence...</h2>
          <p className="text-harbor mt-2">Processing advanced analytics and insights</p>
        </motion.div>
      </div>
    )
  }

  if (!metrics) return null

  return (
    <div className="min-h-screen bg-shell py-20">
      <div className="container-custom max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-serif text-ink mb-6">
            Advanced Business Intelligence
          </h1>
          <p className="text-xl text-harbor max-w-3xl mx-auto">
            AI-powered insights driving strategic decisions for luxury beauty concierge excellence
          </p>
        </motion.div>

        {/* Key Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          <MetricCard
            icon={<TrendingUp className="w-8 h-8" />}
            title="Conversion Rate"
            value={`${(metrics.conversionRate * 100).toFixed(1)}%`}
            change="+12%"
            trend="up"
          />
          <MetricCard
            icon={<DollarSign className="w-8 h-8" />}
            title="Average Order Value"
            value={`€${metrics.averageOrderValue}`}
            change="+€8"
            trend="up"
          />
          <MetricCard
            icon={<Users className="w-8 h-8" />}
            title="Customer Retention"
            value={`${(metrics.customerRetentionRate * 100).toFixed(1)}%`}
            change="+5%"
            trend="up"
          />
          <MetricCard
            icon={<Target className="w-8 h-8" />}
            title="Peak Efficiency"
            value="94%"
            change="+3%"
            trend="up"
          />
        </motion.div>

        {/* Predictive Insights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-ink mb-8 text-center">
            AI-Powered Predictions
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {insights.map((insight, index) => (
              <InsightCard key={index} insight={insight} />
            ))}
          </div>
        </motion.div>

        {/* Performance Analytics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          <ServicePerformanceCard services={metrics.topPerformingServices} />
          <NeighborhoodPerformanceCard neighborhoods={metrics.neighborhoodPerformance} />
        </motion.div>

        {/* Revenue Projections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-serif text-ink mb-6 flex items-center gap-3">
            <BarChart3 className="w-6 h-6 text-gold" />
            Revenue Projections
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.revenueProjections.map((projection, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-ink mb-2">
                  €{projection.projected.toLocaleString()}
                </div>
                <div className="text-harbor mb-2">{projection.month}</div>
                <div className="text-sm text-gold">
                  {(projection.confidence * 100).toFixed(0)}% confidence
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function MetricCard({ icon, title, value, change, trend }: {
  icon: React.ReactNode
  title: string
  value: string
  change: string
  trend: 'up' | 'down'
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl p-6 shadow-lg"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-gold">{icon}</div>
        <div className={`text-sm font-semibold ${
          trend === 'up' ? 'text-green-600' : 'text-red-600'
        }`}>
          {change}
        </div>
      </div>
      <div className="text-3xl font-bold text-ink mb-2">{value}</div>
      <div className="text-harbor text-sm">{title}</div>
    </motion.div>
  )
}

function InsightCard({ insight }: { insight: PredictiveInsight }) {
  const iconMap = {
    'demand_forecast': <TrendingUp className="w-6 h-6" />,
    'customer_churn': <Users className="w-6 h-6" />,
    'upsell_opportunity': <Target className="w-6 h-6" />,
    'seasonal_trend': <Calendar className="w-6 h-6" />
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-gold"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="text-gold">{iconMap[insight.type]}</div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-ink capitalize">
              {insight.type.replace('_', ' ')}
            </h3>
            <span className="text-sm bg-gold/10 text-gold px-2 py-1 rounded-full">
              {(insight.confidence * 100).toFixed(0)}% confidence
            </span>
          </div>
          <p className="text-harbor text-sm mb-3">{insight.description}</p>
        </div>
      </div>
      
      <div className="space-y-2 mb-4">
        {insight.actionableSteps.slice(0, 2).map((step, index) => (
          <div key={index} className="flex items-center gap-2 text-sm text-harbor">
            <Zap className="w-4 h-4 text-gold flex-shrink-0" />
            {step}
          </div>
        ))}
      </div>
      
      <div className="flex items-center justify-between text-sm">
        <span className="text-gold font-semibold">{insight.expectedImpact}</span>
        <span className="text-harbor">{insight.timeframe}</span>
      </div>
    </motion.div>
  )
}

function ServicePerformanceCard({ services }: { services: Array<{service: string, revenue: number, bookings: number}> }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h3 className="text-xl font-serif text-ink mb-6 flex items-center gap-3">
        <Target className="w-5 h-5 text-gold" />
        Top Performing Services
      </h3>
      <div className="space-y-4">
        {services.map((service, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center text-gold font-bold text-sm">
                {index + 1}
              </div>
              <span className="font-medium text-ink capitalize">{service.service}</span>
            </div>
            <div className="text-right">
              <div className="font-semibold text-ink">€{service.revenue.toLocaleString()}</div>
              <div className="text-sm text-harbor">{service.bookings} bookings</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function NeighborhoodPerformanceCard({ neighborhoods }: { neighborhoods: Record<string, {revenue: number, bookings: number}> }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h3 className="text-xl font-serif text-ink mb-6 flex items-center gap-3">
        <BarChart3 className="w-5 h-5 text-gold" />
        Neighborhood Performance
      </h3>
      <div className="space-y-4">
        {Object.entries(neighborhoods).map(([neighborhood, data], index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center text-gold font-bold text-sm">
                {index + 1}
              </div>
              <span className="font-medium text-ink capitalize">{neighborhood}</span>
            </div>
            <div className="text-right">
              <div className="font-semibold text-ink">€{data.revenue.toLocaleString()}</div>
              <div className="text-sm text-harbor">{data.bookings} bookings</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
