# 🎯 EXECUTIVE PRICING & BOOKING FLOW UPDATE

**Date**: October 27, 2025  
**Status**: In Progress

---

## 📋 EXECUTIVE REQUIREMENTS

### 1. **Booking System Change**
- **From**: Instant "Book Now" approval
- **To**: "Request Service" → Response system
- **Reason**: Need to review each booking before approval

### 2. **Pricing Structure**

#### **On-Site Services** (Hotel/Apartment):

**Makeup & Sets:**
- Makeup & hairstyle set (on dry hair): from €150 / 60-120min
- Express makeup & hairstyle set (clean & dry hair): €100 / ~45min
- Glam makeup: from €80 / ~60min
- Daylight makeup: €60 / ~45min

**Eyebrows:**
- Eyebrow set (design + tinting): €60
- Eyebrow lifting: €100
- Eyelash tinting: €40

**Dry Hair Styling:**
- Waves on iron: €60
- Glam updo (Hollywood waves, sleek bun): €80
- Add blow dry: +€20

**Studio Services:**
- Different pricing structure
- More services available
- To be specified separately

---

## 🔄 CHANGES REQUIRED

### A. **All CTAs** (30+ locations)
- ❌ "Book Now"
- ❌ "Book Your Experience"
- ❌ "Reserve Your Time"
- ✅ "Request Service"
- ✅ "Send Request"
- ✅ "Request Appointment"

### B. **Booking Form**
- Change title: "Book Your Appointment" → "Request Your Service"
- Update button: "Submit Booking" → "Send Request"
- Add disclaimer: "We'll respond within 2 hours to confirm your appointment"
- Update success message: "Request received" instead of "Booking confirmed"

### C. **FAQs**
- Update booking process explanation
- Clarify request → response → confirmation flow
- Update cancellation policy timing

### D. **Service Pages**
- Update all pricing
- Add "from €X" for variable pricing
- Distinguish on-site vs studio
- Update duration estimates

### E. **Homepage**
- Update hero CTA
- Update final CTA section
- Update trust signals

### F. **Emails/Notifications**
- Update confirmation emails
- Change wording from "booked" to "requested"
- Set proper expectations

---

## 📍 FILES TO UPDATE

### Critical:
1. `/app/book/page.tsx` - Main booking form
2. `/app/page.tsx` - Homepage CTAs
3. `/components/HeroModern.tsx` - Hero CTA
4. `/app/faq/page.tsx` - FAQ explanations
5. `/app/services/*/page.tsx` - All service pricing
6. `/components/Services.tsx` - Service cards
7. `/app/api/bookings/route.ts` - API messaging
8. `/lib/notion.ts` - Notion status updates

### Secondary:
9. All neighborhood pages
10. All premium service pages
11. Footer CTAs
12. Email templates
13. Confirmation messages

---

## 💰 PRICING UPDATES NEEDED

### Current (Incorrect):
- Hair: From €105
- Nails: From €60
- Makeup: From €92
- Skincare: From €125
- Wellness: From €120

### New (Correct - On-Site):
- Makeup & hairstyle set: from €150
- Express makeup & set: €100
- Glam makeup: from €80
- Daylight makeup: €60
- Eyebrow set: €60
- Eyebrow lifting: €100
- Eyelash tinting: €40
- Waves on iron: €60
- Glam updo: €80

---

## 🎯 MESSAGING CHANGES

### Before (Instant Booking):
- "Book now and get confirmation within 2 hours"
- "Your booking is confirmed"
- "Reserve your spot"

### After (Request-Based):
- "Request service and we'll respond within 2 hours"
- "Your request has been received"
- "Submit your request"
- "We'll review and confirm your appointment"

---

## ✅ EXECUTION PLAN

1. ✅ Create this executive summary
2. 🔄 Update all CTAs (Book → Request)
3. 🔄 Update booking form UI and copy
4. 🔄 Update all pricing across site
5. 🔄 Update FAQs for request flow
6. 🔄 Update API/backend messaging
7. 🔄 Test complete flow
8. 🔄 Deploy all changes

---

**Status**: Ready to execute  
**Priority**: 🔴 CRITICAL - Business model change  
**ETA**: 30-45 minutes for complete update

