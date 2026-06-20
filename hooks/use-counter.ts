import { useEffect, useState } from 'react'

export const useCounter = (target: number, duration = 1500, trigger = true) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!trigger) {
      return
    }

    let start = 0
    const end = target
    if (start === end) {
      setCount(end)
      return
    }

    const totalMs = duration
    const stepTime = Math.max(Math.floor(totalMs / Math.max(end, 1)), 16)

    const timer = setInterval(() => {
      const step = Math.ceil(end / (totalMs / stepTime))
      start += step
      if (start >= end) {
        clearInterval(timer)
        setCount(end)
      } else {
        setCount(start)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [target, duration, trigger])

  return count
}
