# 🎨 GOOD HANDS DESIGN SYSTEM

**Version**: 2.0  
**Date**: October 26, 2025  
**Status**: Complete Design Language

---

## 📖 TYPOGRAPHY SYSTEM

### Font Family Hierarchy

```css
Primary (Body & UI): Inter
- Clean, modern, highly readable
- Use for: Body text, buttons, navigation, forms

Secondary (Display): Playfair Display
- Elegant, editorial, sophisticated
- Use for: Headlines (H1, H2), hero text, section titles
```

### Font Scale (Modular Scale: 1.25 - Major Third)

| Element | Desktop | Mobile | Weight | Line Height | Letter Spacing |
|---------|---------|--------|--------|-------------|----------------|
| **H1** | 80px (5rem) | 40px (2.5rem) | 300 (Light) | 1.05 | -0.02em |
| **H2** | 56px (3.5rem) | 32px (2rem) | 300 (Light) | 1.2 | -0.02em |
| **H3** | 32px (2rem) | 24px (1.5rem) | 500 (Medium) | 1.3 | -0.01em |
| **H4** | 18px (1.125rem) | 18px | 600 (Semibold) | 1.4 | 0.05em (uppercase) |
| **Body Large** | 20px (1.25rem) | 18px | 300 (Light) | 1.7 | 0.01em |
| **Body** | 17px (1.0625rem) | 16px | 400 (Regular) | 1.8 | 0 |
| **Body Small** | 14px (0.875rem) | 14px | 400 (Regular) | 1.6 | 0 |
| **Caption** | 12px (0.75rem) | 12px | 600 (Semibold) | 1.4 | 0.15em (uppercase) |

### Typography Rules

**DO**:
- ✅ Use Playfair Display ONLY for H1 and H2
- ✅ Use Inter for everything else
- ✅ Keep line length 60-75 characters
- ✅ Use font-light (300) for elegance
- ✅ Tighten letter-spacing on large text (-0.02em)

**DON'T**:
- ❌ Mix more than 2 font families
- ❌ Use bold weights above 600
- ❌ Use decorative fonts
- ❌ Center-align body text
- ❌ Use all-caps for body text

---

## 📏 SPACING SYSTEM (8pt Grid)

### Base Unit: 8px

| Token | Value | Use Case |
|-------|-------|----------|
| `spacing-xs` | 4px | Icon padding, tight gaps |
| `spacing-sm` | 8px | Small gaps, inline spacing |
| `spacing-md` | 16px | Default spacing, form fields |
| `spacing-lg` | 24px | Card padding, list gaps |
| `spacing-xl` | 32px | Section internal spacing |
| `spacing-2xl` | 48px | Between content blocks |
| `spacing-3xl` | 64px | Small section padding |
| `spacing-4xl` | 96px | Medium section padding |
| `spacing-5xl` | 128px | Large section padding |
| `spacing-6xl` | 160px | Section padding (desktop) |
| `spacing-7xl` | 240px | Hero spacing |

### Spacing Rules

**Vertical Rhythm**:
```
Section Padding: 160px (desktop) / 80px (mobile)
Between Sections: 0 (use alternating backgrounds)
Headline to Body: 32px
Body to CTA: 48px
```

**Horizontal Rhythm**:
```
Container Max-Width: 1280px
Content Max-Width: 896px (prose)
Narrow Max-Width: 640px (forms, CTAs)
Grid Gap: 48px (desktop) / 24px (mobile)
```

**DO**:
- ✅ Use multiples of 8px
- ✅ Consistent spacing within components
- ✅ More space = more importance
- ✅ Generous whitespace for luxury feel

**DON'T**:
- ❌ Use arbitrary values (13px, 27px)
- ❌ Inconsistent spacing
- ❌ Cramped layouts
- ❌ Too much space (dilutes focus)

---

## 🎨 COLOR SYSTEM

### Primary Palette

```css
--black: #0a0a0a          /* Deep, rich black */
--editorial-black: #1a1a1a /* UI elements */
--white: #ffffff           /* Pure white */
--off-white: #fafaf8       /* Warm off-white */
```

### Accent Palette

```css
--gold: #b8985f            /* Muted, refined gold */
--gold-light: #d4c4a0      /* Light gold backgrounds */
--gold-dark: #9a7d4a       /* Darker gold for contrast */
```

### Neutral Palette

```css
--gray-light: #e8e8e6      /* Warm gray for borders */
--gray-medium: #8a8a8a     /* Secondary text */
--gray-dark: #2d2d2d       /* Editorial body text */
```

### Sage Accents (Subtle)

```css
--sage: #9ba88f            /* Muted sage */
--sage-light: #c4d4bc      /* Light sage backgrounds */
--sage-dark: #7a8770       /* Darker sage for text */
```

### Color Usage Rules

