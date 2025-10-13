# 📸 Missing Images TODO - October 13, 2025

**Priority:** HIGH  
**Blocking:** No (site works with fallback images)  
**Impact:** Medium (better visual consistency)

---

## 🎯 IMAGES NEEDED

### 1. Coastal Photoshoot Image
**File:** `/public/brand-images/experience-photoshoot.png`  
**Status:** ⚠️ MISSING - Currently using fallback  
**Dimensions:** 1200 x 800px (3:2 ratio)  
**Theme:** Coastal photography, makeup artist styling model, beach/cliffs background

**Suggested Content:**
- Model getting makeup done at coastal location
- Professional camera/photography equipment visible
- Lisbon coast (Cascais, Cabo da Roca, Sintra coast)
- Waterproof makeup products
- Golden hour lighting
- Elegant, professional styling

**Keywords for AI Generation:**
"Professional makeup artist styling model at Portuguese coastal location, ocean cliffs, golden hour, waterproof makeup, camera equipment, elegant photoshoot preparation, Lisbon coast"

---

### 2. VIP Membership Image
**File:** `/public/brand-images/experience-membership-vip.png`  
**Status:** ⚠️ MISSING - Currently using fallback  
**Dimensions:** 1200 x 800px (3:2 ratio)  
**Theme:** Exclusive, luxury, VIP access, premium membership

**Suggested Content:**
- Elegant VIP card or membership materials
- Luxury beauty salon interior (exclusive area)
- Premium beauty products
- Sophisticated, exclusive atmosphere
- Gold/sage green accents matching brand
- High-end, boutique feel

**Keywords for AI Generation:**
"Luxury VIP beauty membership card on marble surface, exclusive salon interior, premium beauty products, gold accents, sophisticated elegant atmosphere, boutique spa aesthetic, membership privileges"

---

### 3. Corporate Wellness (IMPROVE)
**File:** `/public/brand-images/experience-corporate-wellness.png`  
**Status:** ⚠️ EXISTS but doesn't match context  
**Dimensions:** 1200 x 800px (3:2 ratio)  
**Theme:** Office/corporate environment, team wellness, professional setting

**Current Issue:** Image doesn't convey "corporate" or "office" context

**Should Show:**
- Professional office or modern workspace
- Beauty/wellness services in corporate setting
- Team members receiving services
- Executive grooming/styling
- Conference room or lounge setting
- Professional, corporate atmosphere

**Keywords for AI Generation:**
"Corporate wellness beauty services in modern office, professional team receiving spa treatments, executive grooming, workplace wellness, conference room massage setup, corporate self-care, Lisbon business district"

---

## 🎨 IMAGE SPECIFICATIONS

### Technical Requirements:
- **Format:** PNG or JPG (PNG preferred for quality)
- **Dimensions:** 1200 x 800px minimum (3:2 aspect ratio)
- **File Size:** < 500KB (optimized)
- **Quality:** High resolution, professional photography
- **Color Profile:** sRGB

### Brand Guidelines:
- **Color Palette:** Ink, Porcelain, Shell, Gold, Sage Green
- **Aesthetic:** Design Hotels-inspired, sophisticated, editorial
- **Mood:** Elegant, professional, approachable luxury
- **Avoid:** Stock photo feel, overly posed, fake-looking

### Content Guidelines:
- **Models:** Diverse, natural-looking, Lisbon/Portuguese context
- **Settings:** Recognizable Lisbon locations or upscale interiors
- **Lighting:** Natural, golden hour, or soft studio lighting
- **Composition:** Professional, balanced, breathing room
- **Text:** None (text added programmatically)

---

## 📂 USER-PROVIDED IMAGES

### Status: AWAITING CLARIFICATION
**User mentioned:** "pictures in the repo folder"  
**Location:** Not found in search

**Need to Know:**
1. **Where is this folder?** (Exact path)
   - Desktop?
   - Downloads?
   - External drive?
   - Cloud storage?

2. **What pictures are there?**
   - How many images?
   - What subjects/themes?
   - Are they for experiences? Services? Blog?

3. **What should they replace?**
   - Specific pages/sections?
   - All brand images?
   - Only new experiences?

**Action:** User to provide:
```bash
# Please provide the exact path, e.g.:
/Users/pascalfrey/Desktop/good-hands-images/
# Or
/Users/pascalfrey/Downloads/repo/pictures/
```

---

## 🔧 TEMPORARY SOLUTION (Current State)

### Fallback Images in Use:
1. **Photoshoots:** Using wedding image as fallback
   - File referenced: `experience-photoshoot.png` 
   - Actual: Will show broken image icon OR 404
   - Impact: Low (users can still book, just see placeholder)

2. **Membership:** Using generic makeup image as fallback
   - File referenced: `experience-membership-vip.png`
   - Actual: Will show broken image icon OR 404
   - Impact: Low (users can still book, just see placeholder)

