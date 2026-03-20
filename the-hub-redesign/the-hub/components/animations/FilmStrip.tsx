'use client'
import ScrollSVGAnimation from './ScrollSVGAnimation'

export default function FilmStrip() {
  return (
    <ScrollSVGAnimation className="flex justify-center mb-6">
      {(isVisible, reducedMotion) => (
        <svg viewBox="0 0 280 60" className="w-56 h-12" fill="none">
          {/* Film strip body - unrolls from left */}
          <rect
            x="10" y="8" width="260" height="44" rx="3"
            fill="rgba(74,26,138,0.3)"
            stroke="#7B35C4" strokeWidth="1"
            strokeDasharray="600"
            strokeDashoffset={isVisible ? 0 : 600}
            style={{ transition: reducedMotion ? 'none' : 'stroke-dashoffset 1.2s ease' }}
          />

          {/* Sprocket holes top */}
          {Array.from({ length: 14 }).map((_, i) => (
            <rect
              key={`t${i}`}
              x={16 + i * 18} y="11" width="6" height="6" rx="1"
              fill="rgba(26,5,51,0.8)"
              opacity={isVisible ? 0.6 : 0}
              style={{ transition: reducedMotion ? 'none' : `opacity 0.3s ease ${0.3 + i * 0.05}s` }}
            />
          ))}

          {/* Sprocket holes bottom */}
          {Array.from({ length: 14 }).map((_, i) => (
            <rect
              key={`b${i}`}
              x={16 + i * 18} y="43" width="6" height="6" rx="1"
              fill="rgba(26,5,51,0.8)"
              opacity={isVisible ? 0.6 : 0}
              style={{ transition: reducedMotion ? 'none' : `opacity 0.3s ease ${0.3 + i * 0.05}s` }}
            />
          ))}

          {/* Photo frames */}
          {[0, 1, 2, 3, 4].map(i => (
            <rect
              key={`f${i}`}
              x={22 + i * 50} y="20" width="38" height="20" rx="2"
              fill={i % 2 === 0 ? 'rgba(255,215,0,0.15)' : 'rgba(123,53,196,0.2)'}
              stroke="#FFD700" strokeWidth="0.5"
              opacity={isVisible ? 1 : 0}
              style={{
                transition: reducedMotion ? 'none' : `opacity 0.4s ease ${0.6 + i * 0.2}s`,
                animation: isVisible && !reducedMotion ? `svgPulse 3s ease-in-out infinite ${1.5 + i * 0.4}s` : 'none',
              }}
            />
          ))}
        </svg>
      )}
    </ScrollSVGAnimation>
  )
}
