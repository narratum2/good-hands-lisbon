# ⚙️ Complete Vercel Environment Variables Setup

## 🎯 Quick Setup Checklist

Go to: https://vercel.com/dashboard → Select **_good-hands** project → **Settings** → **Environment Variables**

---

## ✅ REQUIRED VARIABLES (Add These Now)

### 1. Notion Integration
```
Variable Name: NOTION_API_KEY
Value: [Your Notion secret - see secure notes]
Environments: ☑️ Production ☑️ Preview ☑️ Development
```

### 2. Google Analytics
```
Variable Name: NEXT_PUBLIC_GA_MEASUREMENT_ID  
Value: G-ZGDMVGP040
Environments: ☑️ Production ☑️ Preview ☑️ Development
```

### 3. Microsoft Clarity
```
Variable Name: NEXT_PUBLIC_CLARITY_PROJECT_ID
Value: nqx8yz9m2i
Environments: ☑️ Production ☑️ Preview ☑️ Development
```

---

## 📊 NOTION DATABASE IDs (Add After Creating Databases)

### 4. Bookings Database
```
Variable Name: NOTION_BOOKINGS_DATABASE_ID
Value: [Get from Notion database URL - see NOTION_VERCEL_SETUP.md]
Environments: ☑️ Production ☑️ Preview ☑️ Development
```

### 5. Customers Database
```
Variable Name: NOTION_CUSTOMERS_DATABASE_ID
Value: [Get from Notion database URL]
Environments: ☑️ Production ☑️ Preview ☑️ Development
```

### 6. Professionals Database
```
Variable Name: NOTION_PROFESSIONALS_DATABASE_ID
Value: [Get from Notion database URL]
Environments: ☑️ Production ☑️ Preview ☑️ Development
```

---

## 🔐 OPTIONAL VARIABLES (Add When Ready)

### Email Service (For booking confirmations)
```
Variable Name: RESEND_API_KEY
Value: re_[your_resend_key]
Environments: ☑️ Production
```

### Stripe (For payments - future)
```
Variable Name: STRIPE_SECRET_KEY
Value: sk_live_[your_stripe_secret]
Environments: ☑️ Production only

Variable Name: NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
Value: pk_live_[your_stripe_public_key]  
Environments: ☑️ Production ☑️ Preview
```

### Intercom (Customer support chat)
```
Variable Name: NEXT_PUBLIC_INTERCOM_APP_ID
Value: [your_intercom_app_id]
Environments: ☑️ Production ☑️ Preview
```

---

## 🔄 AFTER ADDING VARIABLES

### Redeploy the Site:
1. Go to **Deployments** tab in Vercel
2. Find latest deployment
3. Click **...** → **Redeploy**
4. ✅ Check "Use existing Build Cache"
5. Click **Redeploy** button

**Wait 2-3 minutes** for deployment to complete.

---

## ✅ VERIFICATION

### Test Each Integration:

#### 1. Test Booking Flow
- Go to https://good-hands-seven.vercel.app/book
- Complete a booking
- Check Notion → Should see new entry in Bookings database

#### 2. Test Analytics
- Visit site
- Open browser console
- Look for: "GA4 initialized with ID: G-ZGDMVGP040"
- Check Network tab for gtag requests

#### 3. Test Clarity
- Visit site  
- Wait 5 minutes
- Go to https://clarity.microsoft.com
- Check for recordings (can take 15-30 min to appear)

---

## 🚨 TROUBLESHOOTING

### If Bookings Don't Appear in Notion:

1. **Check Vercel Logs:**
   - Go to Deployments → Latest → View Function Logs
   - Look for errors mentioning "Notion" or "API"

2. **Verify Database Connection:**
   - In Notion, open Bookings database
   - Click **...** → **Connections**
   - Ensure "Good Hands" integration is connected

3. **Check Environment Variables:**
   - Vercel → Settings → Environment Variables
   - Verify `NOTION_API_KEY` is set
   - Verify `NOTION_BOOKINGS_DATABASE_ID` is set

4. **Test API Route:**
   - Visit: https://good-hands-seven.vercel.app/api/bookings
   - Should return method not allowed (POST only)

