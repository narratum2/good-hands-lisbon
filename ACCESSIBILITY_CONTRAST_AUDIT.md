# 🎨 Accessibility: Text on Image Contrast Audit

## Priority: HIGH - User Experience & WCAG Compliance

### Issue
**User Request**: Review title font color overlay on pictures to ensure readability

### WCAG 2.1 Requirements
- **Level AA**: Contrast ratio of at least **4.5:1** for normal text
- **Level AA**: Contrast ratio of at least **3:1** for large text (18pt+)
- **Level AAA**: Contrast ratio of at least **7:1** for normal text

### Common Problem Areas

#### 1. Hero Sections with Background Images
**Files to Audit**:
- `/app/page.tsx` - Homepage hero
- `/app/partnerships/page.tsx` - Partnership hero
- `/app/corporate/page.tsx` - Corporate hero
- `/app/premium/corporate/page.tsx` - Premium corporate hero
- `/app/premium/weddings/page.tsx` - Weddings hero
- `/app/premium/retreats/page.tsx` - Retreats hero
- `/app/premium/photoshoots/page.tsx` - Photoshoots hero
- `/app/services/*/page.tsx` - All service pages
- `/app/[neighborhood]/page.tsx` - All neighborhood pages

**Current Implementation Pattern**:
```tsx
// Typical structure
<div className="relative h-[70vh]">
  <Image src="..." fill className="object-cover" />
  <div className="absolute inset-0 bg-gradient-to-br from-ink/70 via-harbor/60 to-ink/70" />
  <div className="relative z-10">
    <h1 className="text-white">Title Text</h1>
  </div>
</div>
```

**Issues to Check**:
- ❓ Is the gradient overlay dark enough?
- ❓ Does the image brightness vary too much?
- ❓ Is white text always readable?
- ❓ Does text have sufficient shadow/outline?

#### 2. Service Cards with Image Overlays
**Files to Audit**:
- `/components/Services.tsx`
- Service category cards
- Portfolio images with text

**Current Pattern**:
```tsx
<div className="relative overflow-hidden h-80">
  <Image src="..." fill className="object-cover" />
  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100" />
  <h3 className="absolute bottom-6 left-6 text-white">Service Name</h3>
</div>
```

**Issues to Check**:
- ❓ Is text readable BEFORE hover?
- ❓ Is the hover overlay too dark/light?
- ❓ Do we need a permanent text-shadow?

#### 3. Blog Post Headers
**Files to Audit**:
- `/app/journal/[slug]/page.tsx` - Individual blog posts
- Featured blog images with titles

#### 4. Testimonial Images
**Files to Audit**:
- `/components/TestimonialsEnhanced.tsx`
- Customer photos with overlaid text

---

## 🔍 AUDIT CHECKLIST

### Page-by-Page Review

#### Homepage (`/app/page.tsx`)
- [ ] Hero headline on background image
- [ ] Subheading readability
- [ ] CTA button contrast
- [ ] Any text over testimonial images

#### Partnerships (`/app/partnerships/page.tsx`)
- [ ] Hero "Elevate Your Guest Experience"
- [ ] Background gradient sufficient?
- [ ] All text layers visible

#### Corporate Pages
- [ ] `/app/corporate/page.tsx` - Hero text
- [ ] `/app/premium/corporate/page.tsx` - Hero text

#### Premium Services
- [ ] `/app/premium/weddings/page.tsx` - Hero + all section images
- [ ] `/app/premium/retreats/page.tsx` - Hero + lifestyle images
- [ ] `/app/premium/photoshoots/page.tsx` - Hero + portfolio samples
- [ ] `/app/premium/membership/page.tsx` - Any background images

#### Service Pages
- [ ] `/app/services/page.tsx` - Service grid cards
- [ ] `/app/services/makeup/page.tsx` - Hero
- [ ] `/app/services/nails/page.tsx` - Hero
- [ ] `/app/services/skincare/page.tsx` - Hero
- [ ] `/app/services/wellness/page.tsx` - Hero

#### Neighborhood Pages
- [ ] `/app/chiado/page.tsx` - Hero
- [ ] `/app/principe-real/page.tsx` - Hero
- [ ] `/app/alfama/page.tsx` - Hero
- [ ] `/app/belem/page.tsx` - Hero
- [ ] `/app/baixa/page.tsx` - Hero
- [ ] `/app/avenida/page.tsx` - Hero
- [ ] `/app/cascais/page.tsx` - Hero
- [ ] `/app/sintra/page.tsx` - Hero

#### Blog/Journal
- [ ] `/app/journal/page.tsx` - Blog grid
- [ ] `/app/journal/[slug]/page.tsx` - Individual posts
- [ ] Featured images with titles

---

## 🛠️ SOLUTIONS & FIXES

### Option 1: Increase Overlay Darkness
**Current**: `bg-gradient-to-br from-ink/70 via-harbor/60 to-ink/70`
**Improved**: `bg-gradient-to-br from-black/80 via-black/70 to-black/80`

**Pros**: Simple, consistent
**Cons**: May lose some image detail

### Option 2: Add Text Shadow
```tsx
<h1 className="text-white" style={{
  textShadow: '0 2px 12px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.6)'
}}>
  Headline Text
</h1>
```

**Pros**: Preserves image visibility, excellent readability
**Cons**: Slightly more CSS

### Option 3: Text Background Pill
```tsx
<h1 className="text-white bg-black/60 px-6 py-3 rounded-lg backdrop-blur-sm">
  Headline Text
</h1>
```

