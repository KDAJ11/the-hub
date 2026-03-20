'use client'
import ScrollSVGAnimation from './ScrollSVGAnimation'

export default function NetworkDiagram() {
  return (
    <ScrollSVGAnimation className="flex justify-center mb-8">
      {(isVisible, reducedMotion) => (
        <svg viewBox="0 0 200 200" className="w-32 h-32 sm:w-40 sm:h-40" fill="none">
          {/* Center node */}
          <circle
            cx="100" cy="100" r="12"
            fill="#FFD700"
            opacity={isVisible ? 1 : 0}
            style={{ transition: reducedMotion ? 'none' : 'opacity 0.5s ease' }}
          />
          <circle
            cx="100" cy="100" r="16"
            stroke="#FFD700" strokeWidth="1" fill="none"
            opacity={isVisible ? 0.3 : 0}
            style={{
              transition: reducedMotion ? 'none' : 'opacity 0.5s ease 0.3s',
              animation: isVisible && !reducedMotion ? 'svgPulse 3s ease-in-out infinite' : 'none',
            }}
          />

          {/* 7 surrounding nodes with connecting lines */}
          {Array.from({ length: 7 }).map((_, i) => {
            const angle = (i / 7) * Math.PI * 2 - Math.PI / 2
            const x = 100 + Math.cos(angle) * 65
            const y = 100 + Math.sin(angle) * 65
            const delay = 0.4 + i * 0.15

            return (
              <g key={i}>
                {/* Connection line */}
                <line
                  x1="100" y1="100" x2={x} y2={y}
                  stroke="#7B35C4" strokeWidth="1.5"
                  strokeDasharray="80"
                  strokeDashoffset={isVisible ? 0 : 80}
                  style={{
                    transition: reducedMotion ? 'none' : `stroke-dashoffset 0.8s ease ${delay}s`,
                  }}
                />
                {/* Outer node */}
                <circle
                  cx={x} cy={y} r="6"
                  fill="#7B35C4"
                  opacity={isVisible ? 1 : 0}
                  style={{ transition: reducedMotion ? 'none' : `opacity 0.4s ease ${delay + 0.3}s` }}
                />
                {/* Node glow */}
                <circle
                  cx={x} cy={y} r="10"
                  stroke="#FFD700" strokeWidth="0.5" fill="none"
                  opacity={isVisible ? 0.3 : 0}
                  style={{
                    transition: reducedMotion ? 'none' : `opacity 0.4s ease ${delay + 0.5}s`,
                    animation: isVisible && !reducedMotion ? `svgPulse 3s ease-in-out infinite ${delay}s` : 'none',
                  }}
                />
              </g>
            )
          })}
        </svg>
      )}
    </ScrollSVGAnimation>
  )
}
