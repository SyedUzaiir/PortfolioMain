'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface TextRevealProps {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  delay?: number
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = '',
  as = 'h1',
  delay = 0,
}) => {
  const Component = motion[as] as React.ElementType

  const words = text.split(' ')

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  }

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 15,
      filter: 'blur(6px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        duration: 0.6
      }
    }
  }

  return (
    <Component
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          variants={childVariants}
          className="mr-[0.25em] inline-block whitespace-nowrap"
        >
          {word}
        </motion.span>
      ))}
    </Component>
  )
}
