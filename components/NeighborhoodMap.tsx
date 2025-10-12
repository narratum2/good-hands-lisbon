'use client'

interface NeighborhoodMapProps {
  neighborhood: string
  lat: number
  lng: number
}

export default function NeighborhoodMap({ neighborhood, lat, lng }: NeighborhoodMapProps) {
  // Google Maps embed URL
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8'}&q=${encodeURIComponent(neighborhood + ', Lisbon, Portugal')}&zoom=15&center=${lat},${lng}`

  return (
    <div className="bg-shell rounded-lg p-4">
      <div className="aspect-video w-full rounded overflow-hidden">
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map of ${neighborhood}, Lisbon`}
        />
      </div>
      <p className="text-xs text-harbor/60 mt-3 text-center">
        📍 {neighborhood} — Good Hands partner locations and key landmarks
      </p>
    </div>
  )
}

