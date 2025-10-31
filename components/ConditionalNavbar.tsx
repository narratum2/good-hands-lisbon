'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'

/**
 * ConditionalNavbar - Hides navbar on specific pages for better UX
 * 
 * Hidden on:
 * - /narratum (dashboard - password protected)
 * - /admin (admin pages)
 * 
 * Rationale:
 * - Dashboard pages have their own navigation
 * - Cleaner experience for internal tools
 */
export default function ConditionalNavbar() {
  const pathname = usePathname()
  
  // Hide navbar on these paths
  const hideNavbarPaths = [
    '/narratum',
    '/admin',
  ]
  
  const shouldHideNavbar = hideNavbarPaths.some(path => 
    pathname?.startsWith(path)
  )
  
  if (shouldHideNavbar) {
    return null
  }
  
  return <Navbar />
}

