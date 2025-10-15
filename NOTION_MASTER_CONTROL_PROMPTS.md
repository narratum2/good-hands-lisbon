# 🎛️ NOTION MASTER CONTROL CENTER - Complete Website Management

## 🎯 USE THESE PROMPTS IN NOTION AI

Copy and paste these prompts one by one into Notion AI to create your complete control center.

---

## 📋 PROMPT 1: Complete Database Structure

**Paste this in Notion:**

```
Create a complete workspace structure for managing "Good Hands" luxury beauty concierge website from Notion. I need 12 interconnected databases:

1. BOOKINGS (Main Operations)
Properties: Booking ID (title), Customer (relation to Customers), Professional (relation to Professionals), Service Type (select: Hair/Nails/Skincare/Makeup/Wellness/Wedding), Date (date), Time (select), Neighborhood (select: Chiado/Príncipe Real/Baixa/Alfama/Belém/Cascais/Sintra/Avenida), Status (select: New/Confirmed/In Progress/Completed/Cancelled/No Show), Price (number), Payment Status (select: Pending/Paid/Refunded), Booking Reference (formula: "GH-" + id), Customer Email (email), Customer Phone (phone), Special Requests (text), Created At (created time), Source (select: Website/Instagram/Referral/Hotel/Direct), UTM Source (text), UTM Medium (text), UTM Campaign (text), Admin Notes (text), Rating (select: 1-5 stars), Follow-up Required (checkbox), Follow-up Date (date)

2. CUSTOMERS (CRM)
Properties: Name (title), Email (email), Phone (phone), Customer Type (select: First-Time/Returning/VIP/Corporate), Total Bookings (rollup from Bookings), Total Spent (rollup from Bookings), Average Rating (rollup), Last Booking Date (rollup), Preferred Services (multi-select), Preferred Neighborhoods (multi-select), Preferred Professionals (relation), Language (select: English/Portuguese/Spanish/French), Communication Preference (select: Email/WhatsApp/SMS), Tags (multi-select: High-Value/Frequent/Special-Occasions/Corporate), Lifecycle Stage (select: Lead/Customer/Loyal/Churned), First Contact Date (date), Birthday (date), Anniversary (date), Referral Source (text), Notes (text), Next Follow-up (date)

3. PROFESSIONALS (Partner Management)
Properties: Name (title), Specialty (multi-select: Hair-Colorist/Hair-Stylist/Nail-Artist/Esthetician/Makeup-Artist/Massage-Therapist/Wellness-Coach), Neighborhoods Served (multi-select), Languages (multi-select), Years Experience (number), Certification (text), Portfolio URL (url), Instagram Handle (text), Rating (number 1-5), Total Bookings (rollup), Status (select: Active/Inactive/On-Leave/Trial), Hourly Rate (number), Commission Rate (number), Contact Email (email), Contact Phone (phone), Availability (multi-select: Mon/Tue/Wed/Thu/Fri/Sat/Sun), Preferred Time Slots (text), Specializations (text: curly hair, sensitive skin, etc.), Training Completed (checkbox), Background Check (checkbox), Insurance Verified (checkbox), Contract Signed (checkbox), Onboarding Date (date), Last Review Date (date), Next Review Date (date), Performance Score (formula), Admin Notes (text)

4. SERVICES CATALOG (Content Management)
Properties: Service Name (title), Category (select: Hair/Nails/Skincare/Makeup/Wellness/Wedding), Description Short (text), Description Long (text), Base Price (number), Duration (number in minutes), What's Included (text), Add-Ons Available (multi-select), Ideal For (text), Service Level (select: Essential/Premium/Luxury), Professionals Offering (relation to Professionals), Total Bookings (rollup), Average Rating (rollup), Image URL (url), Display Order (number), Active (checkbox), SEO Title (text), SEO Description (text), Published (checkbox)

5. NEIGHBORHOODS GUIDE (Location Content)
Properties: Neighborhood Name (title), Description (text), Character/Vibe (text), Best For Services (multi-select), Professionals in Area (relation to Professionals), Getting There (text), Parking Info (text), Nearby Landmarks (text), Recommended Spots (text), Image URL (url), Map Coordinates (text: lat, lng), Active (checkbox), SEO Content (text), Display Order (number)

6. BLOG ARTICLES (Content Management)
Properties: Title (title), Slug (text), Category (select: Beauty-Tips/Lisbon-Guide/Wellness/Weddings/Seasonal), Author (text), Status (select: Draft/Review/Scheduled/Published), Publish Date (date), Featured Image URL (url), Excerpt (text), Content (text), SEO Title (text), SEO Description (text), Keywords (multi-select), Related Services (relation to Services), Related Neighborhoods (relation to Neighborhoods), Views (number), Shares (number), Last Updated (last edited time)

7. PRICING & PACKAGES (Revenue Management)
Properties: Package Name (title), Type (select: Single-Service/Bundle/Membership/Corporate), Services Included (relation to Services), Base Price (number), Discounted Price (number), Discount Percentage (formula), Duration (text), What's Included (text), Terms (text), Active (checkbox), Display on Website (checkbox), Target Audience (select: Individual/Corporate/Wedding/Tourist), Seasonal (checkbox), Valid From (date), Valid Until (date), Total Sold (number)

8. HOTEL PARTNERSHIPS (B2B Management)
Properties: Hotel Name (title), Contact Person (text), Contact Email (email), Contact Phone (phone), Status (select: Prospect/Active/Paused/Churned), Contract Start (date), Contract End (date), Commission Rate (number), Monthly Volume (number), Total Bookings (rollup), Total Revenue (rollup), Services Offered (multi-select), Preferred Professionals (relation), Special Terms (text), Marketing Materials Sent (checkbox), Next Review (date), Notes (text)

9. MARKETING CAMPAIGNS (Growth Tracking)
Properties: Campaign Name (title), Channel (select: Instagram/Google/Email/Referral/Hotel/Organic), Start Date (date), End Date (date), Budget (number), Spend (number), Impressions (number), Clicks (number), Bookings (relation to Bookings), Conversions (rollup), Cost Per Booking (formula), ROI (formula), Status (select: Planning/Active/Paused/Completed), Target Audience (text), Creative Assets (files), Performance Notes (text)

10. INVENTORY & RESOURCES (Operations)
Properties: Item Name (title), Type (select: Product/Equipment/Supplies), Quantity (number), Reorder Level (number), Cost (number), Supplier (text), Last Ordered (date), Next Order Date (date), Used By (relation to Professionals), Notes (text)

11. REVIEWS & TESTIMONIALS (Social Proof)
Properties: Customer Name (title), Booking (relation to Bookings), Rating (select: 1-5 stars), Service Received (relation to Services), Professional (relation to Professionals), Review Text (text), Review Date (date), Source (select: Email/Instagram/Google/Direct), Published on Website (checkbox), Featured (checkbox), Response (text), Image Permission (checkbox), Video Permission (checkbox)

12. TASKS & ADMIN (Operations Dashboard)
Properties: Task (title), Type (select: Follow-up/Match-Professional/Send-Confirmation/Quality-Check/Marketing/Partnership), Related To (text), Assigned To (select: Admin/Sales/Operations), Priority (select: Urgent/High/Medium/Low), Due Date (date), Status (select: To-Do/In-Progress/Done/Blocked), Related Booking (relation to Bookings), Notes (text), Completed Date (date)

Create all 12 databases with these exact properties, then:
1. Show me how to create relations between them
2. Create a master dashboard view linking all databases
3. Give me the database IDs for each
```

