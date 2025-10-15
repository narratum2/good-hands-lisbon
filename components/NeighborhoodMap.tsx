'use client'

import { MapPin, ExternalLink } from 'lucide-react'

interface NeighborhoodMapProps {
  neighborhood: string
  searchQuery?: string
}

// Neighborhood coordinates for Lisbon areas
const neighborhoodCoords: Record<string, { lat: number; lng: number; zoom: number }> = {
  'Chiado': { lat: 38.7107, lng: -9.1422, zoom: 15 },
  'Príncipe Real': { lat: 38.7169, lng: -9.1501, zoom: 15 },
  'Baixa': { lat: 38.7109, lng: -9.1362, zoom: 15 },
  'Alfama': { lat: 38.7124, lng: -9.1292, zoom: 15 },
  'Avenida': { lat: 38.7223, lng: -9.1471, zoom: 15 },
  'Avenida da Liberdade': { lat: 38.7223, lng: -9.1471, zoom: 15 },
  'Belém': { lat: 38.6979, lng: -9.2062, zoom: 14 },
  'Cascais': { lat: 38.6979, lng: -9.4215, zoom: 14 },
  'Sintra': { lat: 38.7979, lng: -9.3882, zoom: 13 },
}

export default function NeighborhoodMap({ 
  neighborhood, 
  searchQuery = 'beauty salons spa wellness' 
}: NeighborhoodMapProps) {
  const coords = neighborhoodCoords[neighborhood] || { lat: 38.7223, lng: -9.1393, zoom: 13 }
  
  // Create embedded map URL with search
  const embedUrl = `https://www.google.com/maps/embed/v1/search?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(searchQuery)}+${encodeURIComponent(neighborhood)}+Lisbon&center=${coords.lat},${coords.lng}&zoom=${coords.zoom}`
  
  // Regular Google Maps link for the button
  const mapUrl = `https://www.google.com/maps/search/${encodeURIComponent(searchQuery)}+${encodeURIComponent(neighborhood)}+Lisbon/@${coords.lat},${coords.lng},${coords.zoom}z`
  
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              Explore {neighborhood} on the Map
            </h2>
            <p className="text-harbor text-lg">
              Discover beauty salons, spas, and wellness centers throughout the neighborhood
            </p>
          </div>

          {/* Embedded Google Map */}
          <div className="relative bg-shell rounded-lg overflow-hidden shadow-lg mb-6">
            <div className="aspect-video w-full">
              <iframe
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${neighborhood} beauty services in Lisbon`}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Map Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
              aria-label={`Open full Google Maps to explore ${neighborhood}`}
            >
              <MapPin className="w-4 h-4" />
              Open Full Map
              <ExternalLink className="w-3 h-3" />
            </a>
            
            <a
              href={`https://www.google.com/maps/dir//${encodeURIComponent(neighborhood)},+Lisbon`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
              aria-label={`Get directions to ${neighborhood}`}
            >
              Get Directions
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <p className="text-sm text-center text-harbor/70 mt-4">
            Click on markers to see beauty services, salons, and spas in {neighborhood}
          </p>
        </div>
      </div>
    </section>
  )
}
