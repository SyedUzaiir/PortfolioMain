import { useEffect, useState } from 'react'

export const useActiveSection = (sectionIds: string[], options?: IntersectionObserverInit) => {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const observerOptions = options || {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, observerOptions)

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) {
        observer.observe(el)
      }
    })

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (el) {
          observer.unobserve(el)
        }
      })
    }
  }, [sectionIds, options])

  return activeSection
}
