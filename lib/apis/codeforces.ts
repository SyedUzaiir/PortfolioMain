import { CodeforcesStats } from './types'
import { withCache } from './cache'

// Codeforces has an official, unauthenticated public API — no scraping needed.
// Docs: https://codeforces.com/apiHelp/methods#user.info
const CF_API = 'https://codeforces.com/api/user.info'

const FALLBACK: CodeforcesStats = {
  status: 'error',
  handle: 'UzairMohiuddin',
  rating: 1200,
  maxRating: 1200,
  rank: 'pupil',
  maxRank: 'pupil',
  contribution: 0
}

export async function fetchCodeforcesRaw(handle: string): Promise<CodeforcesStats> {
  try {
    const res = await fetch(`${CF_API}?handles=${encodeURIComponent(handle)}`, {
      headers: {
        'User-Agent': 'PortfolioSite/1.0'
      },
      next: { revalidate: 3600 }
    })

    if (!res.ok) {
      throw new Error(`Codeforces API error: ${res.status}`)
    }

    const json = await res.json()

    if (json.status !== 'OK' || !json.result?.length) {
      throw new Error('Codeforces returned no result')
    }

    const user = json.result[0]

    return {
      status: 'success',
      handle: user.handle,
      rating: user.rating ?? 0,
      maxRating: user.maxRating ?? 0,
      rank: user.rank ?? 'unrated',
      maxRank: user.maxRank ?? 'unrated',
      contribution: user.contribution ?? 0
    }
  } catch (error) {
    console.error('Error fetching Codeforces stats:', error)
    return FALLBACK
  }
}

export async function getCodeforcesStats(handle: string): Promise<CodeforcesStats> {
  return withCache(`codeforces_${handle}`, 3600, () => fetchCodeforcesRaw(handle))
}
