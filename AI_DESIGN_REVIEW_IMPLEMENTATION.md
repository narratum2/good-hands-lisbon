# 🎨 AI Design Review & Implementation Plan - October 13, 2025

**Target:** AI Developer / Code Review  
**Framework:** Next.js 14, TypeScript, Tailwind CSS, Framer Motion  
**Goal:** Consolidate design system into reusable, maintainable code

---

## 📊 CURRENT STATE ANALYSIS

### Existing Implementation: ✅ GOOD
- ✅ Tailwind config with custom colors
- ✅ `app/globals.css` with button classes
- ✅ Framer Motion for animations
- ✅ TypeScript strict mode
- ✅ Component-based architecture
- ✅ Responsive design (mobile-first)

### Gaps Identified: ⚠️
- ⚠️ Design tokens not fully consolidated
- ⚠️ Some ad-hoc font sizes in components
- ⚠️ Motion variants not centralized
- ⚠️ Section padding inconsistent
- ⚠️ No reusable Section wrapper component
- ⚠️ Some inline styles still present

---

## 🎯 IMPLEMENTATION TASKS

### Task 1: Consolidate Design Tokens ⏱️ 1 hour

#### Current State:
```css
/* app/globals.css - Lines 15-30 */
--porcelain: #f8f7f5;
--shell: #f5f1eb;
--ink: #1a1a1a;
--harbor: #4a4a4a;
--gold: #c9a961;
--sage: #a8b5a0;
```

#### Action Required:
**A) Create dedicated design tokens file**

```bash
# Create new file
touch app/design-tokens.css
```

```css
/* app/design-tokens.css */
:root {
  /* ===== COLOR PALETTE ===== */
  /* Primary Colors */
  --color-ink: #1a1a1a;           /* Primary text, dark backgrounds */
  --color-porcelain: #f8f7f5;     /* Light backgrounds */
  --color-shell: #f5f1eb;         /* Alternate light backgrounds */
  
  /* Text Colors */
  --color-harbor: #2d2d2d;        /* Body text (improved contrast) */
  --color-harbor-light: #4a4a4a;  /* Secondary text */
  
  /* Accent Colors */
  --color-gold: #c9a961;          /* Primary accent */
  --color-gold-dark: #b8984f;     /* Hover states */
  --color-sage: #a8b5a0;          /* Secondary accent */
  --color-sage-light: #c4d4bc;    /* Sage backgrounds */
  --color-sage-dark: #8a9882;     /* Sage text */
  --color-coral: #e6a895;         /* Tertiary accent */
  
  /* ===== SPACING SCALE (8pt grid) ===== */
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-5: 1.5rem;   /* 24px */
  --space-6: 2rem;     /* 32px */
  --space-8: 3rem;     /* 48px */
  --space-10: 4rem;    /* 64px */
  --space-12: 6rem;    /* 96px */
  --space-16: 8rem;    /* 128px */
  
  /* Section Padding */
  --section-padding-y: clamp(3rem, 8vw, 6rem);  /* Responsive vertical padding */
  --section-padding-x: clamp(1rem, 4vw, 2rem);  /* Responsive horizontal padding */
  
  /* ===== TYPOGRAPHY ===== */
  /* Font Families */
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  
  /* Font Sizes */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */
  --text-6xl: 3.75rem;   /* 60px */
  
  /* Line Heights */
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 1.7;
  
  /* Letter Spacing */
  --tracking-tight: -0.02em;
  --tracking-normal: 0;
  --tracking-wide: 0.08em;
  --tracking-wider: 0.1em;
  --tracking-widest: 0.15em;
  
  /* ===== BORDER RADIUS ===== */
  --radius-none: 0;
  --radius-sm: 0.125rem;   /* 2px */
  --radius-md: 0.375rem;   /* 6px */
  --radius-lg: 0.5rem;     /* 8px */
  --radius-xl: 0.75rem;    /* 12px */
  --radius-full: 9999px;
  
  /* ===== SHADOWS ===== */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  
  /* ===== Z-INDEX SCALE ===== */
  --z-base: 1;
  --z-dropdown: 10;
  --z-sticky: 20;
  --z-fixed: 30;
  --z-modal: 40;
  --z-popover: 50;
  --z-tooltip: 60;
  
  /* ===== TRANSITIONS ===== */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slower: 800ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

**B) Update globals.css import**

```css
/* app/globals.css - Line 1 */
@import './design-tokens.css';
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**C) Update Tailwind config**

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: 'var(--color-ink)',
        porcelain: 'var(--color-porcelain)',
        shell: 'var(--color-shell)',
        harbor: {
          DEFAULT: 'var(--color-harbor)',
          light: 'var(--color-harbor-light)',
        },
        gold: {
          DEFAULT: 'var(--color-gold)',
          dark: 'var(--color-gold-dark)',
        },
        sage: {
          DEFAULT: 'var(--color-sage)',
          light: 'var(--color-sage-light)',
          dark: 'var(--color-sage-dark)',
        },
        coral: 'var(--color-coral)',
      },
      fontFamily: {
        serif: 'var(--font-serif)',
        sans: 'var(--font-sans)',
      },
      spacing: {
        // Map to 8pt grid
        '1': 'var(--space-1)',
        '2': 'var(--space-2)',
        '3': 'var(--space-3)',
        '4': 'var(--space-4)',
        '5': 'var(--space-5)',
        '6': 'var(--space-6)',
        '8': 'var(--space-8)',
        '10': 'var(--space-10)',
        '12': 'var(--space-12)',
        '16': 'var(--space-16)',
      },
      borderRadius: {
        'none': 'var(--radius-none)',
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        'full': 'var(--radius-full)',
      },
      zIndex: {
        'base': 'var(--z-base)',
        'dropdown': 'var(--z-dropdown)',
        'sticky': 'var(--z-sticky)',
        'fixed': 'var(--z-fixed)',
        'modal': 'var(--z-modal)',
        'popover': 'var(--z-popover)',
        'tooltip': 'var(--z-tooltip)',
      },
      transitionDuration: {
        'fast': 'var(--transition-fast)',
        'base': 'var(--transition-base)',
        'slow': 'var(--transition-slow)',
        'slower': 'var(--transition-slower)',
      },
    },
  },
  plugins: [],
}

