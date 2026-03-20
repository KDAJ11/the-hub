'use client'
import { useState, useEffect } from 'react'
import { RotateCcw } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface FlipCardProps {
  icon: LucideIcon
  title: string
  description: string
  scripture: string
  verse: string
  miniAnimation?: React.ReactNode
}

export default function FlipCard({ icon: Icon, title, description, scripture, verse, miniAnimation }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    setIsMobile('ontouchstart' in window || window.innerWidth < 768)
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  const handleFlip = () => {
    if (isMobile) setFlipped(!flipped)
  }

  return (
    <div
      className="group h-full"
      style={{ perspective: '1000px' }}
      onClick={handleFlip}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setFlipped(!flipped) } }}
      tabIndex={0}
      role="button"
      aria-label={`${title} — tap to ${flipped ? 'see description' : 'see scripture'}`}
    >
      <div
        className="relative w-full h-full transition-transform"
        style={{
          transformStyle: 'preserve-3d',
          transitionDuration: reducedMotion ? '0ms' : '600ms',
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          transform: flipped || (!isMobile && false) ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
        onMouseEnter={() => { if (!isMobile) setFlipped(true) }}
        onMouseLeave={() => { if (!isMobile) setFlipped(false) }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-2xl p-7 flex flex-col"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            background: 'linear-gradient(135deg, rgba(98, 40, 168, 0.4) 0%, rgba(74, 26, 138, 0.6) 100%)',
            border: '1px solid rgba(184, 127, 255, 0.2)',
            backdropFilter: 'blur(12px)',
          }}
        >
          {/* Mini animation or icon */}
          <div className="mb-4 h-10 flex items-center">
            {miniAnimation || <Icon className="w-8 h-8 text-hub-gold" strokeWidth={1.5} aria-hidden="true" />}
          </div>

          <h3 className="text-lg font-medium mb-3" style={{ color: '#FFD700', fontFamily: 'Archivo Black, sans-serif' }}>
            {title}
          </h3>
          <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(253,246,227,0.6)', fontFamily: 'DM Sans, sans-serif' }}>
            {description}
          </p>

          {/* Flip hint */}
          <div className="flex items-center gap-1.5 mt-4 pt-3" style={{ borderTop: '1px solid rgba(255,215,0,0.1)' }}>
            <RotateCcw className="w-3 h-3" style={{ color: 'rgba(255,215,0,0.4)' }} aria-hidden="true" />
            <span className="text-xs" style={{ color: 'rgba(255,215,0,0.4)', fontFamily: 'DM Sans, sans-serif' }}>
              {isMobile ? 'Tap to flip' : 'Hover to flip'}
            </span>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-2xl p-7 flex flex-col justify-center"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: 'linear-gradient(135deg, #2D0A5E 0%, #4A1A8A 50%, #2D0A5E 100%)',
            border: '1px solid rgba(255, 215, 0, 0.25)',
          }}
        >
          {/* Subtle decorative pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none rounded-2xl overflow-hidden">
            <div style={{
              position: 'absolute', inset: 0,
              background: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,215,0,0.05) 20px, rgba(255,215,0,0.05) 21px)',
            }} />
          </div>

          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#FFD700', fontFamily: 'DM Sans, sans-serif' }}>
              {scripture}
            </p>
            <p className="text-sm leading-relaxed italic" style={{ color: 'rgba(253,246,227,0.8)', fontFamily: 'Cinzel, serif' }}>
              &ldquo;{verse}&rdquo;
            </p>
          </div>

          {/* Flip hint */}
          <div className="absolute bottom-5 left-7 flex items-center gap-1.5">
            <RotateCcw className="w-3 h-3" style={{ color: 'rgba(255,215,0,0.4)' }} aria-hidden="true" />
            <span className="text-xs" style={{ color: 'rgba(255,215,0,0.4)', fontFamily: 'DM Sans, sans-serif' }}>
              {isMobile ? 'Tap to flip back' : ''}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
