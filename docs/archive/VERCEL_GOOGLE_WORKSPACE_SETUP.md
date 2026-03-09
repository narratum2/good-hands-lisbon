# 🚀 EXACT SETUP: Connect Vercel Domain to Google Workspace

**Last Updated**: October 28, 2025
**Time Required**: 15-30 minutes
**Difficulty**: Easy (copy-paste)

---

## ✅ OPTION A: Add Domain to EXISTING Google Workspace

Use this if you already have a Google Workspace account and want to add narratum.io to it.

### Step A1: Add Domain in Google Admin
1. Go to: https://admin.google.com
2. Log in with your Google Workspace admin account
3. Click **"Account"** (left sidebar)
4. Click **"Domains"**
5. Click **"Manage domains"**
6. Click **"Add domain"**
7. Choose domain type:
   - **"Add a domain alias"** - If you want same email addresses on both domains
     - Example: pascal@olddomain.com AND pascal@narratum.io go to same inbox
   - **"Add another domain"** - If you want separate email addresses
     - Example: Create new users like hello@narratum.io
8. Enter domain name: `narratum.io` (or your domain)
9. Click **"Add domain and start verification"**

### Step A2: Get Verification Code
Google will show you:
```
Add this TXT record to verify you own narratum.io:

Name/Host: @
Type: TXT  
Value: google-site-verification=ABC123XYZ789...
```

**COPY THIS VALUE** - You'll paste it in Vercel

### Step A3: Add TXT Record in Vercel
1. Go to: https://vercel.com/narratums-projects/good-hands-lisbon/settings/domains
2. Find `narratum.io` in your domain list
3. Click the **⋮** (three dots)
4. Click **"Manage DNS Records"** or **"Edit DNS"**
5. Click **"Add Record"**
6. Fill in:
   ```
   Type: TXT
   Name: @ (or leave blank if Vercel auto-fills)
   Value: [paste the google-site-verification code]
   TTL: Auto
   ```
7. Click **"Save"**

### Step A4: Verify in Google
1. Go back to Google Admin Console tab
2. Click **"Verify"** or **"Verify domain"**
3. Wait 30 seconds
4. If it fails: Wait 5 minutes and click "Verify" again
5. When successful: You'll see ✅ **"Domain verified!"**

### Step A5: Add MX Records for Email
1. In Google Admin, you'll see: **"Set up Gmail"** or similar
2. Click it to see MX records
3. Google shows you 5 MX records like:

```
Priority 1  → ASPMX.L.GOOGLE.COM
Priority 5  → ALT1.ASPMX.L.GOOGLE.COM
Priority 5  → ALT2.ASPMX.L.GOOGLE.COM
Priority 10 → ALT3.ASPMX.L.GOOGLE.COM
Priority 10 → ALT4.ASPMX.L.GOOGLE.COM
```

4. In Vercel DNS management, add EACH record:

**MX Record 1:**
```
Type: MX
Name: @
Value: ASPMX.L.GOOGLE.COM
Priority: 1
```
Click **"Save"**

**MX Record 2:**
```
Type: MX
Name: @
Value: ALT1.ASPMX.L.GOOGLE.COM
Priority: 5
```
Click **"Save"**

**MX Record 3:**
```
Type: MX
Name: @
Value: ALT2.ASPMX.L.GOOGLE.COM
Priority: 5
```
Click **"Save"**

**MX Record 4:**
```
Type: MX
Name: @
Value: ALT3.ASPMX.L.GOOGLE.COM
Priority: 10
```
Click **"Save"**

**MX Record 5:**
```
Type: MX
Name: @
Value: ALT4.ASPMX.L.GOOGLE.COM
Priority: 10
```
Click **"Save"**

### Step A6: Add SPF Record
In Vercel DNS, add:
```
Type: TXT
Name: @
Value: v=spf1 include:_spf.google.com ~all
```
Click **"Save"**

### Step A7: Add DKIM Record
1. In Google Admin, go to: **Apps** → **Google Workspace** → **Gmail**
2. Click **"Authenticate email"**
3. Select your domain: `narratum.io`
4. Click **"Generate new record"**
5. Google shows:
```
Name: google._domainkey
Type: TXT
Value: v=DKIM1; k=rsa; p=MIGfMA0GCS... [long string]
```

6. In Vercel DNS, add:
```
Type: TXT
Name: google._domainkey
Value: [paste the entire DKIM value from Google]
```
Click **"Save"**

### Step A8: Activate Gmail for New Domain
1. In Google Admin Console
2. Go to domain settings for `narratum.io`
3. Click **"Activate Gmail"**
4. Wait 15-60 minutes for DNS propagation
5. You'll see: ✅ **"Gmail activated"**

### Step A9: Create Email Addresses
1. Go to: https://admin.google.com
2. Click **"Users"**
3. Click **"Add new user"** (or edit existing user)
4. If domain alias: Your existing users automatically get @narratum.io addresses
5. If separate domain: Create new users with @narratum.io addresses

### Step A10: Test Email
1. Go to: https://mail.google.com
2. Log in with your new email (e.g., pascal@narratum.io)
3. Send test email to yourself
4. Check it works both ways

---

## ✅ OPTION B: Create NEW Google Workspace Account

Use this if you DON'T have Google Workspace yet.

### Step B1: Sign Up for Google Workspace
1. Go to: https://workspace.google.com
2. Click **"Get Started"**
3. Enter business name: `Good Hands` or `Narratum`
4. Choose: **"Just you"** or number of employees
5. Enter current email (for notifications): your personal email
6. Click **"Next"**

