'use client'

import React from 'react'
import { CodingProfile } from '@/types/portfolio'
import { GlassCard } from '@/components/ui/cards/glass-card'
import { AnimatedCounter } from '@/components/ui/shared/animated-counter'

interface ProfileCardProps {
  profile: CodingProfile
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  return (
    <GlassCard glow className="p-6 hover:border-foreground/10 transition-all flex flex-col justify-between h-full group">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-widest text-emerald-500 uppercase font-mono">
            {profile.platform}
          </span>
          <span className="text-[10px] font-mono text-muted-foreground/50">
            @{profile.username}
          </span>
        </div>

        {profile.rating && (
          <div className="mt-4">
            <span className="text-2xl font-black text-foreground">{profile.rating}</span>
            <span className="text-[9px] text-muted-foreground/50 font-bold block uppercase tracking-wider mt-0.5">
              Rating / Score
            </span>
          </div>
        )}

        {profile.problemsSolved !== undefined && (
          <div className="mt-4">
            <span className="text-xl font-extrabold text-foreground">
              <AnimatedCounter value={profile.problemsSolved} />
            </span>
            <span className="text-[9px] text-muted-foreground/50 font-bold block uppercase tracking-wider mt-0.5">
              Problems Solved
            </span>
          </div>
        )}
      </div>

      <a
        href={profile.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex h-9 w-full items-center justify-center rounded-button border border-border bg-card text-[10px] font-bold tracking-widest uppercase text-muted-foreground transition-all hover:bg-muted hover:text-foreground cursor-pointer"
      >
        View Profile
      </a>
    </GlassCard>
  )
}
