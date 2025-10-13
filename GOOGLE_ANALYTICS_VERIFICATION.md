# Google Analytics 4 Verification Guide

## 📊 GA4 Setup Details
- **Measurement ID**: G-ZGDMVGP040
- **Implementation Date**: October 13, 2025
- **Implementation Method**: Next.js Script component + Custom tracking

## ✅ Verification Steps

### Method 1: Browser Developer Tools (Immediate Test)

1. **Open your site**: https://good-hands-apualr0k5-narratums-projects.vercel.app
2. **Open Developer Tools**: 
   - Chrome/Edge: F12 or Right-click → Inspect
   - Safari: Cmd+Option+I
   - Firefox: F12
3. **Go to Network Tab**
4. **Filter by "gtag" or "google-analytics"**
5. **Reload the page**
6. **Look for these requests**:
   - `gtag/js?id=G-ZGDMVGP040`
   - `collect?v=2&tid=G-ZGDMVGP040`

**Expected Result**: You should see multiple requests to Google Analytics domains.

### Method 2: Google Tag Assistant (Chrome Extension)

1. **Install**: [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-companion/jmekfmbnaedfebfnmakmokmlfpblbfdm)
2. **Visit your site**: https://good-hands-apualr0k5-narratums-projects.vercel.app
3. **Click the Tag Assistant icon** in your browser toolbar
4. **Look for**: Google Analytics: GA4 - G-ZGDMVGP040

**Expected Result**: Tag should show as "Working" with a green checkmark.

### Method 3: Console Test

1. **Open Console Tab** in Developer Tools
2. **Type**: `window.gtag`
3. **Press Enter**

**Expected Result**: Should show a function, not `undefined`

Also try:
```javascript
gtag('event', 'test_event', {
  'event_category': 'test',
  'event_label': 'manual_test'
})
```

### Method 4: GA4 Real-Time Report

1. **Go to GA4 Dashboard**: https://analytics.google.com/
2. **Select your property**
3. **Go to**: Reports → Real-time
4. **Open your site** in another tab/window
5. **Navigate around** (click links, scroll, etc.)

**Expected Result**: Within 30-60 seconds, you should see yourself as an active user.

## 🔍 Troubleshooting

### If Tag is Not Detected

1. **Check Deployment Status**:
   ```bash
   git log --oneline -1
   # Should show: "Fix Google Analytics implementation using Next.js Script component"
   ```

2. **Hard Refresh Your Browser**:
   - Chrome/Edge: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
   - Clear cache and reload

3. **Check for Ad Blockers**:
   - Ad blockers often block Google Analytics
   - Try in Incognito/Private mode
   - Temporarily disable ad blockers

4. **Verify Script Loading**:
   - Check Console for errors
   - Look for 404s in Network tab

### If No Data in GA4 Dashboard

**This is NORMAL for new properties!** 

- Initial data processing can take **24-48 hours**
- Real-time reporting should work within minutes
- Historical reports populate within 24 hours

## 📈 What's Being Tracked

### Automatic Events (Built-in)
- ✅ page_view (every page load)
- ✅ first_visit (new users)
- ✅ session_start (new sessions)
- ✅ scroll (90% depth)
- ✅ click (outbound links)

### Custom Events (Implemented)
- 🎯 `booking_started` - User opens booking form
- 🎯 `booking_step_completed` - Multi-step form progress
- 🎯 `booking_completed` - Booking form submitted
- 🎯 `service_viewed` - Service page viewed
- 🎯 `experience_viewed` - Experience page viewed
- 🎯 `neighborhood_viewed` - Neighborhood page viewed
- 🎯 `blog_article_viewed` - Blog article opened
- 🎯 `cta_clicked` - CTA button clicked
- 🎯 `search_performed` - Search executed
- 🎯 `social_media_clicked` - Social icon clicked
- 🎯 `map_clicked` - Map interaction
- 🎯 `phone_clicked` / `email_clicked` - Contact method used
- 🎯 `ai_agent_visit` - AI crawler detected

## 🚀 Implementation Files

```
app/layout.tsx           - GA4 Script tags
components/GoogleAnalytics.tsx  - Route change tracking
lib/analytics.ts         - Custom event functions
components/AIDiscoveryTracker.tsx - AI agent detection
```

## 📝 Testing Checklist

- [ ] View homepage (should trigger `page_view`)
- [ ] Navigate to Services page (should trigger `page_view`)
- [ ] Click "Book Now" CTA (should trigger `cta_clicked`)
- [ ] Fill booking form (should trigger `booking_started`)
- [ ] Submit booking (should trigger `booking_completed`)
- [ ] Click social media icon (should trigger `social_media_clicked`)
- [ ] Open blog article (should trigger `blog_article_viewed`)
- [ ] Use search (should trigger `search_performed`)

## 🎉 Success Indicators

✅ **Immediate (within minutes)**:
- gtag.js script loads in Network tab
- Real-time users appear in GA4 dashboard
- Console shows no GA-related errors

✅ **Within 24 hours**:
- User demographics populate
- Page views counted correctly
- Custom events appear in Events report

✅ **Within 48 hours**:
- Full historical data available
- Conversion tracking active
- All reports functional

## 📞 Support

If you continue to have issues after 48 hours:
1. Check GA4 property settings
2. Verify website is not in "test mode"
3. Ensure you're logged into correct GA4 account
4. Contact Google Analytics support

---

**Last Updated**: October 13, 2025  
**Implementation Version**: 2.0 (Next.js Script component)

