'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div className="flex min-h-[50vh] w-full flex-col items-center justify-center space-y-4">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
        className="h-8 w-8 rounded-full border-2 border-emerald-500/20 border-t-emerald-500"
      />
      <p className="font-mono text-xs tracking-widest text-muted-foreground/50 uppercase">
        Loading...
      </p>
    </div>
  )
}
