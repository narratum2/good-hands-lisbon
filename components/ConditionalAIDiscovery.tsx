'use client'

import { usePathname } from 'next/navigation'
import AIDiscoveryTracker from './AIDiscoveryTracker'

/**
 * ConditionalAIDiscoveryTracker - Hides AIDiscoveryTracker on specific pages
 * 
 * Hidden on:
 * - /narratum (dashboard - password protected)
 * - /admin (admin pages)
 * 
 * Rationale:
 * - Dashboard pages don't need beauty salon discovery tracking
 * - Cleaner experience for internal tools
 */
export default function ConditionalAIDiscovery() {
  const pathname = usePathname()
  
  // Hide on these paths
  const hidePaths = [
    '/narratum',
    '/admin',
  ]
  
  const shouldHide = hidePaths.some(path => 
    pathname?.startsWith(path)
  )
  
  if (shouldHide) {
    return null
  }
  
  return <AIDiscoveryTracker />
}

