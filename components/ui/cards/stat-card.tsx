'use client'

import React from 'react'
import { GlassCard } from '@/components/ui/cards/glass-card'
import { AnimatedCounter } from '@/components/ui/shared/animated-counter'

interface StatCardProps {
  label: string
  value: number
  suffix?: string
  description?: string
  icon?: React.ReactNode
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  suffix = '',
  description,
  icon
}) => {
  return (
    <GlassCard glow className="p-6">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold tracking-widest text-muted-foreground/60 uppercase font-mono">
          {label}
        </span>
        {icon && <div className="text-muted-foreground/50">{icon}</div>}
      </div>

      <div className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        <AnimatedCounter value={value} suffix={suffix} />
      </div>

      {description && (
        <p className="mt-2 text-xs font-light text-muted-foreground/50">{description}</p>
      )}
    </GlassCard>
  )
}
