'use client'

import React from 'react'
import Image from 'next/image'
import { Project } from '@/types/portfolio'
import { GlassCard } from '@/components/ui/cards/glass-card'
import { TechBadge } from '@/components/ui/shared/tech-badge'
import { ExternalLink } from 'lucide-react'

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

interface ProjectCardProps {
  project: Project
  onClick?: () => void
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'completed':
        return (
          <span className="inline-flex items-center space-x-1 text-[10px] font-mono font-bold text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Production</span>
          </span>
        )
      case 'in-progress':
        return (
          <span className="inline-flex items-center space-x-1 text-[10px] font-mono font-bold text-yellow-400">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500 animate-pulse" />
            <span>In Progress</span>
          </span>
        )
      case 'prototype':
        return (
          <span className="inline-flex items-center space-x-1 text-[10px] font-mono font-bold text-blue-400">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span>Prototype</span>
          </span>
        )
      case 'archived':
        return (
          <span className="inline-flex items-center space-x-1 text-[10px] font-mono font-bold text-muted-foreground/60">
            <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50" />
            <span>Archived</span>
          </span>
        )
      default:
        return null
    }
  }

  return (
    <div onClick={onClick} className="cursor-pointer h-full">
      <GlassCard glow className="group flex flex-col h-full hover:-translate-y-1.5 hover:border-emerald-500/20 hover:shadow-2xl transition-all duration-300">
        {project.image && (
          <div className="relative aspect-video w-full overflow-hidden border-b border-border/50 bg-muted/20">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority={project.featured}
              unoptimized
            />
          </div>
        )}

        <div className="flex flex-col flex-grow p-6">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold tracking-widest text-emerald-500 uppercase font-mono">
              {project.category}
            </span>
            {getStatusBadge(project.status)}
          </div>
          
          <h4 className="mt-2 text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-emerald-400">
            {project.title}
          </h4>
          
          <p className="mt-3 text-sm font-light text-muted-foreground line-clamp-3 leading-relaxed flex-grow">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 5).map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
            {project.techStack.length > 5 && (
              <span className="text-[9px] font-mono text-muted-foreground/50 border border-border px-1.5 py-0.5 rounded bg-muted/20">
                +{project.techStack.length - 5}
              </span>
            )}
          </div>

          {(project.github || project.live) && (
            <div className="mt-5 flex gap-2 w-full">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1"
                >
                  <button className="w-full inline-flex h-9 items-center justify-center rounded-button bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold uppercase tracking-wider gap-1.5 transition-colors cursor-pointer shadow-sm">
                    <GithubIcon className="h-3.5 w-3.5" /> Codebase
                  </button>
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1"
                >
                  <button className="w-full inline-flex h-9 items-center justify-center rounded-button border border-border bg-muted/40 hover:bg-muted text-foreground text-[10px] font-bold uppercase tracking-wider gap-1.5 transition-colors cursor-pointer shadow-sm">
                    <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                  </button>
                </a>
              )}
            </div>
          )}

          <div className="mt-5 flex items-center justify-between border-t border-border/40 pt-4 text-xs font-bold tracking-wide">
            <span className="text-muted-foreground/50 font-mono">{project.year}</span>
            <span className="text-[10px] text-emerald-400 group-hover:underline font-mono">
              Details &rarr;
            </span>
          </div>
        </div>
      </GlassCard>
    </div>
  )
}
