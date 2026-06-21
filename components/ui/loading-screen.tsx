'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Simulate loading progress over 1.6 seconds
    const totalDuration = 1600
    const stepDuration = 20
    const totalSteps = totalDuration / stepDuration
    const increment = 100 / totalSteps

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          // Hold full progress for a brief moment then transition
          setTimeout(() => setIsComplete(true), 300)
          return 100
        }
        return prev + increment
      })
    }, stepDuration)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(12px)', scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#09090b]"
        >
          <div className="flex flex-col items-center space-y-6">
            {/* Elegant Monogram UZAIR */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-5xl font-bold tracking-widest text-[#fafafa]"
            >
              UZAIR
            </motion.div>

            {/* Subtle Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-sans text-xs tracking-widest text-zinc-400 uppercase"
            >
              Loading Portfolio...
            </motion.p>

            {/* Minimal Progress Bar */}
            <div className="relative h-[2px] w-48 overflow-hidden rounded bg-zinc-800">
              <motion.div
                className="absolute top-0 left-0 h-full bg-emerald-500"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
