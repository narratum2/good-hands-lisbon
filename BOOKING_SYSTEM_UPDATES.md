# 🔄 Booking System Updates: Request-Based Flow

## Executive Summary
Transitioning from instant "Book Now" to request-based "Request Service" system with on-site pricing.

## Key Changes Required

### 1. Booking Form (`components/BookingForm.tsx`)
**Current Status**: ✅ Already says "Submit Request"
**Updates Needed**:
- [ ] Change heading from "Let's Book You" → "Request Your Service"
- [ ] Update subheading to clarify request-based system
- [ ] Update success message to mention response time (2 hours)
- [ ] Add pricing disclaimer for on-site services

### 2. All CTAs Across Site
**Files to Update**:
- [ ] `app/page.tsx` - Homepage CTAs
- [ ] `app/partnerships/page.tsx` - Partnership CTAs
- [ ] `app/corporate/page.tsx` - Corporate CTAs
- [ ] `app/premium/*` - All premium service pages
- [ ] `components/HeroModern.tsx` - Hero CTAs
- [ ] `components/Services.tsx` - Service cards

**Change**: "Book Now" → "Request Service"

### 3. Pricing Updates
**On-Site Rates** (User Provided):
- Makeup & Sets: €150-250
- Eyebrows: €50
- Dry Hair Styling: €100

**Studio Rates**: Different (to be determined)

**Updates Needed**:
- [ ] `app/services/page.tsx` - Update all pricing
- [ ] Add "On-Site" vs "Studio" distinction
- [ ] Add pricing disclaimer

### 4. FAQ Updates
**File**: `app/faq/page.tsx`
**Updates Needed**:
- [ ] Change booking process FAQ to explain request system
- [ ] Update cancellation policy
- [ ] Add "How long until I get a response?" FAQ
- [ ] Update payment FAQ (request → quote → approval)

### 5. Messaging Changes
**Key Points to Communicate**:
1. "Request first, then we respond within 2 hours"
2. "On-site services have premium pricing"
3. "Studio bookings available at different rates"
4. "All bookings require approval"

## Implementation Priority
1. ✅ Booking Form (High - User-facing)
2. Homepage CTAs (High - Most traffic)
3. Service Pages Pricing (High - Conversion)
4. FAQ Updates (Medium - Support)
5. Premium Pages (Medium - Niche)

## Next Steps
1. Update BookingForm.tsx
2. Update all "Book Now" buttons
3. Update pricing across service pages
4. Update FAQs
5. Test full booking flow
6. Deploy and monitor

---
**Status**: In Progress
**Last Updated**: 2025-10-29

