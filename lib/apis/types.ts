export interface GitHubDay {
  date: string
  count: number
  level: number
}

export interface GitHubStats {
  status: 'success' | 'error'
  publicRepos: number
  followers: number
  following: number
  totalStars: number
  avatarUrl: string
  bio: string
  name: string
  login: string
  contributionGraph: GitHubDay[]
  latestCommit?: {
    message: string
    repoName: string
    date: string
  }
}

export interface LeetCodeStats {
  status: 'success' | 'error'
  totalSolved: number
  easySolved: number
  mediumSolved: number
  hardSolved: number
  ranking: number
  acceptanceRate: number
  contestRating?: number
  contestRanking?: number
  topPercentage?: number
  streak?: number
}

export interface CodeChefStats {
  status: 'success' | 'error'
  currentRating: number
  highestRating: number
  stars: string
  globalRank: number
  countryRank: number
  problemsSolved: number
}

export interface HackerRankBadge {
  name: string
  stars: number
  solved: number
}

export interface HackerRankStats {
  status: 'success' | 'error'
  badges: HackerRankBadge[]
  languages: string[]
  followersCount: number
}

export interface GeeksForGeeksStats {
  status: 'success' | 'error'
  score: number
  problemsSolved: number
  instituteRank: number
}

export interface CodeforcesStats {
  status: 'success' | 'error'
  handle: string
  rating: number
  maxRating: number
  rank: string
  maxRank: string
  contribution: number
}

export interface CombinedCodingStats {
  totalSolved: number
  platformsCount: number
  highestContestRating: number
  repositoriesCount: number
  activeStreak: number
}
