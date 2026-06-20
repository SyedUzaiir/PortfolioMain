import { NextResponse } from 'next/server'
import { getGitHubStats } from '@/lib/apis/github'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const username = searchParams.get('username') || 'SyedUzaiir'

  try {
    const stats = await getGitHubStats(username)
    return NextResponse.json(stats)
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Server error'
    return NextResponse.json({ status: 'error', message: errorMessage }, { status: 500 })
  }
}
