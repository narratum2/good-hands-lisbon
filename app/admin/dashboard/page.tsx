'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Brain, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target, 
  Zap, 
  BarChart3, 
  Clock, 
  AlertTriangle,
  CheckCircle,
  Star,
  Activity,
  Smartphone,
  Globe,
  Settings
} from 'lucide-react'

interface DashboardMetrics {
  business: {
    conversionRate: number
    averageOrderValue: number
    customerRetentionRate: number
    monthlyRevenue: number
    totalBookings: number
    activeCustomers: number
  }
  performance: {
    lighthouse: {
      performance: number
      accessibility: number
      bestPractices: number
      seo: number
    }
    coreWebVitals: {
      lcp: number
      fid: number
      cls: number
    }
    loadTimes: {
      firstPaint: number
      timeToInteractive: number
    }
  }
  userExperience: {
    bounceRate: number
    averageSessionDuration: number
    pagesPerSession: number
    mobileTraffic: number
  }
  aiInsights: {
    topOpportunities: Array<{
      title: string
      impact: string
      effort: string
      description: string
      expectedLift: string
    }>
    predictions: Array<{
      type: string
      confidence: number
      description: string
      timeframe: string
    }>
  }
}

export default function AdvancedDashboard() {
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'overview' | 'performance' | 'conversion' | 'ai'>('overview')

  useEffect(() => {
    // Simulate loading comprehensive dashboard data
    const loadDashboardData = async () => {
      setIsLoading(true)
      
      setTimeout(() => {
        setMetrics({
          business: {
            conversionRate: 0.68,
            averageOrderValue: 95,
            customerRetentionRate: 0.72,
            monthlyRevenue: 28500,
            totalBookings: 156,
            activeCustomers: 89
          },
          performance: {
            lighthouse: {
              performance: 94,
              accessibility: 98,
              bestPractices: 96,
              seo: 97
            },
            coreWebVitals: {
              lcp: 1.8,
              fid: 85,
              cls: 0.05
            },
            loadTimes: {
              firstPaint: 0.9,
              timeToInteractive: 2.1
            }
          },
          userExperience: {
            bounceRate: 0.42,
            averageSessionDuration: 185,
            pagesPerSession: 3.2,
            mobileTraffic: 0.68
          },
          aiInsights: {
            topOpportunities: [
              {
                title: 'Dynamic Pricing Optimization',
                impact: 'High',
                effort: 'Medium',
                description: 'Implement AI-driven pricing based on demand and customer segments',
                expectedLift: '+€5,000 monthly revenue'
              },
              {
                title: 'Personalized Service Recommendations',
                impact: 'High',
                effort: 'High',
                description: 'Use ML to recommend optimal services for each customer',
                expectedLift: '+25% conversion rate'
              },
              {
                title: 'Advanced Email Automation',
                impact: 'Medium',
                effort: 'Low',
                description: 'Implement behavioral-triggered email sequences',
                expectedLift: '+40% email engagement'
              }
            ],
            predictions: [
              {
                type: 'Demand Forecast',
                confidence: 0.87,
                description: 'Wedding season will see 40% increase in demand',
                timeframe: 'Next 60 days'
              },
              {
                type: 'Revenue Projection',
                confidence: 0.82,
                description: 'Monthly revenue will reach €35,000 by December',
                timeframe: 'Next 90 days'
              },
              {
                type: 'Customer Churn Risk',
                confidence: 0.75,
                description: '12 customers at risk of churning - immediate intervention needed',
                timeframe: 'Next 30 days'
              }
            ]
          }
        })
        setIsLoading(false)
      }, 3000)
    }
    
    loadDashboardData()
  }, [])

  if (isLoading) {
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
            className="w-20 h-20 border-4 border-gold border-t-transparent rounded-full mx-auto mb-8"
          />
          <h1 className="text-4xl font-serif mb-4">Advanced Business Intelligence</h1>
          <p className="text-porcelain/80 max-w-md mx-auto">
            Loading comprehensive analytics and AI insights...
          </p>
        </motion.div>
      </div>
    )
  }

  if (!metrics) return null

  return (
    <div className="min-h-screen bg-shell">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="container-custom max-w-7xl py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-serif text-ink">Good Hands Intelligence Dashboard</h1>
              <p className="text-harbor mt-1">AI-powered business insights and optimization</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-harbor">
                Last updated: {new Date().toLocaleTimeString()}
              </div>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom max-w-7xl py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-gray-100 rounded-lg p-1">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'performance', label: 'Performance', icon: Zap },
            { id: 'conversion', label: 'Conversion', icon: Target },
            { id: 'ai', label: 'AI Insights', icon: Brain }
          ].map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-ink shadow-sm'
                    : 'text-harbor hover:text-ink'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <OverviewTab metrics={metrics} />
            </motion.div>
          )}
          
          {activeTab === 'performance' && (
            <motion.div
              key="performance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <PerformanceTab metrics={metrics} />
            </motion.div>
          )}
          
          {activeTab === 'conversion' && (
            <motion.div
              key="conversion"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <ConversionTab metrics={metrics} />
            </motion.div>
          )}
          
          {activeTab === 'ai' && (
            <motion.div
              key="ai"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <AIInsightsTab metrics={metrics} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function OverviewTab({ metrics }: { metrics: DashboardMetrics }) {
  return (
    <>
      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MetricCard
          icon={<TrendingUp className="w-8 h-8" />}
          title="Conversion Rate"
          value={`${(metrics.business.conversionRate * 100).toFixed(1)}%`}
          change="+12%"
          trend="up"
          color="green"
        />
        <MetricCard
          icon={<DollarSign className="w-8 h-8" />}
          title="Monthly Revenue"
          value={`€${metrics.business.monthlyRevenue.toLocaleString()}`}
          change="+€2,400"
          trend="up"
          color="blue"
        />
        <MetricCard
          icon={<Users className="w-8 h-8" />}
          title="Active Customers"
          value={metrics.business.activeCustomers.toString()}
          change="+8"
          trend="up"
          color="purple"
        />
        <MetricCard
          icon={<Target className="w-8 h-8" />}
          title="Average Order Value"
          value={`€${metrics.business.averageOrderValue}`}
          change="+€12"
          trend="up"
          color="gold"
        />
        <MetricCard
          icon={<Clock className="w-8 h-8" />}
          title="Session Duration"
          value={`${Math.round(metrics.userExperience.averageSessionDuration / 60)}m`}
          change="+23s"
          trend="up"
          color="orange"
        />
        <MetricCard
          icon={<Zap className="w-8 h-8" />}
          title="Performance Score"
          value={`${metrics.performance.lighthouse.performance}/100`}
          change="+4"
          trend="up"
          color="green"
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-serif text-ink mb-6">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <QuickActionCard
            icon={<Settings className="w-6 h-6" />}
            title="Optimize Performance"
            description="Run performance audit"
            action="Run Audit"
            color="blue"
          />
          <QuickActionCard
            icon={<Target className="w-6 h-6" />}
            title="A/B Test CTAs"
            description="Test new call-to-actions"
            action="Start Test"
            color="green"
          />
          <QuickActionCard
            icon={<Brain className="w-6 h-6" />}
            title="AI Recommendations"
            description="Get personalized insights"
            action="Generate"
            color="purple"
          />
          <QuickActionCard
            icon={<Users className="w-6 h-6" />}
            title="Customer Analysis"
            description="Analyze customer segments"
            action="Analyze"
            color="gold"
          />
        </div>
      </div>
    </>
  )
}

function PerformanceTab({ metrics }: { metrics: DashboardMetrics }) {
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600'
    if (score >= 80) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreBg = (score: number) => {
    if (score >= 90) return 'bg-green-100'
    if (score >= 80) return 'bg-yellow-100'
    return 'bg-red-100'
  }

  return (
    <>
      {/* Lighthouse Scores */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-2xl font-serif text-ink mb-6 flex items-center gap-3">
          <Zap className="w-6 h-6 text-gold" />
          Lighthouse Performance Scores
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(metrics.performance.lighthouse).map(([key, score]) => (
            <div key={key} className="text-center">
              <div className={`w-20 h-20 rounded-full ${getScoreBg(score)} flex items-center justify-center mx-auto mb-3`}>
                <span className={`text-2xl font-bold ${getScoreColor(score)}`}>
                  {score}
                </span>
              </div>
              <h4 className="font-semibold text-ink capitalize">{key}</h4>
              <p className="text-sm text-harbor">Excellent</p>
            </div>
          ))}
        </div>
      </div>

      {/* Core Web Vitals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-serif text-ink mb-6">Core Web Vitals</h3>
          <div className="space-y-4">
            <VitalMetric
              name="Largest Contentful Paint"
              value={`${metrics.performance.coreWebVitals.lcp}s`}
              target="< 2.5s"
              status={metrics.performance.coreWebVitals.lcp < 2.5 ? 'good' : 'needs-improvement'}
            />
            <VitalMetric
              name="First Input Delay"
              value={`${metrics.performance.coreWebVitals.fid}ms`}
              target="< 100ms"
              status={metrics.performance.coreWebVitals.fid < 100 ? 'good' : 'needs-improvement'}
            />
            <VitalMetric
              name="Cumulative Layout Shift"
              value={metrics.performance.coreWebVitals.cls.toString()}
              target="< 0.1"
              status={metrics.performance.coreWebVitals.cls < 0.1 ? 'good' : 'needs-improvement'}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-serif text-ink mb-6">Load Times</h3>
          <div className="space-y-4">
            <VitalMetric
              name="First Paint"
              value={`${metrics.performance.loadTimes.firstPaint}s`}
              target="< 1.0s"
              status={metrics.performance.loadTimes.firstPaint < 1.0 ? 'good' : 'needs-improvement'}
            />
            <VitalMetric
              name="Time to Interactive"
              value={`${metrics.performance.loadTimes.timeToInteractive}s`}
              target="< 3.0s"
              status={metrics.performance.loadTimes.timeToInteractive < 3.0 ? 'good' : 'needs-improvement'}
            />
          </div>
        </div>
      </div>
    </>
  )
}

function ConversionTab({ metrics }: { metrics: DashboardMetrics }) {
  return (
    <>
      {/* Conversion Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          icon={<Target className="w-8 h-8" />}
          title="Conversion Rate"
          value={`${(metrics.business.conversionRate * 100).toFixed(1)}%`}
          change="+2.1%"
          trend="up"
          color="green"
        />
        <MetricCard
          icon={<Users className="w-8 h-8" />}
          title="Bounce Rate"
          value={`${(metrics.userExperience.bounceRate * 100).toFixed(1)}%`}
          change="-3.2%"
          trend="down"
          color="green"
        />
        <MetricCard
          icon={<Activity className="w-8 h-8" />}
          title="Pages per Session"
          value={metrics.userExperience.pagesPerSession.toFixed(1)}
          change="+0.3"
          trend="up"
          color="blue"
        />
        <MetricCard
          icon={<Smartphone className="w-8 h-8" />}
          title="Mobile Traffic"
          value={`${(metrics.userExperience.mobileTraffic * 100).toFixed(1)}%`}
          change="+5.1%"
          trend="up"
          color="purple"
        />
      </div>

      {/* Conversion Optimization Opportunities */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-2xl font-serif text-ink mb-6">Conversion Optimization Opportunities</h3>
        <div className="space-y-4">
          <OptimizationOpportunity
            title="CTA Button Optimization"
            description="Test different call-to-action button variations"
            impact="High"
            effort="Low"
            expectedLift="+15-25%"
            priority="critical"
          />
          <OptimizationOpportunity
            title="Form Simplification"
            description="Reduce booking form fields to decrease abandonment"
            impact="High"
            effort="Medium"
            expectedLift="+20-30%"
            priority="high"
          />
          <OptimizationOpportunity
            title="Trust Signal Enhancement"
            description="Add more social proof and security badges"
            impact="Medium"
            effort="Low"
            expectedLift="+10-15%"
            priority="medium"
          />
        </div>
      </div>
    </>
  )
}

function AIInsightsTab({ metrics }: { metrics: DashboardMetrics }) {
  return (
    <>
      {/* AI Predictions */}
      <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
        <h3 className="text-2xl font-serif text-ink mb-6 flex items-center gap-3">
          <Brain className="w-6 h-6 text-gold" />
          AI Predictions & Insights
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {metrics.aiInsights.predictions.map((prediction, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-ink">{prediction.type}</h4>
                <span className="text-sm bg-gold/10 text-gold px-2 py-1 rounded-full">
                  {(prediction.confidence * 100).toFixed(0)}% confidence
                </span>
              </div>
              <p className="text-harbor text-sm mb-2">{prediction.description}</p>
              <p className="text-xs text-gray-500">{prediction.timeframe}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Top Opportunities */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-2xl font-serif text-ink mb-6">Top AI-Generated Opportunities</h3>
        <div className="space-y-6">
          {metrics.aiInsights.topOpportunities.map((opportunity, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <h4 className="text-lg font-semibold text-ink">{opportunity.title}</h4>
                <div className="flex gap-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    opportunity.impact === 'High' ? 'bg-red-100 text-red-600' :
                    opportunity.impact === 'Medium' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-green-100 text-green-600'
                  }`}>
                    {opportunity.impact} Impact
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    opportunity.effort === 'Low' ? 'bg-green-100 text-green-600' :
                    opportunity.effort === 'Medium' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-red-100 text-red-600'
                  }`}>
                    {opportunity.effort} Effort
                  </span>
                </div>
              </div>
              <p className="text-harbor mb-4">{opportunity.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-gold font-semibold">{opportunity.expectedLift}</span>
                <button className="bg-gold text-ink px-4 py-2 rounded-lg text-sm font-medium hover:bg-gold-dark transition-colors">
                  Implement
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

// Helper Components
function MetricCard({ icon, title, value, change, trend, color }: {
  icon: React.ReactNode
  title: string
  value: string
  change: string
  trend: 'up' | 'down'
  color: string
}) {
  const colorClasses = {
    green: 'text-green-600',
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    gold: 'text-gold',
    orange: 'text-orange-600'
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl p-6 shadow-lg"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`${colorClasses[color as keyof typeof colorClasses] || 'text-gold'}`}>
          {icon}
        </div>
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

function QuickActionCard({ icon, title, description, action, color }: {
  icon: React.ReactNode
  title: string
  description: string
  action: string
  color: string
}) {
  const colorClasses = {
    green: 'bg-green-500 hover:bg-green-600',
    blue: 'bg-blue-500 hover:bg-blue-600',
    purple: 'bg-purple-500 hover:bg-purple-600',
    gold: 'bg-gold hover:bg-gold-dark'
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="border border-gray-200 rounded-lg p-4"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="text-gold">{icon}</div>
        <h4 className="font-semibold text-ink">{title}</h4>
      </div>
      <p className="text-harbor text-sm mb-4">{description}</p>
      <button className={`w-full text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
        colorClasses[color as keyof typeof colorClasses] || 'bg-gold hover:bg-gold-dark'
      }`}>
        {action}
      </button>
    </motion.div>
  )
}

function VitalMetric({ name, value, target, status }: {
  name: string
  value: string
  target: string
  status: 'good' | 'needs-improvement'
}) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="font-medium text-ink">{name}</div>
        <div className="text-sm text-harbor">Target: {target}</div>
      </div>
      <div className="text-right">
        <div className="text-lg font-bold text-ink">{value}</div>
        <div className="flex items-center gap-1">
          {status === 'good' ? (
            <CheckCircle className="w-4 h-4 text-green-500" />
          ) : (
            <AlertTriangle className="w-4 h-4 text-yellow-500" />
          )}
          <span className={`text-sm ${
            status === 'good' ? 'text-green-600' : 'text-yellow-600'
          }`}>
            {status === 'good' ? 'Good' : 'Needs Improvement'}
          </span>
        </div>
      </div>
    </div>
  )
}

function OptimizationOpportunity({ title, description, impact, effort, expectedLift, priority }: {
  title: string
  description: string
  impact: string
  effort: string
  expectedLift: string
  priority: string
}) {
  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <h4 className="font-semibold text-ink">{title}</h4>
          <span className={`text-xs px-2 py-1 rounded-full ${
            priority === 'critical' ? 'bg-red-100 text-red-600' :
            priority === 'high' ? 'bg-orange-100 text-orange-600' :
            'bg-blue-100 text-blue-600'
          }`}>
            {priority.toUpperCase()}
          </span>
        </div>
        <p className="text-harbor text-sm mb-2">{description}</p>
        <div className="flex gap-4 text-sm">
          <span className="text-harbor">Impact: <span className="font-medium text-ink">{impact}</span></span>
          <span className="text-harbor">Effort: <span className="font-medium text-ink">{effort}</span></span>
        </div>
      </div>
      <div className="text-right ml-6">
        <div className="text-gold font-semibold mb-2">{expectedLift}</div>
        <button className="bg-gold text-ink px-4 py-2 rounded-lg text-sm font-medium hover:bg-gold-dark transition-colors">
          Implement
        </button>
      </div>
    </div>
  )
}
