/**
 * Notion Database Configuration
 * Centralized configuration for all 12 Notion databases
 */

export const NOTION_DATABASES = {
  // Core Operations
  BOOKINGS: process.env.NOTION_BOOKING_DATABASE_ID || '',
  CUSTOMERS: process.env.NOTION_CUSTOMERS_DATABASE_ID || '',
  CHAT: process.env.NOTION_CHAT_DATABASE_ID || process.env.NOTION_BOOKING_DATABASE_ID || '',
  
  // Business Management
  PROFESSIONALS: process.env.NOTION_PROFESSIONALS_DATABASE_ID || '',
  SERVICES: process.env.NOTION_SERVICES_DATABASE_ID || '',
  PRICING: process.env.NOTION_PRICING_DATABASE_ID || '',
  
  // Marketing & Content
  MARKETING: process.env.NOTION_MARKETING_DATABASE_ID || '',
  BLOG: process.env.NOTION_BLOG_DATABASE_ID || '',
  REVIEWS: process.env.NOTION_REVIEWS_DATABASE_ID || '',
  
  // Operations
  PARTNERSHIPS: process.env.NOTION_PARTNERSHIPS_DATABASE_ID || '',
  TASKS: process.env.NOTION_TASKS_DATABASE_ID || '',
  NEIGHBORHOODS: process.env.NOTION_NEIGHBORHOODS_DATABASE_ID || '',
  INVENTORY: process.env.NOTION_INVENTORY_DATABASE_ID || '',
} as const

export const NOTION_API_KEY = process.env.NOTION_API_KEY || ''

/**
 * Check if Notion integration is fully configured
 */
export function isNotionConfigured(): boolean {
  return !!(NOTION_API_KEY && NOTION_DATABASES.BOOKINGS && NOTION_DATABASES.CUSTOMERS)
}

/**
 * Get database configuration status
 */
export function getNotionStatus() {
  return {
    apiKey: !!NOTION_API_KEY,
    databases: {
      bookings: !!NOTION_DATABASES.BOOKINGS,
      customers: !!NOTION_DATABASES.CUSTOMERS,
      chat: !!NOTION_DATABASES.CHAT,
      professionals: !!NOTION_DATABASES.PROFESSIONALS,
      services: !!NOTION_DATABASES.SERVICES,
      pricing: !!NOTION_DATABASES.PRICING,
      marketing: !!NOTION_DATABASES.MARKETING,
      blog: !!NOTION_DATABASES.BLOG,
      reviews: !!NOTION_DATABASES.REVIEWS,
      partnerships: !!NOTION_DATABASES.PARTNERSHIPS,
      tasks: !!NOTION_DATABASES.TASKS,
      neighborhoods: !!NOTION_DATABASES.NEIGHBORHOODS,
      inventory: !!NOTION_DATABASES.INVENTORY,
    },
    isFullyConfigured: isNotionConfigured(),
  }
}

