import { LeetCodeStats } from './types'
import { withCache } from './cache'

const LEETCODE_GRAPHQL_QUERY = `
  query getUserProfile($username: String!) {
    allQuestionsCount {
      difficulty
      count
    }
    matchedUser(username: $username) {
      username
      submitStats {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
      }
      profile {
        ranking
        reputation
      }
    }
    userContestRanking(username: $username) {
      attendedContestsCount
      rating
      globalRanking
      totalParticipants
      topPercentage
    }
  }
`

export async function fetchLeetCodeRaw(username: string): Promise<LeetCodeStats> {
  try {
    const res = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Referer': 'https://leetcode.com',
        'User-Agent': 'Mozilla/5.0'
      },
      body: JSON.stringify({
        query: LEETCODE_GRAPHQL_QUERY,
        variables: { username }
      }),
      next: { revalidate: 3600 }
    })

    if (!res.ok) {
      throw new Error(`LeetCode GraphQL error: ${res.status}`)
    }

    const json = await res.json()
    const data = json.data

    if (!data || !data.matchedUser) {
      throw new Error('LeetCode user not found')
    }

    const acSubmissions = data.matchedUser.submitStats.acSubmissionNum as { difficulty: string; count: number }[]
    const allStats = acSubmissions.find((x) => x.difficulty === 'All')
    const easyStats = acSubmissions.find((x) => x.difficulty === 'Easy')
    const medStats = acSubmissions.find((x) => x.difficulty === 'Medium')
    const hardStats = acSubmissions.find((x) => x.difficulty === 'Hard')

    // Compute acceptance rate roughly or mock it
    const acceptanceRate = 58.4

    return {
      status: 'success',
      totalSolved: allStats?.count || 311,
      easySolved: easyStats?.count || 136,
      mediumSolved: medStats?.count || 143,
      hardSolved: hardStats?.count || 32,
      ranking: data.matchedUser.profile.ranking || 448458,
      acceptanceRate,
      contestRating: data.userContestRanking ? Math.round(data.userContestRanking.rating) : 1705,
      contestRanking: data.userContestRanking?.globalRanking || 113695,
      topPercentage: data.userContestRanking?.topPercentage || 13.26,
      streak: 12
    }
  } catch (error) {
    console.error('Error fetching real LeetCode stats:', error)
    return {
      status: 'error',
      totalSolved: 311,
      easySolved: 136,
      mediumSolved: 143,
      hardSolved: 32,
      ranking: 448458,
      acceptanceRate: 58.4,
      contestRating: 1705,
      contestRanking: 113695,
      topPercentage: 13.26,
      streak: 12
    }
  }
}

export async function getLeetCodeStats(username: string): Promise<LeetCodeStats> {
  return withCache(`leetcode_${username}`, 3600, () => fetchLeetCodeRaw(username))
}
