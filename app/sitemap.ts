/**
 * Next.js Dynamic Sitemap Generation
 * 
 * Generates comprehensive sitemap for Good Hands
 * Includes all pages, neighborhoods, services, blog posts, and premium experiences
 * 
 * This fixes the critical missing sitemap issue identified in SEO audit
 */

import { MetadataRoute } from 'next'
import { SERVICE_AREAS, SERVICE_CATEGORIES, PREMIUM_EXPERIENCES } from '@/lib/seo-config'
import { getAllArticles } from '@/lib/articles'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://beautysalonlisbon.com'
  const now = new Date()
  
  // Core pages
  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/experiences`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/journal`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/membership`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/book`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/partnerships`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ai-assistant-info`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/makeup-knowledge-base`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // Service category pages
  const servicePages: MetadataRoute.Sitemap = SERVICE_CATEGORIES.map(category => ({
    url: `${baseUrl}/services/${category.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  // Neighborhood pages
  const neighborhoodPages: MetadataRoute.Sitemap = SERVICE_AREAS
    .filter((area): area is Extract<typeof SERVICE_AREAS[number], { slug: string }> => 
      'slug' in area && typeof area.slug === 'string'
    )
    .map(area => ({
      url: `${baseUrl}/${area.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    }))

  // Premium experience pages
  const premiumPages: MetadataRoute.Sitemap = PREMIUM_EXPERIENCES.map(exp => ({
    url: `${baseUrl}/premium/${exp.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Blog/Journal articles
  const articles = getAllArticles()
  const articlePages: MetadataRoute.Sitemap = articles.map(article => ({
    url: `${baseUrl}/journal/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // API documentation pages (for AI agents)
  const apiPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/api-docs`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // Legal pages
  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  // Combine all pages
  return [
    ...corePages,
    ...servicePages,
    ...neighborhoodPages,
    ...premiumPages,
    ...articlePages,
    ...apiPages,
    ...legalPages,
  ]
}
