export interface GitHubStats {
  publicRepos: number
  followers: number
  totalStars: number
}

export interface LeetCodeStats {
  totalSolved: number
  ranking: number
  acceptanceRate: number
}

export async function getGitHubStats(username: string): Promise<GitHubStats> {
  try {
    const res = await fetch(`/api/github?username=${username}`)
    
    if (!res.ok) {
      throw new Error('Failed to fetch GitHub stats from local API route')
    }
    const data = await res.json()

    if (data.status !== 'success') {
      throw new Error(data.message || 'GitHub API Route failed')
    }

    return {
      publicRepos: data.publicRepos || 0,
      followers: data.followers || 0,
      totalStars: data.totalStars || 0
    }
  } catch (error) {
    console.warn('Using GitHub local fallbacks due to connection drop:', error)
    return {
      publicRepos: 18,
      followers: 45,
      totalStars: 8
    }
  }
}

export async function getLeetCodeStats(username: string): Promise<LeetCodeStats> {
  try {
    const res = await fetch(`/api/leetcode?username=${username}`)

    if (!res.ok) {
      throw new Error('Failed to fetch LeetCode stats from local API route')
    }
    const data = await res.json()

    if (data.status !== 'success') {
      throw new Error(data.message || 'LeetCode API Route failed')
    }

    return {
      totalSolved: data.totalSolved || 0,
      ranking: data.ranking || 0,
      acceptanceRate: data.acceptanceRate || 0
    }
  } catch (error) {
    console.warn('Using LeetCode local fallbacks due to connection drop:', error)
    return {
      totalSolved: 342,
      ranking: 154300,
      acceptanceRate: 58.4
    }
  }
}
