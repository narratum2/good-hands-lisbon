# 📊 COMPLETE NOTION CRM/CMS - ALL DATABASE PROPERTIES

## Overview
Your Good Hands site uses Notion as a complete CRM and CMS system. Here are **ALL** the database properties needed for every function to work.

---

## 🎯 CRM DATABASES (Customer Management)

### 1. 📋 BOOKINGS Database
**Database ID:** `e50edfbee2e34df8b4566edc8bdc1189`

| Property Name | Type | Required | Notes |
|--------------|------|----------|-------|
| **Customer Name** | Title | ✅ Yes | Primary field |
| **Customer Email** | Email | ✅ Yes | Must be Email type |
| **Service** | Select | ✅ Yes | Options: Hair Styling, Nails, Spa, Makeup, etc. |
| **Neighborhood** | Select | ⚠️ Optional | Options: Chiado, Príncipe Real, Baixa, etc. |
| **Date** | Date | ✅ Yes | Booking date |
| **Time** | Text | ✅ Yes | Booking time |
| **Status** | Select | ✅ Yes | Options: New, Confirmed, Completed, Cancelled |
| **Message** | Text | ⚠️ Optional | Customer message |
| **UTM Source** | Text | ⚠️ Optional | Marketing tracking |
| **UTM Medium** | Text | ⚠️ Optional | Marketing tracking |
| **UTM Campaign** | Text | ⚠️ Optional | Marketing tracking |
| **Created Date** | Date | ✅ Yes | Auto-filled |

**Used by:** `/api/bookings`, Booking form

---

### 2. 👤 CUSTOMERS Database
**Database ID:** `e06a065f262147738e47005090b94e02`

| Property Name | Type | Required | Notes |
|--------------|------|----------|-------|
| **Name** | Title | ✅ Yes | Primary field |
| **Email** | Email | ✅ Yes | Must be Email type |
| **Phone** | Phone | ✅ Yes | Must be Phone type |
| **Status** | Select | ✅ Yes | Options: New, Active, VIP, Inactive |
| **Source** | Text | ⚠️ Optional | How they found you |
| **UTM Source** | Text | ⚠️ Optional | Marketing tracking |
| **UTM Campaign** | Text | ⚠️ Optional | Marketing tracking |
| **Created Date** | Date | ✅ Yes | Auto-filled |
| **Total Bookings** | Number | ⚠️ Optional | Count of bookings |
| **Lifetime Value** | Number | ⚠️ Optional | Total spent |

**Used by:** `/api/bookings`, Customer tracking

---

### 3. 💬 CHAT Database
**Database ID:** `af60a30428e94f1cbad10f5b53076c1c`

| Property Name | Type | Required | Notes |
|--------------|------|----------|-------|
| **User Name** | Title | ✅ Yes | Primary field |
| **Email** | Email | ⚠️ Optional | Can be empty for anonymous |
| **Message** | Text | ✅ Yes | Chat message content |
| **User ID** | Text | ⚠️ Optional | Session ID |
| **Status** | Select | ✅ Yes | Options: New, In Progress, Resolved |
| **Sender** | Select | ✅ Yes | Options: User, Agent, System |
| **Timestamp** | Date | ✅ Yes | Auto-filled |
| **Channel** | Select | ⚠️ Optional | Options: Website, Email, Phone |

**Used by:** `/api/chat`, Chat widget

---

## 🎨 CMS DATABASES (Content Management)

### 4. 🛍️ SERVICES Database
**Database ID:** `69b69d3bf8714441b542c932b4f73cb6`

| Property Name | Type | Required | Notes |
|--------------|------|----------|-------|
| **Name** | Title | ✅ Yes | Service name |
| **Description** | Text | ✅ Yes | Service description |
| **Price** | Number | ✅ Yes | Starting price in EUR |
| **Duration** | Text | ✅ Yes | e.g., "90 minutes" |
| **Category** | Select | ✅ Yes | Options: Hair, Nails, Spa, Makeup, Wellness |
| **Icon** | Text | ⚠️ Optional | Emoji icon |
| **Features** | Text | ⚠️ Optional | Bullet points (line-separated) |
| **Status** | Select | ✅ Yes | Options: Active, Inactive, Coming Soon |
| **Display Order** | Number | ⚠️ Optional | Sort order (1, 2, 3...) |

**Used by:** `/api/notion/services`, Services pages

---

### 5. ⭐ REVIEWS Database
**Database ID:** `f818a3e170704d64bb97b541ce417d62`

| Property Name | Type | Required | Notes |
|--------------|------|----------|-------|
| **Customer Name** | Title | ✅ Yes | Primary field |
| **Email** | Email | ⚠️ Optional | For verification |
| **Service** | Select | ✅ Yes | Service reviewed |
| **Rating** | Number | ✅ Yes | 1-5 stars |
| **Review** | Text | ✅ Yes | Review text |
| **Status** | Select | ✅ Yes | Options: Pending, Approved, Rejected |
| **Date** | Date | ✅ Yes | Review date |
| **Verified** | Checkbox | ✅ Yes | Is verified customer? |
| **Featured** | Checkbox | ⚠️ Optional | Show on homepage? |
| **Location** | Text | ⚠️ Optional | Neighborhood |
| **Booking ID** | Text | ⚠️ Optional | Link to booking |

