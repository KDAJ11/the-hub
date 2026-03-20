'use client'
import ScrollSVGAnimation from './ScrollSVGAnimation'

export default function RocketLaunch() {
  return (
    <ScrollSVGAnimation className="flex justify-center mb-6">
      {(isVisible, reducedMotion) => (
        <svg viewBox="0 0 80 120" className="w-16 h-24" fill="none">
          {/* Rocket body */}
          <g style={{
            transform: isVisible ? 'translateY(0px)' : 'translateY(40px)',
            opacity: isVisible ? 1 : 0,
            transition: reducedMotion ? 'none' : 'transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, opacity 0.5s ease 0.3s',
          }}>
            {/* Nose cone */}
            <path d="M40 10 L32 35 L48 35 Z" fill="#FFD700" />
            {/* Body */}
            <rect x="32" y="35" width="16" height="30" rx="2" fill="#7B35C4" />
            {/* Window */}
            <circle cx="40" cy="48" r="4" fill="#FFD700" opacity="0.6" />
            {/* Fins */}
            <path d="M32 55 L24 70 L32 65 Z" fill="#FFD700" opacity="0.8" />
            <path d="M48 55 L56 70 L48 65 Z" fill="#FFD700" opacity="0.8" />
          </g>

          {/* Exhaust flame */}
          <g style={{
            opacity: isVisible ? 1 : 0,
            transition: reducedMotion ? 'none' : 'opacity 0.5s ease 0.8s',
          }}>
            <ellipse
              cx="40" cy="78" rx="6" ry="12"
              fill="#FFD700" opacity="0.7"
              style={{
                animation: isVisible && !reducedMotion ? 'flameFlicker 0.3s ease-in-out infinite alternate' : 'none',
              }}
            />
            <ellipse
              cx="40" cy="82" rx="4" ry="8"
              fill="#C9A227" opacity="0.5"
              style={{
                animation: isVisible && !reducedMotion ? 'flameFlicker 0.2s ease-in-out infinite alternate-reverse' : 'none',
              }}
            />
          </g>

          {/* Trail particles */}
          {[0, 1, 2, 3].map(i => (
            <circle
              key={i}
              cx={35 + i * 4}
              cy={95 + i * 5}
              r="1.5"
              fill="#FFD700"
              opacity={isVisible ? 0.3 - i * 0.06 : 0}
              style={{
                transition: reducedMotion ? 'none' : `opacity 0.4s ease ${1 + i * 0.15}s`,
                animation: isVisible && !reducedMotion ? `svgPulse 2s ease-in-out infinite ${i * 0.3}s` : 'none',
              }}
            />
          ))}
        </svg>
      )}
    </ScrollSVGAnimation>
  )
}
