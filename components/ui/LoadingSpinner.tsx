'use client'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'white' | 'gold' | 'ink'
}

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'white' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  }
  
  const colorClasses = {
    white: 'border-white/30 border-t-white',
    gold: 'border-gold/30 border-t-gold',
    ink: 'border-ink/30 border-t-ink',
  }
  
  return (
    <div
      className={`${sizeClasses[size]} border-2 ${colorClasses[color]} rounded-full animate-spin`}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}
