# 🎯 Notion Complete CMS/CRM Guide
## Manage Your ENTIRE Website from Notion!

**Last Updated**: October 22, 2025  
**Status**: ✅ Fully Functional (once databases are configured)

---

## 📊 **What You Can Manage from Notion**

Once your databases are set up, you control:

### 🔵 **INBOUND (CRM)** - Data Coming IN to Notion
1. **Bookings** - Every booking saves automatically
2. **Customers** - Customer profiles created automatically  
3. **Chat Messages** - All chat conversations logged
4. **Reviews** - Customer reviews (with approval workflow)

### 🟢 **OUTBOUND (CMS)** - Data Going OUT from Notion to Website
5. **Services** - Add/edit/remove services on your site
6. **Blog Articles** - Write and publish blog posts
7. **Pricing** - Update pricing dynamically
8. **Reviews (Display)** - Choose which reviews appear on site

---

## 🗄️ **Your 13 Notion Databases**

| # | Database | Purpose | Status |
|---|----------|---------|--------|
| 1 | **Bookings** | Store all booking requests | ⏳ Needs properties |
| 2 | **Customers** | Customer profiles & contact info | ⏳ Needs properties |
| 3 | **Chat** | Conversation logs | ⏳ Needs properties |
| 4 | **Services** | Service catalog (displayed on site) | ✅ Ready to use |
| 5 | **Reviews** | Testimonials (you approve → display) | ✅ Ready to use |
| 6 | **Blog** | Blog articles (write in Notion!) | ✅ Ready to use |
| 7 | **Pricing** | Dynamic pricing | ✅ Ready to use |
| 8 | **Professionals** | Your team members | ✅ Ready to use |
| 9 | **Partnerships** | Hotel/venue partnerships | ✅ Ready to use |
| 10 | **Marketing** | Marketing campaigns & analytics | ✅ Ready to use |
| 11 | **Inventory** | Product/supply inventory | ✅ Ready to use |
| 12 | **Neighborhoods** | Service areas in Lisbon | ✅ Ready to use |
| 13 | **Memberships** | Premium memberships (future) | ✅ Ready to use |

---

## 🚀 **How It Works: Two-Way Integration**

### **Website → Notion (Automatic)**
```
Customer books appointment on website
         ↓
API saves to Notion Bookings database
         ↓
You see it in Notion immediately
         ↓
You manage/confirm from Notion
```

### **Notion → Website (Dynamic)**
```
You add a new service in Notion
         ↓
Mark it "Active"
         ↓
Website pulls from Notion API
         ↓
Service appears on website automatically
```

---

## 📋 **Database Setup Priority**

### **CRITICAL (Set up first - 10 minutes)**
These 3 are needed for bookings to work:

1. ✅ **Bookings Database**
2. ✅ **Customers Database**
3. ✅ **Chat Database**

→ Follow: `NOTION_DATABASE_SETUP.md`

### **CMS DATABASES (Set up as you need them)**
These control what appears on your website:

4. **Services Database** - Control your service offerings
5. **Reviews Database** - Manage testimonials
6. **Blog Database** - Publish articles

---

## 🎨 **Services Database Setup (CMS)**

**Database ID**: `79821ef6d2904c0991c1a16c4f8e0aa4`

### Required Properties:

| Property | Type | Purpose |
|----------|------|---------|
| **Name** | Title | Service name (e.g., "Premium Hair Styling") |
| **Description** | Text | Service description |
| **Price** | Number | Price in € |
| **Duration** | Text | How long (e.g., "90 minutes") |
| **Category** | Select | Hair, Makeup, Spa, Nails, etc. |
| **Icon** | Text | Emoji icon (e.g., "💇") |
| **Features** | Text | One feature per line |
| **Status** | Select | Active / Inactive |
| **Display Order** | Number | Order on website (1, 2, 3...) |

### How to Use:
1. Add a new service in Notion
2. Fill in all fields
3. Set **Status** = "Active"
4. Set **Display Order** = 1 (to show first)
5. **Save**
6. Your website automatically shows it!

### API Endpoint:
- **GET** `/api/notion/services`
- Fetches all "Active" services sorted by Display Order
- Website can pull this data dynamically

---

## ⭐ **Reviews Database Setup (CMS + CRM)**

