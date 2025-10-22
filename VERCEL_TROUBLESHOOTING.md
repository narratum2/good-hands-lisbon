# 🔧 VERCEL ERROR TROUBLESHOOTING

## Common Vercel Errors & Solutions

### Error 1: "Module not found: Can't resolve 'encoding'"

**Error Message**:
```
Module not found: Can't resolve 'encoding'
```

**Cause**: `@notionhq/client` optional dependency warning

**Solution**: This is just a warning, not a blocker. Add to `package.json`:
```json
{
  "optionalDependencies": {
    "encoding": "^0.1.13"
  }
}
```

---

### Error 2: "NOTION_API_KEY is not configured"

**Error Message** (in function logs):
```
Error: NOTION_API_KEY is not configured
```

**Cause**: Environment variables not set in Vercel

**Solution**:
1. Go to: https://vercel.com/narratums-projects/good-hands-lisbon/settings/environment-variables
2. Add: `NOTION_API_KEY` with your actual API key
3. Add all 12 database IDs from `VERCEL_ENV_VARIABLES.txt`
4. Select: Production, Preview, Development
5. Redeploy

---

### Error 3: "Function Timeout"

**Error Message**:
```
Task timed out after 10 seconds
```

**Cause**: Notion API calls taking too long

**Solution**: Notion queries are fine, this is rare. If it happens:
1. Check your Notion API key is valid
2. Verify database IDs are correct
3. Check Notion workspace isn't locked

---

### Error 4: "Property 'X' does not exist"

**Error Message**:
```
Error creating booking: Property 'Customer Name' does not exist
```

**Cause**: Database properties don't match the code

**Solution**: Check your Notion database has these exact properties:

**Bookings DB needs**:
- Customer Name (Title)
- Customer Email (Email)
- Service (Select)
- Date (Date)
- Status (Select)
- Notes (Rich Text)
- Created Date (Date)

**Customers DB needs**:
- Name (Title)
- Email (Email)
- Phone (Phone Number)
- Status (Select)
- Source (Rich Text)
- Created Date (Date)

---

### Error 5: "Failed to compile"

**Error Message**:
```
Type error: Property 'X' does not exist on type 'Y'
```

**Cause**: TypeScript compilation error

**Solution**: Already fixed in latest commit. Make sure you've pushed latest code.

---

### Error 6: "Database not found"

**Error Message** (in logs):
```
Error: Could not find database with ID: xxx
```

**Cause**: Database ID is wrong or integration doesn't have access

**Solution**:
1. Verify database IDs are correct (check `VERCEL_ENV_VARIABLES.txt`)
2. Ensure your Notion integration has access to all databases:
   - Open each database in Notion
   - Click ⋯ (three dots)
   - Click "Add connections"
   - Select your integration
   - Click "Confirm"

---

## How to View Vercel Logs

### Step 1: Go to Vercel Dashboard
```
https://vercel.com/narratums-projects/good-hands-lisbon
```

### Step 2: Click "Deployments"

### Step 3: Click on Latest Deployment

### Step 4: Check Build Logs
- Look for red errors during build
- Common: TypeScript errors, missing modules

### Step 5: Check Function Logs
- Click "Functions" tab
- Look for runtime errors
- Shows actual API errors when someone books

---

## Quick Diagnostic Checks

### Test 1: Is Site Loading?
```
Visit: https://good-hands-seven.vercel.app
Should load homepage ✅
```

### Test 2: Check Notion Test Endpoint
```
Visit: https://good-hands-seven.vercel.app/api/test-notion
Should show database status
```

### Test 3: Test Services API
```
Visit: https://good-hands-seven.vercel.app/api/notion/services
Should return JSON or error message
```

### Test 4: Check Function Logs
```
Submit a booking → Check Vercel function logs
See exact error with stack trace
```

---

## Most Likely Issues

### 1. Environment Variables Not Set (90%)
**Symptom**: "Notion not configured" errors
**Fix**: Add to Vercel → Redeploy

### 2. Database Properties Mismatch (5%)
**Symptom**: "Property does not exist"
**Fix**: Add missing properties to Notion databases

### 3. Integration Access (4%)
**Symptom**: "Database not found"
**Fix**: Share databases with integration

### 4. Invalid API Key (1%)
**Symptom**: "Unauthorized" errors
**Fix**: Check API key is correct

---

## Emergency Fallback

If Notion completely broken:

**The site still works!** 

- Bookings will return mock success
- Chat will return auto-replies
- Services will use static data
- Reviews will show static testimonials

Site is fully functional even without Notion! ✅

---

## Need Help?

**Share these details**:
1. Exact error message
2. When it happens (build or runtime?)
3. Screenshot of Vercel logs
4. Which page/API endpoint

**Most common fix**: Add environment variables to Vercel and redeploy!

