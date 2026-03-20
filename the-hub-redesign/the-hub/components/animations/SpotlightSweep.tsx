'use client'
import ScrollSVGAnimation from './ScrollSVGAnimation'

export default function SpotlightSweep() {
  return (
    <ScrollSVGAnimation className="absolute inset-0 pointer-events-none overflow-hidden">
      {(isVisible, reducedMotion) => (
        <svg viewBox="0 0 1200 400" className="w-full h-full" preserveAspectRatio="none" fill="none">
          <defs>
            <linearGradient id="spotlightGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFD700" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon
            points="500,0 700,0 850,400 350,400"
            fill="url(#spotlightGrad)"
            opacity={isVisible ? 0.5 : 0}
            style={{
              transition: reducedMotion ? 'none' : 'opacity 1s ease',
              animation: isVisible && !reducedMotion ? 'spotlightSway 6s ease-in-out infinite' : 'none',
            }}
          />
        </svg>
      )}
    </ScrollSVGAnimation>
  )
}
