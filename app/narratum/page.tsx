'use client'

import { useState, useEffect } from 'react'
import { BarChart, Bar, LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'
import { TrendingUp, TrendingDown, Users, DollarSign, Activity, Filter, Download, Settings, Calendar, Search, ChevronDown, MoreHorizontal, Target, Award, Heart, AlertCircle, Lock, LogOut, FileText, ChevronRight, XCircle, CheckCircle, BookOpen, Brain, Palette, ShoppingBag, Cog, Presentation } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

// Password configuration
const DASHBOARD_PASSWORD = process.env.NEXT_PUBLIC_DASHBOARD_PASSWORD || 'narratum2025'

interface Document {
  id: string
  title: string
  category: string
  path: string
  icon: React.ReactNode
  description: string
}

const documents: Document[] = [
  // Wonder Portal Documentation
  {
    id: 'wonder-pipeline',
    title: 'Wonder Portal Pipeline',
    category: 'wonder-portal',
    path: 'wonder-portal-pipeline.md',
    icon: <FileText className="w-5 h-5" />,
    description: 'Technical implementation guide for scoring algorithm pipeline'
  },
  {
    id: 'wonder-ops',
    title: 'Wonder Portal Operations Guide',
    category: 'wonder-portal',
    path: 'wonder-portal-ops-guide.md',
    icon: <Cog className="w-5 h-5" />,
    description: 'Dashboard user manual and operational procedures'
  },
  {
    id: 'wonder-presentation',
    title: 'Wonder Portal Presentation Guide',
    category: 'wonder-portal',
    path: 'presentation-guide.md',
    icon: <Presentation className="w-5 h-5" />,
    description: 'Executive presentation guide and presenter notes'
  }
]

const categories = [
  { id: 'wonder-portal', name: 'Wonder Portal', icon: <FileText className="w-5 h-5" /> }
]

const EnterpriseMetricCard = ({ label, value, change, changeLabel, trend = 'up' }: {
  label: string
  value: string
  change?: string
  changeLabel?: string
  trend?: 'up' | 'down'
}) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
    <div className="flex items-start justify-between mb-4">
      <span className="text-xs font-medium text-gray-500 tracking-wider uppercase">{label}</span>
      <button className="text-gray-400 hover:text-gray-600">
        <MoreHorizontal className="w-4 h-4" />
      </button>
    </div>
    <div className="space-y-2">
      <div className="text-4xl font-light text-gray-900">{value}</div>
      {change && (
        <div className="flex items-center gap-2">
          <div className={`flex items-center gap-1 text-sm font-medium ${trend === 'up' ? 'text-gray-900' : 'text-gray-600'}`}>
            {trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            {change}
          </div>
          <span className="text-sm text-gray-500">{changeLabel}</span>
        </div>
      )}
    </div>
  </div>
)

export default function NarratumDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState('overview')
  const [showDocs, setShowDocs] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null)
  const [documentContent, setDocumentContent] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const authStatus = localStorage.getItem('narratum_authenticated')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === DASHBOARD_PASSWORD) {
      setIsAuthenticated(true)
      localStorage.setItem('narratum_authenticated', 'true')
      setError('')
      setPassword('')
    } else {
      setError('Incorrect password. Please try again.')
      setPassword('')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('narratum_authenticated')
    setShowDocs(false)
    setSelectedDocument(null)
    setDocumentContent('')
  }

  const handleDocumentClick = async (doc: Document) => {
    setLoading(true)
    setSelectedDocument(doc)
    
    try {
      const response = await fetch(`/api/document?path=${encodeURIComponent(doc.path)}`)
      if (response.ok) {
        const data = await response.json()
        setDocumentContent(data.content)
      } else {
        const error = await response.json()
        setDocumentContent(`# Error\n\nCould not load document: ${error.error || 'Unknown error'}`)
      }
    } catch (error) {
      setDocumentContent('# Error\n\nFailed to load document.')
    } finally {
      setLoading(false)
    }
  }

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

  const groupedDocuments = categories.map(cat => ({
    ...cat,
    docs: filteredDocuments.filter(doc => doc.category === cat.id)
  })).filter(group => group.docs.length > 0)

  // Dashboard Data
  const scoreTrend = [
    { date: 'Jan', wonderScore: 58, engagement: 55, value: 52, loyalty: 60 },
    { date: 'Feb', wonderScore: 60, engagement: 58, value: 54, loyalty: 62 },
    { date: 'Mar', wonderScore: 62, engagement: 60, value: 58, loyalty: 64 },
    { date: 'Apr', wonderScore: 61, engagement: 59, value: 57, loyalty: 63 },
    { date: 'May', wonderScore: 64, engagement: 62, value: 61, loyalty: 66 },
    { date: 'Jun', wonderScore: 66, engagement: 64, value: 64, loyalty: 68 },
    { date: 'Jul', wonderScore: 68, engagement: 67, value: 66, loyalty: 70 },
    { date: 'Aug', wonderScore: 70, engagement: 69, value: 68, loyalty: 72 },
    { date: 'Sep', wonderScore: 73, engagement: 72, value: 71, loyalty: 75 },
    { date: 'Oct', wonderScore: 75, engagement: 74, value: 74, loyalty: 77 }
  ]

  const tierDistribution = [
    { tier: 'Elite', count: 45, percentage: 15, revenue: 1250000 },
    { tier: 'Champion', count: 82, percentage: 27, revenue: 980000 },
    { tier: 'Supporter', count: 95, percentage: 32, revenue: 720000 },
    { tier: 'Friend', count: 48, percentage: 16, revenue: 380000 },
    { tier: 'Explorer', count: 30, percentage: 10, revenue: 270000 }
  ]

  const departmentMetrics = [
    { department: 'Athletics', engagement: 78, members: 185, revenue: 2150000, growth: 12.5 },
    { department: 'Alumni Relations', engagement: 68, members: 142, revenue: 1840000, growth: 8.2 },
    { department: 'Advancement', engagement: 72, members: 98, revenue: 1920000, growth: 15.3 },
    { department: 'Student Life', engagement: 82, members: 225, revenue: 890000, growth: 22.1 }
  ]

  const revenueData = [
    { month: 'Jan', tickets: 180000, merch: 45000, hospitality: 120000, donations: 95000 },
    { month: 'Feb', tickets: 165000, merch: 42000, hospitality: 105000, donations: 110000 },
    { month: 'Mar', tickets: 220000, merch: 58000, hospitality: 145000, donations: 125000 },
    { month: 'Apr', tickets: 195000, merch: 51000, hospitality: 130000, donations: 118000 },
    { month: 'May', tickets: 210000, merch: 55000, hospitality: 140000, donations: 135000 },
    { month: 'Jun', tickets: 245000, merch: 68000, hospitality: 165000, donations: 148000 },
    { month: 'Jul', tickets: 185000, merch: 48000, hospitality: 125000, donations: 142000 },
    { month: 'Aug', tickets: 275000, merch: 78000, hospitality: 185000, donations: 165000 },
    { month: 'Sep', tickets: 320000, merch: 92000, hospitality: 215000, donations: 185000 },
    { month: 'Oct', tickets: 295000, merch: 85000, hospitality: 195000, donations: 172000 }
  ]

  const scoreBreakdown = [
    { category: 'Engagement', score: 74, target: 80, weight: 35 },
    { category: 'Loyalty', score: 77, target: 75, weight: 25 },
    { category: 'Value', score: 74, target: 80, weight: 25 },
    { category: 'Sentiment', score: 81, target: 85, weight: 10 },
    { category: 'Advocacy', score: 64, target: 75, weight: 5 }
  ]

  const membersList = [
    { id: 'W000142', name: 'Anderson, James', tier: 'Elite' as const, score: 92, engagement: 89, ltv: 42500, status: 'active' as const, lastActive: '2 hours ago' },
    { id: 'W000218', name: 'Chen, Sarah', tier: 'Champion' as const, score: 78, engagement: 75, ltv: 28300, status: 'active' as const, lastActive: '1 day ago' },
    { id: 'W000356', name: 'Rodriguez, Maria', tier: 'Elite' as const, score: 88, engagement: 85, ltv: 38900, status: 'active' as const, lastActive: '3 hours ago' },
    { id: 'W000429', name: 'Thompson, David', tier: 'Supporter' as const, score: 65, engagement: 62, ltv: 15200, status: 'monitor' as const, lastActive: '5 days ago' },
    { id: 'W000531', name: 'Williams, Emily', tier: 'Champion' as const, score: 74, engagement: 71, ltv: 24600, status: 'active' as const, lastActive: '1 day ago' },
    { id: 'W000647', name: 'Brown, Michael', tier: 'Friend' as const, score: 52, engagement: 48, ltv: 9800, status: 'at-risk' as const, lastActive: '14 days ago' },
    { id: 'W000758', name: 'Davis, Jennifer', tier: 'Elite' as const, score: 94, engagement: 91, ltv: 48200, status: 'active' as const, lastActive: '4 hours ago' },
    { id: 'W000869', name: 'Martinez, Carlos', tier: 'Supporter' as const, score: 68, engagement: 65, ltv: 18400, status: 'active' as const, lastActive: '2 days ago' }
  ]

  const revenueBreakdown = [
    { source: 'Season Tickets', amount: 1850000, change: 12.5, percentage: 40 },
    { source: 'Single Game', amount: 920000, change: 8.2, percentage: 20 },
    { source: 'Merchandise', amount: 680000, change: 15.3, percentage: 15 },
    { source: 'Hospitality', amount: 1340000, change: 22.1, percentage: 29 },
    { source: 'Donations', amount: 1520000, change: 18.7, percentage: 33 },
    { source: 'Concessions', amount: 290000, change: 5.4, percentage: 6 }
  ]

  const cohortData = [
    { cohort: '2024 Q4', members: 45, retention: 94, avgScore: 78, revenue: 385000 },
    { cohort: '2024 Q3', members: 62, retention: 89, avgScore: 74, revenue: 428000 },
    { cohort: '2024 Q2', members: 58, retention: 85, avgScore: 71, revenue: 392000 },
    { cohort: '2024 Q1', members: 52, retention: 82, avgScore: 69, revenue: 365000 },
    { cohort: '2023 Q4', members: 48, retention: 78, avgScore: 66, revenue: 328000 },
    { cohort: '2023 Q3', members: 35, retention: 72, avgScore: 63, revenue: 285000 }
  ]

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <>
            {/* Hero Metric - WonderScore */}
            <div className="bg-white border border-gray-200 rounded-xl p-10 mb-8">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-xs font-medium text-gray-400 tracking-wider uppercase">WonderScore™</div>
                    <div className="text-xs text-gray-400">•</div>
                    <div className="text-xs text-gray-500">Composite Intelligence Metric</div>
                  </div>
                  <div className="flex items-baseline gap-6 mb-8">
                    <div className="text-8xl font-extralight text-gray-900">75</div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-gray-900">
                        <TrendingUp className="w-5 h-5" />
                        <span className="text-2xl font-light">+18.2%</span>
                      </div>
                      <span className="text-sm text-gray-500">vs last quarter</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                      <span className="text-sm text-gray-600">Engagement 74</span>
                      <span className="text-xs text-gray-400">(35%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                      <span className="text-sm text-gray-600">Loyalty 77</span>
                      <span className="text-xs text-gray-400">(25%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                      <span className="text-sm text-gray-600">Value 74</span>
                      <span className="text-xs text-gray-400">(25%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                      <span className="text-sm text-gray-600">Sentiment 81</span>
                      <span className="text-xs text-gray-400">(10%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                      <span className="text-sm text-gray-600">Advocacy 64</span>
                      <span className="text-xs text-gray-400">(5%)</span>
                    </div>
                  </div>
                </div>
                <div className="w-56 h-56 relative ml-16">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="112" cy="112" r="100" fill="none" stroke="#f3f4f6" strokeWidth="16" />
                    <circle cx="112" cy="112" r="100" fill="none" stroke="#111827" strokeWidth="16" strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 100}`}
                      strokeDashoffset={`${2 * Math.PI * 100 * (1 - 0.75)}`}
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Percentile</div>
                      <div className="text-4xl font-light text-gray-900">78<span className="text-xl text-gray-400">th</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-6 mb-8">
              <EnterpriseMetricCard label="Active Members" value="300" change="+45" changeLabel="this quarter" trend="up" />
              <EnterpriseMetricCard label="Elite Tier" value="45" change="+8" changeLabel="new this quarter" trend="up" />
              <EnterpriseMetricCard label="Total LTV" value="$4.6M" change="+119%" changeLabel="year over year" trend="up" />
              <EnterpriseMetricCard label="At Risk" value="15" change="-8" changeLabel="members saved" trend="up" />
            </div>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="col-span-2 bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Engagement Metrics</h3>
                    <p className="text-sm text-gray-500 mt-1">Year-to-date performance trends</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 border border-gray-200 rounded-md">Daily</button>
                    <button className="px-3 py-1.5 text-xs font-medium bg-gray-900 text-white rounded-md">Monthly</button>
                    <button className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 border border-gray-200 rounded-md">Yearly</button>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={scoreTrend}>
                    <defs>
                      <linearGradient id="wonderGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#111827" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#111827" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                    <XAxis dataKey="date" stroke="#9ca3af" tick={{ fontSize: 12 }} axisLine={{ stroke: '#e5e7eb' }} />
                    <YAxis stroke="#9ca3af" tick={{ fontSize: 12 }} axisLine={{ stroke: '#e5e7eb' }} domain={[0, 100]} />
                    <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <Area type="monotone" dataKey="wonderScore" stroke="#111827" strokeWidth={2} fill="url(#wonderGradient)" name="Wonder Score" />
                    <Area type="monotone" dataKey="engagement" stroke="#6b7280" strokeWidth={1.5} fill="none" strokeDasharray="5 5" name="Engagement" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900">Member Distribution</h3>
                  <p className="text-sm text-gray-500 mt-1">By tier level</p>
                </div>
                <div className="space-y-4">
                  {tierDistribution.map((tier, idx) => (
                    <div key={tier.tier}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${
                            idx === 0 ? 'bg-gray-900' : idx === 1 ? 'bg-gray-700' : idx === 2 ? 'bg-gray-500' : idx === 3 ? 'bg-gray-400' : 'bg-gray-300'
                          }`} />
                          <span className="text-sm font-medium text-gray-700">{tier.tier}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-gray-900 font-medium">{tier.count}</span>
                          <span className="text-xs text-gray-500 w-12 text-right">{tier.percentage}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-1.5">
                        <div className={`h-1.5 rounded-full transition-all ${
                          idx === 0 ? 'bg-gray-900' : idx === 1 ? 'bg-gray-700' : idx === 2 ? 'bg-gray-500' : idx === 3 ? 'bg-gray-400' : 'bg-gray-300'
                        }`} style={{ width: `${tier.percentage}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900">Revenue Streams</h3>
                  <p className="text-sm text-gray-500 mt-1">Monthly breakdown by category</p>
                </div>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                    <XAxis dataKey="month" stroke="#9ca3af" tick={{ fontSize: 12 }} axisLine={{ stroke: '#e5e7eb' }} />
                    <YAxis stroke="#9ca3af" tick={{ fontSize: 12 }} axisLine={{ stroke: '#e5e7eb' }} />
                    <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                    <Bar dataKey="tickets" fill="#111827" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="merch" fill="#374151" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="hospitality" fill="#6b7280" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="donations" fill="#9ca3af" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900">Department Performance</h3>
                  <p className="text-sm text-gray-500 mt-1">Cross-functional metrics</p>
                </div>
                <div className="space-y-4">
                  {departmentMetrics.map((dept) => (
                    <div key={dept.department} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-900">{dept.department}</span>
                        <span className="text-xs text-gray-900 font-medium">+{dept.growth}%</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-xs">
                        <div>
                          <div className="text-gray-500">Engagement</div>
                          <div className="text-gray-900 font-medium mt-1">{dept.engagement}</div>
                        </div>
                        <div>
                          <div className="text-gray-500">Members</div>
                          <div className="text-gray-900 font-medium mt-1">{dept.members}</div>
                        </div>
                        <div>
                          <div className="text-gray-500">Revenue</div>
                          <div className="text-gray-900 font-medium mt-1">${(dept.revenue / 1000000).toFixed(1)}M</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )

      case 'analytics':
        return (
          <>
            <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-light text-gray-900 mb-6">Score Calculation Methodology</h3>
              <div className="grid grid-cols-5 gap-6 text-xs">
                {scoreBreakdown.map((item) => (
                  <div key={item.category} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="font-semibold text-gray-900 mb-1">{item.category}</div>
                    <div className="text-gray-600 mb-2">{item.weight}% of WonderScore</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-5 gap-6 mb-8">
              {scoreBreakdown.map((item, idx) => (
                <div key={item.category} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">{item.category}</div>
                    {item.score >= item.target ? (
                      <span className="text-gray-900 text-xs">✓</span>
                    ) : (
                      <span className="text-gray-400 text-xs">△</span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-2 mb-3">
                    <div className="text-5xl font-extralight text-gray-900">{item.score}</div>
                    <div className="text-lg text-gray-400 font-light">/ {item.target}</div>
                  </div>
                  <div className="relative mb-2">
                    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                      <div className={`h-2 rounded-full transition-all duration-500 ${
                        idx === 0 ? 'bg-gray-900' : idx === 1 ? 'bg-gray-700' : idx === 2 ? 'bg-gray-600' : idx === 3 ? 'bg-gray-500' : 'bg-gray-400'
                      }`} style={{ width: `${Math.min((item.score / item.target) * 100, 100)}%` }} />
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">{item.weight}% weight</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900">Score Composition</h3>
                  <p className="text-sm text-gray-500 mt-1">Radar analysis of key metrics</p>
                </div>
                <ResponsiveContainer width="100%" height={350}>
                  <RadarChart data={scoreBreakdown}>
                    <PolarGrid stroke="#e5e7eb" />
                    <PolarAngleAxis dataKey="category" tick={{ fill: '#6b7280', fontSize: 12 }} />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#9ca3af', fontSize: 10 }} />
                    <Radar name="Current" dataKey="score" stroke="#111827" fill="#111827" fillOpacity={0.2} />
                    <Radar name="Target" dataKey="target" stroke="#9ca3af" fill="#9ca3af" fillOpacity={0.1} strokeDasharray="5 5" />
                    <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900">Cohort Analysis</h3>
                  <p className="text-sm text-gray-500 mt-1">Member retention by acquisition period</p>
                </div>
                <div className="space-y-3">
                  {cohortData.map((cohort) => (
                    <div key={cohort.cohort} className="border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-900">{cohort.cohort}</span>
                        <span className="text-sm text-gray-600">{cohort.members} members</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-xs">
                        <div>
                          <div className="text-gray-500">Retention</div>
                          <div className="text-gray-900 font-medium mt-1">{cohort.retention}%</div>
                        </div>
                        <div>
                          <div className="text-gray-500">Avg Score</div>
                          <div className="text-gray-900 font-medium mt-1">{cohort.avgScore}</div>
                        </div>
                        <div>
                          <div className="text-gray-500">Revenue</div>
                          <div className="text-gray-900 font-medium mt-1">${(cohort.revenue / 1000).toFixed(0)}K</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )

      case 'members':
        return (
          <>
            <div className="grid grid-cols-4 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-5 h-5 text-gray-400" />
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Total Members</span>
                </div>
                <div className="text-4xl font-light text-gray-900">300</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-5 h-5 text-gray-400" />
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Elite Tier</span>
                </div>
                <div className="text-4xl font-light text-gray-900">45</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-5 h-5 text-gray-400" />
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Score</span>
                </div>
                <div className="text-4xl font-light text-gray-900">75</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-5 h-5 text-gray-400" />
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">At Risk</span>
                </div>
                <div className="text-4xl font-light text-gray-900">15</div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Member Directory</h3>
                    <p className="text-sm text-gray-500 mt-1">Detailed member-level analytics</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input type="text" placeholder="Search members..." className="pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" />
                    </div>
                    <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50">Export</button>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Member</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tier</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wonder Score</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engagement</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">LTV</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Active</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {membersList.map((member) => (
                      <tr key={member.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{member.name}</div>
                            <div className="text-xs text-gray-500">{member.id}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2.5 py-1 text-xs font-medium rounded-full ${
                            member.tier === 'Elite' ? 'bg-gray-900 text-white' :
                            member.tier === 'Champion' ? 'bg-gray-700 text-white' :
                            member.tier === 'Supporter' ? 'bg-gray-500 text-white' :
                            'bg-gray-300 text-gray-800'
                          }`}>
                            {member.tier}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">{member.score}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{member.engagement}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${member.ltv.toLocaleString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{member.lastActive}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full border ${
                            member.status === 'active' ? 'bg-white text-gray-900 border-gray-300' :
                            member.status === 'monitor' ? 'bg-gray-100 text-gray-700 border-gray-300' :
                            'bg-gray-900 text-white border-gray-900'
                          }`}>
                            <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                              member.status === 'active' ? 'bg-gray-400' :
                              member.status === 'monitor' ? 'bg-gray-500' :
                              'bg-white'
                            }`} />
                            {member.status === 'active' ? 'Active' : member.status === 'monitor' ? 'Monitor' : 'At Risk'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                          <button className="text-gray-400 hover:text-gray-600">
                            <MoreHorizontal className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )

      case 'revenue':
        return (
          <>
            <div className="grid grid-cols-4 gap-6 mb-8">
              <EnterpriseMetricCard label="Total Revenue" value="$4.6M" change="+119%" changeLabel="YoY" trend="up" />
              <EnterpriseMetricCard label="Avg Revenue/Member" value="$15,333" change="+42%" changeLabel="YoY" trend="up" />
              <EnterpriseMetricCard label="Revenue Growth" value="22.4%" change="+5.2pp" changeLabel="vs target" trend="up" />
              <EnterpriseMetricCard label="Program ROI" value="3.2x" change="+0.8x" changeLabel="improvement" trend="up" />
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900">Revenue by Source</h3>
                  <p className="text-sm text-gray-500 mt-1">Breakdown of income streams</p>
                </div>
                <div className="space-y-4">
                  {revenueBreakdown.map((source) => (
                    <div key={source.source}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">{source.source}</span>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-gray-900 font-medium">+{source.change}%</span>
                          <span className="text-sm text-gray-900 font-medium">${(source.amount / 1000000).toFixed(2)}M</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div className="h-2 rounded-full bg-gray-900 transition-all" style={{ width: `${source.percentage}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900">Revenue Trend</h3>
                  <p className="text-sm text-gray-500 mt-1">Monthly performance</p>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                    <XAxis dataKey="month" stroke="#9ca3af" tick={{ fontSize: 12 }} />
                    <YAxis stroke="#9ca3af" tick={{ fontSize: 12 }} />
                    <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                    <Area type="monotone" dataKey="tickets" stackId="1" stroke="#111827" fill="#111827" />
                    <Area type="monotone" dataKey="hospitality" stackId="1" stroke="#374151" fill="#374151" />
                    <Area type="monotone" dataKey="donations" stackId="1" stroke="#6b7280" fill="#6b7280" />
                    <Area type="monotone" dataKey="merch" stackId="1" stroke="#9ca3af" fill="#9ca3af" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900">Revenue by Member Tier</h3>
                <p className="text-sm text-gray-500 mt-1">LTV and contribution analysis</p>
              </div>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={tierDistribution}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis dataKey="tier" stroke="#9ca3af" tick={{ fontSize: 12 }} />
                  <YAxis stroke="#9ca3af" tick={{ fontSize: 12 }} />
                  <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                  <Bar dataKey="revenue" fill="#111827" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </>
        )

      case 'documentation':
        return (
          <>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Wonder Portal Documentation</h3>
                <p className="text-sm text-gray-500 mt-1">Complete guides for the Wonder Portal intelligence platform</p>
              </div>
              <button 
                onClick={() => setShowDocs(false)}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                Close Viewer
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="mb-4">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search Wonder Portal docs..."
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                  </div>
                </div>

                {groupedDocuments.map((category) => (
                  <div key={category.id} className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="text-gray-600">{category.icon}</div>
                      <h4 className="text-lg font-semibold text-gray-900">{category.name}</h4>
                      <span className="text-sm text-gray-400 ml-auto">({category.docs.length})</span>
                    </div>
                    <div className="space-y-2">
                      {category.docs.map((doc) => (
                        <button
                          key={doc.id}
                          onClick={() => handleDocumentClick(doc)}
                          className={`w-full text-left p-4 rounded-lg border transition-all flex items-center gap-3 ${
                            selectedDocument?.id === doc.id
                              ? 'bg-gray-900 text-white border-gray-900 shadow-md'
                              : 'bg-white border-gray-200 hover:border-gray-900 hover:shadow-sm'
                          }`}
                        >
                          <div className={selectedDocument?.id === doc.id ? 'text-white' : 'text-gray-600'}>
                            {doc.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className={`font-semibold truncate ${selectedDocument?.id === doc.id ? 'text-white' : 'text-gray-900'}`}>{doc.title}</h4>
                            <p className={`text-sm line-clamp-2 ${selectedDocument?.id === doc.id ? 'text-gray-200' : 'text-gray-500'}`}>{doc.description}</p>
                          </div>
                          <ChevronRight className={`w-4 h-4 flex-shrink-0 ${selectedDocument?.id === doc.id ? 'text-white' : 'text-gray-400'}`} />
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-2">
                {loading ? (
                  <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                    <div className="w-12 h-12 border-4 border-gray-900 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-gray-600">Loading document...</p>
                  </div>
                ) : selectedDocument && documentContent ? (
                  <div className="bg-white rounded-2xl shadow-lg p-8 overflow-hidden">
                    <div className="mb-6 pb-6 border-b border-gray-200">
                      <h2 className="text-3xl font-serif text-gray-900 mb-2">{selectedDocument.title}</h2>
                      <p className="text-gray-600">{selectedDocument.description}</p>
                    </div>
                    <div className="prose prose-lg max-w-none overflow-y-auto max-h-[calc(100vh-400px)]">
                      <ReactMarkdown
                        components={{
                          h1: ({ node, ...props }) => <h1 className="text-3xl font-serif text-gray-900 mb-4" {...props} />,
                          h2: ({ node, ...props }) => <h2 className="text-2xl font-serif text-gray-900 mb-3 mt-8" {...props} />,
                          h3: ({ node, ...props }) => <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-6" {...props} />,
                          p: ({ node, ...props }) => <p className="text-gray-700 mb-4 leading-relaxed" {...props} />,
                          code: ({ node, ...props }) => <code className="bg-gray-100 px-2 py-1 rounded text-sm" {...props} />,
                          ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
                          li: ({ node, ...props }) => <li className="text-gray-700" {...props} />,
                        }}
                      >
                        {documentContent}
                      </ReactMarkdown>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                    <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No Document Selected</h3>
                    <p className="text-gray-600">Choose a document from the list to view its contents</p>
                  </div>
                )}
              </div>
            </div>
          </>
        )

      default:
        return null
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-ink via-harbor to-ink flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900/10 rounded-full mb-4">
              <Lock className="w-8 h-8 text-gray-900" />
            </div>
            <h1 className="text-3xl font-light text-gray-900 mb-2 tracking-tight">Narratum</h1>
            <p className="text-gray-600">Intelligence Dashboard</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                autoFocus
              />
              {error && (
                <p className="mt-2 text-red-600 text-sm flex items-center gap-2">
                  <XCircle className="w-4 h-4" />
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Access Dashboard
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Protected intelligence platform
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="6" fill="#111827"/>
                    <path d="M9 16L13 20L23 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <div className="text-lg font-light text-gray-900 tracking-tight">Narratum</div>
                    <div className="text-xs text-gray-500">Intelligence Dashboard</div>
                  </div>
                </div>
              </div>
              
              <nav className="flex items-center gap-1">
                {['Overview', 'Analytics', 'Members', 'Revenue', 'Documentation'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab.toLowerCase())
                      if (tab.toLowerCase() !== 'documentation') {
                        setShowDocs(false)
                      }
                    }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === tab.toLowerCase()
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="px-8 py-8 max-w-[1800px] mx-auto">
        {renderContent()}
      </main>

      <div className="fixed bottom-6 right-6">
        <div className="bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-lg">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-gray-400">Powered by</span>
            <span className="font-medium text-gray-900">narratum.io</span>
          </div>
        </div>
      </div>
    </div>
  )
}
