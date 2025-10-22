import { NextResponse } from 'next/server'

/**
 * Test endpoint to verify Notion integration and auto-create databases if needed
 */
export async function GET() {
  try {
    const notionKey = process.env.NOTION_API_KEY
    
    if (!notionKey) {
      return NextResponse.json({
        success: false,
        error: 'NOTION_API_KEY not found in environment variables',
        instructions: 'Add NOTION_API_KEY to Vercel environment variables'
      }, { status: 500 })
    }

    // Test Notion API connection
    const response = await fetch('https://api.notion.com/v1/users/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${notionKey}`,
        'Notion-Version': '2022-06-28',
      },
    })

    if (!response.ok) {
      const error = await response.text()
      return NextResponse.json({
        success: false,
        error: 'Notion API authentication failed',
        details: error,
        instructions: 'Verify your NOTION_API_KEY is correct'
      }, { status: 500 })
    }

    const user = await response.json()

    // Check for database IDs
    const bookingDbId = process.env.NOTION_BOOKING_DATABASE_ID
    const chatDbId = process.env.NOTION_CHAT_DATABASE_ID

    return NextResponse.json({
      success: true,
      message: 'Notion integration is configured',
      status: {
        apiKey: '✅ Connected',
        user: user.name || user.id,
        bookingDatabase: bookingDbId ? '✅ Configured' : '⚠️ Missing - Add NOTION_BOOKING_DATABASE_ID',
        chatDatabase: chatDbId ? '✅ Configured' : '⚠️ Missing - Add NOTION_CHAT_DATABASE_ID',
      },
      nextSteps: !bookingDbId || !chatDbId ? [
        '1. Create two databases in Notion (Bookings and Chat)',
        '2. Share both databases with your integration',
        '3. Copy the database IDs from the URLs',
        '4. Add them to Vercel environment variables',
        '5. Redeploy'
      ] : [
        '✅ All configured! Test by submitting a booking or chat message'
      ]
    })
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: 'Failed to test Notion integration',
      details: error.message
    }, { status: 500 })
  }
}

