# Good Hands - Design System & Wireframe

## Design Philosophy
**Luxury Minimalism**: Clean, spacious, sophisticated. Every element serves a purpose.

## Color Palette

### Primary Colors
- **Ink** `#1a1a1a` - Primary text, dark backgrounds
- **White** `#ffffff` - Primary backgrounds, text on dark
- **Shell** `#f5f5f5` - Subtle section backgrounds

### Accent Colors
- **Gold** `#c9a961` - Primary CTA, highlights (use sparingly)
- **Sage** `#a8b5a0` - Secondary accent, calm sections
- **Harbor** `#666666` - Secondary text, descriptions

### Usage Rules
- White space is NOT empty space—it's breathing room
- Gold only for primary CTAs and key highlights
- Sage for testimonials, secondary sections
- Shell for alternating section backgrounds

## Typography Scale

```
H1: 3.5rem (56px) - Page titles
H2: 2.5rem (40px) - Section titles
H3: 1.75rem (28px) - Subsection titles
H4: 1.25rem (20px) - Card titles
Body: 1rem (16px) - Standard text
Small: 0.875rem (14px) - Captions, labels
```

## Spacing System (8pt Grid)

```
xs:  4px  - Icon padding
sm:  8px  - Tight spacing
md:  16px - Default spacing
lg:  24px - Section padding
xl:  32px - Component gaps
2xl: 48px - Section gaps
3xl: 64px - Large section padding
4xl: 96px - Hero padding
```

## Component Hierarchy

### Homepage Wireframe

```
┌─────────────────────────────────────────────────────┐
│                   NAVBAR (Fixed)                    │
│  Logo              Services  Experiences  About     │
│                                      [Book Now]     │
├─────────────────────────────────────────────────────┤
│                                                     │
│                    HERO SECTION                     │
│        Full-height with image + dark overlay        │
│              Large H1 + Subtitle + CTAs             │
│                   Height: 80vh                      │
│                                                     │
├─────────────────────────────────────────────────────┤
│              TRUST SIGNALS (White BG)               │
│         Stats | Verified | Featured In              │
│                   Padding: 48px                     │
├─────────────────────────────────────────────────────┤
│          VALUE PROPOSITION (Shell BG)               │
│              "You Know the Feeling"                 │
│         Problem/Solution Grid (2 columns)           │
│              How It Works CTA Box                   │
│                  Padding: 96px                      │
├─────────────────────────────────────────────────────┤
│              SEARCH BAR (White BG)                  │
│      Service Search + Category + Book Button        │
│                  Padding: 64px                      │
├─────────────────────────────────────────────────────┤
│              SERVICES GRID (White BG)               │
│         4 Main Services (2x2 grid)                  │
│      Each: Image + Title + Price + CTA Arrow        │
│                  Padding: 96px                      │
├─────────────────────────────────────────────────────┤
│         CATEGORIES ROW (Porcelain BG)               │
│      6 Category Cards (Horizontal scroll)           │
│                  Padding: 64px                      │
├─────────────────────────────────────────────────────┤
│          EXPERIENCES PREVIEW (White BG)             │
│       Weddings | Retreats | Corporate               │
│              3-column grid layout                   │
│                  Padding: 96px                      │
├─────────────────────────────────────────────────────┤
│          TESTIMONIALS (Sage Light BG)               │
│         3 testimonials with avatars                 │
│           Sage gradient background                  │
│                  Padding: 96px                      │
├─────────────────────────────────────────────────────┤
│           GUIDES PREVIEW (White BG)                 │
│         3 Featured Guides Grid                      │
│                  Padding: 96px                      │
├─────────────────────────────────────────────────────┤
│          JOURNAL PREVIEW (Shell BG)                 │
│         Latest 3 Articles Grid                      │
│                  Padding: 96px                      │
├─────────────────────────────────────────────────────┤
│               FAQ SECTION (White BG)                │
│         Accordion-style with Schema                 │
│                  Padding: 96px                      │
├─────────────────────────────────────────────────────┤
│           BOOKING FORM (Shell BG)                   │
│      Multi-step form OR simple contact              │
│              Large, clear inputs                    │
│                  Padding: 96px                      │
├─────────────────────────────────────────────────────┤
│              FOOTER (Ink BG, White Text)            │
│      5-column grid | Social | Legal                 │
│                  Padding: 64px                      │
└─────────────────────────────────────────────────────┘
```

## Design Principles

### 1. Visual Hierarchy
- Clear distinction between primary, secondary, tertiary elements
- Size, weight, and spacing create natural reading flow
- CTAs stand out without being aggressive

### 2. White Space
- Generous padding: minimum 64px between sections
- Content max-width: 1200px for readability
- Cards have breathing room: 24px+ gaps

### 3. Typography
- Font pairing: Inter (sans-serif) + Playfair Display (serif)
- Line height: 1.7 for body, 1.3 for headings
- Letter spacing: -0.01em for large headings

### 4. Images
- Always have alt text
- Use consistent aspect ratios (16:9, 4:3, 1:1)
- Optimize for web (WebP, lazy loading)
- Dark overlays for text readability (60% opacity)

### 5. Interactions
- Hover states: subtle scale (1.02) or shadow increase
- Transitions: 300ms ease-in-out
- Focus states: 2px gold ring
- Touch targets: minimum 44x44px

### 6. Responsive Design
- Mobile-first approach
- Breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px)
- Stack columns on mobile
- Larger touch targets on mobile (48x48px)

## Component Patterns

### Card Pattern
```tsx
<div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
  <Image /> {/* Aspect ratio preserved */}
  <h3 className="text-xl font-serif mb-2">Title</h3>
  <p className="text-harbor mb-4">Description</p>
  <Link className="text-gold hover:underline">Learn More →</Link>
</div>
```

### Button Hierarchy
1. **Primary** (Gold BG, Ink text) - Main actions
2. **Secondary** (Ink border, transparent BG) - Alternative actions
3. **Tertiary** (Text link with arrow) - Low-priority actions

### Section Pattern
```tsx
<section className="section-padding bg-white">
  <div className="container-custom max-w-6xl">
    <h2 className="text-4xl font-serif text-center mb-12">Section Title</h2>
    {/* Content */}
  </div>
</section>
```

## Accessibility Standards

- WCAG 2.1 AA compliance minimum
- Color contrast ratio: 4.5:1 for normal text, 3:1 for large text
- Keyboard navigation support
- Screen reader friendly
- Focus indicators visible
- Touch targets: 44x44px minimum

## Animation Guidelines

- Use sparingly and purposefully
- Entrance: fade-in + slide-up (0.6s)
- Hover: scale (0.3s) or shadow (0.3s)
- Scroll-triggered: stagger children by 0.1s
- No parallax on mobile (performance)

## Page Templates

### Service Page Layout
```
Hero (60vh) → Service Description → Pricing → Process → FAQ → Related Services → Booking CTA
```

### Neighborhood Page Layout
```
Hero (60vh) → Introduction → Why This Area → Getting There → What to Do → Map → Booking CTA
```

### Blog Post Layout
```
Hero (50vh) → Metadata → Article Content → Related Posts → Newsletter Signup
```

## Quality Checklist

Before deploying any page:
- [ ] All text readable (contrast check)
- [ ] Images optimized and have alt text
- [ ] CTAs clear and accessible
- [ ] Mobile responsive (test on 375px width)
- [ ] Touch targets 44px minimum
- [ ] Loading states for dynamic content
- [ ] Error states for forms
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] No horizontal scroll on mobile

