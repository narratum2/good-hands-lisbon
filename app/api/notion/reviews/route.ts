import { NextResponse } from 'next/server'
import { Client } from '@notionhq/client'

/**
 * API Route to fetch reviews from Notion Reviews & Testimonials database
 * Use this to manage customer testimonials from Notion
 */
export async function GET() {
  try {
    const notionApiKey = process.env.NOTION_API_KEY
    const reviewsDbId = process.env.NOTION_REVIEWS_DATABASE_ID

    if (!notionApiKey || !reviewsDbId) {
      console.warn('Notion not configured for reviews')
      return NextResponse.json({
        source: 'static',
        reviews: getStaticReviews()
      })
    }

    const notion = new Client({ auth: notionApiKey })

    // Query approved reviews from Notion
    const response = await notion.databases.query({
      database_id: reviewsDbId,
      filter: {
        property: 'Status',
        select: {
          equals: 'Approved'
        }
      },
      sorts: [
        {
          property: 'Rating',
          direction: 'descending'
        },
        {
          property: 'Date',
          direction: 'descending'
        }
      ],
      page_size: 20
    })

    const reviews = response.results.map((page: any) => {
      const props = page.properties
      
      return {
        id: page.id,
        customerName: props['Customer Name']?.title?.[0]?.text?.content || 'Anonymous',
        service: props.Service?.select?.name || 'General',
        rating: props.Rating?.number || 5,
        review: props.Review?.rich_text?.[0]?.text?.content || '',
        date: props.Date?.date?.start || new Date().toISOString(),
        verified: props.Verified?.checkbox || false,
        featured: props.Featured?.checkbox || false,
        location: props.Location?.rich_text?.[0]?.text?.content || 'Lisbon'
      }
    })

    return NextResponse.json({
      source: 'notion',
      reviews,
      count: reviews.length,
      lastUpdated: new Date().toISOString()
    })

  } catch (error) {
    console.error('Error fetching reviews from Notion:', error)
    return NextResponse.json({
      source: 'static',
      reviews: getStaticReviews(),
      error: 'Failed to fetch from Notion, using static data'
    })
  }
}

// Static fallback reviews
function getStaticReviews() {
  return [
    {
      customerName: 'Sophie M.',
      service: 'Hair Styling',
      rating: 5,
      review: 'Absolutely amazing experience! The stylist understood exactly what I wanted.',
      date: '2024-10-15',
      verified: true,
      featured: true,
      location: 'Chiado'
    },
    {
      customerName: 'James R.',
      service: 'Spa Treatment',
      rating: 5,
      review: 'Best massage I\'ve ever had in Lisbon. The concierge service made booking so easy.',
      date: '2024-10-12',
      verified: true,
      featured: true,
      location: 'Príncipe Real'
    }
  ]
}

/**
 * POST - Submit a new review
 */
export async function POST(request: Request) {
  try {
    const { customerName, email, service, rating, review, bookingId } = await request.json()

    const notionApiKey = process.env.NOTION_API_KEY
    const reviewsDbId = process.env.NOTION_REVIEWS_DATABASE_ID

    if (!notionApiKey || !reviewsDbId) {
      return NextResponse.json({ 
        success: false, 
        error: 'Review submission not available' 
      }, { status: 503 })
    }

    const notion = new Client({ auth: notionApiKey })

    await notion.pages.create({
      parent: { database_id: reviewsDbId },
      properties: {
        'Customer Name': {
          title: [{ text: { content: customerName } }]
        },
        'Email': {
          email: email
        },
        'Service': {
          select: { name: service }
        },
        'Rating': {
          number: rating
        },
        'Review': {
          rich_text: [{ text: { content: review } }]
        },
        'Status': {
          select: { name: 'Pending' }
        },
        'Date': {
          date: { start: new Date().toISOString() }
        },
        'Verified': {
          checkbox: false
        },
        ...(bookingId && {
          'Booking ID': {
            rich_text: [{ text: { content: bookingId } }]
          }
        })
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Thank you for your review! It will be published after verification.'
    })

  } catch (error) {
    console.error('Error submitting review:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to submit review' 
    }, { status: 500 })
  }
}

