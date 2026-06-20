'use client'

import React from 'react'

export const GlowBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Ambient spotlights */}
      <div className="absolute -top-[10%] left-[5%] h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[100px] dark:bg-emerald-500/[0.03]" />
      <div className="absolute top-[40%] right-[10%] h-[600px] w-[600px] rounded-full bg-teal-500/5 blur-[120px] dark:bg-teal-500/[0.03]" />
      
      {/* Modern grid mesh pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_50%,transparent_100%)]" />
    </div>
  )
}