export default config
```

---

### Task 2: Harmonize Typography ⏱️ 45 minutes

#### Create Typography Utility Classes

```css
/* app/globals.css - Add after design tokens */

/* ===== TYPOGRAPHY HIERARCHY ===== */

/* Headings */
.h1 {
  font-family: var(--font-serif);
  font-size: clamp(2.25rem, 6vw, 3.5rem);
  font-weight: 500;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-ink);
}

.h2 {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 500;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-ink);
}

.h3 {
  font-family: var(--font-serif);
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  font-weight: 500;
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-normal);
  color: var(--color-ink);
}

.h4 {
  font-family: var(--font-serif);
  font-size: var(--text-xl);
  font-weight: 600;
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-normal);
  color: var(--color-ink);
}

/* Body Text */
.body-text {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  line-height: var(--leading-loose);
  color: var(--color-harbor);
}

.body-text-lg {
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  line-height: var(--leading-loose);
  color: var(--color-harbor);
}

.body-text-sm {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
  color: var(--color-harbor);
}

/* Labels & Captions */
.label {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
  color: var(--color-harbor-light);
}

.caption {
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--leading-relaxed);
  color: var(--color-harbor-light);
}
```

#### Audit & Replace Ad-hoc Font Sizes

**Files to Update:**
```bash
# Find all components with inline font sizes
grep -r "text-\[" app/ components/ | wc -l
grep -r "style={{ fontSize" app/ components/ | wc -l
```

**Replace with utility classes:**
```tsx
// BEFORE:
<h1 style={{ fontSize: 'clamp(2rem, 8vw, 4.5rem)' }}>

// AFTER:
<h1 className="h1">
```

---

### Task 3: Create Layout Components ⏱️ 1.5 hours

#### A) Section Wrapper Component

```typescript
// components/Section.tsx
'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionProps {
  children: ReactNode
  className?: string
  bgColor?: 'white' | 'shell' | 'porcelain' | 'ink'
  padding?: 'default' | 'large' | 'small' | 'none'
  animate?: boolean
  id?: string
}

