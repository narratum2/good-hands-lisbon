'use client'

import { useEffect, useState } from 'react'

export default function GATestPage() {
  const [gaStatus, setGaStatus] = useState<{
    loaded: boolean
    dataLayerExists: boolean
    gtagExists: boolean
    measurementId: string
    events: number
  }>({
    loaded: false,
    dataLayerExists: false,
    gtagExists: false,
    measurementId: 'G-ZGDMVGP040',
    events: 0,
  })

  useEffect(() => {
    // Check if GA loaded
    const checkGA = () => {
      const dataLayerExists = typeof window !== 'undefined' && Array.isArray((window as any).dataLayer)
      const gtagExists = typeof window !== 'undefined' && typeof (window as any).gtag === 'function'
      
      setGaStatus({
        loaded: true,
        dataLayerExists,
        gtagExists,
        measurementId: 'G-ZGDMVGP040',
        events: dataLayerExists ? (window as any).dataLayer.length : 0,
      })
    }

    // Check after a short delay to ensure scripts have loaded
    const timer = setTimeout(checkGA, 2000)
    
    return () => clearTimeout(timer)
  }, [])

  const sendTestEvent = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'test_event', {
        event_category: 'testing',
        event_label: 'GA Test Page',
        value: 1
      })
      alert('Test event sent! Check GA Real-Time reports in 10-20 seconds.')
    } else {
      alert('Google Analytics not loaded yet. Wait a moment and try again.')
    }
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="container-custom max-w-2xl">
        <h1 className="text-4xl font-serif mb-8">Google Analytics Status Check</h1>
        
        <div className="bg-shell p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-serif mb-4">Current Status</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-medium">Page Loaded:</span>
              <span className={gaStatus.loaded ? 'text-green-600' : 'text-red-600'}>
                {gaStatus.loaded ? '✓ Yes' : '✗ No'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">dataLayer Exists:</span>
              <span className={gaStatus.dataLayerExists ? 'text-green-600' : 'text-red-600'}>
                {gaStatus.dataLayerExists ? '✓ Yes' : '✗ No'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">gtag Function Exists:</span>
              <span className={gaStatus.gtagExists ? 'text-green-600' : 'text-red-600'}>
                {gaStatus.gtagExists ? '✓ Yes' : '✗ No'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Measurement ID:</span>
              <code className="bg-white px-3 py-1 rounded">{gaStatus.measurementId}</code>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">dataLayer Events:</span>
              <span className="text-harbor">{gaStatus.events}</span>
            </div>
          </div>
        </div>

        <div className="bg-gold/10 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-serif mb-4">Test GA Tracking</h2>
          <p className="text-harbor mb-4">
            Click the button below to send a test event to Google Analytics. 
            Then check your GA Real-Time reports to see if it appears.
          </p>
          <button
            onClick={sendTestEvent}
            className="btn-gold"
          >
            Send Test Event
          </button>
        </div>

        <div className="bg-shell p-8 rounded-lg">
          <h2 className="text-2xl font-serif mb-4">Troubleshooting</h2>
          <div className="space-y-4 text-harbor">
            <div>
              <h3 className="font-semibold text-ink mb-2">If dataLayer or gtag doesn't exist:</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Check if ad blockers are enabled (they block GA)</li>
                <li>Wait 5-10 seconds for scripts to load</li>
                <li>Hard refresh the page (Cmd+Shift+R)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink mb-2">If everything shows ✓ but no data in GA:</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>GA4 can take 24-48 hours to start showing data for new properties</li>
                <li>Check GA Real-Time reports (should show within minutes)</li>
                <li>Verify the Measurement ID matches your GA4 property</li>
                <li>Ensure the GA4 property is not in "Testing" mode</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-ink mb-2">Quick Verification:</h3>
              <ol className="list-decimal list-inside space-y-1 ml-4">
                <li>Open browser DevTools (F12)</li>
                <li>Go to Network tab</li>
                <li>Filter by "collect" or "analytics"</li>
                <li>Refresh page and look for requests to google-analytics.com or googletagmanager.com</li>
                <li>If you see requests = GA is working!</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="/" className="btn-primary">
            Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}

