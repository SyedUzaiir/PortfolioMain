'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Section } from '@/components/layout/section'

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-background text-foreground">
      <Section id="not-found-sec" className="flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-8xl font-black tracking-widest text-emerald-500 font-mono md:text-9xl"
        >
          404
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-6 text-2xl font-bold tracking-tight md:text-3xl"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-4 max-w-md text-sm text-muted-foreground"
        >
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8"
        >
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-button bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:scale-[1.01] cursor-pointer"
          >
            Back Home
          </Link>
        </motion.div>
      </Section>
    </div>
  )
}
