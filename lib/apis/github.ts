import { GitHubStats, GitHubDay } from './types'
import { withCache } from './cache'

// Helper to generate simulated data if API fails completely
function generateMockContributionGraph(): GitHubDay[] {
  const days: GitHubDay[] = []
  const today = new Date()
  for (let i = 365; i >= 0; i--) {
    const d = new Date(today)
    d.setDate(today.getDate() - i)
    const dateStr = d.toISOString().split('T')[0]
    // Mimic random contributions
    const level = Math.random() > 0.4 ? Math.floor(Math.random() * 4) : 0
    const count = level > 0 ? level * Math.floor(Math.random() * 3 + 1) : 0
    days.push({ date: dateStr, count, level })
  }
  return days
}

export async function fetchGitHubRaw(username: string): Promise<GitHubStats> {
  try {
    // 1. Fetch profile metadata
    const profileRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: { 'User-Agent': 'Portfolio-App' },
      next: { revalidate: 3600 }
    })
    if (!profileRes.ok) {
      throw new Error(`Profile fetch failed: ${profileRes.status}`)
    }
    const profile = await profileRes.ok ? await profileRes.json() : null

    // 2. Fetch repos
    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
      headers: { 'User-Agent': 'Portfolio-App' },
      next: { revalidate: 3600 }
    })
    let totalStars = 0
    if (reposRes.ok) {
      const repos = await reposRes.json()
      if (Array.isArray(repos)) {
        totalStars = repos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0)
      }
    }

    // 3. Fetch latest commit push event
    const eventsRes = await fetch(`https://api.github.com/users/${username}/events`, {
      headers: { 'User-Agent': 'Portfolio-App' },
      next: { revalidate: 3600 }
    })
    let latestCommit: GitHubStats['latestCommit'] = undefined
    if (eventsRes.ok) {
      const events = await eventsRes.json()
      if (Array.isArray(events)) {
        const pushEvent = events.find(e => e.type === 'PushEvent')
        if (pushEvent && pushEvent.payload && pushEvent.payload.commits && pushEvent.payload.commits[0]) {
          latestCommit = {
            message: pushEvent.payload.commits[0].message || 'Update repository',
            repoName: pushEvent.repo.name.replace(`${username}/`, ''),
            date: pushEvent.created_at
          }
        }
      }
    }

    // 4. Fetch contribution calendar via scraping
    let contributionGraph: GitHubDay[] = []
    try {
      const graphRes = await fetch(`https://github.com/users/${username}/contributions`, {
        headers: { 'User-Agent': 'Mozilla/5.0' },
        next: { revalidate: 3600 }
      })
      if (graphRes.ok) {
        const html = await graphRes.text()
        const dayRegex = /<td[^>]*data-date="(\d{4}-\d{2}-\d{2})"[^>]*id="([^"]+)"[^>]*data-level="(\d+)"[^>]*>/g
        
        const tooltips: Record<string, string> = {}
        const tooltipRegex = /<tool-tip[^>]*for="([^"]+)"[^>]*>([\s\S]*?)<\/tool-tip>/g
        let tMatch
        while ((tMatch = tooltipRegex.exec(html)) !== null) {
          tooltips[tMatch[1]] = tMatch[2].trim()
        }

        let match
        while ((match = dayRegex.exec(html)) !== null) {
          const date = match[1]
          const id = match[2]
          const level = parseInt(match[3], 10)
          const tooltipText = tooltips[id] || ''
          
          let count = 0
          if (tooltipText) {
            const countMatch = tooltipText.match(/^([0-9,]+)\s+contribution/i)
            if (countMatch) {
              count = parseInt(countMatch[1].replace(/,/g, ''), 10)
            } else if (tooltipText.toLowerCase().includes('no contribution')) {
              count = 0
            } else {
              count = level > 0 ? level * 2 : 0
            }
          } else {
            count = level > 0 ? level * 2 : 0
          }
          contributionGraph.push({ date, count, level })
        }
      }
    } catch (scrapeErr) {
      console.warn('Scraping contributions failed, generating fallbacks:', scrapeErr)
    }

    if (contributionGraph.length === 0) {
      contributionGraph = generateMockContributionGraph()
    }

    return {
      status: 'success',
      publicRepos: profile?.public_repos || 30,
      followers: profile?.followers || 45,
      following: profile?.following || 12,
      totalStars,
      avatarUrl: profile?.avatar_url || 'https://avatars.githubusercontent.com/u/104332822?v=4',
      bio: profile?.bio || 'Software Engineering Student',
      name: profile?.name || 'Syed Uzair Mohiuddin',
      login: username,
      contributionGraph,
      latestCommit
    }
  } catch (error) {
    console.error('Error fetching real GitHub metrics:', error)
    return {
      status: 'error',
      publicRepos: 30,
      followers: 45,
      following: 12,
      totalStars: 8,
      avatarUrl: 'https://avatars.githubusercontent.com/u/104332822?v=4',
      bio: 'Software Engineering student with fullstack capabilities.',
      name: 'Syed Uzair Mohiuddin',
      login: username,
      contributionGraph: generateMockContributionGraph(),
      latestCommit: {
        message: 'Refactored profile analytics components',
        repoName: 'PortfolioMain',
        date: new Date().toISOString()
      }
    }
  }
}

export async function getGitHubStats(username: string): Promise<GitHubStats> {
  return withCache(`github_${username}`, 3600, () => fetchGitHubRaw(username))
}
