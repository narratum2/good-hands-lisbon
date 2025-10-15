import { NextResponse } from 'next/server'
import { Client } from '@notionhq/client'

export async function POST(request: Request) {
  try {
    const { message, userId, userName, userEmail } = await request.json()

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    const notionApiKey = process.env.NOTION_API_KEY
    const chatDbId = process.env.NOTION_CHAT_DB_ID

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
      { error: 'Failed to send message. Please email us at hello@goodhands.com' },
      { status: 500 }
    )
  }
}

// Smart auto-replies based on message content
function getAutoReply(message: string): string {
  // Booking related
  if (message.includes('book') || message.includes('appointment') || message.includes('schedule')) {
    return "I can help you book right away! Click 'Book Now' below or visit our booking page. We'll match you with the perfect professional. 📅"
  }
  
  // Service questions
  if (message.includes('hair') || message.includes('color') || message.includes('cut')) {
    return "We have amazing hair stylists in Lisbon! From €105. Would you like to book a hair service? 💇"
  }
  
  if (message.includes('nail') || message.includes('manicure') || message.includes('pedicure')) {
    return "Our nail specialists are excellent! Services from €60. Ready to book? 💅"
  }
  
  if (message.includes('spa') || message.includes('massage') || message.includes('facial')) {
    return "We offer luxurious spa treatments and facials from €125. Interested in booking? ✨"
  }
  
  // Pricing questions
  if (message.includes('price') || message.includes('cost') || message.includes('how much')) {
    return "Our services range from €60 (nails) to €800 (wedding packages). All prices include our concierge service. Want to see specific pricing? 💰"
  }
  
  // Location questions
  if (message.includes('where') || message.includes('location') || message.includes('neighborhood')) {
    return "We serve 8 neighborhoods in Lisbon: Chiado, Príncipe Real, Baixa, Alfama, Belém, Cascais, Sintra, and Avenida. Which area works for you? 📍"
  }
  
  // General inquiry
  return "Thanks for reaching out! A member of our team will respond within 2 hours. In the meantime, you can book instantly or browse our services. How can I help you today? 😊"
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
    const chatDbId = process.env.NOTION_CHAT_DB_ID

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
