# 🎯 VANDERBILT WONDER PORTAL — OPERATIONS GUIDE
## Dashboard User Manual & Operational Procedures

**Version:** 1.0  
**Last Updated:** October 2025  
**Maintained By:** Narratum Intelligence Team

---

## 📑 TABLE OF CONTENTS

1. [Dashboard Overview](#overview)
2. [User Roles & Permissions](#roles)
3. [Navigating the Interface](#navigation)
4. [Understanding Metrics](#metrics)
5. [Department Views](#departments)
6. [AI Insights System](#ai-insights)
7. [Taking Action on Data](#actions)
8. [Data Refresh Schedule](#refresh)
9. [Troubleshooting](#troubleshooting)
10. [Best Practices](#best-practices)

---

## 🎯 DASHBOARD OVERVIEW {#overview}

### Purpose
The Vanderbilt Wonder Portal is a real-time intelligence platform that transforms raw engagement, loyalty, and revenue data into actionable insights. It uses **Narratum Intelligence Scores™** to quantify belonging and help departments make data-driven decisions.

### Key Capabilities
- **Unified View**: All departments see the same underlying data with role-specific interpretations
- **Real-Time Intelligence**: Metrics update nightly; AI insights refresh hourly
- **Predictive Analytics**: Machine learning models identify at-risk members before churn
- **Cross-Department Collaboration**: Shared KPIs create organizational alignment

### Dashboard Architecture
```
┌─────────────────────────────────────────────────────────────┐
│                      USER INTERFACE                          │
│  • Executive View   • Athletics   • Marketing   • More       │
└──────────────────────────┬──────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────┐
│                    API LAYER (FastAPI)                       │
│  • Authentication  • Rate Limiting  • Caching                │
└──────────────────────────┬──────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────┐
│              NARRATUM INTELLIGENCE LAYER                     │
│  • WonderScore Calculation  • ML Predictions  • AI Insights  │
└──────────────────────────┬──────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────┐
│                  SNOWFLAKE DATA WAREHOUSE                    │
│  • Fact Tables  • Dimensions  • Score Marts                  │
└──────────────────────────────────────────────────────────────┘
```

---

## 👥 USER ROLES & PERMISSIONS {#roles}

### Role-Based Access Control (RBAC)

| Role | Access Level | Capabilities |
|------|-------------|--------------|
| **Executive Leadership** | Full Access | • All views<br>• Export all data<br>• Configure alerts<br>• View PII (with consent) |
| **Athletic Director** | Department | • Executive + Athletics views<br>• Sport-specific drill-downs<br>• Event performance |
| **Marketing Director** | Department | • Executive + Marketing views<br>• Campaign analytics<br>• Acquisition funnels |
| **Loyalty Manager** | Department | • Executive + Loyalty views<br>• Tier management<br>• Redemption analytics |
| **Finance Analyst** | Department | • Executive + Finance views<br>• ROI models<br>• Revenue forecasting |
| **Guest Services** | Limited | • Sentiment dashboards<br>• Complaint tracking<br>• Service ratings |
| **Data Analyst** | Technical | • Full read access<br>• SQL query interface<br>• Export raw data |

### Permission Matrix
```
                    View  Export  Edit  Configure  Admin
Executive            ✓      ✓      ✓       ✓        ✓
Department Lead      ✓      ✓      ×       ×        ×
Manager              ✓      ×      ×       ×        ×
Analyst              ✓      ✓      ×       ×        ×
Guest Services       ✓      ×      ×       ×        ×
```

---

## 🧭 NAVIGATING THE INTERFACE {#navigation}

### Main Navigation Tabs

#### 1. **EXECUTIVE VIEW**
**Purpose:** High-level organizational health  
**Primary Users:** President, VPs, C-Suite  
**Key Question:** "How is Vanderbilt's community engagement performing overall?"

**What You See:**
- **Hero Metrics (Top Cards)**
  - **Avg WonderScore**: Overall community health (0-100 scale)
  - **Active Members**: Total engaged community members
  - **Total LTV**: Projected lifetime value across all members
  - **At-Risk Members**: Members with churn probability >70%

- **Score Dimensions (Radar Chart)**
  - Visualizes the 5 core scores: Engagement, Loyalty, Value, Sentiment, Advocacy
  - Ideal shape: Pentagon with balanced sides
  - Warning signs: Spikes or dips indicate over-indexing in one area

- **Member Tiers (Pie Chart + Legend)**
  - Distribution across Elite → Champion → Supporter → Friend → Explorer
  - Hover for tier-specific metrics
  - Click tier name to filter entire dashboard

- **12-Month Trends (Area Chart)**
  - Historical WonderScore and member count
  - Identify seasonal patterns (e.g., football season spikes)
  - Track long-term trajectory

- **Segment Analysis (Progress Bars)**
  - Elite Champions: Top performers, low risk
  - Rising Stars: High potential, need nurturing
  - Engaged Base: Stable majority
  - At-Risk: Require immediate intervention
  - Dormant: Re-engagement campaigns needed

#### 2. **ATHLETICS VIEW**
**Purpose:** Fan engagement and event performance  
**Primary Users:** Athletic Director, Sport Managers, Event Ops  
**Key Question:** "Which sports drive the most engagement, and how are premium experiences performing?"

**What You See:**
- **Avg Engagement Score**: Composite of attendance + digital + social
- **Event Attendance**: % capacity utilization across events
- **Premium Hospitality**: Suite/lounge utilization rates
- **Engagement by Sport**: Bar chart comparing Football, Basketball, Baseball, etc.

**How to Use:**
1. Identify underperforming sports (low engagement bars)
2. Compare fan counts to revenue per sport
3. Track hospitality utilization to optimize pricing
4. Export sport-specific lists for targeted campaigns

#### 3. **MARKETING VIEW**
**Purpose:** Campaign effectiveness and acquisition  
**Primary Users:** CMO, Digital Marketing, Communications  
**Key Question:** "Which campaigns drive the best engagement and conversions?"

**What You See:**
- **Digital Affinity Score**: Strength of online engagement
- **Campaign CTR**: Click-through rate on emails/ads
- **New Acquisitions**: Net new members this period
- **Campaign Performance Timeline**: Track member growth by campaign

**How to Use:**
1. Correlate campaigns with member spikes in timeline
2. Identify high-CTR campaigns for replication
3. Calculate cost per acquisition (CPA) vs. LTV
4. A/B test messaging based on digital affinity segments

#### 4. **LOYALTY VIEW**
**Purpose:** Tier health and redemption behavior  
**Primary Users:** Loyalty Manager, CRM Team  
**Key Question:** "Are members advancing through tiers, and are rewards driving the right behaviors?"

**What You See:**
- **Loyalty Score**: Tier stability + tenure + redemption activity
- **Tier Upgrades**: Count of members ascending tiers
- **Points Issued vs. Redeemed**: Redemption rate health check
- **Member Health Breakdown**: Green (healthy), Yellow (monitor), Red (at-risk)

**How to Use:**
1. **Healthy Segment**: Maintain with status quo; upsell opportunities
2. **Monitor Segment**: Send personalized re-engagement offers
3. **At-Risk Segment**: Trigger automated intervention workflows
4. Export at-risk list daily for outreach team

#### 5. **FINANCE VIEW**
**Purpose:** Revenue efficiency and program ROI  
**Primary Users:** CFO, Finance Analysts, Budget Planning  
**Key Question:** "Is the loyalty program profitable, and where should we invest?"

**What You See:**
- **Revenue Efficiency**: Revenue generated per dollar spent on program
- **Avg Order Value**: Trending up = better monetization
- **Program ROI**: Total return on loyalty investment
- **Reward Cost Ratio**: % of revenue spent on rewards (target: <20%)

**How to Use:**
1. Track ROI monthly; investigate drops >5%
2. Benchmark reward costs against industry standard (15-20%)
3. Model tier profitability: Elite tier should have highest LTV
4. Forecast revenue based on tier distribution trends

---

## 📊 UNDERSTANDING METRICS {#metrics}

### Core Intelligence Scores (0-100 Scale)

#### **WonderScore™** (Composite)
**Formula:**  
`WonderScore = (Engagement × 0.35) + (Loyalty × 0.25) + (Value × 0.25) + (Sentiment × 0.10) + (Advocacy × 0.05)`

**Interpretation:**
- **85-100 (Elite)**: Champions; highest engagement and value
- **70-84 (Champion)**: Strong performers; growth potential
- **55-69 (Supporter)**: Solid base; maintain engagement
- **40-54 (Friend)**: Casual; risk of churn
- **0-39 (Explorer)**: Inactive; re-engagement required

**Benchmarks:**
- University average: 62
- Top 10% nationally: 78+
- At-risk threshold: <40

---

#### **EngagementScore** (Sub-Score)
**What It Measures:** How actively a member interacts with Vanderbilt experiences

**Calculation Inputs:**
- Event attendance frequency (30% weight)
- Website/app sessions (40% weight)
- Email open/click rates (20% weight)
- Social media interactions (10% weight)

**Actions by Score Range:**
- **80+**: Brand ambassadors; recruit for advocacy programs
- **50-79**: Standard engagement; maintain cadence
- **<50**: Declining engagement; send re-activation campaign

**Example:**
> **Member A**: Attends 8 games/year, opens 60% of emails, logs into app weekly  
> **EngagementScore**: 82 → Strong engagement

---

#### **LoyaltyScore** (Sub-Score)
**What It Measures:** Consistency, tier stability, program participation

**Calculation Inputs:**
- Current tier level (40% weight) — Gold = 100pts, Anchor = 30pts
- Account tenure (30% weight) — Longer tenure = higher score
- Redemption activity (30% weight) — Active redeemers = engaged
- Tier stability bonus (+10 if no downgrades)

**Actions by Score Range:**
- **80+**: Loyal advocates; VIP treatment, early access
- **50-79**: Stable members; cross-sell opportunities
- **<50**: Tier risk; offer bonus points to re-engage

---

#### **ValueScore** (Sub-Score)
**What It Measures:** Financial contribution to the university

**Calculation Inputs:**
- Total revenue (50% weight) — Log scale to handle outliers
- Purchase frequency (30% weight) — More transactions = higher score
- Recency (20% weight) — Recent purchases boost score
- Category breadth bonus (+10 for 5+ categories)

**Actions by Score Range:**
- **80+**: High-value targets; personalized concierge service
- **50-79**: Standard value; upsell premium experiences
- **<50**: Low spenders; introduce entry-level offers

---

#### **SentimentScore** (Sub-Score)
**What It Measures:** Emotional satisfaction and advocacy likelihood

**Calculation Inputs:**
- NPS score (50% weight) — 0-10 scale normalized to 0-100
- Review ratings (30% weight) — 1-5 stars normalized
- Social sentiment (20% weight) — Natural language processing
- Complaint penalty (−5 per unresolved complaint, max −20)

**Actions by Score Range:**
- **80+**: Promoters; feature in testimonials
- **60-79**: Satisfied; maintain quality
- **<60**: Detractors; service recovery required

---

#### **AdvocacyScore** (Sub-Score)
**What It Measures:** Propensity to influence peers and recruit new members

**Calculation Inputs:**
- Referrals (40% weight) — Bonus for converted referrals
- Social amplification (40% weight) — Reach and engagement on posts
- Alumni hosting (20% weight) — Events hosted for others

**Actions by Score Range:**
- **75+**: Super-advocates; invite to advisory board
- **50-74**: Moderate advocates; referral incentives
- **<50**: Not advocates; focus on engagement first

---

### Extended Intelligence Scores

#### **HospitalityExperienceScore**
**What It Measures:** Quality of premium touchpoints (suites, lounges, VIP events)

**Formula:**  
`(Service Rating/5 × 40%) + (F&B Spend Percentile × 30%) + (Experience Frequency Percentile × 20%) + (Return Rate × 10%)`

**Use Cases:**
- Optimize suite pricing based on utilization + satisfaction
- Identify service gaps (low ratings despite high spend)
- Forecast capacity needs for premium areas

---

#### **DigitalAffinityScore**
**What It Measures:** Strength of digital/mobile engagement

**Formula:**  
`(Session Frequency × 35%) + (Time on Site × 30%) + (CTR × 20%) + (Mobile Ratio × 15%)`

**Use Cases:**
- Segment for mobile-first vs. desktop campaigns
- Identify candidates for beta app features
- Measure impact of UX improvements

---

#### **ChurnRiskScore** (Predictive)
**What It Measures:** Probability of disengagement in next 90 days

**Formula:** Machine learning model (Random Forest) using:
- Days since last engagement
- Spend trend (last 30d vs. prior 60d)
- Engagement trend
- Sentiment delta
- Tier changes

**Risk Levels:**
- **0-30**: Low risk → Standard cadence
- **31-69**: Medium risk → Monitor weekly
- **70-100**: High risk → Immediate intervention

**Intervention Playbook:**
1. **Score 70-79**: Automated re-engagement email with exclusive offer
2. **Score 80-89**: Personal call from loyalty manager within 48 hours
3. **Score 90+**: Executive outreach + concierge service

---

### Financial Metrics

#### **Revenue Efficiency Score**
**Formula:**  
`(Incremental Revenue from Loyalty Program) / (Program Operating Costs)`

**Target:** 3.0x or higher  
**Interpretation:**
- **<2.0**: Program unprofitable; restructure rewards
- **2.0-3.0**: Acceptable; optimize costs
- **>3.0**: Highly efficient; scale program

---

#### **Redemption ROI Score**
**Formula:**  
`(Post-Redemption Revenue Uplift) / (Reward Cost)`

**Target:** 2.5x or higher  
**Use Case:** Determine which rewards drive the best return

**Example:**
> **Suite Upgrade Reward**: Costs $150, drives $500 in F&B/merch = 3.3x ROI ✓  
> **Merchandise Discount**: Costs $50, drives $60 in additional spend = 1.2x ROI ✗

---

### Operational Metrics

#### **Experience Occupancy Rate (EOR)**
**Formula:**  
`(Actual Attendees) / (Event Capacity) × 100`

**Benchmarks:**
- **Premium Suites**: Target 85%+
- **General Admission**: Target 75%+
- **Lounge Spaces**: Target 60%+

**Actions:**
- **>95%**: Capacity constraint; consider expansion or dynamic pricing
- **70-85%**: Healthy utilization
- **<70%**: Underutilized; increase marketing or lower pricing

---

#### **Return Visit Ratio (RVR)**
**Formula:**  
`(Members Attending 2+ Events in 90 Days) / (Total Unique Attendees) × 100`

**Target:** 40%+ for engaged base  
**Interpretation:**
- High RVR = Strong engagement habit formation
- Low RVR = Event experience not compelling; improve quality or variety

---

## 🏢 DEPARTMENT VIEWS IN DETAIL {#departments}

### Executive Dashboard
**Daily Routine (10 minutes):**
1. Check WonderScore trend (↑ or ↓ from yesterday)
2. Read AI Insight banner (top of page)
3. Review "At-Risk Members" metric — if >50, investigate
4. Scan segment analysis for red flags (e.g., shrinking Elite tier)

**Weekly Review (30 minutes):**
1. Compare month-over-month trends in all 5 core scores
2. Review tier distribution changes (are members advancing?)
3. Export "Elite Champions" list for personalized outreach
4. Set next week's priorities based on AI recommendations

**Monthly Board Report:**
1. Export 12-month trend chart
2. Summarize top 3 wins (e.g., "Engagement +8% YoY")
3. Highlight top 2 risks (e.g., "15 Elite members at churn risk")
4. Propose 1-2 strategic initiatives

---

### Athletics Dashboard
**Game Day Routine (real-time):**
1. Monitor event attendance vs. capacity
2. Track hospitality suite utilization
3. Check sentiment scores post-event (next day)
4. Identify no-shows for re-engagement offers

**Weekly Ops Meeting:**
1. Compare engagement scores across sports
2. Identify underperforming sports → investigate causes
3. Review premium hospitality feedback
4. Plan targeted campaigns for low-engagement fans

**Season Planning:**
1. Analyze historical attendance patterns by sport
2. Forecast ticket revenue based on tier distribution
3. Model premium pricing scenarios (suite demand vs. utilization)
4. Set engagement goals per sport

---

### Marketing Dashboard
**Campaign Launch Checklist:**
1. Segment audience by DigitalAffinityScore (high = email; low = direct mail)
2. Set baseline WonderScore avg for target segment
3. Tag campaign in CRM for attribution tracking
4. Monitor CTR in real-time during first 24 hours

**Post-Campaign Analysis (7 days after):**
1. Compare WonderScore lift for campaign recipients vs. control
2. Calculate cost per engagement (CPE) = Campaign Cost / New Engagements
3. Identify top-performing channels (email, social, paid ads)
4. Document learnings for playbook

**Acquisition Funnel:**
```
Awareness (Web Visit) → Interest (Email Open) → Consideration (Click) → 
Action (Sign-Up) → Engagement (First Event) → Loyalty (Tier Upgrade)
```
- Track conversion rates at each stage
- Optimize drop-off points

---

### Loyalty Dashboard
**Daily At-Risk Review (15 minutes):**
1. Filter members with ChurnRiskScore >70
2. Export list → assign to loyalty concierge team
3. Trigger automated "We Miss You" email series
4. Log outreach attempts in CRM

**Monthly Tier Review:**
1. Identify members within 10% of next tier → send "Almost There" nudge
2. Celebrate tier upgrades → personalized email + swag
3. Review tier downgrades → exit survey to understand why
4. Model tier profitability (LTV by tier)

**Quarterly Reward Optimization:**
1. Analyze redemption patterns (which rewards are most popular?)
2. Calculate ROI per reward type
3. Sunset underperforming rewards
4. Test new rewards with small pilot segment

---

### Finance Dashboard
**Monthly Close Routine:**
1. Reconcile loyalty program costs vs. budget
2. Calculate Program ROI → report to CFO
3. Review reward cost ratio (target <20% of revenue)
4. Forecast next quarter revenue based on tier mix

**Budget Planning:**
1. Model scenario: "What if Elite tier grows 10%?" → revenue impact
2. Allocate marketing budget based on acquisition cost per tier
3. Set reward budget caps per tier
4. Justify loyalty investment with ROI data

---

## 🤖 AI INSIGHTS SYSTEM {#ai-insights}

### How It Works

**1. Data Collection (Hourly)**
- Wonder Portal APIs stream real-time metrics to AI engine
- GPT-4 analyzes patterns across all departments

**2. Insight Generation (Automated)**
- **Trend Detection**: "Engagement up 12% this week"
- **Anomaly Detection**: "15 Elite members suddenly inactive"
- **Predictions**: "Basketball season expected to drive 200 new members"
- **Recommendations**: "Offer suite upgrade to Tier 3 members → projected $50K uplift"

**3. Prioritization**
- **High Priority**: Immediate action required (e.g., churn risk spike)
- **Medium Priority**: Monitor closely (e.g., declining sentiment in one sport)
- **Low Priority**: FYI insights (e.g., seasonal trend confirmation)

### Reading AI Insights

**Insight Banner Location:** Top of every dashboard view

**Example Insight:**
> ✨ **WONDER AI INSIGHT**  
> "Elite tier members show 42% higher engagement this quarter. Basketball season driving significant uplift in mobile app sessions."

**How to Act:**
1. **Understand the Pattern**: Basketball is high-engagement driver
2. **Validate the Data**: Drill into Athletics view → confirm basketball engagement spike
3. **Take Action**: Increase basketball-specific rewards; cross-promote to football-only fans
4. **Measure Impact**: Track basketball fan WonderScore change over next 30 days

### Insight Types

| Type | Description | Typical Action |
|------|-------------|----------------|
| **Trend** | "Metric X increased/decreased" | Investigate cause; replicate success or fix issue |
| **Anomaly** | "Unusual pattern detected" | Immediate investigation required |
| **Prediction** | "Forecasting metric Y will..." | Prepare resources; adjust strategy |
| **Recommendation** | "Suggest action Z for outcome" | Evaluate ROI; implement if positive |
| **Celebration** | "Milestone achieved" | Share win; recognize team |

### AI-Powered Alerts (Email/Slack)

**Configured Triggers:**
- At-Risk Members spike >20% week-over-week → Alert Loyalty Manager
- Elite tier churn detected → Alert Executive Team
- Revenue Efficiency drops below 2.5x → Alert CFO
- Sentiment Score <50 for 3 consecutive days → Alert Guest Services

---

## 🎬 TAKING ACTION ON DATA {#actions}

### Decision Trees by Scenario

#### **Scenario 1: WonderScore Declining**
```
WonderScore dropping 5+ points month-over-month
    ↓
Which sub-score is falling?
    ├─ Engagement? → Review event calendar; boost email cadence
    ├─ Loyalty? → Check tier downgrades; offer retention bonuses
    ├─ Value? → Analyze spend trends; create limited-time offers
    ├─ Sentiment? → Review recent complaints; service recovery
    └─ Advocacy? → Launch referral campaign; reward top advocates
```

---

#### **Scenario 2: High Churn Risk Detected**
```
>50 members with ChurnRiskScore >70
    ↓
Segment by tier:
    ├─ Elite Members (highest priority)
    │   ↓
    │   Personal outreach from executive team
    │   Offer exclusive concierge service
    │   Survey to understand concerns
    │
    ├─ Champion/Supporter
    │   ↓
    │   Automated "We Miss You" email series
    │   Bonus points offer (limited time)
    │   Re-engagement event invitation
    │
    └─ Friend/Explorer
        ↓
        Low-touch re-activation campaign
        Survey to understand barriers
        Consider if reactivation cost-effective
```

---

#### **Scenario 3: Low Event Attendance**
```
Event Occupancy Rate <60%
    ↓
Analyze by segment:
    ├─ Low awareness? → Increase marketing spend; earlier promo
    ├─ Pricing issue? → Test dynamic pricing; early bird discounts
    ├─ Competition? → Check local event calendar; differentiate
    ├─ Experience quality? → Review sentiment scores; improve offering
    └─ Targeting wrong audience? → Refine segment targeting
```

---

#### **Scenario 4: Campaign Not Performing**
```
Campaign CTR <3% (below benchmark)
    ↓
Diagnose issue:
    ├─ Subject line weak? → A/B test new subject lines
    ├─ Audience mismatch? → Re-segment by DigitalAffinityScore
    ├─ Offer not compelling? → Survey sample; test new offer
    ├─ Timing wrong? → Test send time optimization
    └─ Creative stale? → Refresh design; add personalization
```

---

### Standard Operating Procedures (SOPs)

#### **SOP: Daily At-Risk Member Review**
**Owner:** Loyalty Manager  
**Frequency:** Daily, 9:00 AM  
**Duration:** 15 minutes

**Steps:**
1. Log into Wonder Portal → Loyalty View
2. Filter members: `ChurnRiskScore >= 70`
3. Export list to CSV
4. Upload to CRM → tag as "Churn Risk - Immediate"
5. Assign to concierge team (round-robin)
6. Concierge team: Outreach within 24 hours
7. Log outcome in CRM notes
8. Re-check ChurnRiskScore in 7 days

**Success Metric:** 50% of contacted members reduce ChurnRiskScore <70 within 30 days

---

#### **SOP: Monthly Tier Movement Analysis**
**Owner:** Loyalty Manager + Finance Analyst  
**Frequency:** First Monday of month  
**Duration:** 1 hour

**Steps:**
1. Navigate to Loyalty View → Tier Movement chart
2. Document tier changes:
   - Upgrades: Count + list of members
   - Downgrades: Count + exit survey analysis
   - New members: Count + acquisition source
3. Calculate tier profitability:
   - Avg LTV by tier
   - Program cost per tier
   - Net profit margin
4. Model tier distribution impact on annual revenue
5. Identify tier optimization opportunities (e.g., "If we move 10 Supporters → Champions, +$50K revenue")
6. Present findings in monthly leadership meeting

---

#### **SOP: Campaign Performance Review**
**Owner:** Marketing Manager  
**Frequency:** 7 days post-campaign launch  
**Duration:** 30 minutes

**Steps:**
1. Gather campaign metrics:
   - Sent: X emails
   - Opened: Y opens (Y/X = Open Rate)
   - Clicked: Z clicks (Z/Y = CTR)
   - Converted: N conversions (N/Z = Conversion Rate)
2. Compare to benchmarks:
   - Open Rate: Target >25%
   - CTR: Target >5%
   - Conversion: Target >10%
3. Analyze WonderScore lift:
   - Campaign recipients vs. control group
   - Statistical significance test (p<0.05)
4. Calculate ROI:
   - Campaign Cost: $X
   - Incremental Revenue: $Y
   - ROI: (Y-X)/X × 100%
5. Document learnings in campaign playbook
6. Share top 3 insights with marketing team

---

## 🔄 DATA REFRESH SCHEDULE {#refresh}

### Automated Updates

| Data Element | Refresh Frequency | Update Time (EST) | Source System |
|--------------|-------------------|-------------------|---------------|
| **WonderScore** | Daily | 2:00 AM | Snowflake (dbt run) |
| **Engagement Events** | Hourly | :00 minutes | GA4, App Analytics |
| **Spend Transactions** | Real-time | Continuous | POS, Paciolan, Fanatics |
| **Loyalty Activity** | Real-time | Continuous | CRM |
| **Sentiment Data** | Hourly | :15 minutes | Sprout Social, Survey Tools |
| **AI Insights** | Hourly | :30 minutes | GPT-4 API |
| **Churn Predictions** | Weekly | Sunday 3:00 AM | ML Model Batch Job |
| **Tableau Dashboards** | Daily | 4:00 AM | Snowflake → Tableau Server |

### Data Latency Guide

**Real-Time (<5 min):**
- Ticket purchases
- Merchandise orders
- Loyalty points transactions
- Event check-ins

**Near Real-Time (<1 hour):**
- Web/app engagement
- Email interactions
- Social media mentions

**Batch Processed (Daily):**
- WonderScore calculations
- Tier assignments
- LTV updates
- Churn risk scores

**ML Model Updates (Weekly):**
- Churn prediction model retraining
- LTV forecasting model
- Recommendation engine

### Monitoring & Alerts

**System Health Checks:**
- **Data Freshness Alert**: If WonderScore not updated by 3:00 AM, alert Data Ops team
- **API Latency Alert**: If response time >2 seconds, alert Engineering
- **Scoring Pipeline Failure**: If dbt run fails, page on-call engineer
- **ML Model Drift**: If churn prediction accuracy drops <75%, retrain model

---

## 🔧 TROUBLESHOOTING {#troubleshooting}

### Common Issues & Solutions

#### **Issue: "My WonderScore looks wrong for a specific member"**
**Symptoms:** Member has high spend but low WonderScore

**Diagnosis:**
1. Navigate to member detail page (search by Wonder ID)
2. Review sub-score breakdown
3. Check data quality:
   - Missing engagement events? → Check GA4 integration
   - Sentiment score anomaly? → Review recent NPS responses
   - Loyalty score low despite tier? → Check redemption activity

**Resolution:**
- Data issue: Contact Data Ops to investigate source integration
- Algorithm issue: Review score calculation; may be working as intended (high spend ≠ high engagement)

---

#### **Issue: "Dashboard won't load / times out"**
**Symptoms:** Blank screen, error message, or loading spinner indefinitely

**Diagnosis:**
1. Check browser console for errors (F12 → Console tab)
2. Test API endpoint directly: `https://api.wonder.vanderbilt.edu/health`
3. Check Datadog for service outages

**Resolution:**
- Browser cache issue: Clear cache (Ctrl+Shift+Delete)
- VPN issue: Disconnect/reconnect VPN
- API outage: Check #wonder-status Slack channel; contact Engineering if unaware

---

#### **Issue: "Metrics don't match Tableau report"**
**Symptoms:** WonderScore in portal ≠ WonderScore in Tableau

**Diagnosis:**
1. Check timestamp of each report (portal updates 2 AM; Tableau updates 4 AM)
2. Verify date range filters match (portal default: 90 days)
3. Check if user permissions differ (portal may hide PII)

**Resolution:**
- Time lag: Wait for Tableau refresh cycle
- Filter mismatch: Adjust filters to match exactly
- Permission issue: Contact admin to reconcile access levels

---

#### **Issue: "AI Insight seems incorrect"**
**Symptoms:** Insight claims "Engagement up 28%" but charts show decline

**Diagnosis:**
1. Verify insight timestamp → may reference different time period
2. Check segment scope → insight may apply to specific tier only
3. Confirm data source → insight may use real-time data vs. batch-processed charts

**Resolution:**
- If confirmed incorrect: Report via "Flag Insight" button → AI team reviews
- If user misinterpretation: Insight may be correct for subset of data

---

### Escalation Path

**Level 1: Self-Service**
- Check this Operations Guide
- Review tooltips in dashboard (hover over ? icons)
- Search Wonder Portal Help Center

**Level 2: Department Admin**
- Contact your department's Wonder Portal admin
- Check #wonder-users Slack channel for known issues

**Level 3: Narratum Support**
- Email: wonder-support@narratum.ai
- Slack: #narratum-support
- SLA: Response within 4 business hours

**Level 4: Engineering Escalation**
- Critical outage only
- Page on-call engineer via PagerDuty

---

## ✅ BEST PRACTICES {#best-practices}

### Daily Habits for Power Users

**Morning Routine (5 minutes):**
1. Check AI Insight banner → note any "High Priority" items
2. Scan "At-Risk Members" metric → flag >50 for investigation
3. Review yesterday's engagement trends → any anomalies?

**End of Day (5 minutes):**
1. Export any lists created during the day for CRM upload
2. Set reminders for follow-up actions (e.g., "Review churn list Friday")
3. Note any questions for weekly team review

---

### Weekly Team Rituals

**Monday Morning Dashboard Review (30 min):**
- Each department lead shares top insight from their view
- Discuss cross-functional opportunities (e.g., Marketing + Athletics collab)
- Set weekly goals tied to WonderScore improvement

**Friday Metrics Recap (15 min):**
- Quick wins from the week
- Lessons learned from campaigns/events
- Preview next week's priorities

---

### Data-Driven Decision Checklist

Before making any major decision based on Wonder Portal data:
- [ ] Verify data freshness (check "Last Updated" timestamp)
- [ ] Confirm statistical significance (n>30 for small samples)
- [ ] Consider external factors (e.g., holiday season, COVID)
- [ ] Cross-reference with other data sources (CRM, finance reports)
- [ ] Consult AI Insights for recommended actions
- [ ] Document decision rationale for future reference

---

### Optimization Tips

**Improving WonderScore:**
1. **Focus on Engagement first** (35% of composite) → Highest leverage
2. **Stabilize Loyalty** (25%) → Prevent churn before acquisition
3. **Increase Value** (25%) → Upsell existing members > acquire new
4. **Monitor Sentiment** (10%) → Leading indicator of churn
5. **Activate Advocacy** (5%) → Organic growth multiplier

**Segment-Specific Strategies:**
- **Elite (85+)**: Maintain → Concierge service, exclusive experiences
- **Champion (70-84)**: Grow → Personalized upsell paths, tier incentives
- **Supporter (55-69)**: Engage → Habit-building campaigns, gamification
- **Friend (40-54)**: Retain → Re-engagement offers, simplified onboarding
- **Explorer (<40)**: Reactivate or Release → Cost-benefit analysis

**Campaign Optimization:**
- **High DigitalAffinity** → Email, SMS, push notifications
- **Low DigitalAffinity** → Direct mail, phone calls, in-person events
- **High Sentiment** → Advocacy asks, referral programs
- **Low Sentiment** → Service recovery, feedback surveys

---

## 📞 SUPPORT & RESOURCES

### Quick Reference

- **Dashboard URL**: https://wonder.vanderbilt.edu
- **API Docs**: https://docs.wonder.vanderbilt.edu/api
- **Video Tutorials**: https://learn.narratum.ai/vanderbilt
- **Slack Channel**: #vanderbilt-wonder-portal
- **Support Email**: wonder-support@narratum.ai
- **Emergency Hotline**: (615) 555-WNDR

### Training Resources

**New User Onboarding (2 hours):**
- Module 1: Platform overview & navigation (30 min)
- Module 2: Understanding scores & metrics (45 min)
- Module 3: Taking action on insights (30 min)
- Module 4: Hands-on practice session (15 min)

**Advanced User Certification (4 hours):**
- Deep dive into Narratum Intelligence algorithms
- Custom segment building
- API integration for custom dashboards
- Predictive analytics & ML models

**Office Hours:**
- Tuesdays & Thursdays, 2:00-3:00 PM EST
- Drop-in Q&A with Narratum team
- Zoom link: wonder.vanderbilt.edu/office-hours

---

## 📝 DOCUMENT MAINTENANCE

**Version History:**
- v1.0 (Oct 2025): Initial release
- v1.1 (Nov 2025): Added Athletics troubleshooting section
- v1.2 (Dec 2025): Updated AI Insights examples

**Review Cycle:** Quarterly  
**Next Review:** January 2026  
**Feedback:** Submit suggestions via wonder-support@narratum.ai

---

**Questions?**  
Contact your department's Wonder Portal admin or reach out to the Narratum team directly.

**Ready to dive deeper?**  
Explore the Technical Documentation for developers at docs.wonder.vanderbilt.edu

---

*"From Data to Belonging — The Vanderbilt Wonder Portal by Narratum."*