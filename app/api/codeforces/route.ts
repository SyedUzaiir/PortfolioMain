import { NextResponse } from 'next/server'
import { getCodeforcesStats } from '@/lib/apis/codeforces'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const handle = searchParams.get('handle') || 'UzairMohiuddin'

  try {
    const stats = await getCodeforcesStats(handle)
    return NextResponse.json(stats)
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Server error'
    return NextResponse.json({ status: 'error', message: errorMessage }, { status: 500 })
  }
}
