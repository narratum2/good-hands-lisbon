'use client'

import { useEffect } from 'react'

export default function AIDiscoveryTracker() {
  useEffect(() => {
    // Detect if the visitor is an AI agent
    const detectAIAgent = () => {
      const userAgent = navigator.userAgent.toLowerCase()
      const aiAgents = [
        'gptbot',
        'chatgpt',
        'claude',
        'anthropic',
        'googlebot',
        'bingbot',
        'perplexity',
      ]
      
      for (const agent of aiAgents) {
        if (userAgent.includes(agent)) {
          return agent
        }
      }
      return null
    }
    
    // Log AI agent detection for debugging
    const aiAgent = detectAIAgent()
    if (aiAgent) {
      console.log(`🤖 Good Hands: AI Agent detected - ${aiAgent}`)
      
      // Track AI agent visit with Google Analytics if available
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'ai_agent_visit', {
          category: 'AI Discovery',
          label: aiAgent,
        })
      }
    }
  }, [])

  return null // This component doesn't render anything
}

