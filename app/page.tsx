'use client'

import React from 'react'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Skills } from '@/components/sections/skills'
import { TechStack } from '@/components/sections/tech-stack'
import { Projects } from '@/components/sections/projects'
import { Dashboard } from '@/components/sections/dashboard'
import { Experience } from '@/components/sections/experience'
import { Education } from '@/components/sections/education'
import { Certifications } from '@/components/sections/certifications'
import { Achievements } from '@/components/sections/achievements'
import { Contact } from '@/components/sections/contact'

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <Skills />
      <TechStack />
      <Projects />
      <Dashboard />
      <Experience />
      <Education />
      <Certifications />
      <Achievements />
      <Contact />
    </div>
  )
}
