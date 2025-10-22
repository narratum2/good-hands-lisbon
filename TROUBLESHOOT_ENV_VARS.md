# 🔧 Troubleshooting: Environment Variables Not Working

**Issue**: Environment variables still showing as missing after adding them.

---

## ✅ QUICK CHECKLIST

Go back to Vercel and verify:

### 1. Check Each Variable Exists
Go to: https://vercel.com/narratums-projects/good-hands-lisbon/settings/environment-variables

**You should see 13 variables total:**
- [ ] `NOTION_API_KEY` 
- [ ] `NOTION_BOOKING_DATABASE_ID`
- [ ] `NOTION_CUSTOMERS_DATABASE_ID`
- [ ] `NOTION_PROFESSIONALS_DATABASE_ID`
- [ ] `NOTION_SERVICES_DATABASE_ID`
- [ ] `NOTION_REVIEWS_DATABASE_ID`
- [ ] `NOTION_BLOG_DATABASE_ID`
- [ ] `NOTION_PRICING_DATABASE_ID`
- [ ] `NOTION_PARTNERSHIPS_DATABASE_ID`
- [ ] `NOTION_MARKETING_DATABASE_ID`
- [ ] `NOTION_CHAT_DATABASE_ID`
- [ ] `NOTION_INVENTORY_DATABASE_ID`
- [ ] `NOTION_NEIGHBORHOODS_DATABASE_ID`

### 2. Check "Production" is Selected
For EACH variable, click on it and verify:
- [ ] ✅ **Production** checkbox is checked
- [ ] ✅ **Preview** checkbox is checked (optional but recommended)
- [ ] ✅ **Development** checkbox is checked (optional but recommended)

### 3. Check the Values are Correct

**Most Important Ones**:

Click on `NOTION_BOOKING_DATABASE_ID` and verify:
- Value should be: `e50edfbee2e34df8b4566edc8bdc1189`
- No extra spaces
- No quotes around it

Click on `NOTION_CHAT_DATABASE_ID` and verify:
- Value should be: `51c3d3aae9fc4d01bc85c3f90d99c0a8`
- No extra spaces
- No quotes around it

---

## 🚀 IF VARIABLES ARE MISSING OR WRONG

### Option A: Add Them One More Time (Carefully)

1. Delete any that look wrong
2. Click "Add New" 
3. Copy EXACTLY from here (no spaces before/after):

```
NOTION_BOOKING_DATABASE_ID
```
Value:
```
e50edfbee2e34df8b4566edc8bdc1189
```

4. Check: ✅ Production, ✅ Preview, ✅ Development
5. Click "Save"

6. Repeat for:
```
NOTION_CHAT_DATABASE_ID
```
Value:
```
51c3d3aae9fc4d01bc85c3f90d99c0a8
```

### Option B: Screenshot Method

1. Take a screenshot of your Vercel Environment Variables page
2. I can see exactly what's there and help debug

---

## 🔄 AFTER FIXING

1. Go to Deployments
2. Click ⋯ on latest
3. Click "Redeploy"
4. **IMPORTANT**: Wait for "Building" to change to "Ready" (~2 minutes)
5. Then we test again

---

## 🎯 WHAT WE'RE LOOKING FOR

When variables are correct, the test will show:
```json
{
  "success": true,
  "status": {
    "apiKey": "✅ Connected",
    "bookingDatabase": "✅ Connected",  // ← Should say this
    "chatDatabase": "✅ Connected"      // ← Should say this
  }
}
```

Currently showing:
```json
{
  "bookingDatabase": "⚠️ Missing",  // ← Problem
  "chatDatabase": "⚠️ Missing"      // ← Problem
}
```

---

## 💡 COMMON ISSUES

### Issue 1: Added as "Preview" Only
**Solution**: Edit each variable, make sure "Production" is checked

### Issue 2: Typo in Variable Name
**Check**: Should be `NOTION_BOOKING_DATABASE_ID` (not `BOOKING_DATABASE_ID`)

### Issue 3: Typo in Value
**Check**: Should be exactly `e50edfbee2e34df8b4566edc8bdc1189` (32 characters)

### Issue 4: Not Saved
**Check**: After clicking "Save", you should see the variable in the list

### Issue 5: Deployment Still Building
**Check**: Go to Deployments tab, look for green "Ready" status

---

## 🆘 NEED HELP?

Let me know:
1. How many environment variables do you see in Vercel? (should be 13)
2. Does `NOTION_BOOKING_DATABASE_ID` exist?
3. Is "Production" checked for it?
4. Is the latest deployment showing "Ready" or "Building"?

Then I can help debug further!