---

## 📊 PROMPT 2: Dashboard Views

**After databases are created, paste this:**

```
Create these Notion dashboard views for "Good Hands" management:

1. DAILY OPERATIONS DASHBOARD
- Today's bookings (filtered by date = today, sorted by time)
- New bookings requiring confirmation (status = New)
- Tasks due today (grouped by priority)
- New chat messages (status = New)
- Customers needing follow-up (follow-up date = today)

2. BOOKINGS PIPELINE VIEW
- Kanban board: Columns = New → Confirmed → In Progress → Completed
- Grouped by status
- Color-coded by service type
- Quick filters: By neighborhood, by professional, by date range

3. CUSTOMER RELATIONSHIP VIEW
- All customers sorted by total spent
- Segmented by customer type (VIP, Regular, New)
- Filter by lifecycle stage
- Show last booking date and next follow-up

4. PROFESSIONAL PERFORMANCE VIEW
- Table: All professionals with key metrics
- Columns: Name, Specialty, Total Bookings, Average Rating, Status
- Sort by total bookings (descending)
- Filter by active/inactive

5. REVENUE ANALYTICS VIEW
- Gallery view of all bookings
- Grouped by month
- Sum of prices
- Filter by payment status = Paid

6. CONTENT CALENDAR VIEW
- Blog articles in calendar view
- Filtered by published = true
- Sorted by publish date
- Color-coded by category

7. PARTNER MANAGEMENT VIEW
- Hotels table with key metrics
- Columns: Hotel, Status, Monthly Volume, Revenue, Next Review
- Sorted by revenue (descending)
- Filter: Active partnerships only

8. WEEKLY REVIEW DASHBOARD
- This week's completed bookings
- Customer satisfaction scores
- Professional performance highlights
- Revenue summary
- Tasks completed vs pending

Set up these 8 views and link them to a master "Good Hands - Control Center" page.
```

---

## 🔗 PROMPT 3: Automations Setup

**For Notion Automations (or use with Make.com/Zapier):**

```
Set up these automated workflows for "Good Hands" in Notion:

1. NEW BOOKING AUTOMATION
When: New entry in Bookings database
Then:
- Auto-generate Booking Reference (GH-XXXXXX)
- Create/update Customer record
- Set Status to "New"
- Create Task: "Confirm booking and match professional"
- Send notification to admin

2. BOOKING CONFIRMATION
When: Booking Status changes to "Confirmed"
Then:
- Update Customer's Last Booking Date
- Increment Customer's Total Bookings
- Create Task: "Send confirmation email"
- Create Task: "Follow up day before appointment"

3. CUSTOMER LIFECYCLE
When: Customer Total Bookings reaches 5
Then:
- Update Customer Type to "VIP"
- Create Task: "Send VIP welcome package"

4. PROFESSIONAL PERFORMANCE
When: Professional Total Bookings reaches milestone (10, 25, 50, 100)
Then:
- Create Task: "Review professional performance"
- Calculate performance bonus

5. FOLLOW-UP REMINDERS
When: Follow-up Date = Tomorrow
Then:
- Create Task: "Contact customer for feedback"
- Notify admin

6. CONTENT PUBLISHING
When: Blog Article Publish Date = Today and Published = False
Then:
- Set Published to True
- Create Task: "Share on social media"

Create these automations or give me the webhook URLs to use with Make.com/Zapier.
```

