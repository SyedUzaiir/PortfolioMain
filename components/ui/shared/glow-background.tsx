'use client'

import React from 'react'

export const GlowBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
      {/* 1. Orbiting Aurora Mesh Gradient Blurs (Emerald -> Blue/Teal) */}
      <div className="absolute -top-[20%] left-[-10%] h-[750px] w-[750px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/[0.07] blur-[140px] animate-aurora-1 mix-blend-screen" />
      <div className="absolute top-[20%] right-[-10%] h-[800px] w-[800px] rounded-full bg-blue-500/10 dark:bg-blue-500/[0.06] blur-[150px] animate-aurora-2 mix-blend-screen" />
      <div className="absolute top-[40%] left-[20%] h-[600px] w-[600px] rounded-full bg-teal-500/5 dark:bg-teal-500/[0.04] blur-[130px] animate-aurora-1 animation-delay-2000 mix-blend-screen" />

      {/* 2. Edge-faded Grid Mesh Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_20%,transparent_100%)]" />

      {/* 3. Subtle Apple-like SVG Noise Overlay */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.015] dark:opacity-[0.025] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  )
}
