'use client'

import React from 'react'
import { ScrollReveal } from '@/components/motion/scroll-reveal'

interface SectionProps {
  id: string
  children: React.ReactNode
  className?: string
  title?: string
  subtitle?: string
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = '',
  title,
  subtitle,
}) => {
  return (
    <section
      id={id}
      className={`mx-auto max-w-[1400px] px-6 py-[60px] sm:px-8 md:px-10 md:py-[80px] lg:px-12 xl:py-[120px] ${className}`}
      aria-labelledby={title ? `${id}-title` : undefined}
    >
      {(title || subtitle) && (
        <ScrollReveal variant="blur" className="mb-12 flex flex-col items-start md:mb-16">
          {subtitle && (
            <span className="text-xs font-bold tracking-widest text-emerald-500 uppercase font-mono">
              {subtitle}
            </span>
          )}
          {title && (
            <h2
              id={`${id}-title`}
              className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl"
            >
              {title}
            </h2>
          )}
        </ScrollReveal>
      )}
      {children}
    </section>
  )
}
