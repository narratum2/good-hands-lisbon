# 🤖 NOTION AI VERIFICATION PROMPT

Copy and paste this into Notion AI to verify your database schemas:

---

## For BOOKINGS Database:

```
Check this database and list all properties with their exact names and types. 
For each property, show:
1. Property name (exact capitalization)
2. Property type
3. If it's a Select type, list all options

Then verify these required properties exist with exact names:
- "Customer Name" (Title)
- "Customer Email" (Email)
- "Service" (Select with options: Hair Styling, Nails, Spa, Makeup, Wellness)
- "Neighborhood" (Select)
- "Date" (Date)
- "Status" (Select with options: New, Confirmed, Completed, Cancelled)
- "Message" (Text)
- "Created Date" (Date)

Flag any mismatches in capitalization or type.
```

---

## For CUSTOMERS Database:

```
Check this database and list all properties with their exact names and types.
For each property, show:
1. Property name (exact capitalization)
2. Property type
3. If it's a Select type, list all options

Then verify these required properties exist with exact names:
- "Name" (Title)
- "Email" (Email)
- "Phone" (Phone)
- "Status" (Select with options: New, Active, Inactive)
- "Source" (Text)
- "Created Date" (Date)

Flag any mismatches in capitalization or type.
```

---

## Alternative: Manual Check

If Notion AI doesn't work, manually verify in each database:

### BOOKINGS Database Checklist:

Click on each column header and verify:

- [ ] **Customer Name** - Type: Title (not Text)
- [ ] **Customer Email** - Type: Email (not Text)
- [ ] **Service** - Type: Select
  - [ ] Has option: "Hair Styling" (exact spelling)
  - [ ] Has option: "Nails"
  - [ ] Has option: "Spa"
  - [ ] Has option: "Makeup"
  - [ ] Has option: "Wellness"
- [ ] **Neighborhood** - Type: Select (any options OK)
- [ ] **Date** - Type: Date (not Text)
- [ ] **Status** - Type: Select
  - [ ] Has option: "New" (exact spelling)
  - [ ] Has option: "Confirmed"
  - [ ] Has option: "Completed"
  - [ ] Has option: "Cancelled"
- [ ] **Message** - Type: Text (not Rich Text)
- [ ] **Created Date** - Type: Date (not Created Time)

### CUSTOMERS Database Checklist:

- [ ] **Name** - Type: Title (not Text)
- [ ] **Email** - Type: Email (not Text)
- [ ] **Phone** - Type: Phone (not Text)
- [ ] **Status** - Type: Select
  - [ ] Has option: "New"
  - [ ] Has option: "Active"
  - [ ] Has option: "Inactive"
- [ ] **Source** - Type: Text
- [ ] **Created Date** - Type: Date

---

## Common Issues to Check:

1. **Property Type Mismatches:**
   - ❌ "Customer Email" is Text → Should be Email
   - ❌ "Phone" is Text → Should be Phone
   - ❌ "Date" is Text → Should be Date
   - ❌ "Customer Name" is Text → Should be Title

2. **Capitalization Issues:**
   - ❌ "customer name" → Should be "Customer Name"
   - ❌ "Customer email" → Should be "Customer Email"
   - ❌ "message" → Should be "Message"
   - ❌ "created date" → Should be "Created Date"

3. **Select Options Missing:**
   - ❌ Service select doesn't have "Hair Styling"
   - ❌ Status select doesn't have "New"

4. **Wrong Property Type:**
   - ❌ Message is "Rich Text" → Should be "Text"
   - ❌ Created Date is "Created Time" → Should be "Date"

---

## What to Report Back:

After checking, tell me:

1. ✅ All properties exist with correct names and types
   OR
2. ❌ List any mismatches found

Example response:
```
BOOKINGS:
✅ Customer Name - Title
✅ Customer Email - Email
❌ Service - Select (missing "Hair Styling" option)
✅ Date - Date
❌ Status - Select (has "Pending" instead of "New")
✅ Message - Text
✅ Created Date - Date

CUSTOMERS:
✅ All correct
```

---

*This will help us identify the exact issue preventing Notion integration from working.*

