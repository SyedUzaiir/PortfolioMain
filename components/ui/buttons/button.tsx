'use client'

import React from 'react'
import { MagneticButton } from '@/components/motion/magnetic-button'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  magnetic?: boolean
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  magnetic = false,
  children,
  className = '',
  ...props
}) => {
  const getStyles = () => {
    switch (variant) {
      case 'secondary':
        return 'border border-black/10 dark:border-border bg-white dark:bg-card text-foreground hover:bg-muted shadow-sm dark:shadow-none'
      case 'ghost':
        return 'bg-transparent text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-muted/30'
      case 'primary':
      default:
        return 'bg-emerald-600 dark:bg-emerald-600 text-white hover:bg-emerald-700 dark:hover:bg-emerald-500 shadow-md shadow-emerald-600/20'
    }
  }

  const baseStyles = 'inline-flex h-10 items-center justify-center rounded-button px-5 text-sm font-bold tracking-wide transition-all active:scale-[0.98] cursor-pointer'

  const buttonElement = (
    <button
      className={`${baseStyles} ${getStyles()} ${className}`}
      {...props}
    >
      {children}
    </button>
  )

  if (magnetic) {
    return <MagneticButton>{buttonElement}</MagneticButton>
  }

  return buttonElement
}
