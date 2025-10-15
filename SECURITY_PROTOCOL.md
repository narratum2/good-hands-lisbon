# 🔐 SECURITY PROTOCOL - MANDATORY

## ❌ NEVER COMMIT THESE

### Secrets & API Keys
- ❌ API keys (Notion, Stripe, SendGrid, etc.)
- ❌ Database credentials
- ❌ OAuth tokens
- ❌ Private keys
- ❌ Webhook secrets
- ❌ Any string starting with: `sk_`, `ntn_`, `key_`, `secret_`

### Sensitive Information
- ❌ Email addresses (except public ones like hello@)
- ❌ Phone numbers
- ❌ Personal customer data
- ❌ Internal comments not meant for public
- ❌ Pricing strategies or margins
- ❌ Business plans or financials

### Infrastructure Details
- ❌ Internal server IPs
- ❌ Database connection strings
- ❌ Admin panel URLs
- ❌ Debug endpoints
- ❌ Staging environment URLs with credentials

---

## ✅ ALWAYS DO THIS

### Before Every Commit
1. ✅ Search for `ntn_`, `sk_`, `key_`, `secret_`, `api_`
2. ✅ Check for email addresses
3. ✅ Check for phone numbers
4. ✅ Review comments for internal notes
5. ✅ Use .env.example with placeholders only

### File Management
1. ✅ `.env.local` → NEVER commit (in .gitignore)
2. ✅ `.env.example` → Template only, no real values
3. ✅ Documentation → Use `[YOUR_KEY_HERE]` placeholders
4. ✅ Comments → Public-safe only

### Environment Variables
1. ✅ Add secrets in Vercel dashboard ONLY
2. ✅ Never hardcode in source files
3. ✅ Use `process.env.SECRET_NAME` in code
4. ✅ Prefix public vars with `NEXT_PUBLIC_`

---

## 🚨 IF SECRET IS EXPOSED

### Immediate Actions:
1. **Revoke the secret** immediately in the service (Notion, Stripe, etc.)
2. **Generate new secret**
3. **Update in Vercel** dashboard
4. **Redeploy** the site
5. **Check GitHub history** - may need to purge

### For Notion:
1. Go to https://www.notion.so/my-integrations
2. Find "Good Hands" integration
3. Click **Refresh Secret**
4. Update in Vercel
5. Redeploy

---

## ✅ PROPER SECURITY CHECKLIST

Before any git push:
- [ ] No API keys in code
- [ ] No secrets in comments
- [ ] No real emails/phones (except public contact)
- [ ] .env.local not tracked
- [ ] All secrets in Vercel dashboard
- [ ] Documentation uses placeholders
- [ ] No internal notes or TODOs visible

---

## 📝 APPROVED FOR PUBLIC REPO

### Safe to Commit:
- ✅ Code (without hardcoded secrets)
- ✅ Documentation (with placeholders)
- ✅ Public configuration files
- ✅ README files
- ✅ Package.json
- ✅ Public contact info (hello@goodhands.com)

### NOT Safe to Commit:
- ❌ .env.local (actual values)
- ❌ Any file with real secrets
- ❌ Customer data or PII
- ❌ Internal strategy documents
- ❌ Credentials or access tokens

---

## 🛡️ MY COMMITMENT

**I will:**
1. ✅ Always check for secrets before committing
2. ✅ Use placeholders in all documentation
3. ✅ Never expose API keys, tokens, or credentials
4. ✅ Keep customer data private
5. ✅ Review every file before git push

**I will NEVER:**
1. ❌ Commit real API keys or secrets
2. ❌ Include customer email/phone in code
3. ❌ Push internal notes or strategies
4. ❌ Expose sensitive business information

---

**This protocol is mandatory for all future work.** 🔒

