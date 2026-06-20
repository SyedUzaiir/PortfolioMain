'use client'

import React from 'react'
import { Experience } from '@/types/portfolio'
import { GlassCard } from '@/components/ui/cards/glass-card'
import { TechBadge } from '@/components/ui/shared/tech-badge'

interface ExperienceCardProps {
  experience: Experience
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <GlassCard className="p-6 hover:border-foreground/10 transition-all">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <h4 className="text-lg font-bold tracking-tight text-foreground">
            {experience.role}
          </h4>
          <p className="text-sm font-bold text-emerald-500 mt-0.5">
            {experience.company}
          </p>
        </div>
        <div className="flex flex-col items-start md:items-end gap-1.5 shrink-0">
          <span className="font-mono text-[10px] font-bold text-muted-foreground/60 border border-border/80 px-2 py-0.5 rounded-full bg-card/50">
            {experience.duration}
          </span>
          {experience.location && (
            <p className="text-xs text-muted-foreground/50 font-medium">{experience.location}</p>
          )}
        </div>
      </div>

      <ul className="mt-5 space-y-2 text-sm font-light text-muted-foreground leading-relaxed pl-4 list-disc">
        {experience.description.map((bullet, idx) => (
          <li key={idx} className="marker:text-emerald-500/80">
            {bullet}
          </li>
        ))}
      </ul>

      {experience.technologies && experience.technologies.length > 0 && (
        <div className="mt-6 border-t border-border/30 pt-4">
          <span className="text-[9px] font-bold tracking-widest text-muted-foreground/40 uppercase font-mono">
            Technologies
          </span>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {experience.technologies.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        </div>
      )}
    </GlassCard>
  )
}
