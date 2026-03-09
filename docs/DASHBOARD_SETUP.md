# Narratum Dashboard Setup Guide

## Overview

The Narratum Dashboard is a password-protected documentation portal accessible at `/narratum` that provides centralized access to all project documentation.

## Features

- **Password Protection**: Secure access with customizable password
- **Documentation Categories**: Organized into 7 logical sections
- **Search Functionality**: Quick search across all documents
- **Markdown Viewer**: Beautiful rendering of markdown documentation
- **Responsive Design**: Works on all devices
- **Real-time Updates**: Automatically reflects changes in documentation files

## Setup Instructions

### 1. Set Password (Optional)

By default, the password is `narratum2025`. To customize:

1. Create or update `.env.local`:
```bash
NEXT_PUBLIC_DASHBOARD_PASSWORD=your-secure-password-here
```

2. Restart your development server.

### 2. Access the Dashboard

Navigate to: `http://localhost:3000/narratum` (development) or `https://yoursite.com/narratum` (production)

## Document Categories

### 1. Getting Started (3 documents)
- Start Here
- Readme
- Configuration Checklist

### 2. AI & Automation (4 documents)
- AI Background Agents Controller
- AI SEO Quick Start Guide
- Make.com Templates
- N8N Workflows

### 3. Business Operations (5 documents)
- Notion Quick Start
- Notion Complete CMS Guide
- Notion CRM Setup Guide
- CRM Membership Integration
- Slack Business System

### 4. Technical Reference (4 documents)
- Vercel Environment Variables
- Database Schemas
- Troubleshooting Guide
- Ultimate AI Optimized Stack

### 5. E-commerce (2 documents)
- Stripe Webhook Events
- Email Templates

### 6. Design & Quality (2 documents)
- Design System Complete
- Site Review Complete

### 7. Wonder Portal (3 documents)
- Wonder Portal Pipeline
- Wonder Portal Operations Guide
- Wonder Portal Presentation Guide

## Adding New Documents

To add a document to the dashboard:

1. Place your markdown file in the `_good-hands/` directory
2. Open `app/narratum/page.tsx`
3. Add a new entry to the `documents` array:

```typescript
{
  id: 'unique-id',
  title: 'Document Title',
  category: 'category-id', // getting-started, ai-automation, business-ops, technical, ecommerce, or design
  path: 'filename.md', // relative to _good-hands directory
  icon: <YourIcon className="w-5 h-5" />,
  description: 'Brief description of the document'
}
```

## Security Notes

- The API route (`app/api/document/route.ts`) restricts file access to the `_good-hands/` directory only
- Path traversal attacks are prevented through `path.resolve()` and prefix checking
- Password is hashed in production (recommended to add proper authentication for production use)
- Session is stored in localStorage (consider upgrading to server-side sessions for production)

## Production Considerations

For production deployment:

1. **Authentication**: Consider implementing proper user authentication (Auth0, NextAuth.js, etc.)
2. **Rate Limiting**: Add rate limiting to the API route
3. **Caching**: Implement caching for frequently accessed documents
4. **Analytics**: Track document access patterns
5. **Permissions**: Add role-based access control if needed

## Troubleshooting

### Documents Not Loading
- Check that files exist in `_good-hands/` directory
- Verify file paths in the documents array
- Check browser console for error messages

### Authentication Issues
- Clear localStorage if login fails
- Verify `NEXT_PUBLIC_DASHBOARD_PASSWORD` is set correctly
- Check that password matches exactly (case-sensitive)

### Permission Errors
- Ensure API route has proper file system permissions
- Check that `_good-hands/` directory is accessible

## Support

For issues or questions, refer to:
- Main documentation: `START_HERE.md`
- Troubleshooting guide: `troubleshooting-common-issues.md`

