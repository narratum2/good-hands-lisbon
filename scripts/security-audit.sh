#!/bin/bash

# ============================================
# Good Hands - Comprehensive Security Audit
# ============================================

echo "🔒 Starting Security Audit for Good Hands..."
echo "============================================"
echo ""

PROJECT_DIR="/Users/pascalfrey/Repo/good-hands"
REPORT_FILE="$PROJECT_DIR/SECURITY_REPORT.md"

# Initialize report
cat > "$REPORT_FILE" << 'EOF'
# 🔒 Security Audit Report - Good Hands

**Generated:** $(date)
**Auditor:** Automated Security Scanner

---

## Executive Summary

This report identifies security vulnerabilities, misconfigurations, and best practice violations in the Good Hands codebase.

---

EOF

echo "## 1. Exposed Secrets & API Keys" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

echo "📍 Checking for exposed API keys and secrets..."

# Check for hardcoded API keys
echo "### Hardcoded API Keys Found:" >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
grep -rn "AIzaSy" "$PROJECT_DIR" --include="*.tsx" --include="*.ts" --include="*.js" 2>/dev/null | head -20 >> "$REPORT_FILE"
grep -rn "sk-" "$PROJECT_DIR" --include="*.tsx" --include="*.ts" --include="*.js" 2>/dev/null | head -10 >> "$REPORT_FILE"
grep -rn "api_key\s*=" "$PROJECT_DIR" --include="*.tsx" --include="*.ts" --include="*.js" 2>/dev/null | head -10 >> "$REPORT_FILE"
grep -rn "apiKey\s*[:=]" "$PROJECT_DIR" --include="*.tsx" --include="*.ts" --include="*.js" 2>/dev/null | head -10 >> "$REPORT_FILE"
grep -rn "secret\s*[:=]" "$PROJECT_DIR" --include="*.tsx" --include="*.ts" --include="*.js" 2>/dev/null | grep -v "node_modules" | head -10 >> "$REPORT_FILE"
grep -rn "password\s*[:=]" "$PROJECT_DIR" --include="*.tsx" --include="*.ts" --include="*.js" 2>/dev/null | grep -v "node_modules" | head -10 >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

echo "## 2. XSS Vulnerabilities" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

echo "📍 Checking for XSS vulnerabilities..."

echo "### Dangerous HTML Injection Patterns:" >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
grep -rn "dangerouslySetInnerHTML" "$PROJECT_DIR" --include="*.tsx" --include="*.ts" 2>/dev/null | grep -v "node_modules" >> "$REPORT_FILE"
grep -rn "innerHTML" "$PROJECT_DIR" --include="*.tsx" --include="*.ts" --include="*.js" 2>/dev/null | grep -v "node_modules" | head -10 >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

echo "## 3. Insecure External Links" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

echo "📍 Checking for insecure external link patterns..."

echo "### External Links Missing rel='noopener noreferrer':" >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
grep -rn 'target="_blank"' "$PROJECT_DIR" --include="*.tsx" --include="*.ts" 2>/dev/null | grep -v "noopener" | grep -v "node_modules" | head -20 >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

echo "## 4. Environment Variables & Configuration" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

echo "📍 Checking environment configuration..."

echo "### .env Files (should NOT be committed):" >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
find "$PROJECT_DIR" -name ".env*" -not -path "*/node_modules/*" 2>/dev/null >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

echo "### Environment Variable Usage:" >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
grep -rn "process.env" "$PROJECT_DIR" --include="*.tsx" --include="*.ts" --include="*.js" 2>/dev/null | grep -v "node_modules" | head -20 >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

echo "## 5. Form Security" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

echo "📍 Checking form security..."

echo "### Form Submissions Without CSRF Protection:" >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
grep -rn "<form" "$PROJECT_DIR" --include="*.tsx" 2>/dev/null | grep -v "node_modules" >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

echo "### Input Validation Patterns:" >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
grep -rn "onSubmit" "$PROJECT_DIR" --include="*.tsx" 2>/dev/null | grep -v "node_modules" | head -15 >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

echo "## 6. Authentication & Authorization" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

echo "📍 Checking authentication patterns..."

echo "### Authentication/Session Patterns:" >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
grep -rn "auth\|Auth\|session\|Session\|token\|Token\|jwt\|JWT" "$PROJECT_DIR" --include="*.tsx" --include="*.ts" 2>/dev/null | grep -v "node_modules" | head -20 >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

echo "## 7. HTTP Security Headers" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

echo "📍 Checking security headers configuration..."

echo "### next.config.js Security Headers:" >> "$REPORT_FILE"
echo '```javascript' >> "$REPORT_FILE"
cat "$PROJECT_DIR/next.config.js" 2>/dev/null | head -100 >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

echo "## 8. Third-Party Dependencies" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

echo "📍 Checking dependencies for known vulnerabilities..."

echo "### Dependency Audit:" >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
cd "$PROJECT_DIR" && npm audit 2>&1 | head -50 >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

echo "## 9. Sensitive Data Exposure" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

echo "📍 Checking for sensitive data patterns..."

echo "### Potential Sensitive Data in Code:" >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
grep -rn "credit.card\|creditCard\|ssn\|social.security" "$PROJECT_DIR" --include="*.tsx" --include="*.ts" 2>/dev/null | grep -v "node_modules" >> "$REPORT_FILE"
grep -rn "email.*=.*@" "$PROJECT_DIR" --include="*.tsx" --include="*.ts" 2>/dev/null | grep -v "node_modules" | grep -v "placeholder" | head -10 >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

echo "## 10. URL & Redirect Security" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

echo "📍 Checking URL handling..."

echo "### Open Redirect Patterns:" >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
grep -rn "window.location\|location.href\|router.push" "$PROJECT_DIR" --include="*.tsx" --include="*.ts" 2>/dev/null | grep -v "node_modules" | head -20 >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

echo "## 11. Error Handling & Information Disclosure" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

echo "📍 Checking error handling..."

echo "### Console Logging (may expose sensitive info in production):" >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
grep -rn "console.log\|console.error\|console.warn" "$PROJECT_DIR" --include="*.tsx" --include="*.ts" 2>/dev/null | grep -v "node_modules" | head -30 >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

echo "## 12. SQL/NoSQL Injection Patterns" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

echo "📍 Checking for injection vulnerabilities..."

echo "### Database Query Patterns:" >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
grep -rn "supabase\|prisma\|mongoose\|sequelize\|query\|SELECT\|INSERT\|UPDATE\|DELETE" "$PROJECT_DIR" --include="*.tsx" --include="*.ts" 2>/dev/null | grep -v "node_modules" | head -20 >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

echo "" >> "$REPORT_FILE"
echo "---" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"
echo "## 🎯 Recommendations" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"
echo "Based on the audit, prioritize fixing:" >> "$REPORT_FILE"
echo "1. **Critical**: Remove any hardcoded API keys and use environment variables" >> "$REPORT_FILE"
echo "2. **High**: Sanitize all dangerouslySetInnerHTML usage" >> "$REPORT_FILE"
echo "3. **Medium**: Add proper security headers in next.config.js" >> "$REPORT_FILE"
echo "4. **Medium**: Add CSRF protection to forms" >> "$REPORT_FILE"
echo "5. **Low**: Remove console.log statements in production builds" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"
echo "---" >> "$REPORT_FILE"
echo "*Report generated by Good Hands Security Audit Script*" >> "$REPORT_FILE"

echo ""
echo "✅ Security audit complete!"
echo "📄 Report saved to: $REPORT_FILE"
echo ""
echo "Opening report..."

