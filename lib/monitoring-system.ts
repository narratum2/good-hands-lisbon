/**
 * Advanced Monitoring and Alerting System
 * Comprehensive business and technical monitoring
 */

export interface MonitoringMetrics {
  performance: {
    responseTime: number
    throughput: number
    errorRate: number
    availability: number
  }
  business: {
    conversionRate: number
    revenue: number
    userEngagement: number
    customerSatisfaction: number
  }
  technical: {
    cpuUsage: number
    memoryUsage: number
    diskUsage: number
    networkLatency: number
  }
  security: {
    threatLevel: 'low' | 'medium' | 'high' | 'critical'
    incidentsCount: number
    vulnerabilitiesCount: number
    complianceScore: number
  }
}

export interface Alert {
  id: string
  type: 'performance' | 'business' | 'technical' | 'security'
  severity: 'info' | 'warning' | 'error' | 'critical'
  title: string
  description: string
  timestamp: Date
  resolved: boolean
  actions: string[]
}

/**
 * Performance Monitoring
 */
export const performanceMonitoring = {
  /**
   * Monitor Core Web Vitals
   */
  monitorCoreWebVitals: () => {
    if (typeof window === 'undefined') return
    
    // Monitor LCP
    new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          const lcp = entry.startTime
          
          // Send to analytics
          if ((window as any).gtag) {
            (window as any).gtag('event', 'core_web_vital', {
              event_category: 'Performance',
              event_label: 'LCP',
              value: Math.round(lcp),
              custom_parameter_1: lcp > 2500 ? 'needs_improvement' : 'good'
            })
          }
          
          // Alert if LCP is poor
          if (lcp > 4000) {
            monitoringSystem.createAlert({
              type: 'performance',
              severity: 'error',
              title: 'Poor LCP Performance',
              description: `Largest Contentful Paint is ${lcp.toFixed(0)}ms, exceeding 4s threshold`,
              actions: ['Optimize hero images', 'Implement resource preloading', 'Review server response times']
            })
          }
        }
      })
    }).observe({ entryTypes: ['largest-contentful-paint'] })
    
    // Monitor FID
    new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'first-input') {
          const fid = (entry as any).processingStart - entry.startTime
          
          // Send to analytics
          if ((window as any).gtag) {
            (window as any).gtag('event', 'core_web_vital', {
              event_category: 'Performance',
              event_label: 'FID',
              value: Math.round(fid),
              custom_parameter_1: fid > 100 ? 'needs_improvement' : 'good'
            })
          }
          
          // Alert if FID is poor
          if (fid > 300) {
            monitoringSystem.createAlert({
              type: 'performance',
              severity: 'error',
              title: 'Poor FID Performance',
              description: `First Input Delay is ${fid.toFixed(0)}ms, exceeding 300ms threshold`,
              actions: ['Optimize JavaScript execution', 'Implement code splitting', 'Reduce main thread work']
            })
          }
        }
      })
    }).observe({ entryTypes: ['first-input'] })
    
    // Monitor CLS
    let clsValue = 0
    new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value
          
          // Send to analytics
          if ((window as any).gtag) {
            (window as any).gtag('event', 'core_web_vital', {
              event_category: 'Performance',
              event_label: 'CLS',
              value: Math.round(clsValue * 1000),
              custom_parameter_1: clsValue > 0.25 ? 'needs_improvement' : 'good'
            })
          }
          
          // Alert if CLS is poor
          if (clsValue > 0.25) {
            monitoringSystem.createAlert({
              type: 'performance',
              severity: 'warning',
              title: 'Poor CLS Performance',
              description: `Cumulative Layout Shift is ${clsValue.toFixed(3)}, exceeding 0.25 threshold`,
              actions: ['Set image dimensions', 'Reserve space for dynamic content', 'Optimize font loading']
            })
          }
        }
      })
    }).observe({ entryTypes: ['layout-shift'] })
  },
  
  /**
   * Monitor page load performance
   */
  monitorPageLoad: () => {
    if (typeof window === 'undefined') return
    
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      
      const metrics = {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        firstByte: navigation.responseStart - navigation.requestStart,
        domInteractive: navigation.domInteractive - (navigation as any).navigationStart
      }
      
      // Send to analytics
      if ((window as any).gtag) {
        (window as any).gtag('event', 'page_load_metrics', {
          event_category: 'Performance',
          dom_content_loaded: Math.round(metrics.domContentLoaded),
          load_complete: Math.round(metrics.loadComplete),
          first_byte: Math.round(metrics.firstByte),
          dom_interactive: Math.round(metrics.domInteractive)
        })
      }
      
      // Alert if performance is poor
      if (metrics.domContentLoaded > 3000) {
        monitoringSystem.createAlert({
          type: 'performance',
          severity: 'warning',
          title: 'Slow DOM Content Loaded',
          description: `DOM Content Loaded took ${metrics.domContentLoaded.toFixed(0)}ms`,
          actions: ['Optimize critical rendering path', 'Reduce render-blocking resources', 'Implement code splitting']
        })
      }
    })
  }
}

