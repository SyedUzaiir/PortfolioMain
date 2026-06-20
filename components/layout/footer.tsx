'use client'

import React from 'react'
import { socialLinks } from '@/data/socialLinks'
import { Button } from '@/components/ui/buttons/button'
import { Mail, ArrowRight, Globe, Heart } from 'lucide-react'
import Link from 'next/link'

export const Footer: React.FC = () => {
  const getIcon = (name: string) => {
    const className = "h-4 w-4"
    switch (name.toLowerCase()) {
      case 'github':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        )
      case 'linkedin':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        )
      case 'mail':
        return <Mail className={className} />
      default:
        return null
    }
  }

  const techBadges = [
    'Next.js 16',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'Shadcn UI',
    'Vercel'
  ]

  const quickLinks = [
    { label: 'Overview', href: '/#hero' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Dashboard', href: '/#dashboard' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Contact', href: '/#contact' }
  ]

  const codingProfiles = [
    { label: 'GitHub', href: 'https://github.com/SyedUzaiir' },
    { label: 'LeetCode', href: 'https://leetcode.com/uzairmohiuddin/' },
    { label: 'CodeChef', href: 'https://www.codechef.com/users/uzair_777' },
    { label: 'Codeforces', href: 'https://codeforces.com/profile/UzairMohiuddin' },
    { label: 'HackerRank', href: 'https://www.hackerrank.com/profile/uzairmohiuddin' },
    { label: 'GeeksforGeeks', href: 'https://www.geeksforgeeks.org/user/uzairmohiuddin' }
  ]

  return (
    <footer className="border-t border-border bg-card/30 relative">
      
      {/* 1. Final Call-to-Action Block */}
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 md:px-10 lg:px-12 pt-16 pb-12 border-b border-border/40">
        <div className="bg-gradient-to-r from-emerald-500/5 to-transparent border border-emerald-500/10 rounded-card p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-400 uppercase">
              Looking for a Developer?
            </span>
            <h3 className="text-2xl font-black text-foreground mt-2 tracking-tight sm:text-3xl">
              Interested in working together?
            </h3>
            <p className="text-sm font-light text-muted-foreground mt-2 max-w-xl">
              Let&apos;s build something amazing. Reach out to discuss software roles, backend architectures, or full stack web systems.
            </p>
          </div>
          <Link href="/#contact">
            <Button variant="primary" magnetic className="h-11 px-6 text-xs font-bold uppercase tracking-widest gap-2">
              Contact Me <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* 2. Directory Navigation Lists */}
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 md:px-10 lg:px-12 py-16 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 text-left">
        
        {/* Profile Info block */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2.5">
            <span className="font-mono text-lg font-bold tracking-widest text-foreground">SU</span>
            <span className="text-[9px] font-mono font-bold bg-zinc-900 border border-border/80 px-1.5 py-0.5 rounded text-muted-foreground/60">
              v3.0.0
            </span>
          </div>
          <p className="text-xs font-light text-muted-foreground/75 leading-relaxed">
            Building Scalable Software.<br />Solving Real Problems.
          </p>
          <div className="flex items-center space-x-3.5 pt-2">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-button border border-border bg-card/60 text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/20"
                aria-label={link.platform}
              >
                {getIcon(link.iconName)}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-4">
          <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-foreground">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-xs font-light text-muted-foreground">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-emerald-400 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Coding Profiles Column */}
        <div className="space-y-4">
          <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-foreground">
            Coding Profiles
          </h4>
          <ul className="space-y-2.5 text-xs font-light text-muted-foreground">
            {codingProfiles.map((profile) => (
              <li key={profile.label}>
                <a
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center space-x-1"
                >
                  <span>{profile.label}</span>
                  <ArrowRight className="h-2.5 w-2.5 text-muted-foreground/30" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack specs column */}
        <div className="space-y-4">
          <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-foreground">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {techBadges.map((badge) => (
              <span
                key={badge}
                className="text-[9px] font-mono font-bold bg-zinc-950/40 border border-border/60 px-2 py-0.5 rounded text-muted-foreground"
              >
                {badge}
              </span>
            ))}
          </div>
          <div className="flex items-center space-x-1.5 text-[9px] font-mono text-muted-foreground/40 pt-2">
            <Globe className="h-3 w-3 shrink-0" />
            <span>Deployed on Vercel Edge</span>
          </div>
        </div>
      </div>

      {/* 3. Bottom Legal Copyright & Credits */}
      <div className="border-t border-border/40 py-8 bg-zinc-950/10">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 md:px-10 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/50">
          <p>
            &copy; {new Date().getFullYear()} Syed Uzair Mohiuddin. All rights reserved.
          </p>
          <p className="flex items-center space-x-1">
            <span>Designed & Developed by Syed Uzair Mohiuddin.</span>
            <span className="flex items-center space-x-0.5">
              <span>Made with</span>
              <Heart className="h-3 w-3 text-red-500 fill-red-500" />
              <span>&amp; ☕</span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
