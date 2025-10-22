# 🔧 Notion Integration Checklist

**Status**: ⚠️ Partially Complete  
**Last Updated**: October 22, 2025

---

## 📊 Current Status

Based on API testing:

✅ **API Endpoints**: Working  
✅ **Booking API**: Responding  
✅ **Chat API**: Responding  
⚠️ **Notion Connection**: Not Active (`"notion": false`)

---

## ✅ What You've Done

1. ✅ Added `NOTION_API_KEY` to Vercel

---

## 🔴 What Still Needs to Be Done

### 1. Add Database IDs (REQUIRED)

You need **two** Notion database IDs:

**In Vercel Environment Variables**, add:

```
NOTION_BOOKING_DATABASE_ID=xxxxx
NOTION_CHAT_DATABASE_ID=xxxxx
```

### How to Get Database IDs:

1. **Go to Notion**
2. **Open your Bookings database** (the page where you want bookings)
3. **Copy the URL**, it looks like:
   ```
   https://www.notion.so/[WORKSPACE]/[DATABASE_ID]?v=...
   ```
4. **Extract the DATABASE_ID** (the long string between workspace name and `?v=`)

**Repeat for Chat database**

---

### 2. Verify API Key Permissions

Make sure your Notion integration has access to both databases:

1. **Go to Notion**
2. **Open each database**
3. **Click ⋯ (top right)**
4. **Click "Add connections"**
5. **Select your integration** (the one with the API key)

---

### 3. Redeploy in Vercel

After adding the database IDs:

1. Go to **Vercel Dashboard**
2. Go to **Deployments** tab
3. Click **⋯** on latest deployment
4. Click **"Redeploy"**

This ensures the new environment variables are loaded.

---

## 🧪 How to Test

### Test 1: Check Environment Variables

Run this in Vercel's deployment logs or add this to a test page:

```javascript
console.log('Notion Config:', {
  hasApiKey: !!process.env.NOTION_API_KEY,
  hasBookingDb: !!process.env.NOTION_BOOKING_DATABASE_ID,
  hasChatDb: !!process.env.NOTION_CHAT_DATABASE_ID,
})
```

Expected output:
```javascript
{
  hasApiKey: true,
  hasBookingDb: true,
  hasChatDb: true
}
```

### Test 2: Test Booking Submission

1. Go to https://good-hands-seven.vercel.app/book
2. Fill out the form
3. Submit
4. Check your Notion Bookings database
5. Should see new entry appear!

### Test 3: Test Chat Widget

1. Go to homepage
2. Scroll down 50%
3. Chat widget should appear
4. Send a message
5. Check your Notion Chat database
6. Should see the message!

---

## 🎯 Quick Setup Guide

### Step-by-Step:

1. **Create Two Databases in Notion**:

   **Database 1: Bookings**
   - Name: "Good Hands Bookings"
   - Properties:
     - Name (Title)
     - Email (Email)
     - Phone (Phone)
     - Service (Select)
     - Date (Date)
     - Time (Text)
     - Neighborhood (Select)
     - Message (Text)
     - Status (Select: New, Confirmed, Completed)
     - Created (Created time)

   **Database 2: Chat Messages**
   - Name: "Good Hands Chat"
   - Properties:
     - Message (Title)
     - User ID (Text)
     - Timestamp (Created time)
     - Page (Text)
     - Replied (Checkbox)

2. **Create Notion Integration**:
   - Go to https://www.notion.so/my-integrations
   - Click "New integration"
   - Name it "Good Hands Website"
   - Copy the "Internal Integration Token" (starts with `secret_`)

3. **Connect Integration to Databases**:
   - Open each database
   - Click ⋯ → "Add connections"
   - Select "Good Hands Website"

4. **Get Database IDs**:
   - Open each database in Notion
   - Copy URL and extract the ID

5. **Add to Vercel**:
   ```
   NOTION_API_KEY=secret_xxxxx (already done ✅)
   NOTION_BOOKING_DATABASE_ID=xxxxx (ADD THIS)
   NOTION_CHAT_DATABASE_ID=xxxxx (ADD THIS)
   ```

6. **Redeploy**

---

## 🐛 Troubleshooting

### "notion": false in API response

**Cause**: Missing database IDs or not redeployed  
**Fix**: Add database IDs and redeploy

### "Unauthorized" error

**Cause**: Integration not connected to databases  
**Fix**: In Notion, add connection to both databases

### Messages not appearing in Notion

**Cause**: Wrong database ID or permissions  
**Fix**: 
1. Verify database ID is correct
2. Check integration has access
3. Try creating a test entry manually in Notion

### API Key not working

**Cause**: Expired or wrong key  
**Fix**: Generate new integration token in Notion

---

## ✅ Success Indicators

When everything is working, you'll see:

1. **API Response**:
   ```json
   {
     "success": true,
     "integrations": {
       "notion": true,  // ← Should be true
       "customer": true,
       "automation": true
     }
   }
   ```

2. **In Notion**:
   - New entries appear in Bookings database
   - New messages appear in Chat database

3. **In Vercel Logs**:
   - No Notion errors
   - Successful API calls logged

---

## 📞 Current Integration Status

Run this test to check current status:

```bash
curl https://good-hands-seven.vercel.app/api/bookings \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "service": "hair",
    "date": "2025-11-01",
    "time": "10:00",
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+351123456789"
  }'
```

Look for `"notion": true` in the response.

---

## 🎯 Next Steps for You

1. ✅ ~~Add `NOTION_API_KEY`~~ (DONE)
2. ⚠️ **Create two databases in Notion**
3. ⚠️ **Connect your integration to both databases**
4. ⚠️ **Get database IDs from URLs**
5. ⚠️ **Add database IDs to Vercel**
6. ⚠️ **Redeploy**
7. ⚠️ **Test booking submission**
8. ⚠️ **Test chat message**

---

## 📚 Resources

- **Notion API Docs**: https://developers.notion.com/
- **Vercel Env Vars**: https://vercel.com/docs/concepts/projects/environment-variables
- **Your Notion Integrations**: https://www.notion.so/my-integrations

---

**Once complete, the site will automatically save all bookings and chat messages to your Notion workspace!** 🎉