/**
 * Business Monitoring
 */
export const businessMonitoring = {
  /**
   * Monitor conversion funnel
   */
  monitorConversionFunnel: () => {
    const funnelSteps = [
      { step: 'page_view', threshold: 100 },
      { step: 'service_view', threshold: 50 },
      { step: 'booking_started', threshold: 25 },
      { step: 'booking_completed', threshold: 10 }
    ]
    
    funnelSteps.forEach((step, index) => {
      if (index > 0) {
        const previousStep = funnelSteps[index - 1]
        const currentConversion = (step.threshold / previousStep.threshold) * 100
        
        if (currentConversion < 20) { // Less than 20% conversion
          monitoringSystem.createAlert({
            type: 'business',
            severity: 'warning',
            title: `Low Conversion Rate: ${step.step}`,
            description: `Conversion from ${previousStep.step} to ${step.step} is ${currentConversion.toFixed(1)}%`,
            actions: ['Optimize user experience', 'A/B test conversion elements', 'Review user journey']
          })
        }
      }
    })
  },
  
  /**
   * Monitor revenue metrics
   */
  monitorRevenue: (dailyRevenue: number, targetRevenue: number) => {
    const revenuePercentage = (dailyRevenue / targetRevenue) * 100
    
    if (revenuePercentage < 80) {
      monitoringSystem.createAlert({
        type: 'business',
        severity: 'warning',
        title: 'Low Daily Revenue',
        description: `Daily revenue is ${revenuePercentage.toFixed(1)}% of target (€${dailyRevenue} vs €${targetRevenue})`,
        actions: ['Review pricing strategy', 'Optimize conversion rate', 'Increase marketing efforts']
      })
    }
    
    if (revenuePercentage > 120) {
      monitoringSystem.createAlert({
        type: 'business',
        severity: 'info',
        title: 'High Daily Revenue',
        description: `Daily revenue exceeds target by ${(revenuePercentage - 100).toFixed(1)}% (€${dailyRevenue} vs €${targetRevenue})`,
        actions: ['Analyze success factors', 'Scale successful strategies', 'Consider capacity expansion']
      })
    }
  },
  
  /**
   * Monitor customer satisfaction
   */
  monitorCustomerSatisfaction: (satisfactionScore: number) => {
    if (satisfactionScore < 4.0) {
      monitoringSystem.createAlert({
        type: 'business',
        severity: 'error',
        title: 'Low Customer Satisfaction',
        description: `Customer satisfaction score is ${satisfactionScore}/5.0`,
        actions: ['Review service quality', 'Implement customer feedback loop', 'Train staff on customer service']
      })
    }
  }
}

/**
 * Technical Monitoring
 */
export const technicalMonitoring = {
  /**
   * Monitor API performance
   */
  monitorApiPerformance: async (endpoint: string) => {
    try {
      const startTime = performance.now()
      const response = await fetch(endpoint)
      const endTime = performance.now()
      
      const responseTime = endTime - startTime
      
      if (responseTime > 2000) { // More than 2 seconds
        monitoringSystem.createAlert({
          type: 'technical',
          severity: 'warning',
          title: 'Slow API Response',
          description: `API endpoint ${endpoint} responded in ${responseTime.toFixed(0)}ms`,
          actions: ['Optimize database queries', 'Implement caching', 'Scale server resources']
        })
      }
      
      if (!response.ok) {
        monitoringSystem.createAlert({
          type: 'technical',
          severity: 'error',
          title: 'API Error',
          description: `API endpoint ${endpoint} returned ${response.status} ${response.statusText}`,
          actions: ['Check server logs', 'Review error handling', 'Implement retry logic']
        })
      }
    } catch (error) {
      monitoringSystem.createAlert({
        type: 'technical',
        severity: 'critical',
        title: 'API Connection Failed',
        description: `Failed to connect to API endpoint ${endpoint}`,
        actions: ['Check network connectivity', 'Verify server status', 'Implement fallback mechanisms']
      })
    }
  },
  
  /**
   * Monitor error rates
   */
  monitorErrorRates: (errorCount: number, totalRequests: number) => {
    const errorRate = (errorCount / totalRequests) * 100
    
    if (errorRate > 5) { // More than 5% error rate
      monitoringSystem.createAlert({
        type: 'technical',
        severity: 'critical',
        title: 'High Error Rate',
        description: `Error rate is ${errorRate.toFixed(2)}% (${errorCount} errors out of ${totalRequests} requests)`,
        actions: ['Review error logs', 'Implement better error handling', 'Add monitoring and alerting']
      })
    }
  }
}

