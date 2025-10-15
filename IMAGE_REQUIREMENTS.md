# Image Requirements & Photography Guide

## Critical Issues to Fix
1. ❌ Black text on dark images (unreadable)
2. ❌ Generic stock photos (not location-specific)
3. ❌ Repetitive imagery (spa products over and over)
4. ❌ No actual Lisbon locations shown

## Solution: Professional Photography Plan

---

## NEIGHBORHOOD IMAGES - Location-Specific

### Chiado
**What we need:**
- Photo: Actual salon interior in Chiado WITH sage green arches visible
- Landmark shot: Rua Garrett with A Brasileira café
- Detail shot: Elegant window display of Chiado boutique salon
- **Text overlay:** White text on dark overlay (80% opacity)

### Príncipe Real
**What we need:**
- Photo: Bohemian salon interior with natural light
- Landmark shot: The miradouro with Tagus view
- Detail shot: Garden café where clients wait
- **Text overlay:** White text on dark overlay (80% opacity)

### Baixa
**What we need:**
- Photo: Grand boulevard salon with historic architecture
- Landmark shot: Praça do Comércio or Rua Augusta
- Detail shot: Classic Portuguese tiles in salon
- **Text overlay:** White text on dark overlay (80% opacity)

### Alfama
**What we need:**
- Photo: Traditional treatment room with authentic character
- Landmark shot: Narrow cobblestone streets
- Detail shot: Fado music venue nearby
- **Text overlay:** White text on dark overlay (80% opacity)

### Belém
**What we need:**
- Photo: Riverside spa with Tagus views
- Landmark shot: Jerónimos Monastery or Torre de Belém
- Detail shot: Pastel de nata café
- **Text overlay:** White text on dark overlay (80% opacity)

### Sintra
**What we need:**
- Photo: Wellness retreat in enchanted hills
- Landmark shot: Pena Palace or Quinta da Regaleira
- Detail shot: Forest spa setting
- **Text overlay:** White text on dark overlay (80% opacity)

### Cascais
**What we need:**
- Photo: Coastal spa with ocean views
- Landmark shot: Beach clubs or marina
- Detail shot: Outdoor treatment cabana
- **Text overlay:** White text on dark overlay (80% opacity)

---

## SERVICE CATEGORY IMAGES

### Hair Services
**Current problem:** Generic salon interior
**Need:**
- Action shot: Colorist applying balayage (hands visible, focused)
- Before/after: Actual transformation
- Detail: Color swatches, professional products
- **NO:** Empty salon chairs, generic interiors

### Nail Services
**Current problem:** Product flatlay (boring)
**Need:**
- Action shot: Nail technician working on client's hands
- Detail: Intricate nail art being created
- Result: Perfect manicure with Lisbon background
- **NO:** Product bottles, generic spa towels

### Skincare/Facial Services
**Current problem:** Spa products with steam (overused)
**Need:**
- Action shot: Facialist applying treatment to client
- Detail: Natural Portuguese skincare ingredients
- Result: Glowing skin close-up
- **NO:** Generic spa product arrangements

### Makeup Services
**Current problem:** Makeup products on table
**Need:**
- Action shot: Makeup artist working on client for event
- Detail: Makeup brushes in action
- Result: Finished look (wedding/event ready)
- **NO:** Unused makeup palettes

### Wellness/Massage Services
**Current problem:** Rolled towels and candles (cliché)
**Need:**
- Action shot: Massage therapist working
- Detail: Hot stone placement, aromatherapy oils
- Environment: Actual spa room in Lisbon salon
- **NO:** Generic spa product arrangements

---

## TEXT READABILITY SOLUTIONS

