'use client'

interface MembershipButtonProps {
  tier: 'gold' | 'platinum'
}

export default function MembershipButton({ tier }: MembershipButtonProps) {
  const handleClick = () => {
    // Will integrate with Stripe
    alert('Stripe integration coming soon! You will need to set up your Stripe account first.')
  }

  return (
    <button
      onClick={handleClick}
      className={`w-full btn-gold py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 ${
        tier === 'platinum'
          ? 'bg-gradient-to-br from-gray-400 via-gray-100 to-gray-400'
          : 'bg-gradient-to-br from-gold via-[var(--gold)] to-gold'
      }`}
    >
      Choose {tier === 'gold' ? 'Gold' : 'Platinum'}
    </button>
  )
}

