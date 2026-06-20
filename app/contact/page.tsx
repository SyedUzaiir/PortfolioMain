'use client'

import React from 'react'
import { Section } from '@/components/layout/section'
import { TextReveal } from '@/components/motion/text-reveal'
import { ScrollReveal } from '@/components/motion/scroll-reveal'

export default function ContactPage() {
  return (
    <Section id="contact-page" title="Get in Touch" subtitle="Contact">
      <div className="flex flex-col space-y-6">
        <TextReveal
          text="Let's Connect"
          className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
        />
        <ScrollReveal variant="blur" delay={0.2}>
          <p className="max-w-2xl text-muted-foreground">
            Have an interesting project or opportunities you want to discuss? Feel free to reach out using the form or connect through my social profiles.
          </p>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={0.4} className="mt-8 border-t border-border/40 pt-12">
          <div className="rounded-card border border-border bg-card/50 p-12 text-center text-muted-foreground">
            <p className="text-sm font-mono">Contact form and mail channels will be rendered here.</p>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
