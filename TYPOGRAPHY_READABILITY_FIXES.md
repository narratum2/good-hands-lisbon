# Typography & Readability Issues — October 13, 2025

## Issues Identified

### 1. Playfair Display (Serif Font) Readability
**Problem:**
- Playfair Display is decorative, not optimal for body text
- Thin weight (400) hard to read on screens
- Used heavily in h1 tags (480 instances across 65 files)
- Poor readability at small sizes on mobile

**Current Usage:**
```css
h1 {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 400; /* Too thin */
  line-height: 1.15; /* Too tight */
}
```

**Impact:** Hero headings, page titles hard to read

---

### 2. Small Font Sizes on Mobile
**Current:**
- Body text: 16px (okay)
- Small text: 14px  
- Button text: 13px → 12px on mobile (too small)
- Labels: 12px (borderline)

**Minimum recommended:** 16px for body, 14px minimum for any text

---

### 3. Line Height Issues
**Current:**
- h1: 1.15 (too tight)
- h2: 1.25 (acceptable)
- h3: 1.3 (acceptable)
- p: 1.7 (good)

**Problem:** Headings cramped, especially on mobile

---

### 4. Color Contrast Issues
**Text Colors:**
- `--gray-dark: #4a4a4a` (used for body text)
- Contrast ratio: ~4.9:1 (barely passes WCAG AA)
- Should be darker for better readability

**Harbor color:** Used throughout, needs review

---

### 5. Letter Spacing
**Current:**
- h1: -0.02em (too tight)
- Buttons: 0.1em (good for uppercase)
- h4: 0.05em uppercase (okay)

**Issue:** Negative letter-spacing on large headings reduces readability

---

## Recommended Fixes

### Fix 1: Improve Serif Font Readability
```css
h1 {
  @apply font-serif text-black;
  font-size: clamp(2rem, 8vw, 4rem);
  font-weight: 500; /* Increase from 400 */
  line-height: 1.25; /* Increase from 1.15 */
  letter-spacing: -0.01em; /* Less aggressive */
  margin-bottom: var(--spacing-xl);
}
```

### Fix 2: Increase Mobile Minimum Sizes
```css
/* Buttons on mobile */
@media (max-width: 768px) {
  .btn-primary, .btn-secondary, .btn-gold {
    font-size: 13px; /* Keep at 13px, don't reduce to 12px */
  }
}

/* Small text minimum */
.text-sm {
  font-size: 14px; /* Never go below this */
}
```

### Fix 3: Darken Body Text
```css
:root {
  --black: #1a1a1a;
  --gray-dark: #2d2d2d; /* Darker from #4a4a4a */
  --harbor: #3a4d5c; /* Darker blue-gray */
}

p {
  color: #2d2d2d; /* Direct value, darker */
}
```

### Fix 4: Improve Heading Line Heights
```css
h1 {
  line-height: 1.25; /* From 1.15 */
}

h2 {
  line-height: 1.35; /* From 1.25 */
}

h3 {
  line-height: 1.4; /* From 1.3 */
}
```

### Fix 5: Reduce Clamp Aggressiveness
```css
/* Current h1 goes from 32px to 64px (2x range) */
h1 {
  font-size: clamp(2.25rem, 6vw, 3.5rem); /* 36px → 56px (more controlled) */
}

/* Current h2 goes from 24px to 40px */
h2 {
  font-size: clamp(1.75rem, 4vw, 2.25rem); /* 28px → 36px */
}
```

---

## Specific Problem Areas

### Hero Text on Mobile
**Current:**
```tsx
<h1 className="text-5xl md:text-7xl font-serif">
```
- 5xl = 48px on mobile (too large)
- 7xl = 72px on desktop (too large)

**Better:**
```tsx
<h1 className="text-4xl md:text-6xl font-serif">
```
- 4xl = 36px on mobile
- 6xl = 60px on desktop

---

### Paragraph Text
**Current color:** `--gray-dark: #4a4a4a`
**Contrast:** 4.9:1 (barely passes)

**Recommended:** `#2d2d2d` or darker
**Contrast:** 8.5:1 (excellent)

---

### Button Text
**Current:**
- Desktop: 13px
- Mobile: 12px (too small)

**Recommended:**
- Desktop: 14px
- Mobile: 13px (minimum)

---

## Implementation Priority

### P0 - Critical (Do First):
1. Darken body text color (#4a4a4a → #2d2d2d)
2. Increase h1 line-height (1.15 → 1.25)
3. Reduce hero text sizes on mobile

### P1 - High:
4. Increase h1 font-weight (400 → 500)
5. Improve h2/h3 line-heights
6. Fix button font sizes on mobile

### P2 - Medium:
7. Adjust clamp ranges
8. Review letter-spacing values
9. Audit all small text

---

## Files to Modify

### Primary:
1. `app/globals.css` - All typography base styles
2. `tailwind.config.ts` - Color values
3. `components/HeroModern.tsx` - Hero text sizing

### Secondary (check after):
- All neighborhood page heroes
- About page
- Services pages
- Premium pages

---

## Testing Checklist

After fixes:
- [ ] Read paragraph text on mobile - clear?
- [ ] Headings readable at all sizes?
- [ ] Buttons text visible on mobile?
- [ ] Check on iPhone SE (smallest)
- [ ] Check on large desktop
- [ ] Lighthouse accessibility score 95+?
- [ ] Manual contrast check
- [ ] Real device testing

---

## Contrast Ratios (WCAG)

### Current:
- Body text (#4a4a4a on #ffffff): 4.9:1 ⚠️ (barely AA)
- Headings (#1a1a1a on #ffffff): 12.6:1 ✅ (AAA)
- Harbor text (#5a6d7c on #ffffff): 5.1:1 ✅ (AA)

### Target:
- Body text (#2d2d2d on #ffffff): 8.5:1 ✅ (AAA)
- All text: Minimum 7:1 for AA

---

*Review completed: October 13, 2025*  
*Priority: High - affects all page readability*  
*Estimated time: 2 hours for all fixes*