**Database ID**: `d2ab7e46e47740c594a5c30a86ef59ab`

### Required Properties:

| Property | Type | Purpose |
|----------|------|---------|
| **Customer Name** | Title | Reviewer name |
| **Email** | Email | Customer email |
| **Service** | Select | Which service they reviewed |
| **Rating** | Number | 1-5 stars |
| **Review** | Text | Their testimonial |
| **Status** | Select | Pending / Approved / Rejected |
| **Date** | Date | Review date |
| **Verified** | Checkbox | ✅ if verified customer |
| **Featured** | Checkbox | ✅ to feature on homepage |
| **Location** | Text | Neighborhood |
| **Booking ID** | Text | Link to original booking |

### How It Works:
1. **Customer submits review** → Saves to Notion with Status = "Pending"
2. **You review it** → Change Status to "Approved"
3. **Website pulls only "Approved" reviews** → Displays on site
4. **Mark as "Featured"** → Appears on homepage

### API Endpoints:
- **GET** `/api/notion/reviews` - Fetch approved reviews
- **POST** `/api/notion/reviews` - Submit new review

---

## 📝 **Blog Database Setup (CMS)**

**Database ID**: `e2f72ecc28874ff2bb4950cdcef19f94`

### Required Properties:

| Property | Type | Purpose |
|----------|------|---------|
| **Title** | Title | Article title |
| **Slug** | Text | URL slug (e.g., "best-hair-tips") |
| **Excerpt** | Text | Short summary |
| **Category** | Select | Beauty Tips, Guides, News, etc. |
| **Author** | Text | Author name |
| **Publish Date** | Date | When to publish |
| **Status** | Select | Draft / Published / Archived |
| **Featured** | Checkbox | ✅ to feature on blog page |
| **Cover Image** | URL | Header image URL |
| **Tags** | Multi-select | Tags for filtering |
| **Read Time** | Number | Minutes to read |

