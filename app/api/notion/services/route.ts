import { NextResponse } from 'next/server'
import { Client } from '@notionhq/client'

/**
 * API Route to fetch services from Notion Services Catalog
 * Use this to manage service descriptions, pricing, and availability from Notion
 */
export async function GET() {
  try {
    const notionApiKey = process.env.NOTION_API_KEY
    const servicesDbId = process.env.NOTION_SERVICES_DATABASE_ID

    if (!notionApiKey || !servicesDbId) {
      console.warn('Notion not configured for services')
      // Return default static services
      return NextResponse.json({
        source: 'static',
        services: getStaticServices()
      })
    }

    const notion = new Client({ auth: notionApiKey })

    // Query all services from Notion
    const response = await notion.databases.query({
      database_id: servicesDbId,
      filter: {
        property: 'Status',
        select: {
          equals: 'Active'
        }
      },
      sorts: [
        {
          property: 'Display Order',
          direction: 'ascending'
        }
      ]
    })

    const services = response.results.map((page: any) => {
      const props = page.properties
      
      return {
        id: page.id,
        name: props.Name?.title?.[0]?.text?.content || 'Unnamed Service',
        description: props.Description?.rich_text?.[0]?.text?.content || '',
        price: props.Price?.number || 0,
        duration: props.Duration?.rich_text?.[0]?.text?.content || '',
        category: props.Category?.select?.name || 'General',
        icon: props.Icon?.rich_text?.[0]?.text?.content || '✨',
        features: props.Features?.rich_text?.[0]?.text?.content?.split('\n') || [],
        available: props.Status?.select?.name === 'Active',
        displayOrder: props['Display Order']?.number || 999
      }
    })

    return NextResponse.json({
      source: 'notion',
      services,
      count: services.length,
      lastUpdated: new Date().toISOString()
    })

  } catch (error) {
    console.error('Error fetching services from Notion:', error)
    return NextResponse.json({
      source: 'static',
      services: getStaticServices(),
      error: 'Failed to fetch from Notion, using static data'
    })
  }
}

// Static fallback services
function getStaticServices() {
  return [
    {
      name: 'Premium Hair Styling',
      description: 'Expert hair colorists and stylists matched to your style preferences',
      price: 105,
      duration: '2-3 hours',
      category: 'Hair',
      icon: '💇',
      features: ['Color consultation', 'Cut & style', 'Premium products'],
      available: true
    },
    {
      name: 'Luxury Spa Treatments',
      description: 'Curated massage and facial treatments',
      price: 95,
      duration: '90 minutes',
      category: 'Spa',
      icon: '💆',
      features: ['Massage therapy', 'Facial treatments', 'Aromatherapy'],
      available: true
    },
    {
      name: 'Professional Makeup',
      description: 'Special occasion and bridal makeup artists',
      price: 85,
      duration: '60-90 minutes',
      category: 'Makeup',
      icon: '💄',
      features: ['Event makeup', 'Bridal packages', 'Touch-up service'],
      available: true
    },
    {
      name: 'Nail Care',
      description: 'Premium manicure and pedicure services',
      price: 50,
      duration: '60 minutes',
      category: 'Nails',
      icon: '💅',
      features: ['Manicure', 'Pedicure', 'Gel polish'],
      available: true
    }
  ]
}

