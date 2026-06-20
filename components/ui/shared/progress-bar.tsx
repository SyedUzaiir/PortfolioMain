'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface ProgressBarProps {
  value: number
  className?: string
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ value, className = '' }) => {
  return (
    <div className={`h-1 w-full overflow-hidden rounded-full bg-muted ${className}`}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="h-full bg-emerald-500 rounded-full"
      />
    </div>
  )
}