/**
 * Security Monitoring
 */
export const securityMonitoring = {
  /**
   * Monitor failed login attempts
   */
  monitorFailedLogins: (ip: string, attempts: number) => {
    if (attempts > 10) {
      monitoringSystem.createAlert({
        type: 'security',
        severity: 'critical',
        title: 'Potential Brute Force Attack',
        description: `IP ${ip} has made ${attempts} failed login attempts`,
        actions: ['Block IP address', 'Implement rate limiting', 'Notify security team']
      })
    }
  },
  
  /**
   * Monitor suspicious activity
   */
  monitorSuspiciousActivity: (activity: string, details: any) => {
    monitoringSystem.createAlert({
      type: 'security',
      severity: 'warning',
      title: 'Suspicious Activity Detected',
      description: `${activity}: ${JSON.stringify(details)}`,
      actions: ['Review user behavior', 'Implement additional monitoring', 'Consider security measures']
    })
  }
}

/**
 * Main Monitoring System
 */
export const monitoringSystem = {
  alerts: [] as Alert[],
  
  /**
   * Create a new alert
   */
  createAlert: (alertData: Omit<Alert, 'id' | 'timestamp' | 'resolved'>) => {
    const alert: Alert = {
      id: `alert_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date(),
      resolved: false,
      ...alertData
    }
    
    monitoringSystem.alerts.push(alert)
    
    // Send to analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'alert_created', {
        event_category: 'Monitoring',
        alert_type: alert.type,
        alert_severity: alert.severity,
        alert_title: alert.title
      })
    }
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.warn(`🚨 Alert [${alert.severity.toUpperCase()}]: ${alert.title}`, alert)
    }
    
    return alert
  },
  
  /**
   * Resolve an alert
   */
  resolveAlert: (alertId: string) => {
    const alert = monitoringSystem.alerts.find(a => a.id === alertId)
    if (alert) {
      alert.resolved = true
      
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'alert_resolved', {
          event_category: 'Monitoring',
          alert_type: alert.type,
          alert_severity: alert.severity
        })
      }
    }
  },
  
  /**
   * Get active alerts
   */
  getActiveAlerts: () => {
    return monitoringSystem.alerts.filter(alert => !alert.resolved)
  },
  
  /**
   * Get alerts by type
   */
  getAlertsByType: (type: Alert['type']) => {
    return monitoringSystem.alerts.filter(alert => alert.type === type)
  },
  
  /**
   * Get alerts by severity
   */
  getAlertsBySeverity: (severity: Alert['severity']) => {
    return monitoringSystem.alerts.filter(alert => alert.severity === severity)
  },
  
  /**
   * Initialize monitoring
   */
  initialize: () => {
    if (typeof window === 'undefined') return
    
    // Initialize performance monitoring
    performanceMonitoring.monitorCoreWebVitals()
    performanceMonitoring.monitorPageLoad()
    
    // Initialize business monitoring
    businessMonitoring.monitorConversionFunnel()
    
    // Initialize technical monitoring
    technicalMonitoring.monitorApiPerformance('/api/health')
    
    console.log('🔍 Monitoring system initialized')
  }
}

/**
 * Alert Management Dashboard Data
 */
export const generateMonitoringDashboard = () => {
  const activeAlerts = monitoringSystem.getActiveAlerts()
  const criticalAlerts = monitoringSystem.getAlertsBySeverity('critical')
  const performanceAlerts = monitoringSystem.getAlertsByType('performance')
  const businessAlerts = monitoringSystem.getAlertsByType('business')
  
  return {
    summary: {
      totalAlerts: activeAlerts.length,
      criticalAlerts: criticalAlerts.length,
      performanceAlerts: performanceAlerts.length,
      businessAlerts: businessAlerts.length
    },
    alerts: activeAlerts,
    trends: {
      alertsLast24h: activeAlerts.filter(alert => 
        Date.now() - alert.timestamp.getTime() < 24 * 60 * 60 * 1000
      ).length,
      resolutionRate: (monitoringSystem.alerts.filter(alert => alert.resolved).length / monitoringSystem.alerts.length) * 100
    }
  }
}

