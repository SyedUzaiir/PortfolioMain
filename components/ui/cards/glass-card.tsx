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
      className={`relative overflow-hidden rounded-card border border-border/80 bg-card/45 backdrop-blur-md transition-all duration-300 hover:border-foreground/10 ${
        glow ? 'shadow-[0_0_40px_-10px_rgba(16,185,129,0.08)]' : ''
      } ${className}`}
      {...props}
    >
      {glow && (
        <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-emerald-500/5 blur-[60px]" />
      )}
      {children}
    </motion.div>
  )
}
