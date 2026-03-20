'use client'
import { useEffect, useRef, useState, ReactNode } from 'react'

interface ScrollSVGAnimationProps {
  children: (isVisible: boolean, reducedMotion: boolean) => ReactNode
  className?: string
  threshold?: number
}

export default function ScrollSVGAnimation({
  children,
  className = '',
  threshold = 0.2,
}: ScrollSVGAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <div ref={ref} className={className} aria-hidden="true">
      {children(reducedMotion ? true : isVisible, reducedMotion)}
    </div>
  )
}
