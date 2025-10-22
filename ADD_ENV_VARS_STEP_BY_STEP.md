# 🔧 How to Add Environment Variables to Vercel - Step by Step

**Time**: 5 minutes  
**What you need**: The 12 database IDs below

---

## 📋 STEP-BY-STEP INSTRUCTIONS

### **Step 1: Open Vercel Settings**

1. Go to: https://vercel.com/narratums-projects/good-hands-lisbon
2. Click **"Settings"** tab at the top
3. Click **"Environment Variables"** in the left sidebar

---

### **Step 2: Add Each Variable**

For **EACH** of the 12 variables below, do this:

1. Click the **"Add New"** button (top right)
2. In the **"Key"** field, paste the variable name (e.g., `NOTION_BOOKING_DATABASE_ID`)
3. In the **"Value"** field, paste the ID (e.g., `e50edfbee2e34df8b4566edc8bdc1189`)
4. Under **"Environments"**, check ALL THREE boxes:
   - ✅ Production
   - ✅ Preview
   - ✅ Development
5. Click **"Save"**
6. Repeat for the next variable

---

## 📝 THE 12 VARIABLES TO ADD

### Variable 1:
```
Key:   NOTION_BOOKING_DATABASE_ID
Value: e50edfbee2e34df8b4566edc8bdc1189
```

### Variable 2:
```
Key:   NOTION_CUSTOMERS_DATABASE_ID
Value: e06a065f262147738e47005090b94e02
```

### Variable 3:
```
Key:   NOTION_PROFESSIONALS_DATABASE_ID
Value: d98d64b97c7e47e68ee83f7aef3bbe39
```

### Variable 4:
```
Key:   NOTION_SERVICES_DATABASE_ID
Value: 79821ef6d2904c0991c1a16c4f8e0aa4
```

### Variable 5:
```
Key:   NOTION_REVIEWS_DATABASE_ID
Value: d2ab7e46e47740c594a5c30a86ef59ab
```

### Variable 6:
```
Key:   NOTION_BLOG_DATABASE_ID
Value: e2f72ecc28874ff2bb4950cdcef19f94
```

### Variable 7:
```
Key:   NOTION_PRICING_DATABASE_ID
Value: da99fddfc4ad451d9af820819e4c05db
```

### Variable 8:
```
Key:   NOTION_PARTNERSHIPS_DATABASE_ID
Value: b2fb36e5be124096898e11abd9e2a88a
```

### Variable 9:
```
Key:   NOTION_MARKETING_DATABASE_ID
Value: e0ab09c6c74f490ab6c3fe67aa7c9fb6
```

### Variable 10:
```
Key:   NOTION_CHAT_DATABASE_ID
Value: 51c3d3aae9fc4d01bc85c3f90d99c0a8
```

### Variable 11:
```
Key:   NOTION_INVENTORY_DATABASE_ID
Value: 6aede30c5dfd4da59f5c94a8fa12090e
```

### Variable 12:
```
Key:   NOTION_NEIGHBORHOODS_DATABASE_ID
Value: 56a0f9d3cda44a0fbc23e29af4adeb47
```

---

## ✅ QUICK CHECKLIST

After adding all 12:

- [ ] Total of 13 variables (1 API key + 12 database IDs)
- [ ] All have Production, Preview, Development checked
- [ ] All are saved

---

## 🚀 STEP 3: REDEPLOY

After adding all variables:

1. Click **"Deployments"** tab at the top
2. Find the latest deployment (should say "Ready" or "Building")
3. Click the **⋯** (three dots) on the right
4. Click **"Redeploy"**
5. Wait 2 minutes for rebuild

---

## ✅ STEP 4: TEST

After redeploy finishes:

1. Visit: https://good-hands-seven.vercel.app/api/test-notion
2. You should see: ✅ for all databases
3. Go to: https://good-hands-seven.vercel.app/book
4. Submit a test booking
5. Check your Notion Bookings database
6. **Booking appears = SUCCESS!** 🎉

---

## 🎯 VISUAL GUIDE

### What the "Add New" form looks like:

```
┌─────────────────────────────────────────┐
│  Add Environment Variable               │
├─────────────────────────────────────────┤
│                                         │
│  Key (required)                         │
│  ┌───────────────────────────────────┐ │
│  │ NOTION_BOOKING_DATABASE_ID        │ │
│  └───────────────────────────────────┘ │
│                                         │
│  Value (required)                       │
│  ┌───────────────────────────────────┐ │
│  │ e50edfbee2e34df8b4566edc8bdc1189  │ │
│  └───────────────────────────────────┘ │
│                                         │
│  Environments:                          │
│  ☑ Production                           │
│  ☑ Preview                              │
│  ☑ Development                          │
│                                         │
│  [ Cancel ]  [ Save ]                   │
└─────────────────────────────────────────┘
```

---

## 💡 TIPS

**Copy-Paste Method (Fastest)**:
1. Open this file side-by-side with Vercel
2. Copy the Key from here
3. Paste in Vercel
4. Copy the Value from here
5. Paste in Vercel
6. Check all 3 boxes
7. Click Save
8. Repeat

**Time per variable**: ~25 seconds  
**Total time**: ~5 minutes for all 12

---

## 🆘 TROUBLESHOOTING

**Can't find Environment Variables?**
- Make sure you're in the right project
- URL should be: `/good-hands-lisbon/settings/environment-variables`

**Variable already exists?**
- Click the pencil icon to edit it
- Or delete and re-add

**Changes not taking effect?**
- Must redeploy after adding variables
- Go to Deployments → Click ⋯ → Redeploy

---

## ✅ YOU'RE DONE WHEN...

You see 13 environment variables in Vercel:
1. `NOTION_API_KEY` (already added ✅)
2. `NOTION_BOOKING_DATABASE_ID`
3. `NOTION_CUSTOMERS_DATABASE_ID`
4. `NOTION_PROFESSIONALS_DATABASE_ID`
5. `NOTION_SERVICES_DATABASE_ID`
6. `NOTION_REVIEWS_DATABASE_ID`
7. `NOTION_BLOG_DATABASE_ID`
8. `NOTION_PRICING_DATABASE_ID`
9. `NOTION_PARTNERSHIPS_DATABASE_ID`
10. `NOTION_MARKETING_DATABASE_ID`
11. `NOTION_CHAT_DATABASE_ID`
12. `NOTION_INVENTORY_DATABASE_ID`
13. `NOTION_NEIGHBORHOODS_DATABASE_ID`

Then: **Redeploy** → **Test** → **LIVE!** 🎉

---

**Need help?** Let me know which step you're stuck on!