| Element | Color | Usage |
|---------|-------|-------|
| **Headlines** | `--black` | All H1, H2, H3 |
| **Body Text** | `--gray-dark` | Paragraphs, descriptions |
| **Secondary Text** | `--gray-medium` | Captions, labels |
| **Primary CTA** | `--black` bg | Main actions |
| **Secondary CTA** | `--black` border | Secondary actions |
| **Accent CTA** | `--gold` bg | Premium actions |
| **Links** | `--gold` | Hover: `--gold-dark` |
| **Borders** | `--gray-light` | Subtle separation |
| **Backgrounds** | Alternate `--white` / `--off-white` | Visual rhythm |

**DO**:
- ✅ Use black for primary text
- ✅ Use gold sparingly (accents only)
- ✅ Alternate section backgrounds
- ✅ High contrast (WCAG AAA)

**DON'T**:
- ❌ Use more than 3 colors per section
- ❌ Overuse gold (loses impact)
- ❌ Low contrast text
- ❌ Bright, saturated colors

---

## 🧱 BLOCK DESIGN SYSTEM

### Block Types

#### 1. **Hero Block**
```
Structure:
- Full viewport height (minus nav)
- Centered content
- Background image with overlay
- H1 + Subheading + 2 CTAs

Spacing:
- Padding: 0 (full bleed)
- Content max-width: 1024px
- Headline mb: 48px
- Subheading mb: 64px
- CTA gap: 16px
```

#### 2. **Content Block**
```
Structure:
- Section padding: 160px vertical
- Container: 1280px max-width
- Content: centered, max 896px

Spacing:
- Eyebrow to H2: 24px
- H2 to body: 32px
- Body to CTA: 48px
```

#### 3. **Grid Block** (Services, Testimonials)
```
Structure:
- 3 columns desktop / 1 column mobile
- Equal height cards
- Consistent padding

Spacing:
- Grid gap: 48px (desktop) / 24px (mobile)
- Card padding: 48px (desktop) / 32px (mobile)
- Internal spacing: 24px between elements
```

#### 4. **CTA Block**
```
Structure:
- Centered content
- Max-width: 896px
- Dark background (black or gold)

Spacing:
- Padding: 160px vertical
- H2 to body: 32px
- Body to button: 56px
- Button to caption: 32px
```

#### 5. **Feature Block** (Value Prop)
```
Structure:
- 2 columns desktop / 1 column mobile
- Icon + Heading + Body

Spacing:
- Grid gap: 24px
- Icon to heading: 16px
- Heading to body: 12px
```

### Block Rhythm

**Page Structure**:
```
Hero (full bleed)
↓
Trust Signals (white, 96px padding)
↓
Value Prop (off-white, 160px padding)
↓
Search (white, 96px padding)
↓
Services (off-white, 160px padding)
↓
Categories (white, 96px padding)
↓
Testimonials (off-white, 160px padding)
↓
CTA (black, 160px padding)
```

**Rules**:
- ✅ Alternate backgrounds (white → off-white → white)
- ✅ Consistent section padding (160px or 96px)
- ✅ No gaps between sections
- ✅ Visual rhythm through color alternation

---

## 🔘 COMPONENT DESIGN

### Buttons

#### Primary Button
```css
Background: --black
Color: --white
Padding: 16px 40px
Font: Inter, 12px, 600 weight
Letter-spacing: 0.15em
Border-radius: 0 (sharp corners)
Min-height: 52px

Hover: translateY(-2px) + deeper shadow
Active: scale(0.98) + lighter shadow
```

#### Secondary Button
```css
Background: transparent
Color: --black
Border: 2px solid --black
Padding: 14px 32px
Font: Inter, 13px, 600 weight
Letter-spacing: 0.1em
Border-radius: 0
Min-height: 48px

Hover: fill with black, white text
Active: scale(0.98)
```

#### Gold Button (Premium)
```css
Background: --gold
Color: --white
Padding: 16px 40px
Font: Inter, 12px, 600 weight
Letter-spacing: 0.15em
Border-radius: 0
Min-height: 52px

Hover: scale(1.02) + gold-dark bg
Active: scale(0.98)
```

### Cards

#### Service Card
```css
Background: --white
Border: 1px solid --gray-light
Padding: 48px
Border-radius: 0

Image height: 320px (desktop) / 256px (mobile)
Title: H3, mb 16px
Body: 16px, mb 24px
CTA: link with arrow

Hover: border-color --black, lift 4px
```

#### Testimonial Card
```css
Background: --white
Border: 1px solid --gray-light
Padding: 48px
Border-radius: 0

Quote mark: 80px, gold/15%, serif
Quote: 20px, light, mb 32px
Stars: 16px, gold, mb 24px
Avatar: 48px circle, gold/10 bg
Name: 16px, semibold

Hover: border-color --black
```

### Forms

#### Input Field
```css
Background: --white
Border: 1px solid --gray-light
Padding: 16px
Font: Inter, 16px, 400 weight
Border-radius: 0
Min-height: 48px

Focus: border --gold, shadow
Hover: border --gray-medium
```

---

## 📐 LAYOUT GRID

### Desktop (1280px+)
```
Container: 1280px max-width
Columns: 12
Gutter: 32px
Margin: 64px
```

### Tablet (768px - 1279px)
```
Container: 100%
Columns: 8
Gutter: 24px
Margin: 32px
```