---

## 📝 CURRENT STATUS

### ✅ Already Configured in Code:
- Google Analytics tracking
- Microsoft Clarity script
- Notion API client setup
- Booking API route ready
- Error handling in place

### ⏳ Needs Configuration in Vercel:
- NOTION_API_KEY ← **Add this now**
- Database IDs ← **Add after creating databases**

### 🎯 Next Steps:
1. Add NOTION_API_KEY to Vercel (done above)
2. Create Notion databases (see NOTION_VERCEL_SETUP.md)
3. Add database IDs to Vercel
4. Redeploy
5. Test booking

---

## 🤖 AI PROMPT FOR NOTION SETUP

**Copy and paste this into Claude/ChatGPT on Notion.so:**

```
I'm setting up Notion for my beauty concierge service "Good Hands" booking management system.

TASK 1: Create 3 databases with these exact specifications:

DATABASE 1: "Good Hands - Bookings"
- Name (title)
- Email (email) 
- Phone (phone)
- Service (select: Hair Styling, Nail Care, Skincare, Makeup, Wellness, Wedding Package)
- Booking Date (date)
- Time Slot (select: 09:00, 10:00, 11:00, 12:00, 13:00, 14:00, 15:00, 16:00, 17:00, 18:00)
- Neighborhood (select: Chiado, Príncipe Real, Baixa, Alfama, Belém, Cascais, Sintra, Avenida)
- Status (select: New, Confirmed, In Progress, Completed, Cancelled)
- Booking Reference (text) - format: GH-XXXXXX
- Customer Message (text)
- Created At (created time)
- Source (select: Website, Instagram, Referral, Hotel Partner, Direct)
- UTM Source (text)
- UTM Medium (text)
- UTM Campaign (text)

DATABASE 2: "Good Hands - Customers"
- Name (title)
- Email (email)
- Phone (phone)
- First Booking Date (date)
- Total Bookings (number)
- Total Spent (number)
- Preferred Services (multi-select)
- Preferred Neighborhoods (multi-select)
- Customer Type (select: New, Regular, VIP, Inactive)
- Language (select: English, Portuguese, Spanish, French)
- Notes (text)
- Last Contact (date)

DATABASE 3: "Good Hands - Professionals"
- Name (title)
- Specialty (multi-select: Hair Styling, Color Specialist, Nail Artist, Esthetician, Makeup Artist, Massage Therapist)
- Neighborhoods (multi-select)
- Rating (number: 1-5)
- Total Bookings (number)
- Status (select: Active, Inactive, On Leave, Pending Review)
- Contact Email (email)
- Phone (phone)
- Hourly Rate (number)
- Languages (multi-select: Portuguese, English, Spanish, French)
- Certification (text)
- Portfolio Link (url)
- Notes (text)
- Joined Date (date)

TASK 2: After creating databases:
1. Give me the database IDs (from the URLs when you open each database as a full page)
2. Show me how to connect them to my integration named "Good Hands"
3. Create a sample booking entry to test the setup

Format database IDs like:
Bookings DB ID: 1234567890abcdef...
Customers DB ID: 0987654321fedcba...
Professionals DB ID: abcdef1234567890...
```

---

## 🎯 WHAT HAPPENS AFTER SETUP

### Automatic Workflow:
1. User completes booking on website
2. **API creates entry in Notion Bookings database**
3. **Email sent to user** (when email service configured)
4. **Admin gets notification** in Notion
5. **Booking appears in dashboard** for matching

### Manual Workflow (Until Automation):
1. Check Notion Bookings database daily
2. Assign professional to booking
3. Email customer with details
4. Update status to "Confirmed"
5. Follow up after service

---

## 📞 SUPPORT

**If you need help:**
1. Check NOTION_VERCEL_SETUP.md for detailed guide
2. See SESSION_COMPLETE.md for current status
3. Review FINAL_STATUS.md for all working features

**Everything is documented and ready to configure!** ✅

---

**Estimated Setup Time:** 10-15 minutes  
**Difficulty:** Easy (just copy/paste)  
**Status:** Ready to implement  

