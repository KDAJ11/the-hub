'use client'
import { Briefcase, Cross, MessageCircle, Wallet, Dumbbell, Target, Instagram } from 'lucide-react'
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal'
import BackgroundShapes from '@/components/BackgroundShapes'

const categories = [
  { icon: Briefcase, name: 'Career', description: 'Level up your professional skills and career trajectory.' },
  { icon: Cross, name: 'Faith', description: 'Deepen your walk with God and spiritual understanding.' },
  { icon: MessageCircle, name: 'Relationships', description: 'Build healthier, stronger connections with people.' },
  { icon: Wallet, name: 'Money', description: 'Master your finances and build generational wealth.' },
  { icon: Dumbbell, name: 'Health', description: 'Take care of the body God gave you.' },
  { icon: Target, name: 'Leadership', description: 'Develop the leader within you.' },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-royal relative">
      <BackgroundShapes />

      {/* Orbs */}
      <div className="orb fixed pointer-events-none" style={{ width: '400px', height: '400px', top: '-50px', left: '-100px', background: 'rgba(123,53,196,0.15)', zIndex: 0 }} />

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
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

      {/* Category Grid */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <StaggerItem key={cat.name}>
                <div className="card-royal rounded-2xl p-8 h-full relative overflow-hidden group">
                  {/* Coming Soon badge */}
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
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(253,246,227,0.6)', fontFamily: 'DM Sans, sans-serif' }}>
                    {cat.description}
                  </p>
                </div>
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
