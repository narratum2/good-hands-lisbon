# Review Agent — Quality Gate Protocol

Run this checklist before every push to `main` (for Bax) or every PR from `dev` (for Peanut).
Output a structured PASS/FAIL report with `file:line` for every failure.

---

## 1. Emoji Scan

**Rule:** No Unicode emoji in `.tsx` files. Only Lucide React icon components.

**Exception:** The `★` character is allowed in `ReviewsSnippet.tsx` for star ratings.

```bash
rg '[\x{1F300}-\x{1F9FF}\x{2600}-\x{26FF}\x{2700}-\x{27BF}]' --glob '*.tsx' --glob '!*.old.tsx' --glob '!*test*'
```

**PASS** if zero matches (excluding allowed exceptions).

---

## 2. Centering Check

**Rule:** Section headings with `text-center` must have their subtitle paragraph also centered.

```bash
rg 'text-center.*font-serif' --glob '*.tsx' -A 5
```

Verify each match has a sibling `<p>` with `text-center`. Flag any missing.

---

## 3. Design Token Compliance

**Rule:** No hardcoded hex colors in `.tsx` files. Use Tailwind classes or CSS variables.

```bash
rg '#[0-9a-fA-F]{3,8}' --glob '*.tsx' --glob '!*.old.tsx'
```

**Allowed:** Hex inside `tailwind.config`, CSS files, or `globals.css`.
**FAIL** if hex appears in component files (`.tsx`).

---

## 4. SEO Metadata

**Rule:** Every `page.tsx` must either export `metadata`/`generateMetadata`, or have a sibling `layout.tsx` that does.

```bash
for f in $(find app -name 'page.tsx' -not -path '*/\[*'); do
  dir=$(dirname "$f")
  if ! grep -q 'metadata' "$f" && ! [ -f "$dir/layout.tsx" ]; then
    echo "MISSING metadata: $f"
  fi
done
```

**PASS** if every page has metadata coverage.

---

## 5. Console.log Guard

**Rule:** No unguarded `console.log/warn/error` in `components/` or `app/`.

```bash
rg 'console\.(log|warn|error)' --glob '*.tsx' --glob '*.ts' --glob '!*.config.*'
```

Every match must be inside `if (process.env.NODE_ENV === 'development')`.

---

## 6. Image References

**Rule:** Every `src=` path in `<Image>` or `<img>` must resolve to a file in `public/`.

```bash
rg "src=['\"]/(brand-images|images)/" --glob '*.tsx' -o | sort -u
```

Cross-check each path exists in `public/`. Flag broken references.

---

## 7. Build

**Rule:** The project must build without errors.

```bash
npx next build
```

**PASS** if exit code 0.

---

## 8. Heading Hierarchy

**Rule:** No skipped heading levels. Pages must not jump from `h1` to `h3` without an `h2`.

```bash
rg '<h[1-6]' --glob '*.tsx' -n
```

For each file, verify heading levels are sequential (h1 → h2 → h3, not h1 → h3).

---

## 9. Alt Text

**Rule:** Every `<Image>` component must have a non-empty `alt` prop.

```bash
rg '<Image' --glob '*.tsx' -A 3 | rg 'alt=""'
```

**PASS** if zero matches with empty alt.

---

## 10. Text Visibility on Dark Backgrounds

**Rule:** Any text element inside a `bg-ink`, `bg-black`, or dark gradient section must have `text-white`, `text-porcelain`, or `text-gold`.

Manual spot-check on:
- Footer headings (h4 elements)
- CTA sections with dark backgrounds
- FAQ dark sections
- Hero overlays

---

## Report Format

```
REVIEW AGENT REPORT — [date]
================================
1. Emoji Scan:        PASS / FAIL (N issues)
2. Centering:         PASS / FAIL (N issues)
3. Design Tokens:     PASS / FAIL (N issues)
4. SEO Metadata:      PASS / FAIL (N issues)
5. Console.log:       PASS / FAIL (N issues)
6. Image References:  PASS / FAIL (N issues)
7. Build:             PASS / FAIL
8. Heading Hierarchy: PASS / FAIL (N issues)
9. Alt Text:          PASS / FAIL (N issues)
10. Text Visibility:  PASS / FAIL (N issues)

DETAILS:
[file:line — description for each failure]
```
