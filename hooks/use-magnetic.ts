import { useEffect, useRef, useState } from 'react'

export const useMagnetic = (strength = 0.3, range = 60) => {
  const ref = useRef<HTMLElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const element = ref.current
    if (!element) {
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const distanceX = clientX - centerX
      const distanceY = clientY - centerY

      const distance = Math.hypot(distanceX, distanceY)

      if (distance < range) {
        setPosition({
          x: distanceX * strength,
          y: distanceY * strength
        })
      } else {
        setPosition({ x: 0, y: 0 })
      }
    }

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 })
    }

    window.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [strength, range])

  return { ref, x: position.x, y: position.y }
}
