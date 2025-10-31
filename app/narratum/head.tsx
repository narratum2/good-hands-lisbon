export default function Head() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "@id": "https://narratum.io/dashboard",
            "name": "Narratum Intelligence Dashboard",
            "alternateName": ["Narratum Dashboard", "Wonder Portal Dashboard"],
            "description": "Advanced analytics and intelligence platform for data-driven insights",
            "url": "https://narratum.io/dashboard",
            "logo": "https://narratum.io/logo.svg",
            "image": "https://narratum.io/dashboard-preview.png",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "provider": {
              "@type": "Organization",
              "name": "Narratum",
              "url": "https://narratum.io"
            },
            "featureList": [
              "Real-time Analytics",
              "Data Visualization",
              "Member Management",
              "Revenue Tracking",
              "Documentation Portal"
            ]
          })
        }}
      />
    </>
  )
}
