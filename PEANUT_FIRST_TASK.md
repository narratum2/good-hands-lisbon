# First Task: Deep Audit & Cleanup

## Phase 1: MD File Cleanup (Priority)
There are 63 markdown files in the project root — accumulated over months from different AI sessions. Most are outdated, redundant, or no longer relevant.

### What to do:
1. Read every MD file in the root
2. Categorize them:
   - **KEEP** — Still relevant, contains useful reference info (move to `docs/` folder)
   - **ARCHIVE** — Historical value only (move to `docs/archive/`)
   - **DELETE** — Redundant, outdated, superseded, or empty promises
3. The 3.3MB SECURITY_REPORT.md is almost certainly bloated — review and trim or delete
4. Consolidate duplicates (e.g., multiple deployment/dashboard/narratum files)
5. Create ONE clean `docs/PROJECT_STATUS.md` that summarizes the actual current state
6. Keep only README.md and PEANUT_WORKFLOW.md in the root

### Rules:
- Commit the cleanup as a single commit on `dev` branch
- Do NOT delete anything from `app/`, `components/`, `lib/`, etc. — only root MD files
- When in doubt, archive rather than delete

## Phase 2: Live Site Review
1. Browse beautysalonlisbon.com thoroughly
2. Review every page, note what works and what doesn't
3. Compare against top luxury salon websites (research 5-10 competitors)
4. Document findings in `docs/SITE_AUDIT.md`

## Phase 3: Improvement Plan
Based on the audit, create `docs/IMPROVEMENT_PLAN.md` with:
- Prioritized list of improvements (quick wins first)
- Visual/design improvements
- Content improvements
- SEO improvements
- Performance improvements
- Each item should explain: what, why, expected impact

## After completing all phases:
- Push to dev branch
- Message Bax with a summary of what you found and your recommendations
