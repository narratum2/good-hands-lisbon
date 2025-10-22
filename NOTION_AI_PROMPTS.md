# 🤖 Notion AI Prompts - Auto-Build Your Databases

**Use these prompts with Notion AI to automatically create all required properties!**

---

## 🚀 **How to Use Notion AI**

1. Open your Notion database
2. Press `Space` or click "Ask AI"
3. Copy-paste the prompt below
4. Let Notion AI build it!
5. Share the database with your integration

---

## 📅 **Prompt 1: Bookings Database**

**Database ID**: `e50edfbee2e34df8b4566edc8bdc1189`

```
Create a Bookings database with these exact properties:

1. Customer Name - Title property (main field)
2. Customer Email - Email property
3. Service - Select property with options: Haircut & Styling, Makeup, Nails, Spa Treatment, Wedding Beauty, Event Styling, Photoshoot Styling
4. Neighborhood - Select property with options: Chiado, Baixa, Alfama, Bairro Alto, Príncipe Real, Estrela, Santos, Alcântara
5. Date - Date property (enable "Include time")
6. Status - Select property with options: Pending, Confirmed, Completed, Cancelled, No Show
7. Notes - Text property (rich text)
8. UTM Source - Text property
9. Created Date - Date property (auto-fill with creation date)

This will track all customer bookings from our website.
```

---

## 👤 **Prompt 2: Customers Database**

**Database ID**: `e06a065f262147738e47005090b94e02`

```
Create a Customers (CRM) database with these exact properties:

1. Name - Title property (main field)
2. Email - Email property
3. Phone - Phone property
4. Source - Text property (where they found us)
5. UTM Source - Text property (marketing tracking)
6. UTM Campaign - Text property (campaign tracking)
7. Status - Select property with options: New, Active, Inactive, VIP
8. Created Date - Date property (auto-fill)

This is our customer relationship management database.
```

---

## 💬 **Prompt 3: Chat Database**

**Database ID**: `51c3d3aae9fc4d01bc85c3f90d99c0a8`

```
Create a Chat Conversations database with these exact properties:

1. Message - Title property (first 100 characters of message)
2. Customer Email - Email property
3. Customer Name - Text property
4. Source - Select property with options: Website Chat, Email, Phone, Social Media
5. Full Message - Text property (complete message content)
6. Timestamp - Date property (include time, auto-fill)

This logs all customer conversations for support tracking.
```

---

## ✨ **Prompt 4: Services Catalog (CMS)**

**Database ID**: `79821ef6d2904c0991c1a16c4f8e0aa4`

```
Create a Services Catalog database for managing website content with these properties:

1. Name - Title property (service name)
2. Description - Text property (service description)
3. Price - Number property (price in €)
4. Duration - Text property (e.g., "90 minutes")
5. Category - Select property with options: Hair, Makeup, Nails, Spa, Wedding, Events, Photoshoots
6. Icon - Text property (emoji icon, e.g., 💇)
7. Features - Text property (one feature per line)
8. Status - Select property with options: Active, Inactive, Coming Soon
9. Display Order - Number property (1, 2, 3... for sorting on website)

Services marked "Active" will appear on the website automatically.
```

---

## ⭐ **Prompt 5: Reviews & Testimonials (CMS + CRM)**

**Database ID**: `d2ab7e46e47740c594a5c30a86ef59ab`

```
Create a Reviews & Testimonials database with these properties:

1. Customer Name - Title property
2. Email - Email property
3. Service - Select property with options: Hair Styling, Makeup, Nails, Spa Treatment, Wedding, Event Styling
4. Rating - Number property (1-5 stars)
5. Review - Text property (testimonial text)
6. Status - Select property with options: Pending, Approved, Rejected, Featured
7. Date - Date property
8. Verified - Checkbox property (✓ if verified customer)
9. Featured - Checkbox property (✓ to show on homepage)
10. Location - Text property (neighborhood)
11. Booking ID - Text property (link to original booking)

Only "Approved" reviews appear on the website. Mark "Featured" for homepage display.
```