### Option 1: Dark Overlay (Recommended)
```css
background: linear-gradient(
  to bottom,
  rgba(26, 26, 26, 0) 0%,
  rgba(26, 26, 26, 0.6) 50%,
  rgba(26, 26, 26, 0.9) 100%
)
```
- Text color: White (#FFFFFF)
- Text shadow: 0 2px 4px rgba(0,0,0,0.3)

### Option 2: Colored Background Box
```css
background: rgba(201, 169, 97, 0.95) /* Gold with opacity */
padding: 16px 24px
border-radius: 4px
```
- Text color: Ink (#1a1a1a)
- Better for less artistic photos

### Option 3: Blur Background
```css
backdrop-filter: blur(8px)
background: rgba(255, 255, 255, 0.9)
```
- Text color: Ink (#1a1a1a)
- Modern iOS-style

---

## PHOTOGRAPHY SPECIFICATIONS

### Technical Requirements
- **Format:** WebP with JPEG fallback
- **Dimensions:** 
  - Hero: 1920x1080 (landscape)
  - Cards: 800x800 (square)
  - Banners: 1600x600 (wide)
- **File size:** <200KB per image
- **Quality:** 80% compression
- **Aspect ratio:** Consistent per section

### Composition Rules
1. **Rule of thirds:** Main subject off-center
2. **Negative space:** Room for text overlay
3. **Depth:** Blurred background, sharp foreground
4. **Lighting:** Natural light preferred, no harsh shadows
5. **Color palette:** Align with brand (sage, gold, natural tones)

### What Makes a Good Photo
✅ **Good:**
- Real people (with permission/model release)
- Actual Lisbon locations recognizable
- Action shots (services being performed)
- Natural expressions, authentic moments
- Professional but not sterile

❌ **Bad:**
- Empty rooms
- Product arrangements without context
- Generic stock photos
- Dark, moody lighting without purpose
- Overly staged/fake-looking

---

## IMAGE SOURCING OPTIONS

Since we can't generate images:

### Option 1: Professional Photography (Best)
- Hire Lisbon-based photographer
- Cost: €500-1500 for full shoot
- Timeline: 1-2 weeks
- Result: Perfect, authentic, on-brand

### Option 2: Partner Salons (Good)
- Request photos from partner salons
- Must have model releases
- May need editing for consistency
- Cost: Free to €200 per image

### Option 3: Stock Photography (Temporary)
- Use Unsplash/Pexels (free, attribution required)
- Look for "Lisbon salon" "Portugal beauty" etc.
- Must edit to add location context
- Replace with real photos ASAP

### Option 4: AI Generation (Limited Use)
- Midjourney/DALL-E for conceptual images
- Can't use for neighborhoods (not real)
- Good for: Icons, backgrounds, patterns
- Bad for: Locations, people, specific venues

---

## IMMEDIATE FIXES (Without New Photos)

1. **Increase text contrast**
   - Add 80-90% dark overlay to ALL images with text
   - Use white text with drop shadow
   - Ensure 7:1 contrast ratio (WCAG AAA)

2. **Add location context**
   - Overlay neighborhood names in Portuguese + English
   - Add landmark icons/illustrations
   - Include brief location description

3. **Vary the imagery**
   - Don't repeat similar shots
   - Mix action shots, details, wide shots
   - Alternate between people and places

4. **Better captions**
   - Describe what makes this location unique
   - Add specific salon/spa names (with permission)
   - Include neighborhood character

---

## COMPONENT-SPECIFIC REQUIREMENTS

### Neighborhood Cards
- Image: Actual neighborhood landmark
- Overlay: 60% dark gradient bottom-up
- Text: White, 24px, serif font
- Subtitle: Neighborhood character in 2-3 words
- Hover: Zoom image 1.05x, lighten overlay to 40%

### Service Cards
- Image: Service being performed (action shot)
- Overlay: Optional, only if needed for text
- Text: Minimal, let image tell story
- Price: Overlaid on clean background section

### Testimonial Sections
- Image: Real client (with permission) or abstract beauty
- No overlay needed if background is clean
- Text: Dark text on light section OR light text on dark image

---

## PRIORITY ORDER

### Phase 1 (Now): Fix contrast issues
1. Add proper overlays to all neighborhood images
2. Change all text to white on dark overlays
3. Increase overlay opacity to 80%

### Phase 2 (This week): Source temp images
1. Find better Unsplash photos for each neighborhood
2. At least show actual Lisbon locations
3. Replace generic spa product photos

### Phase 3 (Next 2 weeks): Professional photography
1. Hire photographer in Lisbon
2. Shoot 5-7 locations
3. Get action shots of services
4. Capture authentic client experiences

### Phase 4 (Ongoing): Partner content
1. Request photos from partner salons
2. Get proper model releases
3. Build image library for future use

---

## DESIGN SYSTEM UPDATE

Add to globals.css:
```css
/* Image overlay utilities */
.overlay-dark-60 {
  background: linear-gradient(
    to bottom,
    rgba(26, 26, 26, 0),
    rgba(26, 26, 26, 0.6)
  );
}

.overlay-dark-80 {
  background: linear-gradient(
    to bottom,
    rgba(26, 26, 26, 0),
    rgba(26, 26, 26, 0.8)
  );
}

.text-with-shadow {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

/* Ensure readable text on images */
.text-on-image {
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}
```

---

## ACCESSIBILITY NOTE

All images must have:
1. Descriptive alt text
2. Sufficient contrast (4.5:1 minimum)
3. No text in images (use HTML text overlays)
4. Proper loading states (blur placeholders)

