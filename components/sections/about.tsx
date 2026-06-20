'use client'

import React from 'react'
import { Section } from '@/components/layout/section'
import { GlassCard } from '@/components/ui/cards/glass-card'
import { TimelineCard } from '@/components/ui/cards/timeline-card'
import { Button } from '@/components/ui/buttons/button'
import { SocialButton } from '@/components/ui/buttons/social-button'
import { ScrollReveal } from '@/components/motion/scroll-reveal'
import { MapPin, GraduationCap, Briefcase, Mail } from 'lucide-react'
import Link from 'next/link'

const timelineItems = [
  {
    title: 'Diploma in Computer Science',
    subtitle: 'Foundation Phase & Core CS Concepts',
    duration: '2018 – 2021',
    description: 'Introduced to programming, databases, and Object-Oriented principles. Developed small web and system utilities.'
  },
  {
    title: 'Bachelor of Technology (CSE)',
    subtitle: 'Advanced Algorithms & Enterprise Architectures',
    duration: '2021 – 2025',
    description: 'Specializing in Computer Science & Engineering. Deepened knowledge in Algorithms, OS, Distributed Architectures, and Full-Stack Engineering.'
  },
  {
    title: 'Java Backend Internships',
    subtitle: 'Tech Solutions Inc. / Innovate Tech Labs',
    duration: '2024',
    description: 'Built scalable microservices using Spring Boot, integrated message brokers (Kafka), and optimized database access queries.'
  },
  {
    title: 'Enterprise Projects',
    subtitle: 'PlacementPro AI & Microservices E-Commerce',
    duration: '2024 – 2025',
    description: 'Architected and launched AI-driven parsing engines and distributed checkout flows, focusing on cache consistency and asynchronous pipelines.'
  },
  {
    title: 'Placement Preparation & Systems Study',
    subtitle: 'Advanced DSA & Architectural Design Patterns',
    duration: '2025 – Present',
    description: 'Solving complex algorithmic problems, practicing architectural design patterns, and refining system design skills for engineering placements.'
  }
]

export const About: React.FC = () => {
  return (
    <Section id="about" title="About Me" subtitle="Biography" className="py-20 border-t border-border/30 bg-muted/5">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
        {/* Left Column Story */}
        <div className="space-y-6 lg:col-span-7 text-left">
          <ScrollReveal variant="blur">
            <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Engineering Scalable Systems & AI Integrations
            </h3>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.1} className="space-y-4 text-sm font-light text-muted-foreground leading-relaxed sm:text-base">
            <p>
              I am a Software Engineer passionate about designing resilient backends, distributed microservices, and modern user experiences. My engineering journey centers on translating complex operational challenges into highly-scalable, type-safe clean code.
            </p>
            <p>
              With extensive training in **Java, Spring Boot, and database architectures**, I build systems that scale gracefully. I thrive in optimizing database query throughput, managing message pipelines with Kafka, and securing transactional endpoints.
            </p>
            <p>
              Beyond traditional backends, I actively explore **Artificial Intelligence**—integrating layout intelligence engines, prompt pipelines, and large language models into SaaS workflows to automate information parsing and user analytics.
            </p>
            <p>
              As I wrap up my engineering degree, I am heavily focused on solving algorithmic structures, dissecting large-scale system designs, and preparing for placements to join progressive technology teams.
            </p>
          </ScrollReveal>
        </div>

        {/* Right Column Professional Card */}
        <div className="lg:col-span-5">
          <ScrollReveal variant="fade-up" delay={0.2}>
            <GlassCard glow className="p-6">
              <div className="flex items-center space-x-4 border-b border-border/40 pb-4">
                <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-mono font-bold text-sm shrink-0">
                  SU
                </div>
                <div className="min-w-0">
                  <h4 className="text-base font-bold text-foreground">Syed Uzair Mohiuddin</h4>
                  <p className="text-xs text-muted-foreground/60 font-mono">uzair.mohiuddin@email.com</p>
                </div>
              </div>

              {/* Profile Details List */}
              <div className="mt-5 space-y-3.5 text-xs text-muted-foreground">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span className="font-light">
                    <strong className="text-foreground font-semibold">B.Tech in CSE</strong> &bull; CGPA: 8.5/10
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span className="font-light">Hyderabad, India</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Briefcase className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <strong className="text-foreground font-semibold block">Open to:</strong>
                    <div className="flex flex-wrap gap-1">
                      {['Internships', 'Full-Time', 'Freelance'].map((role) => (
                        <span key={role} className="bg-emerald-500/5 border border-emerald-500/10 rounded px-1.5 py-0.5 text-[9px] font-mono text-emerald-400 font-bold uppercase">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between">
                <div className="flex space-x-2">
                  <SocialButton platform="github" url="https://github.com/SyedUzaiir" />
                  <SocialButton platform="linkedin" url="https://linkedin.com/in/syeduzair" />
                </div>
                <Link href="/resume">
                  <Button variant="secondary" className="h-9 px-4 text-xs font-bold uppercase tracking-wider">
                    View CV
                  </Button>
                </Link>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>

      {/* Mini Timeline below */}
      <div className="mt-20 border-t border-border/40 pt-16">
        <ScrollReveal variant="blur" className="mb-10 text-left">
          <h4 className="text-sm font-bold tracking-widest text-emerald-500 uppercase font-mono">
            Academic & Professional Journey
          </h4>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Timeline Milestones
          </h3>
        </ScrollReveal>

        <div className="max-w-3xl text-left">
          {timelineItems.map((item, idx) => (
            <TimelineCard key={item.title} isLast={idx === timelineItems.length - 1}>
              <ScrollReveal variant="fade-up" delay={idx * 0.05}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
                  <h4 className="text-base font-bold text-foreground group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h4>
                  <span className="font-mono text-[10px] font-bold text-muted-foreground/60 shrink-0">
                    {item.duration}
                  </span>
                </div>
                <p className="text-xs text-emerald-500/80 font-mono mt-0.5 font-bold uppercase tracking-wider">
                  {item.subtitle}
                </p>
                <p className="mt-2 text-sm font-light text-muted-foreground/80 leading-relaxed">
                  {item.description}
                </p>
              </ScrollReveal>
            </TimelineCard>
          ))}
        </div>
      </div>
    </Section>
  )
}
