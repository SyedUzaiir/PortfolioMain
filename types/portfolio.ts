import { z } from 'zod'

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'ai-ml' | 'other'
  level: number            // 1-100
  experienceYears?: number
  icon?: string            // Lucide or inline SVG index key
  color?: string           // Accent hex code or tailwind style color
}

export interface Project {
  id: string
  title: string
  description: string
  image?: string
  github?: string          // GitHub URL
  live?: string            // Live Deployment URL
  status: 'development' | 'completed' | 'archived' | 'in-progress' | 'prototype'
  techStack: string[]
  featured: boolean
  year: string
  category: string
  problemSolved?: string
  keyFeatures?: string[]
  architecture?: string
  challenges?: string
  futureImprovements?: string[]
  gallery?: string[]
}

export interface Experience {
  id: string
  company: string
  role: string
  duration: string         // e.g. "Aug 2024 – Present"
  location?: string
  description: string[]    // Bullet points of accomplishments
  technologies?: string[]
}

export interface Education {
  id: string
  institution: string
  degree: string
  duration: string         // e.g. "2021 – 2025"
  cgpa?: string
  details?: string[]
}

export interface Certificate {
  id: string
  title: string
  issuer: string
  issueDate: string
  credentialUrl?: string
  badgeImage?: string
}

export interface Achievement {
  id: string
  title: string
  description: string
  year?: string
}

export interface SocialLink {
  platform: string
  url: string
  iconName: string
}

export interface CodingProfile {
  platform: string
  username: string
  url: string
  rating?: string
  problemsSolved?: number
  badge?: string
  icon?: string
}

// Contact form schemas using Zod for validation
export const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(4, { message: 'Subject must be at least 4 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' })
})

export type ContactForm = z.infer<typeof contactFormSchema>