### Mobile (< 768px)
```
Container: 100%
Columns: 4
Gutter: 16px
Margin: 24px
```

---

## ✨ MICRO-INTERACTIONS

### Hover States
```
Buttons: Lift 2px + shadow
Links: Color change (300ms)
Cards: Border change + lift (400ms)
Images: Scale 1.05 (800ms)
```

### Active States
```
Buttons: Scale 0.98 (150ms)
Links: Underline
Cards: Press effect
```

### Transitions
```
Fast: 150ms (active states)
Medium: 300ms (hovers, colors)
Slow: 400ms (cards, layouts)
Very Slow: 800ms (images)

Easing: cubic-bezier(0.4, 0, 0.2, 1)
```

---

## 📱 RESPONSIVE BREAKPOINTS

```css
/* Mobile First */
Base: 0px - 767px

/* Tablet */
md: 768px - 1023px

/* Desktop */
lg: 1024px - 1279px

/* Large Desktop */
xl: 1280px+
```

### Responsive Rules

**Typography**:
- Use `clamp()` for fluid scaling
- Reduce sizes by 20-40% on mobile
- Maintain readability (min 16px body)

**Spacing**:
- Halve section padding on mobile
- Reduce grid gaps by 50%
- Maintain 24px minimum margins

**Layout**:
- Stack columns on mobile
- Reduce max-widths proportionally
- Maintain aspect ratios

---

## 🎯 DESIGN PRINCIPLES

### 1. **Clarity Over Cleverness**
- Simple, direct communication
- Clear visual hierarchy
- Obvious interactions

### 2. **Consistency Creates Confidence**
- Use system tokens
- Repeat patterns
- Predictable behavior

### 3. **Whitespace is Luxury**
- Generous spacing
- Breathing room
- Focus attention

### 4. **Typography is Voice**
- Playfair = Elegance
- Inter = Clarity
- Light weights = Sophistication

### 5. **Color is Accent**
- Black & white foundation
- Gold for emphasis
- Subtle backgrounds

---

## 📋 IMPLEMENTATION CHECKLIST

### For Every New Component:

**Typography**:
- [ ] Using correct font family?
- [ ] Using system font scale?
- [ ] Correct weight and letter-spacing?
- [ ] Readable line length?

**Spacing**:
- [ ] Using 8px multiples?
- [ ] Consistent with other components?
- [ ] Appropriate for hierarchy?
- [ ] Generous whitespace?

**Color**:
- [ ] Using system colors?
- [ ] High contrast (WCAG AA)?
- [ ] Gold used sparingly?
- [ ] Alternating backgrounds?

**Interaction**:
- [ ] Hover state defined?
- [ ] Active state defined?
- [ ] Smooth transitions?
- [ ] Accessible focus states?

---

## 🚀 QUICK REFERENCE

### Common Patterns

**Section Header**:
```tsx
<div className="text-center mb-20">
  <p className="text-xs uppercase tracking-[0.2em] text-gray-medium font-semibold mb-6">
    Eyebrow Text
  </p>
  <h2 className="text-4xl md:text-6xl font-serif mb-8 font-light" style={{ letterSpacing: '-0.02em' }}>
    Section Headline
  </h2>
  <p className="text-lg md:text-xl text-gray-dark max-w-2xl mx-auto font-light" style={{ lineHeight: '1.7' }}>
    Section description
  </p>
</div>
```

**CTA Block**:
```tsx
<section className="section-padding bg-black text-white">
  <div className="container-custom max-w-4xl text-center">
    <h2 className="text-4xl md:text-6xl font-serif mb-8 font-light" style={{ letterSpacing: '-0.02em' }}>
      Headline
    </h2>
    <p className="text-lg md:text-xl text-white/80 mb-14 leading-relaxed font-light max-w-2xl mx-auto">
      Description
    </p>
    <a href="/link" className="btn-gold inline-block">
      Call to Action
    </a>
  </div>
</section>
```

**Card Grid**:
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
  {items.map((item) => (
    <div className="bg-white p-10 md:p-12 border border-gray-light hover:border-black transition-all duration-500">
      {/* Card content */}
    </div>
  ))}
</div>
```

---

## 🎨 DESIGN TOKENS (CSS Variables)

```css
/* Typography */
--font-sans: 'Inter', sans-serif;
--font-serif: 'Playfair Display', serif;

/* Spacing */
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
--spacing-2xl: 48px;
--spacing-3xl: 64px;
--spacing-4xl: 96px;
--spacing-5xl: 128px;
--spacing-6xl: 160px;
--spacing-7xl: 240px;

/* Colors */
--black: #0a0a0a;
--white: #ffffff;
--off-white: #fafaf8;
--gold: #b8985f;
--gray-light: #e8e8e6;
--gray-medium: #8a8a8a;
--gray-dark: #2d2d2d;

/* Z-Index */
--z-base: 1;
--z-dropdown: 10;
--z-sticky: 100;
--z-fixed: 1000;
--z-modal: 9999;
```

---

*Design System Complete: October 26, 2025*  
*Version: 2.0*  
*Status: Production Ready*  
*Use this as the single source of truth for all design decisions* 📖