3. **Corporate:** Using existing but non-ideal image
   - File: `experience-corporate-wellness.png` (exists)
   - Issue: Doesn't convey office/corporate setting
   - Impact: Medium (image exists but context mismatch)

---

## ✅ SOLUTION OPTIONS

### Option A: AI-Generated Images (FASTEST - 30 min)
Use Midjourney, DALL-E, or Stable Diffusion with prompts above

**Pros:**
- Fast (30 min total)
- Can match exact specifications
- Consistent brand aesthetic
- Fully customizable

**Cons:**
- May look AI-generated
- Costs (if using paid service)
- Requires prompting skill

**Recommended Tools:**
1. **Midjourney** ($$$ - Best quality)
2. **DALL-E 3** ($$ - Good quality)
3. **Stable Diffusion** (Free - Variable quality)

---

### Option B: Stock Photos (QUICK - 1 hour)
Purchase from Unsplash Pro, Pexels, or Adobe Stock

**Pros:**
- Professional quality
- Real photography
- Legal/licensed
- Quick to find

**Cons:**
- May look generic
- Costs (€10-50 per image)
- Less control over specifics
- Might not match brand perfectly

**Recommended Sites:**
1. **Unsplash** (Free or Pro)
2. **Pexels** (Free)
3. **Adobe Stock** ($$$ - Best selection)

---

### Option C: User-Provided Images (BEST - If Available)
Use images from "repo folder" user mentioned

**Pros:**
- Authentic
- Custom shot for Good Hands
- No AI or stock feel
- Unique

**Cons:**
- Needs location clarification
- May need optimization
- Unknown quality until seen

**Action:** Ask user for folder location

---

### Option D: Professional Photography (IDEAL - Long-term)
Hire photographer in Lisbon for custom shoot

**Pros:**
- Highest quality
- Perfect brand match
- Authentic Lisbon locations
- Full ownership

**Cons:**
- Expensive (€500-2000)
- Time-consuming (1-2 weeks)
- Requires planning

**Timeline:** 2-4 weeks  
**Recommendation:** Future investment after launch

---

## 🚀 IMMEDIATE ACTION PLAN

### Today (Option A or C):

1. **Check with User:**
   - Ask for "repo folder" location
   - If found, optimize and upload (30 min)

2. **If No User Images:**
   - Generate 3 images with AI (30 min)
   - Upload to `/public/brand-images/`
   - Verify on staging
   - Deploy

### Image Checklist:
- [ ] `experience-photoshoot.png` (Coastal)
- [ ] `experience-membership-vip.png` (VIP)
- [ ] `experience-corporate-wellness.png` (Updated)

### Upload Process:
```bash
# 1. Place images in correct folder
cd /Users/pascalfrey/Repo/narratumio/_good-hands/public/brand-images/

# 2. Verify files exist
ls -la experience-*.png

# 3. Optimize (if needed)
# Use ImageOptim or similar

# 4. Commit and push
git add public/brand-images/experience-*.png
git commit -m "Add missing experience images: photoshoot, membership VIP, corporate"
git push origin main

# 5. Verify deployment
# Wait 2-3 min, check live site
```

---

## 📊 CURRENT IMAGE INVENTORY

### Experience Images (5 total needed):
- ✅ `experience-bridal-beauty.png` - EXISTS (Weddings)
- ✅ `experience-wellness-retreat.png` - EXISTS (Retreats)
- ⚠️ `experience-corporate-wellness.png` - EXISTS but needs improvement
- ❌ `experience-photoshoot.png` - MISSING
- ❌ `experience-membership-vip.png` - MISSING

### Service Images (4 total):
- ✅ `category-hair-styling.png` - EXISTS
- ✅ `category-makeup.png` - EXISTS
- ✅ `service-facial-treatment.png` - EXISTS
- ✅ `service-makeup-application.png` - EXISTS

### Category Images:
- ✅ `category-weddings.png` - EXISTS
- ✅ All other categories - COVERED

**Status:** 2/5 experience images missing (40% gap)

---

## 🎯 SUCCESS CRITERIA

### When Complete:
✅ All 5 experience pages have unique, appropriate images  
✅ Images match brand aesthetic (Design Hotels vibe)  
✅ No duplicate images across experiences  
✅ Optimized file sizes (< 500KB each)  
✅ Proper alt text for accessibility  
✅ Deployed and visible on live site  

---

## 📝 NOTES FOR USER

**We need to know:**
1. Where is the "repo folder" with pictures you mentioned?
2. Can you provide the exact file path?
3. Are those images for experiences, services, or blog?

**In the meantime:**
- Site is functional (no blocking issues)
- Fallback images show (not ideal but works)
- Can continue with other tasks
- Images can be added anytime without code changes

**Priority:** Medium (not blocking launch, but needed for polish)

---

**Created:** October 13, 2025  
**Status:** Awaiting user clarification on image folder location  
**Blocking:** No  
**Time to Fix:** 30 min once images provided or generated


