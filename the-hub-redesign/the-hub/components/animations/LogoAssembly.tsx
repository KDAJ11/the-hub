'use client'
import ScrollSVGAnimation from './ScrollSVGAnimation'

export default function LogoAssembly() {
  return (
    <ScrollSVGAnimation className="flex justify-center mb-8">
      {(isVisible, reducedMotion) => (
        <svg viewBox="0 0 100 100" className="w-24 h-24" fill="none">
          {/* U shape draws first */}
          <path
            d="M25 45 L25 65 Q25 80 50 80 Q75 80 75 65 L75 45 L65 45 L65 65 Q65 72 50 72 Q35 72 35 65 L35 45 Z"
            fill="#FDF6E3"
            opacity={isVisible ? 1 : 0}
            style={{ transition: reducedMotion ? 'none' : 'opacity 0.6s ease 0.2s' }}
          />
          {/* Crown descends from above — 7 points */}
          <g style={{
            transform: isVisible ? 'translateY(0px)' : 'translateY(-20px)',
            opacity: isVisible ? 1 : 0,
            transition: reducedMotion ? 'none' : 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s, opacity 0.6s ease 0.6s',
          }}>
            <path
              d="M22 18 L26 28 L33 22 L40 28 L50 20 L60 28 L67 22 L74 28 L78 18 L78 38 L22 38 Z"
              fill="#FFD700"
            />
          </g>
          {/* Glow pulse */}
          <circle
            cx="50" cy="50" r="42"
            stroke="#FFD700" strokeWidth="0.5" fill="none"
            opacity={isVisible ? 0.2 : 0}
            style={{
              transition: reducedMotion ? 'none' : 'opacity 0.5s ease 1.5s',
              animation: isVisible && !reducedMotion ? 'svgPulse 3s ease-in-out infinite 2s' : 'none',
            }}
          />
        </svg>
      )}
    </ScrollSVGAnimation>
  )
}
