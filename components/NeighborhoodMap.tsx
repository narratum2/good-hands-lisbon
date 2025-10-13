'use client'

import { MapPin } from 'lucide-react'

interface NeighborhoodMapProps {
  neighborhood: string
  searchQuery?: string
}

export default function NeighborhoodMap({ 
  neighborhood, 
  searchQuery = 'beauty salons hair spa wellness' 
}: NeighborhoodMapProps) {
  const mapUrl = `https://www.google.com/maps/search/${encodeURIComponent(searchQuery)}+${encodeURIComponent(neighborhood)}+Lisbon`
  
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              Explore {neighborhood}
            </h2>
            <p className="text-harbor text-lg">
              Discover beauty salons, spas, and wellness centers throughout the neighborhood
            </p>
          </div>

          <div className="bg-shell rounded-lg p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-gold/10 rounded-full">
              <MapPin className="w-8 h-8 text-gold" strokeWidth={1.5} />
            </div>
            
            <h3 className="text-2xl font-serif mb-3">View on Map</h3>
            <p className="text-harbor mb-6 max-w-md mx-auto">
              Explore beauty services, salons, and local landmarks in {neighborhood}
            </p>
            
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
              aria-label={`Open Google Maps to explore ${neighborhood}`}
            >
              Open in Google Maps
            </a>
            
            <p className="text-sm text-harbor/70 mt-4">
              Opens in a new tab
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
