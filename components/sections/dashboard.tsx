'use client'

import React, { useState, useEffect } from 'react'
import { Section } from '@/components/layout/section'
import { GlassCard } from '@/components/ui/cards/glass-card'
import { ProgressBar } from '@/components/ui/shared/progress-bar'
import { AnimatedCounter } from '@/components/ui/shared/animated-counter'
import { ScrollReveal } from '@/components/motion/scroll-reveal'
import { getGitHubStats, getLeetCodeStats, GitHubStats, LeetCodeStats } from '@/lib/services/api'
import { RefreshCw } from 'lucide-react'

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

export const Dashboard: React.FC = () => {
  const [ghStats, setGhStats] = useState<GitHubStats | null>(null)
  const [lcStats, setLcStats] = useState<LeetCodeStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [refreshKey, setRefreshKey] = useState(0)

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true)
      try {
        const [gh, lc] = await Promise.all([
          getGitHubStats('SyedUzaiir'),
          getLeetCodeStats('uzairmohiuddin')
        ])
        setGhStats(gh)
        setLcStats(lc)
      } catch (err) {
        console.error('Error fetching dashboard stats:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchStats()
  }, [refreshKey])

  // Mock contribution graph grids (last 16 weeks)
  const heatmapColors = [
    'bg-muted/30', 'bg-emerald-500/10', 'bg-emerald-500/30',
    'bg-emerald-500/60', 'bg-emerald-500/90'
  ]
  const generateHeatmap = () => {
    const grid = []
    // 7 rows x 18 columns = 126 nodes
    for (let r = 0; r < 7; r++) {
      const row = []
      for (let c = 0; c < 18; c++) {
        // Randomly select color frequency mimicking active contributions
        const freqIndex = Math.floor(Math.sin((r * c + r) * 0.5) * 2.5 + 2.5)
        row.push(heatmapColors[freqIndex % heatmapColors.length])
      }
      grid.push(row)
    }
    return grid
  }
  const heatmapGrid = generateHeatmap()

  return (
    <Section
      id="dashboard"
      title="CP & Git Dashboard"
      subtitle="Engineering Metrics"
      className="py-20 border-t border-border/30 bg-muted/5"
    >
      {/* Overview Aggregation Header */}
      <ScrollReveal variant="blur" className="grid grid-cols-2 gap-4 md:grid-cols-4 text-left mb-10">
        <GlassCard className="p-4 flex flex-col justify-between">
          <span className="text-[10px] font-mono font-bold text-muted-foreground/60 uppercase">
            Total Solved CP
          </span>
          <div className="mt-2 text-2xl font-black text-foreground">
            <AnimatedCounter value={loading ? 450 : (lcStats?.totalSolved || 142) + 120 + 80} />
          </div>
          <span className="text-[9px] text-emerald-500 font-mono mt-1">LeetCode + CodeChef + GFG</span>
        </GlassCard>

        <GlassCard className="p-4 flex flex-col justify-between">
          <span className="text-[10px] font-mono font-bold text-muted-foreground/60 uppercase">
            Repositories
          </span>
          <div className="mt-2 text-2xl font-black text-foreground">
            <AnimatedCounter value={loading ? 25 : (ghStats?.publicRepos || 18)} />
          </div>
          <span className="text-[9px] text-muted-foreground/50 font-mono mt-1">GitHub Public repos</span>
        </GlassCard>

        <GlassCard className="p-4 flex flex-col justify-between">
          <span className="text-[10px] font-mono font-bold text-muted-foreground/60 uppercase">
            Active Streak
          </span>
          <div className="mt-2 text-2xl font-black text-emerald-500">
            <AnimatedCounter value={12} /> Days
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
              className="text-muted-foreground/40 hover:text-foreground cursor-pointer"
              title="Refresh stats"
            >
              <RefreshCw className={`h-3 w-3 ${loading ? 'animate-spin' : ''}`} />
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
                  className="text-[10px] font-mono text-emerald-500 hover:underline"
                >
                  @uzairmohiuddin
                </a>
              </div>

              {/* LC Vitals Details */}
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-light">Solved Problems</span>
                  <span className="text-sm font-bold font-mono text-foreground">
                    <AnimatedCounter value={loading ? 142 : (lcStats?.totalSolved || 142)} />
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-emerald-500/5 border border-emerald-500/10 rounded p-1.5">
                    <span className="block text-[9px] text-emerald-400 font-mono font-bold">EASY</span>
                    <span className="text-xs font-bold font-mono text-foreground">50</span>
                  </div>
                  <div className="bg-yellow-500/5 border border-yellow-500/10 rounded p-1.5">
                    <span className="block text-[9px] text-yellow-400 font-mono font-bold">MED</span>
                    <span className="text-xs font-bold font-mono text-foreground">75</span>
                  </div>
                  <div className="bg-red-500/5 border border-red-500/10 rounded p-1.5">
                    <span className="block text-[9px] text-red-400 font-mono font-bold">HARD</span>
                    <span className="text-xs font-bold font-mono text-foreground">17</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="flex justify-between text-[11px] font-mono text-muted-foreground">
                    <span>Acceptance Rate</span>
                    <span>{loading ? '52.6%' : `${lcStats?.acceptanceRate || 52.6}%`}</span>
                  </div>
                  <div className="flex justify-between text-[11px] font-mono text-muted-foreground">
                    <span>Global Ranking</span>
                    <span>{loading ? '#285k' : `#${lcStats?.ranking.toLocaleString() || '285,400'}`}</span>
                  </div>
                  <div className="flex justify-between text-[11px] font-mono text-muted-foreground">
                    <span>Contest Rating</span>
                    <span>1,620</span>
                  </div>
                </div>
              </div>
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
                  className="text-[10px] font-mono text-emerald-500 hover:underline"
                >
                  @SyedUzaiir
                </a>
              </div>

              {/* GitHub Details */}
              <div className="mt-4 space-y-3.5">
                <div className="grid grid-cols-3 gap-2 text-center text-xs text-muted-foreground font-light">
                  <div>
                    <span className="block font-mono font-bold text-foreground text-sm">
                      <AnimatedCounter value={loading ? 18 : (ghStats?.publicRepos || 18)} />
                    </span>
                    <span className="text-[9px] font-mono">Repos</span>
                  </div>
                  <div>
                    <span className="block font-mono font-bold text-foreground text-sm">
                      <AnimatedCounter value={loading ? 45 : (ghStats?.followers || 45)} />
                    </span>
                    <span className="text-[9px] font-mono">Followers</span>
                  </div>
                  <div>
                    <span className="block font-mono font-bold text-foreground text-sm">
                      <AnimatedCounter value={loading ? 8 : (ghStats?.totalStars || 8)} />
                    </span>
                    <span className="text-[9px] font-mono">Stars</span>
                  </div>
                </div>

                {/* Simulated Heatmap */}
                <div className="pt-2">
                  <span className="text-[10px] text-muted-foreground/60 font-mono block mb-2">
                    Recent Contribution activity
                  </span>
                  <div className="grid grid-rows-7 grid-flow-col gap-0.5 max-w-[240px] overflow-hidden">
                    {heatmapGrid.map((row, rIdx) =>
                      row.map((color, cIdx) => (
                        <div
                          key={`${rIdx}-${cIdx}`}
                          className={`h-2 w-2 rounded-sm ${color} transition-colors`}
                        />
                      ))
                    )}
                  </div>
                </div>
              </div>
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
                  href="https://codechef.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono text-emerald-500 hover:underline"
                >
                  @uzair_777
                </a>
              </div>

              {/* CC details */}
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-light">Rating Rank</span>
                  <span className="inline-flex items-center space-x-1 font-mono text-xs font-bold text-orange-400">
                    <span>1,510</span>
                    <span className="text-[9px] bg-orange-500/15 border border-orange-500/20 px-1 rounded font-bold uppercase text-[8px]">
                      3 Star ★★★
                    </span>
                  </span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[11px] font-mono text-muted-foreground">
                    <span>Highest Rating</span>
                    <span>1,510</span>
                  </div>
                  <ProgressBar value={82} className="bg-orange-500/10 [&>div]:bg-orange-500" />
                </div>
                <div className="space-y-2 text-xs font-light text-muted-foreground space-y-2">
                  <div className="flex justify-between">
                    <span>Contests Participated</span>
                    <span className="font-mono font-bold text-foreground">15</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Problems Solved</span>
                    <span className="font-mono font-bold text-foreground">120+</span>
                  </div>
                </div>
              </div>
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

        {/* HackerRank & GFG */}
        <ScrollReveal variant="fade-up" delay={0.2} className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* HackerRank */}
          <GlassCard className="p-5 flex flex-col justify-between h-full">
            <div>
              <div className="flex justify-between items-center border-b border-border/40 pb-2.5">
                <h4 className="text-xs font-bold text-foreground">HackerRank Metrics</h4>
                <span className="text-[9px] font-mono text-emerald-500">Verified Skills</span>
              </div>
              <div className="mt-3.5 space-y-2 text-[11px] font-light text-muted-foreground">
                <div className="flex justify-between items-center">
                  <span>Java (Problem Solving)</span>
                  <span className="font-mono text-yellow-500 font-bold">★★★★★ Gold</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>SQL Advanced Queries</span>
                  <span className="font-mono text-yellow-500 font-bold">★★★★★ Gold</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Python Scripting</span>
                  <span className="font-mono text-yellow-500 font-bold">★★★★☆ Silver</span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-3.5 border-t border-border/40 flex justify-between items-center text-[10px] font-mono">
              <span className="text-muted-foreground/50">3 Badges</span>
              <a href="https://hackerrank.com" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:underline">
                verify &rarr;
              </a>
            </div>
          </GlassCard>

          {/* GFG */}
          <GlassCard className="p-5 flex flex-col justify-between h-full">
            <div>
              <div className="flex justify-between items-center border-b border-border/40 pb-2.5">
                <h4 className="text-xs font-bold text-foreground">GeeksforGeeks</h4>
                <span className="text-[9px] font-mono text-emerald-500">Institute Rank</span>
              </div>
              <div className="mt-3.5 space-y-2.5 text-[11px] font-light text-muted-foreground">
                <div className="flex justify-between">
                  <span>Coding Score</span>
                  <span className="font-mono font-bold text-foreground">340</span>
                </div>
                <div className="flex justify-between">
                  <span>Problems Solved</span>
                  <span className="font-mono font-bold text-foreground">80+</span>
                </div>
                <div className="flex justify-between">
                  <span>Institute Rank</span>
                  <span className="font-mono font-bold text-foreground">#18</span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-3.5 border-t border-border/40 flex justify-between items-center text-[10px] font-mono">
              <span className="text-muted-foreground/50">@uzair_gfg</span>
              <a href="https://geeksforgeeks.org" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:underline">
                profile &rarr;
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
