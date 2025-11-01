# 🚀 Start AOE Autonomous System

## Quick Setup (5 minutes)

### 1. Install Dependencies
```bash
cd _good-hands/autonomous
npm install
```

### 2. Configure AI Keys (Optional)
Create `.env` file:
```bash
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
PERPLEXITY_API_KEY=...
```

### 3. Start the System
```bash
npm start
```

**That's it!** The system is now running in the background.

---

## What Happens Next?

### Every 6 Hours:
- System checks for improvements
- Runs quality checks
- Analyzes opportunities
- Deploys safe changes

### You'll See:
- Console logs of activities
- Log files in `.aoe/logs/`
- Email reports (optional)
- GitHub PRs for major changes

---

## Monitor Progress

```bash
# Check if running
npm run status

# View logs
tail -f .aoe/logs/$(date +%Y-%m-%d).log

# View current state
cat .aoe/state.json
```

---

## Stop the System

```bash
npm run stop
```

Or press `Ctrl+C` in the terminal.

---

## Customize

Edit `config/settings.ts`:
- Toggle modules on/off
- Adjust schedules
- Set confidence levels
- Configure deployment rules

---

**The system will now continuously improve your site autonomously!**