### How to Use:
1. **Write article in Notion** (use Notion's rich editor!)
2. Add **Title**, **Slug**, **Excerpt**
3. Set **Status** = "Published"
4. Set **Publish Date**
5. Website automatically pulls published articles!

### What You Can Write:
- Beauty tips & tutorials
- Service spotlights
- Neighborhood guides for Lisbon
- Client success stories
- Industry trends

### API Endpoints:
- **GET** `/api/notion/blog` - List all published articles
- **GET** `/api/notion/blog?category=Beauty+Tips` - Filter by category
- **POST** `/api/notion/blog` - Get single article by slug

---

## 💰 **Pricing Database Setup (CMS)**

**Database ID**: `da99fddfc4ad451d9af820819e4c05db`

### Suggested Properties:

| Property | Type | Purpose |
|----------|------|---------|
| **Service Name** | Title | What service |
| **Base Price** | Number | Standard price |
| **Member Price (Gold)** | Number | Gold member discount |
| **Member Price (Platinum)** | Number | Platinum discount |
| **Neighborhood Multiplier** | Number | Price adjustment by area |
| **Peak Hours Surcharge** | Number | Weekend/evening pricing |
| **Status** | Select | Active / Inactive |

### Dynamic Pricing Features:
- Change prices in Notion
- Website pulls latest prices
- Different pricing for members
- Location-based pricing
- Time-based adjustments

---

## 👥 **Team Management Databases**

### **Professionals Database**
**ID**: `d98d64b97c7e47e68ee83f7aef3bbe39`

Track your beauty professionals:
- Name, specialty, availability
- Bio, photo, ratings
- Services they provide
- Schedule/calendar

### **Partnerships Database**
**ID**: `b2fb36e5be124096898e11abd9e2a88a`

Manage hotel/venue partnerships:
- Partner name, contact
- Commission rates
- Active agreements
- Referral tracking

---

## 📍 **Neighborhoods Database**

**ID**: `56a0f9d3cda44a0fbc23e29af4adeb47`

Manage service areas:
- Neighborhood name
- Service availability
- Pricing multipliers
- Popular venues in area
- Travel time estimates

---

## 🔄 **Complete Workflow Example**

### Scenario: Customer Books Wedding Beauty Service

**1. Customer Action** (on website):
- Visits `/book`
- Fills form: "Anna Silva, Wedding Makeup, Dec 15, 2025"
- Submits

**2. Automatic Processing**:
```
✅ Booking saved to Bookings Database (Notion)
✅ Customer profile created in Customers Database
✅ Email sent (via Make.com if configured)
```

**3. You in Notion**:
- See new booking in Bookings database
- Check customer in Customers database
- Update Status: Pending → Confirmed
- Add notes: "Bring extra lashes"

**4. Customer Updates** (via chat):
- Sends message: "Can we add hair styling?"
- Message saved to Chat Database
- You see conversation history
- Respond from Notion or website

**5. After Service**:
- Send review request
- Customer submits 5-star review
- Review appears in Reviews Database (Status: Pending)
- You approve it (Status: Approved)
- Review appears on website automatically

**6. You Write Blog Post**:
- Create new page in Blog Database
- Title: "Anna's Dream Wedding Look"
- Add photos, write story
- Set Status: Published
- Appears on website `/journal` page

---

## 🎯 **API Endpoints Summary**

### Inbound (Save TO Notion):
```
POST /api/bookings          → Creates booking + customer
POST /api/chat              → Saves chat message
POST /api/notion/reviews    → Submit review
```

### Outbound (Get FROM Notion):
```
GET /api/notion/services    → Pull service catalog
GET /api/notion/reviews     → Pull approved reviews
GET /api/notion/blog        → Pull published articles
```

### Testing:
```
GET /api/test-notion        → Verify connection
```

---

## ✅ **Quick Start Checklist**

### Phase 1: Get Bookings Working (10 min)
- [ ] Set up Bookings database properties
- [ ] Set up Customers database properties
- [ ] Set up Chat database properties
- [ ] Share all 3 with your Notion integration
- [ ] Test a booking → verify it appears in Notion

### Phase 2: Content Management (Optional, 30 min)
- [ ] Set up Services database
- [ ] Add your actual services in Notion
- [ ] Update website to pull from `/api/notion/services`
- [ ] Set up Reviews database
- [ ] Set up Blog database
- [ ] Write your first blog post in Notion!

### Phase 3: Advanced Features (Future)
- [ ] Set up Pricing database for dynamic pricing
- [ ] Configure Professionals database
- [ ] Add Partnerships tracking
- [ ] Set up Marketing analytics

---

## 💡 **Pro Tips**

### Notion Views:
Create different views for different purposes:
- **Bookings**: Kanban by Status, Calendar by Date, Table view
- **Services**: Gallery view with icons, Table for editing
- **Blog**: Board by Status (Draft/Published), Calendar by Publish Date
- **Reviews**: Filter by Status (Pending Review), Sort by Rating

### Automation Ideas (Notion + Make.com):
- Auto-send confirmation email when booking Status → Confirmed
- Auto-request review 24 hours after booking
- Auto-post new services to social media
- Weekly summary email of new bookings

### Collaboration:
- Invite your team to Notion
- Set permissions (view only vs edit)
- Each team member manages their schedule
- Assign bookings to specific professionals

---

## 🆘 **Troubleshooting**

### "Services not showing from Notion"
1. Check database ID is correct in Vercel
2. Ensure services have Status = "Active"
3. Share database with your integration
4. Test: `https://good-hands-seven.vercel.app/api/notion/services`

### "Bookings not saving to Notion"
1. Database properties must match exactly (see NOTION_DATABASE_SETUP.md)
2. Verify database is shared with integration
3. Check Vercel logs for specific error

### "Reviews not appearing on site"
1. Status must be "Approved" (not Pending)
2. Database must be shared with integration
3. Website needs to call `/api/notion/reviews` API

---

## 🎊 **You're Now a Notion Power User!**

Your entire business runs from Notion:
- ✅ Bookings & customer management
- ✅ Service catalog
- ✅ Reviews & testimonials
- ✅ Blog & content
- ✅ Pricing
- ✅ Team & partnerships

**Next Steps**:
1. Set up the 3 critical databases (Bookings, Customers, Chat)
2. Test a booking
3. Then gradually add CMS features as you need them!

---

**Questions?** Check `NOTION_DATABASE_SETUP.md` for detailed property setup.

**Ready to Launch?** Once bookings are working, you're live! 🚀

