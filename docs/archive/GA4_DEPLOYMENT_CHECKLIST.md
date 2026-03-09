# ✅ GA4 Deployment Checklist

## Configuration Details

- **Measurement ID**: `G-ZGDMVGP040`
- **Stream Name**: Good-Hands
- **Stream ID**: 12289898409
- **Property**: beautysalonlisbon.com
- **Status**: ✅ Active and collecting data

---

## Step 1: Add Environment Variable in Vercel

### Required Action:
1. Go to: https://vercel.com/narratum2/good-hands
2. Navigate to: **Settings → Environment Variables**
3. Add new variable:
   - **Name**: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Value**: `G-ZGDMVGP040`
   - **Environments**: ✅ Production, ✅ Preview, ✅ Development
4. Click **"Save"**

### Verification:
- ✅ Variable appears in Environment Variables list
- ✅ All environments checked (Production, Preview, Development)
- ✅ Value is exactly `G-ZGDMVGP040` (no spaces)

---

## Step 2: Deploy to Vercel

### Option A: Auto-Deploy (Recommended)
Code is already pushed to GitHub. Vercel will auto-deploy:
1. ✅ Changes committed to `main` branch
2. ⏳ Wait for Vercel to detect push (usually instant)
3. ⏳ Monitor deployment status in Vercel dashboard

### Option B: Manual Redeploy
If auto-deploy doesn't trigger:
1. Go to: **Deployments** tab in Vercel dashboard
2. Find latest deployment
3. Click **"Redeploy"** button
4. Wait for build to complete (2-5 minutes)

---

## Step 3: Verify Deployment

### Check Build Status:
1. Go to Vercel Dashboard → Deployments
2. Verify latest deployment shows:
   - ✅ Build successful (green checkmark)
   - ✅ No build errors
   - ✅ Deployment completed

### Test on Live Site:

#### 1. Check GA4 Script Loading
Open browser console on your site:
```javascript
// Should see:
✅ GA4 initialized with ID: G-ZGDMVGP040
✅ Enhanced Measurement: Enabled
✅ Traffic Source Detection: Active
```

#### 2. Verify Enhanced Measurement
In GA4 Dashboard:
- Go to: **Admin → Data Streams → Good-Hands → Enhanced Measurement**
- Verify all are enabled:
  - ✅ Page views
  - ✅ Scrolls
  - ✅ Outbound clicks
  - ✅ Site search
  - ✅ Form interactions
  - ✅ Video engagement
  - ✅ File downloads

#### 3. Test Real-time Tracking
- Go to: **Reports → Realtime** in GA4
- Visit your site
- Should see yourself as active user within 30 seconds

#### 4. Test Custom Events
Trigger events and verify in Realtime:
```javascript
// In browser console (on your site):
gtag('event', 'test_event', { test_param: 'test_value' })
```
- Should appear in Realtime → Events within 30 seconds

---

## Step 4: Verify Features

### ✅ Traffic Source Detection
Test by visiting from different sources:
- **AI Platforms**: ChatGPT, Claude, Perplexity links
- **Social Media**: Instagram, Facebook, Twitter links
- **Search**: Google, Bing search results
- **Direct**: Type URL directly

Verify in GA4:
- **Reports → Acquisition → Traffic acquisition**
- Should see traffic categorized correctly

### ✅ Funnel Tracking
Verify funnel steps are tracked:
1. Landing page view
2. Browse services
3. View service detail
4. View location
5. Click book button
6. Contact form start
7. Contact form submit
8. Booking complete

Check in GA4:
- **Explore → Funnel exploration**
- Create custom funnel with these events

### ✅ UTM Parameter Tracking
Test URL:
```
https://goodhands.com?utm_source=test&utm_medium=email&utm_campaign=launch
```
Verify in GA4:
- **Reports → Acquisition → Traffic acquisition**
- Should show `test` as source, `email` as medium

---

## Step 5: GA4 Dashboard Configuration

### Create Custom Dimensions (Optional but Recommended)
1. Go to: **Admin → Property → Custom definitions → Custom dimensions**
2. Click **"Create custom dimension"**
3. Add these dimensions:
   - **AI Platform** (Event parameter: `ai_platform`)
   - **Traffic Type** (Event parameter: `traffic_type`)
   - **Funnel Step** (Event parameter: `funnel_step`)

### Mark Key Events as Conversions
1. Go to: **Admin → Property → Events**
2. Find and mark as conversions:
   - ✅ `booking_complete`
   - ✅ `contact_form_submit`
   - ✅ `conversion`

### Create Audiences (Optional)
1. Go to: **Admin → Property → Audiences**
2. Create audiences:
   - **AI Referral Visitors** (Event: `ai_referral`)
   - **Booking Intent** (Event: `booking_intent`)
   - **Form Starters** (Event: `form_start`)

---

## Troubleshooting

### Build Fails
- Check Vercel build logs
- Verify TypeScript compilation passes
- Check for missing dependencies

### GA4 Not Loading
- Check browser console for errors
- Verify Measurement ID is correct
- Check for ad blockers
- Verify environment variable is set

### Events Not Appearing
- Wait 24-48 hours for data processing (normal)
- Check Realtime report (shows immediately)
- Verify events are being fired (check console)
- Check if user has consented (GDPR)

### Traffic Source Not Detected
- Verify referrer is being passed
- Check UTM parameters format
- Review traffic source detection logic

---

## Files Updated

✅ **`lib/analytics.ts`** - Complete GA4 tracking implementation
✅ **`components/GoogleAnalytics.tsx`** - Enhanced GA4 component
✅ **`app/layout.tsx`** - Cleaned up duplicate GA scripts

## Features Implemented

✅ Enhanced Measurement (all enabled)
✅ Traffic Source Detection (AI, Social, Search, Direct)
✅ Sales Funnel Tracking (8 steps)
✅ UTM Parameter Support
✅ Geographic Data Collection
✅ Custom Event Tracking
✅ AI Platform Detection
✅ Form Interaction Tracking
✅ Conversion Tracking
✅ Outbound Link Tracking

---

## Next Steps After Deployment

1. ⏳ Wait 24-48 hours for data to populate in reports
2. ✅ Monitor Realtime data (available immediately)
3. ✅ Set up custom reports
4. ✅ Create conversion goals
5. ✅ Configure audiences for remarketing
6. ✅ Set up alerts for key metrics

---

**Status**: ✅ Code Ready for Deployment
**Last Updated**: 2025-01-29

