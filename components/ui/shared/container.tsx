'use client'

import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`mx-auto w-full max-w-[1400px] px-6 sm:px-8 md:px-10 lg:px-12 ${className}`}>
      {children}
    </div>
  )
}
