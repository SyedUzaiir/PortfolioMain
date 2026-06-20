'use client'

import React, { useState } from 'react'
import { Section } from '@/components/layout/section'
import { GlassCard } from '@/components/ui/cards/glass-card'
import { ProgressBar } from '@/components/ui/shared/progress-bar'
import { TechBadge } from '@/components/ui/shared/tech-badge'
import { ScrollReveal } from '@/components/motion/scroll-reveal'
import { Star, ChevronRight, HelpCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface LanguageDetail {
  name: string
  stars: number
  role: string
  details: string[]
}

const languages: LanguageDetail[] = [
  {
    name: 'Java',
    stars: 5,
    role: 'Primary Language & Systems Core',
    details: ['Collections', 'Streams API', 'Multithreading', 'OOP Design', 'DSA', 'Spring Integration', 'JDBC']
  },
  {
    name: 'Python',
    stars: 4,
    role: 'Machine Learning, Scripting & AI Pipelines',
    details: ['FastAPI', 'scikit-learn', 'TensorFlow', 'Automation', 'Data Wrangling']
  },
  {
    name: 'TypeScript',
    stars: 4,
    role: 'Type-Safe Frontend Development',
    details: ['Next.js Framework', 'Framer Motion', 'Zod Schemas', 'State Management']
  },
  {
    name: 'JavaScript',
    stars: 4,
    role: 'Modern Web Scripting',
    details: ['React Hooks', 'Node.js/Express', 'ES6+ standards', 'Asynchronous patterns']
  },
  {
    name: 'SQL',
    stars: 4,
    role: 'Relational Database Operations',
    details: ['PostgreSQL', 'MySQL', 'Indexes Optimization', 'Complex Joins', 'Joins & Views']
  }
]

export const Skills: React.FC = () => {
  const [activeLang, setActiveLang] = useState<LanguageDetail | null>(null)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category)
  }

  const renderStars = (count: number) => {
    return (
      <div className="flex space-x-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-3 w-3 shrink-0 ${
              i < count ? 'fill-emerald-500 text-emerald-500' : 'text-muted-foreground/30'
            }`}
          />
        ))}
      </div>
    )
  }

  return (
    <Section id="skills" title="Technical Capabilities" subtitle="Skills Stack" className="py-20 border-t border-border/30">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
        {/* Left Column: Languages (Proficiency & Popups) */}
        <div className="lg:col-span-6 flex flex-col space-y-6 text-left">
          <ScrollReveal variant="blur">
            <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Programming Languages
            </h3>
            <p className="text-xs text-muted-foreground/60 mt-1 font-mono">
              Click a language to view core focus areas
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.1} className="space-y-3">
            {languages.map((lang) => (
              <button
                key={lang.name}
                onClick={() => setActiveLang(activeLang?.name === lang.name ? null : lang)}
                className={`flex w-full items-center justify-between p-4 rounded-card border transition-all cursor-pointer text-left ${
                  activeLang?.name === lang.name
                    ? 'border-emerald-500/30 bg-emerald-500/5 shadow-[0_0_15px_-5px_rgba(16,185,129,0.1)]'
                    : 'border-border/80 bg-card/30 hover:border-foreground/10 hover:bg-muted/30'
                }`}
              >
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="font-mono text-sm font-bold text-foreground">{lang.name}</div>
                  <ChevronRight className={`h-3.5 w-3.5 text-muted-foreground/40 transition-transform ${activeLang?.name === lang.name ? 'rotate-90' : ''}`} />
                </div>
                <div className="flex items-center space-x-4 shrink-0">
                  <span className="hidden sm:inline text-[10px] text-muted-foreground/50 font-mono">
                    {lang.role.split(',')[0]}
                  </span>
                  {renderStars(lang.stars)}
                </div>
              </button>
            ))}
          </ScrollReveal>

          {/* Details Drawer */}
          <AnimatePresence mode="wait">
            {activeLang && (
              <motion.div
                initial={{ opacity: 0, y: 10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: 10, height: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <GlassCard glow className="p-5 border-emerald-500/20 bg-emerald-500/[0.02]">
                  <h4 className="text-sm font-bold text-emerald-400 font-mono tracking-wide">
                    {activeLang.name} Focus Areas:
                  </h4>
                  <p className="text-xs text-muted-foreground/70 mt-1 font-light italic">
                    {activeLang.role}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {activeLang.details.map((topic) => (
                      <TechBadge key={topic} name={topic} className="bg-emerald-500/10 border-emerald-500/20" />
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: Skill Cards with Progress Bars */}
        <div className="lg:col-span-6 space-y-4 text-left">
          <ScrollReveal variant="blur">
            <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Technology Domains
            </h3>
            <p className="text-xs text-muted-foreground/60 mt-1 font-mono">
              Click cards to reveal expanded stack tools
            </p>
          </ScrollReveal>

          {/* Backend Card */}
          <ScrollReveal variant="fade-up" delay={0.1}>
            <button
              onClick={() => toggleCategory('backend')}
              className="w-full text-left focus:outline-none cursor-pointer"
            >
              <GlassCard className="p-5 hover:border-foreground/10 transition-all flex flex-col space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-bold text-foreground">Backend & APIs</h4>
                  <span className="text-[10px] font-mono text-muted-foreground/50 border border-border px-2 py-0.5 rounded bg-muted/40 uppercase font-bold tracking-wider">
                    {expandedCategory === 'backend' ? 'Collapse' : 'Expand'}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-mono text-muted-foreground mb-1">
                      <span>Spring Boot / Java</span>
                      <span>88%</span>
                    </div>
                    <ProgressBar value={88} />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-mono text-muted-foreground mb-1">
                      <span>RESTful APIs & Security</span>
                      <span>90%</span>
                    </div>
                    <ProgressBar value={90} />
                  </div>
                </div>

                <AnimatePresence>
                  {expandedCategory === 'backend' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pt-2 border-t border-border/40 space-y-2"
                    >
                      <p className="text-xs text-muted-foreground/70 font-light leading-relaxed">
                        Experienced in Spring Security (OAuth2/JWT), Hibernate JPA query tuning, microservices coordination (Eureka, Kafka), and REST routing structures.
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {['Node.js', 'Express', 'FastAPI', 'JWT', 'CRUD Pipelines', 'API Integration'].map((tag) => (
                          <TechBadge key={tag} name={tag} />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            </button>
          </ScrollReveal>

          {/* Frontend Card */}
          <ScrollReveal variant="fade-up" delay={0.15}>
            <button
              onClick={() => toggleCategory('frontend')}
              className="w-full text-left focus:outline-none cursor-pointer"
            >
              <GlassCard className="p-5 hover:border-foreground/10 transition-all flex flex-col space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-bold text-foreground">Frontend Engineering</h4>
                  <span className="text-[10px] font-mono text-muted-foreground/50 border border-border px-2 py-0.5 rounded bg-muted/40 uppercase font-bold tracking-wider">
                    {expandedCategory === 'frontend' ? 'Collapse' : 'Expand'}
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-mono text-muted-foreground mb-1">
                      <span>React / Next.js</span>
                      <span>82%</span>
                    </div>
                    <ProgressBar value={82} />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-mono text-muted-foreground mb-1">
                      <span>Tailwind CSS & Styling</span>
                      <span>88%</span>
                    </div>
                    <ProgressBar value={88} />
                  </div>
                </div>

                <AnimatePresence>
                  {expandedCategory === 'frontend' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pt-2 border-t border-border/40 space-y-2"
                    >
                      <p className="text-xs text-muted-foreground/70 font-light leading-relaxed">
                        Skilled in UI motion orchestration, responsive styling constraints, component lifecycles, and client-server rendering trees.
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {['TypeScript', 'HTML5', 'CSS3', 'Responsive Design', 'Accessibility', 'Framer Motion'].map((tag) => (
                          <TechBadge key={tag} name={tag} />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            </button>
          </ScrollReveal>

          {/* Database, Cloud, AI Category Drawer */}
          <ScrollReveal variant="fade-up" delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {['database', 'cloud-ai', 'devops'].map((cat) => {
                const getLabel = () => {
                  if (cat === 'database') return 'Databases'
                  if (cat === 'cloud-ai') return 'AI & Data'
                  return 'DevOps'
                }
                const getDescription = () => {
                  if (cat === 'database') return 'SQL, NoSQL, Aggregations'
                  if (cat === 'cloud-ai') return 'TensorFlow, Python, LLMs'
                  return 'Docker, AWS, Git'
                }
                return (
                  <button
                    key={cat}
                    onClick={() => toggleCategory(cat)}
                    className="text-left focus:outline-none cursor-pointer"
                  >
                    <GlassCard className="p-4 hover:border-foreground/10 transition-all flex flex-col justify-between h-full space-y-3">
                      <div>
                        <h4 className="text-xs font-bold text-foreground">{getLabel()}</h4>
                        <p className="text-[10px] text-muted-foreground/50 font-light mt-0.5">{getDescription()}</p>
                      </div>
                      <span className="text-[9px] font-mono text-emerald-500 font-bold uppercase tracking-wider block">
                        {expandedCategory === cat ? 'Less' : 'Details'}
                      </span>
                    </GlassCard>
                  </button>
                )
              })}
            </div>
          </ScrollReveal>

          {/* Conditional drawer for small categories */}
          <AnimatePresence mode="wait">
            {expandedCategory && ['database', 'cloud-ai', 'devops'].includes(expandedCategory) && (
              <motion.div
                initial={{ opacity: 0, y: 10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: 10, height: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <GlassCard glow className="p-5 border-emerald-500/10">
                  {expandedCategory === 'database' && (
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold text-foreground">Databases & Query Engines</h4>
                      <p className="text-xs text-muted-foreground/75 font-light">
                        Specialized in index optimization, database normalizations, aggregation pipelines in MongoDB, and transaction locks.
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {['PostgreSQL', 'MySQL', 'MongoDB', 'Redis Caching', 'Aggregation', 'Indexing'].map((t) => (
                          <TechBadge key={t} name={t} />
                        ))}
                      </div>
                    </div>
                  )}

                  {expandedCategory === 'cloud-ai' && (
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold text-foreground">Artificial Intelligence & ML</h4>
                      <p className="text-xs text-muted-foreground/75 font-light">
                        Building layout parsing algorithms, data classification scripts, prompt engineering layers, and vector stores.
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {['TensorFlow', 'scikit-learn', 'Python', 'Generative AI', 'NLP', 'LLM Integration'].map((t) => (
                          <TechBadge key={t} name={t} />
                        ))}
                      </div>
                    </div>
                  )}

                  {expandedCategory === 'devops' && (
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold text-foreground">DevOps & Cloud Deployments</h4>
                      <p className="text-xs text-muted-foreground/75 font-light">
                        Deploying Docker containers, setting up VPCs and load balancers on AWS, and configuring CI/CD YAML runner pipelines.
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {['Docker', 'AWS Cloud', 'OCI Cloud', 'GitHub Actions', 'Linux Shell', 'CI/CD Pipelines'].map((t) => (
                          <TechBadge key={t} name={t} />
                        ))}
                      </div>
                    </div>
                  )}
                </GlassCard>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  )
}
