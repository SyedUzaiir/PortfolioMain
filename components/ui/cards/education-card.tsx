'use client'

import React from 'react'
import { Education } from '@/types/portfolio'
import { GlassCard } from '@/components/ui/cards/glass-card'

interface EducationCardProps {
  education: Education
}

export const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <GlassCard className="p-6 hover:border-foreground/10 transition-all">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <h4 className="text-lg font-bold tracking-tight text-foreground">
            {education.degree}
          </h4>
          <p className="text-sm font-bold text-emerald-500 mt-0.5">
            {education.institution}
          </p>
        </div>
        <div className="flex flex-col items-start md:items-end gap-1.5 shrink-0">
          <span className="font-mono text-[10px] font-bold text-muted-foreground/60 border border-border/80 px-2 py-0.5 rounded-full bg-card/50">
            {education.duration}
          </span>
          {education.cgpa && (
            <p className="text-xs text-muted-foreground/60 font-semibold font-mono">
              CGPA: {education.cgpa}
            </p>
          )}
        </div>
      </div>

      {education.details && education.details.length > 0 && (
        <ul className="mt-4 space-y-1.5 text-sm font-light text-muted-foreground leading-relaxed pl-4 list-disc">
          {education.details.map((detail, idx) => (
            <li key={idx} className="marker:text-emerald-500/80">
              {detail}
            </li>
          ))}
        </ul>
      )}
    </GlassCard>
  )
}
