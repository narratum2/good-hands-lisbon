'use client'

import { usePathname } from 'next/navigation'
import Grain from './Grain'

/**
 * ConditionalGrain - Hides Grain overlay on specific pages
 * 
 * Hidden on:
 * - /narratum (dashboard - password protected)
 * - /admin (admin pages)
 * 
 * Rationale:
 * - Dashboard pages have clean enterprise design
 * - No need for decorative grain overlay
 */
export default function ConditionalGrain() {
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
  
  return <Grain />
}