**Used by:** `/api/notion/reviews`, Testimonials section

---

### 6. 📝 BLOG Database
**Database ID:** `29a996adcc574aebb6176465b1a33119`

| Property Name | Type | Required | Notes |
|--------------|------|----------|-------|
| **Title** | Title | ✅ Yes | Article title |
| **Slug** | Text | ✅ Yes | URL slug (e.g., "summer-beauty-guide") |
| **Excerpt** | Text | ✅ Yes | Short description |
| **Category** | Select | ✅ Yes | Options: Beauty, Wellness, Guides, Tips |
| **Author** | Text | ✅ Yes | Author name |
| **Publish Date** | Date | ✅ Yes | Publication date |
| **Status** | Select | ✅ Yes | Options: Draft, Published, Archived |
| **Featured** | Checkbox | ⚠️ Optional | Show on homepage? |
| **Cover Image** | URL | ⚠️ Optional | Header image URL |
| **Tags** | Multi-select | ⚠️ Optional | Article tags |
| **Read Time** | Number | ⚠️ Optional | Minutes to read |
| **SEO Title** | Text | ⚠️ Optional | SEO optimization |
| **SEO Description** | Text | ⚠️ Optional | Meta description |

**Used by:** `/api/notion/blog`, Blog/Journal pages

---

## 📊 OPTIONAL DATABASES (Future Features)

### 7. 💰 PRICING Database
**Database ID:** `3a7a28d096ef4a6498e0616dd46d26e6`

For managing pricing packages and special offers.

### 8. 🏨 PARTNERSHIPS Database
**Database ID:** `0afa693ddf0d498b944628ee94ad6b0e`

For hotel partnerships and B2B relationships.

### 9. 📢 MARKETING Database
**Database ID:** `8888a3e241be40a497fb5befcb4d0fef`

For tracking marketing campaigns.

### 10. 📦 INVENTORY Database
**Database ID:** `7bd845c57d3f4ad7a5b4b6892cb2ac02`

For product/resource management.

### 11. 🗺️ NEIGHBORHOODS Database
**Database ID:** `0a41ef0a62a44da39c17e44d0b3ede3d`

For neighborhood guides and information.

### 12. 👥 PROFESSIONALS Database
**Database ID:** `1e821e5f30dc47f091861c605a3f7162`

For managing beauty professionals.

---

## ✅ PRIORITY FIX ORDER

### **CRITICAL (Fix First):**
1. ✅ **BOOKINGS** - Bookings won't save without this
2. ✅ **CUSTOMERS** - Customer tracking won't work
3. ✅ **CHAT** - Chat widget won't save messages

### **HIGH (Fix Soon):**
4. ✅ **SERVICES** - Services page will show static data
5. ✅ **REVIEWS** - Can't collect/display reviews

### **MEDIUM (Fix Later):**
6. ⚠️ **BLOG** - Blog will show static content

### **LOW (Optional):**
7-12. ⚠️ Other databases - For future features

---

## 🔧 HOW TO ADD PROPERTIES

### In Each Notion Database:

1. **Open the database** in Notion
2. **Click "+" at the end of the column headers**
3. **Choose the property type:**
   - Title (for main field)
   - Email (for email addresses)
   - Phone (for phone numbers)
   - Select (for dropdown options)
   - Multi-select (for tags)
   - Date (for dates)
   - Number (for prices, ratings)
   - Text (for descriptions, notes)
   - Checkbox (for yes/no)
   - URL (for links)

4. **Name it exactly** as shown in the tables above
5. **For Select properties**, add the options listed

---

## 🧪 TESTING

### Test Each Integration:

```bash
# 1. Test Bookings
curl -X POST https://good-hands-seven.vercel.app/api/bookings \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","phone":"+351912345678","service":"Hair Styling","date":"2025-10-30","time":"14:00"}'

# Should return: "notion": true

# 2. Test Chat
curl -X POST https://good-hands-seven.vercel.app/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Hello","userName":"Test User","userEmail":"test@test.com"}'

# Should return: "success": true

# 3. Test Services
curl https://good-hands-seven.vercel.app/api/notion/services

# Should return: "source": "notion"

# 4. Test Reviews
curl https://good-hands-seven.vercel.app/api/notion/reviews

# Should return: "source": "notion"

# 5. Test Blog
curl https://good-hands-seven.vercel.app/api/notion/blog

# Should return: "source": "notion"
```

---

## 📝 SUMMARY

**Total Databases:** 13
**Critical for Launch:** 3 (Bookings, Customers, Chat)
**Important for CMS:** 3 (Services, Reviews, Blog)
**Optional:** 7 (for future features)

**Once you add the properties to the critical databases, your site will be fully functional!**

---

*Last Updated: October 26, 2025*
*All property names are case-sensitive and must match exactly*

