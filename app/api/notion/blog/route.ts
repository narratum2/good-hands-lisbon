import { NextResponse } from 'next/server'
import { Client } from '@notionhq/client'

/**
 * API Route to fetch blog articles from Notion Blog Articles database
 * Use this to manage blog content entirely from Notion
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '10')
    const category = searchParams.get('category')

    const notionApiKey = process.env.NOTION_API_KEY
    const blogDbId = process.env.NOTION_BLOG_DATABASE_ID

    if (!notionApiKey || !blogDbId) {
      console.warn('Notion not configured for blog')
      return NextResponse.json({
        source: 'static',
        articles: [],
        message: 'Blog integration not configured'
      })
    }

    const notion = new Client({ auth: notionApiKey })

    // Build filter
    let filter: any = {
      property: 'Status',
      select: {
        equals: 'Published'
      }
    }

    if (category) {
      filter = {
        and: [
          filter,
          {
            property: 'Category',
            select: {
              equals: category
            }
          }
        ]
      }
    }

    // Query published articles from Notion
    const response = await notion.databases.query({
      database_id: blogDbId,
      filter,
      sorts: [
        {
          property: 'Publish Date',
          direction: 'descending'
        }
      ],
      page_size: limit
    })

    const articles = response.results.map((page: any) => {
      const props = page.properties
      
      return {
        id: page.id,
        title: props.Title?.title?.[0]?.text?.content || 'Untitled',
        slug: props.Slug?.rich_text?.[0]?.text?.content || '',
        excerpt: props.Excerpt?.rich_text?.[0]?.text?.content || '',
        category: props.Category?.select?.name || 'General',
        author: props.Author?.rich_text?.[0]?.text?.content || 'Good Hands Team',
        publishDate: props['Publish Date']?.date?.start || new Date().toISOString(),
        featured: props.Featured?.checkbox || false,
        coverImage: props['Cover Image']?.url || '',
        tags: props.Tags?.multi_select?.map((t: any) => t.name) || [],
        readTime: props['Read Time']?.number || 5
      }
    })

    return NextResponse.json({
      source: 'notion',
      articles,
      count: articles.length,
      hasMore: response.has_more,
      lastUpdated: new Date().toISOString()
    })

  } catch (error) {
    console.error('Error fetching blog articles from Notion:', error)
    return NextResponse.json({
      source: 'error',
      articles: [],
      error: 'Failed to fetch blog articles'
    }, { status: 500 })
  }
}

/**
 * GET single article by slug
 */
export async function POST(request: Request) {
  try {
    const { slug } = await request.json()

    const notionApiKey = process.env.NOTION_API_KEY
    const blogDbId = process.env.NOTION_BLOG_DATABASE_ID

    if (!notionApiKey || !blogDbId || !slug) {
      return NextResponse.json({ 
        error: 'Invalid request' 
      }, { status: 400 })
    }

    const notion = new Client({ auth: notionApiKey })

    // Query for article by slug
    const response = await notion.databases.query({
      database_id: blogDbId,
      filter: {
        and: [
          {
            property: 'Slug',
            rich_text: {
              equals: slug
            }
          },
          {
            property: 'Status',
            select: {
              equals: 'Published'
            }
          }
        ]
      }
    })

    if (response.results.length === 0) {
      return NextResponse.json({ 
        error: 'Article not found' 
      }, { status: 404 })
    }

    const page: any = response.results[0]
    const props = page.properties

    // Fetch page content blocks
    const blocks = await notion.blocks.children.list({
      block_id: page.id
    })

    return NextResponse.json({
      article: {
        id: page.id,
        title: props.Title?.title?.[0]?.text?.content || 'Untitled',
        slug: props.Slug?.rich_text?.[0]?.text?.content || '',
        excerpt: props.Excerpt?.rich_text?.[0]?.text?.content || '',
        content: blocks.results, // Raw Notion blocks
        category: props.Category?.select?.name || 'General',
        author: props.Author?.rich_text?.[0]?.text?.content || 'Good Hands Team',
        publishDate: props['Publish Date']?.date?.start || new Date().toISOString(),
        coverImage: props['Cover Image']?.url || '',
        tags: props.Tags?.multi_select?.map((t: any) => t.name) || [],
        readTime: props['Read Time']?.number || 5
      }
    })

  } catch (error) {
    console.error('Error fetching article from Notion:', error)
    return NextResponse.json({ 
      error: 'Failed to fetch article' 
    }, { status: 500 })
  }
}

