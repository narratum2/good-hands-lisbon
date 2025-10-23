# 🔄 UPDATED Vercel Environment Variables

**Go to**: https://vercel.com/narratums-projects/good-hands-lisbon/settings/environment-variables

**Action**: UPDATE these variables with the NEW database IDs from Notion AI

---

## 📝 How to Update in Vercel:

1. Go to Environment Variables page
2. Find each variable by name
3. Click the **"..."** menu → **"Edit"**
4. Replace the **Value** with the new ID below
5. Save
6. After updating all 12, **redeploy** the site

---

## ✅ **ALL 13 VARIABLES** (Copy-Paste Format)

### Variable 1: API Key
```
Key:   NOTION_API_KEY
Value: [YOUR NOTION SECRET KEY - keep the same one you already have]
```
**Action**: ✅ Keep as-is (don't change)

---

### Variable 2: Bookings Database ✅ SAME
```
Key:   NOTION_BOOKING_DATABASE_ID
Value: e50edfbee2e34df8b4566edc8bdc1189
```
**Action**: ✅ Keep as-is (already correct)

---

### Variable 3: Customers Database ✅ SAME
```
Key:   NOTION_CUSTOMERS_DATABASE_ID
Value: e06a065f262147738e47005090b94e02
```
**Action**: ✅ Keep as-is (already correct)

---

### Variable 4: Professionals Database ⚠️ UPDATE
```
Key:   NOTION_PROFESSIONALS_DATABASE_ID
Value: 1e821e5f30dc47f091861c605a3f7162
```
**Action**: 🔄 UPDATE to new ID

**Old**: `d98d64b97c7e47e68ee83f7aef3bbe39`  
**New**: `1e821e5f30dc47f091861c605a3f7162`

---

### Variable 5: Services Database ⚠️ UPDATE
```
Key:   NOTION_SERVICES_DATABASE_ID
Value: 69b69d3bf8714441b542c932b4f73cb6
```
**Action**: 🔄 UPDATE to new ID

**Old**: `79821ef6d2904c0991c1a16c4f8e0aa4`  
**New**: `69b69d3bf8714441b542c932b4f73cb6`

---

### Variable 6: Reviews Database ⚠️ UPDATE
```
Key:   NOTION_REVIEWS_DATABASE_ID
Value: f818a3e170704d64bb97b541ce417d62
```
**Action**: 🔄 UPDATE to new ID

**Old**: `d2ab7e46e47740c594a5c30a86ef59ab`  
**New**: `f818a3e170704d64bb97b541ce417d62`

---

### Variable 7: Blog Database ⚠️ UPDATE
```
Key:   NOTION_BLOG_DATABASE_ID
Value: 29a996adcc574aebb6176465b1a33119
```
**Action**: 🔄 UPDATE to new ID

**Old**: `e2f72ecc28874ff2bb4950cdcef19f94`  
**New**: `29a996adcc574aebb6176465b1a33119`

---

### Variable 8: Pricing Database ⚠️ UPDATE
```
Key:   NOTION_PRICING_DATABASE_ID
Value: 3a7a28d096ef4a6498e0616dd46d26e6
```
**Action**: 🔄 UPDATE to new ID

**Old**: `da99fddfc4ad451d9af820819e4c05db`  
**New**: `3a7a28d096ef4a6498e0616dd46d26e6`

---

### Variable 9: Partnerships Database ⚠️ UPDATE
```
Key:   NOTION_PARTNERSHIPS_DATABASE_ID
Value: 0afa693ddf0d498b944628ee94ad6b0e
```
**Action**: 🔄 UPDATE to new ID

**Old**: `b2fb36e5be124096898e11abd9e2a88a`  
**New**: `0afa693ddf0d498b944628ee94ad6b0e`

---

### Variable 10: Marketing Database ⚠️ UPDATE
```
Key:   NOTION_MARKETING_DATABASE_ID
Value: 8888a3e241be40a497fb5befcb4d0fef
```
**Action**: 🔄 UPDATE to new ID

**Old**: `e0ab09c6c74f490ab6c3fe67aa7c9fb6`  
**New**: `8888a3e241be40a497fb5befcb4d0fef`

---

### Variable 11: Chat Database ⚠️ UPDATE
```
Key:   NOTION_CHAT_DATABASE_ID
Value: af60a30428e94f1cbad10f5b53076c1c
```
**Action**: 🔄 UPDATE to new ID

**Old**: `51c3d3aae9fc4d01bc85c3f90d99c0a8`  
**New**: `af60a30428e94f1cbad10f5b53076c1c`

---

### Variable 12: Inventory Database ⚠️ UPDATE
```
Key:   NOTION_INVENTORY_DATABASE_ID
Value: 7bd845c57d3f4ad7a5b4b6892cb2ac02
```
**Action**: 🔄 UPDATE to new ID

**Old**: `6aede30c5dfd4da59f5c94a8fa12090e`  
**New**: `7bd845c57d3f4ad7a5b4b6892cb2ac02`

---

### Variable 13: Neighborhoods Database ⚠️ UPDATE
```
Key:   NOTION_NEIGHBORHOODS_DATABASE_ID
Value: 0a41ef0a62a44da39c17e44d0b3ede3d
```
**Action**: 🔄 UPDATE to new ID

**Old**: `56a0f9d3cda44a0fbc23e29af4adeb47`  
**New**: `0a41ef0a62a44da39c17e44d0b3ede3d`

---

## 📊 **Summary**

| Status | Count | Action |
|--------|-------|--------|
| ✅ Keep same | 3 | API Key, Bookings, Customers |
| 🔄 Update | 10 | All others |

---

## 🚀 **Step-by-Step in Vercel**

### For Each Variable That Needs Updating:

1. **Find the variable** (e.g., `NOTION_SERVICES_DATABASE_ID`)
2. Click **"..."** menu on the right
3. Click **"Edit"**
4. **Replace the Value** with the new ID
5. Keep **Production, Preview, Development** checked
6. Click **"Save"**
7. Move to next variable

---

## ⚡ **Quick Copy-Paste Values** (for easy updating)

```
NOTION_PROFESSIONALS_DATABASE_ID = 1e821e5f30dc47f091861c605a3f7162
NOTION_SERVICES_DATABASE_ID = 69b69d3bf8714441b542c932b4f73cb6
NOTION_REVIEWS_DATABASE_ID = f818a3e170704d64bb97b541ce417d62
NOTION_BLOG_DATABASE_ID = 29a996adcc574aebb6176465b1a33119
NOTION_PRICING_DATABASE_ID = 3a7a28d096ef4a6498e0616dd46d26e6
NOTION_PARTNERSHIPS_DATABASE_ID = 0afa693ddf0d498b944628ee94ad6b0e
NOTION_MARKETING_DATABASE_ID = 8888a3e241be40a497fb5befcb4d0fef
NOTION_CHAT_DATABASE_ID = af60a30428e94f1cbad10f5b53076c1c
NOTION_INVENTORY_DATABASE_ID = 7bd845c57d3f4ad7a5b4b6892cb2ac02
NOTION_NEIGHBORHOODS_DATABASE_ID = 0a41ef0a62a44da39c17e44d0b3ede3d
```

---

## ✅ **After Updating All Variables**

### Trigger Redeploy:

**Option 1**: In Vercel Dashboard
- Go to Deployments tab
- Click "..." on latest deployment
- Click "Redeploy"

**Option 2**: I can push a commit to trigger auto-deploy

---

## 🧪 **After Redeploy, Test:**

```bash
# Test Notion connection
curl https://good-hands-seven.vercel.app/api/test-notion

# Should show all databases ✅ Configured
```

Then test a booking at:
https://good-hands-seven.vercel.app/book

Check it appears in your Notion Bookings database! 🎉

---

## ⏱️ **Time Required**

- Update 10 variables in Vercel: **5-7 minutes**
- Redeploy: **~90 seconds**
- Test: **2 minutes**

**Total**: ~10 minutes → Full integration working! 🚀

---

**Ready?** Go update in Vercel, then tell me when done and I'll trigger a redeploy and test everything! ✅


