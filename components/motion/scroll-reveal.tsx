'use client'

import React from 'react'
import { motion, HTMLMotionProps, TargetAndTransition } from 'framer-motion'
import { fadeUp, blurReveal, scaleIn, fadeIn } from '@/lib/motion-presets'

interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  variant?: 'fade-up' | 'blur' | 'scale' | 'fade'
  delay?: number
  duration?: number
  yOffset?: number
  scaleOffset?: number
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.6,
  yOffset = 24,
  scaleOffset = 0.96,
  className = '',
  ...props
}) => {
  const getVariants = () => {
    switch (variant) {
      case 'blur':
        return blurReveal(duration)
      case 'scale':
        return scaleIn(scaleOffset, duration)
      case 'fade':
        return fadeIn(duration)
      case 'fade-up':
      default:
        return fadeUp(yOffset, duration)
    }
  }

  const animVariants = getVariants()
  const visibleVariant = animVariants.visible as TargetAndTransition

  // Inject delay into transition
  const customVariants = {
    hidden: animVariants.hidden,
    visible: {
      ...visibleVariant,
      transition: {
        ...visibleVariant?.transition,
        delay,
      },
    },
  }

  return (
    <motion.div
      variants={customVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
