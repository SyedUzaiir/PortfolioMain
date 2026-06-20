'use client'

import React from 'react'

interface TimelineCardProps {
  children: React.ReactNode
  isLast?: boolean
}

export const TimelineCard: React.FC<TimelineCardProps> = ({ children, isLast = false }) => {
  return (
    <div className="relative pl-8 sm:pl-10 group pb-8 last:pb-0">
      {!isLast && (
        <div className="absolute left-1.5 top-5 h-full w-[1px] bg-border transition-colors duration-300 group-hover:bg-emerald-500/25" />
      )}

      <div className="absolute left-0.5 top-1.5 flex h-3 w-3 items-center justify-center rounded-full border border-emerald-500 bg-background transition-all duration-300 group-hover:scale-125 group-hover:bg-emerald-500/10">
        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
      </div>

      {children}
    </div>
  )
}