### Step B2: Add Your Domain
1. Google asks: "Do you have a domain?"
2. Select: **"Yes, I have one I can use"**
3. Enter: `narratum.io` (the domain you bought on Vercel)
4. Click **"Next"**

### Step B3: Create Your Admin Account
```
First name: Pascal
Last name: Frey
Username: pascal (becomes pascal@narratum.io)
Password: [create strong password - SAVE THIS!]
```
Click **"Next"**

### Step B4: Choose Plan
- Select **"Business Starter"** ($6/user/month)
- Enter payment details
- Click **"Agree and continue"**

### Step B5: Verify Domain Ownership
Google shows:
```
Add this TXT record:

Name: @
Type: TXT
Value: google-site-verification=ABC123XYZ789...
```

**NOW FOLLOW STEPS A3-A10 ABOVE** (they're identical from here)

---

## 🎯 DNS RECORDS SUMMARY

When done, your Vercel DNS should have:

```
TXT Record (Verification):
@ → google-site-verification=ABC123...

MX Records (Email receiving):
@ → ASPMX.L.GOOGLE.COM (Priority 1)
@ → ALT1.ASPMX.L.GOOGLE.COM (Priority 5)
@ → ALT2.ASPMX.L.GOOGLE.COM (Priority 5)
@ → ALT3.ASPMX.L.GOOGLE.COM (Priority 10)
@ → ALT4.ASPMX.L.GOOGLE.COM (Priority 10)

TXT Record (SPF - sending):
@ → v=spf1 include:_spf.google.com ~all

TXT Record (DKIM - security):
google._domainkey → v=DKIM1; k=rsa; p=MIG...
```

**Total**: 8 DNS records

---

## ⏱️ Timeline

- Adding domain in Google: **2 minutes**
- Adding DNS records in Vercel: **5 minutes**
- DNS propagation (verification): **5-30 minutes**
- DNS propagation (email): **30 minutes - 2 hours**
- **Total time**: 1-3 hours from start to working email

---

## ✅ Verification Checklist

After setup, verify everything works:

### Domain Verification:
- [ ] TXT record added in Vercel DNS
- [ ] Google shows "Domain verified" ✅
- [ ] No error messages in Google Admin

### Email Receiving:
- [ ] All 5 MX records added in Vercel DNS
- [ ] Sent test email TO pascal@narratum.io
- [ ] Email arrived in Gmail inbox

### Email Sending:
- [ ] SPF record added in Vercel DNS
- [ ] DKIM record added in Vercel DNS
- [ ] Sent test email FROM pascal@narratum.io
- [ ] Email arrived (not in spam)

### Website:
- [ ] narratum.io loads your Vercel site
- [ ] SSL/HTTPS is active (🔒)
- [ ] No certificate errors

---

## 🆘 Troubleshooting

### "Verification failed" in Google
- **Wait**: DNS takes 5-30 minutes to propagate
- **Check**: Verify TXT record was saved in Vercel DNS
- **Try again**: Click "Verify" again after 15 minutes

### "MX records not found"
- **Wait**: DNS takes up to 2 hours to propagate
- **Check**: Verify all 5 MX records in Vercel DNS
- **Test**: Use https://mxtoolbox.com/SuperTool.aspx?action=mx

### Email not arriving
- **Check spam folder**
- **Verify**: All DNS records are saved
- **Wait**: Can take up to 48 hours (usually 1-2 hours)

### Email goes to spam when sending
- **DKIM**: Make sure DKIM record is added
- **SPF**: Verify SPF record is correct
- **Wait**: Reputation builds over time (1-2 weeks)

---

## 💰 Cost

### If Using Existing Workspace:
- **No extra cost** if domain alias
- **$6/month per user** if adding new users
- **Domain cost**: ~$40-60/year (already paid to Vercel)

### If Creating New Workspace:
- **Google Workspace**: $6/month (first user)
- **Domain**: ~$40-60/year (already paid to Vercel)
- **Total**: ~$112/year

---

## 📧 Email Addresses to Create

Recommended for Good Hands:

1. **hello@narratum.io** - Main contact
2. **bookings@narratum.io** - Appointment scheduling
3. **support@narratum.io** - Customer service
4. **pascal@narratum.io** - Your personal work email

**Pro Tip**: Use email aliases (free) instead of separate accounts:
- All 4 addresses above → forward to pascal@narratum.io
- Saves money ($6/month per user)
- Still looks professional
- One inbox to manage

**To create alias**:
1. Google Admin → Users → Select user
2. Click "User information"
3. Click "Email aliases"
4. Add: hello, bookings, support
5. Done!

---

## 🎯 Quick Copy-Paste Commands

### For DNS Lookups (Terminal)
Check if your MX records are live:
```bash
dig MX narratum.io +short
```

Check TXT records:
```bash
dig TXT narratum.io +short
```

Check DKIM:
```bash
dig TXT google._domainkey.narratum.io +short
```

---

## 📞 Support Links

- **Vercel Support**: https://vercel.com/support
- **Google Workspace Support**: https://support.google.com/a
- **MX Toolbox (DNS checker)**: https://mxtoolbox.com
- **DNS Propagation Checker**: https://dnschecker.org

---

## ✨ After Setup Complete

Once email is working:

1. **Update website contact forms** with new email
2. **Add email signatures** in Gmail settings
3. **Set up email forwarding** from old addresses (if any)
4. **Configure mobile devices** (Gmail app)
5. **Enable 2FA** on Google Workspace for security

---

**Questions? Issues?** 
- Check troubleshooting section above
- Use MX Toolbox to verify DNS records
- Wait 2 hours for DNS propagation before panicking

**Ready to start? Begin with Option A (existing workspace) or Option B (new workspace) above!**

