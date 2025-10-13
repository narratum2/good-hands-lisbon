# 🎯 Priority Fixes - October 13, 2025

## Critical Issues to Address

### 1. **Product Store Not Working** ⚠️
**Status:** Needs Decision

**Current Problem:**
- "Shop Now" buttons link to non-existent `/products/` pages
- No e-commerce backend integrated
- Products display but can't be purchased

**Solution Options:**

#### Option A: Shopify Buy Button (RECOMMENDED - Fastest)
- **Time:** 30 minutes
- **Complexity:** Low
- **Cost:** Free (Shopify Lite $9/mo)
- Add Shopify Buy Button SDK
- Link products to Shopify store
- **Best for:** Quick launch, real products

#### Option B: External Links
- **Time:** 5 minutes
- **Complexity:** Very Low
- **Cost:** Free
- Link to Amazon/existing store
- **Best for:** Affiliate marketing

#### Option C: Full Stripe Integration
- **Time:** 4-6 hours
- **Complexity:** High
- **Cost:** Stripe fees only
- Build product pages
- Checkout flow
- Order management
- **Best for:** Full control, custom experience

#### Option D: Make Informational Only
- **Time:** 10 minutes
- **Complexity:** Very Low
- **Cost:** Free
- Change "Shop Now" to "Learn More"
- Link to product information pages
- **Best for:** Not ready to sell yet

**DECISION NEEDED:** Which option do you prefer?

---

### 2. **Parallax Covering Text** 🎨
**Status:** Needs Review

**Problem:**
- `ParallaxSection` may cause z-index issues
- Text could be overlapped by moving sections

**Solution:**
- Review z-index hierarchy
- Add proper `position: relative` and z-index values
- Test scroll behavior on live site

**Action Items:**
- [ ] Test live site for parallax issues
- [ ] Identify specific sections with problems
- [ ] Fix z-index and positioning
- [ ] Add overflow handling if needed

---

### 3. **Upload Pictures from Local Folder** 📸
**Status:** Awaiting Clarification

**Need to Know:**
- Where exactly is the "repo" folder with pictures?
- What pictures need to be uploaded?
- Which images on the site should they replace?

**Once Clarified:**
- [ ] Copy pictures to `/public/brand-images/`
- [ ] Update component image paths
- [ ] Optimize images (WebP, compression)
- [ ] Update alt text for SEO
- [ ] Commit and deploy

---

## Quick Wins (Can Do Immediately)

### A. Fix Product Links (Informational Approach)
**Time:** 5 minutes
- Change "Shop Now" to "View Details"
- Create simple product info pages
- Add "Coming Soon" badge

### B. Review Parallax on Live Site
**Time:** 15 minutes
- Visit: https://good-hands-apualr0k5-narratums-projects.vercel.app
- Test scroll behavior
- Document specific issues
- Fix z-index if needed

---

## Recommended Action Plan

### Immediate (Next 30 min):
1. **Clarify picture location** - Tell me exact path
2. **Decide on store approach** - Which option (A, B, C, or D)?
3. **Test parallax** - Check live site, identify issues

### Then (Next 1-2 hours):
4. Implement store solution
5. Upload and replace pictures
6. Fix any parallax issues
7. Test everything
8. Deploy

---

## Questions for You:

1. **Pictures:** Where is the folder with new pictures? (Exact path)
2. **Store:** Do you want to:
   - Sell products now? (Shopify/Stripe)
   - Link to external store?
   - Make it informational only?
   - Remove the store section entirely?
3. **Parallax:** Have you noticed specific sections where text is covered?

---

**Let's focus on ONE thing at a time to avoid adding more TODOs.**

**What should we tackle first?**


