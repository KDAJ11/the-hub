'use client'
import {
  Crown, Users, Zap, Heart,
  Trophy, Gamepad2, Palette, GraduationCap, Music, Globe,
} from 'lucide-react'
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal'
import BackgroundShapes from '@/components/BackgroundShapes'

const values = [
  { icon: Crown, title: 'Royal Identity', description: 'We believe every young person carries a royal identity — created with purpose and called to lead. The Hub is a reminder of who you are.' },
  { icon: Users, title: 'Community First', description: 'Real growth happens in community. Every Hub event is designed to connect people, build friendships, and create belonging.' },
  { icon: Zap, title: 'Vibrant & Active', description: 'From football pitches to boardrooms, The Hub meets young people where they are — bringing energy, creativity, and intention.' },
  { icon: Heart, title: 'Faith at the Centre', description: "Everything we do is rooted in faith. We're a generation leading others back to God — and The Hub is one of the ways we do that." },
]

const eventTypes = [
  { icon: Trophy, label: 'Sports' },
  { icon: Gamepad2, label: 'Social' },
  { icon: Palette, label: 'Arts' },
  { icon: GraduationCap, label: 'Professional' },
  { icon: Music, label: 'Worship' },
  { icon: Globe, label: 'Community' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-royal relative">
      <BackgroundShapes />

      {/* Orbs */}
      <div className="orb fixed pointer-events-none" style={{ width: '500px', height: '500px', top: '-50px', right: '-100px', background: 'rgba(123,53,196,0.2)', zIndex: 0 }} />
      <div className="orb fixed pointer-events-none" style={{ width: '300px', height: '300px', bottom: '10%', left: '-50px', background: 'rgba(255,215,0,0.04)', zIndex: 0 }} />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="section-label mb-6">About</div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="mb-8" style={{ fontFamily: 'Archivo Black, sans-serif', fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: '#FDF6E3', lineHeight: 1.05 }}>
              Young. Royal.<br />
              <span className="text-gold-shimmer">Vibrant.</span> Leading.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl max-w-2xl leading-relaxed"
              style={{ color: 'rgba(253,246,227,0.65)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
              The Hub is an organizing body dedicated to creating meaningful events for the youth and young adults of our church — events that build friendships, develop leaders, and glorify God.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="rounded-3xl p-10 sm:p-14 relative overflow-hidden grain"
              style={{ background: 'linear-gradient(135deg, #2D0A5E 0%, #4A1A8A 100%)', border: '1px solid rgba(255,215,0,0.2)', boxShadow: '0 20px 60px rgba(74,26,138,0.4)' }}>
              <div className="absolute inset-0 opacity-15"
                style={{ background: 'radial-gradient(ellipse at bottom left, rgba(255,215,0,0.4) 0%, transparent 60%)' }} />
              <p className="text-gold-shimmer mb-4 relative" style={{ fontFamily: 'Cinzel, serif', fontSize: '0.75rem', letterSpacing: '0.2em' }}>
                OUR MISSION
              </p>
              <h2 className="text-3xl sm:text-4xl mb-6 relative" style={{ color: '#FDF6E3', fontFamily: 'Archivo Black, sans-serif' }}>
                Our mission
              </h2>
              <p className="text-lg leading-relaxed relative max-w-2xl"
                style={{ color: 'rgba(253,246,227,0.7)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
                To create intentional, high-quality spaces where young people can discover their identity, develop their gifts, build real community, and grow in their faith — through at least one meaningful event every single month.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl mb-12 text-center" style={{ color: '#FDF6E3', fontFamily: 'Archivo Black, sans-serif' }}>
              What drives us
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="card-royal rounded-2xl p-7 h-full">
                  <v.icon className="w-8 h-8 mb-4 text-hub-gold" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="text-lg font-medium mb-3" style={{ color: '#FFD700', fontFamily: 'Archivo Black, sans-serif' }}>
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(253,246,227,0.6)', fontFamily: 'DM Sans, sans-serif' }}>
                    {v.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Event types */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl mb-4" style={{ color: '#FDF6E3', fontFamily: 'Archivo Black, sans-serif' }}>
              One event a month. Every month.
            </h2>
            <p className="mb-10 text-base" style={{ color: 'rgba(253,246,227,0.45)', fontFamily: 'DM Sans, sans-serif' }}>
              The Hub covers every dimension of life.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-4">
              {eventTypes.map((t) => (
                <div key={t.label} className="flex items-center gap-2 px-6 py-3 rounded-full"
                  style={{ border: '1px solid rgba(255,215,0,0.2)', background: 'rgba(98,40,168,0.2)', backdropFilter: 'blur(8px)' }}>
                  <t.icon className="w-5 h-5 text-hub-gold" strokeWidth={1.5} aria-hidden="true" />
                  <span className="text-sm font-medium" style={{ color: '#FFD700', fontFamily: 'DM Sans, sans-serif' }}>
                    {t.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl mb-4" style={{ color: '#FDF6E3', fontFamily: 'Archivo Black, sans-serif' }}>
              Ready to be part of it?
            </h2>
            <p className="mb-8 text-lg" style={{ color: 'rgba(253,246,227,0.45)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
              Find an upcoming event and show up.
            </p>
            <a href="/events" className="btn-gold inline-block px-8 py-4 rounded-full text-base"
              style={{ fontFamily: 'DM Sans, sans-serif' }}>
              See All Events →
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
