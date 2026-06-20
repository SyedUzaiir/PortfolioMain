'use client'

import React from 'react'
import { Section } from '@/components/layout/section'
import { GlassCard } from '@/components/ui/cards/glass-card'
import { TimelineCard } from '@/components/ui/cards/timeline-card'
import { Button } from '@/components/ui/buttons/button'
import { SocialButton } from '@/components/ui/buttons/social-button'
import { ScrollReveal } from '@/components/motion/scroll-reveal'
import { MapPin, GraduationCap, Briefcase } from 'lucide-react'
import Link from 'next/link'

const timelineItems = [
  {
    title: 'Diploma in Computer Science',
    subtitle: 'Foundation & Core Concepts',
    duration: '2021 – 2024',
    description: 'Built a solid foundation in programming languages, databases, Object-Oriented Programming (OOP), and computer systems fundamentals.'
  },
  {
    title: 'Bachelor of Technology (CSE)',
    subtitle: 'Pursuing Degree',
    duration: '2024 – 2027',
    description: 'Currently pursuing a B.Tech in Computer Science & Engineering. Academic focus areas include Data Structures & Algorithms, Full Stack Development, Java Backend development, Database Systems, Software Engineering, and Artificial Intelligence.'
  },
  {
    title: 'Full Stack Projects & Continuous Learning',
    subtitle: 'Software Building & Tech Exploration',
    duration: '2024 – Present',
    description: 'Working on dynamic personal and real-world software projects, exploring modern technologies, and continuously improving design patterns and development skills.'
  },
  {
    title: 'Placement Preparation',
    subtitle: 'Interview & Engineering Readiness',
    duration: '2025 – Present',
    description: 'Intensively focusing on Data Structures & Algorithms (DSA), System Design concepts, Core Computer Science Fundamentals, Java Backend architectures, Full Stack Engineering, and mock interview practice.'
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
              Building Complete End-to-End Applications
            </h3>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.1} className="space-y-4 text-sm font-light text-muted-foreground leading-relaxed sm:text-base">
            <p>
              I am a Full Stack Developer driven by a passion for building complete applications from the ground up. I love crafting clean, intuitive user interfaces for the frontend while architecting secure, reliable systems and databases for the backend. For me, software development is all about solving real-world problems and creating experiences that work seamlessly from end to end.
            </p>
            <p>
              I enjoy exploring and working with modern web technologies. Whether I am tuning a React user interface for a smooth UI transition or implementing clean RESTful endpoints, I focus on writing maintainable, type-safe code that scales.
            </p>
            <p>
              Right now, I am actively preparing for software engineering placements. As part of my preparation, I am strengthening my coding fundamentals through Data Structures and Algorithms (DSA), studying System Design patterns, and deep-diving into Java Backend development, Spring Boot, and scalable system architecture.
            </p>
            <p>
              I am always eager to learn, build, and collaborate with teams that value high-quality software solutions and continuous growth.
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
                  <p className="text-xs text-muted-foreground/60 font-mono">syeduzairmohiuddin33@gmail.com</p>
                </div>
              </div>

              {/* Profile Details List */}
              <div className="mt-5 space-y-3.5 text-xs text-muted-foreground">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span className="font-light">
                    <strong className="text-foreground font-semibold">B.Tech in CSE</strong>
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
