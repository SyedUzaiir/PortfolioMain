'use client'

import React from 'react'
import { Skill } from '@/types/portfolio'
import { GlassCard } from '@/components/ui/cards/glass-card'
import { ProgressBar } from '@/components/ui/shared/progress-bar'

interface SkillCardProps {
  skill: Skill
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <GlassCard className="p-5 hover:border-foreground/10 transition-all">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-bold tracking-tight text-foreground">
          {skill.name}
        </h4>
        <span className="font-mono text-xs text-muted-foreground/60">
          {skill.level}%
        </span>
      </div>

      <ProgressBar value={skill.level} className="mt-3" />

      {skill.experienceYears !== undefined && (
        <p className="mt-2.5 text-[10px] font-mono text-muted-foreground/50">
          {skill.experienceYears} Yr{skill.experienceYears !== 1 && 's'} Exp
        </p>
      )}
    </GlassCard>
  )
}
