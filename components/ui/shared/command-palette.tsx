'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Moon, Sun, FileText, ArrowRight, CornerDownLeft } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'

export const CommandPalette: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { setTheme, resolvedTheme } = useTheme()
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)

  const items = [
    {
      id: 'theme-toggle',
      title: 'Toggle Theme',
      subtitle: `Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`,
      category: 'System',
      action: () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark'),
      icon: resolvedTheme === 'dark' ? <Sun className="h-4 w-4 text-emerald-500" /> : <Moon className="h-4 w-4 text-blue-500" />
    },
    {
      id: 'nav-home',
      title: 'Navigate to Hero / Home',
      subtitle: 'Jump to top header section',
      category: 'Navigation',
      action: () => {
        router.push('/#hero')
        setIsOpen(false)
      },
      icon: <ArrowRight className="h-4 w-4" />
    },
    {
      id: 'nav-about',
      title: 'Navigate to About',
      subtitle: 'Explore career overview',
      category: 'Navigation',
      action: () => {
        router.push('/#about')
        setIsOpen(false)
      },
      icon: <ArrowRight className="h-4 w-4" />
    },
    {
      id: 'nav-skills',
      title: 'Navigate to Skills',
      subtitle: 'View engineering capabilities',
      category: 'Navigation',
      action: () => {
        router.push('/#skills')
        setIsOpen(false)
      },
      icon: <ArrowRight className="h-4 w-4" />
    },
    {
      id: 'nav-projects',
      title: 'Navigate to Projects',
      subtitle: 'Explore featured engineering builds',
      category: 'Navigation',
      action: () => {
        router.push('/#projects')
        setIsOpen(false)
      },
      icon: <ArrowRight className="h-4 w-4" />
    },
    {
      id: 'nav-experience',
      title: 'Navigate to Experience',
      subtitle: 'Review timeline milestones',
      category: 'Navigation',
      action: () => {
        router.push('/#experience')
        setIsOpen(false)
      },
      icon: <ArrowRight className="h-4 w-4" />
    },
    {
      id: 'nav-contact',
      title: 'Navigate to Contact',
      subtitle: 'Reach out or email channels',
      category: 'Navigation',
      action: () => {
        router.push('/#contact')
        setIsOpen(false)
      },
      icon: <ArrowRight className="h-4 w-4" />
    },
    {
      id: 'open-resume',
      title: 'Open Resume Preview',
      subtitle: 'View curriculum vitae',
      category: 'Actions',
      action: () => {
        router.push('/resume')
        setIsOpen(false)
      },
      icon: <FileText className="h-4 w-4 text-emerald-500" />
    },
    {
      id: 'github',
      title: 'Go to GitHub Profile',
      subtitle: 'Explore open source codebases',
      category: 'Socials',
      action: () => window.open('https://github.com/SyedUzaiir', '_blank'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-muted-foreground">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      )
    },
    {
      id: 'linkedin',
      title: 'Go to LinkedIn Profile',
      subtitle: 'Connect professionally',
      category: 'Socials',
      action: () => window.open('https://linkedin.com/in/syeduzair', '_blank'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-muted-foreground">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    },
    {
      id: 'leetcode',
      title: 'Go to LeetCode Profile',
      subtitle: 'Review algorithmic submissions',
      category: 'Socials',
      action: () => window.open('https://leetcode.com/syeduzair', '_blank'),
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-muted-foreground">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.411L7.1 5.828a1.371 1.371 0 0 0-.054 1.9l4.549 4.549a1.37 1.37 0 0 0 1.94 0l4.549-4.549a1.37 1.37 0 0 0-.054-1.9L14.444.411A1.374 1.374 0 0 0 13.483 0zm.014 2.828l3.18 3.18-3.18 3.18-3.18-3.18 3.18-3.18zm-8.87 5.7a1.37 1.37 0 0 0-1.94 0L.412 10.793a1.37 1.37 0 0 0 0 1.94l2.275 2.276a1.37 1.37 0 0 0 1.94 0l2.275-2.276a1.37 1.37 0 0 0 0-1.94L4.627 8.528zm.054 2.828l.9.9-.9.9-.9-.9.9-.9zm13.123.63a1.37 1.37 0 0 0-1.94 0l-2.275 2.276a1.37 1.37 0 0 0 0 1.94l2.275 2.276a1.37 1.37 0 0 0 1.94 0l2.275-2.276a1.37 1.37 0 0 0 0-1.94l-2.275-2.276zm.054 2.828l.9.9-.9.9-.9-.9.9-.9zM7.162 14.1l-4.55 4.55a1.37 1.37 0 0 0 0 1.94l3.622 3.622a1.37 1.37 0 0 0 1.94 0l4.55-4.55a1.37 1.37 0 0 0 0-1.94L7.162 14.1zm.054 2.828l3.18 3.18-3.18 3.18-3.18-3.18 3.18-3.18z"/>
        </svg>
      )
    }
  ]

  const filtered = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.subtitle.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen((open) => !open)
      } else if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      const frame = requestAnimationFrame(() => {
        inputRef.current?.focus()
        setSearch('')
        setSelectedIndex(0)
      })
      return () => cancelAnimationFrame(frame)
    }
  }, [isOpen])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev + 1) % Math.max(filtered.length, 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % Math.max(filtered.length, 1))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].action()
      }
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card shadow-lg hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer transition-transform hover:scale-[1.05]"
        aria-label="Open Command Palette"
      >
        <span className="text-xs font-mono font-bold">⌘K</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 pt-[15vh] backdrop-blur-sm px-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.96, y: -8 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: -8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-xl overflow-hidden rounded-card border border-border bg-card shadow-2xl flex flex-col max-h-[50vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center border-b border-border/80 px-4 py-3">
                <Search className="h-5 w-5 text-muted-foreground/60 mr-3 shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type a command or search..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value)
                    setSelectedIndex(0)
                  }}
                  onKeyDown={handleKeyDown}
                  className="w-full bg-transparent text-sm text-foreground outline-none border-none placeholder:text-muted-foreground/50"
                />
              </div>

              <div className="flex-grow overflow-y-auto p-2 scrollbar-thin">
                {filtered.length > 0 ? (
                  filtered.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => item.action()}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex w-full items-center justify-between rounded-button px-3 py-2.5 text-left transition-colors cursor-pointer ${
                        idx === selectedIndex
                          ? 'bg-emerald-500/10 text-foreground border border-emerald-500/20'
                          : 'text-muted-foreground hover:bg-muted/50 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center space-x-3 min-w-0">
                        <div className="shrink-0">{item.icon}</div>
                        <div className="truncate">
                          <p className="text-xs font-bold">{item.title}</p>
                          <p className="text-[10px] text-muted-foreground/60 font-light mt-0.5">{item.subtitle}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 shrink-0">
                        <span className="text-[9px] font-mono font-bold bg-muted border border-border px-1.5 py-0.5 rounded text-muted-foreground/60 uppercase">
                          {item.category}
                        </span>
                        {idx === selectedIndex && (
                          <CornerDownLeft className="h-3 w-3 text-emerald-500/60" />
                        )}
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="py-6 text-center text-xs text-muted-foreground/50 font-mono">
                    No results found for &quot;{search}&quot;
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
