/**
 * AOE Configuration Settings
 * Central configuration for all modules
 */

export const AOE_CONFIG = {
  // System settings
  name: 'Good Hands AOE',
  version: '1.0.0',
  enabled: true,
  
  // Operating hours (only run during these times)
  operatingHours: {
    start: '00:00',
    end: '23:59',
    timezone: 'Europe/Lisbon',
  },

  // Module configuration
  modules: {
    photography: {
      enabled: true,
      schedule: 'weekly',
      priority: 'high',
      maxChangesPerRun: 10,
      minConfidenceScore: 0.75,
    },

    design: {
      enabled: true,
      schedule: 'weekly',
      priority: 'high',
      maxChangesPerRun: 5,
      minConfidenceScore: 0.80,
      competitorWebsites: [
        'https://www.vogue.com',
        'https://www.dior.com',
        'https://www.chanel.com',
        'https://www.farfetch.com',
        'https://www.net-a-porter.com',
      ],
    },

    seo: {
      enabled: true,
      schedule: 'daily',
      priority: 'high',
      maxChangesPerRun: 15,
      minConfidenceScore: 0.70,
      targetKeywords: [
        'makeup artist lisbon',
        'beauty services lisbon',
        'hair salon lisbon',
        'bridal makeup lisbon',
        'luxury beauty lisbon',
      ],
    },

    content: {
      enabled: true,
      schedule: 'weekly',
      priority: 'medium',
      postsPerWeek: 2,
      topics: [
        'Lisbon beauty trends',
        'Portuguese beauty culture',
        'Wedding beauty guides',
        'Seasonal beauty tips',
        'Lisbon neighborhood guides',
      ],
    },

    quality: {
      enabled: true,
      schedule: 'daily',
      priority: 'critical',
      checks: [
        'build',
        'lint',
        'types',
        'links',
        'images',
        'forms',
        'mobile',
      ],
    },

    security: {
      enabled: true,
      schedule: 'daily',
      priority: 'critical',
      checks: [
        'dependencies',
        'apis',
        'env',
        'headers',
      ],
    },

    market: {
      enabled: true,
      schedule: 'weekly',
      priority: 'medium',
      sources: [
        'google-analytics',
        'notion-reviews',
        'competitor-analysis',
        'search-trends',
      ],
    },
  },

  // AI Services
  ai: {
    openai: {
      model: 'gpt-4-turbo-preview',
      temperature: 0.7,
      maxTokens: 2000,
    },
    claude: {
      model: 'claude-3-opus-20240229',
      temperature: 0.7,
    },
    perplexity: {
      model: 'sonar-pro',
    },
  },

  // Deployment settings
  deployment: {
    maxDeploymentsPerDay: 3,
    requireManualApproval: false,
    autoMerge: true,
    branchPrefix: 'aoe',
    commitMessageTemplate: 'Auto: {module} - {description}',
  },

  // Quality gates
  qualityGates: {
    buildMustPass: true,
    testsMustPass: true,
    lintMustPass: true,
    minConfidenceScore: 0.70,
    maxFileChanges: 50,
    requirePreviewDeploy: true,
    monitorAfterDeploy: true,
  },

  // Monitoring
  monitoring: {
    trackMetrics: true,
    alertOnErrors: true,
    generateReports: true,
    reportFrequency: 'weekly',
  },

  // Paths
  paths: {
    logDirectory: '.aoe/logs',
    dataDirectory: 'autonomous/data',
    reportsDirectory: 'autonomous/data/reports',
    stateFile: '.aoe/state.json',
  },
} as const

// Type-safe config access
export type AOEConfig = typeof AOE_CONFIG

