'use client'

import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  className?: string
  glow?: boolean
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glow = false,
  ...props
}) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-card border
        /* Light mode: solid white, soft shadow, hairline border */
        bg-white border-black/[0.06]
        shadow-[0_1px_2px_rgba(0,0,0,0.04),_0_8px_24px_rgba(0,0,0,0.06)]
        /* Dark mode: keep existing glassy card */
        dark:bg-card/45 dark:border-border/80 dark:shadow-none dark:backdrop-blur-md
        transition-all duration-300
        hover:shadow-[0_4px_32px_rgba(0,0,0,0.10)] dark:hover:border-foreground/10 ${
          glow
            ? 'dark:shadow-[0_0_40px_-10px_rgba(16,185,129,0.08)]'
            : ''
        } ${className}`}
      {...props}
    >
      {glow && (
        <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full
          bg-emerald-500/[0.02] dark:bg-emerald-500/5 blur-[60px]" />
      )}
      {children}
    </motion.div>
  )
}
