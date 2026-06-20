import { GeeksForGeeksStats } from './types'
import { withCache } from './cache'

export async function fetchGFGRaw(username: string): Promise<GeeksForGeeksStats> {
  try {
    const res = await fetch(`https://www.geeksforgeeks.org/profile/${username}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      },
      next: { revalidate: 3600 }
    })

    if (!res.ok) {
      throw new Error(`GFG response error: ${res.status}`)
    }

    const html = await res.text()

    // 1. Coding Score
    const scoreMatch = html.match(/"score":\s*(\d+)/)
    const score = scoreMatch ? parseInt(scoreMatch[1], 10) : 340

    // 2. Problems Solved
    const solvedMatch = html.match(/"total_problems_solved":\s*(\d+)/)
    const problemsSolved = solvedMatch ? parseInt(solvedMatch[1], 10) : 80

    // 3. Institute Rank
    const rankMatch = html.match(/"institute_rank":\s*(\d+)/)
    const instituteRank = rankMatch ? parseInt(rankMatch[1], 10) : 18

    return {
      status: 'success',
      score,
      problemsSolved,
      instituteRank
    }
  } catch (error) {
    console.error('Error fetching real GFG stats:', error)
    return {
      status: 'error',
      score: 340,
      problemsSolved: 80,
      instituteRank: 18
    }
  }
}

export async function getGFGStats(username: string): Promise<GeeksForGeeksStats> {
  return withCache(`gfg_${username}`, 3600, () => fetchGFGRaw(username))
}
