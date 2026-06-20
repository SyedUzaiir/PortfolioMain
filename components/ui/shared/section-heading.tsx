'use client'

import React from 'react'
import { ScrollReveal } from '@/components/motion/scroll-reveal'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  className = ''
}) => {
  return (
    <ScrollReveal variant="blur" className={`mb-8 flex flex-col items-start ${className}`}>
      {subtitle && (
        <span className="text-xs font-bold tracking-widest text-emerald-500 uppercase font-mono">
          {subtitle}
        </span>
      )}
      <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl md:text-4xl">
        {title}
      </h3>
    </ScrollReveal>
  )
}
