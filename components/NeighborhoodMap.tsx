'use client'

import { MapPin, ExternalLink, Navigation } from 'lucide-react'
import Image from 'next/image'

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
  
  // Use OpenStreetMap static image (no API key required)
  const staticMapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${coords.lng - 0.02}%2C${coords.lat - 0.015}%2C${coords.lng + 0.02}%2C${coords.lat + 0.015}&layer=mapnik&marker=${coords.lat}%2C${coords.lng}`
  
  // Regular Google Maps link for the button
  const mapUrl = `https://www.google.com/maps/search/${encodeURIComponent(searchQuery)}+${encodeURIComponent(neighborhood)}+Lisbon/@${coords.lat},${coords.lng},${coords.zoom}z`
  
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              Explore {neighborhood}
            </h2>
            <p className="text-harbor text-lg">
              Discover beauty experiences throughout the neighborhood
            </p>
          </div>

          {/* Interactive Map Preview - Click to open full Google Maps */}
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative bg-shell rounded-lg overflow-hidden shadow-lg mb-6 hover:shadow-xl transition-shadow"
          >
            <div className="aspect-video w-full relative">
              {/* OpenStreetMap embed - no API key required */}
              <iframe
                src={staticMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title={`Map of ${neighborhood} in Lisbon`}
                className="w-full h-full"
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gold" />
                  <span className="font-medium">Explore on Google Maps</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          </a>

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
              Find Beauty Services
              <ExternalLink className="w-3 h-3" />
            </a>
            
            <a
              href={`https://www.google.com/maps/dir//${encodeURIComponent(neighborhood)},+Lisbon`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
              aria-label={`Get directions to ${neighborhood}`}
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </div>

          <p className="text-sm text-center text-harbor/70 mt-6">
            Opens Google Maps to show salons, spas, and beauty services in {neighborhood}
          </p>
        </div>
      </div>
    </section>
  )
}
