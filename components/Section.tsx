'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { fadeInUp } from '@/lib/motion-variants'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  background?: 'white' | 'shell' | 'porcelain' | 'sage' | 'ink' | 'gradient'
  padding?: 'default' | 'large' | 'small' | 'none'
  animate?: boolean
  fullWidth?: boolean
}

/**
 * Section Component
 * Standardized section wrapper with consistent spacing, backgrounds, and animations
 */
export default function Section({
  children,
  className = '',
  id,
  background = 'white',
  padding = 'default',
  animate = true,
  fullWidth = false,
}: SectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    shell: 'bg-shell',
    porcelain: 'bg-porcelain',
    sage: 'bg-gradient-to-br from-sage-light to-sage',
    ink: 'bg-ink text-porcelain',
    gradient: 'bg-gradient-to-br from-shell to-porcelain',
  }

  const paddingClasses = {
    default: 'section-padding',
    large: 'py-20 md:py-32',
    small: 'py-8 md:py-12',
    none: '',
  }

  const sectionClass = `${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`

  const content = fullWidth ? (
    children
  ) : (
    <div className="container-custom">{children}</div>
  )

  if (animate) {
    return (
      <motion.section
        id={id}
        className={sectionClass}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        {content}
      </motion.section>
    )
  }

  return (
    <section id={id} className={sectionClass}>
      {content}
    </section>
  )
}

