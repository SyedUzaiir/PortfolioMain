import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const username = searchParams.get('username') || 'uzairmohiuddin'

  try {
    const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`, {
      next: { revalidate: 3600 }
    })

    if (!res.ok) {
      return NextResponse.json(
        { status: 'error', message: 'Failed to fetch LeetCode stats from Heroku API' },
        { status: 500 }
      )
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Server-side connection error'
    return NextResponse.json(
      { status: 'error', message: errorMessage },
      { status: 500 }
    )
  }
}
