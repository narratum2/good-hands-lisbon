'use client'

import { motion } from 'framer-motion'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'gold' | 'ink' | 'harbor' | 'white'
  className?: string
  text?: string
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12',
}

const colorClasses = {
  gold: 'text-gold',
  ink: 'text-ink',
  harbor: 'text-harbor',
  white: 'text-white',
}

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'gold', 
  className = '',
  text 
}: LoadingSpinnerProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="flex flex-col items-center gap-3">
        <motion.div
          className={`${sizeClasses[size]} ${colorClasses[color]}`}
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg
            className="w-full h-full"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
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
        </motion.div>
        {text && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-harbor"
          >
            {text}
          </motion.p>
        )}
      </div>
    </div>
  )
}

// Convenience components for common use cases
export const PageLoader = ({ text = 'Loading...' }: { text?: string }) => (
  <div className="min-h-[400px] flex items-center justify-center">
    <LoadingSpinner size="lg" text={text} />
  </div>
)

export const ButtonLoader = () => (
  <LoadingSpinner size="sm" color="white" />
)

export const CardLoader = () => (
  <div className="bg-white rounded-lg border border-harbor/10 p-6">
    <div className="animate-pulse">
      <div className="h-4 bg-porcelain rounded w-3/4 mb-4"></div>
      <div className="h-3 bg-porcelain rounded w-1/2 mb-2"></div>
      <div className="h-3 bg-porcelain rounded w-2/3"></div>
    </div>
  </div>
)

export const ArticleLoader = () => (
  <div className="space-y-6">
    <div className="animate-pulse">
      <div className="h-8 bg-porcelain rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-porcelain rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-porcelain rounded w-full mb-2"></div>
      <div className="h-4 bg-porcelain rounded w-5/6 mb-2"></div>
      <div className="h-4 bg-porcelain rounded w-4/5"></div>
    </div>
  </div>
)

export const SkeletonLoader = ({ lines = 3 }: { lines?: number }) => (
  <div className="animate-pulse space-y-3">
    {Array.from({ length: lines }).map((_, i) => (
      <div
        key={i}
        className={`h-4 bg-porcelain rounded ${
          i === lines - 1 ? 'w-3/4' : 'w-full'
        }`}
      />
    ))}
  </div>
)
