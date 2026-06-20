'use client'

import React from 'react'
import Image from 'next/image'
import { Certificate } from '@/types/portfolio'
import { GlassCard } from '@/components/ui/cards/glass-card'

interface CertificateCardProps {
  certificate: Certificate
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
  return (
    <GlassCard className="flex items-center p-5 space-x-5 hover:border-foreground/10 group">
      {certificate.badgeImage && (
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-border/80 bg-muted/5">
          <Image
            src={certificate.badgeImage}
            alt={certificate.issuer}
            fill
            sizes="48px"
            className="object-contain p-1.5"
            loading="lazy"
          />
        </div>
      )}

      <div className="flex-grow min-w-0">
        <h4 className="text-sm font-bold tracking-tight text-foreground truncate transition-colors group-hover:text-emerald-400">
          {certificate.title}
        </h4>
        <p className="text-[11px] font-mono text-muted-foreground/60 mt-1">
          {certificate.issuer} &bull; {certificate.issueDate}
        </p>
      </div>

      {certificate.credentialUrl && (
        <a
          href={certificate.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-button border border-border bg-card text-muted-foreground transition-all hover:text-foreground hover:bg-muted cursor-pointer"
          aria-label={`Verify ${certificate.title}`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </a>
      )}
    </GlassCard>
  )
}