export default function Section({
  children,
  className = '',
  bgColor = 'white',
  padding = 'default',
  animate = true,
  id,
}: SectionProps) {
  const bgColors = {
    white: 'bg-white',
    shell: 'bg-shell',
    porcelain: 'bg-porcelain',
    ink: 'bg-ink text-white',
  }

  const paddings = {
    none: '',
    small: 'py-8 md:py-12',
    default: 'py-12 md:py-20',
    large: 'py-16 md:py-32',
  }

  const Wrapper = animate ? motion.section : 'section'
  const animationProps = animate
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
      }
    : {}

  return (
    <Wrapper
      id={id}
      className={`${bgColors[bgColor]} ${paddings[padding]} ${className}`}
      {...animationProps}
    >
      <div className="container-custom">{children}</div>
    </Wrapper>
  )
}
```

#### B) Reusable Card Components

```typescript
// components/ServiceCard.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  price: string
  priceNote?: string
  duration: string
  href: string
}

export default function ServiceCard({
  title,
  description,
  image,
  price,
  priceNote,
  duration,
  href,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <Link
        href={href}
        className="block bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-base"
      >
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-slow group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="h4 mb-2 group-hover:text-gold transition-colors">
            {title}
          </h3>
          <p className="body-text-sm text-harbor-light mb-4">
            {description}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between text-sm">
            <div>
              <p className="font-semibold text-ink">{price}</p>
              {priceNote && (
                <p className="caption text-sage">{priceNote}</p>
              )}
            </div>
            <p className="caption">{duration}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
```

```typescript
// components/ExperienceCard.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface ExperienceCardProps {
  title: string
  description: string
  image: string
  priceFrom: string
  features: string[]
  slug: string
  index: number
}

export default function ExperienceCard({
  title,
  description,
  image,
  priceFrom,
  features,
  slug,
  index,
}: ExperienceCardProps) {
  const isEven = index % 2 === 0

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Image */}
      <div className={isEven ? 'order-1' : 'order-1 lg:order-2'}>
        <div className="relative h-96 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className={isEven ? 'order-2' : 'order-2 lg:order-1'}>
        <h2 className="h2 mb-4">{title}</h2>
        <p className="body-text-lg text-harbor mb-6">{description}</p>
        <p className="text-2xl font-serif text-gold mb-6">{priceFrom}</p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className="text-gold mt-1">✓</span>
              <span className="body-text">{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          href={`/premium/${slug}`}
          className="btn-primary inline-block"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}
```

---

### Task 4: Centralize Motion Variants ⏱️ 30 minutes

```typescript
// lib/motion-variants.ts
import { Variants } from 'framer-motion'

/**
 * Centralized Framer Motion variants for consistent animations
 * Following luxury brand guidelines: subtle, purposeful, slow
 */

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

export const slideDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

// Hover animations (subtle for luxury feel)
export const hoverScale = {
  scale: 1.02,
  transition: {
    duration: 0.3,
    ease: [0.4, 0, 0.2, 1],
  },
}

export const hoverLift = {
  y: -4,
  transition: {
    duration: 0.3,
    ease: [0.4, 0, 0.2, 1],
  },
}

// Page transitions
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}
```

**Usage Example:**
```typescript
// BEFORE:
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>

// AFTER:
import { slideUp } from '@/lib/motion-variants'

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={slideUp}
>
```

---

### Task 5: Enhance Forms & CTAs ⏱️ 45 minutes

#### Standardized Button Component

```typescript
// components/Button.tsx
'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { hoverLift } from '@/lib/motion-variants'

type ButtonVariant = 'primary' | 'secondary' | 'gold' | 'dark' | 'light'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  animate?: boolean
  href?: string
  target?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  animate = true,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center
    font-sans font-semibold uppercase tracking-wider
    transition-all duration-base
    focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `

  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    gold: 'btn-gold',
    dark: 'btn-dark',
    light: 'btn-secondary-light',
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs min-h-[40px]',
    md: 'px-8 py-3 text-sm min-h-[48px]',
    lg: 'px-10 py-4 text-base min-h-[56px]',
  }

  const widthClass = fullWidth ? 'w-full' : ''

  const Component = animate ? motion.button : 'button'
  const animationProps = animate
    ? {
        whileHover: hoverLift,
        whileTap: { scale: 0.98 },
      }
    : {}

  return (
    <Component
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${widthClass}
        ${className}
      `}
      {...animationProps}
      {...props}
    >
      {children}
    </Component>
  )
}
```

---

### Task 6: Documentation Structure ⏱️ 30 minutes

```bash
# Create design docs folder
mkdir -p /docs/design

