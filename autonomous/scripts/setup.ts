/**
 * AOE Setup Script
 * 
 * One-time setup to get the autonomous system running
 */

import * as fs from 'fs'
import * as path from 'path'
import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)

async function setup() {
  console.log('🚀 Setting up AOE Autonomous Improvement System...\n')

  try {
    // 1. Check dependencies
    console.log('📦 Checking dependencies...')
    await checkDependencies()

    // 2. Create required directories
    console.log('📁 Creating directories...')
    createDirectories()

    // 3. Create initial state
    console.log('⚙️ Creating initial state...')
    createInitialState()

    // 4. Install autonomous dependencies
    console.log('📦 Installing autonomous dependencies...')
    await installDependencies()

    console.log('\n✅ Setup complete!')
    console.log('\n🚀 To start the system, run:')
    console.log('   cd autonomous')
    console.log('   npm start')
    console.log('\n📚 Read START_HERE.md for more info')

  } catch (error: any) {
    console.error('❌ Setup failed:', error.message)
    process.exit(1)
  }
}

async function checkDependencies() {
  const required = ['node', 'npm', 'git']
  
  for (const dep of required) {
    try {
      await execAsync(`which ${dep}`)
      console.log(`  ✅ ${dep} installed`)
    } catch {
      console.error(`  ❌ ${dep} not found. Please install ${dep}`)
      throw new Error(`Missing dependency: ${dep}`)
    }
  }
}

function createDirectories() {
  const dirs = [
    '.aoe',
    '.aoe/logs',
    'autonomous/data',
    'autonomous/data/reports',
    'autonomous/utils',
  ]

  dirs.forEach(dir => {
    const fullPath = path.join(process.cwd(), dir)
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true })
      console.log(`  ✅ Created ${dir}`)
    } else {
      console.log(`  ⏭️  ${dir} already exists`)
    }
  })
}

function createInitialState() {
  const stateFile = path.join(process.cwd(), '.aoe', 'state.json')
  
  if (!fs.existsSync(stateFile)) {
    const initialState = {
      running: false,
      lastRun: null,
      modulesEnabled: [
        'photography',
        'design',
        'seo',
        'quality',
        'security',
      ],
      improvementsCount: 0,
      deploymentsToday: 0,
      createdAt: new Date().toISOString(),
    }

    fs.writeFileSync(stateFile, JSON.stringify(initialState, null, 2))
    console.log('  ✅ Created initial state')
  } else {
    console.log('  ⏭️  State file already exists')
  }

  // Create .gitignore entry
  const gitignorePath = path.join(process.cwd(), '.gitignore')
  let gitignore = ''
  
  if (fs.existsSync(gitignorePath)) {
    gitignore = fs.readFileSync(gitignorePath, 'utf8')
  }

  if (!gitignore.includes('.aoe')) {
    gitignore += '\n# AOE files\n.aoe/\n'
    fs.writeFileSync(gitignorePath, gitignore)
    console.log('  ✅ Updated .gitignore')
  }
}

async function installDependencies() {
  const autonomousPath = path.join(process.cwd(), 'autonomous')
  
  // Check if package.json exists in autonomous folder
  if (fs.existsSync(path.join(autonomousPath, 'package.json'))) {
    console.log('  📦 Installing autonomous dependencies...')
    try {
      await execAsync('npm install', { cwd: autonomousPath })
      console.log('  ✅ Dependencies installed')
    } catch (error: any) {
      console.log('  ⚠️  Some dependencies failed to install')
      console.log('     You may need to install manually: cd autonomous && npm install')
    }
  }
}

// Run setup
if (require.main === module) {
  setup().catch(console.error)
}

export { setup }

