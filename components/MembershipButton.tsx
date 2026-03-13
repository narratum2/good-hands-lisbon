'use client'

import { useState } from 'react'
import { Loader2 } from 'lucide-react'

interface MembershipButtonProps {
  priceId: string
  tier: 'gold' | 'platinum'
}

export default function MembershipButton({ priceId, tier }: MembershipButtonProps) {
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)

    try {
      const response = await fetch('/api/stripe/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId, tier }),
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      } else if (data.setup_required) {
        alert('Stripe is not configured yet. Please set up your Stripe account.')
        setLoading(false)
      } else {
        alert('Failed to create checkout session. Please try again.')
        setLoading(false)
      }
    } catch (error) {
      console.error('Membership checkout error:', error)
      alert('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`w-full btn-gold py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${
        tier === 'platinum'
          ? 'bg-gradient-to-br from-gray-400 via-gray-100 to-gray-400'
          : 'bg-gradient-to-br from-gold via-[var(--gold)] to-gold'
      }`}
    >
      {loading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          Processing...
        </>
      ) : (
        <>Choose {tier === 'gold' ? 'Gold' : 'Platinum'}</>
      )}
    </button>
  )
}

