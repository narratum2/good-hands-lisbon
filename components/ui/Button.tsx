import Link from 'next/link'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface BaseButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'gold' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  loading?: boolean
  className?: string
  onClick?: () => void
}

interface ButtonProps extends BaseButtonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {}

interface LinkButtonProps extends BaseButtonProps {
  href: string
  external?: boolean
  target?: string
  rel?: string
}

type ButtonComponentProps = ButtonProps | LinkButtonProps

// Button variant styles
const buttonVariants = {
  primary: 'bg-ink text-white hover:bg-ink-light focus:ring-ink',
  secondary: 'bg-porcelain text-ink border border-harbor/20 hover:bg-porcelain-dark focus:ring-harbor',
  gold: 'bg-gold text-ink hover:bg-gold/90 focus:ring-gold',
  outline: 'bg-transparent text-ink border border-ink hover:bg-ink hover:text-white focus:ring-ink',
  ghost: 'bg-transparent text-harbor hover:bg-porcelain hover:text-ink focus:ring-harbor',
}

// Button sizes
const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl',
}

// Base button classes
const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium rounded-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

export default function Button(props: ButtonComponentProps) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false,
    className = '',
    ...rest
  } = props

  const isLink = 'href' in props
  const buttonClasses = `${baseClasses} ${buttonVariants[variant]} ${buttonSizes[size]} ${className}`

  const buttonContent = (
    <>
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </>
  )

  if (isLink) {
    const { href, external = false, target, rel, ...linkProps } = props as LinkButtonProps
    
    if (external) {
      return (
        <a
          href={href}
          target={target || '_blank'}
          rel={rel || 'noopener noreferrer'}
          className={buttonClasses}
          aria-label={typeof children === 'string' ? children : undefined}
        >
          {buttonContent}
        </a>
      )
    }

    return (
      <Link href={href} className={buttonClasses} {...linkProps}>
        {buttonContent}
      </Link>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={buttonClasses}
      disabled={disabled || loading}
      {...(rest as ButtonProps)}
    >
      {buttonContent}
    </motion.button>
  )
}

// Convenience components for common use cases
export const PrimaryButton = (props: Omit<ButtonComponentProps, 'variant'>) => (
  <Button variant="primary" {...props} />
)

export const SecondaryButton = (props: Omit<ButtonComponentProps, 'variant'>) => (
  <Button variant="secondary" {...props} />
)

export const GoldButton = (props: Omit<ButtonComponentProps, 'variant'>) => (
  <Button variant="gold" {...props} />
)

export const OutlineButton = (props: Omit<ButtonComponentProps, 'variant'>) => (
  <Button variant="outline" {...props} />
)

export const GhostButton = (props: Omit<ButtonComponentProps, 'variant'>) => (
  <Button variant="ghost" {...props} />
)
