# 🔘 CTA Button Testing Checklist

**Purpose:** Verify all Call-to-Action buttons work correctly across the entire site  
**Testing Date:** October 13, 2025  
**Tester:** AI Developer  
**Site URL:** https://good-hands-apualr0k5-narratums-projects.vercel.app

---

## 🎯 Testing Criteria

For each button, verify:
- ✅ **Visible:** Button displays correctly
- ✅ **Styled:** Correct variant (gold, primary, secondary, dark)
- ✅ **Interactive:** Hover/focus states work
- ✅ **Functional:** Click navigates to correct destination
- ✅ **Accessible:** Min 44x44px touch target (mobile)
- ✅ **Mobile:** Works on small screens
- ✅ **Analytics:** Fires GA4 event (where applicable)

---

## 📄 Page-by-Page Testing

### 1. Homepage (`/`)

#### Hero Section
- [ ] **"Explore Services"** (btn-gold)
  - Target: `#services` (scroll)
  - Expected: Smooth scroll to Services section
  
- [ ] **"Book Now"** (btn-secondary-light)
  - Target: `#booking` (scroll)
  - Expected: Smooth scroll to booking form
  - GA Event: `cta_clicked`

#### Search Bar
- [ ] **"Search"** (btn-primary)
  - Target: Triggers search functionality
  - Expected: Filters or navigates based on search term

#### Services Section
- [ ] Service cards (if clickable)
  - Target: Service detail pages or booking

#### Categories Row
- [ ] **Category cards** (6 total)
  - Hair, Makeup, Nails, Skincare, Massage, Wellness
  - Target: `/services/[category]`

#### Experiences Preview
- [ ] **"Discover Experiences"** or similar CTA
  - Target: `/experiences`

#### Guides Preview
- [ ] **"View All Guides"** or similar
  - Target: `/guides` or neighborhood pages

#### Journal Preview
- [ ] **"Read More"** buttons on article cards
  - Target: Individual journal articles

#### Booking Form
- [ ] **"Send Request"** (btn-gold)
  - Target: Form submission
  - Expected: Success message
  - GA Event: `booking_started`, `booking_completed`

---

### 2. Services Page (`/services`)

#### Hero Section
- [ ] Search filter functionality
- [ ] Category dropdowns work

#### Service Categories
- [ ] **Each service card** has pricing/CTA
  - Expected: Book or view details

#### Service Detail Pages
- [ ] `/services/hair`
- [ ] `/services/makeup`
- [ ] `/services/nails`
- [ ] `/services/skincare`
- [ ] `/services/wellness`

**Each should have:**
- [ ] "Book Now" CTA
- [ ] "View All Services" back link

---

### 3. Experiences Page (`/experiences`)

#### Premium Experiences
- [ ] **"Book Retreat"** - Wellness Retreats
  - Target: `/premium/retreats`
  
- [ ] **"Learn More"** - Wedding Packages
  - Target: `/premium/weddings`
  
- [ ] **"Schedule Consultation"** - Coastal Photoshoots
  - Target: `/premium/photoshoots`
  
- [ ] **"Join Waitlist"** - Good Hands Membership
  - Target: `/premium/membership`

---

### 4. Premium Experience Pages

#### `/premium/weddings`
- [ ] **"Schedule Consultation"** (btn-gold)
  - Target: Booking form or contact

#### `/premium/retreats`
- [ ] **"Book Your Retreat"** (btn-gold)
  - Target: Booking form

#### `/premium/photoshoots`
- [ ] **"Book Photoshoot"** (btn-gold)
  - Target: Booking form

#### `/premium/membership`
- [ ] **"Join Waitlist"** (btn-gold)
  - Target: `/membership/join`
  
- [ ] **"Apply Now"** (btn-primary)
  - Target: Application form

#### `/premium/corporate`
- [ ] **"Get Started"** (btn-gold)
  - Target: Contact/booking

---

### 5. Neighborhood Pages (8 pages)

Test each: Alfama, Bairro Alto, Belém, Cascais, Chiado, LX Factory, Príncipe Real, Sintra

**For each page:**
- [ ] **"Book a Service"** in hero/CTA section
  - Target: `#booking` or `/services`
  
- [ ] **"Open in Google Maps"** (btn-primary)
  - Target: External Google Maps link
  - Expected: Opens in new tab
  - GA Event: `map_clicked`

---

### 6. About Page (`/about`)

- [ ] **"Get in Touch"** or contact CTA
  - Target: Contact form or `#booking`

- [ ] **Social Media Icons** (Instagram, X, Telegram)
  - Target: External social media links
  - Expected: Open in new tab
  - GA Event: `social_media_clicked`

---

### 7. Journal/Blog Pages

#### `/journal`
- [ ] **"Read More"** on article cards
  - Target: Individual article pages

#### Individual articles
- [ ] **"Back to Journal"** navigation
- [ ] **Social share buttons** (if present)

---

### 8. Footer (All Pages)

#### Quick Links
- [ ] All navigation links
- [ ] Services submenu

#### Social Media
- [ ] Instagram icon
  - Target: `https://instagram.com/goodhandslisbon`
  - GA Event: `social_media_clicked`
  
- [ ] X (Twitter) icon
  - Target: `https://x.com/goodhandslisbon`
  
