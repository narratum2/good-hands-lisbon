# Content & SEO Maintenance Strategy

**Created:** October 13, 2025  
**Purpose:** Ensure all content, metadata, structured data, and SEO remain aligned and consistent across the site.

---

## 🎯 The Problem

As the site grows, we have:
- **60+ pages** (neighborhoods, services, blog posts, experiences)
- **Multiple schema types** (Organization, Article, Breadcrumb, Service, FAQPage, HowTo)
- **Metadata** on every page (title, description, keywords, OG tags)
- **Business info** scattered across components (phone, email, social links, stats)
- **Service listings** in multiple places (homepage, services page, schema markup)

**Without a strategy**, this leads to:
- ❌ Outdated phone numbers in some places but not others
- ❌ Different review counts in different schema blocks
- ❌ Inconsistent service descriptions
- ❌ Wrong URLs after domain changes
- ❌ SEO metadata that doesn't match actual content

---

## ✅ Our Solution: Centralized Configuration

### **Single Source of Truth: `lib/seo-config.ts`**

All business data, SEO metadata, and schema configurations now live in **ONE FILE**:

```
lib/seo-config.ts
├── BUSINESS_INFO          # Contact, URLs, stats, social media
├── SERVICE_AREAS          # All neighborhoods we serve
├── SERVICE_CATEGORIES     # Hair, spa, makeup, etc.
├── PREMIUM_EXPERIENCES    # Weddings, retreats, etc.
├── SEO_TEMPLATES          # Meta descriptions for each page type
└── Helper Functions       # Generate schema, breadcrumbs, etc.
```

---

## 🔧 How to Use It

### **Example 1: Update Phone Number**

**Before** (had to update 10+ files):
```tsx
// In Navbar.tsx
<a href="tel:+351-XXX-XXX-XXX">
// In Footer.tsx
<a href="tel:+351-XXX-XXX-XXX">
// In layout.tsx schema
telephone: '+351-XXX-XXX-XXX',
// ... (8 more places)
```

**After** (update ONE place):
```ts
// lib/seo-config.ts
export const BUSINESS_INFO = {
  phone: '+351-912-345-678', // ← Change here only
}
```

All pages automatically updated! ✅

---

### **Example 2: Add Breadcrumb Schema to a Page**

**Before** (copy-paste 30 lines, manually type URLs):
```tsx
<script type="application/ld+json">
  {JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    // ... 25 more lines
  })}
</script>
```

**After** (2 lines):
```tsx
import { getBreadcrumbSchema } from '@/lib/seo-config'

<script type="application/ld+json">
  {JSON.stringify(getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
  ]))}
</script>
```

---

### **Example 3: Generate Article Schema for Blog Post**

```tsx
import { getArticleSchema } from '@/lib/seo-config'

<script type="application/ld+json">
  {JSON.stringify(getArticleSchema({
    headline: 'Complete Spa & Wellness Guide for Lisbon',
    description: 'Expert recommendations for massage, facials...',
    datePublished: '2025-01-15',
    keywords: ['spa lisbon', 'massage', 'wellness'],
    path: '/blog/lisbon-spa-wellness-guide',
  }))}
</script>
```

Auto-includes:
- ✅ Organization info (name, logo, URL)
- ✅ Publisher info
- ✅ Correct base URL
- ✅ Fallback image if none provided

---

## 📋 Maintenance Checklist

### **Monthly Tasks** (5 minutes)

- [ ] Update `BUSINESS_INFO.stats` with latest numbers
  - Review count
  - Clients served
  - Professionals in network
- [ ] Check `BUSINESS_INFO.social` links are correct
- [ ] Verify `SERVICE_CATEGORIES` prices are current

### **Quarterly Tasks** (15 minutes)

- [ ] Review and update `SEO_TEMPLATES` meta descriptions
- [ ] Audit service descriptions for accuracy
- [ ] Add new neighborhoods to `SERVICE_AREAS` if expanded
- [ ] Check Google Search Console for schema errors

### **Annual Tasks** (1 hour)

- [ ] Full SEO audit using Screaming Frog or Semrush
- [ ] Update all blog post dates if refreshed
- [ ] Review and update all service pricing
- [ ] Check structured data with Google Rich Results Test

---

## 🚀 Migration Plan

We're gradually migrating all pages to use `seo-config.ts`:

### Phase 1: Core Schema (In Progress)
- [x] Create `lib/seo-config.ts`
- [x] Add Article schema to blog posts
- [ ] Migrate `layout.tsx` to use `getOrganizationSchema()`
- [ ] Migrate all pages to use `getBreadcrumbSchema()`

### Phase 2: Service Pages
- [ ] Update all service pages to use `SERVICE_CATEGORIES`
- [ ] Generate service schema automatically
- [ ] Centralize pricing

### Phase 3: Neighborhood Pages
- [ ] Update all 8 neighborhood pages to use `SERVICE_AREAS`
- [ ] Auto-generate meta descriptions from template
- [ ] Consistent schema across all neighborhoods

### Phase 4: Components
- [ ] Update Navbar to use `BUSINESS_INFO`
- [ ] Update Footer to use `BUSINESS_INFO`
- [ ] Update all social media links to use `BUSINESS_INFO.social`

---

## 🧪 Testing Strategy

### **Before Publishing Changes:**

1. **Build Test**
   ```bash
   npm run build
   ```
   Ensures no TypeScript errors.

