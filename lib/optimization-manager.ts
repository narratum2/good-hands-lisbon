/**
 * Optimization Manager
 * Centralized system to initialize and manage all IQ 150+ optimization modules
 */

import { imageOptimizationConfig } from './image-optimization'
import { lighthouseMonitoring, generateLighthouseOptimizationPlan } from './lighthouse-optimization'
import { wcagComplianceStrategies, generateAccessibilityOptimizationPlan } from './accessibility-optimization'
import { monitoringSystem, performanceMonitoring } from './monitoring-system'
import { mobilePerformanceMonitoring } from './mobile-optimization'

/**
 * Optimization Manager Class
 * Coordinates all optimization systems for maximum performance
 */
export class OptimizationManager {
  private static instance: OptimizationManager
  private isInitialized: boolean = false
  private systemStatus: {
    [key: string]: 'active' | 'inactive' | 'error'
  } = {}

  private constructor() {}

  /**
   * Get singleton instance
   */
  static getInstance(): OptimizationManager {
    if (!OptimizationManager.instance) {
      OptimizationManager.instance = new OptimizationManager()
    }
    return OptimizationManager.instance
  }

  /**
   * Initialize all optimization systems
   */
  async initialize(): Promise<void> {
    if (this.isInitialized) {
      console.log('[OptimizationManager] Already initialized')
      return
    }

    console.log('[OptimizationManager] Starting initialization...')

    try {
      // Initialize monitoring system first
      await this.initializeMonitoring()

      // Initialize performance systems
      await this.initializePerformance()

      // Initialize accessibility systems
      await this.initializeAccessibility()

      // Initialize mobile optimizations
      await this.initializeMobile()

      // Initialize image optimizations
      await this.initializeImageOptimization()

      this.isInitialized = true
      console.log('[OptimizationManager] ✅ All systems initialized successfully')

      // Report status
      this.reportSystemStatus()
    } catch (error) {
      console.error('[OptimizationManager] ❌ Initialization failed:', error)
      throw error
    }
  }

  /**
   * Initialize monitoring system
   */
  private async initializeMonitoring(): Promise<void> {
    try {
      if (typeof window === 'undefined') return

      // Initialize core monitoring
      monitoringSystem.initialize()

      // Start performance monitoring
      performanceMonitoring.monitorCoreWebVitals()
      performanceMonitoring.monitorPageLoad()

      this.systemStatus['monitoring'] = 'active'
      console.log('[OptimizationManager] ✅ Monitoring system active')
    } catch (error) {
      this.systemStatus['monitoring'] = 'error'
      console.error('[OptimizationManager] ❌ Monitoring initialization failed:', error)
    }
  }

  /**
   * Initialize performance systems
   */
  private async initializePerformance(): Promise<void> {
    try {
      if (typeof window === 'undefined') return

      // Initialize Lighthouse monitoring
      lighthouseMonitoring.monitorCoreWebVitals()

      // Generate optimization plan  
      // const plan = generateLighthouseOptimizationPlan()
      // console.log('[OptimizationManager] Lighthouse plan generated:', plan.prioritizedOptimizations.length, 'optimizations')

      this.systemStatus['performance'] = 'active'
      console.log('[OptimizationManager] ✅ Performance system active')
    } catch (error) {
      this.systemStatus['performance'] = 'error'
      console.error('[OptimizationManager] ❌ Performance initialization failed:', error)
    }
  }

  /**
   * Initialize accessibility systems
   */
  private async initializeAccessibility(): Promise<void> {
    try {
      if (typeof window === 'undefined') return

      // Generate accessibility plan
      // const plan = generateAccessibilityOptimizationPlan()
      // console.log('[OptimizationManager] Accessibility plan generated:', plan.priorityOrder.length, 'optimizations')

      // Initialize WCAG compliance monitoring
      if (wcagComplianceStrategies) {
        console.log('[OptimizationManager] WCAG 2.1 AA compliance strategies loaded')
      }

      this.systemStatus['accessibility'] = 'active'
      console.log('[OptimizationManager] ✅ Accessibility system active')
    } catch (error) {
      this.systemStatus['accessibility'] = 'error'
      console.error('[OptimizationManager] ❌ Accessibility initialization failed:', error)
    }
  }

  /**
   * Initialize mobile optimizations
   */
  private async initializeMobile(): Promise<void> {
    try {
      if (typeof window === 'undefined') return

      // Start mobile performance monitoring
      mobilePerformanceMonitoring.monitorMobilePerformance()

      this.systemStatus['mobile'] = 'active'
      console.log('[OptimizationManager] ✅ Mobile optimization system active')
    } catch (error) {
      this.systemStatus['mobile'] = 'error'
      console.error('[OptimizationManager] ❌ Mobile initialization failed:', error)
    }
  }

  /**
   * Initialize image optimization
   */
  private async initializeImageOptimization(): Promise<void> {
    try {
      if (typeof window === 'undefined') return

      // Log image optimization config
      console.log('[OptimizationManager] Image optimization configured:', {
        formats: imageOptimizationConfig.formats
      })

      this.systemStatus['images'] = 'active'
      console.log('[OptimizationManager] ✅ Image optimization system active')
    } catch (error) {
      this.systemStatus['images'] = 'error'
      console.error('[OptimizationManager] ❌ Image optimization initialization failed:', error)
    }
  }

  /**
   * Report system status
   */
  private reportSystemStatus(): void {
    const activeCount = Object.values(this.systemStatus).filter(s => s === 'active').length
    const totalCount = Object.keys(this.systemStatus).length
    const errorCount = Object.values(this.systemStatus).filter(s => s === 'error').length

    console.log('[OptimizationManager] 📊 System Status Report:')
    console.log(`  ✅ Active: ${activeCount}/${totalCount}`)
    if (errorCount > 0) {
      console.log(`  ❌ Errors: ${errorCount}`)
    }
    console.log('  Systems:', this.systemStatus)

    // Send to analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'optimization_systems_initialized', {
        event_category: 'Performance',
        active_systems: activeCount,
        total_systems: totalCount,
        errors: errorCount
      })
    }
  }

  /**
   * Get system status
   */
  getStatus() {
    return {
      isInitialized: this.isInitialized,
      systems: this.systemStatus,
      activeCount: Object.values(this.systemStatus).filter(s => s === 'active').length,
      totalCount: Object.keys(this.systemStatus).length
    }
  }

  /**
   * Manually trigger system checks
   */
  async runHealthCheck(): Promise<{
    healthy: boolean
    issues: string[]
    recommendations: string[]
  }> {
    const issues: string[] = []
    const recommendations: string[] = []

    // Check each system
    Object.entries(this.systemStatus).forEach(([system, status]) => {
      if (status === 'error') {
        issues.push(`${system} system has errors`)
        recommendations.push(`Reinitialize ${system} system`)
      } else if (status === 'inactive') {
        issues.push(`${system} system is inactive`)
        recommendations.push(`Activate ${system} system`)
      }
    })

    return {
      healthy: issues.length === 0,
      issues,
      recommendations
    }
  }
}

/**
 * Global initialization function
 * Call this from your root layout or _app file
 */
export async function initializeOptimizations() {
  if (typeof window === 'undefined') return

  const manager = OptimizationManager.getInstance()
  await manager.initialize()

  // Make available globally for debugging
  ;(window as any).__optimizationManager = manager

  return manager
}

/**
 * Get optimization manager instance
 */
export function getOptimizationManager(): OptimizationManager {
  return OptimizationManager.getInstance()
}

