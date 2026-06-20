'use client'

import React from 'react'

interface TechBadgeProps {
  name: string
  className?: string
}

export const TechBadge: React.FC<TechBadgeProps> = ({ name, className = '' }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-emerald-500/5 px-2.5 py-0.5 text-xs font-mono font-semibold text-emerald-500 border border-emerald-500/10 ${className}`}
    >
      {name}
    </span>
  )
}
