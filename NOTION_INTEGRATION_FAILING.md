# ⚠️ NOTION INTEGRATION IS FAILING

## Test Result
```json
{
  "success": true,
  "integrations": {
    "notion": false,  // ❌ FAILING
    "customer": true,
    "automation": true,
    "backup": true
  }
}
```

## Problem
The booking API works, but **Notion is rejecting the requests**.

This means either:
1. **Notion databases don't have the required properties (columns)**
2. **Notion integration doesn't have access to the databases**

---

## Required Database Properties

### 📋 BOOKINGS Database Must Have:

| Property Name | Type | Required |
|--------------|------|----------|
| **Customer Name** | Title | ✅ Yes |
| **Customer Email** | Email | ✅ Yes |
| **Service** | Select | ✅ Yes |
| **Neighborhood** | Select | ⚠️ Optional |
| **Date** | Date | ✅ Yes |
| **Time** | Text | ✅ Yes |
| **Status** | Select | ✅ Yes |
| **Message** | Text | ⚠️ Optional |
| **UTM Source** | Text | ⚠️ Optional |
| **UTM Medium** | Text | ⚠️ Optional |
| **UTM Campaign** | Text | ⚠️ Optional |
| **Created Date** | Date | ✅ Yes |

### 👤 CUSTOMERS Database Must Have:

| Property Name | Type | Required |
|--------------|------|----------|
| **Name** | Title | ✅ Yes |
| **Email** | Email | ✅ Yes |
| **Phone** | Phone | ✅ Yes |
| **Status** | Select | ✅ Yes |
| **Source** | Text | ⚠️ Optional |
| **UTM Source** | Text | ⚠️ Optional |
| **UTM Campaign** | Text | ⚠️ Optional |
| **Created Date** | Date | ✅ Yes |

---

## How to Fix

### Step 1: Check BOOKINGS Database

1. Open your Notion workspace
2. Find: **BOOKINGS — Good Hands** database
3. Click on the database to open it
4. Look at the **column headers** (properties)
5. Verify ALL required properties exist with correct types

**Missing a property?**
- Click **"+"** at the end of the columns
- Add the missing property
- Choose the correct type (Title, Email, Select, Date, Text, Phone)

### Step 2: Check CUSTOMERS Database

1. Find: **CUSTOMERS — Good Hands** database
2. Open it
3. Verify ALL required properties exist

### Step 3: Verify Integration Access

1. Click **"..."** menu in top right of each database
2. Click **"Connections"**
3. Make sure your **Good Hands integration** is listed
4. If not, click **"Add connections"** and add it

### Step 4: Test Again

Once properties are correct:
1. Go to: https://good-hands-seven.vercel.app/book
2. Submit a test booking
3. Check your Notion BOOKINGS database
4. You should see a new entry!

---

## Quick Check Commands

### Test if Notion API is accessible:
```bash
curl https://good-hands-seven.vercel.app/api/test-notion
```

Should show:
```json
{
  "success": true,
  "status": {
    "apiKey": "✅ Connected",
    "bookingDatabase": "✅ Configured",
    "chatDatabase": "✅ Configured"
  }
}
```

### Test booking submission:
```bash
curl -X POST https://good-hands-seven.vercel.app/api/bookings \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "email": "test@test.com",
    "phone": "+351912345678",
    "service": "Hair Styling",
    "date": "2025-10-30",
    "time": "14:00"
  }'
```

Should show:
```json
{
  "success": true,
  "integrations": {
    "notion": true  // ✅ Should be true!
  }
}
```

---

## Common Issues

### Issue 1: Property Type Mismatch
**Error:** "Property type does not match"
**Fix:** Make sure property types match exactly:
- Customer Name = **Title** (not Text)
- Customer Email = **Email** (not Text)
- Phone = **Phone** (not Text)
- Date = **Date** (not Text)
- Status = **Select** (not Text)

### Issue 2: Missing Required Property
**Error:** "Property not found"
**Fix:** Add the missing property to your database

### Issue 3: Integration Not Connected
**Error:** "Unauthorized" or "Access denied"
**Fix:** Share the database with your integration

---

## Status

- ✅ Vercel deployment: **Working**
- ✅ Notion API key: **Connected**
- ✅ Database IDs: **Configured**
- ❌ Notion integration: **FAILING** (properties issue)

**Once you fix the database properties, everything will work!**

---

*Last Updated: October 26, 2025*
*Test Booking ID: mock-1761509588950*

