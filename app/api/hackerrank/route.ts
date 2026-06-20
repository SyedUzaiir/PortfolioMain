import { NextResponse } from 'next/server'
import { getHackerRankStats } from '@/lib/apis/hackerrank'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const username = searchParams.get('username') || 'uzairmohiuddin'

  try {
    const stats = await getHackerRankStats(username)
    return NextResponse.json(stats)
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Server error'
    return NextResponse.json({ status: 'error', message: errorMessage }, { status: 500 })
  }
}
