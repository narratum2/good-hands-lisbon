import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Article, ArticleMetadata, RelatedArticle } from '@/types/article'

const articlesDirectory = path.join(process.cwd(), 'content/blog')

// Fallback articles data (to be migrated to MDX files)
const fallbackArticles: Record<string, Article> = {
  'portuguese-beauty-rituals': {
    slug: 'portuguese-beauty-rituals',
    title: 'The Art of Portuguese Beauty Rituals',
    excerpt: 'Discover centuries-old beauty traditions from Portugal that modern experts still swear by.',
    content: `Portuguese grandmothers have been using olive oil, rose water, and sea salt for centuries. Not because of marketing trends. Because they work.

## The Olive Oil Foundation

Long before luxury skincare brands discovered the power of olive oil, Portuguese grandmothers were using it as a daily beauty essential. Extra virgin olive oil, rich in antioxidants and vitamins, serves as a cleanser, moisturizer, and hair treatment.

> "My grandmother taught me to massage warm olive oil into my scalp every Sunday. At 65, her hair is still thick and shiny." — Maria, Lisbon native

### Modern Application

Today's Portuguese beauty professionals have refined these traditions. At salons across Chiado and Príncipe Real, you'll find treatments combining cold-pressed olive oil with modern techniques—hot oil scalp massages that stimulate growth while deeply nourishing.

## Rose Water Tonics

Portuguese rose water, distilled from blooms grown in the Alentejo region, has been a skincare staple since the 16th century. Its anti-inflammatory properties make it perfect for Lisbon's summer sun.

**How to use it:** After cleansing, mist rose water over your face. Follow with your regular moisturizer. The tonic balances pH and preps skin for better product absorption.`,
    image: '/brand-images/blog-portuguese-beauty.png',
    date: '2025-10-01',
    category: 'Traditions',
    author: {
      name: 'Maria Silva',
      bio: 'Maria is a beauty historian and consultant specializing in Portuguese traditional beauty practices.',
    },
    readTime: '5 min read',
    tags: ['Portuguese Beauty', 'Natural Ingredients', 'Traditional Methods'],
    featured: true,
    published: true,
  },
  // Additional articles would be added here...
}

// Calculate reading time based on content
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}

// Get article by slug with fallback
export function getArticle(slug: string): Article | null {
  try {
    // Try to load from MD/MDX file first
    let fullPath = path.join(articlesDirectory, `${slug}.md`)
    if (!fs.existsSync(fullPath)) {
      fullPath = path.join(articlesDirectory, `${slug}.mdx`)
    }
    if (fs.existsSync(fullPath)) {
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        content,
        image: data.image,
        date: data.date,
        category: data.category,
        author: data.author,
        readTime: data.readTime || calculateReadingTime(content),
        tags: data.tags || [],
        featured: data.featured || false,
        published: data.published !== false,
        seo: data.seo,
      }
    }
  } catch (error) {
    console.error(`Error loading article ${slug}:`, error)
  }

  // Fallback to hardcoded articles
  const article = fallbackArticles[slug]
  if (article) {
    return {
      ...article,
      readTime: article.readTime || calculateReadingTime(article.content),
    }
  }

  return null
}

// Get all articles with metadata only
export function getAllArticles(): ArticleMetadata[] {
  const articles: ArticleMetadata[] = []
  
  try {
    // Load from MDX files
    if (fs.existsSync(articlesDirectory)) {
      const fileNames = fs.readdirSync(articlesDirectory)
      const mdxFiles = fileNames.filter(name => name.endsWith('.mdx'))
      
      for (const fileName of mdxFiles) {
        const slug = fileName.replace(/\.mdx$/, '')
        const fullPath = path.join(articlesDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data } = matter(fileContents)
        
        if (data.published !== false) {
          articles.push({
            slug,
            title: data.title,
            excerpt: data.excerpt,
            image: data.image,
            date: data.date,
            category: data.category,
            author: data.author,
            readTime: data.readTime || calculateReadingTime(fileContents),
            featured: data.featured || false,
          })
        }
      }
    }
  } catch (error) {
    console.error('Error loading MDX articles:', error)
  }

  // Add fallback articles
  Object.values(fallbackArticles).forEach(article => {
    if (article.published !== false) {
      articles.push({
        slug: article.slug,
        title: article.title,
        excerpt: article.excerpt,
        image: article.image,
        date: article.date,
        category: article.category,
        author: article.author,
        readTime: article.readTime || calculateReadingTime(article.content),
        featured: article.featured || false,
      })
    }
  })

  // Sort by date (newest first)
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Get related articles based on category and tags
export function getRelatedArticles(currentSlug: string, limit: number = 3): RelatedArticle[] {
  const allArticles = getAllArticles()
  const currentArticle = getArticle(currentSlug)
  
  if (!currentArticle) return []

  // Score articles based on category and tag similarity
  const scoredArticles = allArticles
    .filter(article => article.slug !== currentSlug)
    .map(article => {
      let similarity = 0
      
      // Category match
      if (article.category === currentArticle.category) {
        similarity += 3
      }
      
      // Tag matches
      if ((currentArticle as any).tags && (article as any).tags) {
        const currentTags = (currentArticle as any).tags.map((tag: string) => tag.toLowerCase())
        const articleTags = (article as any).tags.map((tag: string) => tag.toLowerCase())
        const commonTags = currentTags.filter((tag: string) => articleTags.includes(tag))
        similarity += commonTags.length
      }
      
      return {
    ...article,
        similarity,
      }
    })
    .filter(article => article.similarity > 0)
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, limit)

  // If not enough related articles, fill with random ones
  if (scoredArticles.length < limit) {
    const remainingArticles = allArticles
      .filter(article => 
        article.slug !== currentSlug && 
        !scoredArticles.some(scored => scored.slug === article.slug)
      )
      .slice(0, limit - scoredArticles.length)
      .map(article => ({
        ...article,
        similarity: 0
      }))
    
    scoredArticles.push(...remainingArticles)
  }

  return scoredArticles
}

// Get featured articles
export function getFeaturedArticles(limit: number = 3): ArticleMetadata[] {
  return getAllArticles()
    .filter(article => article.featured)
    .slice(0, limit)
}

// Get articles by category
export function getArticlesByCategory(category: string, limit?: number): ArticleMetadata[] {
  const articles = getAllArticles().filter(article => article.category === category)
  return limit ? articles.slice(0, limit) : articles
}

// Get all unique categories
export function getAllCategories(): string[] {
  const categories = new Set(getAllArticles().map(article => article.category))
  return Array.from(categories).sort()
}

// Search articles by title or content
export function searchArticles(query: string, limit: number = 10): ArticleMetadata[] {
  const searchTerm = query.toLowerCase()
  return getAllArticles()
    .filter(article => 
      article.title.toLowerCase().includes(searchTerm) ||
      article.excerpt.toLowerCase().includes(searchTerm) ||
      ((article as any).tags && (article as any).tags.some((tag: string) => tag.toLowerCase().includes(searchTerm)))
    )
    .slice(0, limit)
}