---

## 📝 **Prompt 6: Blog Articles (CMS)**

**Database ID**: `e2f72ecc28874ff2bb4950cdcef19f94`

```
Create a Blog Articles database for content management with these properties:

1. Title - Title property (article title)
2. Slug - Text property (URL slug, e.g., "best-hair-tips-lisbon")
3. Excerpt - Text property (short summary for previews)
4. Category - Select property with options: Beauty Tips, Style Guide, Neighborhood Guide, Client Stories, Industry News
5. Author - Text property (author name)
6. Publish Date - Date property
7. Status - Select property with options: Draft, In Review, Scheduled, Published, Archived
8. Featured - Checkbox property (✓ to feature on blog page)
9. Cover Image - URL property (header image URL)
10. Tags - Multi-select property with options: Hair, Makeup, Skincare, Wedding, Lisbon, Tutorial, Trends
11. Read Time - Number property (minutes to read)

Only "Published" articles appear on the website. Write articles in Notion pages!
```

---

## 💰 **Prompt 7: Pricing (CMS)**

**Database ID**: `da99fddfc4ad451d9af820819e4c05db`

```
Create a Dynamic Pricing database with these properties:

1. Service Name - Title property
2. Base Price - Number property (standard price in €)
3. Member Price (Gold) - Number property (15% discount)
4. Member Price (Platinum) - Number property (25% discount)
5. Neighborhood Multiplier - Number property (1.0 = standard, 1.2 = 20% more)
6. Peak Hours Surcharge - Number property (weekend/evening pricing)
7. Status - Select property with options: Active, Inactive
8. Last Updated - Date property

Website pulls pricing dynamically from this database.
```

---

## 👥 **Prompt 8: Professionals (Team Management)**

**Database ID**: `d98d64b97c7e47e68ee83f7aef3bbe39`

```
Create a Professionals (Team) database with these properties:

1. Name - Title property
2. Specialty - Select property with options: Hair Stylist, Makeup Artist, Nail Technician, Spa Therapist, Wedding Specialist
3. Bio - Text property (professional bio)
4. Photo URL - URL property (profile photo)
5. Rating - Number property (average rating)
6. Services Offered - Multi-select property (which services they provide)
7. Availability - Select property with options: Available, Busy, On Leave
8. Phone - Phone property
9. Email - Email property
10. Neighborhoods - Multi-select property (areas they serve)

Track your team members and their schedules.
```

---

## 🤝 **Prompt 9: Partnerships (Business Development)**

**Database ID**: `b2fb36e5be124096898e11abd9e2a88a`

```
Create a Hotel & Venue Partnerships database with these properties:

1. Partner Name - Title property (hotel/venue name)
2. Contact Person - Text property
3. Email - Email property
4. Phone - Phone property
5. Commission Rate - Number property (percentage)
6. Agreement Status - Select property with options: Active, Pending, Expired, Inactive
7. Partnership Type - Select property with options: Hotel, Venue, Spa, Corporate
8. Monthly Referrals - Number property
9. Total Revenue - Number property (€)
10. Notes - Text property

Manage all business partnerships and referral agreements.
```

---

## 📍 **Prompt 10: Neighborhoods (Service Areas)**

**Database ID**: `56a0f9d3cda44a0fbc23e29af4adeb47`

```
Create a Neighborhoods (Service Areas) database with these properties:

1. Name - Title property (neighborhood name)
2. Service Available - Checkbox property (✓ if we serve this area)
3. Pricing Multiplier - Number property (1.0 = standard, 1.2 = premium)
4. Popular Venues - Text property (list of venues/hotels)
5. Travel Time - Number property (minutes from base)
6. Description - Text property (about the neighborhood)
7. Status - Select property with options: Active, Coming Soon, Unavailable

Define which areas you serve and pricing for each.
```

