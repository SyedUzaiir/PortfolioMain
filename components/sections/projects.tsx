'use client'

import React, { useState, useEffect } from 'react'
import { projects } from '@/data/projects'
import { Project } from '@/types/portfolio'
import { Section } from '@/components/layout/section'
import { ProjectCard } from '@/components/ui/cards/project-card'
import { TechBadge } from '@/components/ui/shared/tech-badge'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const filters = ['All', 'AI', 'Backend', 'Full Stack', 'Web', 'ML', 'Java']

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedProject])

  const filterProject = (p: Project, f: string) => {
    if (f === 'All') return true
    const filterLower = f.toLowerCase()
    
    if (filterLower === 'ai') {
      return p.category.toLowerCase().includes('ai') || p.techStack.some(t => t.toLowerCase().includes('ai'))
    }
    if (filterLower === 'backend') {
      return p.category.toLowerCase().includes('backend') || p.techStack.some(t => ['spring boot', 'fastapi', 'express', 'node.js', 'java'].includes(t.toLowerCase()))
    }
    if (filterLower === 'full stack') {
      return p.category.toLowerCase().includes('full stack') || (p.techStack.some(t => ['react', 'next.js'].includes(t.toLowerCase())) && p.techStack.some(t => ['spring boot', 'express', 'node.js', 'fastapi'].includes(t.toLowerCase())))
    }
    if (filterLower === 'web') {
      return p.category.toLowerCase().includes('web') || p.techStack.some(t => ['react', 'next.js', 'tailwind'].includes(t.toLowerCase()))
    }
    if (filterLower === 'ml') {
      return p.category.toLowerCase().includes('ml') || p.category.toLowerCase().includes('learning') || p.techStack.some(t => ['tensorflow', 'pytorch', 'scikit-learn', 'python'].includes(t.toLowerCase()))
    }
    if (filterLower === 'java') {
      return p.techStack.some(t => ['java', 'spring boot', 'spring cloud'].includes(t.toLowerCase()))
    }
    return true
  }

  const filteredProjects = projects.filter((p) => filterProject(p, activeFilter))

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Portfolio Builds"
      className="py-20 border-t border-border/30"
    >
      {/* Horizontal scrolling filter menu */}
      <div className="flex justify-start md:justify-center overflow-x-auto pb-4 scrollbar-none -mx-4 px-4">
        <div className="flex space-x-1.5 shrink-0 bg-muted/40 p-1 border border-border/60 rounded-button">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-button px-4 py-1.5 text-xs font-mono font-bold transition-all cursor-pointer ${
                activeFilter === filter
                  ? 'bg-emerald-500 text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 text-left"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Premium Detail Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-card border border-border bg-card shadow-2xl p-6 md:p-8 flex flex-col space-y-6 text-left scrollbar-thin"
              data-lenis-prevent
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Trigger */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 rounded-full border border-border bg-muted/50 p-2 text-muted-foreground hover:text-foreground hover:bg-muted cursor-pointer transition-colors"
                aria-label="Close details"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Header Title */}
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-500">
                  {selectedProject.category} &bull; {selectedProject.year}
                </span>
                <h3 className="text-2xl font-extrabold text-foreground mt-1 tracking-tight">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Large Image Frame */}
              {selectedProject.image && (
                <div className="relative aspect-video w-full rounded-card border border-border/80 bg-muted/20 overflow-hidden shrink-0">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    unoptimized
                  />
                </div>
              )}

              {/* Description & Specs */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-muted-foreground uppercase font-mono tracking-wider">
                    Overview
                  </h4>
                  <p className="mt-1 text-sm font-light text-muted-foreground leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {selectedProject.problemSolved && (
                  <div>
                    <h4 className="text-xs font-bold text-muted-foreground uppercase font-mono tracking-wider">
                      The Problem Solved
                    </h4>
                    <p className="mt-1 text-sm font-light text-muted-foreground leading-relaxed">
                      {selectedProject.problemSolved}
                    </p>
                  </div>
                )}

                {selectedProject.keyFeatures && (
                  <div>
                    <h4 className="text-xs font-bold text-muted-foreground uppercase font-mono tracking-wider">
                      Key Features
                    </h4>
                    <ul className="mt-1.5 list-disc pl-4 space-y-1 text-sm font-light text-muted-foreground">
                      {selectedProject.keyFeatures.map((feat: string, i: number) => (
                        <li key={i}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedProject.architecture && (
                  <div>
                    <h4 className="text-xs font-bold text-muted-foreground uppercase font-mono tracking-wider">
                      System Architecture
                    </h4>
                    <p className="mt-1 text-sm font-light text-muted-foreground leading-relaxed">
                      {selectedProject.architecture}
                    </p>
                  </div>
                )}

                {selectedProject.challenges && (
                  <div>
                    <h4 className="text-xs font-bold text-muted-foreground uppercase font-mono tracking-wider">
                      Engineering Challenges
                    </h4>
                    <p className="mt-1 text-sm font-light text-muted-foreground leading-relaxed">
                      {selectedProject.challenges}
                    </p>
                  </div>
                )}

                {selectedProject.futureImprovements && (
                  <div>
                    <h4 className="text-xs font-bold text-muted-foreground uppercase font-mono tracking-wider">
                      Future Improvements
                    </h4>
                    <ul className="mt-1.5 list-disc pl-4 space-y-1 text-sm font-light text-muted-foreground">
                      {selectedProject.futureImprovements.map((imp: string, i: number) => (
                        <li key={i}>{imp}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-bold text-muted-foreground uppercase font-mono tracking-wider">
                    Technologies
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {selectedProject.techStack.map((tech) => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
