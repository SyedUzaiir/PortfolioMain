'use client'

import React from 'react'
import { Section } from '@/components/layout/section'
import { GlassCard } from '@/components/ui/cards/glass-card'
import { AnimatedCounter } from '@/components/ui/shared/animated-counter'
import { ScrollReveal } from '@/components/motion/scroll-reveal'
import { achievementStats, achievementTimeline, recentHighlights } from '@/data/achievements'
import { Code2, FolderGit2, Award, Briefcase, Star, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react'

const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

export const Achievements: React.FC = () => {
  // Helper to parse base number and suffix
  const parseValue = (val: string) => {
    const clean = val.replace(/,/g, '').replace(/\+/g, '')
    const num = parseInt(clean, 10) || 0
    const suffix = val.includes('+') ? '+' : ''
    return { num, suffix }
  }

  // Get specific icon for stats
  const getStatIcon = (title: string) => {
    const className = "h-5 w-5 text-emerald-500 shrink-0"
    switch (title.toLowerCase()) {
      case 'problems solved':
        return <Code2 className={className} />
      case 'projects built':
        return <FolderGit2 className={className} />
      case 'certifications':
        return <Award className={className} />
      case 'internships':
        return <Briefcase className={className} />
      case 'codechef rating':
        return <Star className={className} />
      case 'github commits':
        return <GithubIcon className={className} />
      default:
        return <Sparkles className={className} />
    }
  }

  const focusWorkflow = [
    { step: 'Placement Preparation', desc: 'DSA & Systems focus' },
    { step: 'Spring Boot Ecosystem', desc: 'Cloud microservices' },
    { step: 'Distributed System Design', desc: 'Scale & Latency' }
  ]

  return (
    <Section
      id="achievements"
      title="Achievements & Impact"
      subtitle="Milestones throughout my software engineering journey."
      className="py-20 border-t border-border/30 section-alt"
    >
      {/* 1. Stats Counter Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 text-left">
        {achievementStats.map((stat, idx) => {
          const { num, suffix } = parseValue(stat.value)
          return (
            <ScrollReveal key={stat.title} variant="fade-up" delay={idx * 0.05}>
              <GlassCard glow className="p-5 flex flex-col justify-between h-full border border-border/60 hover:border-emerald-500/15 hover:shadow-[0_0_15px_rgba(16,185,129,0.06)] transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-muted-foreground/50 uppercase">
                      {stat.title}
                    </span>
                    {getStatIcon(stat.title)}
                  </div>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-black text-foreground tracking-tight">
                      <AnimatedCounter value={num} suffix={suffix} />
                    </span>
                    <span className="ml-2 text-[9px] font-mono text-emerald-500 bg-emerald-500/5 px-1.5 py-0.5 rounded border border-emerald-500/10 uppercase tracking-wider font-bold">
                      {stat.trend}
                    </span>
                  </div>
                  <p className="mt-3 text-xs font-light text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/40 text-[9px] font-mono text-muted-foreground/40">
                  {stat.lastUpdated}
                </div>
              </GlassCard>
            </ScrollReveal>
          )
        })}
      </div>

      {/* 2. Sub-Grid: Current Focus / Highlights & Timeline */}
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 text-left">
        
        {/* Left Column: Focus Path & Highlights */}
        <div className="space-y-8 flex flex-col justify-between">
          
          {/* Current Focus Tracker */}
          <ScrollReveal variant="blur" className="space-y-4">
            <div className="flex items-center space-x-2 text-emerald-500">
              <Sparkles className="h-4 w-4 shrink-0" />
              <span className="text-xs font-bold tracking-widest uppercase font-mono">
                Current Focus Tracker
              </span>
            </div>
            
            <GlassCard className="p-5 space-y-4">
              <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:items-center md:space-x-3">
                {focusWorkflow.map((item, idx) => (
                  <React.Fragment key={item.step}>
                    <div className="flex-1 bg-muted/30 dark:bg-zinc-950/40 border border-border/60 dark:border-border/50 p-3.5 rounded-card relative group hover:border-emerald-500/20 transition-all">
                      <div className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 w-5 h-5 rounded-full flex items-center justify-center mb-2 shadow-sm">
                        {idx + 1}
                      </div>
                      <h4 className="text-xs font-bold text-foreground leading-snug">{item.step}</h4>
                      <p className="text-[10px] text-muted-foreground/60 font-light mt-0.5 leading-snug">{item.desc}</p>
                    </div>
                    {idx < focusWorkflow.length - 1 && (
                      <ArrowRight className="hidden md:block h-4 w-4 text-muted-foreground/30 shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Recent Highlights Checklist */}
          <ScrollReveal variant="blur" className="space-y-4">
            <div className="flex items-center space-x-2 text-emerald-500">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span className="text-xs font-bold tracking-widest uppercase font-mono">
                Key Professional Milestones
              </span>
            </div>
            
            <GlassCard className="p-5 space-y-3">
              {recentHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 text-xs text-muted-foreground font-light leading-relaxed">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </GlassCard>
          </ScrollReveal>
        </div>

        {/* Right Column: Career Stepper Timeline */}
        <div className="space-y-4">
          <ScrollReveal variant="blur" className="flex items-center space-x-2 text-emerald-500">
            <Sparkles className="h-4 w-4 shrink-0" />
            <span className="text-xs font-bold tracking-widest uppercase font-mono">
              Career Journey Stepper
            </span>
          </ScrollReveal>

          <GlassCard className="p-6 relative">
            {/* Stepper timeline vertical track line */}
            <div className="absolute left-7 top-6 bottom-6 w-[1px] bg-border/80" />

            <div className="space-y-6">
              {achievementTimeline.map((item, idx) => (
                <ScrollReveal key={item.year} variant="fade-up" delay={idx * 0.05} className="relative pl-10">
                  {/* Stepper Node capsule containing year */}
                  <div className="absolute left-0 top-0.5 z-10 w-[56px] h-6 -translate-x-[15px] rounded-full border border-emerald-500/30 bg-muted dark:bg-zinc-950 flex items-center justify-center text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 shadow-sm">
                    {item.year}
                  </div>
                  
                  <div className="pt-0.5">
                    <h4 className="text-sm font-bold text-foreground tracking-tight leading-snug">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground/60 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </Section>
  )
}
