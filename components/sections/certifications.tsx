'use client'

import React, { useState } from 'react'
import { Section } from '@/components/layout/section'
import { GlassCard } from '@/components/ui/cards/glass-card'
import { Button } from '@/components/ui/buttons/button'
import { TechBadge } from '@/components/ui/shared/tech-badge'
import { ScrollReveal } from '@/components/motion/scroll-reveal'
import { certificates } from '@/data/certificates'
import { ExternalLink, Copy, Check, Award, Calendar, Hash } from 'lucide-react'
import { motion } from 'framer-motion'

export const Certifications: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const handleCopyId = (certId: string, credentialId: string) => {
    navigator.clipboard.writeText(credentialId)
    setCopiedId(certId)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <Section
      id="certifications"
      title="Certifications & Credentials"
      subtitle="Professional credentials and industry-recognized achievements that validate my technical expertise."
      className="py-20 border-t border-border/30"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
        {certificates.map((cert, idx) => {
          const isCopied = copiedId === cert.id

          return (
            <ScrollReveal key={cert.id} variant="fade-up" delay={idx * 0.05}>
              <motion.div
                whileHover={{ rotate: 1, y: -6 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="h-full"
              >
                <GlassCard
                  glow
                  className="p-5 flex flex-col justify-between h-full border border-border/60 hover:border-emerald-500/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.08)] transition-all duration-300 relative group overflow-hidden"
                >
                  <div>
                    {/* Header: Category Badge & Logo placeholder */}
                    <div className="flex items-start justify-between">
                      <span className="text-[9px] font-mono font-bold tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded uppercase">
                        {cert.category}
                      </span>
                      <div className="h-8 w-8 rounded-full bg-zinc-800/40 border border-border flex items-center justify-center text-xs font-black text-foreground shadow-sm">
                        <Award className="h-4 w-4 text-emerald-500" />
                      </div>
                    </div>

                    {/* Certificate Digital representation preview frame */}
                    <div className="mt-4 relative aspect-video w-full rounded-card border border-border bg-gradient-to-br from-zinc-900 to-zinc-950 overflow-hidden flex flex-col justify-between p-4 group-hover:border-border/80 transition-colors">
                      <div className="flex justify-between items-start">
                        <span className="font-mono text-[8px] font-bold text-muted-foreground/40 tracking-wider">
                          VERIFIED CREDENTIAL
                        </span>
                        <span className="font-mono text-[9px] font-bold text-emerald-500/60">
                          {cert.issuer.toUpperCase()}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-foreground line-clamp-2 pr-4 leading-snug">
                        {cert.title}
                      </div>
                      <div className="flex justify-between items-center text-[8px] font-mono text-muted-foreground/30 mt-2">
                        <span>ISSUED: {cert.issueDate}</span>
                        <span>ID: {cert.credentialId}</span>
                      </div>
                      {/* Premium grid overlay texture */}
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />
                      {/* Hover subtle radial glow */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08)_0%,transparent_60%)] pointer-events-none" />
                    </div>

                    {/* Metadata Content */}
                    <div className="mt-5 space-y-3">
                      <div>
                        <h4 className="text-sm font-bold text-foreground leading-snug tracking-tight">
                          {cert.title}
                        </h4>
                        <p className="text-[11px] text-muted-foreground/60 font-semibold font-mono mt-0.5">
                          {cert.issuer}
                        </p>
                      </div>

                      {/* Issue date & Credential ID copy */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] text-muted-foreground/50 font-mono">
                        <span className="flex items-center space-x-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{cert.issueDate}</span>
                        </span>
                        {cert.credentialId && (
                          <button
                            onClick={() => handleCopyId(cert.id, cert.credentialId!)}
                            className="flex items-center space-x-1.5 hover:text-foreground cursor-pointer transition-colors"
                            title="Copy Credential ID"
                            aria-label={`Copy credential ID for ${cert.title}`}
                          >
                            <Hash className="h-3.5 w-3.5" />
                            <span className="underline decoration-dotted select-all">{cert.credentialId}</span>
                            {isCopied ? (
                              <Check className="h-3 w-3 text-emerald-500 shrink-0" />
                            ) : (
                              <Copy className="h-3 w-3 shrink-0" />
                            )}
                          </button>
                        )}
                      </div>

                      {/* Skills Covered tags */}
                      {cert.skills && (
                        <div className="pt-2 border-t border-border/40">
                          <span className="text-[9px] text-muted-foreground/50 font-mono block mb-1.5 uppercase font-bold tracking-wider">
                            Skills Validated
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {cert.skills.map((skill) => (
                              <TechBadge key={skill} name={skill} />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Verification CTA Button (reveals overlay effect or standard buttons) */}
                  <div className="mt-6 pt-4 border-t border-border/40">
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full block"
                      >
                        <Button
                          variant="secondary"
                          className="w-full h-9 text-[10px] font-bold uppercase tracking-widest gap-1.5 transition-all group-hover:bg-emerald-500 group-hover:text-foreground group-hover:border-emerald-500/10 cursor-pointer"
                        >
                          Verify Credential <ExternalLink className="h-3 w-3" />
                        </Button>
                      </a>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            </ScrollReveal>
          )
        })}
      </div>
    </Section>
  )
}
