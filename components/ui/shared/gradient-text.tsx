'use client'

import React from 'react'

interface GradientTextProps {
  children: React.ReactNode
  from?: string
  to?: string
  className?: string
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  from = 'from-emerald-400',
  to = 'to-teal-500',
  className = ''
}) => {
  return (
    <span className={`bg-gradient-to-r bg-clip-text text-transparent ${from} ${to} ${className}`}>
      {children}
    </span>
  )
}
