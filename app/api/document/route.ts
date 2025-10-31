import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const filePath = searchParams.get('path')

  if (!filePath) {
    return NextResponse.json({ error: 'File path is required' }, { status: 400 })
  }

  try {
    // Security: Only allow reading files from _good-hands directory
    const projectRoot = process.cwd()
    const goodHandsRoot = projectRoot.includes('_good-hands') 
      ? projectRoot 
      : path.resolve(projectRoot, '_good-hands')
    const allowedPath = path.resolve(goodHandsRoot, filePath)
    
    // Double-check we're still within the allowed directory
    if (!allowedPath.startsWith(goodHandsRoot)) {
      return NextResponse.json({ error: 'Unauthorized access' }, { status: 403 })
    }

    // Check if file exists and is a markdown file
    if (!fs.existsSync(allowedPath)) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 })
    }

    const stats = fs.statSync(allowedPath)
    if (!stats.isFile()) {
      return NextResponse.json({ error: 'Not a file' }, { status: 400 })
    }

    // Read and return file content
    const content = fs.readFileSync(allowedPath, 'utf-8')
    
    return NextResponse.json({ 
      content,
      path: filePath,
      size: stats.size,
      lastModified: stats.mtime.toISOString()
    })
  } catch (error) {
    console.error('Error reading file:', error)
    return NextResponse.json(
      { error: 'Failed to read file', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
