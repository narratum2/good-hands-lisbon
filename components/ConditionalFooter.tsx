'use client'

import { usePathname } from 'next/navigation'
import Footer from './Footer'

/**
 * ConditionalFooter - Hides footer on specific pages for better UX
 * 
 * Hidden on:
 * - /book (booking funnel - avoid distraction)
 * - Payment/checkout pages
 * 
 * Rationale:
 * - Booking pages need user focus, no competing CTAs
 * - Cleaner mobile experience
 * - Reduces confusion during critical flows
 */
export default function ConditionalFooter() {
  const pathname = usePathname()
  
  // Hide footer on these paths
  const hideFooterPaths = [
    '/book',
    '/checkout',
    '/payment',
    '/narratum',
    '/admin',
  ]
  
  const shouldHideFooter = hideFooterPaths.some(path => 
    pathname?.startsWith(path)
  )
  
  if (shouldHideFooter) {
    return null
  }
  
  return <Footer />
}

