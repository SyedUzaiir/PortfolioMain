'use client'

import React from 'react'

export const GlowBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
      {/* Aurora blobs: tiny in light mode, larger in dark mode */}
      <div className="absolute -top-[20%] left-[-10%] h-[750px] w-[750px] rounded-full
        bg-emerald-500/[0.03] dark:bg-emerald-500/[0.07]
        blur-[160px] animate-aurora-1 mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute top-[20%] right-[-10%] h-[800px] w-[800px] rounded-full
        bg-blue-500/[0.025] dark:bg-blue-500/[0.06]
        blur-[170px] animate-aurora-2 mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute top-[40%] left-[20%] h-[600px] w-[600px] rounded-full
        bg-teal-500/[0.02] dark:bg-teal-500/[0.04]
        blur-[150px] animate-aurora-1 mix-blend-multiply dark:mix-blend-screen" />

      {/* Grid: 8% opacity in light, same in dark */}
      <div className="absolute inset-0
        bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]
        dark:bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
        bg-[size:32px_32px]
        [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_20%,transparent_100%)]" />

      {/* Subtle noise overlay */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.012] dark:opacity-[0.025] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  )
}
