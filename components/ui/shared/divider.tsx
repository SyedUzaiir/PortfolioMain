'use client'

import React from 'react'

export const Divider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return <hr className={`border-t border-border/50 my-6 w-full ${className}`} />
}