---

## 🎯 PROMPT 4: Integration Setup

**For connecting Notion to your website:**

```
I need to integrate my Notion workspace with my Next.js website at https://good-hands-seven.vercel.app/

Help me set up:

1. WEBHOOK ENDPOINTS
Create webhook receivers in Notion for:
- New booking submissions from website → Bookings database
- Chat messages from website → Chat Messages database
- Form submissions → Customers database
- Professional applications → Professionals database

2. API CONNECTIONS
Show me how to:
- Connect my Notion integration "Good Hands" to all 12 databases
- Get the database IDs (from URLs)
- Set up proper permissions (read/write)
- Test the connection with a sample API call

3. SYNC CONFIGURATION
Help me configure two-way sync:
- Website → Notion (bookings, chat, forms)
- Notion → Website (content, pricing, professional profiles)

Give me step-by-step instructions including all database IDs needed.
```

---

## 📱 PROMPT 5: Mobile Admin Setup

**For managing on the go:**

```
Set up a mobile-friendly admin dashboard in Notion for "Good Hands" that lets me:

1. QUICK ACTIONS VIEW (for Notion mobile app)
- Button: "New bookings today" → Filter view
- Button: "Confirm pending" → Status update
- Button: "Check messages" → Chat database
- Button: "This week's revenue" → Analytics

2. SIMPLIFIED MOBILE VIEWS
Create mobile-optimized views for:
- Today's schedule (simple list)
- Pending confirmations (just essentials)
- New messages (unread only)
- Emergency contacts (professionals on call)

3. TEMPLATES
Create quick-add templates for:
- Manual booking entry
- New customer
- New professional
- Quick note/task

Make everything work smoothly in the Notion iOS/Android app.
```

---

## 🚀 WHAT YOU'LL BE ABLE TO DO FROM NOTION

### Daily Operations:
- ✅ See all bookings in real-time
- ✅ Confirm bookings with one click
- ✅ Match customers with professionals
- ✅ Respond to chat messages
- ✅ Track customer history
- ✅ Manage professional schedules

### Content Management:
- ✅ Write and publish blog posts
- ✅ Update service descriptions
- ✅ Change pricing
- ✅ Edit neighborhood guides
- ✅ Manage testimonials

### Business Analytics:
- ✅ Daily/weekly/monthly revenue
- ✅ Booking conversion rates
- ✅ Professional performance
- ✅ Customer lifetime value
- ✅ Marketing ROI

### CRM & Growth:
- ✅ Customer segmentation
- ✅ Follow-up scheduling
- ✅ Email campaigns
- ✅ Partnership management
- ✅ Referral tracking

---

## ⚙️ TECHNICAL SETUP AFTER DATABASES ARE CREATED

Once Notion creates all databases, you'll need to add these to Vercel:

```
NOTION_API_KEY = [YOUR_SECRET_HERE]

NOTION_BOOKINGS_DB_ID = [from Notion]
NOTION_CUSTOMERS_DB_ID = [from Notion]
NOTION_PROFESSIONALS_DB_ID = [from Notion]
NOTION_SERVICES_DB_ID = [from Notion]
NOTION_NEIGHBORHOODS_DB_ID = [from Notion]
NOTION_BLOG_DB_ID = [from Notion]
NOTION_PRICING_DB_ID = [from Notion]
NOTION_HOTELS_DB_ID = [from Notion]
NOTION_CAMPAIGNS_DB_ID = [from Notion]
NOTION_INVENTORY_DB_ID = [from Notion]
NOTION_REVIEWS_DB_ID = [from Notion]
NOTION_TASKS_DB_ID = [from Notion]
NOTION_CHAT_DB_ID = [from Notion]
```

---

## 📖 USAGE EXAMPLES

### Managing Bookings:
1. New booking comes in → Appears in Notion
2. You click Status → Change to "Confirmed"
3. Select Professional from dropdown
4. Add to Google Calendar (Notion integration)
5. Send confirmation email
6. Done!

### Publishing Content:
1. Write blog post in Notion
2. Add images and formatting
3. Set Publish Date
4. Website auto-updates when Published = True
5. No developer needed!

### Updating Prices:
1. Edit price in Pricing database
2. Change takes effect immediately on website
3. Historical pricing preserved

---

## 🎯 START WITH PROMPT 1

Copy the first prompt about database structure into Notion AI and let it create everything. Once done, use the other prompts to set up views, automations, and integrations.

**You'll have complete control over your entire website from Notion!** 🎛️✨

