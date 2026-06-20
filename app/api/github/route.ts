import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const username = searchParams.get('username') || 'SyedUzaiir'

  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 3600 }
    })
    
    if (!userRes.ok) {
      return NextResponse.json(
        { status: 'error', message: 'Failed to fetch GitHub profile from API' },
        { status: 500 }
      )
    }
    const userData = await userRes.json()

    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
      next: { revalidate: 3600 }
    })
    let totalStars = 0
    if (reposRes.ok) {
      const reposData = await reposRes.json()
      if (Array.isArray(reposData)) {
        totalStars = reposData.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0)
      }
    }

    return NextResponse.json({
      status: 'success',
      publicRepos: userData.public_repos || 0,
      followers: userData.followers || 0,
      totalStars
    })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Server-side connection error'
    return NextResponse.json(
      { status: 'error', message: errorMessage },
      { status: 500 }
    )
  }
}
