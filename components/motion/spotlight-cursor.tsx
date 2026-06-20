'use client'

import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export const SpotlightCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false)

  const cursorX = useMotionValue(-200)
  const cursorY = useMotionValue(-200)

  // Spring system for the large soft glow spotlight
  const glowX = useSpring(cursorX, { damping: 40, stiffness: 200, mass: 0.8 })
  const glowY = useSpring(cursorY, { damping: 40, stiffness: 200, mass: 0.8 })

  // Spring system for the small inner dot
  const dotX = useSpring(cursorX, { damping: 15, stiffness: 450, mass: 0.1 })
  const dotY = useSpring(cursorY, { damping: 15, stiffness: 450, mass: 0.1 })

  useEffect(() => {
    const checkDevice = () => {
      const mobile =
        window.matchMedia('(max-width: 768px)').matches ||
        ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0)
      setIsMobile(mobile)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('button') ||
          target.closest('a') ||
          target.classList?.contains('cursor-pointer') ||
          window.getComputedStyle(target).cursor === 'pointer')
      ) {
        setIsHoveringInteractive(true)
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('button') ||
          target.closest('a') ||
          target.classList?.contains('cursor-pointer') ||
          window.getComputedStyle(target).cursor === 'pointer')
      ) {
        setIsHoveringInteractive(false)
      }
    }

    if (!isMobile) {
      window.addEventListener('mousemove', moveCursor)
      document.addEventListener('mouseleave', handleMouseLeave)
      document.addEventListener('mouseenter', handleMouseEnter)
      document.addEventListener('mouseover', handleMouseOver)
      document.addEventListener('mouseout', handleMouseOut)
    }

    return () => {
      window.removeEventListener('resize', checkDevice)
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [isMobile, isVisible, cursorX, cursorY])

  if (isMobile) return null

  return (
    <>
      {/* Small precision tracking dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isVisible ? (isHoveringInteractive ? 2.5 : 1) : 0,
          backgroundColor: isHoveringInteractive ? '#3b82f6' : '#22c55e', // morphs to blue on link hover
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="pointer-events-none fixed top-0 left-0 z-50 h-2 w-2 rounded-full"
      />
      {/* Large premium soft glow spotlight (low opacity) */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isVisible ? (isHoveringInteractive ? 1.5 : 1) : 0,
          opacity: isVisible ? (isHoveringInteractive ? 0.2 : 0.12) : 0,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 25 }}
        className="pointer-events-none fixed top-0 left-0 z-40 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.3)_0%,rgba(34,197,94,0)_70%)] blur-2xl"
      />
    </>
  )
}
