# 🔧 Notion Integration Setup for Vercel

## Quick Setup (5 Minutes)

### Step 1: Add Environment Variables in Vercel

1. Go to https://vercel.com/dashboard
2. Select your **_good-hands** project
3. Click **Settings** → **Environment Variables**
4. Add the following variables:

---

### Required Variables

#### Notion Integration
```
Name: NOTION_API_KEY
Value: [Your Notion integration secret key]
Environment: Production, Preview, Development (select all)
```

#### Google Analytics (Already configured, but verify)
```
Name: NEXT_PUBLIC_GA_MEASUREMENT_ID
Value: G-ZGDMVGP040
Environment: Production, Preview, Development
```

#### Microsoft Clarity
```
Name: NEXT_PUBLIC_CLARITY_PROJECT_ID
Value: nqx8yz9m2i
Environment: Production, Preview, Development
```

---

### Step 2: Redeploy

After adding environment variables:
1. Go to **Deployments** tab
2. Find the latest deployment
3. Click **...** menu → **Redeploy**
4. Check "Use existing Build Cache" (faster)
5. Click **Redeploy**

---

## 📋 NOTION DATABASE SETUP

### Create These Databases in Notion

#### 1. Bookings Database
**Properties:**
- Name (Title)
- Email (Email)
- Phone (Phone)
- Service (Select: Hair, Nails, Skincare, Makeup, Wellness, Wedding)
- Date (Date)
- Time (Select)
- Neighborhood (Select: Chiado, Príncipe Real, etc.)
- Status (Select: New, Confirmed, Completed, Cancelled)
- Booking Reference (Text)
- Notes (Text)
- Created At (Created time)
- Source (Select: Website, Instagram, Referral, etc.)

#### 2. Customers Database
**Properties:**
- Name (Title)
- Email (Email)
- Phone (Phone)
- First Booking Date (Date)
- Total Bookings (Number)
- Preferred Services (Multi-select)
- Preferred Neighborhoods (Multi-select)
- Customer Status (Select: New, Active, VIP, Inactive)
- Notes (Text)

#### 3. Professionals Database
**Properties:**
- Name (Title)
- Specialty (Multi-select: Hair, Nails, Skincare, etc.)
- Neighborhood (Multi-select)
- Rating (Number)
- Total Bookings (Number)
- Status (Select: Active, Inactive, Pending)
- Contact (Email)
- Notes (Text)

---

## 🔗 CONNECT DATABASES TO INTEGRATION

### In Notion:
1. Open each database
2. Click **...** menu (top right)
3. Click **Connections**
4. Select your **Good Hands** integration
5. Click **Confirm**

### Get Database IDs:
1. Open each database as a full page
2. Copy the URL
3. Database ID is the part after the last slash and before the `?`

Example:
```
URL: https://www.notion.so/1234567890abcdef1234567890abcdef?v=...
Database ID: 1234567890abcdef1234567890abcdef
```

---

## ⚙️ ADD DATABASE IDs TO VERCEL

Once you have the database IDs, add these to Vercel Environment Variables:

```
Name: NOTION_BOOKINGS_DATABASE_ID
Value: [your bookings database ID]
Environment: Production, Preview, Development

Name: NOTION_CUSTOMERS_DATABASE_ID
Value: [your customers database ID]
Environment: Production, Preview, Development

Name: NOTION_PROFESSIONALS_DATABASE_ID
Value: [your professionals database ID]
Environment: Production, Preview, Development
```

---

## ✅ VERIFICATION

### Test the Integration:

1. **After redeployment**, go to your booking page:
   https://good-hands-seven.vercel.app/book

2. **Complete a test booking** with your own details

3. **Check Notion** - You should see a new entry in your Bookings database

4. **If it doesn't work:**
   - Check Vercel deployment logs for errors
   - Verify environment variables are set
   - Verify databases are connected to integration
   - Check browser console for errors

---

## 🤖 ALTERNATIVE: Use AI to Set Up Notion

If you have Claude or ChatGPT, use this prompt:

```
I need to set up Notion databases for my beauty booking service "Good Hands". 

Create 3 databases with these specifications:

1. BOOKINGS DATABASE
Properties: Name (title), Email, Phone, Service (select: Hair/Nails/Skincare/Makeup/Wellness/Wedding), Date, Time, Neighborhood (select: Chiado/Príncipe Real/Baixa/Alfama/Belém/Cascais/Sintra/Avenida), Status (select: New/Confirmed/Completed/Cancelled), Booking Reference, Notes, Created At, Source

2. CUSTOMERS DATABASE  
Properties: Name (title), Email, Phone, First Booking Date, Total Bookings (number), Preferred Services (multi-select), Preferred Neighborhoods (multi-select), Customer Status (select: New/Active/VIP/Inactive), Notes

3. PROFESSIONALS DATABASE
Properties: Name (title), Specialty (multi-select: Hair/Nails/Skincare/Makeup/Wellness), Neighborhood (multi-select), Rating (number), Total Bookings (number), Status (select: Active/Inactive/Pending), Contact, Notes

After creating, give me the database IDs (from URLs) and help me connect them to my Notion integration named "Good Hands".
```

---

## 📱 QUICK REFERENCE

### Your Notion Integration Credentials
```
Integration Name: Good Hands
Secret: [Provided separately for security]
```

### Vercel Project
```
Project: _good-hands
URL: https://good-hands-seven.vercel.app/
```

### What This Enables
- ✅ Automatic booking entries in Notion
- ✅ Customer relationship management
- ✅ Professional matching
- ✅ Booking status tracking
- ✅ Analytics and reporting

---

## 🚨 SECURITY NOTE

**IMPORTANT:** 
- Never commit the `.env.local` file to git (it's in .gitignore)
- Only add secrets in Vercel dashboard
- Don't share your Notion secret publicly
- Rotate keys if accidentally exposed

---

**Status:** Ready to configure  
**Next Step:** Add variables in Vercel dashboard  
**Time Needed:** 5 minutes  


