# Integration Setup Guide

## Quick Start

Copy `.env.example` to `.env.local` and fill in your API keys:

```bash
cp .env.example .env.local
```

---

## 1. ✅ Intercom (Chat Widget)

**Status:** Ready to activate - just needs API key

### Setup Steps:
1. Go to [Intercom](https://app.intercom.com)
2. Sign up or log in
3. Go to Settings → Installation → Web
4. Copy your **App ID**
5. Add to `.env.local`:
   ```
   NEXT_PUBLIC_INTERCOM_APP_ID=your_app_id_here
   ```
6. Restart dev server: `npm run dev`
7. Chat widget will appear automatically!

**Code location:** Already integrated in `app/layout.tsx` (lines 219-231)

---

## 2. 🔄 Notion Integration

**What it's for:**
- Store booking requests
- Manage professional applications
- CRM for customer tracking

### Setup Steps:

#### A. Create Notion Integration
1. Go to [notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Click "+ New integration"
3. Name: "Good Hands Bookings"
4. Associate with your workspace
5. Copy the **Internal Integration Token**

#### B. Create Databases

**Bookings Database:**
1. Create new database in Notion
2. Add these properties:
   - Name (Title)
   - Email (Email)
   - Phone (Phone)
   - Service (Select)
   - Neighborhood (Select)
   - Date (Date)
   - Time (Text)
   - Message (Text)
   - Status (Select: New, Confirmed, Completed, Cancelled)
   - Created (Created time)

**Professionals Database:**
1. Create new database
2. Add properties:
   - Name (Title)
   - Email (Email)
   - Phone (Phone)
   - Instagram (URL)
   - Website (URL)
   - Services (Multi-select)
   - Experience (Number)
   - Portfolio (URL)
   - Availability (Text)
   - Notes (Text)
   - Status (Select: New Application, Review, Approved, Rejected)

#### C. Share Databases with Integration
1. Open each database
2. Click "..." → "Add connections"
3. Select your "Good Hands Bookings" integration

#### D. Get Database IDs
1. Open database as full page
2. Copy ID from URL:
   ```
   https://notion.so/workspace/DATABASE_ID?v=...
                              ^^^^^^^^^^^^
   ```

#### E. Add to Environment
```bash
NOTION_API_KEY=secret_xxx
NOTION_BOOKINGS_DB_ID=xxx
NOTION_PROFESSIONALS_DB_ID=xxx
```

**Code locations:**
- `app/api/bookings/route.ts` (needs to be created)
- `app/api/professional-applications/route.ts` (already exists)

---

## 3. 🗺️ Google Maps

**What it's for:** Neighborhood maps showing partner locations

### Setup Steps:
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create project "Good Hands"
3. Enable "Maps Embed API"
4. Go to Credentials → Create API Key
5. Restrict key to your domain: `goodhands.com`, `localhost`
6. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSy...
   ```

**Code location:** `components/NeighborhoodMap.tsx`

---

## 4. 💳 Stripe (Payments)

**What it's for:**
- Membership subscriptions
- Premium service payments
- Professional application fees

### Setup Steps:
1. Go to [stripe.com/dashboard](https://dashboard.stripe.com)
2. Get your **Publishable key** and **Secret key**
3. Add to `.env.local`:
   ```
   STRIPE_SECRET_KEY=sk_test_xxx
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
   ```

---

## 5. 🔗 Make.com (Automation)

**What it's for:**
- Trigger workflows when bookings are created
- Send confirmation emails
- Update multiple systems automatically

### Setup Steps:
1. Go to [make.com](https://www.make.com)
2. Create scenario: "New Booking Workflow"
3. Add webhook trigger
4. Copy webhook URL
5. Add to `.env.local`:
   ```
   MAKE_BOOKING_WEBHOOK_URL=https://hook.eu1.make.com/xxx
   ```

---

## 6. ✉️ Customer.io (Emails)

**What it's for:**
- Welcome emails
- Booking confirmations
- Follow-up sequences
- Newsletter

### Setup Steps:
1. Go to [customer.io](https://customer.io)
2. Settings → API Credentials
3. Copy Site ID and API Key
4. Add to `.env.local`:
   ```
   CUSTOMERIO_SITE_ID=xxx
   CUSTOMERIO_API_KEY=xxx
   ```

---

## 7. 🗄️ Supabase (Database)

**What it's for:**
- User authentication
- Booking data storage
- Analytics tracking

### Setup Steps:
1. Go to [supabase.com](https://supabase.com)
2. Create project: "good-hands"
3. Go to Settings → API
4. Copy URL and service_role key
5. Add to `.env.local`:
   ```
   SUPABASE_URL=https://xxx.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=xxx
   ```

---

## Testing Setup

After adding environment variables:

```bash
# Restart development server
npm run dev

# Check integrations
# 1. Intercom chat should appear (bottom-right)
# 2. Maps should load on neighborhood pages
# 3. Booking form should submit to Notion
```

---

## Production Deployment

Add all environment variables to Vercel:

```bash
cd _good-hands
vercel env add NEXT_PUBLIC_INTERCOM_APP_ID
vercel env add NOTION_API_KEY
# ... add all others
```

Or in Vercel Dashboard:
- Project → Settings → Environment Variables
- Add each variable for Production, Preview, Development

---

## Priority Order

1. **✅ Intercom** - Easiest, immediate value (15 min)
2. **🗺️ Google Maps** - Visual improvement (30 min)
3. **🔄 Notion** - Core functionality (1-2 hours)
4. **💳 Stripe** - When ready for payments
5. **🔗 Make.com** - Advanced automation
6. **✉️ Customer.io** - Email marketing

---

**Need Help?**
- Intercom docs: https://developers.intercom.com
- Notion API: https://developers.notion.com
- Google Maps: https://developers.google.com/maps/documentation/embed

**Last Updated:** October 12, 2025

