'use client'

import { useEffect, useState } from 'react'
import { initializeOptimizations, getOptimizationManager } from '@/lib/optimization-manager'

/**
 * Optimization Provider Component
 * Initializes all IQ 150+ optimization systems
 */
export default function OptimizationProvider() {
  const [isInitialized, setIsInitialized] = useState(false)
  const [systemStatus, setSystemStatus] = useState<any>(null)

  useEffect(() => {
    // Initialize all optimization systems
    const init = async () => {
      try {
        console.log('[OptimizationProvider] Starting initialization...')
        const manager = await initializeOptimizations()
        
        // Get status
        const status = manager?.getStatus()
        setSystemStatus(status)
        setIsInitialized(true)

        console.log('[OptimizationProvider] ✅ Initialization complete')

        // Run health check after 5 seconds
        setTimeout(async () => {
          const healthCheck = await manager?.runHealthCheck()
          console.log('[OptimizationProvider] Health Check:', healthCheck)
          
          if (healthCheck && !healthCheck.healthy) {
            console.warn('[OptimizationProvider] ⚠️ Health check failed:', healthCheck.issues)
          }
        }, 5000)
      } catch (error) {
        console.error('[OptimizationProvider] ❌ Initialization failed:', error)
      }
    }

    init()
  }, [])

  // This component doesn't render anything visible
  // It just initializes the optimization systems
  return null
}

/**
 * Optimization Status Badge (for debugging)
 * Add this to your layout during development to see system status
 */
export function OptimizationStatusBadge() {
  const [status, setStatus] = useState<any>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return

    // Get status every 5 seconds
    const interval = setInterval(() => {
      try {
        const manager = getOptimizationManager()
        const currentStatus = manager.getStatus()
        setStatus(currentStatus)
      } catch (error) {
        console.error('[OptimizationStatusBadge] Error getting status:', error)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  if (!status || process.env.NODE_ENV !== 'development') return null

  return (
    <div className="fixed bottom-4 right-4 z-[9999]">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-gold text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gold-dark transition-colors text-sm font-semibold"
      >
        🚀 Optimizations {status.isInitialized ? '✅' : '⏳'}
      </button>
      
      {isVisible && (
        <div className="absolute bottom-full right-0 mb-2 bg-white text-ink rounded-lg shadow-xl p-4 min-w-[300px] border border-gray-200">
          <h3 className="font-bold mb-2 text-lg">Optimization Systems</h3>
          <div className="space-y-2 text-sm">
            <div>
              <strong>Status:</strong> {status.isInitialized ? 'Initialized ✅' : 'Loading ⏳'}
            </div>
            <div>
              <strong>Active:</strong> {status.activeCount}/{status.totalCount}
            </div>
            <div className="mt-3 pt-3 border-t border-gray-200">
              <strong className="block mb-2">Systems:</strong>
              {Object.entries(status.systems).map(([system, state]: [string, any]) => (
                <div key={system} className="flex justify-between items-center py-1">
                  <span className="capitalize">{system}</span>
                  <span className={state === 'active' ? 'text-green-600' : state === 'error' ? 'text-red-600' : 'text-gray-500'}>
                    {state === 'active' ? '✅' : state === 'error' ? '❌' : '⏸️'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

