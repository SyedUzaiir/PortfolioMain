import { NextResponse } from 'next/server'
import { getCodeChefStats } from '@/lib/apis/codechef'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const username = searchParams.get('username') || 'uzair_777'

  try {
    const stats = await getCodeChefStats(username)
    return NextResponse.json(stats)
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Server error'
    return NextResponse.json({ status: 'error', message: errorMessage }, { status: 500 })
  }
}
