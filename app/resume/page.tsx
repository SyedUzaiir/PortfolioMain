'use client'

import React from 'react'
import { Section } from '@/components/layout/section'
import { ScrollReveal } from '@/components/motion/scroll-reveal'
import { Download, ExternalLink, FileText } from 'lucide-react'

// ─── Single source of truth for the resume filename ───────────────────────────
// If you ever rename the PDF, only update this constant.
const RESUME_FILE = '/UzairRobustResume.pdf'
const RESUME_DISPLAY_NAME = 'Syed_Uzair_Mohiuddin_Resume.pdf'

export default function ResumePage() {
  return (
    <Section id="resume-page" title="Resume" subtitle="Career Summary">
      <div className="flex flex-col space-y-8 text-left">

        {/* Header row */}
        <ScrollReveal variant="blur">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                Syed Uzair Mohiuddin
              </h2>
              <p className="mt-1 text-sm text-muted-foreground font-mono">
                Full Stack Developer &middot; B.Tech CSE &middot; Vardhaman College of Engineering
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href={RESUME_FILE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-10 px-5 rounded-button border border-black/10 dark:border-border bg-white dark:bg-card text-foreground text-xs font-bold uppercase tracking-wider shadow-sm hover:bg-muted transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Open PDF
              </a>
              <a
                href={RESUME_FILE}
                download={RESUME_DISPLAY_NAME}
                className="inline-flex items-center gap-2 h-10 px-5 rounded-button bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-emerald-600/20 hover:bg-emerald-700 transition-colors"
              >
                <Download className="h-3.5 w-3.5" />
                Download
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* PDF Embed Viewer */}
        <ScrollReveal variant="fade-up" delay={0.15} className="w-full">
          <div className="relative w-full overflow-hidden rounded-card border border-black/[0.07] dark:border-border/60 bg-white dark:bg-card shadow-[0_4px_32px_rgba(0,0,0,0.10)]">
            {/* Top bar chrome */}
            <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-border/40 bg-muted/30 dark:bg-card/50 px-4 py-2.5">
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-muted-foreground/60 uppercase tracking-wider">
                <FileText className="h-3.5 w-3.5 text-emerald-500" />
                <span>Resume Preview</span>
              </div>
              <span className="text-[9px] font-mono text-muted-foreground/40">{RESUME_DISPLAY_NAME}</span>
            </div>

            {/* The embed — works on localhost and Vercel production */}
            <object
              data={RESUME_FILE}
              type="application/pdf"
              className="w-full"
              style={{ height: 'min(90vh, 1100px)' }}
              aria-label="Syed Uzair Mohiuddin Resume PDF"
            >
              {/* Fallback for browsers that block PDF embeds (e.g. some mobile) */}
              <div className="flex flex-col items-center justify-center gap-4 py-20 text-center px-6">
                <FileText className="h-10 w-10 text-muted-foreground/30" />
                <p className="text-sm text-muted-foreground font-light">
                  Your browser cannot display the PDF inline.
                </p>
                <a
                  href={RESUME_FILE}
                  download={RESUME_DISPLAY_NAME}
                  className="inline-flex items-center gap-2 h-10 px-5 rounded-button bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 transition-colors"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download Resume
                </a>
              </div>
            </object>
          </div>
        </ScrollReveal>


      </div>
    </Section>
  )
}
