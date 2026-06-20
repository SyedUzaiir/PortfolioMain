'use client'

import React, { useRef } from 'react'
import { useCounter } from '@/hooks/use-counter'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  duration?: number
  suffix?: string
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1500,
  suffix = ''
}) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isIntersecting = useInView(ref, { once: true, amount: 'some' })
  const count = useCounter(value, duration, isIntersecting)

  return (
    <span ref={ref} className="font-mono">
      {count}
      {suffix}
    </span>
  )
}
