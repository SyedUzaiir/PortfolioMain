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
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 3600 }
    })
    
    if (!userRes.ok) {
      throw new Error('Failed to fetch GitHub profile')
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

    return {
      publicRepos: userData.public_repos || 0,
      followers: userData.followers || 0,
      totalStars
    }
  } catch (error) {
    console.error('Error fetching GitHub stats:', error)
    return {
      publicRepos: 18,
      followers: 45,
      totalStars: 8
    }
  }
}

export async function getLeetCodeStats(username: string): Promise<LeetCodeStats> {
  try {
    const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`, {
      next: { revalidate: 3600 }
    })

    if (!res.ok) {
      throw new Error('Failed to fetch LeetCode stats')
    }
    const data = await res.json()

    if (data.status !== 'success') {
      throw new Error(data.message || 'LeetCode API failed')
    }

    return {
      totalSolved: data.totalSolved || 0,
      ranking: data.ranking || 0,
      acceptanceRate: data.acceptanceRate || 0
    }
  } catch (error) {
    console.error('Error fetching LeetCode stats:', error)
    return {
      totalSolved: 142,
      ranking: 285400,
      acceptanceRate: 52.6
    }
  }
}
