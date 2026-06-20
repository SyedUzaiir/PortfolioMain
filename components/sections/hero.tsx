'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/buttons/button'
import { SocialButton } from '@/components/ui/buttons/social-button'
import { GlowBackground } from '@/components/ui/shared/glow-background'
import { AnimatedCounter } from '@/components/ui/shared/animated-counter'
import { Container } from '@/components/ui/shared/container'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

const roles = [
  'Full Stack Developer',
  'Software Engineer',
  'Full Stack Software Engineer',
  'Problem Solver'
]

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex min-h-[96vh] w-full items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* 1. Premium Aurora Background & Noise */}
      <GlowBackground />

      {/* 2. Slow-moving cursor tracking Spotlight (Desktop only) */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 hidden md:block"
          style={{
            background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.05), transparent 80%)`
          }}
        />
      )}

      {/* 3. Horizontal Visual Glow Capsule — dark mode only */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[300px] rounded-full hidden dark:block bg-emerald-500/[0.04] blur-[150px] pointer-events-none -z-10" />

      {/* 4. Drifting Thin Outlined Geometry (○, □, △) */}
      <motion.svg
        animate={{ y: [0, -10, 0], rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute left-[8%] top-[22%] h-12 w-12 text-foreground/5 opacity-5 pointer-events-none"
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
      </motion.svg>

      <motion.svg
        animate={{ y: [0, 10, 0], x: [0, 8, 0], rotate: -360 }}
        transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
        className="absolute right-[12%] top-[18%] h-14 w-14 text-foreground/5 opacity-5 pointer-events-none"
        viewBox="0 0 100 100"
      >
        <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="1" />
      </motion.svg>

      <motion.svg
        animate={{ y: [0, -8, 0], x: [-6, 6, -6], rotate: 180 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="absolute left-[38%] bottom-[15%] h-10 w-10 text-foreground/5 opacity-5 pointer-events-none"
        viewBox="0 0 100 100"
      >
        <polygon points="50,15 90,85 10,85" fill="none" stroke="currentColor" strokeWidth="1" />
      </motion.svg>

      <Container className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Left Column Content */}
        <div className="flex flex-col space-y-6 lg:col-span-7 relative">
          {/* Glow behind name: very faint in light, slightly more in dark */}
          <div className="absolute -left-20 top-0 h-[500px] w-[500px] rounded-full
            bg-emerald-500/[0.04] dark:bg-emerald-500/[0.06]
            blur-[160px] pointer-events-none -z-10" />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center space-x-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs font-bold tracking-widest text-emerald-500 uppercase">
              Available for Opportunities
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, filter: 'blur(8px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Hello, I&apos;m <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                Syed Uzair Mohiuddin
              </span>
            </motion.h1>

            {/* Smooth Text Rotation Loop */}
            <div className="h-10 sm:h-12 overflow-hidden flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-xl font-bold tracking-tight text-muted-foreground/80 sm:text-2xl md:text-3xl"
                >
                  {roles[roleIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-xl text-base font-light leading-relaxed text-muted-foreground sm:text-lg"
          >
            Building complete end-to-end web applications, interactive user interfaces, secure databases, APIs, and exploring AI integrations with scalable architecture.
          </motion.p>

          {/* Quick Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4 border-y border-border/40 py-6 sm:grid-cols-4"
          >
            <div className="text-left">
              <p className="text-2xl font-black text-foreground">
                <AnimatedCounter value={840} suffix="+" />
              </p>
              <p className="text-[10px] font-mono font-bold tracking-wider text-muted-foreground/50 uppercase mt-0.5">
                Problems Solved
              </p>
            </div>
            <div className="text-left">
              <p className="text-2xl font-black text-foreground">
                <AnimatedCounter value={15} suffix="+" />
              </p>
              <p className="text-[10px] font-mono font-bold tracking-wider text-muted-foreground/50 uppercase mt-0.5">
                Projects
              </p>
            </div>
            <div className="text-left">
              <p className="text-2xl font-black text-foreground">
                <AnimatedCounter value={10} suffix="+" />
              </p>
              <p className="text-[10px] font-mono font-bold tracking-wider text-muted-foreground/50 uppercase mt-0.5">
                Certificates
              </p>
            </div>
            <div className="text-left">
              <p className="text-2xl font-black text-foreground">
                <AnimatedCounter value={5} suffix="+" />
              </p>
              <p className="text-[10px] font-mono font-bold tracking-wider text-muted-foreground/50 uppercase mt-0.5">
                Core Languages
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Link href="/#projects">
              <Button variant="primary" magnetic>
                View Projects
              </Button>
            </Link>
            <a href="/UzairRobustResume.pdf" download="Syed_Uzair_Mohiuddin_Resume.pdf">
              <Button variant="secondary" magnetic>
                Download Resume
              </Button>
            </a>
            <div className="flex items-center space-x-2.5">
              <SocialButton platform="github" url="https://github.com/SyedUzaiir" />
              <SocialButton platform="linkedin" url="https://www.linkedin.com/in/syeduzairmohiuddin" />
              <SocialButton platform="leetcode" url="https://leetcode.com/uzairmohiuddin" />
            </div>
          </motion.div>
        </div>

        {/* Right Column Illustration - Workstation mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden items-center justify-center lg:col-span-5 lg:flex"
        >
          {/* Soft Glow behind terminal: very subtle in light, more visible in dark */}
          <div className="absolute -inset-4
            bg-emerald-500/[0.04] dark:bg-emerald-500/[0.07]
            rounded-card blur-[70px] -z-10 pointer-events-none" />

          {/* Terminal frame — intentional dark panel in both themes */}
          <div className="relative w-full max-w-[400px] aspect-[4/3] rounded-[24px] border
            border-black/[0.08] dark:border-border/80
            bg-zinc-950 dark:bg-card/40
            p-3
            shadow-[0_8px_40px_rgba(0,0,0,0.14),_0_2px_8px_rgba(0,0,0,0.08)]
            dark:shadow-2xl
            dark:backdrop-blur-md overflow-hidden">
            <div className="flex items-center space-x-1.5 border-b border-border/60 pb-2">
              <div className="h-2 w-2 rounded-full bg-red-500/80" />
              <div className="h-2 w-2 rounded-full bg-yellow-500/80" />
              <div className="h-2 w-2 rounded-full bg-emerald-500/80" />
              <span className="text-[9px] font-mono text-muted-foreground/50 ml-2">uzair@workspace:~</span>
            </div>
            
            <div className="mt-4 space-y-2.5 font-mono text-[10px] text-emerald-400/80 leading-relaxed">
              <p className="text-muted-foreground/50">&gt; neofetch --profile</p>
              <p><span className="text-teal-400">OS:</span> SyedUzairOS v3.0</p>
              <p><span className="text-teal-400">Host:</span> Full Stack Developer</p>
              <p><span className="text-teal-400">Kernel:</span> React / Next.js / Java / SQL</p>
              <p><span className="text-teal-400">Shell:</span> TypeScript & Spring Boot Engine</p>
              <p><span className="text-teal-400">Status:</span> Preparing for software engineering placements...</p>
              <div className="mt-6 flex space-x-1 items-center">
                <span className="h-3 w-1.5 bg-emerald-400 animate-pulse" />
                <span className="text-muted-foreground/40 text-[9px]">Initializing system components...</span>
              </div>
            </div>
          </div>

          {/* Integrated Tech Satellite Badges around the Terminal composition */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut' }}
            className="absolute -top-5 -left-4 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1 text-[9px] font-mono font-bold text-emerald-400 backdrop-blur-md shadow-sm"
          >
            ☕ Java SE
          </motion.div>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 5.2, ease: 'easeInOut' }}
            className="absolute -bottom-5 -right-2 rounded-lg border border-teal-500/20 bg-teal-500/5 px-2.5 py-1 text-[9px] font-mono font-bold text-teal-400 backdrop-blur-md shadow-sm"
          >
            🍃 Spring Boot
          </motion.div>

          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
            className="absolute top-[40%] -right-6 rounded-lg border border-blue-500/20 bg-blue-500/5 px-2.5 py-1 text-[9px] font-mono font-bold text-blue-400 backdrop-blur-md shadow-sm"
          >
            ⚛️ React / Next
          </motion.div>

          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut' }}
            className="absolute bottom-[40%] -left-8 rounded-lg border border-sky-500/20 bg-sky-500/5 px-2.5 py-1 text-[9px] font-mono font-bold text-sky-400 backdrop-blur-md shadow-sm"
          >
            🐳 Docker
          </motion.div>
        </motion.div>
      </Container>

      {/* 5. Gradient Bottom Section Fade Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none z-10" />

      {/* Minimal Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1.5 cursor-pointer text-muted-foreground/60 hover:text-foreground hover:opacity-100 transition-all z-20"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <span className="text-[10px] font-mono font-bold tracking-widest uppercase">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-4 w-4 text-emerald-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}
