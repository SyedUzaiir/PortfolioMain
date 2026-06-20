'use client'

import React from 'react'
import { Section } from '@/components/layout/section'
import { GlassCard } from '@/components/ui/cards/glass-card'
import { ScrollReveal } from '@/components/motion/scroll-reveal'

const stackItems = [
  'Java', 'Spring Boot', 'React', 'Next.js', 'Node.js', 'Express',
  'MongoDB', 'MySQL', 'PostgreSQL', 'Docker', 'AWS', 'Python',
  'TensorFlow', 'Git', 'GitHub', 'VS Code', 'Postman', 'Tailwind CSS', 'TypeScript'
]

const learningItems = [
  { name: 'System Design', icon: '🏗️' },
  { name: 'Kubernetes', icon: '🐳' },
  { name: 'Spring Security', icon: '🔒' },
  { name: 'Advanced Backend', icon: '⚙️' }
]

const nowBullets = [
  'Preparing for Software Engineering placements (advanced DSA & mock sessions)',
  'Building PlacementPro AI (refining document parsers & clinical layout AI engines)',
  'Improving problem solving and system scaling benchmarks',
  'Refactoring Spring Boot transactional microservices for multi-db support'
]

export const TechStack: React.FC = () => {
  return (
    <Section id="tech-stack" title="Technology & Focus" subtitle="Tech Stack" className="py-20 border-t border-border/30 bg-muted/5">
      {/* Self-contained CSS stylesheet for smooth marquee looping */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-container {
          overflow: hidden;
          width: 100%;
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        .marquee-track {
          display: flex;
          width: max-content;
          gap: 1.5rem;
          animation: marquee 35s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Infinite scrolling marquee */}
      <div className="text-left mb-16">
        <ScrollReveal variant="blur">
          <h3 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
            Core Toolbox
          </h3>
          <p className="text-xs text-muted-foreground/60 mt-1 font-mono">
            Hover to pause scrolling
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={0.1} className="marquee-container mt-6 py-2">
          <div className="marquee-track">
            {/* Render duplicated list to loop seamless */}
            {[...stackItems, ...stackItems].map((item, idx) => (
              <div
                key={`${item}-${idx}`}
                className="flex items-center space-x-2 rounded-button border border-border bg-card px-5 py-3 text-xs font-mono font-bold text-foreground/80 hover:text-emerald-500 hover:border-emerald-500/30 transition-all select-none shadow-sm"
              >
                <span>{item}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Currently Learning & Now Section grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 text-left">
        {/* Currently Learning */}
        <ScrollReveal variant="fade-up" delay={0.15}>
          <GlassCard glow className="p-6 flex flex-col justify-between h-full">
            <div>
              <h4 className="text-sm font-bold text-emerald-400 font-mono uppercase tracking-wider">
                Currently Learning
              </h4>
              <p className="text-xs text-muted-foreground/60 mt-1 font-light leading-relaxed">
                Exploring advanced concepts to scale systems and ensure data integrity.
              </p>
              
              <div className="mt-6 grid grid-cols-2 gap-3">
                {learningItems.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center space-x-2.5 rounded-card border border-border/80 bg-card/30 p-3 hover:border-emerald-500/20 hover:bg-emerald-500/[0.01] transition-all group"
                  >
                    <span className="text-sm group-hover:scale-110 transition-transform">{item.icon}</span>
                    <span className="text-xs font-mono font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 border-t border-border/40 pt-4 text-[10px] font-mono text-muted-foreground/40 text-center">
              Active study tracks • Updated weekly
            </div>
          </GlassCard>
        </ScrollReveal>

        {/* Now Section */}
        <ScrollReveal variant="fade-up" delay={0.2}>
          <GlassCard glow className="p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-teal-400 font-mono uppercase tracking-wider">
                  What I&apos;m Working On Now
                </h4>
                <a
                  href="https://nownownow.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[9px] font-mono font-bold text-muted-foreground/40 hover:text-emerald-500 transition-colors uppercase tracking-wider"
                >
                  now page
                </a>
              </div>
              <p className="text-xs text-muted-foreground/60 mt-1 font-light leading-relaxed">
                A brief layout of my current primary focuses.
              </p>

              <ul className="mt-6 space-y-3.5 pl-4 list-disc text-xs font-light text-muted-foreground leading-relaxed">
                {nowBullets.map((bullet, idx) => (
                  <li key={idx} className="marker:text-emerald-500">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-border/40 pt-4 text-[10px] font-mono text-muted-foreground/40 text-center">
              Inspired by nownownow.com
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </Section>
  )
}
