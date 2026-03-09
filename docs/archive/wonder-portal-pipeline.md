# 🧠 VANDERBILT WONDER PORTAL — SCORING ALGORITHM PIPELINE
## Technical Implementation Guide

---

## 📋 TABLE OF CONTENTS
1. [Architecture Overview](#architecture)
2. [Data Sources & Ingestion](#sources)
3. [Snowflake Schema Design](#snowflake)
4. [dbt Models & Transformations](#dbt)
5. [Narratum Intelligence Layer (Python)](#intelligence)
6. [API Layer](#api)
7. [React Portal Integration](#react)
8. [AI Narration Engine](#ai)
9. [Deployment & Operations](#deployment)

---

## 🏗️ ARCHITECTURE OVERVIEW {#architecture}

```
┌─────────────────────────────────────────────────────────────────┐
│                        DATA SOURCES                              │
│  Paciolan • Salesforce • Eloqua • Sprout • Fanatics • POS • LMS │
└────────────────────────┬────────────────────────────────────────┘
                         │ Event-Driven / Batch ETL
                         ↓
┌─────────────────────────────────────────────────────────────────┐
│                    SNOWFLAKE DATA WAREHOUSE                      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │  raw_schema  │→ │ staging_sch  │→ │  analytics   │          │
│  │  (raw data)  │  │ (cleaned)    │  │  (marts)     │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
└────────────────────────┬────────────────────────────────────────┘
                         │ dbt orchestration
                         ↓
┌─────────────────────────────────────────────────────────────────┐
│              NARRATUM INTELLIGENCE LAYER (Python)                │
│  • Score Computation Engine                                      │
│  • ML Models (Churn, Propensity, Forecasting)                  │
│  • WonderScore™ Calculation                                     │
│  • Nightly Batch Processing via Airflow                         │
└────────────────────────┬────────────────────────────────────────┘
                         │ Write to mart_wonderscore_daily
                         ↓
┌─────────────────────────────────────────────────────────────────┐
│                        API LAYER (FastAPI)                       │
│  /api/v1/scores/{wonder_id}                                     │
│  /api/v1/segments                                               │
│  /api/v1/insights                                               │
└────────────────────────┬────────────────────────────────────────┘
                         │ REST / GraphQL
                         ↓
┌─────────────────────────────────────────────────────────────────┐
│                    VISUALIZATION LAYERS                          │
│  ┌──────────────────┐           ┌──────────────────┐           │
│  │  Tableau Server  │           │  Wonder Portal   │           │
│  │  (Governed KPIs) │           │  (Next.js + 3D)  │           │
│  └──────────────────┘           └──────────────────┘           │
└─────────────────────────────────────────────────────────────────┘
```

**Tech Stack:**
- **Data Warehouse:** Snowflake
- **ETL:** Fivetran / Airbyte / Custom Python
- **Transformation:** dbt Cloud
- **Intelligence:** Python 3.11 (scikit-learn, pandas, numpy)
- **Orchestration:** Apache Airflow
- **API:** FastAPI + Pydantic
- **Frontend:** Next.js 14, React 18, Three.js, Framer Motion
- **AI:** OpenAI GPT-4 API
- **BI:** Tableau Server
- **Monitoring:** Datadog, Snowflake Query History

---

## 📥 DATA SOURCES & INGESTION {#sources}

### Source Systems
| Source | Data Type | Frequency | ETL Tool |
|--------|-----------|-----------|----------|
| **Paciolan** | Ticketing, attendance | Real-time + Daily | Fivetran |
| **Salesforce** | CRM, donations | Real-time | Fivetran |
| **Eloqua** | Email engagement | Daily | Custom API |
| **Sprout Social** | Social sentiment | Hourly | Custom API |
| **Fanatics** | Merchandise orders | Real-time | Custom API |
| **POS Systems** | Concessions, F&B | Real-time | Custom API |
| **LMS (Canvas)** | Course participation | Daily | Custom API |
| **Google Analytics 4** | Web/app behavior | Streaming | BigQuery → Snowflake |

### Raw Schema Example
```sql
-- Snowflake raw tables
RAW.PACIOLAN.TICKETS
RAW.PACIOLAN.ATTENDANCE
RAW.SALESFORCE.CONTACTS
RAW.SALESFORCE.DONATIONS
RAW.ELOQUA.EMAIL_ACTIVITY
RAW.SPROUT.SOCIAL_MENTIONS
RAW.FANATICS.ORDERS
RAW.POS.TRANSACTIONS
RAW.CANVAS.ENROLLMENTS
RAW.GA4.EVENTS
```

---

## 🗄️ SNOWFLAKE SCHEMA DESIGN {#snowflake}

### Dimensional Model (Kimball Star Schema)

```sql
-- =================================================================
-- DIMENSION TABLES
-- =================================================================

-- Master fan dimension (golden record)
CREATE OR REPLACE TABLE ANALYTICS.DIM_FAN (
    fan_sk NUMBER(38,0) AUTOINCREMENT PRIMARY KEY,
    wonder_id VARCHAR(50) UNIQUE NOT NULL,
    email_hash VARCHAR(64),
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    phone_hash VARCHAR(64),
    birthdate DATE,
    zip_code VARCHAR(10),
    city VARCHAR(100),
    state VARCHAR(50),
    country VARCHAR(50),
    primary_sport VARCHAR(50),
    primary_affiliation VARCHAR(100), -- Alumni, Student, Community
    account_created_date DATE,
    current_tier VARCHAR(50),
    tier_start_date DATE,
    gdpr_consent BOOLEAN,
    marketing_opt_in BOOLEAN,
    is_active BOOLEAN,
    created_at TIMESTAMP_NTZ,
    updated_at TIMESTAMP_NTZ
);

-- Date dimension
CREATE OR REPLACE TABLE ANALYTICS.DIM_DATE (
    date_key NUMBER(8,0) PRIMARY KEY,
    full_date DATE,
    day_of_week VARCHAR(20),
    day_of_month NUMBER(2,0),
    month_number NUMBER(2,0),
    month_name VARCHAR(20),
    quarter NUMBER(1,0),
    year NUMBER(4,0),
    is_weekend BOOLEAN,
    is_holiday BOOLEAN,
    academic_year NUMBER(4,0),
    fiscal_year NUMBER(4,0),
    is_game_day BOOLEAN
);

-- Event dimension
CREATE OR REPLACE TABLE ANALYTICS.DIM_EVENT (
    event_sk NUMBER(38,0) AUTOINCREMENT PRIMARY KEY,
    event_id VARCHAR(50) UNIQUE,
    event_name VARCHAR(200),
    event_type VARCHAR(50), -- Game, Concert, Learning, Hospitality
    sport VARCHAR(50),
    venue VARCHAR(100),
    capacity NUMBER(10,0),
    event_date DATE,
    is_premium_event BOOLEAN,
    opponent VARCHAR(100)
);

-- Product dimension (merch, tickets, F&B)
CREATE OR REPLACE TABLE ANALYTICS.DIM_PRODUCT (
    product_sk NUMBER(38,0) AUTOINCREMENT PRIMARY KEY,
    product_id VARCHAR(50) UNIQUE,
    product_name VARCHAR(200),
    category VARCHAR(100), -- Ticket, Merch, F&B, Donation
    subcategory VARCHAR(100),
    sport_affiliation VARCHAR(50),
    unit_cost NUMBER(10,2),
    unit_price NUMBER(10,2)
);

-- Campaign dimension
CREATE OR REPLACE TABLE ANALYTICS.DIM_CAMPAIGN (
    campaign_sk NUMBER(38,0) AUTOINCREMENT PRIMARY KEY,
    campaign_id VARCHAR(50) UNIQUE,
    campaign_name VARCHAR(200),
    channel VARCHAR(50), -- Email, Social, Paid, Organic
    utm_source VARCHAR(100),
    utm_medium VARCHAR(100),
    utm_campaign VARCHAR(100),
    start_date DATE,
    end_date DATE
);

-- =================================================================
-- FACT TABLES
-- =================================================================

-- Engagement events (web, app, email, social)
CREATE OR REPLACE TABLE ANALYTICS.FACT_ENGAGEMENT (
    engagement_sk NUMBER(38,0) AUTOINCREMENT PRIMARY KEY,
    fan_sk NUMBER(38,0) REFERENCES DIM_FAN(fan_sk),
    date_key NUMBER(8,0) REFERENCES DIM_DATE(date_key),
    campaign_sk NUMBER(38,0) REFERENCES DIM_CAMPAIGN(campaign_sk),
    engagement_type VARCHAR(50), -- page_view, email_open, click, social_post
    engagement_channel VARCHAR(50), -- web, app, email, social
    session_id VARCHAR(100),
    time_on_page_seconds NUMBER(10,0),
    pages_viewed NUMBER(5,0),
    engagement_timestamp TIMESTAMP_NTZ,
    device_type VARCHAR(50)
);

-- Spend transactions
CREATE OR REPLACE TABLE ANALYTICS.FACT_SPEND (
    spend_sk NUMBER(38,0) AUTOINCREMENT PRIMARY KEY,
    fan_sk NUMBER(38,0) REFERENCES DIM_FAN(fan_sk),
    date_key NUMBER(8,0) REFERENCES DIM_DATE(date_key),
    product_sk NUMBER(38,0) REFERENCES DIM_PRODUCT(product_sk),
    event_sk NUMBER(38,0) REFERENCES DIM_EVENT(event_sk),
    transaction_id VARCHAR(100) UNIQUE,
    transaction_type VARCHAR(50), -- Purchase, Donation, Subscription
    quantity NUMBER(5,0),
    gross_revenue NUMBER(10,2),
    discount_amount NUMBER(10,2),
    net_revenue NUMBER(10,2),
    cost NUMBER(10,2),
    profit NUMBER(10,2),
    payment_method VARCHAR(50),
    transaction_timestamp TIMESTAMP_NTZ
);

-- Loyalty activity (points, tiers, rewards)
CREATE OR REPLACE TABLE ANALYTICS.FACT_LOYALTY (
    loyalty_sk NUMBER(38,0) AUTOINCREMENT PRIMARY KEY,
    fan_sk NUMBER(38,0) REFERENCES DIM_FAN(fan_sk),
    date_key NUMBER(8,0) REFERENCES DIM_DATE(date_key),
    activity_type VARCHAR(50), -- Earn, Redeem, TierChange, Expiration
    points_earned NUMBER(10,0),
    points_redeemed NUMBER(10,0),
    points_balance NUMBER(10,0),
    tier_before VARCHAR(50),
    tier_after VARCHAR(50),
    reward_id VARCHAR(50),
    reward_value NUMBER(10,2),
    activity_timestamp TIMESTAMP_NTZ
);

-- Sentiment & feedback
CREATE OR REPLACE TABLE ANALYTICS.FACT_SENTIMENT (
    sentiment_sk NUMBER(38,0) AUTOINCREMENT PRIMARY KEY,
    fan_sk NUMBER(38,0) REFERENCES DIM_FAN(fan_sk),
    date_key NUMBER(8,0) REFERENCES DIM_DATE(date_key),
    event_sk NUMBER(38,0) REFERENCES DIM_EVENT(event_sk),
    sentiment_source VARCHAR(50), -- NPS, Review, Social, Survey
    sentiment_score NUMBER(3,0), -- -100 to +100
    nps_score NUMBER(3,0), -- 0-10
    review_rating NUMBER(2,0), -- 1-5
    comment_text TEXT,
    sentiment_timestamp TIMESTAMP_NTZ
);

-- Attendance
CREATE OR REPLACE TABLE ANALYTICS.FACT_ATTENDANCE (
    attendance_sk NUMBER(38,0) AUTOINCREMENT PRIMARY KEY,
    fan_sk NUMBER(38,0) REFERENCES DIM_FAN(fan_sk),
    date_key NUMBER(8,0) REFERENCES DIM_DATE(date_key),
    event_sk NUMBER(38,0) REFERENCES DIM_EVENT(event_sk),
    ticket_type VARCHAR(50),
    seat_location VARCHAR(100),
    check_in_timestamp TIMESTAMP_NTZ,
    no_show BOOLEAN
);

-- Hospitality experiences
CREATE OR REPLACE TABLE ANALYTICS.FACT_HOSPITALITY (
    hospitality_sk NUMBER(38,0) AUTOINCREMENT PRIMARY KEY,
    fan_sk NUMBER(38,0) REFERENCES DIM_FAN(fan_sk),
    date_key NUMBER(8,0) REFERENCES DIM_DATE(date_key),
    event_sk NUMBER(38,0) REFERENCES DIM_EVENT(event_sk),
    experience_type VARCHAR(50), -- Suite, Lounge, Dinner, VIP
    guest_count NUMBER(3,0),
    fb_spend NUMBER(10,2),
    service_rating NUMBER(2,0), -- 1-5
    experience_timestamp TIMESTAMP_NTZ
);

-- Advocacy (referrals, social amplification)
CREATE OR REPLACE TABLE ANALYTICS.FACT_ADVOCACY (
    advocacy_sk NUMBER(38,0) AUTOINCREMENT PRIMARY KEY,
    fan_sk NUMBER(38,0) REFERENCES DIM_FAN(fan_sk),
    date_key NUMBER(8,0) REFERENCES DIM_DATE(date_key),
    advocacy_type VARCHAR(50), -- Referral, Social_Share, Alumni_Host, Mention
    referred_fan_sk NUMBER(38,0) REFERENCES DIM_FAN(fan_sk),
    social_platform VARCHAR(50),
    reach_count NUMBER(10,0),
    engagement_count NUMBER(10,0),
    conversion BOOLEAN,
    advocacy_timestamp TIMESTAMP_NTZ
);
```

---

## 🔄 DBT MODELS & TRANSFORMATIONS {#dbt}

### dbt Project Structure
```
models/
├── staging/
│   ├── stg_paciolan__tickets.sql
│   ├── stg_salesforce__contacts.sql
│   ├── stg_eloqua__emails.sql
│   └── ...
├── intermediate/
│   ├── int_fan_golden_record.sql
│   ├── int_engagement_rollup.sql
│   ├── int_spend_summary.sql
│   └── ...
├── marts/
│   ├── dim_fan.sql
│   ├── fact_engagement.sql
│   ├── fact_spend.sql
│   └── mart_wonderscore_daily.sql
└── scoring/
    ├── base_engagement_score.sql
    ├── base_loyalty_score.sql
    ├── base_value_score.sql
    ├── base_sentiment_score.sql
    └── base_advocacy_score.sql
```

### Key dbt Models

#### 1. Golden Record (int_fan_golden_record.sql)
```sql
-- Merge fan data from multiple sources into a single golden record
{{ config(
    materialized='incremental',
    unique_key='wonder_id',
    cluster_by=['state', 'primary_sport']
) }}

WITH salesforce_contacts AS (
    SELECT
        id AS external_id,
        email,
        first_name,
        last_name,
        phone,
        mailing_postal_code AS zip_code,
        account_type
    FROM {{ ref('stg_salesforce__contacts') }}
),

paciolan_patrons AS (
    SELECT
        patron_id AS external_id,
        email,
        first_name,
        last_name,
        phone,
        zip_code,
        primary_sport
    FROM {{ ref('stg_paciolan__patrons') }}
),

merged AS (
    SELECT
        COALESCE(sf.external_id, pc.external_id) AS source_id,
        {{ dbt_utils.generate_surrogate_key(['COALESCE(sf.email, pc.email)']) }} AS wonder_id,
        SHA2(LOWER(COALESCE(sf.email, pc.email)), 256) AS email_hash,
        COALESCE(sf.first_name, pc.first_name) AS first_name,
        COALESCE(sf.last_name, pc.last_name) AS last_name,
        SHA2(COALESCE(sf.phone, pc.phone), 256) AS phone_hash,
        COALESCE(sf.zip_code, pc.zip_code) AS zip_code,
        pc.primary_sport,
        sf.account_type AS primary_affiliation,
        CURRENT_TIMESTAMP() AS updated_at
    FROM salesforce_contacts sf
    FULL OUTER JOIN paciolan_patrons pc
        ON sf.email = pc.email
    WHERE COALESCE(sf.email, pc.email) IS NOT NULL
)

SELECT * FROM merged
```

#### 2. Engagement Score Base (base_engagement_score.sql)
```sql
{{ config(
    materialized='table',
    schema='scoring'
) }}

WITH engagement_metrics AS (
    SELECT
        f.wonder_id,
        
        -- Attendance metrics (30% weight)
        COUNT(DISTINCT CASE WHEN fe.event_sk IS NOT NULL THEN fe.date_key END) AS events_attended_90d,
        COUNT(DISTINCT CASE WHEN fe.event_sk IS NOT NULL THEN fe.event_sk END) AS unique_events_90d,
        
        -- Digital engagement (40% weight)
        COUNT(DISTINCT CASE WHEN eng.engagement_channel = 'web' THEN eng.session_id END) AS web_sessions_90d,
        SUM(CASE WHEN eng.engagement_channel = 'web' THEN eng.time_on_page_seconds END) AS total_web_time_90d,
        COUNT(CASE WHEN eng.engagement_type = 'email_open' THEN 1 END) AS email_opens_90d,
        COUNT(CASE WHEN eng.engagement_type = 'email_click' THEN 1 END) AS email_clicks_90d,
        
        -- Social engagement (20% weight)
        COUNT(CASE WHEN eng.engagement_channel = 'social' THEN 1 END) AS social_interactions_90d,
        
        -- Learning participation (10% weight)
        COUNT(DISTINCT CASE WHEN p.category = 'Learning' THEN fs.product_sk END) AS courses_enrolled_90d
        
    FROM {{ ref('dim_fan') }} f
    LEFT JOIN {{ ref('fact_attendance') }} fe
        ON f.fan_sk = fe.fan_sk
        AND fe.date_key >= {{ dbt_utils.date_spine_get_date_key('DATEADD(day, -90, CURRENT_DATE())') }}
    LEFT JOIN {{ ref('fact_engagement') }} eng
        ON f.fan_sk = eng.fan_sk
        AND eng.date_key >= {{ dbt_utils.date_spine_get_date_key('DATEADD(day, -90, CURRENT_DATE())') }}
    LEFT JOIN {{ ref('fact_spend') }} fs
        ON f.fan_sk = fs.fan_sk
        AND fs.date_key >= {{ dbt_utils.date_spine_get_date_key('DATEADD(day, -90, CURRENT_DATE())') }}
    LEFT JOIN {{ ref('dim_product') }} p
        ON fs.product_sk = p.product_sk
    WHERE f.is_active = TRUE
    GROUP BY 1
),

scoring AS (
    SELECT
        wonder_id,
        
        -- Normalize each metric to 0-100 scale using percentile ranks
        PERCENT_RANK() OVER (ORDER BY events_attended_90d) * 100 AS attendance_score,
        PERCENT_RANK() OVER (ORDER BY web_sessions_90d + (email_opens_90d * 0.5)) * 100 AS digital_score,
        PERCENT_RANK() OVER (ORDER BY social_interactions_90d) * 100 AS social_score,
        PERCENT_RANK() OVER (ORDER BY courses_enrolled_90d) * 100 AS learning_score,
        
        -- Weighted composite
        (
            (PERCENT_RANK() OVER (ORDER BY events_attended_90d) * 100 * 0.30) +
            (PERCENT_RANK() OVER (ORDER BY web_sessions_90d + (email_opens_90d * 0.5)) * 100 * 0.40) +
            (PERCENT_RANK() OVER (ORDER BY social_interactions_90d) * 100 * 0.20) +
            (PERCENT_RANK() OVER (ORDER BY courses_enrolled_90d) * 100 * 0.10)
        ) AS engagement_score
        
    FROM engagement_metrics
)

SELECT
    wonder_id,
    ROUND(engagement_score, 2) AS engagement_score,
    ROUND(attendance_score, 2) AS attendance_component,
    ROUND(digital_score, 2) AS digital_component,
    ROUND(social_score, 2) AS social_component,
    ROUND(learning_score, 2) AS learning_component,
    CURRENT_TIMESTAMP() AS calculated_at
FROM scoring
```

#### 3. Value Score Base (base_value_score.sql)
```sql
{{ config(
    materialized='table',
    schema='scoring'
) }}

WITH spend_metrics AS (
    SELECT
        f.wonder_id,
        
        -- Total revenue (50% weight)
        SUM(fs.net_revenue) AS total_revenue_90d,
        
        -- Frequency (30% weight)
        COUNT(DISTINCT fs.date_key) AS purchase_days_90d,
        
        -- Recency (20% weight)
        DATEDIFF('day', MAX(d.full_date), CURRENT_DATE()) AS days_since_last_purchase,
        
        -- Category breadth bonus
        COUNT(DISTINCT p.category) AS categories_purchased_90d
        
    FROM {{ ref('dim_fan') }} f
    LEFT JOIN {{ ref('fact_spend') }} fs
        ON f.fan_sk = fs.fan_sk
        AND fs.date_key >= {{ dbt_utils.date_spine_get_date_key('DATEADD(day, -90, CURRENT_DATE())') }}
    LEFT JOIN {{ ref('dim_product') }} p
        ON fs.product_sk = p.product_sk
    LEFT JOIN {{ ref('dim_date') }} d
        ON fs.date_key = d.date_key
    WHERE f.is_active = TRUE
    GROUP BY 1
),

scoring AS (
    SELECT
        wonder_id,
        
        -- Revenue score (log scale to handle outliers)
        PERCENT_RANK() OVER (ORDER BY LN(GREATEST(total_revenue_90d, 1))) * 100 AS revenue_score,
        
        -- Frequency score
        PERCENT_RANK() OVER (ORDER BY purchase_days_90d) * 100 AS frequency_score,
        
        -- Recency score (inverse - lower days = higher score)
        (100 - PERCENT_RANK() OVER (ORDER BY days_since_last_purchase) * 100) AS recency_score,
        
        -- Breadth bonus (0-10 points)
        LEAST(categories_purchased_90d * 2, 10) AS breadth_bonus,
        
        -- Weighted composite
        (
            (PERCENT_RANK() OVER (ORDER BY LN(GREATEST(total_revenue_90d, 1))) * 100 * 0.50) +
            (PERCENT_RANK() OVER (ORDER BY purchase_days_90d) * 100 * 0.30) +
            ((100 - PERCENT_RANK() OVER (ORDER BY days_since_last_purchase) * 100) * 0.20) +
            LEAST(categories_purchased_90d * 2, 10)
        ) AS value_score
        
    FROM spend_metrics
)

SELECT
    wonder_id,
    ROUND(LEAST(value_score, 100), 2) AS value_score,
    ROUND(revenue_score, 2) AS revenue_component,
    ROUND(frequency_score, 2) AS frequency_component,
    ROUND(recency_score, 2) AS recency_component,
    breadth_bonus,
    CURRENT_TIMESTAMP() AS calculated_at
FROM scoring
```

#### 4. Loyalty Score Base (base_loyalty_score.sql)
```sql
{{ config(
    materialized='table',
    schema='scoring'
) }}

WITH loyalty_metrics AS (
    SELECT
        f.wonder_id,
        f.current_tier,
        DATEDIFF('day', f.tier_start_date, CURRENT_DATE()) AS days_in_current_tier,
        DATEDIFF('day', f.account_created_date, CURRENT_DATE()) AS account_age_days,
        
        -- Points activity
        SUM(fl.points_earned) AS points_earned_90d,
        SUM(fl.points_redeemed) AS points_redeemed_90d,
        MAX(fl.points_balance) AS current_points_balance,
        
        -- Tier stability
        COUNT(CASE WHEN fl.activity_type = 'TierChange' THEN 1 END) AS tier_changes_90d,
        
        -- Redemption behavior
        COUNT(CASE WHEN fl.activity_type = 'Redeem' THEN 1 END) AS redemptions_90d
        
    FROM {{ ref('dim_fan') }} f
    LEFT JOIN {{ ref('fact_loyalty') }} fl
        ON f.fan_sk = fl.fan_sk
        AND fl.date_key >= {{ dbt_utils.date_spine_get_date_key('DATEADD(day, -90, CURRENT_DATE())') }}
    WHERE f.is_active = TRUE
    GROUP BY 1, 2, 3, 4
),

scoring AS (
    SELECT
        wonder_id,
        
        -- Tier level score (mapped to tiers)
        CASE current_tier
            WHEN 'Gold' THEN 100
            WHEN 'Commodore Elite' THEN 85
            WHEN 'Commodore Plus' THEN 70
            WHEN 'Commodore' THEN 50
            WHEN 'Anchor' THEN 30
            ELSE 10
        END AS tier_score,
        
        -- Tenure score
        PERCENT_RANK() OVER (ORDER BY account_age_days) * 100 AS tenure_score,
        
        -- Redemption activity score (engagement with program)
        PERCENT_RANK() OVER (ORDER BY redemptions_90d) * 100 AS redemption_activity_score,
        
        -- Stability bonus (fewer tier changes = more stable)
        CASE
            WHEN tier_changes_90d = 0 THEN 10
            WHEN tier_changes_90d = 1 THEN 5
            ELSE 0
        END AS stability_bonus,
        
        -- Weighted composite
        (
            CASE current_tier
                WHEN 'Gold' THEN 100
                WHEN 'Commodore Elite' THEN 85
                WHEN 'Commodore Plus' THEN 70
                WHEN 'Commodore' THEN 50
                WHEN 'Anchor' THEN 30
                ELSE 10
            END * 0.40
        ) +
        (PERCENT_RANK() OVER (ORDER BY account_age_days) * 100 * 0.30) +
        (PERCENT_RANK() OVER (ORDER BY redemptions_90d) * 100 * 0.30) +
        CASE
            WHEN tier_changes_90d = 0 THEN 10
            WHEN tier_changes_90d = 1 THEN 5
            ELSE 0
        END AS loyalty_score
        
    FROM loyalty_metrics
)

SELECT
    wonder_id,
    ROUND(LEAST(loyalty_score, 100), 2) AS loyalty_score,
    ROUND(tier_score, 2) AS tier_component,
    ROUND(tenure_score, 2) AS tenure_component,
    ROUND(redemption_activity_score, 2) AS redemption_component,
    stability_bonus,
    CURRENT_TIMESTAMP() AS calculated_at
FROM scoring
```

#### 5. Sentiment Score Base (base_sentiment_score.sql)
```sql
{{ config(
    materialized='table',
    schema='scoring'
) }}

WITH sentiment_metrics AS (
    SELECT
        f.wonder_id,
        
        -- NPS (weighted heavily)
        AVG(CASE WHEN fs.nps_score IS NOT NULL THEN fs.nps_score END) AS avg_nps,
        
        -- Review ratings
        AVG(CASE WHEN fs.review_rating IS NOT NULL THEN fs.review_rating END) AS avg_review_rating,
        
        -- Social sentiment
        AVG(fs.sentiment_score) AS avg_sentiment_score,
        
        -- Complaint resolution
        COUNT(CASE WHEN fs.sentiment_source = 'Complaint' THEN 1 END) AS complaints_90d
        
    FROM {{ ref('dim_fan') }} f
    LEFT JOIN {{ ref('fact_sentiment') }} fs
        ON f.fan_sk = fs.fan_sk
        AND fs.date_key >= {{ dbt_utils.date_spine_get_date_key('DATEADD(day, -90, CURRENT_DATE())') }}
    WHERE f.is_active = TRUE
    GROUP BY 1
),

scoring AS (
    SELECT
        wonder_id,
        
        -- NPS score normalized (0-10 → 0-100, then weighted 50%)
        (COALESCE(avg_nps, 7) / 10.0 * 100) * 0.50 AS nps_component,
        
        -- Review rating normalized (1-5 → 0-100, weighted 30%)
        ((COALESCE(avg_review_rating, 4) - 1) / 4.0 * 100) * 0.30 AS review_component,
        
        -- Social sentiment normalized (-100 to +100 → 0-100, weighted 20%)
        ((COALESCE(avg_sentiment_score, 0) + 100) / 2.0) * 0.20 AS sentiment_component,
        
        -- Complaint penalty (each complaint -5 points, max -20)
        GREATEST(complaints_90d * -5, -20) AS complaint_penalty,
        
        -- Total
        (
            (COALESCE(avg_nps, 7) / 10.0 * 100) * 0.50 +
            ((COALESCE(avg_review_rating, 4) - 1) / 4.0 * 100) * 0.30 +
            ((COALESCE(avg_sentiment_score, 0) + 100) / 2.0) * 0.20 +
            GREATEST(complaints_90d * -5, -20)
        ) AS sentiment_score
        
    FROM sentiment_metrics
)

SELECT
    wonder_id,
    ROUND(GREATEST(LEAST(sentiment_score, 100), 0), 2) AS sentiment_score,
    ROUND(nps_component, 2) AS nps_component,
    ROUND(review_component, 2) AS review_component,
    ROUND(sentiment_component, 2) AS sentiment_component,
    complaint_penalty,
    CURRENT_TIMESTAMP() AS calculated_at
FROM scoring
```

#### 6. Advocacy Score Base (base_advocacy_score.sql)
```sql
{{ config(
    materialized='table',
    schema='scoring'
) }}

WITH advocacy_metrics AS (
    SELECT
        f.wonder_id,
        
        -- Referrals (40% weight)
        COUNT(CASE WHEN fa.advocacy_type = 'Referral' THEN 1 END) AS referrals_90d,
        SUM(CASE WHEN fa.advocacy_type = 'Referral' AND fa.conversion = TRUE THEN 1 ELSE 0 END) AS converted_referrals_90d,
        
        -- Social amplification (40% weight)
        SUM(CASE WHEN fa.advocacy_type IN ('Social_Share', 'Mention') THEN fa.reach_count ELSE 0 END) AS social_reach_90d,
        
        -- Alumni hosting (20% weight)
        COUNT(CASE WHEN fa.advocacy_type = 'Alumni_Host' THEN 1 END) AS hosting_events_90d
        
    FROM {{ ref('dim_fan') }} f
    LEFT JOIN {{ ref('fact_advocacy') }} fa
        ON f.fan_sk = fa.fan_sk
        AND fa.date_key >= {{ dbt_utils.date_spine_get_date_key('DATEADD(day, -90, CURRENT_DATE())') }}
    WHERE f.is_active = TRUE
    GROUP BY 1
),

scoring AS (
    SELECT
        wonder_id,
        
        -- Referral score (with conversion bonus)
        PERCENT_RANK() OVER (ORDER BY referrals_90d + (converted_referrals_90d * 2)) * 100 AS referral_score,
        
        -- Social amplification score
        PERCENT_RANK() OVER (ORDER BY LN(GREATEST(social_reach_90d, 1))) * 100 AS amplification_score,
        
        -- Hosting score
        PERCENT_RANK() OVER (ORDER BY hosting_events_90d) * 100 AS hosting_score,
        
        -- Weighted composite
        (
            (PERCENT_RANK() OVER (ORDER BY referrals_90d + (converted_referrals_90d * 2)) * 100 * 0.40) +
            (PERCENT_RANK() OVER (ORDER BY LN(GREATEST(social_reach_90d, 1))) * 100 * 0.40) +
            (PERCENT_RANK() OVER (ORDER BY hosting_events_90d) * 100 * 0.20)
        ) AS advocacy_score
        
    FROM advocacy_metrics
)

SELECT
    wonder_id,
    ROUND(advocacy_score, 2) AS advocacy_score,
    ROUND(referral_score, 2) AS referral_component,
    ROUND(amplification_score, 2) AS amplification_component,
    ROUND(hosting_score, 2) AS hosting_component,
    CURRENT_TIMESTAMP() AS calculated_at
FROM scoring
```

#### 7. WonderScore Final Mart (mart_wonderscore_daily.sql)
```sql
{{ config(
    materialized='incremental',
    unique_key=['wonder_id', 'score_date'],
    cluster_by=['score_date', 'wonder_score_tier']
) }}

WITH all_scores AS (
    SELECT
        COALESCE(e.wonder_id, l.wonder_id, v.wonder_id, s.wonder_id, a.wonder_id) AS wonder_id,
        COALESCE(e.engagement_score, 50) AS engagement_score,
        COALESCE(l.loyalty_score, 50) AS loyalty_score,
        COALESCE(v.value_score, 50) AS value_score,
        COALESCE(s.sentiment_score, 70) AS sentiment_score,
        COALESCE(a.advocacy_score, 30) AS advocacy_score
    FROM {{ ref('base_engagement_score') }} e
    FULL OUTER JOIN {{ ref('base_loyalty_score') }} l USING (wonder_id)
    FULL OUTER JOIN {{ ref('base_value_score') }} v USING (wonder_id)
    FULL OUTER JOIN {{ ref('base_sentiment_score') }} s USING (wonder_id)
    FULL OUTER JOIN {{ ref('base_advocacy_score') }} a USING (wonder_id)
),

wonder_score_calc AS (
    SELECT
        wonder_id,
        engagement_score,
        loyalty_score,
        value_score,
        sentiment_score,
        advocacy_score,
        
        -- WONDERSCORE FORMULA
        ROUND(
            (engagement_score * 0.35) +
            (loyalty_score * 0.25) +
            (value_score * 0.25) +
            (sentiment_score * 0.10) +
            (advocacy_score * 0.05),
            2
        ) AS wonder_score,
        
        CURRENT_DATE() AS score_date,
        CURRENT_TIMESTAMP() AS calculated_at
        
    FROM all_scores
),

tiering AS (
    SELECT
        *,
        CASE
            WHEN wonder_score >= 85 THEN 'Elite'
            WHEN wonder_score >= 70 THEN 'Champion'
            WHEN wonder_score >= 55 THEN 'Supporter'
            WHEN wonder_score >= 40 THEN 'Friend'
            ELSE 'Explorer'
        END AS wonder_score_tier,
        
        PERCENT_RANK() OVER (ORDER BY wonder_score) AS wonder_score_percentile
        
    FROM wonder_score_calc
)

SELECT
    f.fan_sk,
    t.wonder_id,
    t.wonder_score,
    t.wonder_score_tier,
    ROUND(t.wonder_score_percentile * 100, 2) AS percentile_rank,
    t.engagement_score,
    t.loyalty_score,
    t.value_score,
    t.sentiment_score,
    t.advocacy_score,
    t.score_date,
    t.calculated_at,
    f.current_tier AS loyalty_tier,
    f.primary_sport,
    f.primary_affiliation
FROM tiering t
JOIN {{ ref('dim_fan') }} f ON t.wonder_id = f.wonder_id
WHERE f.is_active = TRUE

{% if is_incremental() %}
    AND t.score_date > (SELECT MAX(score_date) FROM {{ this }})
{% endif %}
```

---

## 🧠 NARRATUM INTELLIGENCE LAYER (Python) {#intelligence}

### Python Scoring Engine

```python
# narratum_intelligence/scoring_engine.py

import pandas as pd
import numpy as np
from snowflake.connector import connect
from typing import Dict, List, Tuple
import logging
from datetime import datetime, timedelta

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class NarratumScoringEngine:
    """
    Proprietary scoring engine for Vanderbilt Wonder Portal.
    Computes all Narratum Intelligence Scores.
    """
    
    def __init__(self, snowflake_config: Dict):
        self.conn = connect(**snowflake_config)
        self.score_date = datetime.now().date()
        
    def compute_hospitality_experience_score(self) -> pd.DataFrame:
        """
        Computes HospitalityExperienceScore based on premium touchpoints.
        
        Formula: Weighted average of:
        - Service quality ratings (40%)
        - F&B spend per experience (30%)
        - Experience frequency (20%)
        - Return rate (10%)
        """
        
        query = """
        WITH hospitality_metrics AS (
            SELECT
                f.wonder_id,
                AVG(fh.service_rating) AS avg_service_rating,
                AVG(fh.fb_spend) AS avg_fb_spend,
                COUNT(DISTINCT fh.date_key) AS experience_days_90d,
                COUNT(DISTINCT fh.event_sk) / NULLIF(COUNT(DISTINCT fh.event_sk), 0) AS return_ratio
            FROM ANALYTICS.DIM_FAN f
            JOIN ANALYTICS.FACT_HOSPITALITY fh ON f.fan_sk = fh.fan_sk
            WHERE fh.date_key >= DATEADD(day, -90, CURRENT_DATE())
            GROUP BY 1
        )
        SELECT
            wonder_id,
            -- Normalize to 0-100
            (COALESCE(avg_service_rating, 3) / 5.0 * 100) * 0.40 AS service_component,
            (PERCENT_RANK() OVER (ORDER BY avg_fb_spend) * 100) * 0.30 AS spend_component,
            (PERCENT_RANK() OVER (ORDER BY experience_days_90d) * 100) * 0.20 AS frequency_component,
            (return_ratio * 100) * 0.10 AS return_component
        FROM hospitality_metrics
        """
        
        df = pd.read_sql(query, self.conn)
        
        df['hospitality_experience_score'] = (
            df['service_component'] +
            df['spend_component'] +
            df['frequency_component'] +
            df['return_component']
        ).round(2)
        
        logger.info(f"Computed HospitalityExperienceScore for {len(df)} fans")
        return df[['wonder_id', 'hospitality_experience_score']]
    
    def compute_digital_affinity_score(self) -> pd.DataFrame:
        """
        Computes DigitalAffinityScore based on digital behavior.
        
        Formula: Weighted average of:
        - Session frequency (35%)
        - Time on site (30%)
        - CTR (20%)
        - Mobile engagement (15%)
        """
        
        query = """
        WITH digital_metrics AS (
            SELECT
                f.wonder_id,
                COUNT(DISTINCT CASE WHEN eng.engagement_channel IN ('web', 'app') 
                    THEN eng.session_id END) AS sessions_90d,
                SUM(CASE WHEN eng.engagement_channel IN ('web', 'app') 
                    THEN eng.time_on_page_seconds END) AS total_time_90d,
                COUNT(CASE WHEN eng.engagement_type = 'click' THEN 1 END) /
                    NULLIF(COUNT(CASE WHEN eng.engagement_type = 'impression' THEN 1 END), 0) AS ctr,
                COUNT(CASE WHEN eng.device_type = 'mobile' THEN 1 END) /
                    NULLIF(COUNT(*), 0) AS mobile_ratio
            FROM ANALYTICS.DIM_FAN f
            LEFT JOIN ANALYTICS.FACT_ENGAGEMENT eng ON f.fan_sk = eng.fan_sk
            WHERE eng.date_key >= DATEADD(day, -90, CURRENT_DATE())
            GROUP BY 1
        )
        SELECT
            wonder_id,
            PERCENT_RANK() OVER (ORDER BY sessions_90d) * 100 * 0.35 AS session_component,
            PERCENT_RANK() OVER (ORDER BY total_time_90d) * 100 * 0.30 AS time_component,
            (COALESCE(ctr, 0.05) * 100) * 0.20 AS ctr_component,
            (mobile_ratio * 100) * 0.15 AS mobile_component
        FROM digital_metrics
        """
        
        df = pd.read_sql(query, self.conn)
        
        df['digital_affinity_score'] = (
            df['session_component'] +
            df['time_component'] +
            df['ctr_component'] +
            df['mobile_component']
        ).round(2)
        
        logger.info(f"Computed DigitalAffinityScore for {len(df)} fans")
        return df[['wonder_id', 'digital_affinity_score']]
    
    def compute_revenue_efficiency_score(self) -> pd.DataFrame:
        """
        Finance-focused: Incremental revenue / program cost.
        """
        
        query = """
        WITH program_metrics AS (
            SELECT
                f.wonder_id,
                SUM(fs.net_revenue) AS total_revenue_90d,
                SUM(CASE WHEN fl.activity_type = 'Earn' 
                    THEN fl.reward_value ELSE 0 END) AS reward_costs_90d,
                -- Assume 10% of revenue is program overhead
                SUM(fs.net_revenue) * 0.10 AS estimated_program_cost
            FROM ANALYTICS.DIM_FAN f
            LEFT JOIN ANALYTICS.FACT_SPEND fs ON f.fan_sk = fs.fan_sk
            LEFT JOIN ANALYTICS.FACT_LOYALTY fl ON f.fan_sk = fl.fan_sk
            WHERE fs.date_key >= DATEADD(day, -90, CURRENT_DATE())
                AND fl.date_key >= DATEADD(day, -90, CURRENT_DATE())
            GROUP BY 1
        )
        SELECT
            wonder_id,
            CASE 
                WHEN (reward_costs_90d + estimated_program_cost) > 0 THEN
                    (total_revenue_90d / (reward_costs_90d + estimated_program_cost)) * 10
                ELSE 50
            END AS revenue_efficiency_score
        FROM program_metrics
        """
        
        df = pd.read_sql(query, self.conn)
        
        # Cap at 100
        df['revenue_efficiency_score'] = df['revenue_efficiency_score'].clip(upper=100).round(2)
        
        logger.info(f"Computed RevenueEfficiencyScore for {len(df)} fans")
        return df[['wonder_id', 'revenue_efficiency_score']]
    
    def predict_churn_risk(self) -> pd.DataFrame:
        """
        ML-based churn prediction (simplified logistic regression for now).
        Would use scikit-learn RandomForest in production.
        
        Features:
        - Days since last engagement
        - Spend trend (last 30d vs prior 60d)
        - Engagement trend
        - Sentiment trend
        """
        
        query = """
        WITH churn_features AS (
            SELECT
                f.wonder_id,
                DATEDIFF(day, MAX(eng.engagement_timestamp), CURRENT_DATE()) AS days_since_last_engagement,
                
                SUM(CASE WHEN fs.date_key >= DATEADD(day, -30, CURRENT_DATE()) 
                    THEN fs.net_revenue ELSE 0 END) AS spend_last_30d,
                SUM(CASE WHEN fs.date_key >= DATEADD(day, -90, CURRENT_DATE()) 
                    AND fs.date_key < DATEADD(day, -30, CURRENT_DATE())
                    THEN fs.net_revenue ELSE 0 END) AS spend_prior_60d,
                
                COUNT(CASE WHEN eng.date_key >= DATEADD(day, -30, CURRENT_DATE()) 
                    THEN 1 END) AS engagements_last_30d,
                COUNT(CASE WHEN eng.date_key >= DATEADD(day, -90, CURRENT_DATE()) 
                    AND eng.date_key < DATEADD(day, -30, CURRENT_DATE())
                    THEN 1 END) AS engagements_prior_60d,
                
                AVG(CASE WHEN sent.date_key >= DATEADD(day, -30, CURRENT_DATE()) 
                    THEN sent.sentiment_score END) AS sentiment_last_30d,
                AVG(CASE WHEN sent.date_key >= DATEADD(day, -90, CURRENT_DATE()) 
                    AND sent.date_key < DATEADD(day, -30, CURRENT_DATE())
                    THEN sent.sentiment_score END) AS sentiment_prior_60d
                
            FROM ANALYTICS.DIM_FAN f
            LEFT JOIN ANALYTICS.FACT_ENGAGEMENT eng ON f.fan_sk = eng.fan_sk
            LEFT JOIN ANALYTICS.FACT_SPEND fs ON f.fan_sk = fs.fan_sk
            LEFT JOIN ANALYTICS.FACT_SENTIMENT sent ON f.fan_sk = sent.fan_sk
            WHERE f.is_active = TRUE
            GROUP BY 1
        )
        SELECT
            wonder_id,
            days_since_last_engagement,
            spend_last_30d / NULLIF(spend_prior_60d, 0) AS spend_trend_ratio,
            engagements_last_30d / NULLIF(engagements_prior_60d, 0) AS engagement_trend_ratio,
            sentiment_last_30d - sentiment_prior_60d AS sentiment_delta
        FROM churn_features
        """
        
        df = pd.read_sql(query, self.conn)
        
        # Simple churn risk model (replace with trained model in production)
        df['churn_risk_score'] = (
            (df['days_since_last_engagement'] / 90 * 40) +  # Max 40 points for inactivity
            ((1 - df['spend_trend_ratio'].fillna(1).clip(0, 2)) * 30) +  # 30 points for declining spend
            ((1 - df['engagement_trend_ratio'].fillna(1).clip(0, 2)) * 20) +  # 20 points for declining engagement
            (df['sentiment_delta'].fillna(0).clip(-50, 0).abs() / 50 * 10)  # 10 points for declining sentiment
        ).clip(0, 100).round(2)
        
        logger.info(f"Computed ChurnRiskScore for {len(df)} fans")
        return df[['wonder_id', 'churn_risk_score']]
    
    def compute_all_scores(self) -> pd.DataFrame:
        """
        Orchestrates all score computations and merges into single DataFrame.
        """
        
        logger.info("Starting full score computation pipeline...")
        
        # Get base WonderScore from dbt mart
        base_scores = pd.read_sql(
            "SELECT * FROM ANALYTICS.MART_WONDERSCORE_DAILY WHERE score_date = CURRENT_DATE()",
            self.conn
        )
        
        # Compute additional proprietary scores
        hospitality = self.compute_hospitality_experience_score()
        digital = self.compute_digital_affinity_score()
        revenue_eff = self.compute_revenue_efficiency_score()
        churn = self.predict_churn_risk()
        
        # Merge all scores
        all_scores = (
            base_scores
            .merge(hospitality, on='wonder_id', how='left')
            .merge(digital, on='wonder_id', how='left')
            .merge(revenue_eff, on='wonder_id', how='left')
            .merge(churn, on='wonder_id', how='left')
        )
        
        logger.info(f"Completed score computation for {len(all_scores)} fans")
        return all_scores
    
    def write_to_snowflake(self, df: pd.DataFrame, table: str):
        """
        Writes computed scores back to Snowflake.
        """
        from snowflake.connector.pandas_tools import write_pandas
        
        success, nchunks, nrows, _ = write_pandas(
            self.conn,
            df,
            table_name=table,
            schema='ANALYTICS',
            auto_create_table=False,
            overwrite=False
        )
        
        logger.info(f"Wrote {nrows} rows to {table}")
        return success
    
    def run_daily_scoring(self):
        """
        Main orchestration method - run daily.
        """
        logger.info(f"Starting daily scoring run for {self.score_date}")
        
        # Compute all scores
        all_scores = self.compute_all_scores()
        
        # Write to extended scores table
        self.write_to_snowflake(
            all_scores[['wonder_id', 'hospitality_experience_score', 
                       'digital_affinity_score', 'revenue_efficiency_score', 
                       'churn_risk_score']],
            'MART_WONDERSCORE_EXTENDED'
        )
        
        logger.info("Daily scoring run completed successfully")
        self.conn.close()


# narratum_intelligence/ml_models.py

import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier, GradientBoostingRegressor
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
import joblib
import logging

logger = logging.getLogger(__name__)


class ChurnPredictionModel:
    """
    Advanced churn prediction using Random Forest.
    """
    
    def __init__(self):
        self.model = RandomForestClassifier(
            n_estimators=100,
            max_depth=10,
            min_samples_split=50,
            random_state=42
        )
        self.scaler = StandardScaler()
        
    def prepare_features(self, df: pd.DataFrame) -> Tuple[np.ndarray, np.ndarray]:
        """
        Feature engineering for churn prediction.
        """
        features = [
            'days_since_last_engagement',
            'engagement_score',
            'loyalty_score',
            'value_score',
            'sentiment_score',
            'spend_last_30d',
            'spend_prior_60d',
            'engagements_last_30d',
            'tier_changes_90d',
            'complaint_count'
        ]
        
        X = df[features].fillna(0)
        y = df['churned'].astype(int)  # Binary target
        
        return X, y
    
    def train(self, df: pd.DataFrame):
        """
        Train the churn model.
        """
        X, y = self.prepare_features(df)
        X_train, X_test, y_train, y_test = train_test_split(
            X, y, test_size=0.2, random_state=42, stratify=y
        )
        
        X_train_scaled = self.scaler.fit_transform(X_train)
        X_test_scaled = self.scaler.transform(X_test)
        
        self.model.fit(X_train_scaled, y_train)
        
        train_score = self.model.score(X_train_scaled, y_train)
        test_score = self.model.score(X_test_scaled, y_test)
        
        logger.info(f"Churn model trained: Train={train_score:.3f}, Test={test_score:.3f}")
        
    def predict_proba(self, df: pd.DataFrame) -> np.ndarray:
        """
        Predict churn probability.
        """
        X, _ = self.prepare_features(df)
        X_scaled = self.scaler.transform(X)
        return self.model.predict_proba(X_scaled)[:, 1]
    
    def save(self, path: str):
        joblib.dump({'model': self.model, 'scaler': self.scaler}, path)
    
    def load(self, path: str):
        saved = joblib.load(path)
        self.model = saved['model']
        self.scaler = saved['scaler']


class LTVPredictionModel:
    """
    Lifetime Value prediction using Gradient Boosting.
    """
    
    def __init__(self):
        self.model = GradientBoostingRegressor(
            n_estimators=100,
            learning_rate=0.1,
            max_depth=5,
            random_state=42
        )
        self.scaler = StandardScaler()
        
    def prepare_features(self, df: pd.DataFrame) -> Tuple[np.ndarray, np.ndarray]:
        features = [
            'engagement_score',
            'loyalty_score',
            'value_score',
            'sentiment_score',
            'advocacy_score',
            'account_age_days',
            'total_spend_lifetime',
            'avg_order_value',
            'purchase_frequency'
        ]
        
        X = df[features].fillna(0)
        y = df['ltv_actual']  # Actual LTV for training
        
        return X, y
    
    def train(self, df: pd.DataFrame):
        X, y = self.prepare_features(df)
        X_train, X_test, y_train, y_test = train_test_split(
            X, y, test_size=0.2, random_state=42
        )
        
        X_train_scaled = self.scaler.fit_transform(X_train)
        X_test_scaled = self.scaler.transform(X_test)
        
        self.model.fit(X_train_scaled, y_train)
        
        train_score = self.model.score(X_train_scaled, y_train)
        test_score = self.model.score(X_test_scaled, y_test)
        
        logger.info(f"LTV model trained: Train R²={train_score:.3f}, Test R²={test_score:.3f}")
        
    def predict(self, df: pd.DataFrame) -> np.ndarray:
        X, _ = self.prepare_features(df)
        X_scaled = self.scaler.transform(X)
        return self.model.predict(X_scaled)


# narratum_intelligence/airflow_dag.py

from airflow import DAG
from airflow.operators.python import PythonOperator
from airflow.providers.snowflake.operators.snowflake import SnowflakeOperator
from datetime import datetime, timedelta

default_args = {
    'owner': 'narratum',
    'depends_on_past': False,
    'email_on_failure': True,
    'email_on_retry': False,
    'retries': 2,
    'retry_delay': timedelta(minutes=5),
}

dag = DAG(
    'vanderbilt_wonder_scoring_pipeline',
    default_args=default_args,
    description='Daily scoring pipeline for Wonder Portal',
    schedule_interval='0 2 * * *',  # 2 AM daily
    start_date=datetime(2024, 1, 1),
    catchup=False,
    tags=['narratum', 'scoring', 'wonder'],
)

# Task 1: Run dbt models
run_dbt_models = SnowflakeOperator(
    task_id='run_dbt_transformations',
    sql='CALL ANALYTICS.RUN_DBT_MODELS();',
    snowflake_conn_id='snowflake_default',
    dag=dag,
)

# Task 2: Compute proprietary scores
def compute_narratum_scores(**context):
    from narratum_intelligence.scoring_engine import NarratumScoringEngine
    
    config = {
        'user': '{{ var.value.snowflake_user }}',
        'password': '{{ var.value.snowflake_password }}',
        'account': '{{ var.value.snowflake_account }}',
        'warehouse': 'NARRATUM_WH',
        'database': 'VANDERBILT_DW',
        'schema': 'ANALYTICS'
    }
    
    engine = NarratumScoringEngine(config)
    engine.run_daily_scoring()

compute_scores = PythonOperator(
    task_id='compute_narratum_scores',
    python_callable=compute_narratum_scores,
    dag=dag,
)

# Task 3: Update ML models (weekly)
def update_ml_models(**context):
    from narratum_intelligence.ml_models import ChurnPredictionModel, LTVPredictionModel
    import pandas as pd
    from snowflake.connector import connect
    
    # Fetch training data
    conn = connect(**context['params']['snowflake_config'])
    
    # Train churn model
    churn_data = pd.read_sql("SELECT * FROM ANALYTICS.VW_CHURN_TRAINING_DATA", conn)
    churn_model = ChurnPredictionModel()
    churn_model.train(churn_data)
    churn_model.save('/opt/airflow/models/churn_model.pkl')
    
    # Train LTV model
    ltv_data = pd.read_sql("SELECT * FROM ANALYTICS.VW_LTV_TRAINING_DATA", conn)
    ltv_model = LTVPredictionModel()
    ltv_model.train(ltv_data)
    ltv_model.save('/opt/airflow/models/ltv_model.pkl')
    
    conn.close()

update_models = PythonOperator(
    task_id='update_ml_models',
    python_callable=update_ml_models,
    dag=dag,
)

# Task 4: Refresh Tableau extracts
refresh_tableau = SnowflakeOperator(
    task_id='refresh_tableau_extracts',
    sql='CALL ANALYTICS.REFRESH_TABLEAU_VIEWS();',
    snowflake_conn_id='snowflake_default',
    dag=dag,
)

# Task dependencies
run_dbt_models >> compute_scores >> update_models >> refresh_tableau
```

---

## 🌐 API LAYER {#api}

### FastAPI Service

```python
# api/main.py

from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import date, datetime
import pandas as pd
from snowflake.connector import connect
import os

app = FastAPI(
    title="Vanderbilt Wonder Portal API",
    version="1.0.0",
    description="Intelligence API for Narratum Wonder Platform"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://wonder.vanderbilt.edu", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Snowflake connection
def get_snowflake_conn():
    return connect(
        user=os.getenv('SNOWFLAKE_USER'),
        password=os.getenv('SNOWFLAKE_PASSWORD'),
        account=os.getenv('SNOWFLAKE_ACCOUNT'),
        warehouse='NARRATUM_WH',
        database='VANDERBILT_DW',
        schema='ANALYTICS'
    )


# Pydantic Models
class WonderScore(BaseModel):
    wonder_id: str
    wonder_score: float = Field(..., ge=0, le=100)
    wonder_score_tier: str
    percentile_rank: float
    engagement_score: float
    loyalty_score: float
    value_score: float
    sentiment_score: float
    advocacy_score: float
    hospitality_experience_score: Optional[float] = None
    digital_affinity_score: Optional[float] = None
    churn_risk_score: Optional[float] = None
    score_date: date
    calculated_at: datetime


class FanProfile(BaseModel):
    wonder_id: str
    first_name: str
    last_name: str
    current_tier: str
    primary_sport: Optional[str]
    account_age_days: int
    lifetime_value: float
    total_events_attended: int
    scores: WonderScore


class Insight(BaseModel):
    insight_id: str
    insight_type: str  # trend, anomaly, recommendation, prediction
    title: str
    description: str
    priority: str  # high, medium, low
    metric_name: str
    metric_value: float
    created_at: datetime


# Endpoints

@app.get("/")
async def root():
    return {
        "service": "Vanderbilt Wonder Portal API",
        "version": "1.0.0",
        "status": "operational"
    }


@app.get("/api/v1/scores/{wonder_id}", response_model=WonderScore)
async def get_wonder_score(wonder_id: str):
    """
    Get complete WonderScore profile for a fan.
    """
    conn = get_snowflake_conn()
    
    query = """
    SELECT
        ws.wonder_id,
        ws.wonder_score,
        ws.wonder_score_tier,
        ws.percentile_rank,
        ws.engagement_score,
        ws.loyalty_score,
        ws.value_score,
        ws.sentiment_score,
        ws.advocacy_score,
        ex.hospitality_experience_score,
        ex.digital_affinity_score,
        ex.churn_risk_score,
        ws.score_date,
        ws.calculated_at
    FROM ANALYTICS.MART_WONDERSCORE_DAILY ws
    LEFT JOIN ANALYTICS.MART_WONDERSCORE_EXTENDED ex
        ON ws.wonder_id = ex.wonder_id AND ws.score_date = ex.score_date
    WHERE ws.wonder_id = %s
        AND ws.score_date = CURRENT_DATE()
    """
    
    df = pd.read_sql(query, conn, params=(wonder_id,))
    conn.close()
    
    if df.empty:
        raise HTTPException(status_code=404, detail="Wonder ID not found")
    
    return WonderScore(**df.iloc[0].to_dict())


@app.get("/api/v1/fans/{wonder_id}", response_model=FanProfile)
async def get_fan_profile(wonder_id: str):
    """
    Get complete fan profile with scores.
    """
    conn = get_snowflake_conn()
    
    query = """
    SELECT
        f.wonder_id,
        f.first_name,
        f.last_name,
        f.current_tier,
        f.primary_sport,
        DATEDIFF(day, f.account_created_date, CURRENT_DATE()) AS account_age_days,
        COALESCE(SUM(fs.net_revenue), 0) AS lifetime_value,
        COUNT(DISTINCT fa.event_sk) AS total_events_attended
    FROM ANALYTICS.DIM_FAN f
    LEFT JOIN ANALYTICS.FACT_SPEND fs ON f.fan_sk = fs.fan_sk
    LEFT JOIN ANALYTICS.FACT_ATTENDANCE fa ON f.fan_sk = fa.fan_sk
    WHERE f.wonder_id = %s
    GROUP BY 1, 2, 3, 4, 5, 6
    """
    
    df = pd.read_sql(query, conn, params=(wonder_id,))
    
    if df.empty:
        conn.close()
        raise HTTPException(status_code=404, detail="Fan not found")
    
    profile_data = df.iloc[0].to_dict()
    
    # Get scores
    scores = await get_wonder_score(wonder_id)
    profile_data['scores'] = scores
    
    conn.close()
    return FanProfile(**profile_data)


@app.get("/api/v1/segments/{segment_name}")
async def get_segment(segment_name: str, limit: int = 100):
    """
    Get fans in a specific segment.
    
    Segments: elite, champions, at_risk, high_value, inactive, etc.
    """
    conn = get_snowflake_conn()
    
    segment_queries = {
        'elite': "wonder_score >= 85",
        'champions': "wonder_score >= 70 AND wonder_score < 85",
        'at_risk': "churn_risk_score >= 70",
        'high_value': "value_score >= 80",
        'inactive': "engagement_score < 30",
        'advocates': "advocacy_score >= 70",
        'new_members': "account_age_days <= 90"
    }
    
    if segment_name not in segment_queries:
        raise HTTPException(status_code=400, detail="Invalid segment name")
    
    query = f"""
    SELECT
        ws.wonder_id,
        ws.wonder_score,
        ws.wonder_score_tier,
        f.first_name,
        f.last_name,
        f.current_tier,
        ex.churn_risk_score
    FROM ANALYTICS.MART_WONDERSCORE_DAILY ws
    JOIN ANALYTICS.DIM_FAN f ON ws.wonder_id = f.wonder_id
    LEFT JOIN ANALYTICS.MART_WONDERSCORE_EXTENDED ex 
        ON ws.wonder_id = ex.wonder_id AND ws.score_date = ex.score_date
    WHERE ws.score_date = CURRENT_DATE()
        AND {segment_queries[segment_name]}
    ORDER BY ws.wonder_score DESC
    LIMIT {limit}
    """
    
    df = pd.read_sql(query, conn)
    conn.close()
    
    return df.to_dict('records')


@app.get("/api/v1/insights", response_model=List[Insight])
async def get_insights(department: Optional[str] = None):
    """
    Get AI-generated insights.
    """
    conn = get_snowflake_conn()
    
    query = """
    SELECT
        insight_id,
        insight_type,
        title,
        description,
        priority,
        metric_name,
        metric_value,
        created_at
    FROM ANALYTICS.MART_AI_INSIGHTS
    WHERE insight_date = CURRENT_DATE()
        AND (department = %s OR %s IS NULL)
    ORDER BY
        CASE priority
            WHEN 'high' THEN 1
            WHEN 'medium' THEN 2
            WHEN 'low' THEN 3
        END,
        created_at DESC
    LIMIT 50
    """
    
    df = pd.read_sql(query, conn, params=(department, department))
    conn.close()
    
    return [Insight(**row) for row in df.to_dict('records')]


@app.get("/api/v1/metrics/dashboard")
async def get_dashboard_metrics(department: str = "executive"):
    """
    Get pre-aggregated dashboard metrics.
    """
    conn = get_snowflake_conn()
    
    if department == "executive":
        query = """
        SELECT
            AVG(wonder_score) AS avg_wonder_score,
            COUNT(DISTINCT wonder_id) AS total_active_members,
            SUM(value_score) AS total_value_index,
            AVG(sentiment_score) AS avg_sentiment,
            COUNT(CASE WHEN wonder_score >= 85 THEN 1 END) AS elite_count,
            COUNT(CASE WHEN churn_risk_score >= 70 THEN 1 END) AS at_risk_count
        FROM ANALYTICS.MART_WONDERSCORE_DAILY ws
        LEFT JOIN ANALYTICS.MART_WONDERSCORE_EXTENDED ex 
            ON ws.wonder_id = ex.wonder_id AND ws.score_date = ex.score_date
        WHERE ws.score_date = CURRENT_DATE()
        """
    elif department == "athletics":
        query = """
        SELECT
            sport,
            AVG(engagement_score) AS avg_engagement,
            COUNT(DISTINCT wonder_id) AS fan_count,
            AVG(hospitality_experience_score) AS avg_hospitality_score
        FROM ANALYTICS.MART_WONDERSCORE_DAILY ws
        JOIN ANALYTICS.DIM_FAN f ON ws.wonder_id = f.wonder_id
        LEFT JOIN ANALYTICS.MART_WONDERSCORE_EXTENDED ex 
            ON ws.wonder_id = ex.wonder_id
        WHERE ws.score_date = CURRENT_DATE()
            AND f.primary_sport IS NOT NULL
        GROUP BY 1
        ORDER BY avg_engagement DESC
        """
    else:
        raise HTTPException(status_code=400, detail="Invalid department")
    
    df = pd.read_sql(query, conn)
    conn.close()
    
    return df.to_dict('records')


@app.post("/api/v1/predictions/churn")
async def predict_churn_batch(wonder_ids: List[str]):
    """
    Batch churn prediction for a list of fans.
    """
    from narratum_intelligence.ml_models import ChurnPredictionModel
    
    model = ChurnPredictionModel()
    model.load('/opt/airflow/models/churn_model.pkl')
    
    conn = get_snowflake_conn()
    
    # Fetch features for prediction
    placeholders = ','.join(['%s'] * len(wonder_ids))
    query = f"""
    SELECT * FROM ANALYTICS.VW_CHURN_FEATURES
    WHERE wonder_id IN ({placeholders})
    """
    
    df = pd.read_sql(query, conn, params=wonder_ids)
    conn.close()
    
    if df.empty:
        raise HTTPException(status_code=404, detail="No fans found")
    
    # Predict
    predictions = model.predict_proba(df)
    
    results = []
    for i, wonder_id in enumerate(df['wonder_id']):
        results.append({
            'wonder_id': wonder_id,
            'churn_probability': round(float(predictions[i]) * 100, 2),
            'risk_level': 'high' if predictions[i] > 0.7 else 'medium' if predictions[i] > 0.4 else 'low'
        })
    
    return results


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
```

---

## ⚛️ REACT PORTAL INTEGRATION {#react}

### Next.js Wonder Portal Component

```typescript
// components/WonderScoreCard.tsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

interface WonderScore {
  wonder_id: string;
  wonder_score: number;
  wonder_score_tier: string;
  percentile_rank: number;
  engagement_score: number;
  loyalty_score: number;
  value_score: number;
  sentiment_score: number;
  advocacy_score: number;
  hospitality_experience_score?: number;
  digital_affinity_score?: number;
  churn_risk_score?: number;
}

interface ScoreRingProps {
  score: number;
  label: string;
  color: string;
  delay: number;
}

const ScoreRing: React.FC<ScoreRingProps> = ({ score, label, color, delay }) => {
  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6 }}
    >
      <svg width="120" height="120" viewBox="0 0 120 120">
        {/* Background circle */}
        <circle
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="8"
        />
        {/* Score circle */}
        <motion.circle
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, delay: delay + 0.3, ease: "easeOut" }}
          transform="rotate(-90 60 60)"
        />
        {/* Score text */}
        <text
          x="60"
          y="60"
          textAnchor="middle"
          dy=".3em"
          className="text-2xl font-bold fill-white"
        >
          {Math.round(score)}
        </text>
      </svg>
      <p className="text-center text-sm text-gray-400 mt-2">{label}</p>
    </motion.div>
  );
};

const WonderOrb: React.FC<{ score: number }> = ({ score }) => {
  return (
    <Sphere args={[1, 64, 64]}>
      <MeshDistortMaterial
        color={score >= 85 ? "#FFD700" : score >= 70 ? "#4169E1" : "#A9A9A9"}
        attach="material"
        distort={0.3 + (score / 100) * 0.4}
        speed={1 + (score / 100)}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

export const WonderScoreCard: React.FC<{ wonderId: string }> = ({ wonderId }) => {
  const [scoreData, setScoreData] = useState<WonderScore | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/v1/scores/${wonderId}`)
      .then(res => res.json())
      .then(data => {
        setScoreData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching score:', err);
        setLoading(false);
      });
  }, [wonderId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96 bg-black">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-t-4 border-gold rounded-full"
        />
      </div>
    );
  }

  if (!scoreData) {
    return <div className="text-white">Score data not available</div>;
  }

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black p-8 rounded-lg border border-gold/20">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl font-bold text-gold mb-2">
          WonderScore™
        </h2>
        <div className="text-7xl font-black text-white my-4">
          {Math.round(scoreData.wonder_score)}
        </div>
        <div className="inline-block px-6 py-2 bg-gold/20 border border-gold rounded-full">
          <span className="text-gold font-semibold text-lg">
            {scoreData.wonder_score_tier}
          </span>
        </div>
        <p className="text-gray-400 mt-2">
          Top {(100 - scoreData.percentile_rank).toFixed(1)}% of all members
        </p>
      </motion.div>

      {/* 3D Orb */}
      <div className="h-64 mb-8">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <WonderOrb score={scoreData.wonder_score} />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        </Canvas>
      </div>

      {/* Score Rings */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
        <ScoreRing
          score={scoreData.engagement_score}
          label="Engagement"
          color="#4169E1"
          delay={0}
        />
        <ScoreRing
          score={scoreData.loyalty_score}
          label="Loyalty"
          color="#9370DB"
          delay={0.1}
        />
        <ScoreRing
          score={scoreData.value_score}
          label="Value"
          color="#FFD700"
          delay={0.2}
        />
        <ScoreRing
          score={scoreData.sentiment_score}
          label="Sentiment"
          color="#32CD32"
          delay={0.3}
        />
        <ScoreRing
          score={scoreData.advocacy_score}
          label="Advocacy"
          color="#FF6347"
          delay={0.4}
        />
      </div>

      {/* Additional Scores */}
      {(scoreData.hospitality_experience_score || 
        scoreData.digital_affinity_score || 
        scoreData.churn_risk_score) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-3 gap-4 p-4 bg-black/40 rounded-lg border border-gold/10"
        >
          {scoreData.hospitality_experience_score && (
            <div className="text-center">
              <div className="text-2xl font-bold text-gold">
                {Math.round(scoreData.hospitality_experience_score)}
              </div>
              <div className="text-xs text-gray-400">Hospitality</div>
            </div>
          )}
          {scoreData.digital_affinity_score && (
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">
                {Math.round(scoreData.digital_affinity_score)}
              </div>
              <div className="text-xs text-gray-400">Digital</div>
            </div>
          )}
          {scoreData.churn_risk_score && (
            <div className="text-center">
              <div className={`text-2xl font-bold ${
                scoreData.churn_risk_score > 70 ? 'text-red-500' :
                scoreData.churn_risk_score > 40 ? 'text-yellow-500' :
                'text-green-500'
              }`}>
                {Math.round(scoreData.churn_risk_score)}
              </div>
              <div className="text-xs text-gray-400">Churn Risk</div>
            </div>
          )}
        </motion.div>
      )}

      {/* AI Narrative Strip */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-6 p-4 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 rounded-lg border border-gold/30"
      >
        <div className="flex items-start gap-3">
          <div className="text-2xl">✨</div>
          <div>
            <div className="text-xs text-gold font-semibold mb-1">WONDER AI INSIGHT</div>
            <p className="text-sm text-gray-300">
              {generateAIInsight(scoreData)}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

function generateAIInsight(data: WonderScore): string {
  const insights = [];
  
  if (data.engagement_score > 80) {
    insights.push("Exceptional engagement across all touchpoints");
  }
  if (data.value_score > 85) {
    insights.push("Top-tier financial contributor");
  }
  if (data.churn_risk_score && data.churn_risk_score > 70) {
    insights.push("⚠️ At-risk member - recommend personalized outreach");
  }
  if (data.advocacy_score > 75) {
    insights.push("Strong advocate - excellent referral potential");
  }
  
  return insights.length > 0 
    ? insights.join(". ") + "."
    : `Solid ${data.wonder_score_tier} member with balanced engagement across all dimensions.`;
}
```

---

## 🤖 AI NARRATION ENGINE {#ai}

### GPT-4 Integration for Insights

```python
# narratum_intelligence/ai_narrator.py

import openai
from typing import List, Dict
import pandas as pd
from datetime import datetime
import json

openai.api_key = os.getenv('OPENAI_API_KEY')


class WonderAIAssistant:
    """
    AI-powered narrative generation for Wonder Portal insights.
    """
    
    def __init__(self):
        self.model = "gpt-4-turbo-preview"
        
    def generate_executive_summary(self, metrics: Dict) -> str:
        """
        Generate natural language executive summary.
        """
        
        prompt = f"""
        You are Wonder, the AI assistant for Vanderbilt's loyalty intelligence platform.
        
        Generate a concise, executive-level summary of today's key metrics:
        
        - Average WonderScore: {metrics['avg_wonder_score']:.1f}
        - Total Active Members: {metrics['total_active_members']:,}
        - Elite Members: {metrics['elite_count']:,}
        - At-Risk Members: {metrics['at_risk_count']:,}
        - Average Sentiment: {metrics['avg_sentiment']:.1f}
        
        Historical context: 
        - WonderScore vs. last month: {metrics.get('score_change_pct', 0):+.1f}%
        - Membership growth: {metrics.get('membership_growth_pct', 0):+.1f}%
        
        Provide a 2-3 sentence narrative that highlights the most important trend and one actionable insight.
        Use a professional but warm tone. Start directly with the insight - no preamble.
        """
        
        response = openai.chat.completions.create(
            model=self.model,
            messages=[
                {"role": "system", "content": "You are Wonder, Vanderbilt's loyalty intelligence AI."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.7,
            max_tokens=200
        )
        
        return response.choices[0].message.content.strip()
    
    def generate_fan_insight(self, fan_data: Dict) -> str:
        """
        Generate personalized insight for a specific fan.
        """
        
        prompt = f"""
        Generate a personalized insight for this Vanderbilt community member:
        
        - WonderScore: {fan_data['wonder_score']}
        - Tier: {fan_data['wonder_score_tier']}
        - Engagement: {fan_data['engagement_score']}
        - Loyalty: {fan_data['loyalty_score']}
        - Value: {fan_data['value_score']}
        - Sentiment: {fan_data['sentiment_score']}
        - Days as member: {fan_data.get('account_age_days', 0)}
        
        Provide one sentence highlighting their strongest dimension and one opportunity for deeper engagement.
        Be encouraging and specific. No generic praise.
        """
        
        response = openai.chat.completions.create(
            model=self.model,
            messages=[
                {"role": "system", "content": "You are Wonder, a personalized AI assistant."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.8,
            max_tokens=150
        )
        
        return response.choices[0].message.content.strip()
    
    def detect_anomalies(self, df: pd.DataFrame) -> List[Dict]:
        """
        Use AI to detect noteworthy patterns in the data.
        """
        
        summary_stats = df.describe().to_dict()
        
        prompt = f"""
        Analyze this statistical summary of Vanderbilt's loyalty data:
        
        {json.dumps(summary_stats, indent=2)}
        
        Identify 2-3 noteworthy anomalies, trends, or insights that would be valuable for leadership.
        Format as JSON array:
        [
          {{
            "type": "anomaly|trend|insight",
            "metric": "metric_name",
            "description": "brief description",
            "priority": "high|medium|low"
          }}
        ]
        """
        
        response = openai.chat.completions.create(
            model=self.model,
            messages=[
                {"role": "system", "content": "You are a data scientist analyzing loyalty metrics."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.5,
            max_tokens=500,
            response_format={"type": "json_object"}
        )
        
        return json.loads(response.choices[0].message.content)
    
    def generate_department_report(self, department: str, metrics: Dict) -> str:
        """
        Generate tailored narrative for specific departments.
        """
        
        department_context = {
            'athletics': "Focus on game attendance, fan engagement by sport, and premium hospitality experiences.",
            'marketing': "Focus on campaign effectiveness, digital engagement, and new member acquisition.",
            'finance': "Focus on revenue metrics, ROI, and program profitability.",
            'alumni': "Focus on engagement across graduation years, giving, and advocacy."
        }
        
        prompt = f"""
        Generate a brief report for Vanderbilt's {department.title()} department.
        
        Context: {department_context.get(department, 'General operations')}
        
        Metrics:
        {json.dumps(metrics, indent=2)}
        
        Provide:
        1. One key win/success
        2. One area of concern or opportunity
        3. One specific recommendation
        
        Use bullet points. Be specific and actionable.
        """
        
        response = openai.chat.completions.create(
            model=self.model,
            messages=[
                {"role": "system", "content": f"You are a {department} analyst for Vanderbilt."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.7,
            max_tokens=300
        )
        
        return response.choices[0].message.content.strip()
```

---

## 🚀 DEPLOYMENT & OPERATIONS {#deployment}

### Infrastructure (Terraform)

```hcl
# infrastructure/main.tf

terraform {
  required_providers {
    snowflake = {
      source  = "Snowflake-Labs/snowflake"
      version = "~> 0.87"
    }
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

# Snowflake Resources
resource "snowflake_warehouse" "narratum_wh" {
  name           = "NARRATUM_WH"
  warehouse_size = "LARGE"
  auto_suspend   = 300
  auto_resume    = true
  comment        = "Wonder Portal scoring warehouse"
}

resource "snowflake_database" "vanderbilt_dw" {
  name    = "VANDERBILT_DW"
  comment = "Vanderbilt Wonder Portal data warehouse"
}

resource "snowflake_schema" "analytics" {
  database = snowflake_database.vanderbilt_dw.name
  name     = "ANALYTICS"
  comment  = "Curated analytics models"
}

resource "snowflake_schema" "scoring" {
  database = snowflake_database.vanderbilt_dw.name
  name     = "SCORING"
  comment  = "Narratum Intelligence Score models"
}

# AWS Resources for API
resource "aws_ecs_cluster" "wonder_api" {
  name = "wonder-portal-api"
}

resource "aws_ecs_task_definition" "api" {
  family                   = "wonder-api"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = 1024
  memory                   = 2048
  
  container_definitions = jsonencode([{
    name  = "fastapi"
    image = "${aws_ecr_repository.api.repository_url}:latest"
    portMappings = [{
      containerPort = 8000
      protocol      = "tcp"
    }]
    environment = [
      { name = "SNOWFLAKE_ACCOUNT", value = var.snowflake_account },
      { name = "SNOWFLAKE_USER", value = var.snowflake_user }
    ]
    secrets = [
      {
        name      = "SNOWFLAKE_PASSWORD"
        valueFrom = aws_secretsmanager_secret.snowflake.arn
      }
    ]
  }])
}

resource "aws_lb" "api" {
  name               = "wonder-api-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.alb.id]
  subnets            = var.public_subnet_ids
}

# Airflow on ECS
resource "aws_ecs_task_definition" "airflow" {
  family                   = "wonder-airflow"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = 2048
  memory                   = 4096
  
  container_definitions = jsonencode([{
    name  = "airflow-scheduler"
    image = "${aws_ecr_repository.airflow.repository_url}:latest"
    command = ["scheduler"]
  }])
}
```

### Docker Compose for Local Development

```yaml
# docker-compose.yml

version: '3.8'

services:
  api:
    build: ./api
    ports:
      - "8000:8000"
    environment:
      - SNOWFLAKE_ACCOUNT=${SNOWFLAKE_ACCOUNT}
      - SNOWFLAKE_USER=${SNOWFLAKE_USER}
      - SNOWFLAKE_PASSWORD=${SNOWFLAKE_PASSWORD}
      - OPENAI_API_KEY=${OPENAI_API_KEY}
    volumes:
      - ./api:/app
    command: uvicorn main:app --reload --host 0.0.0.0 --port 8000

  airflow-webserver:
    build: ./airflow
    ports:
      - "8080:8080"
    environment:
      - AIRFLOW__CORE__EXECUTOR=LocalExecutor
      - AIRFLOW__DATABASE__SQL_ALCHEMY_CONN=postgresql+psycopg2://airflow:airflow@postgres/airflow
    volumes:
      - ./airflow/dags:/opt/airflow/dags
      - ./airflow/plugins:/opt/airflow/plugins
      - ./narratum_intelligence:/opt/airflow/narratum_intelligence
    command: webserver

  airflow-scheduler:
    build: ./airflow
    environment:
      - AIRFLOW__CORE__EXECUTOR=LocalExecutor
      - AIRFLOW__DATABASE__SQL_ALCHEMY_CONN=postgresql+psycopg2://airflow:airflow@postgres/airflow
    volumes:
      - ./airflow/dags:/opt/airflow/dags
      - ./airflow/plugins:/opt/airflow/plugins
      - ./narratum_intelligence:/opt/airflow/narratum_intelligence
    command: scheduler

  postgres:
    image: postgres:14
    environment:
      - POSTGRES_USER=airflow
      - POSTGRES_PASSWORD=airflow
      - POSTGRES_DB=airflow
    volumes:
      - postgres-db-volume:/var/lib/postgresql/data

  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_API_URL=http://localhost:8000
    volumes:
      - ./frontend:/app
      - /app/node_modules
    command: npm run dev

volumes:
  postgres-db-volume:
```

### Monitoring & Alerts

```python
# monitoring/datadog_monitors.py

from datadog_api_client import ApiClient, Configuration
from datadog_api_client.v1.api.monitors_api import MonitorsApi
from datadog_api_client.v1.model.monitor import Monitor

configuration = Configuration()

# Score Computation Delay Monitor
score_delay_monitor = Monitor(
    name="Wonder Portal - Score Computation Delayed",
    type="metric alert",
    query="avg(last_5m):max:snowflake.query.execution_time{service:wonder-scoring} > 600",
    message="""
    WonderScore computation is taking longer than expected.
    
    Current execution time: {{value}}s
    Threshold: 600s
    
    @slack-narratum-alerts
    """,
    tags=["service:wonder-portal", "team:narratum"],
    priority=1
)

# Churn Risk Spike Monitor
churn_spike_monitor = Monitor(
    name="Wonder Portal - At-Risk Members Spike",
    type="query alert",
    query="avg(last_1h):avg:wonder.members.at_risk{tier:elite} > 50",
    message="""
    High-value members showing elevated churn risk.
    
    Count: {{value}}
    Threshold: 50
    
    Action: Review elite member engagement immediately.
    
    @pagerduty-on-call @slack-vp-loyalty
    """,
    tags=["service:wonder-portal", "team:loyalty"],
    priority=1
)

# API Latency Monitor
api_latency_monitor = Monitor(
    name="Wonder Portal API - High Latency",
    type="metric alert",
    query="avg(last_15m):avg:wonder.api.latency{endpoint:/api/v1/scores} > 2000",
    message="""
    Wonder Portal API experiencing high latency.
    
    P95 latency: {{value}}ms
    Threshold: 2000ms
    
    @slack-engineering-alerts
    """,
    tags=["service:wonder-api", "team:narratum"],
    priority=2
)
```

---

## 📝 SUMMARY

This technical implementation provides:

1. **Complete Data Pipeline**: From raw sources → Snowflake → dbt → Narratum Intelligence → API → Portal
2. **Scoring Algorithms**: All proprietary Narratum scores with SQL/Python implementations
3. **ML Models**: Churn prediction and LTV forecasting
4. **Production-Ready API**: FastAPI service with comprehensive endpoints
5. **React Integration**: 3D visualizations with Framer Motion
6. **AI Narration**: GPT-4 powered insights and summaries
7. **Orchestration**: Airflow DAGs for daily processing
8. **Infrastructure**: Terraform for deployment
9. **Monitoring**: Datadog alerts for operational health

**Key Deliverables:**
- ✅ Snowflake schema (star schema with fact/dim tables)
- ✅ dbt transformation models (staging → intermediate → marts)
- ✅ Python scoring engine with all Narratum Intelligence Scores
- ✅ FastAPI REST API with authentication
- ✅ React/Three.js components for visual experience
- ✅ AI narrative generation
- ✅ Deployment infrastructure (AWS ECS, Terraform)
- ✅ Monitoring & alerting

**Next Steps:**
1. Set up Snowflake environment and run schema migrations
2. Configure dbt Cloud and run initial transformations
3. Deploy API to AWS ECS
4. Train ML models on historical data
5. Build out React Portal frontend
6. Configure Tableau dashboards
7. Run UAT with stakeholders
8. Production launch 🚀