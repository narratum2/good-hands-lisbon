# ✅ NOTION SETUP - FINAL ACTION PLAN

## 🎯 CURRENT STATUS

### ✅ What's Already Done (In Code):
- Notion client library installed
- API routes configured (`/api/bookings`, `/api/notion/create-booking`)
- Booking form ready to send data
- Error handling in place
- All code deployed and working

### ⏳ What You Need to Do (10 minutes):

---

## 📋 STEP-BY-STEP CHECKLIST

### STEP 1: Add Notion Secret to Vercel (2 minutes)

1. Go to: https://vercel.com/dashboard
2. Select project: **_good-hands**
3. Click: **Settings** → **Environment Variables**
4. Click: **Add New Variable**
5. Enter:
   - Name: `NOTION_API_KEY`
   - Value: **[I provided this separately - starts with ntn_]**
   - Environments: Check ✅ Production ✅ Preview ✅ Development
6. Click **Save**

---

### STEP 2: Create Notion Databases (5 minutes)

#### Option A: Use Notion AI (Recommended)

Go to your Notion workspace and ask Notion AI:

```
Create 3 databases for my beauty booking service "Good Hands":

DATABASE 1: Bookings
Properties: Name (title), Email (email), Phone (phone), Service (select: Hair/Nails/Skincare/Makeup/Wellness/Wedding), Booking Date (date), Time (select), Neighborhood (select: Chiado/Príncipe Real/Baixa/Alfama/Belém/Cascais/Sintra/Avenida), Status (select: New/Confirmed/Completed/Cancelled), Booking Reference (text), Notes (text), Created At (created time), Source (select)

DATABASE 2: Customers  
Properties: Name (title), Email (email), Phone (phone), First Booking (date), Total Bookings (number), Status (select: New/Active/VIP)

DATABASE 3: Professionals
Properties: Name (title), Specialty (multi-select: Hair/Nails/Skincare/Makeup/Wellness), Neighborhoods (multi-select), Rating (number), Status (select: Active/Inactive), Contact (email)

After creating, give me the 3 database IDs (from their URLs).
```

#### Option B: Manual Creation

1. Create new database page
2. Name it "Good Hands - Bookings"
3. Add the properties listed above
4. Repeat for Customers and Professionals databases

---

### STEP 3: Connect Databases to Integration (2 minutes)

For EACH database:
1. Open the database as a full page
2. Click **...** menu (top right)
3. Click **Connections**
4. Find **Good Hands** integration
5. Click **Confirm**

---

### STEP 4: Get Database IDs (1 minute)

For each database:
1. Open as full page
2. Copy the URL
3. Database ID is the part after last `/` and before `?`

Example:
```
URL: https://notion.so/abc123def456?v=...
Database ID: abc123def456
```

---

### STEP 5: Add Database IDs to Vercel (2 minutes)

Back in Vercel → Environment Variables, add:

```
NOTION_CUSTOMERS_DB_ID = [your customers database ID]
NOTION_BOOKINGS_DB_ID = [your bookings database ID]  
NOTION_PROFESSIONALS_DB_ID = [your professionals database ID]
```

All environments checked (Production, Preview, Development)

---

### STEP 6: Redeploy (2 minutes)

1. Vercel → **Deployments** tab
2. Latest deployment → **...** → **Redeploy**
3. Check **Use existing build cache**
4. Wait 2 minutes for deployment

---

## ✅ TEST IT WORKS

1. Go to: https://good-hands-seven.vercel.app/book
2. Fill out a test booking with YOUR details
3. Submit the form
4. Check your Notion **Bookings** database
5. You should see a new entry!

If it doesn't work:
- Check Vercel → Deployments → Function Logs for errors
- Verify all 4 environment variables are set
- Verify databases are connected to integration

---

## 📊 CURRENT NOTION STATUS

### ✅ Code Ready:
- `lib/notion.ts` - Client configured
- `app/api/bookings/route.ts` - Calls Notion functions
- Error handling in place
- All deployed to production

### ⏳ Needs Configuration:
1. **NOTION_API_KEY** - Add in Vercel (I gave you this)
2. **Database IDs** - Create databases, then add IDs to Vercel

### ⚠️ What's Missing:
- Notion secret NOT in Vercel yet (you need to add it)
- Databases not created yet (you need to create them)
- Database IDs not in Vercel yet (add after creating)

---

## 🎯 BOTTOM LINE

**Notion is NOT working yet because:**
1. You haven't added the secret to Vercel
2. You haven't created the databases
3. You haven't added the database IDs

**Estimated time to complete:** 10-15 minutes

**Once done:** Bookings from your website will automatically appear in Notion! ✨

---

**Next step:** Add the Notion secret I gave you to Vercel dashboard, then create the databases.

