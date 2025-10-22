# 🗄️ Notion Database Setup Guide

## Quick Navigation
- [Bookings Database](#bookings-database-setup)
- [Customers Database](#customers-database-setup)
- [Chat Database](#chat-database-setup)

---

## 📅 Bookings Database Setup

**Database ID**: `e50edfbee2e34df8b4566edc8bdc1189`

### Required Properties

Create these properties in your Notion database with **EXACT** names:

| Property Name | Type | Configuration |
|--------------|------|---------------|
| **Customer Name** | Title | (Default title field) |
| **Customer Email** | Email | - |
| **Service** | Select | Options: Haircut & Styling, Makeup, Nails, Wedding Beauty, Event Styling, etc. |
| **Neighborhood** | Select | Options: Chiado, Baixa, Alfama, Bairro Alto, etc. |
| **Date** | Date | Include time |
| **Status** | Select | Options: Pending, Confirmed, Completed, Cancelled |
| **Notes** | Text | Rich text field |
| **UTM Source** | Text | Rich text field |
| **Created Date** | Date | - |

### Step-by-Step Instructions

1. **Go to your Bookings database** in Notion
   - URL should contain: `e50edfbee2e34df8b4566edc8bdc1189`

2. **Click "+" to add a new property**

3. **Add each property from the table above**:
   - Type the exact property name
   - Select the correct type from the dropdown
   - For Select fields, add the options listed

4. **Verify the Title field**:
   - Your database should have "Customer Name" as the title field
   - If it's called something else, rename it to "Customer Name"

5. **Test it**:
   - Once properties are set up, submit a booking from your website
   - Check if it appears in this Notion database

---

## 👤 Customers Database Setup

**Database ID**: `e06a065f262147738e47005090b94e02`

### Required Properties

| Property Name | Type | Configuration |
|--------------|------|---------------|
| **Name** | Title | (Default title field) |
| **Email** | Email | - |
| **Phone** | Phone | - |
| **Source** | Text | Rich text field |
| **UTM Source** | Text | Rich text field |
| **UTM Campaign** | Text | Rich text field |
| **Status** | Select | Options: New, Active, Inactive |
| **Created Date** | Date | - |

### Step-by-Step Instructions

1. **Go to your Customers database** in Notion
   - URL should contain: `e06a065f262147738e47005090b94e02`

2. **Add properties** following the same steps as Bookings

3. **Ensure "Name" is the title field**

---

## 💬 Chat Database Setup

**Database ID**: `51c3d3aae9fc4d01bc85c3f90d99c0a8`

### Required Properties

| Property Name | Type | Configuration |
|--------------|------|---------------|
| **Message** | Title | (Default title field) |
| **Customer Email** | Email | - |
| **Customer Name** | Text | Rich text field |
| **Source** | Select | Options: Website Chat, Email, Phone |
| **Full Message** | Text | Rich text field (for longer messages) |
| **Timestamp** | Date | Include time |

### Step-by-Step Instructions

1. **Go to your Chat database** in Notion
   - URL should contain: `51c3d3aae9fc4d01bc85c3f90d99c0a8`

2. **Add properties** following the same pattern

---

## ✅ Quick Verification Checklist

After setting up all properties, verify:

- [ ] All property names match EXACTLY (case-sensitive!)
- [ ] Title fields are named correctly (Customer Name, Name, Message)
- [ ] Email fields are type "Email" (not Text)
- [ ] Phone fields are type "Phone" (not Text)
- [ ] Date fields include time option enabled
- [ ] Select fields have at least one option added

---

## 🧪 Testing the Integration

### Test Bookings:
1. Go to: https://good-hands-seven.vercel.app/book
2. Fill out the form completely
3. Submit
4. Check your Notion Bookings database - you should see a new entry!

### Test Chat:
1. Go to: https://good-hands-seven.vercel.app
2. Scroll down 50% to see the chat button
3. Send a test message
4. Check your Notion Chat database

---

## 🚨 Common Issues & Fixes

### Issue: "Booking received (development mode)" but nothing in Notion
**Solution**: Property names don't match. Go back and verify spelling/casing.

### Issue: Properties created but still not working
**Solution**: 
1. Check that you're using the correct database ID
2. Verify the database is shared with your Notion integration
3. Make sure your Notion API key has the right permissions

### Issue: How do I share my database with the integration?
**Solution**:
1. Open your Notion database
2. Click "Share" in the top right
3. Click "Invite"
4. Search for your integration name (Good Hands or whatever you named it)
5. Give it "Full access"
6. Repeat for all 3 databases

---

## 📞 Need Help?

If bookings still don't appear after:
1. Setting up all properties correctly
2. Sharing databases with your integration
3. Verifying environment variables in Vercel

Then check the Vercel logs for specific error messages:
- Go to Vercel dashboard → Your project → Deployments
- Click on the latest deployment
- Go to "Functions" tab
- Look for `/api/bookings` errors

The error message will tell you exactly which property is missing or misconfigured!

---

## 🎉 Success Indicators

You'll know it's working when:
- ✅ Test booking appears in Notion Bookings database
- ✅ Customer record appears in Notion Customers database
- ✅ Chat messages appear in Notion Chat database
- ✅ API test shows `"notion": true` instead of `"notion": false`

---

**Last Updated**: October 22, 2025
**Status**: Ready to configure

