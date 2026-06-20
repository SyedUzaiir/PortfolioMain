'use client'

import React from 'react'
import { Section } from '@/components/layout/section'
import { TextReveal } from '@/components/motion/text-reveal'
import { ScrollReveal } from '@/components/motion/scroll-reveal'

export default function ResumePage() {
  return (
    <Section id="resume-page" title="Resume" subtitle="Career Summary">
      <div className="flex flex-col space-y-6">
        <TextReveal
          text="Curriculum Vitae"
          className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
        />
        <ScrollReveal variant="blur" delay={0.2}>
          <p className="max-w-2xl text-muted-foreground">
            Preview or download my professional resume to view a detailed breakdown of my engineering experience, skills, and academic background.
          </p>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={0.4} className="mt-8 border-t border-border/40 pt-12">
          <div className="flex flex-col items-center justify-center space-y-6 rounded-card border border-border bg-card/50 p-12 text-center text-muted-foreground">
            <p className="text-sm font-mono">Interactive resume viewer and download actions will be rendered here.</p>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