---

## 📊 **Prompt 11: Marketing Campaigns**

**Database ID**: `e0ab09c6c74f490ab6c3fe67aa7c9fb6`

```
Create a Marketing Campaigns database with these properties:

1. Campaign Name - Title property
2. Start Date - Date property
3. End Date - Date property
4. Budget - Number property (€)
5. Channel - Select property with options: Google Ads, Instagram, Facebook, Email, SEO, Partnerships
6. UTM Campaign - Text property (tracking code)
7. Clicks - Number property
8. Conversions - Number property
9. Revenue - Number property (€)
10. ROI - Number property (percentage)
11. Status - Select property with options: Planning, Active, Paused, Completed

Track all marketing campaigns and performance.
```

---

## 📦 **Prompt 12: Inventory**

**Database ID**: `6aede30c5dfd4da59f5c94a8fa12090e`

```
Create an Inventory (Products & Supplies) database with these properties:

1. Item Name - Title property
2. Category - Select property with options: Hair Products, Makeup, Skincare, Tools, Supplies
3. Quantity - Number property (current stock)
4. Reorder Level - Number property (minimum before reordering)
5. Unit Price - Number property (€)
6. Supplier - Text property
7. Last Ordered - Date property
8. Status - Select property with options: In Stock, Low Stock, Out of Stock, Discontinued

Track products and supplies for your services.
```

---

## 💎 **Prompt 13: Memberships (Future Feature)**

**Database ID**: (Will use `NOTION_MEMBERSHIPS_DATABASE_ID` env var)

```
Create a Memberships (Premium Tiers) database with these properties:

1. Customer Email - Email property
2. Membership Type - Select property with options: Gold, Platinum
3. Stripe Subscription ID - Text property
4. Stripe Customer ID - Text property
5. Status - Select property with options: Active, Cancelled, Past Due, Trial
6. Monthly Price - Number property (€)
7. Start Date - Date property
8. Next Billing Date - Date property
9. Benefits Used This Month - Number property
10. Lifetime Value - Number property (€)

Manage premium membership subscriptions.
```

---

## 🎯 **Priority Order**

### **CRITICAL (Do First - 12 min):**
1. ✅ Bookings
2. ✅ Customers  
3. ✅ Chat

**These 3 make bookings work!**

### **CMS (Optional - Do When Ready):**
4. Services (control website content)
5. Reviews (manage testimonials)
6. Blog (publish articles)

### **Advanced (Future):**
7-13. Pricing, Professionals, Partnerships, Neighborhoods, Marketing, Inventory, Memberships

---

## ✅ **After Using Notion AI**

For each database:

1. ✅ Notion AI creates all properties
2. ✅ Verify property names match exactly
3. ✅ Click **"Share"** → Invite your integration → Full access
4. ✅ Test the connection!

---

## 🧪 **Test Commands After Setup**

```bash
# Test Notion connection
curl https://good-hands-seven.vercel.app/api/test-notion

# Submit test booking
curl -X POST https://good-hands-seven.vercel.app/api/bookings \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","phone":"+351912345678","service":"Haircut","date":"2025-12-01","time":"15:00"}'

# Check it appears in your Notion Bookings database! ✅
```

---

## 💡 **Pro Tip: Share What Notion AI Built**

If Notion AI already built something for you, you can:

1. Show me a screenshot of your database properties
2. Tell me what properties exist
3. I'll verify they match what the code expects
4. Fix any mismatches

---

## 🚀 **Result**

After Notion AI builds these databases:
- ✅ Website bookings → Auto-save to Notion
- ✅ Customer profiles → Auto-created
- ✅ Chat messages → Auto-logged  
- ✅ You control services, reviews, blog from Notion
- ✅ Complete business management from one place!

---

**Time with Notion AI**: 5-10 minutes (vs 45 minutes manually!)

**Ready?** Use the prompts above with Notion AI, share databases with your integration, then test! 🎉

