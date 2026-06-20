import { Variants } from 'framer-motion'

export const defaultTransition = {
  type: 'spring',
  duration: 0.6,
  bounce: 0.1,
}

export const fadeIn = (duration = 0.5): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration, ease: 'easeOut' },
  },
})

export const fadeUp = (yOffset = 24, duration = 0.5): Variants => ({
  hidden: { opacity: 0, y: yOffset },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }, // premium custom cubic-bezier
  },
})

export const fadeDown = (yOffset = 24, duration = 0.5): Variants => ({
  hidden: { opacity: 0, y: -yOffset },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
})

export const scaleIn = (initialScale = 0.95, duration = 0.4): Variants => ({
  hidden: { opacity: 0, scale: initialScale },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
})

export const blurReveal = (duration = 0.8): Variants => ({
  hidden: { opacity: 0, filter: 'blur(10px)', y: 15 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
})

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
})

export const staggerItem = fadeUp(15, 0.5)

export const textReveal: Variants = {
  hidden: { y: '100%' },
  visible: {
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
}
