'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ReactNode } from 'react'
import { buttonHover, buttonTap } from '@/lib/motion-variants'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'gold' | 'dark' | 'secondary-light'
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  fullWidth?: boolean
  size?: 'small' | 'medium' | 'large'
  className?: string
  external?: boolean
  animate?: boolean
}

/**
 * Button Component
 * Standardized button with consistent styling and variants
 * Can be used as a button or link
 */
export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
  size = 'medium',
  className = '',
  external = false,
  animate = true,
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium uppercase tracking-widest transition-all focus-visible-ring disabled:opacity-50 disabled:cursor-not-allowed'

  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    gold: 'btn-gold',
    dark: 'btn-dark',
    'secondary-light': 'btn-secondary-light',
  }

  const sizeClasses = {
    small: 'px-4 py-2 text-xs',
    medium: 'px-6 py-3 text-sm',
    large: 'px-8 py-4 text-base',
  }

  const widthClass = fullWidth ? 'w-full' : ''

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`.trim()

  // If href is provided, render as Link
  if (href) {
    if (external) {
      if (animate) {
        return (
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClasses}
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            {children}
          </motion.a>
        )
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      )
    }

    if (animate) {
      return (
        <Link href={href} className={combinedClasses}>
          <motion.span
            className="inline-block"
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            {children}
          </motion.span>
        </Link>
      )
    }

    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    )
  }

  // Render as button
  if (animate) {
    return (
      <motion.button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={combinedClasses}
        whileHover={!disabled ? buttonHover : undefined}
        whileTap={!disabled ? buttonTap : undefined}
      >
        {children}
      </motion.button>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {children}
    </button>
  )
}

