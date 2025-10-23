'use client'

import { useEffect, useState } from 'react'

export default function AccessibilityEnhancements() {
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const [isHighContrast, setIsHighContrast] = useState(false)
  const [fontSize, setFontSize] = useState(16)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)')
    setIsHighContrast(highContrastQuery.matches)

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches)
    }

    highContrastQuery.addEventListener('change', handleContrastChange)

    // Apply accessibility enhancements
    applyAccessibilityEnhancements()

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
      highContrastQuery.removeEventListener('change', handleContrastChange)
    }
  }, [])

  const applyAccessibilityEnhancements = () => {
    const root = document.documentElement

    // Apply reduced motion
    if (isReducedMotion) {
      root.style.setProperty('--animation-duration', '0ms')
      root.style.setProperty('--transition-duration', '0ms')
      root.classList.add('reduced-motion')
    } else {
      root.style.removeProperty('--animation-duration')
      root.style.removeProperty('--transition-duration')
      root.classList.remove('reduced-motion')
    }

    // Apply high contrast
    if (isHighContrast) {
      root.classList.add('high-contrast')
    } else {
      root.classList.remove('high-contrast')
    }

    // Apply font size
    root.style.fontSize = `${fontSize}px`
  }

  useEffect(() => {
    applyAccessibilityEnhancements()
  }, [isReducedMotion, isHighContrast, fontSize])

  return null
}

// Accessibility utilities
export const focusableElements = [
  'a[href]',
  'area[href]',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'button:not([disabled])',
  'iframe',
  'object',
  'embed',
  '[contenteditable]',
  '[tabindex]:not([tabindex^="-"])',
].join(',')

export function trapFocus(element: HTMLElement) {
  const focusableContent = element.querySelectorAll(focusableElements)
  const firstFocusableElement = focusableContent[0] as HTMLElement
  const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement

  element.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus()
          e.preventDefault()
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus()
          e.preventDefault()
        }
      }
    }
  })
}

export function announceToScreenReader(message: string) {
  const announcement = document.createElement('div')
  announcement.setAttribute('aria-live', 'polite')
  announcement.setAttribute('aria-atomic', 'true')
  announcement.className = 'sr-only'
  announcement.textContent = message

  document.body.appendChild(announcement)

  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
}

// Skip link component
export function SkipLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-gold focus:text-ink focus:rounded focus:shadow-xl focus:outline-none"
    >
      {children}
    </a>
  )
}

// Focus management hook
export function useFocusManagement() {
  const [focusedElement, setFocusedElement] = useState<HTMLElement | null>(null)

  const saveFocus = () => {
    setFocusedElement(document.activeElement as HTMLElement)
  }

  const restoreFocus = () => {
    if (focusedElement) {
      focusedElement.focus()
      setFocusedElement(null)
    }
  }

  return { saveFocus, restoreFocus }
}

// Keyboard navigation hook
export function useKeyboardNavigation() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape key handling
      if (e.key === 'Escape') {
        const modal = document.querySelector('[role="dialog"]')
        if (modal) {
          const closeButton = modal.querySelector('[data-close-modal]') as HTMLElement
          if (closeButton) {
            closeButton.click()
          }
        }
      }

      // Arrow key navigation for menus
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const menu = document.querySelector('[role="menu"]')
        if (menu && menu.contains(document.activeElement)) {
          e.preventDefault()
          const items = Array.from(menu.querySelectorAll('[role="menuitem"]')) as HTMLElement[]
          const currentIndex = items.indexOf(document.activeElement as HTMLElement)
          
          if (e.key === 'ArrowDown') {
            const nextIndex = (currentIndex + 1) % items.length
            items[nextIndex]?.focus()
          } else {
            const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1
            items[prevIndex]?.focus()
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])
}

// Screen reader only text
export function ScreenReaderOnly({ children }: { children: React.ReactNode }) {
  return (
    <span className="sr-only">
      {children}
    </span>
  )
}



