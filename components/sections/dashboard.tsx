'use client'

import React, { useState, useEffect } from 'react'
import { Section } from '@/components/layout/section'
import { GlassCard } from '@/components/ui/cards/glass-card'
import { ProgressBar } from '@/components/ui/shared/progress-bar'
import { AnimatedCounter } from '@/components/ui/shared/animated-counter'
import { ScrollReveal } from '@/components/motion/scroll-reveal'
import { RefreshCw, ExternalLink } from 'lucide-react'
import { GitHubStats, LeetCodeStats, CodeChefStats, HackerRankStats, GeeksForGeeksStats, CodeforcesStats } from '@/lib/apis/types'

const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

// DSA Skill list
const dsaSkills = [
  { name: 'Arrays & Hashing', level: 92 },
  { name: 'Two Pointers & Sliding Window', level: 85 },
  { name: 'Stack & Queue Structures', level: 80 },
  { name: 'Binary Search', level: 88 },
  { name: 'Linked Lists & Trees', level: 82 },
  { name: 'Graphs & BFS/DFS', level: 75 },
  { name: 'Dynamic Programming', level: 70 },
  { name: 'Greedy Algorithms', level: 78 },
  { name: 'Backtracking & Recursion', level: 75 }
]

const fallbackContributionDays = (() => {
  const today = new Date()
  return Array.from({ length: 126 }, (_, i) => {
    const d = new Date(today)
    d.setDate(today.getDate() - (125 - i))
    return {
      date: d.toISOString().split('T')[0],
      count: 0,
      level: 0
    }
  })
})()

const getCfRankColor = (rank: string) => {
  const r = rank.toLowerCase()
  if (r.includes('newbie')) return 'text-slate-500'
  if (r.includes('pupil')) return 'text-emerald-500'
  if (r.includes('specialist')) return 'text-cyan-500 dark:text-cyan-400'
  if (r.includes('expert')) return 'text-blue-500 dark:text-blue-400'
  if (r.includes('candidate')) return 'text-violet-500 dark:text-violet-400'
  if (r.includes('master') || r.includes('grandmaster')) return 'text-rose-500 dark:text-rose-400'
  return 'text-foreground'
}

const getCfNextMilestone = (rating: number) => {
  if (rating < 1200) return { next: 1200, rank: 'Pupil', prev: 0 }
  if (rating < 1400) return { next: 1400, rank: 'Specialist', prev: 1200 }
  if (rating < 1600) return { next: 1600, rank: 'Expert', prev: 1400 }
  if (rating < 1900) return { next: 1900, rank: 'Candidate Master', prev: 1600 }
  if (rating < 2200) return { next: 2200, rank: 'Master', prev: 1900 }
  return { next: 3000, rank: 'Legendary Grandmaster', prev: 2200 }
}

