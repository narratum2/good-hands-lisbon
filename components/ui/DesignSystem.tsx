'use client'

import { createContext, useContext, ReactNode } from 'react'

interface DesignSystemContextType {
  typography: {
    display: string
    headline: string
    title: string
    subtitle: string
    bodyLarge: string
    body: string
    caption: string
  }
  spacing: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    '2xl': string
    '3xl': string
    '4xl': string
  }
  colors: {
    primary: string
    secondary: string
    accent: string
    text: string
    textSecondary: string
    background: string
    surface: string
  }
}

const DesignSystemContext = createContext<DesignSystemContextType | null>(null)

export function DesignSystemProvider({ children }: { children: ReactNode }) {
  const designSystem: DesignSystemContextType = {
    typography: {
      display: 'text-5xl md:text-7xl font-serif font-light leading-tight',
      headline: 'text-4xl md:text-6xl font-serif font-light leading-tight',
      title: 'text-3xl md:text-4xl font-serif font-light leading-tight',
      subtitle: 'text-xl md:text-2xl font-light leading-relaxed',
      bodyLarge: 'text-lg md:text-xl leading-relaxed',
      body: 'text-base md:text-lg leading-relaxed',
      caption: 'text-sm md:text-base text-harbor',
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
      '2xl': '32px',
      '3xl': '48px',
      '4xl': '64px',
    },
    colors: {
      primary: 'var(--black)',
      secondary: 'var(--gray-dark)',
      accent: 'var(--gold)',
      text: 'var(--black)',
      textSecondary: 'var(--gray-dark)',
      background: 'var(--white)',
      surface: 'var(--off-white)',
    },
  }

  return (
    <DesignSystemContext.Provider value={designSystem}>
      {children}
    </DesignSystemContext.Provider>
  )
}

export function useDesignSystem() {
  const context = useContext(DesignSystemContext)
  if (!context) {
    throw new Error('useDesignSystem must be used within DesignSystemProvider')
  }
  return context
}

// Typography components with consistent styling
export function DisplayText({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h1 className={`text-5xl md:text-7xl font-serif font-light leading-tight ${className}`} style={{ letterSpacing: '-0.02em', color: 'var(--black)' }}>
      {children}
    </h1>
  )
}

export function HeadlineText({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`text-4xl md:text-6xl font-serif font-light leading-tight ${className}`} style={{ letterSpacing: '-0.02em', color: 'var(--black)' }}>
      {children}
    </h2>
  )
}

export function TitleText({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h3 className={`text-3xl md:text-4xl font-serif font-light leading-tight ${className}`} style={{ letterSpacing: '-0.01em', color: 'var(--black)' }}>
      {children}
    </h3>
  )
}

export function SubtitleText({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-xl md:text-2xl font-light leading-relaxed ${className}`} style={{ lineHeight: '1.7', color: 'var(--gray-dark)' }}>
      {children}
    </p>
  )
}

export function BodyText({ children, className = '', maxWidth = '65ch' }: { children: ReactNode; className?: string; maxWidth?: string }) {
  return (
    <p className={`text-lg leading-relaxed ${className}`} style={{ lineHeight: '1.8', color: 'var(--gray-dark)', maxWidth }}>
      {children}
    </p>
  )
}

export function CaptionText({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-sm md:text-base text-harbor ${className}`}>
      {children}
    </p>
  )
}

// Layout components
export function Container({ children, size = 'default', className = '' }: { 
  children: ReactNode
  size?: 'narrow' | 'default' | 'wide'
  className?: string
}) {
  const sizeClasses = {
    narrow: 'max-w-4xl',
    default: 'max-w-7xl',
    wide: 'max-w-8xl',
  }

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  )
}

export function Section({ children, background = 'white', padding = 'default', className = '' }: {
  children: ReactNode
  background?: 'white' | 'shell' | 'porcelain' | 'ink'
  padding?: 'sm' | 'default' | 'lg'
  className?: string
}) {
  const backgroundClasses = {
    white: 'bg-white',
    shell: 'bg-shell',
    porcelain: 'bg-porcelain',
    ink: 'bg-ink text-white',
  }

  const paddingClasses = {
    sm: 'py-12 md:py-16',
    default: 'py-16 md:py-24 lg:py-32',
    lg: 'py-20 md:py-28 lg:py-36',
  }

  return (
    <section className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}>
      {children}
    </section>
  )
}

// Card components
export function Card({ children, variant = 'default', className = '', ...props }: {
  children: ReactNode
  variant?: 'default' | 'elevated' | 'interactive'
  className?: string
  [key: string]: any
}) {
  const baseClasses = 'bg-white rounded-lg'
  const variantClasses = {
    default: 'border border-harbor/10 shadow-sm',
    elevated: 'shadow-lg hover:shadow-xl transition-shadow duration-300',
    interactive: 'border border-harbor/10 shadow-sm hover:shadow-md hover:border-gold/30 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2',
  }

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </div>
  )
}

// Icon wrapper for consistent styling
export function IconWrapper({ children, size = 'md', className = '' }: {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
}) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  }

  return (
    <div className={`${sizeClasses[size]} bg-gold/10 rounded-full flex items-center justify-center ${className}`}>
      <div className="text-gold">
        {children}
      </div>
    </div>
  )
}

// Divider component
export function Divider({ variant = 'default', className = '' }: {
  variant?: 'default' | 'gold' | 'thick'
  className?: string
}) {
  const variantClasses = {
    default: 'h-px bg-harbor/20',
    gold: 'h-1 bg-gold',
    thick: 'h-2 bg-harbor/10',
  }

  return <div className={`${variantClasses[variant]} ${className}`} />
}

// Spacer component for consistent spacing
export function Spacer({ size = 'md' }: { size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' }) {
  const sizeClasses = {
    xs: 'h-1',
    sm: 'h-2',
    md: 'h-4',
    lg: 'h-6',
    xl: 'h-8',
    '2xl': 'h-12',
  }

  return <div className={sizeClasses[size]} />
}