2. **Schema Validation**
   - Use [Google Rich Results Test](https://search.google.com/test/rich-results)
   - Paste URL or HTML
   - Verify all schema types are valid

3. **Metadata Check**
   - Use [Metatags.io](https://metatags.io/)
   - Verify OG images, titles, descriptions

4. **Manual Spot Check**
   - Visit 3-5 random pages
   - View source
   - Confirm schema present and correct

---

## 📊 Tools for Monitoring

### **Google Search Console**
- Submit sitemap: `https://goodhands.com/sitemap.xml`
- Monitor "Enhancements" for schema errors
- Check "Coverage" for indexing issues

### **Schema Validator**
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

### **SEO Audit Tools**
- [Screaming Frog](https://www.screamingfrog.co.uk/) (desktop app)
- [Ahrefs Site Audit](https://ahrefs.com/)
- [Semrush Site Audit](https://www.semrush.com/)

### **AI Search Monitoring**
- [BrightEdge DataCube](https://www.brightedge.com/) - Track AI citations
- [SearchGPT Analytics](https://searchgpt.com/) - Monitor ChatGPT appearances
- Manual searches on:
  - ChatGPT with web search
  - Perplexity
  - Google SGE (Search Generative Experience)

---

## 🎓 Best Practices

### **When Adding New Content:**

1. **New Blog Post?**
   - Use `getArticleSchema()` for structured data
   - Use `getBreadcrumbSchema()` for navigation
   - Add to `journal/page.tsx` articles array

2. **New Service?**
   - Add to `SERVICE_CATEGORIES` in `seo-config.ts`
   - Will auto-populate in Organization schema
   - Create dedicated service page with `getServiceSchema()`

3. **New Neighborhood?**
   - Add to `SERVICE_AREAS` in `seo-config.ts`
   - Clone existing neighborhood page template
   - Update breadcrumbs and meta descriptions

4. **New Experience Package?**
   - Add to `PREMIUM_EXPERIENCES` in `seo-config.ts`
   - Create detail page
   - Add schema markup

### **When Updating Business Info:**

✅ **DO:**
- Update `BUSINESS_INFO` in `seo-config.ts`
- Rebuild and test
- Deploy

❌ **DON'T:**
- Manually update individual files
- Forget to update schema
- Skip the build test

---

## 🤖 AI Search Optimization

### **What AI Engines Look For:**

1. **Structured Data (JSON-LD)**
   - Organization info
   - Service details
   - Reviews & ratings
   - Location data

2. **Clear, Descriptive Content**
   - Natural language
   - Question-answer format
   - Semantic HTML

3. **Authority Signals**
   - Expert content
   - Citations & references
   - Social proof (reviews, testimonials)

### **Our Implementation:**

✅ **Organization Schema** - Complete business profile  
✅ **Service Schema** - Each service fully described  
✅ **Article Schema** - Blog content optimized  
✅ **Breadcrumb Schema** - Clear site hierarchy  
✅ **FAQ Schema** - Direct answers to common questions  
✅ **HowTo Schema** - Step-by-step processes  
✅ **Review Schema** - Social proof via aggregateRating  

### **Monitoring AI Appearances:**

**Monthly Check:**
- Search "best beauty concierge Lisbon" in ChatGPT
- Search "spa services Lisbon" in Perplexity
- Track if Good Hands appears in results
- Note citation text used

**What to Track:**
- Date of search
- Platform (ChatGPT, Perplexity, Google SGE)
- Query used
- Did we appear? (Yes/No)
- Position (1st, 2nd, 3rd, etc.)
- What content was cited?

---

## 🔄 Version Control

Keep this strategy updated:

- **v1.0** - October 13, 2025 - Initial strategy created
- **v1.1** - TBD - After migration to seo-config complete
- **v2.0** - TBD - After first quarter performance review

---

## 💡 Quick Reference

| Task | File to Update | Impact |
|------|---------------|--------|
| Change phone number | `lib/seo-config.ts` → `BUSINESS_INFO.phone` | Site-wide |
| Update review count | `lib/seo-config.ts` → `BUSINESS_INFO.stats.reviewCount` | All schema |
| Add service | `lib/seo-config.ts` → `SERVICE_CATEGORIES` | Services page, schema |
| Add neighborhood | `lib/seo-config.ts` → `SERVICE_AREAS` | Organization schema |
| Update social links | `lib/seo-config.ts` → `BUSINESS_INFO.social` | Footer, schema |
| Change domain | `lib/seo-config.ts` → `BUSINESS_INFO.baseUrl` | **EVERYTHING** |

---

## 🆘 Troubleshooting

### **Schema Not Appearing in Google**
1. Check Google Search Console → Enhancements
2. Use Rich Results Test on the page
3. Verify `<script type="application/ld+json">` is in the HTML source
4. Wait 1-2 weeks for Google to recrawl

### **Outdated Info Still Showing**
1. Clear Next.js cache: `rm -rf .next`
2. Rebuild: `npm run build`
3. Redeploy to Vercel
4. Hard refresh browser (Cmd+Shift+R)

### **TypeScript Errors**
1. Check `seo-config.ts` has correct types
2. Import from `@/lib/seo-config` not relative path
3. Run `npm run type-check`

---

**Remember:** The goal isn't perfection—it's **consistency** and **maintainability**. Update one file, update everywhere! 🚀

