'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonLinkProps {
  href: string
  variant?: 'primary' | 'secondary' | 'gold'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  className?: string
  fullWidth?: boolean
}

export default function ButtonLink({
  href,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  fullWidth = false,
}: ButtonLinkProps) {
  const baseClasses = 'inline-block text-center font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'
  
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    gold: 'btn-gold',
  }
  
  const sizeClasses = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-10 py-4 text-base',
    lg: 'px-12 py-4 text-lg',
  }
  
  const widthClass = fullWidth ? 'w-full' : ''
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={widthClass}
    >
      <Link
        href={href}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  )
}