# Move design-related docs
mv BRAND_IDENTITY_CORE.md /docs/design/
mv DESIGN_REVIEW_SUMMARY.md /docs/design/
mv DESIGN_IMPROVEMENTS_PLAN_OCT_12.md /docs/design/
```

```markdown
<!-- docs/design/README.md -->
# Design System Documentation

## Core Documents
- [Brand Identity Core](./BRAND_IDENTITY_CORE.md) - Brand guidelines
- [Design Review](./DESIGN_REVIEW_SUMMARY.md) - Design analysis
- [Implementation Guide](./AI_DESIGN_REVIEW_IMPLEMENTATION.md) - This file

## Quick Reference
- **Colors:** See `app/design-tokens.css`
- **Typography:** `.h1`, `.h2`, `.body-text` classes in `globals.css`
- **Spacing:** 8pt grid system (`--space-*` variables)
- **Components:** Reusable in `/components`
- **Animations:** Centralized in `/lib/motion-variants.ts`

## For AI Developers
1. Always use design tokens (no hardcoded colors/sizes)
2. Use utility classes for typography
3. Import motion variants instead of writing inline
4. Follow 8pt grid for spacing
5. Use <Section> wrapper for consistent padding
6. Comment non-obvious design decisions
```

---

## 📋 IMPLEMENTATION CHECKLIST

### Phase 1: Foundation (2-3 hours)
- [ ] Create `app/design-tokens.css`
- [ ] Update `app/globals.css` import
- [ ] Update `tailwind.config.ts`
- [ ] Add typography utility classes
- [ ] Test with existing components

### Phase 2: Components (3-4 hours)
- [ ] Create `components/Section.tsx`
- [ ] Create `components/ServiceCard.tsx`
- [ ] Create `components/ExperienceCard.tsx`
- [ ] Create `components/Button.tsx`
- [ ] Update existing components to use new components

### Phase 3: Motion (1-2 hours)
- [ ] Create `lib/motion-variants.ts`
- [ ] Replace inline animation code
- [ ] Test all animations
- [ ] Ensure consistent timing

### Phase 4: Audit & Refactor (2-3 hours)
- [ ] Find and replace ad-hoc font sizes
- [ ] Remove inline styles where possible
- [ ] Ensure 8pt grid spacing
- [ ] Check responsive behavior
- [ ] Verify accessibility

### Phase 5: Documentation (1 hour)
- [ ] Create `/docs/design/` folder
- [ ] Move design docs
- [ ] Add inline comments
- [ ] Update README
- [ ] Create component usage examples

---

## 🎯 SUCCESS CRITERIA

### When Complete:
✅ All colors reference CSS variables  
✅ No hardcoded font sizes in components  
✅ All animations use centralized variants  
✅ Consistent spacing (8pt grid)  
✅ Reusable Section/Card components  
✅ Documentation in `/docs/design/`  
✅ Inline comments for design decisions  

---

## 📊 BEFORE/AFTER COMPARISON

### Before:
```tsx
<section className="py-16 bg-shell">
  <div className="max-w-7xl mx-auto px-4">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
      className="font-serif mb-6"
    >
      Title
    </motion.h2>
    <p style={{ color: '#4a4a4a', lineHeight: '1.7' }}>
      Body text
    </p>
  </div>
</section>
```

### After:
```tsx
import Section from '@/components/Section'
import { slideUp } from '@/lib/motion-variants'

<Section bgColor="shell" padding="default">
  <motion.h2 
    className="h2 mb-6"
    variants={slideUp}
    initial="hidden"
    animate="visible"
  >
    Title
  </motion.h2>
  <p className="body-text">
    Body text
  </p>
</Section>
```

---

## 🚀 NEXT STEPS

1. **Review this document** with development team
2. **Prioritize phases** based on impact
3. **Start with Phase 1** (design tokens) - foundation for everything
4. **Test incrementally** after each phase
5. **Document as you go** - add comments and examples

**Estimated Total Time:** 10-15 hours for complete implementation

**Recommendation:** Tackle Phase 1 immediately (highest impact, enables everything else)

---

**Created:** October 13, 2025  
**For:** AI Developer / Code Reviewer  
**Status:** Ready for implementation  
**Priority:** High (improves maintainability and consistency)


