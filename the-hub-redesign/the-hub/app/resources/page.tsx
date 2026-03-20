'use client'
import { useState, useEffect } from 'react'
import {
  Briefcase, Cross, MessageCircle, Wallet, Dumbbell, Target,
  Instagram, RotateCcw, TrendingUp, Heart, Megaphone, Handshake, BookOpen,
} from 'lucide-react'
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal'
import BackgroundShapes from '@/components/BackgroundShapes'
import RocketLaunch from '@/components/animations/RocketLaunch'

const categories = [
  {
    icon: Briefcase, name: 'Career',
    description: 'Level up your professional skills and career trajectory.',
    backTeaser: 'Resume workshops, interview prep, career path guides, and professional mentorship resources.',
    backIcon: Briefcase,
    gradient: 'linear-gradient(135deg, #2D0A5E 0%, #4A1A8A 100%)',
  },
  {
    icon: Cross, name: 'Faith',
    description: 'Deepen your walk with God and spiritual understanding.',
    backTeaser: 'Bible study guides, devotional plans, apologetics resources, and spiritual growth tracks.',
    backIcon: BookOpen,
    gradient: 'linear-gradient(135deg, #3A0F70 0%, #5C1A6E 100%)',
  },
  {
    icon: MessageCircle, name: 'Relationships',
    description: 'Build healthier, stronger connections with people.',
    backTeaser: 'Communication guides, conflict resolution frameworks, and community building tools.',
    backIcon: Handshake,
    gradient: 'linear-gradient(135deg, #2D0A5E 0%, #6228A8 100%)',
  },
  {
    icon: Wallet, name: 'Money',
    description: 'Master your finances and build generational wealth.',
    backTeaser: 'Budgeting templates, investment basics, saving strategies, and financial literacy content.',
    backIcon: TrendingUp,
    gradient: 'linear-gradient(135deg, #4A1A8A 0%, #7B35C4 100%)',
  },
  {
    icon: Dumbbell, name: 'Health',
    description: 'Take care of the body God gave you.',
    backTeaser: 'Workout routines, meal planning guides, mental health resources, and wellness habits.',
    backIcon: Heart,
    gradient: 'linear-gradient(135deg, #3A0F70 0%, #4A1A8A 100%)',
  },
  {
    icon: Target, name: 'Leadership',
    description: 'Develop the leader within you.',
    backTeaser: 'Leadership frameworks, public speaking tips, team management guides, and influence strategies.',
    backIcon: Megaphone,
    gradient: 'linear-gradient(135deg, #2D0A5E 0%, #5C1A6E 100%)',
  },
]

function ResourceFlipCard({ cat }: { cat: typeof categories[0] }) {
  const [flipped, setFlipped] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    setIsMobile('ontouchstart' in window || window.innerWidth < 768)
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  return (
    <div
      className="group h-full"
      style={{ perspective: '1000px' }}
      onClick={() => isMobile && setFlipped(!flipped)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setFlipped(!flipped) } }}
      tabIndex={0}
      role="button"
      aria-label={`${cat.name} — tap to ${flipped ? 'see description' : 'see details'}`}
    >
      <div
        className="relative w-full h-full transition-transform"
        style={{
          transformStyle: 'preserve-3d',
          transitionDuration: reducedMotion ? '0ms' : '600ms',
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
        onMouseEnter={() => !isMobile && setFlipped(true)}
        onMouseLeave={() => !isMobile && setFlipped(false)}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-2xl p-8 flex flex-col"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            background: 'linear-gradient(135deg, rgba(98, 40, 168, 0.4) 0%, rgba(74, 26, 138, 0.6) 100%)',
            border: '1px solid rgba(184, 127, 255, 0.2)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
            style={{ background: 'rgba(255,215,0,0.12)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.25)', fontFamily: 'DM Sans, sans-serif' }}>
            Coming Soon
          </div>

          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
            style={{ background: 'rgba(255,215,0,0.08)', border: '1px solid rgba(255,215,0,0.2)' }}>
            <cat.icon className="w-6 h-6 text-hub-gold" strokeWidth={1.5} aria-hidden="true" />
          </div>

          <h3 className="text-xl font-medium mb-3" style={{ color: '#FFD700', fontFamily: 'Archivo Black, sans-serif' }}>
            {cat.name}
          </h3>
          <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(253,246,227,0.6)', fontFamily: 'DM Sans, sans-serif' }}>
            {cat.description}
          </p>

          <div className="flex items-center gap-1.5 mt-4 pt-3" style={{ borderTop: '1px solid rgba(255,215,0,0.1)' }}>
            <RotateCcw className="w-3 h-3" style={{ color: 'rgba(255,215,0,0.4)' }} aria-hidden="true" />
            <span className="text-xs" style={{ color: 'rgba(255,215,0,0.4)', fontFamily: 'DM Sans, sans-serif' }}>
              {isMobile ? 'Tap to flip' : 'Hover to flip'}
            </span>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-2xl p-8 flex flex-col justify-center overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: cat.gradient,
            border: '1px solid rgba(255, 215, 0, 0.25)',
          }}
        >
          {/* Background silhouette icon */}
          <div className="absolute right-4 bottom-4 opacity-10">
            <cat.backIcon className="w-24 h-24" strokeWidth={0.5} style={{ color: '#FFD700' }} />
          </div>

          <div className="relative z-10">
            <h4 className="text-lg font-medium mb-3" style={{ color: '#FFD700', fontFamily: 'Archivo Black, sans-serif' }}>
              Coming Soon
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(253,246,227,0.75)', fontFamily: 'DM Sans, sans-serif' }}>
              {cat.backTeaser}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-royal relative">
      <BackgroundShapes />
      <div className="orb fixed pointer-events-none" style={{ width: '400px', height: '400px', top: '-50px', left: '-100px', background: 'rgba(123,53,196,0.15)', zIndex: 0 }} />

      {/* Hero with Rocket SVG */}
      <section className="pt-40 pb-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <RocketLaunch />
          <ScrollReveal>
            <div className="section-label mb-6">Resources</div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: '#FDF6E3', lineHeight: 1.05 }}>
              Level Up
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl max-w-2xl leading-relaxed" style={{ color: 'rgba(253,246,227,0.65)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
              Grow in every area of life.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Grid — Flippable Cards */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <StaggerItem key={cat.name} className="min-h-[260px]">
                <ResourceFlipCard cat={cat} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="h-px w-24 mx-auto mb-8" style={{ background: 'linear-gradient(to right, transparent, #FFD700, transparent)' }} />
            <p className="text-xl sm:text-2xl leading-relaxed mb-8"
              style={{ color: 'rgba(253,246,227,0.8)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
              The Hub isn&apos;t just events. We&apos;re building a resource library to help you grow as a leader in every dimension — career, faith, relationships, finances, health, and leadership. Content is coming soon.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <a
              href="https://www.instagram.com/we.thehub"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-full text-base"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              <Instagram className="w-5 h-5" />
              Want to contribute? Reach out on Instagram →
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
