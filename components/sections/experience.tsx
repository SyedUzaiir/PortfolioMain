'use client'

import React, { useRef } from 'react'
import { Section } from '@/components/layout/section'
import { GlassCard } from '@/components/ui/cards/glass-card'
import { TechBadge } from '@/components/ui/shared/tech-badge'
import { ScrollReveal } from '@/components/motion/scroll-reveal'
import { experience } from '@/data/experience'
import { useScroll, motion, useTransform } from 'framer-motion'
import { Briefcase, Calendar, MapPin, Layers } from 'lucide-react'

export const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  // Track scroll position over the experience container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  })

  // Smooth out scaleY transform
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <Section
      id="experience"
      title="Professional Experience & Training"
      subtitle="Career Journey"
      className="py-20 border-t border-border/30"
    >
      <div ref={containerRef} className="relative mt-12 max-w-4xl mx-auto text-left">
        {/* Growing Timeline Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[1px] bg-border/80 -translate-x-1/2" />
        <motion.div
          style={{ scaleY }}
          className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[1px] bg-emerald-500 origin-top -translate-x-1/2 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
        />

        {/* Timeline Items */}
        <div className="space-y-12">
          {experience.map((item, idx) => {
            const isLeft = idx % 2 === 0

            return (
              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row items-start ${
                  isLeft ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline node dot */}
                <div className="absolute left-4 md:left-1/2 top-5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-emerald-500 bg-card z-10 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />

                {/* Content Panel */}
                <div className={`w-full pl-10 md:pl-0 md:w-[46%] ${isLeft ? 'md:pr-10' : 'md:pl-10'}`}>
                  <ScrollReveal variant="blur" delay={idx * 0.1}>
                    <GlassCard glow className="p-6 hover:border-emerald-500/10 transition-colors">
                      {/* Role label */}
                      <div className="flex items-center space-x-2 text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-wider">
                        <Briefcase className="h-3 w-3" />
                        <span>{item.role}</span>
                      </div>

                      {/* Company */}
                      <h4 className="text-lg font-bold text-foreground mt-2 tracking-tight">
                        {item.company}
                      </h4>

                      {/* Program name (if any) */}
                      {item.program && (
                        <div className="flex items-center space-x-1.5 mt-1">
                          <Layers className="h-3 w-3 text-muted-foreground/40 shrink-0" />
                          <p className="text-[10px] text-muted-foreground/50 font-mono italic">
                            {item.program}
                          </p>
                        </div>
                      )}

                      {/* Vitals — duration & mode */}
                      <div className="mt-3 flex flex-wrap items-center gap-3 text-[10px] text-muted-foreground/50 font-mono">
                        <span className="flex items-center space-x-1">
                          <Calendar className="h-3.5 w-3.5 shrink-0" />
                          <span>{item.duration}</span>
                        </span>
                        {(item.mode ?? item.location) && (
                          <span className="flex items-center space-x-1">
                            <MapPin className="h-3.5 w-3.5 shrink-0" />
                            <span>{item.mode ?? item.location}</span>
                          </span>
                        )}
                      </div>

                      {/* Bullet points details */}
                      <ul className="mt-4 space-y-2 list-disc pl-4 text-xs font-light text-muted-foreground leading-relaxed">
                        {item.description.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </ul>

                      {/* Tech badges */}
                      <div className="mt-6 pt-4 border-t border-border/40 flex flex-wrap gap-1.5">
                        {item.technologies?.map((tech: string) => (
                          <TechBadge key={tech} name={tech} />
                        ))}
                      </div>
                    </GlassCard>
                  </ScrollReveal>
                </div>

                {/* Empty column balance layout */}
                <div className="hidden md:block md:w-[8%]" />
                <div className="hidden md:block md:w-[46%]" />
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
