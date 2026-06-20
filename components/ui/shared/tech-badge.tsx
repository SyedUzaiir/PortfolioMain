'use client'

import React from 'react'

interface TechBadgeProps {
  name: string
  className?: string
}

export const TechBadge: React.FC<TechBadgeProps> = ({ name, className = '' }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-mono font-semibold
        bg-emerald-50 text-emerald-700 border border-emerald-200
        dark:bg-emerald-500/5 dark:text-emerald-500 dark:border-emerald-500/10
        ${className}`}
    >
      {name}
    </span>
  )
}
