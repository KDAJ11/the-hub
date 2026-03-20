'use client'
import ScrollSVGAnimation from './ScrollSVGAnimation'

export default function OpenBook() {
  return (
    <ScrollSVGAnimation className="flex justify-center mb-6">
      {(isVisible, reducedMotion) => (
        <svg viewBox="0 0 120 80" className="w-24 h-16" fill="none">
          {/* Left page */}
          <path
            d="M10 10 L55 8 L55 70 L10 72 Z"
            fill="rgba(123,53,196,0.2)"
            stroke="#7B35C4" strokeWidth="1"
            opacity={isVisible ? 1 : 0}
            style={{ transition: reducedMotion ? 'none' : 'opacity 0.6s ease 0.2s' }}
          />
          {/* Right page */}
          <path
            d="M65 8 L110 10 L110 72 L65 70 Z"
            fill="rgba(255,215,0,0.08)"
            stroke="#FFD700" strokeWidth="0.5"
            opacity={isVisible ? 1 : 0}
            style={{ transition: reducedMotion ? 'none' : 'opacity 0.6s ease 0.4s' }}
          />
          {/* Spine */}
          <line
            x1="60" y1="5" x2="60" y2="75"
            stroke="#FFD700" strokeWidth="1.5"
            opacity={isVisible ? 0.6 : 0}
            style={{ transition: reducedMotion ? 'none' : 'opacity 0.5s ease' }}
          />
          {/* Text lines on left page */}
          {[20, 28, 36, 44, 52].map((y, i) => (
            <line
              key={`l${i}`}
              x1="18" y1={y} x2="48" y2={y}
              stroke="#7B35C4" strokeWidth="0.5"
              opacity={isVisible ? 0.3 : 0}
              strokeDasharray="30"
              strokeDashoffset={isVisible ? 0 : 30}
              style={{ transition: reducedMotion ? 'none' : `stroke-dashoffset 0.6s ease ${0.6 + i * 0.1}s, opacity 0.4s ease ${0.6 + i * 0.1}s` }}
            />
          ))}
          {/* Text lines on right page */}
          {[20, 28, 36, 44, 52].map((y, i) => (
            <line
              key={`r${i}`}
              x1="72" y1={y} x2="102" y2={y}
              stroke="#FFD700" strokeWidth="0.5"
              opacity={isVisible ? 0.3 : 0}
              strokeDasharray="30"
              strokeDashoffset={isVisible ? 0 : 30}
              style={{ transition: reducedMotion ? 'none' : `stroke-dashoffset 0.6s ease ${0.8 + i * 0.1}s, opacity 0.4s ease ${0.8 + i * 0.1}s` }}
            />
          ))}
          {/* Glow from pages */}
          <ellipse
            cx="60" cy="40" rx="40" ry="25"
            fill="#FFD700"
            opacity={isVisible ? 0.06 : 0}
            style={{
              transition: reducedMotion ? 'none' : 'opacity 1s ease 1.2s',
              animation: isVisible && !reducedMotion ? 'svgPulse 4s ease-in-out infinite 1.5s' : 'none',
            }}
          />
        </svg>
      )}
    </ScrollSVGAnimation>
  )
}