export const Dashboard: React.FC = () => {
  const [ghStats, setGhStats] = useState<GitHubStats | null>(null)
  const [lcStats, setLcStats] = useState<LeetCodeStats | null>(null)
  const [ccStats, setCcStats] = useState<CodeChefStats | null>(null)
  const [hrStats, setHrStats] = useState<HackerRankStats | null>(null)
  const [gfgStats, setGfgStats] = useState<GeeksForGeeksStats | null>(null)
  const [cfStats, setCfStats] = useState<CodeforcesStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [refreshKey, setRefreshKey] = useState(0)

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true)
      try {
        const [ghRes, lcRes, ccRes, hrRes, gfgRes, cfRes] = await Promise.all([
          fetch('/api/github?username=SyedUzaiir'),
          fetch('/api/leetcode?username=uzairmohiuddin'),
          fetch('/api/codechef?username=uzair_777'),
          fetch('/api/hackerrank?username=uzairmohiuddin'),
          fetch('/api/gfg?username=uzairmohiuddin'),
          fetch('/api/codeforces?handle=UzairMohiuddin')
        ])

        const [gh, lc, cc, hr, gfg, cf] = await Promise.all([
          ghRes.ok ? ghRes.json() : null,
          lcRes.ok ? lcRes.json() : null,
          ccRes.ok ? ccRes.json() : null,
          hrRes.ok ? hrRes.json() : null,
          gfgRes.ok ? gfgRes.json() : null,
          cfRes.ok ? cfRes.json() : null
        ])

        if (gh) setGhStats(gh)
        if (lc) setLcStats(lc)
        if (cc) setCcStats(cc)
        if (hr) setHrStats(hr)
        if (gfg) setGfgStats(gfg)
        if (cf) setCfStats(cf)
      } catch (err) {
        console.error('Error fetching dashboard stats:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchStats()
  }, [refreshKey])

  // Process contribution calendar cells: last 18 weeks (126 days)
  const daysToRender = ghStats?.contributionGraph && ghStats.contributionGraph.length > 0
    ? ghStats.contributionGraph.slice(-126)
    : fallbackContributionDays

  // Calculate sum of CP solved problems across LeetCode + CodeChef + GFG
  const totalSolvedCP =
    (lcStats?.totalSolved || 311) + (ccStats?.problemsSolved || 450) + (gfgStats?.problemsSolved || 80)

  // Calculate rating progress based on current rating relative to 2000 rating (5 Star rating boundary)
  const ratingProgress = ccStats
    ? Math.min(Math.round((ccStats.currentRating / 2000) * 100), 100)
    : 65

  // Calculate Codeforces progress
  const cfRating = cfStats?.rating || 1204
  const cfMilestone = getCfNextMilestone(cfRating)
  const cfProgress = Math.min(Math.round(((cfRating - cfMilestone.prev) / (cfMilestone.next - cfMilestone.prev)) * 100), 100)

  return (
    <Section
      id="dashboard"
      title="Coding Profiles"
      subtitle="A live overview of my competitive programming progress, GitHub activity, and engineering metrics."
      className="py-20 border-t border-border/30 section-alt"
    >
      {/* Overview Aggregation Header */}
      <ScrollReveal variant="blur" className="grid grid-cols-2 gap-4 md:grid-cols-4 text-left mb-10">
        <GlassCard className="p-4 flex flex-col justify-between">
          <span className="text-[10px] font-mono font-bold text-muted-foreground/60 uppercase">
            Total Solved CP
          </span>
          <div className="mt-2 text-2xl font-black text-foreground">
            <AnimatedCounter value={totalSolvedCP} />
          </div>
          <span className="text-[9px] text-emerald-500 font-mono mt-1">LeetCode + CodeChef + GFG</span>
        </GlassCard>

        <GlassCard className="p-4 flex flex-col justify-between">
          <span className="text-[10px] font-mono font-bold text-muted-foreground/60 uppercase">
            Repositories
          </span>
          <div className="mt-2 text-2xl font-black text-foreground">
            <AnimatedCounter value={ghStats?.publicRepos || 30} />
          </div>
          <span className="text-[9px] text-muted-foreground/50 font-mono mt-1">GitHub Public repos</span>
        </GlassCard>

        <GlassCard className="p-4 flex flex-col justify-between">
          <span className="text-[10px] font-mono font-bold text-muted-foreground/60 uppercase">
            Active Streak
          </span>
          <div className="mt-2 text-2xl font-black text-emerald-500">
            <AnimatedCounter value={lcStats?.streak || 12} /> Days
          </div>
          <span className="text-[9px] text-yellow-500 font-mono mt-1">Daily coding consistency</span>
        </GlassCard>

        <GlassCard className="p-4 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-mono font-bold text-muted-foreground/60 uppercase">
              Live APIs Sync
            </span>
            <button
              onClick={() => setRefreshKey(prev => prev + 1)}
              className="text-muted-foreground/40 hover:text-foreground cursor-pointer transition-all duration-300"
              title="Refresh stats"
            >
              <RefreshCw className={`h-3 w-3 ${loading ? 'animate-spin text-emerald-400' : ''}`} />
            </button>
          </div>
          <div className="mt-2 text-xs font-mono font-bold text-emerald-400">
            {loading ? 'SYNCING...' : 'ONLINE'}
          </div>
          <span className="text-[9px] text-muted-foreground/40 font-mono mt-1">Cached for speed optimization</span>
        </GlassCard>
      </ScrollReveal>

      {/* Main stats cards layout */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 text-left">
        {/* LeetCode stats */}
        <ScrollReveal variant="fade-up" delay={0.05}>
          <GlassCard glow className="p-5 flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="flex justify-between items-center border-b border-border/40 pb-3">
                <div className="flex items-center space-x-2">
                  <span className="h-5 w-5 bg-yellow-500/10 text-yellow-500 rounded flex items-center justify-center text-[10px] font-bold">LC</span>
                  <h4 className="text-sm font-bold text-foreground">LeetCode</h4>
                </div>
                <a
                  href="https://leetcode.com/uzairmohiuddin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono text-emerald-500 hover:underline flex items-center gap-0.5"
                >
                  @uzairmohiuddin <ExternalLink className="h-2 w-2" />
                </a>
              </div>

              {/* LC Vitals Details */}
              {loading && !lcStats ? (
                <div className="mt-4 space-y-4 animate-pulse">
                  <div className="h-4 bg-muted/20 rounded w-1/2"></div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-10 bg-muted/20 rounded"></div>
                    <div className="h-10 bg-muted/20 rounded"></div>
                    <div className="h-10 bg-muted/20 rounded"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-muted/20 rounded w-5/6"></div>
                    <div className="h-3 bg-muted/20 rounded w-4/6"></div>
                  </div>
                </div>
              ) : (
                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-light">Solved Problems</span>
                    <span className="text-sm font-bold font-mono text-foreground">
                      <AnimatedCounter value={lcStats?.totalSolved || 311} />
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-emerald-500/5 border border-emerald-500/10 rounded p-1.5">
                      <span className="block text-[9px] text-emerald-400 font-mono font-bold">EASY</span>
                      <span className="text-xs font-bold font-mono text-foreground">{lcStats?.easySolved || 136}</span>
                    </div>
                    <div className="bg-yellow-500/5 border border-yellow-500/10 rounded p-1.5">
                      <span className="block text-[9px] text-yellow-400 font-mono font-bold">MED</span>
                      <span className="text-xs font-bold font-mono text-foreground">{lcStats?.mediumSolved || 143}</span>
                    </div>
                    <div className="bg-red-500/5 border border-red-500/10 rounded p-1.5">
                      <span className="block text-[9px] text-red-400 font-mono font-bold">HARD</span>
                      <span className="text-xs font-bold font-mono text-foreground">{lcStats?.hardSolved || 32}</span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between text-[11px] font-mono text-muted-foreground">
                      <span>Contest Rating</span>
                      <span className="text-foreground font-bold">{lcStats?.contestRating || 1705}</span>
                    </div>
                    <div className="flex justify-between text-[11px] font-mono text-muted-foreground">
                      <span>Global Ranking</span>
                      <span>#{lcStats?.ranking.toLocaleString() || '448,458'}</span>
                    </div>
                    <div className="flex justify-between text-[11px] font-mono text-muted-foreground">
                      <span>Top Percentage</span>
                      <span className="text-emerald-400">{lcStats?.topPercentage || 13.26}%</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="https://leetcode.com/uzairmohiuddin/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-9 w-full items-center justify-center rounded-button border border-border bg-card text-[10px] font-bold tracking-widest uppercase text-muted-foreground transition-all hover:bg-muted hover:text-foreground cursor-pointer"
            >
              View Profile
            </a>
          </GlassCard>
        </ScrollReveal>

        {/* GitHub Card */}
        <ScrollReveal variant="fade-up" delay={0.1}>
          <GlassCard glow className="p-5 flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="flex justify-between items-center border-b border-border/40 pb-3">
                <div className="flex items-center space-x-2">
                  <GithubIcon className="h-4 w-4 text-foreground shrink-0" />
                  <h4 className="text-sm font-bold text-foreground">GitHub Profile</h4>
                </div>
                <a
                  href="https://github.com/SyedUzaiir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono text-emerald-500 hover:underline flex items-center gap-0.5"
                >
                  @SyedUzaiir <ExternalLink className="h-2 w-2" />
                </a>
              </div>

              {/* GitHub Details */}
              {loading && !ghStats ? (
                <div className="mt-4 space-y-4 animate-pulse">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-10 bg-muted/20 rounded"></div>
                    <div className="h-10 bg-muted/20 rounded"></div>
                    <div className="h-10 bg-muted/20 rounded"></div>
                  </div>
                  <div className="h-20 bg-muted/20 rounded pt-2"></div>
                </div>
              ) : (
                <div className="mt-4 space-y-3.5">
                  <div className="grid grid-cols-3 gap-2 text-center text-xs text-muted-foreground font-light">
                    <div>
                      <span className="block font-mono font-bold text-foreground text-sm">
                        <AnimatedCounter value={ghStats?.publicRepos || 30} />
                      </span>
                      <span className="text-[9px] font-mono">Repos</span>
                    </div>
                    <div>
                      <span className="block font-mono font-bold text-foreground text-sm">
                        <AnimatedCounter value={ghStats?.followers || 45} />
                      </span>
                      <span className="text-[9px] font-mono">Followers</span>
                    </div>
                    <div>
                      <span className="block font-mono font-bold text-foreground text-sm">
                        <AnimatedCounter value={ghStats?.totalStars || 8} />
                      </span>
                      <span className="text-[9px] font-mono">Stars</span>
                    </div>
                  </div>

                  {/* Dynamic Heatmap */}
                  <div className="pt-2">
                    <span className="text-[10px] text-muted-foreground/60 font-mono block mb-2">
                      Recent Activity (Last 18 weeks)
                    </span>
                    <div className="grid grid-rows-7 grid-flow-col gap-1 max-w-full overflow-x-auto pb-1">
                      {daysToRender.map((day) => {
                        const levelColors = [
                          'bg-muted/20 border border-border/10',
                          'bg-emerald-500/15',
                          'bg-emerald-500/35',
                          'bg-emerald-500/65',
                          'bg-emerald-500/90'
                        ]
                        const colorClass = levelColors[day.level] || levelColors[0]
                        return (
                          <div
                            key={day.date}
                            className={`h-2.5 w-2.5 rounded-sm ${colorClass} transition-all duration-300 relative group cursor-pointer hover:scale-125 hover:z-10`}
                          >
                            <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 opacity-0 group-hover:opacity-100 transition-opacity bg-popover border border-border text-popover-foreground text-[8px] font-mono py-0.5 px-1.5 rounded shadow-lg whitespace-nowrap z-30">
                              {day.count} commits on {day.date}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="https://github.com/SyedUzaiir"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-9 w-full items-center justify-center rounded-button border border-border bg-card text-[10px] font-bold tracking-widest uppercase text-muted-foreground transition-all hover:bg-muted hover:text-foreground cursor-pointer"
            >
              Explore Code bases
            </a>
          </GlassCard>
        </ScrollReveal>

        {/* CodeChef Card */}
        <ScrollReveal variant="fade-up" delay={0.15}>
          <GlassCard glow className="p-5 flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="flex justify-between items-center border-b border-border/40 pb-3">
                <div className="flex items-center space-x-2">
                  <span className="h-5 w-5 bg-orange-500/10 text-orange-500 rounded flex items-center justify-center text-[10px] font-bold">CC</span>
                  <h4 className="text-sm font-bold text-foreground">CodeChef</h4>
                </div>
                <a
                  href="https://www.codechef.com/users/uzair_777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono text-emerald-500 hover:underline flex items-center gap-0.5"
                >
                  @uzair_777 <ExternalLink className="h-2 w-2" />
                </a>
              </div>

              {/* CC details */}
              {loading && !ccStats ? (
                <div className="mt-4 space-y-4 animate-pulse">
                  <div className="h-4 bg-muted/20 rounded w-2/3"></div>
                  <div className="h-3 bg-muted/20 rounded w-full"></div>
                  <div className="space-y-2 pt-2">
                    <div className="h-3 bg-muted/20 rounded w-5/6"></div>
                    <div className="h-3 bg-muted/20 rounded w-4/6"></div>
                  </div>
                </div>
              ) : (
                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-light">Rating Rank</span>
                    <span className="inline-flex items-center space-x-1 font-mono text-xs font-bold text-orange-400">
                      <span>{ccStats?.currentRating || 1311}</span>
                      <span className="text-[9px] bg-orange-500/15 border border-orange-500/20 px-1 rounded font-bold uppercase text-[8px]">
                        {ccStats?.stars || '1★'}
                      </span>
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[11px] font-mono text-muted-foreground">
                      <span>Highest Rating</span>
                      <span>{ccStats?.highestRating || 1460}</span>
                    </div>
                    <ProgressBar value={ratingProgress} className="bg-orange-500/10 [&>div]:bg-orange-500" />
                  </div>
                  <div className="space-y-2 text-xs font-light text-muted-foreground pt-1">
                    <div className="flex justify-between">
                      <span>Global Rank</span>
                      <span className="font-mono font-bold text-foreground">#{ccStats?.globalRank.toLocaleString() || '61,756'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Country Rank</span>
                      <span className="font-mono font-bold text-foreground">#{ccStats?.countryRank.toLocaleString() || '52,932'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Problems Solved</span>
                      <span className="font-mono font-bold text-foreground">{ccStats?.problemsSolved || 450}+</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="https://www.codechef.com/users/uzair_777"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-9 w-full items-center justify-center rounded-button border border-border bg-card text-[10px] font-bold tracking-widest uppercase text-muted-foreground transition-all hover:bg-muted hover:text-foreground cursor-pointer"
            >
              View Profile
            </a>
          </GlassCard>
        </ScrollReveal>

        {/* HackerRank, GFG & Codeforces */}
        <ScrollReveal variant="fade-up" delay={0.2} className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* HackerRank */}
          <GlassCard className="p-5 flex flex-col justify-between h-full">
            <div>
              <div className="flex justify-between items-center border-b border-border/40 pb-2.5">
                <div className="flex items-center space-x-2">
                  <span className="h-4.5 w-4.5 bg-emerald-500/10 text-emerald-500 rounded flex items-center justify-center text-[9px] font-black font-mono">HR</span>
                  <h4 className="text-xs font-bold text-foreground">HackerRank Metrics</h4>
                </div>
                <span className="text-[9px] font-mono text-emerald-500">Verified Skills</span>
              </div>
              
              {loading && !hrStats ? (
                <div className="mt-3.5 space-y-2 animate-pulse">
                  <div className="h-3 bg-muted/20 rounded w-full"></div>
                  <div className="h-3 bg-muted/20 rounded w-5/6"></div>
                  <div className="h-3 bg-muted/20 rounded w-4/6"></div>
                </div>
              ) : (
                <div className="mt-3.5 space-y-2 text-[11px] font-light text-muted-foreground">
                  {(hrStats?.badges || []).slice(0, 3).map((badge) => {
                    const starsStr = '★'.repeat(badge.stars) + '☆'.repeat(Math.max(0, 5 - badge.stars))
                    return (
                      <div key={badge.name} className="flex justify-between items-center">
                        <span className="capitalize">{badge.name.replace(/-/g, ' ')} ({badge.solved} solved)</span>
                        <span className="font-mono text-yellow-500 font-bold">{starsStr}</span>
                      </div>
                    )
                  })}
                  {(!hrStats?.badges || hrStats.badges.length === 0) && (
                    <div className="text-center py-2 text-[10px] text-muted-foreground/60">
                      No badges found.
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="mt-6 pt-3.5 border-t border-border/40 flex justify-between items-center text-[10px] font-mono">
              <span className="text-muted-foreground/50">{hrStats?.followersCount || 12} Followers</span>
              <a href="https://www.hackerrank.com/profile/uzairmohiuddin" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:underline flex items-center gap-0.5">
                verify <ExternalLink className="h-2.5 w-2.5" />
              </a>
            </div>
          </GlassCard>

          {/* GFG */}
          <GlassCard className="p-5 flex flex-col justify-between h-full">
            <div>
              <div className="flex justify-between items-center border-b border-border/40 pb-2.5">
                <div className="flex items-center space-x-2">
                  <span className="h-4.5 w-4.5 bg-green-500/10 text-green-500 rounded flex items-center justify-center text-[9px] font-black font-mono">G</span>
                  <h4 className="text-xs font-bold text-foreground">GeeksforGeeks</h4>
                </div>
                <span className="text-[9px] font-mono text-emerald-500">Institute Rank</span>
              </div>

              {loading && !gfgStats ? (
                <div className="mt-3.5 space-y-2 animate-pulse">
                  <div className="h-3 bg-muted/20 rounded w-full"></div>
                  <div className="h-3 bg-muted/20 rounded w-5/6"></div>
                  <div className="h-3 bg-muted/20 rounded w-4/6"></div>
                </div>
              ) : (
                <div className="mt-3.5 space-y-2.5 text-[11px] font-light text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Coding Score</span>
                    <span className="font-mono font-bold text-foreground">{gfgStats?.score || 340}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Problems Solved</span>
                    <span className="font-mono font-bold text-foreground">{gfgStats?.problemsSolved || 80}+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Institute Rank</span>
                    <span className="font-mono font-bold text-foreground">#{gfgStats?.instituteRank.toLocaleString() || '18'}</span>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-6 pt-3.5 border-t border-border/40 flex justify-between items-center text-[10px] font-mono">
              <span className="text-muted-foreground/50">@uzairmohiuddin</span>
              <a href="https://www.geeksforgeeks.org/user/uzairmohiuddin" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:underline flex items-center gap-0.5">
                profile <ExternalLink className="h-2.5 w-2.5" />
              </a>
            </div>
          </GlassCard>

          {/* Codeforces */}
          <GlassCard className="p-5 flex flex-col justify-between h-full">
            <div>
              <div className="flex justify-between items-center border-b border-border/40 pb-2.5">
                <div className="flex items-center space-x-2">
                  <span className="h-4.5 w-4.5 bg-blue-500/10 text-blue-500 rounded flex items-center justify-center text-[9px] font-black font-mono">CF</span>
                  <h4 className="text-xs font-bold text-foreground">Codeforces</h4>
                </div>
                <span className="text-[9px] font-mono text-blue-400">Rating & Rank</span>
              </div>

              {loading && !cfStats ? (
                <div className="mt-3.5 space-y-2 animate-pulse">
                  <div className="h-3 bg-muted/20 rounded w-full"></div>
                  <div className="h-3 bg-muted/20 rounded w-5/6"></div>
                  <div className="h-3 bg-muted/20 rounded w-4/6"></div>
                </div>
              ) : (
                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-light">Rating Rank</span>
                    <span className={`inline-flex items-center space-x-1.5 font-mono text-xs font-bold ${getCfRankColor(cfStats?.rank || 'pupil')}`}>
                      <span>{cfStats?.rating || 1204}</span>
                      <span className="text-[8px] bg-blue-500/10 border border-blue-500/20 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                        {cfStats?.rank || 'pupil'}
                      </span>
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[11px] font-mono text-muted-foreground">
                      <span>Next Rank: {cfMilestone.rank}</span>
                      <span>{cfRating} / {cfMilestone.next}</span>
                    </div>
                    <ProgressBar value={cfProgress} className="bg-blue-500/10 [&>div]:bg-blue-500" />
                  </div>

                  <div className="space-y-2 text-xs font-light text-muted-foreground pt-1">
                    <div className="flex justify-between">
                      <span>Max Rating</span>
                      <span className="font-mono font-bold text-foreground">{cfStats?.maxRating || 1204}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Max Rank</span>
                      <span className={`font-mono font-bold capitalize ${getCfRankColor(cfStats?.maxRank || 'pupil')}`}>
                        {cfStats?.maxRank || 'pupil'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Contribution</span>
                      <span className="font-mono font-bold text-foreground">
                        {cfStats?.contribution !== undefined ? (cfStats.contribution >= 0 ? `+${cfStats.contribution}` : cfStats.contribution) : '0'}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-6 pt-3.5 border-t border-border/40 flex justify-between items-center text-[10px] font-mono">
              <span className="text-muted-foreground/50">@{cfStats?.handle || 'UzairMohiuddin'}</span>
              <a href="https://codeforces.com/profile/UzairMohiuddin" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline flex items-center gap-0.5">
                profile <ExternalLink className="h-2.5 w-2.5" />
              </a>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>

      {/* DSA Skill Progress Grids */}
      <div className="mt-16 border-t border-border/40 pt-16">
        <ScrollReveal variant="blur" className="mb-8 text-left">
          <h4 className="text-sm font-bold tracking-widest text-emerald-500 uppercase font-mono">
            Platform Topic Breakdown
          </h4>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            DSA Topic Proficiency
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {dsaSkills.map((skill, idx) => (
            <ScrollReveal key={skill.name} variant="fade-up" delay={idx * 0.05}>
              <GlassCard className="p-4 hover:border-foreground/10 transition-all">
                <div className="flex justify-between text-xs font-mono text-muted-foreground mb-2">
                  <span className="font-semibold text-foreground truncate mr-2">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <ProgressBar value={skill.level} />
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
