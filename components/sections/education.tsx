'use client'

import React from 'react'
import { Section } from '@/components/layout/section'
import { GlassCard } from '@/components/ui/cards/glass-card'
import { Button } from '@/components/ui/buttons/button'
import { ScrollReveal } from '@/components/motion/scroll-reveal'
import { education } from '@/data/education'
import { GraduationCap, Calendar, Award } from 'lucide-react'
import Link from 'next/link'

const certPreviews = [
  { name: 'Oracle Cloud Infrastructure Associate', issuer: 'Oracle', year: '2023', badge: '☁️' },
  { name: 'Salesforce Certified Associate', issuer: 'Salesforce', year: '2024', badge: '☁️' },
  { name: 'Docker Containerization Essentials', issuer: 'Docker', year: '2024', badge: '🐳' },
  { name: 'Atlassian Jira Project Management', issuer: 'Atlassian', year: '2023', badge: '🚀' },
  { name: 'Smart Coder Advanced DSA', issuer: 'Smart Coder Coding Hub', year: '2024', badge: '🏆' },
  { name: 'NPTEL Cloud & Distributed Networks', issuer: 'NPTEL (IIT)', year: '2023', badge: '📚' }
]

export const Education: React.FC = () => {
  return (
    <Section
      id="education"
      title="Education & Credentials"
      subtitle="Academic Timeline"
      className="py-20 border-t border-border/30 bg-muted/5"
    >
      {/* Education Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 text-left">
        {education.map((item, idx) => (
          <ScrollReveal key={item.id} variant="fade-up" delay={idx * 0.1}>
            <GlassCard glow className="p-6 flex flex-col justify-between h-full hover:border-emerald-500/10 transition-colors">
              <div>
                <div className="flex items-center justify-between border-b border-border/40 pb-3">
                  <div className="flex items-center space-x-2.5">
                    <GraduationCap className="h-5 w-5 text-emerald-500 shrink-0" />
                    <h4 className="text-sm font-bold text-foreground">
                      {item.degree.split(' in ')[0]}
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/5 border border-emerald-500/15 px-2 py-0.5 rounded uppercase">
                    CGPA: {item.cgpa}
                  </span>
                </div>

                <div className="mt-4 space-y-1">
                  <h3 className="text-base font-extrabold text-foreground tracking-tight">
                    {item.institution}
                  </h3>
                  <p className="text-xs text-muted-foreground/60 font-semibold font-mono">
                    {item.degree}
                  </p>
                  <div className="flex items-center space-x-1.5 text-[10px] text-muted-foreground/50 font-mono pt-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                <ul className="mt-5 space-y-2 list-disc pl-4 text-xs font-light text-muted-foreground leading-relaxed">
                  {item.details?.map((detail: string, i: number) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-border/40 text-[9px] font-mono text-muted-foreground/40 text-center uppercase tracking-wider font-bold">
                Completed Coursework Verified
              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>

      {/* Certification Preview Grid */}
      <div className="mt-16 border-t border-border/40 pt-16">
        <ScrollReveal variant="blur" className="mb-8 text-left">
          <div className="flex items-center space-x-2 text-emerald-500">
            <Award className="h-4 w-4 shrink-0" />
            <span className="text-xs font-bold tracking-widest uppercase font-mono">
              Professional Credentials
            </span>
          </div>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Certification Highlights
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {certPreviews.map((cert, idx) => (
            <ScrollReveal key={cert.name} variant="fade-up" delay={idx * 0.05}>
              <GlassCard className="p-4 hover:border-foreground/10 transition-all flex items-center space-x-4">
                <div className="h-10 w-10 rounded-card border border-border bg-card flex items-center justify-center text-lg shrink-0 select-none shadow-sm">
                  {cert.badge}
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-foreground truncate">{cert.name}</h4>
                  <p className="text-[10px] text-muted-foreground/50 font-mono mt-0.5">
                    {cert.issuer} &bull; {cert.year}
                  </p>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        {/* View All CTAs */}
        <ScrollReveal variant="fade-up" className="mt-10 flex justify-center">
          <Link href="/resume">
            <Button variant="secondary" magnetic className="h-10 px-6 text-xs font-bold uppercase tracking-wider">
              View All Certifications
            </Button>
          </Link>
        </ScrollReveal>
      </div>
    </Section>
  )
}
