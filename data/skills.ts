import { Skill } from '@/types/portfolio'

export const skills: Skill[] = [
  // Backend
  { name: 'Java', category: 'backend', icon: 'java', level: 90 },
  { name: 'Spring Boot', category: 'backend', icon: 'spring', level: 85 },
  { name: 'Microservices', category: 'backend', icon: 'cpu', level: 80 },
  { name: 'REST APIs', category: 'backend', icon: 'api', level: 88 },
  { name: 'Hibernate / JPA', category: 'backend', icon: 'database', level: 82 },
  { name: 'Node.js', category: 'backend', icon: 'nodejs', level: 75 },

  // Frontend
  { name: 'React', category: 'frontend', icon: 'react', level: 80 },
  { name: 'Next.js', category: 'frontend', icon: 'nextjs', level: 78 },
  { name: 'TypeScript', category: 'frontend', icon: 'typescript', level: 82 },
  { name: 'Tailwind CSS', category: 'frontend', icon: 'tailwind', level: 85 },
  { name: 'JavaScript', category: 'frontend', icon: 'javascript', level: 85 },

  // Databases
  { name: 'PostgreSQL', category: 'database', icon: 'postgresql', level: 80 },
  { name: 'MySQL', category: 'database', icon: 'mysql', level: 82 },
  { name: 'MongoDB', category: 'database', icon: 'mongodb', level: 75 },
  { name: 'Redis', category: 'database', icon: 'database', level: 70 },

  // Tools & Cloud
  { name: 'Docker', category: 'tools', icon: 'docker', level: 75 },
  { name: 'AWS', category: 'tools', icon: 'aws', level: 72 },
  { name: 'Git & GitHub', category: 'tools', icon: 'git', level: 88 },
  { name: 'CI/CD Pipelines', category: 'tools', icon: 'terminal', level: 70 },
  { name: 'Maven / Gradle', category: 'tools', icon: 'tool', level: 80 },

  // AI & ML
  { name: 'Python', category: 'ai-ml', icon: 'python', level: 80 },
  { name: 'Generative AI', category: 'ai-ml', icon: 'brain', level: 75 },
  { name: 'Prompt Engineering', category: 'ai-ml', icon: 'sparkles', level: 85 }
]
