import { NextResponse } from 'next/server'
import { getGFGStats } from '@/lib/apis/gfg'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const username = searchParams.get('username') || 'uzairmohiuddin'

  try {
    const stats = await getGFGStats(username)
    return NextResponse.json(stats)
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Server error'
    return NextResponse.json({ status: 'error', message: errorMessage }, { status: 500 })
  }
}