- [ ] Telegram icon
  - Target: `https://t.me/goodhandslisbon`

#### Contact
- [ ] **Email link:** `hello@goodhands.pt`
  - Expected: Opens mail client
  - GA Event: `email_clicked`
  
- [ ] **Phone link:** `+351 XX XXX XXXX`
  - Expected: Opens phone dialer (mobile)
  - GA Event: `phone_clicked`

---

### 9. Navigation Bar (All Pages)

#### Desktop Menu
- [ ] **Logo** - Returns to homepage
- [ ] **Services** - Dropdown or link
- [ ] **Neighborhoods** - Dropdown or link
- [ ] **Experiences** - Link
- [ ] **Journal** - Link
- [ ] **About** - Link
- [ ] **"Book Now"** (btn-gold, right side)
  - Target: `#booking` or modal

#### Mobile Menu
- [ ] **Hamburger button** - Opens mobile menu
  - Touch target: 44x44px minimum
  - Accessible: ARIA labels present
  
- [ ] All menu links functional
- [ ] **Close button** works
- [ ] **Escape key** closes menu

---

## 🛠️ Button Variants Inventory

### Used Throughout Site:

#### `.btn-gold`
- **Color:** Gold text, ink background, gold hover
- **Use:** Primary CTAs (Book Now, Get Started)
- **Count:** ~15-20 buttons

#### `.btn-primary`
- **Color:** White text, ink background
- **Use:** Secondary CTAs (Search, Learn More)
- **Count:** ~10-15 buttons

#### `.btn-secondary`
- **Color:** Ink text, transparent background, ink border
- **Use:** Tertiary actions (Back, Cancel)
- **Count:** ~5-10 buttons

#### `.btn-secondary-light`
- **Color:** White text, transparent background, white border
- **Use:** CTAs on dark backgrounds (Hero)
- **Count:** ~3-5 buttons

#### `.btn-dark`
- **Color:** White text, ink background
- **Use:** CTAs on light/beige backgrounds
- **Count:** ~5-8 buttons

---

## 🐛 Known Issues to Watch For

### From Previous Testing:
1. ~~"Book Now" buttons not scrolling~~ - FIXED (added smooth scroll)
2. ~~Mobile menu button too small~~ - FIXED (44x44px)
3. ~~Inconsistent button styling~~ - FIXED (centralized in globals.css)
4. Product store buttons - DISABLED (commented out)

### Potential Issues:
- External links not opening in new tab
- Missing `rel="noopener noreferrer"` on external links
- GA events not firing
- Smooth scroll not working on some browsers
- Touch targets < 44px on mobile

---

## 📱 Mobile-Specific Tests

### Critical Mobile CTAs:
- [ ] Hero "Book Now" (most common entry point)
- [ ] Service cards (tap targets)
- [ ] Booking form submit button
- [ ] Mobile menu hamburger
- [ ] Footer social icons

### Mobile Considerations:
- Buttons should span full width or be centered
- Minimum 13px font size
- 44x44px minimum touch target
- Clear visual feedback on tap
- No overlap with other interactive elements

---

## 🔍 Automated Testing Commands

### Check Button Classes:
```bash
grep -r "btn-gold\|btn-primary\|btn-secondary\|btn-dark" app/ components/
```

### Find Anchor Links:
```bash
grep -r 'href="#' app/ components/
```

### Find External Links:
```bash
grep -r 'target="_blank"' app/ components/
```

### Check Touch Targets:
```bash
grep -r 'min-w-\[44px\]\|min-h-\[44px\]' components/
```

---

## ✅ Test Results Template

### Page: _______________
**Date Tested:** __________  
**Device:** Desktop / Mobile / Tablet  
**Browser:** __________

| Button/CTA | Variant | Target | Status | Notes |
|------------|---------|--------|--------|-------|
| Hero "Book Now" | btn-gold | #booking | ✅ | Works perfectly |
| ... | ... | ... | ... | ... |

**Issues Found:**
1. [Issue description]

**Recommendations:**
1. [Recommendation]

---

## 🎯 Priority Testing Order

### HIGH PRIORITY (Must Test First):
1. ✅ Homepage hero CTAs
2. ✅ Booking form submit
3. ✅ Navigation bar "Book Now"
4. ✅ Mobile menu
5. ✅ Service category cards

### MEDIUM PRIORITY:
6. Neighborhood page CTAs
7. Experience page CTAs
8. Footer links
9. Social media icons
10. Search functionality

### LOW PRIORITY:
11. Journal article links
12. Back navigation
13. Breadcrumbs
14. Share buttons

---

## 📊 Expected Results

### After Complete Testing:
- **Total CTAs:** ~100-150 buttons/links
- **Critical CTAs:** ~20-30
- **Pass Rate Goal:** 95%+
- **Issues Expected:** 5-10 minor issues
- **Time Required:** 2-3 hours thorough testing

---

## 🚀 Next Steps After Testing

1. **Document all issues** found
2. **Prioritize fixes** (critical, high, medium, low)
3. **Create fix tasks** for development
4. **Retest after fixes** implemented
5. **Update this checklist** with results

---

**Status:** 📝 Ready for Testing  
**Last Updated:** October 13, 2025  
**Next Review:** After fixes implemented

