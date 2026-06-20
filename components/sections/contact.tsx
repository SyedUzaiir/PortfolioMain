'use client'

import React, { useState, useEffect } from 'react'
import { Section } from '@/components/layout/section'
import { GlassCard } from '@/components/ui/cards/glass-card'
import { Button } from '@/components/ui/buttons/button'
import { ScrollReveal } from '@/components/motion/scroll-reveal'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, ContactForm } from '@/types/portfolio'
import { sendEmail } from '@/lib/apis/email'
import { Mail, MapPin, Download, FileText, ArrowUpRight, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export const Contact: React.FC = () => {
  const [isSending, setIsSending] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)
  
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  })

  // Watch message character count
  const messageContent = watch('message') || ''
  const charLimit = 1000

  const onSubmit = async (data: ContactForm) => {
    setIsSending(true)
    setSubmitStatus(null)

    try {
      const success = await sendEmail({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message
      })

      if (success) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (err) {
      console.error('Email send failed:', err)
      setSubmitStatus('error')
    } finally {
      setIsSending(false)
    }
  }

  // Clear status toast after 5s
  useEffect(() => {
    if (submitStatus) {
      const t = setTimeout(() => setSubmitStatus(null), 5000)
      return () => clearTimeout(t)
    }
  }, [submitStatus])

  return (
    <Section
      id="contact"
      title="Contact Me"
      subtitle="Connect & Collaborate"
      className="py-20 border-t border-border/30"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 text-left items-stretch">
        
        {/* Left Side Info Panel */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <ScrollReveal variant="blur" className="space-y-4">
            <h3 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl leading-tight">
              Let&apos;s Build Something Great Together
            </h3>
            <p className="text-sm font-light text-muted-foreground leading-relaxed">
              Open to new opportunities, collaborations on open-source products, software engineering roles, or simply discussing backend architectures and system designs.
            </p>

            {/* Expected response time indicator */}
            <div className="inline-flex items-center space-x-1.5 text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/5 border border-emerald-500/15 px-2 py-0.5 rounded uppercase">
              <span>Expected Response:</span>
              <span className="text-foreground">Replies within 24 hours</span>
            </div>
          </ScrollReveal>

          {/* Availability Widget */}
          <ScrollReveal variant="fade-up" className="space-y-3">
            <div className="flex items-center space-x-2 text-emerald-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold tracking-widest uppercase font-mono">
                Current Availability
              </span>
            </div>
            <GlassCard className="p-4 bg-emerald-500/[0.01] hover:border-emerald-500/10 transition-colors">
              <p className="text-xs font-bold text-foreground">🟢 Active Opportunities</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {['Internships', 'Full-time Roles', 'Freelance', 'Open Source'].map((role) => (
                  <span
                    key={role}
                    className="text-[9px] font-mono font-bold bg-zinc-900 border border-border px-2 py-0.5 rounded text-muted-foreground"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Quick Contact Specs */}
          <ScrollReveal variant="fade-up" className="space-y-3.5">
            <div className="flex items-center space-x-3 text-xs font-light text-muted-foreground">
              <Mail className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
              <a href="mailto:syeduzairmohiuddin@gmail.com" className="hover:text-foreground hover:underline transition-colors font-mono">
                syeduzairmohiuddin@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3 text-xs font-light text-muted-foreground">
              <MapPin className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
              <span>Hyderabad, Telangana, India</span>
            </div>
          </ScrollReveal>

          {/* Social Mini Cards */}
          <ScrollReveal variant="fade-up" className="grid grid-cols-2 gap-4">
            <a
              href="https://github.com/SyedUzaiir"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <GlassCard className="p-3.5 flex flex-col justify-between h-full hover:border-foreground/10 transition-all">
                <div>
                  <span className="text-[9px] font-mono font-bold text-muted-foreground/50 uppercase">GitHub Profile</span>
                  <p className="text-xs font-extrabold text-foreground mt-1 leading-snug">25+ Codebases</p>
                </div>
                <div className="mt-4 flex items-center justify-between text-[10px] font-mono text-emerald-500">
                  <span>Explore repo</span>
                  <ArrowUpRight className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </GlassCard>
            </a>

            <a
              href="https://leetcode.com/uzairmohiuddin/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <GlassCard className="p-3.5 flex flex-col justify-between h-full hover:border-foreground/10 transition-all">
                <div>
                  <span className="text-[9px] font-mono font-bold text-muted-foreground/50 uppercase">LeetCode Solved</span>
                  <p className="text-xs font-extrabold text-foreground mt-1 leading-snug">342+ Problems</p>
                </div>
                <div className="mt-4 flex items-center justify-between text-[10px] font-mono text-emerald-500">
                  <span>Verify profile</span>
                  <ArrowUpRight className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </GlassCard>
            </a>
          </ScrollReveal>

          {/* Resume Options */}
          <ScrollReveal variant="fade-up" className="flex flex-wrap gap-3">
            <Link href="/resume">
              <Button variant="primary" magnetic className="h-10 px-5 text-xs font-bold uppercase tracking-wider gap-2">
                <FileText className="h-4 w-4" /> Preview Resume
              </Button>
            </Link>
            <a href="/Syed_Uzair_Mohiuddin_Resume.pdf" download>
              <Button variant="secondary" magnetic className="h-10 px-5 text-xs font-bold uppercase tracking-wider gap-2">
                <Download className="h-4 w-4" /> Download PDF
              </Button>
            </a>
          </ScrollReveal>
        </div>

        {/* Right Side Form Panel */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <ScrollReveal variant="blur" className="h-full">
            <GlassCard glow className="p-6 md:p-8 h-full flex flex-col justify-center border border-border/60 relative">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                {/* ARIA Live Alerts region */}
                <div aria-live="polite" className="sr-only">
                  {submitStatus === 'success' && 'Message sent successfully!'}
                  {submitStatus === 'error' && 'Failed to send message. Please try again.'}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-[10px] font-mono font-bold text-muted-foreground/60 uppercase">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Jane Doe"
                      disabled={isSending}
                      {...register('name')}
                      className={`w-full bg-zinc-950/40 border ${
                        errors.name ? 'border-red-500/50' : 'border-border/60'
                      } hover:border-foreground/20 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-button px-3.5 py-2 text-xs text-foreground outline-none transition-colors disabled:opacity-50`}
                    />
                    {errors.name && (
                      <p className="text-[10px] font-mono text-red-400 mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-[10px] font-mono font-bold text-muted-foreground/60 uppercase">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="jane@example.com"
                      disabled={isSending}
                      {...register('email')}
                      className={`w-full bg-zinc-950/40 border ${
                        errors.email ? 'border-red-500/50' : 'border-border/60'
                      } hover:border-foreground/20 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-button px-3.5 py-2 text-xs text-foreground outline-none transition-colors disabled:opacity-50`}
                    />
                    {errors.email && (
                      <p className="text-[10px] font-mono text-red-400 mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-1">
                  <label htmlFor="subject" className="text-[10px] font-mono font-bold text-muted-foreground/60 uppercase">
                    Subject Topic
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Project inquiry, collaboration, etc."
                    disabled={isSending}
                    {...register('subject')}
                    className={`w-full bg-zinc-950/40 border ${
                      errors.subject ? 'border-red-500/50' : 'border-border/60'
                    } hover:border-foreground/20 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-button px-3.5 py-2 text-xs text-foreground outline-none transition-colors disabled:opacity-50`}
                  />
                  {errors.subject && (
                    <p className="text-[10px] font-mono text-red-400 mt-1">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message field with Character Counter */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <label htmlFor="message" className="text-[10px] font-mono font-bold text-muted-foreground/60 uppercase">
                      Message Body
                    </label>
                    <span className="text-[9px] font-mono text-muted-foreground/40">
                      {messageContent.length}/{charLimit}
                    </span>
                  </div>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell me about your ideas or inquiry details..."
                    disabled={isSending}
                    maxLength={charLimit}
                    {...register('message')}
                    className={`w-full bg-zinc-950/40 border ${
                      errors.message ? 'border-red-500/50' : 'border-border/60'
                      } hover:border-foreground/20 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-button px-3.5 py-2 text-xs text-foreground outline-none transition-colors resize-none disabled:opacity-50`}
                  />
                  {errors.message && (
                    <p className="text-[10px] font-mono text-red-400 mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Status toast logs within container */}
                {submitStatus === 'success' && (
                  <div className="bg-emerald-500/10 border border-emerald-500/25 p-3 rounded-button flex items-center space-x-2 text-xs text-emerald-400 font-mono">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>Message delivered! I will contact you shortly.</span>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/25 p-3 rounded-button flex items-center space-x-2 text-xs text-red-400 font-mono">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>Error occurred. Please email me directly.</span>
                  </div>
                )}

                {/* Submit button with double submission prevention */}
                <Button
                  id="submit-contact-button"
                  variant="primary"
                  type="submit"
                  disabled={isSending}
                  className="w-full h-10 text-xs font-bold uppercase tracking-widest gap-2 disabled:opacity-70 cursor-pointer"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending message...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  )
}
