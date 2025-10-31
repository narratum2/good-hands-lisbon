'use client'

import { usePathname } from 'next/navigation'
import SmartAssistant from './SmartAssistant'

/**
 * ConditionalSmartAssistant - Hides SmartAssistant on specific pages
 * 
 * Hidden on:
 * - /narratum (dashboard - password protected)
 * - /admin (admin pages)
 * 
 * Rationale:
 * - Dashboard pages don't need beauty salon chatbot
 * - Cleaner experience for internal tools
 */
export default function ConditionalSmartAssistant() {
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
  
  return <SmartAssistant />
}

