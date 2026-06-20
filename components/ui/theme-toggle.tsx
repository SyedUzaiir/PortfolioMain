'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export const ThemeToggle: React.FC = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  if (!mounted) {
    return <div className="h-9 w-9" />
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative flex h-9 w-9 items-center justify-center rounded-button border border-border bg-card text-foreground transition-colors duration-200 hover:bg-muted cursor-pointer"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? 'dark' : 'light'}
          initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Sun className="h-[18px] w-[18px] text-emerald-500" />
          ) : (
            <Moon className="h-[18px] w-[18px] text-blue-500" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  )
}
