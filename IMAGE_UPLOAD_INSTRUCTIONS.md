# Image Upload Instructions — Pictures Good Hands

## Current Status
I found 24 new Gemini-generated images in:
```
/Users/pascalfrey/Repo/Pictures Good Hands/
```

There are already 16 similar images in the gemini subfolder:
```
/Users/pascalfrey/Repo/narratumio/_good-hands/public/brand-images/gemini/
```

## New Images Found (24 total):
1. Gemini_Generated_Image_2d5lff2d5lff2d5l.png (NEW)
2. Gemini_Generated_Image_5ohs8g5ohs8g5ohs.png (EXISTS)
3. Gemini_Generated_Image_9fnyr99fnyr99fny.png (NEW)
4. Gemini_Generated_Image_ahblzpahblzpahbl.png (NEW)
5. Gemini_Generated_Image_fpi0k2fpi0k2fpi0.png (EXISTS)
6. Gemini_Generated_Image_gdzeeogdzeeogdze.png (EXISTS)
7. Gemini_Generated_Image_gn5pzdgn5pzdgn5p.png (EXISTS)
8. Gemini_Generated_Image_gstjj0gstjj0gstj.png (EXISTS)
9. Gemini_Generated_Image_hlzpj0hlzpj0hlzp.png (EXISTS)
10. Gemini_Generated_Image_j17nd0j17nd0j17n.png (EXISTS)
11. Gemini_Generated_Image_k5cobk5cobk5cobk.png (NEW)
12. Gemini_Generated_Image_k6g8ajk6g8ajk6g8.png (EXISTS)
13. Gemini_Generated_Image_mef03nmef03nmef0.png (NEW)
14. Gemini_Generated_Image_n7l5y6n7l5y6n7l5.png (EXISTS)
15. Gemini_Generated_Image_njokmpnjokmpnjok.png (NEW)
16. Gemini_Generated_Image_nk9qe7nk9qe7nk9q.png (EXISTS)
17. Gemini_Generated_Image_nwe034nwe034nwe0.png (EXISTS)
18. Gemini_Generated_Image_prln3nprln3nprln.png (EXISTS)
19. Gemini_Generated_Image_q3y8k0q3y8k0q3y8.png (NEW)
20. Gemini_Generated_Image_si847qsi847qsi84.png (EXISTS)
21. Gemini_Generated_Image_tecjhttecjhttecj.png (EXISTS)
22. Gemini_Generated_Image_tqgy7qtqgy7qtqgy.png (EXISTS)
23. Gemini_Generated_Image_xdtkw6xdtkw6xdtk.png (EXISTS)
24. Gemini_Generated_Image_ysnpdwysnpdwysnp.png (NEW)

**8 NEW images need to be copied**

---

## Manual Steps (Quick & Easy):

### Option 1: Using Finder (Easiest)
1. Open Finder
2. Navigate to `/Users/pascalfrey/Repo/Pictures Good Hands/`
3. Select all PNG files (Cmd+A)
4. Copy them (Cmd+C)
5. Navigate to `/Users/pascalfrey/Repo/narratumio/_good-hands/public/brand-images/gemini/`
6. Paste (Cmd+V)
7. When asked about duplicates, choose "Keep both" or "Skip" (the existing ones are already there)

### Option 2: Using Terminal (If you prefer)
```bash
cd /Users/pascalfrey/Repo/narratumio/_good-hands

# Copy all images (will skip duplicates with -n flag)
cp -n "/Users/pascalfrey/Repo/Pictures Good Hands/"*.png public/brand-images/gemini/

# Verify
ls -1 public/brand-images/gemini/ | wc -l
# Should show 24 files
```

---

## What These Images Are For

Based on the existing gemini folder structure, these images appear to be AI-generated brand assets for:
- Hero sections
- Blog post headers
- Service category images
- Neighborhood page backgrounds
- Premium experience visuals

---

## Next Steps After Copying

1. **Review the images** - Check which ones are high quality and suitable for the site
2. **Rename meaningfully** - Instead of `Gemini_Generated_Image_xyz.png`, use descriptive names like:
   - `hero-chiado-neighborhood.png`
   - `service-hair-styling.png`
   - `blog-lisbon-beauty-guide.png`
   - `experience-coastal-photoshoot.png`

3. **Update image references** in code - Replace placeholder images with the new ones
4. **Delete unused images** - Remove any that don't fit the brand aesthetic

---

## Suggested Image Assignments

Based on current needs, I recommend using the new images for:

### High Priority:
- **Coastal Photoshoot page** (`/premium/photoshoots`) - needs hero image
- **Neighborhood pages** (Alfama, Chiado, Príncipe Real, etc.) - could use better hero images
- **Blog posts** - several articles using placeholder images
- **Services pages** - hair, makeup, nails, skincare, wellness

### Example Renaming:
```bash
# After reviewing each image, rename like this:
mv Gemini_Generated_Image_2d5lff2d5lff2d5l.png hero-coastal-photoshoot.png
mv Gemini_Generated_Image_9fnyr99fnyr99fny.png neighborhood-alfama-hero.png
mv Gemini_Generated_Image_ahblzpahblzpahbl.png service-hair-luxury.png
# etc.
```

---

## Terminal Issues Note

I was experiencing terminal command interruptions, which is why I created this document instead. The commands above should work fine when you run them directly in your terminal.

---

## Summary

**Action Required:**
1. Copy 8 new images from `Pictures Good Hands` to `public/brand-images/gemini/`
2. Review all 24 images in the gemini folder
3. Rename the best ones with descriptive names
4. Update page components to use these images
5. Commit and deploy

**Estimated Time:** 30 minutes

---

*Created: October 13, 2025*  
*Status: Awaiting manual file copy*

