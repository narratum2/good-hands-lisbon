'use client'

import { Component, ErrorInfo, ReactNode } from 'react'
import { Button } from './Button'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
}

interface State {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }

    // Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      // Here you would typically send to Sentry, LogRocket, etc.
      console.error('Production error:', { error, errorInfo })
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback
      }

      // Default error UI
      return (
        <div className="min-h-[400px] flex items-center justify-center bg-porcelain">
          <div className="text-center max-w-md mx-auto px-6">
            <div className="w-16 h-16 mx-auto mb-6 text-harbor">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            
            <h2 className="text-2xl font-serif text-ink mb-4">
              Something went wrong
            </h2>
            
            <p className="text-harbor mb-6 leading-relaxed">
              We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-sm text-harbor mb-2">
                  Error Details (Development)
                </summary>
                <pre className="text-xs bg-white p-3 rounded border overflow-auto max-h-32">
                  {this.state.error.message}
                  {this.state.error.stack && (
                    <>
                      {'\n\n'}
                      {this.state.error.stack}
                    </>
                  )}
                </pre>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={this.handleRetry} variant="primary" size="md">
                Try Again
              </Button>
              <Button 
                onClick={() => window.location.reload()} 
                variant="outline" 
                size="md"
              >
                Refresh Page
              </Button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// Convenience wrapper for specific use cases
export const ArticleErrorBoundary = ({ children }: { children: ReactNode }) => (
  <ErrorBoundary
    fallback={
      <div className="bg-porcelain py-16">
        <div className="container-custom max-w-3xl">
          <div className="text-center">
            <h2 className="text-3xl font-serif text-ink mb-4">
              Article Unavailable
            </h2>
            <p className="text-harbor mb-6">
              We're having trouble loading this article. Please try again later.
            </p>
            <Button href="/journal" variant="primary">
              Browse All Articles
            </Button>
          </div>
        </div>
      </div>
    }
  >
    {children}
  </ErrorBoundary>
)

export const ServiceErrorBoundary = ({ children }: { children: ReactNode }) => (
  <ErrorBoundary
    fallback={
      <div className="bg-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-serif text-ink mb-4">
              Services Temporarily Unavailable
            </h2>
            <p className="text-harbor mb-6">
              We're experiencing technical difficulties. Please check back soon.
            </p>
            <Button href="/contact" variant="primary">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    }
  >
    {children}
  </ErrorBoundary>
)


