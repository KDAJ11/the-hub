'use client'
import { useEffect, useState } from 'react'

interface Shape {
  id: number
  type: 'cube' | 'ring' | 'diamond'
  x: string
  y: string
  size: number
  opacity: number
  duration: number
  delay: number
  color: 'purple' | 'gold'
}

const shapes: Shape[] = [
  { id: 1, type: 'cube', x: '5%', y: '15%', size: 40, opacity: 0.1, duration: 18, delay: 0, color: 'gold' },
  { id: 2, type: 'ring', x: '92%', y: '25%', size: 60, opacity: 0.08, duration: 22, delay: -4, color: 'purple' },
  { id: 3, type: 'diamond', x: '8%', y: '55%', size: 30, opacity: 0.12, duration: 16, delay: -2, color: 'purple' },
  { id: 4, type: 'cube', x: '88%', y: '70%', size: 35, opacity: 0.09, duration: 20, delay: -6, color: 'gold' },
  { id: 5, type: 'ring', x: '3%', y: '85%', size: 50, opacity: 0.07, duration: 24, delay: -8, color: 'gold' },
  { id: 6, type: 'diamond', x: '95%', y: '45%', size: 25, opacity: 0.11, duration: 14, delay: -3, color: 'purple' },
  { id: 7, type: 'cube', x: '10%', y: '35%', size: 28, opacity: 0.08, duration: 19, delay: -7, color: 'purple' },
  { id: 8, type: 'ring', x: '90%', y: '90%', size: 45, opacity: 0.06, duration: 21, delay: -5, color: 'gold' },
]

export default function BackgroundShapes() {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {shapes.map((shape) => {
        const borderColor = shape.color === 'gold'
          ? `rgba(255, 215, 0, ${shape.opacity})`
          : `rgba(184, 127, 255, ${shape.opacity})`

        const baseStyle: React.CSSProperties = {
          position: 'absolute',
          left: shape.x,
          top: shape.y,
          width: shape.size,
          height: shape.size,
          willChange: reducedMotion ? 'auto' : 'transform',
          animation: reducedMotion ? 'none' : undefined,
        }

        if (shape.type === 'cube') {
          return (
            <div
              key={shape.id}
              style={{
                ...baseStyle,
                border: `1.5px solid ${borderColor}`,
                animation: reducedMotion ? 'none' : `bgShapeFloat ${shape.duration}s ease-in-out infinite, bgShapeRotate ${shape.duration * 1.5}s linear infinite`,
                animationDelay: `${shape.delay}s`,
              }}
            />
          )
        }

        if (shape.type === 'ring') {
          return (
            <div
              key={shape.id}
              style={{
                ...baseStyle,
                border: `1.5px solid ${borderColor}`,
                borderRadius: '50%',
                animation: reducedMotion ? 'none' : `bgShapeFloat ${shape.duration}s ease-in-out infinite`,
                animationDelay: `${shape.delay}s`,
              }}
            />
          )
        }

        // diamond
        return (
          <div
            key={shape.id}
            style={{
              ...baseStyle,
              border: `1.5px solid ${borderColor}`,
              transform: 'rotate(45deg)',
              animation: reducedMotion ? 'none' : `bgShapeDiamond ${shape.duration}s ease-in-out infinite`,
              animationDelay: `${shape.delay}s`,
            }}
          />
        )
      })}
    </div>
  )
}
