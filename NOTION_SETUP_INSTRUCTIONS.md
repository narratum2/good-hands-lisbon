# 🔧 Notion Integration Setup for Good Hands

## Quick Setup Instructions

### Step 1: Add to Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Select **_good-hands** project
3. Go to **Settings** → **Environment Variables**
4. Add these variables:

#### Required Variables:
- `NOTION_API_KEY` = **[Use the secret key provided separately]**
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-ZGDMVGP040`
- `NEXT_PUBLIC_CLARITY_PROJECT_ID` = `nqx8yz9m2i`

Select **all environments** (Production, Preview, Development) for each.

### Step 2: Create Notion Databases

Use this AI prompt in Notion to set up databases automatically:

**Prompt for Claude/ChatGPT in Notion:**
```
Create 3 Notion databases for "Good Hands" beauty booking service:

1. Bookings Database
2. Customers Database  
3. Professionals Database

Include proper properties for tracking bookings, customer info, and professional details.
After creating, give me the database IDs.
```

### Step 3: Add Database IDs to Vercel

Once you have database IDs from Notion, add them to Vercel:
- `NOTION_BOOKINGS_DATABASE_ID`
- `NOTION_CUSTOMERS_DATABASE_ID`
- `NOTION_PROFESSIONALS_DATABASE_ID`

### Step 4: Redeploy

In Vercel → Deployments → Redeploy latest

---

**That's it! Bookings will now flow into Notion automatically.** ✅

For detailed instructions, the Notion secret key is provided separately for security.
