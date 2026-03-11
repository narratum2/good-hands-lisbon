import { NextResponse } from 'next/server'
import { Client } from '@notionhq/client'

export async function POST(request: Request) {
  try {
    const { message, userId, userName, userEmail } = await request.json()

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    const notionApiKey = process.env.NOTION_API_KEY
    const chatDbId = process.env.NOTION_CHAT_DATABASE_ID || process.env.NOTION_BOOKING_DATABASE_ID

    if (!notionApiKey || !chatDbId) {
      console.error('Notion not configured for chat')
      return NextResponse.json(
        { error: 'Chat service not available. Please use booking form or email us.' },
        { status: 503 }
      )
    }

    const notion = new Client({ auth: notionApiKey })

    // Create chat message in Notion
    await notion.pages.create({
      parent: { database_id: chatDbId },
      properties: {
        'User Name': {
          title: [{ text: { content: userName || 'Anonymous' } }]
        },
        'Email': {
          email: userEmail || ''
        },
        'Message': {
          rich_text: [{ text: { content: message } }]
        },
        'User ID': {
          rich_text: [{ text: { content: userId || '' } }]
        },
        'Status': {
          select: { name: 'New' }
        },
        'Sender': {
          select: { name: 'User' }
        }
      }
    })

    // Send auto-reply immediately
    const autoReply = getAutoReply(message.toLowerCase())

    return NextResponse.json({
      success: true,
      reply: autoReply,
      messageId: Date.now().toString()
    })

  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please email us at hello@beautysalonlisbon.com' },
      { status: 500 }
    )
  }
}

// Smart auto-replies based on message content
function getAutoReply(message: string): string {
  if (message.includes('book') || message.includes('appointment') || message.includes('schedule') || message.includes('reserve')) {
    return "I'd love to help you book! You can click 'Book Now' or visit our booking page. We'll match you with the perfect professional and get back to you within a few hours."
  }
  
  if (message.includes('hair') || message.includes('color') || message.includes('cut') || message.includes('balayage')) {
    return "We work with exceptional hair stylists across Lisbon. Pricing is personalized based on the service and stylist match. Would you like to tell us what you're looking for?"
  }
  
  if (message.includes('nail') || message.includes('manicure') || message.includes('pedicure') || message.includes('gel')) {
    return "Our nail specialists are wonderful. From classic manicures to luxury pedicures and nail art. Want to book a nail service?"
  }
  
  if (message.includes('spa') || message.includes('massage') || message.includes('facial') || message.includes('skin')) {
    return "We offer curated spa treatments and facials with vetted professionals. From Swedish massage to anti-aging facials. Interested in booking?"
  }
  
  if (message.includes('price') || message.includes('cost') || message.includes('how much') || message.includes('expensive')) {
    return "Our pricing is personalized based on the service and professional match. We provide a quote after understanding your needs — no surprises, no hidden fees. Concierge service is always included."
  }
  
  if (message.includes('where') || message.includes('location') || message.includes('neighborhood') || message.includes('area')) {
    return "We serve 8 neighborhoods in Lisbon: Chiado, Príncipe Real, Baixa, Alfama, Belém, Avenida, plus Cascais and Sintra. Which area works best for you?"
  }
  
  if (message.includes('wedding') || message.includes('bridal') || message.includes('bride')) {
    return "We coordinate complete bridal beauty packages — from trials to the big day. Hair, makeup, skincare, everything. Tell us about your wedding and we'll create a custom package."
  }

  if (message.includes('corporate') || message.includes('team') || message.includes('company') || message.includes('event')) {
    return "We offer corporate wellness and beauty packages for teams and events. From retreat coordination to on-site services. What kind of event are you planning?"
  }
  
  return "Thanks for reaching out! A member of our team will respond within a few hours. In the meantime, you can book directly or browse our services. How can I help you today?"
}

// GET endpoint to retrieve chat history (for admin or returning users)
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      return NextResponse.json({ error: 'User ID required' }, { status: 400 })
    }

    const notionApiKey = process.env.NOTION_API_KEY
    const chatDbId = process.env.NOTION_CHAT_DATABASE_ID || process.env.NOTION_BOOKING_DATABASE_ID

    if (!notionApiKey || !chatDbId) {
      return NextResponse.json({ messages: [] })
    }

    const notion = new Client({ auth: notionApiKey })

    // Query messages for this user
    const response = await notion.databases.query({
      database_id: chatDbId,
      filter: {
        property: 'User ID',
        rich_text: {
          contains: userId
        }
      },
      sorts: [
        {
          property: 'Created At',
          direction: 'ascending'
        }
      ]
    })

    const messages = response.results.map((page: any) => ({
      id: page.id,
      message: page.properties.Message?.rich_text[0]?.text?.content || '',
      sender: page.properties.Sender?.select?.name || 'user',
      createdAt: page.created_time
    }))

    return NextResponse.json({ messages })

  } catch (error) {
    console.error('Chat history error:', error)
    return NextResponse.json({ messages: [] })
  }
}
