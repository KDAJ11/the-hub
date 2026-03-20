'use client'
import Link from 'next/link'
import {
  Crown, Users, Zap, Heart, Star, Globe, Shield,
  Trophy, Gamepad2, Palette, GraduationCap, Music,
} from 'lucide-react'
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal'
import FlipCard from '@/components/FlipCard'
import BackgroundShapes from '@/components/BackgroundShapes'
import LogoAssembly from '@/components/animations/LogoAssembly'

const pillars = [
  {
    icon: Crown, title: 'Royal Identity',
    description: 'You are royalty. Created with purpose, called to lead. The Hub exists to remind you of who you already are.',
    scripture: '1 Peter 2:9',
    verse: 'But you are a chosen generation, a royal priesthood, a holy nation, His own special people, that you may proclaim the praises of Him who called you out of darkness into His marvelous light.',
  },
  {
    icon: Users, title: 'Community First',
    description: 'Real growth happens in community. Every Hub event is designed to connect you with people who sharpen you, challenge you, and have your back.',
    scripture: 'Proverbs 27:17',
    verse: 'As iron sharpens iron, so a man sharpens the countenance of his friend.',
  },
  {
    icon: Zap, title: 'Vibrant & Active',
    description: 'Your life moves fast. The Hub keeps up. Sports, socials, professional nights, creative workshops — we bring the energy wherever you are.',
    scripture: 'Philippians 4:13',
    verse: 'I can do all things through Christ who strengthens me.',
  },
  {
    icon: Heart, title: 'Faith at the Centre',
    description: "Everything we do starts and ends with God. You're part of a generation leading others to Christ — and The Hub is one of the ways you do that.",
    scripture: 'Matthew 6:33',
    verse: 'But seek first the kingdom of God and His righteousness, and all these things shall be added to you.',
  },
  {
    icon: Star, title: 'Excellence',
    description: "We don't do average events and we don't raise average leaders. Excellence is the righteousness of God at work.",
    scripture: 'Ephesians 2:10',
    verse: 'For we are His workmanship, created in Christ Jesus for good works, which God prepared beforehand that we should walk in them.',
  },
  {
    icon: Globe, title: 'Impact',
    description: "It's not enough to grow yourself. You're called to impact your world — your campus, your workplace, your city.",
    scripture: 'Matthew 5:16',
    verse: 'Let your light so shine before men, that they may see your good works and glorify your Father in heaven.',
  },
  {
    icon: Shield, title: 'Boldness',
    description: "Fear doesn't live here. You were given a spirit of power, love, and a sound mind. Act like it.",
    scripture: '2 Timothy 1:7',
    verse: 'For God has not given us a spirit of fear, but of power and of love and of a sound mind.',
  },
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

      <div className="orb fixed pointer-events-none" style={{ width: '500px', height: '500px', top: '-50px', right: '-100px', background: 'rgba(123,53,196,0.2)', zIndex: 0 }} />
      <div className="orb fixed pointer-events-none" style={{ width: '300px', height: '300px', bottom: '10%', left: '-50px', background: 'rgba(255,215,0,0.04)', zIndex: 0 }} />

      {/* Hero with Logo Assembly SVG */}
      <section className="pt-40 pb-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <LogoAssembly />
          <ScrollReveal>
            <div className="section-label mb-6">About</div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: '#FDF6E3', lineHeight: 1.05 }}>
              Built For <span className="text-gold-shimmer">You.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl max-w-2xl leading-relaxed mb-6"
              style={{ color: 'rgba(253,246,227,0.65)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
              One event. Every single month. Designed to meet you exactly where you are.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Body copy */}
      <section className="py-8 px-6 relative z-10">
        <div className="max-w-4xl mx-auto space-y-6">
          <ScrollReveal>
            <p className="text-lg leading-relaxed"
              style={{ color: 'rgba(253,246,227,0.75)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
              The Hub is a gathering of young leaders who refuse to sit on the sidelines. Every month, we create a space for you — on the football pitch, in a creative workshop, at a career night, around a table of food, or in a room full of people worshipping together.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg leading-relaxed"
              style={{ color: 'rgba(253,246,227,0.75)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
              We believe your generation is called to lead. Not someday — now. And The Hub is one of the ways you step into that calling. Every event is built to sharpen your mind, strengthen your faith, and surround you with people who are going somewhere.
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
                THE MISSION
              </p>
              <h2 className="text-3xl sm:text-4xl mb-6 relative" style={{ color: '#FDF6E3', fontFamily: 'Archivo Black, sans-serif' }}>
                The Mission
              </h2>
              <p className="text-lg leading-relaxed relative max-w-2xl"
                style={{ color: 'rgba(253,246,227,0.7)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
                To build the most intentional community of young leaders in our city — one event at a time. Every month we show up with something designed to grow you in faith, career, creativity, community, and purpose.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7 Pillars — Flippable Cards */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl mb-12 text-center" style={{ color: '#FDF6E3', fontFamily: 'Archivo Black, sans-serif' }}>
              What drives us
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" staggerDelay={0.12}>
            {pillars.map((v) => (
              <StaggerItem key={v.title} className="min-h-[280px]">
                <FlipCard
                  icon={v.icon}
                  title={v.title}
                  description={v.description}
                  scripture={v.scripture}
                  verse={v.verse}
                />
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
              Every Dimension. Every Month.
            </h2>
            <p className="mb-10 text-base" style={{ color: 'rgba(253,246,227,0.45)', fontFamily: 'DM Sans, sans-serif' }}>
              Your life isn&apos;t one-dimensional. Neither are we. The Hub runs events across six categories so every part of your growth is covered.
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
              Your Move.
            </h2>
            <p className="mb-8 text-lg" style={{ color: 'rgba(253,246,227,0.45)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
              We build the events. We set the stage. But nothing happens until you walk through the door.
            </p>
            <Link href="/events" className="btn-gold inline-block px-8 py-4 rounded-full text-base"
              style={{ fontFamily: 'DM Sans, sans-serif' }}>
              See All Events →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
