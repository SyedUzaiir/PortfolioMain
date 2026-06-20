'use client'

import React from 'react'
import Image from 'next/image'
import { Project } from '@/types/portfolio'
import { GlassCard } from '@/components/ui/cards/glass-card'
import { TechBadge } from '@/components/ui/shared/tech-badge'

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
              loading="lazy"
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

          <div className="mt-6 flex items-center justify-between border-t border-border/40 pt-4 text-xs font-bold tracking-wide">
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
