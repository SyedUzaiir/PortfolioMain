'use client'

import React from 'react'
import { motion, useScroll } from 'framer-motion'

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-50 h-[2px] bg-emerald-500 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