**Pros**: Guaranteed contrast, modern look
**Cons**: More UI elements

### Option 4: Image Brightness Filter
```tsx
<Image 
  src="..." 
  className="object-cover brightness-[0.7]" // Darken image
/>
```

**Pros**: Maintains overlay, improves contrast
**Cons**: All images darkened

### Recommended Solution: **Combination Approach**

1. **Hero Sections**: Option 1 (stronger overlay) + Option 2 (text shadow)
2. **Service Cards**: Option 2 (text shadow) + permanent subtle overlay
3. **Blog Headers**: Option 3 (background pill) for clean separation

---

## 📏 CONTRAST TESTING TOOLS

### Manual Testing:
1. **Chrome DevTools**:
   - Right-click text → Inspect
   - Look for contrast ratio in Styles panel
   - Should show ✅ AA or ❌ Fail

2. **WebAIM Contrast Checker**:
   - URL: https://webaim.org/resources/contrastchecker/
   - Test foreground vs background colors

3. **WAVE Browser Extension**:
   - Automatically flags contrast issues

### Automated Testing:
```bash
# Run Lighthouse audit
npx lighthouse https://your-site.com --view

# Check for contrast errors in Accessibility section
```

---

## 🎨 SPECIFIC FIXES NEEDED

### 1. HeroModern Component (`/components/HeroModern.tsx`)
**Current Issue**: Text may not be readable on all background images

**Fix**:
```tsx
// Add stronger text shadow
<h1 
  className="font-serif font-light mb-8 md:mb-12 text-white text-center" 
  style={{ 
    fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', 
    lineHeight: '1.05', 
    letterSpacing: '-0.02em',
    textShadow: '0 4px 16px rgba(0,0,0,0.9), 0 2px 6px rgba(0,0,0,0.7)' // ADD THIS
  }}
>
  The Beauty Concierge
  <br />
  Lisbon Trusts
</h1>
```

### 2. Partnership Hero (`/app/partnerships/page.tsx`)
**Current**: 
```tsx
<div className="absolute inset-0 bg-gradient-to-br from-ink/70 via-harbor/60 to-ink/70" />
```

**Improved**:
```tsx
<div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/85" />
```

**AND add text shadow**:
```tsx
<h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6" style={{
  textShadow: '0 3px 12px rgba(0,0,0,0.8)'
}}>
  Elevate Your Guest Experience
</h1>
```

### 3. Service Cards
**Current**: Overlay only on hover
**Improved**: Permanent subtle overlay + text shadow

```tsx
// Add permanent overlay
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

// Add text shadow to card titles
<h3 className="text-xl font-semibold text-white" style={{
  textShadow: '0 2px 8px rgba(0,0,0,0.7)'
}}>
  Service Name
</h3>
```

---

## 📊 BEFORE/AFTER COMPARISON

### Current State (Potential Issues):
```
Text: #FFFFFF (white)
Background: Image varies (could be #F5F5F5 to #333333)
Overlay: rgba(10,10,10,0.7) = #1A1A1A with 70% opacity
Effective Background: ~#4D4D4D (varies)
Contrast Ratio: ~4.8:1 (barely passes AA for large text)
```

### Improved State:
```
Text: #FFFFFF (white)
Text Shadow: 0 2px 12px rgba(0,0,0,0.8)
Overlay: rgba(0,0,0,0.85) = #000000 with 85% opacity
Effective Background: ~#262626
Contrast Ratio: ~12:1 ✅ (exceeds AAA)
```

---

## 🚀 IMPLEMENTATION PLAN

### Phase 1: Critical Hero Sections (1 hour)
1. Update all hero overlays to 80-85% opacity
2. Add text shadows to all h1 headings on images
3. Test on 3-5 different background images

### Phase 2: Service Cards (30 min)
1. Add permanent gradient overlay (bottom-to-top)
2. Add text shadows to card titles
3. Adjust hover states

### Phase 3: Blog Images (30 min)
1. Add background pills or stronger overlays
2. Test with various image types

### Phase 4: Full Site Audit (1 hour)
1. Use WAVE extension on every page
2. Fix any flagged contrast issues
3. Document any exceptions

### Phase 5: Testing (30 min)
1. Test on different displays (bright/dim)
2. Test with browser zoom (125%, 150%, 200%)
3. Validate with real users

---

## ✅ SUCCESS CRITERIA

- [ ] All text on images passes WCAG AA (4.5:1 for normal, 3:1 for large)
- [ ] No contrast warnings in Lighthouse audit
- [ ] No contrast errors in WAVE
- [ ] Text readable on phone in bright sunlight
- [ ] Text readable on laptop in dim room
- [ ] Brand aesthetic maintained (not over-darkened)

---

## 📝 NOTES

### Brand Considerations:
- We want **elegant**, not **heavy-handed** overlays
- Maintain the **luxury feel** while ensuring readability
- White text is brand-appropriate (don't switch to dark text)
- Gold accents should remain visible against dark overlays

### Edge Cases:
- Very bright/light background images (beach, sky) - need darker overlay
- Very dark background images (night shots) - may need lighter text or outline
- Mid-tone images (most challenging) - need both overlay + text shadow

---

**Priority**: HIGH  
**Estimated Time**: 3-4 hours total  
**Impact**: Accessibility compliance + improved UX  
**Dependencies**: None (can be done immediately)

**Next Steps**:
1. User reviews and approves approach
2. Implement Phase 1 (critical heroes)
3. Deploy and test
4. Continue with Phases 2-5


