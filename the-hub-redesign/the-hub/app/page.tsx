'use client'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { getUpcomingEvents, getPastEvents, categoryLabels } from '@/lib/events'
import EventCard from '@/components/EventCard'
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal'
import {
  Crown, Users, Zap, Heart,
  Trophy, Gamepad2, Palette, GraduationCap, Music, Globe,
  BookOpen,
} from 'lucide-react'

const CrownScene = dynamic(() => import('@/components/CrownScene'), { ssr: false })

/* ─── Hero Entrance Variants ─── */
const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}
const heroItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
}

/* ─── Counter Hook ─── */
function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const start = performance.now()
          const tick = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { count, ref }
}

/* ─── Category Data ─── */
const categories = [
  { icon: Trophy, name: 'Sports', description: 'Tournaments, pickup games, and athletic challenges.', gradient: 'from-green-900/40 to-green-700/20', photo: null },
  { icon: Gamepad2, name: 'Social', description: 'Game nights, hangouts, and community bonding.', gradient: 'from-blue-900/40 to-blue-700/20', photo: '/images/gallery/games-night/GN1.jpeg' },
  { icon: Palette, name: 'Arts & Culture', description: 'Creative workshops, sip & paints, and cultural experiences.', gradient: 'from-pink-900/40 to-pink-700/20', photo: '/images/gallery/sip-and-paint/SP.jpeg' },
  { icon: GraduationCap, name: 'Professional', description: 'Career talks, networking, and skill-building sessions.', gradient: 'from-amber-900/40 to-amber-700/20', photo: '/images/gallery/asper-night/ASB.jpeg' },
  { icon: Music, name: 'Worship', description: 'Worship nights, prayer gatherings, and spiritual growth.', gradient: 'from-yellow-900/40 to-yellow-600/20', photo: null },
  { icon: Globe, name: 'Community', description: 'Outreach, volunteering, and impact-driven events.', gradient: 'from-teal-900/40 to-teal-700/20', photo: null },
]

/* ─── Pillar Data ─── */
const pillars = [
  { icon: Crown, title: 'Royal Identity', description: 'We believe every young person carries a royal identity — created with purpose and called to lead.' },
  { icon: Users, title: 'Community First', description: 'Real growth happens in community. Every event is designed to connect people and create belonging.' },
  { icon: Zap, title: 'Vibrant & Active', description: 'From football pitches to boardrooms, we meet young people where they are — with energy and intention.' },
  { icon: Heart, title: 'Faith at the Centre', description: 'Everything we do is rooted in faith. We\'re leading others back to God.' },
]

export default function HomePage() {
  const upcoming = getUpcomingEvents()
  const past = getPastEvents()
  const prefersReducedMotion = useReducedMotion()

  const counter1 = useCountUp(3)
  const counter2 = useCountUp(150)
  const counter3 = useCountUp(6)
  const counter4 = useCountUp(1)

  return (
    <div className="min-h-screen bg-royal">

      {/* ═══════════════════════════════════════════════════════
          HERO — Split layout: text left, 3D crown right
      ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden px-6 grain">
        {/* Background orbs */}
        <div className="orb absolute pointer-events-none" style={{ width: '500px', height: '500px', top: '-100px', left: '-100px', background: 'rgba(123,53,196,0.35)' }} />
        <div className="orb absolute pointer-events-none" style={{ width: '400px', height: '400px', bottom: '0', right: '-50px', background: 'rgba(74,26,138,0.3)', animationDelay: '-8s' }} />

        <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-8 items-center pt-24 pb-16 md:py-0">
          {/* Text side */}
          <motion.div
            variants={prefersReducedMotion ? undefined : heroContainer}
            initial={prefersReducedMotion ? undefined : 'hidden'}
            animate={prefersReducedMotion ? undefined : 'visible'}
          >
            <motion.div variants={prefersReducedMotion ? undefined : heroItem} className="mb-6">
              <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none" aria-hidden="true">
                <rect width="80" height="80" rx="16" fill="rgba(98,40,168,0.6)" />
                <rect width="80" height="80" rx="16" fill="none" stroke="#FFD700" strokeWidth="1" strokeOpacity="0.4" />
                <path d="M18 20 L24 32 L40 22 L56 32 L62 20 L62 38 L18 38 Z" fill="#FFD700" />
                <path d="M18 42 L18 56 Q18 68 40 68 Q62 68 62 56 L62 42 L54 42 L54 56 Q54 60 40 60 Q26 60 26 56 L26 42 Z" fill="#FDF6E3" />
              </svg>
            </motion.div>

            <motion.h1
              variants={prefersReducedMotion ? undefined : heroItem}
              className="mb-3"
              style={{
                fontFamily: 'Archivo Black, sans-serif',
                fontSize: 'clamp(3.5rem, 10vw, 8rem)',
                lineHeight: 1,
                letterSpacing: '-0.03em',
                color: '#FDF6E3',
              }}
            >
              THE HUB
            </motion.h1>

            <motion.p
              variants={prefersReducedMotion ? undefined : heroItem}
              className="text-gold-shimmer mb-4"
              style={{ fontFamily: 'Cinzel, serif', fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}
            >
              Young · Royal · Vibrant
            </motion.p>

            <motion.p
              variants={prefersReducedMotion ? undefined : heroItem}
              className="text-lg sm:text-xl mb-10 max-w-lg"
              style={{ color: 'rgba(253,246,227,0.65)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
            >
              Events that build community, sharpen purpose, and glorify God.
            </motion.p>

            <motion.div variants={prefersReducedMotion ? undefined : heroItem} className="flex flex-col sm:flex-row gap-4">
              <Link href="/events" className="btn-gold px-8 py-4 rounded-full text-base text-center"
                style={{ fontFamily: 'DM Sans, sans-serif' }}>
                See All Events
              </Link>
              {upcoming[0] && (
                <Link href={`/events/${upcoming[0].slug}`}
                  className="btn-purple px-8 py-4 rounded-full text-base text-center"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Register: {upcoming[0].title.split(' ').slice(0, 3).join(' ')}
                </Link>
              )}
            </motion.div>
          </motion.div>

          {/* 3D Crown side */}
          <div className="relative h-[350px] md:h-[550px]">
            <CrownScene />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2 animate-bounce opacity-50">
          <span style={{ fontFamily: 'DM Sans', fontSize: '0.65rem', letterSpacing: '0.15em', color: '#FFD700' }}>SCROLL</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION A — Who We Are
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="h-px w-24 mb-8" style={{ background: 'linear-gradient(to right, #FFD700, transparent)' }} />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xl sm:text-2xl leading-relaxed"
              style={{ color: 'rgba(253,246,227,0.8)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
              The Hub is a gathering of young, royal, and vibrant leaders. We create intentional, high-quality events every single month — across sports, arts, professional development, social, worship, and community — where young people discover their identity, develop their gifts, and grow in their faith.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="h-px w-24 mt-8" style={{ background: 'linear-gradient(to left, #FFD700, transparent)' }} />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION B — Four Pillars
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl mb-12 text-center" style={{ color: '#FDF6E3', fontFamily: 'Archivo Black, sans-serif' }}>
              What drives us
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.title}>
                <div className="card-royal rounded-2xl p-7 h-full group">
                  <pillar.icon className="w-8 h-8 mb-4 text-hub-gold" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="text-lg font-medium mb-3" style={{ color: '#FFD700', fontFamily: 'Archivo Black, sans-serif' }}>
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(253,246,227,0.6)', fontFamily: 'DM Sans, sans-serif' }}>
                    {pillar.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION C — Event Category Showcase
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="section-label mb-4">What We Do</div>
            <h2 className="text-3xl sm:text-4xl mb-12" style={{ color: '#FDF6E3', fontFamily: 'Archivo Black, sans-serif' }}>
              Events across every dimension of life.
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <StaggerItem key={cat.name}>
                <div
                  className="relative rounded-2xl p-7 h-44 flex flex-col justify-end overflow-hidden group cursor-default transition-all duration-300 hover:-translate-y-1"
                  style={{ border: '1px solid rgba(255,215,0,0.15)', background: 'rgba(26,5,51,0.8)' }}
                >
                  {/* Hover background photo */}
                  {cat.photo && (
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                      style={{ backgroundImage: `url(${cat.photo})` }}
                    />
                  )}
                  {!cat.photo && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-hub-bg/90 to-transparent pointer-events-none" />

                  <div className="relative z-10">
                    <cat.icon className="w-7 h-7 mb-3 text-hub-gold" strokeWidth={1.5} aria-hidden="true" />
                    <h3 className="text-lg font-medium mb-1" style={{ color: '#FDF6E3', fontFamily: 'Archivo Black, sans-serif' }}>
                      {cat.name}
                    </h3>
                    <p className="text-sm" style={{ color: 'rgba(253,246,227,0.55)', fontFamily: 'DM Sans, sans-serif' }}>
                      {cat.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION D — Stats & Declaration
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 relative counter-section">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div ref={counter1.ref}>
                <span className="block text-5xl sm:text-6xl font-bold" style={{ color: '#FFD700', fontFamily: 'Archivo Black, sans-serif' }}>
                  {counter1.count}+
                </span>
                <span className="text-sm mt-2 block" style={{ color: 'rgba(253,246,227,0.5)', fontFamily: 'DM Sans, sans-serif' }}>
                  events hosted
                </span>
              </div>
              <div ref={counter2.ref}>
                <span className="block text-5xl sm:text-6xl font-bold" style={{ color: '#FFD700', fontFamily: 'Archivo Black, sans-serif' }}>
                  {counter2.count}+
                </span>
                <span className="text-sm mt-2 block" style={{ color: 'rgba(253,246,227,0.5)', fontFamily: 'DM Sans, sans-serif' }}>
                  attendees
                </span>
              </div>
              <div ref={counter3.ref}>
                <span className="block text-5xl sm:text-6xl font-bold" style={{ color: '#FFD700', fontFamily: 'Archivo Black, sans-serif' }}>
                  {counter3.count}
                </span>
                <span className="text-sm mt-2 block" style={{ color: 'rgba(253,246,227,0.5)', fontFamily: 'DM Sans, sans-serif' }}>
                  event categories
                </span>
              </div>
              <div ref={counter4.ref}>
                <span className="block text-5xl sm:text-6xl font-bold" style={{ color: '#FFD700', fontFamily: 'Archivo Black, sans-serif' }}>
                  {counter4.count}
                </span>
                <span className="text-sm mt-2 block" style={{ color: 'rgba(253,246,227,0.5)', fontFamily: 'DM Sans, sans-serif' }}>
                  event every month
                </span>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 style={{ fontFamily: 'Archivo Black, sans-serif', fontSize: 'clamp(2rem, 5vw, 4rem)', color: '#FDF6E3', lineHeight: 1.1 }}>
              One event. Every single month.
            </h2>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION E — Upcoming Events
      ═══════════════════════════════════════════════════════ */}
      {upcoming.length > 0 && (
        <section className="py-24 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="section-label mb-12">Next Up</div>
            </ScrollReveal>
            {upcoming.map((event) => (
              <ScrollReveal key={event.slug} delay={0.1}>
                <Link href={`/events/${event.slug}`}>
                  <div className="rounded-3xl p-10 sm:p-14 relative overflow-hidden grain cursor-pointer transition-all duration-300 hover:scale-[1.01]"
                    style={{ background: event.coverGradient, border: '1px solid rgba(255,215,0,0.2)', boxShadow: '0 20px 80px rgba(74,26,138,0.4)' }}>
                    <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-30 pointer-events-none"
                      style={{ background: 'rgba(255,215,0,0.15)', transform: 'translate(30%, -30%)' }} />

                    {/* Pulsing UPCOMING badge */}
                    <div className="absolute top-6 right-8 flex items-center gap-2">
                      <span
                        className="inline-block w-2 h-2 rounded-full"
                        style={{ background: '#FFD700', animation: 'pulse-badge 2s ease-in-out infinite' }}
                      />
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#FFD700', fontFamily: 'DM Sans, sans-serif' }}>
                        Upcoming
                      </span>
                    </div>

                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-6 uppercase tracking-widest"
                      style={{ background: 'rgba(255,215,0,0.15)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.3)', fontFamily: 'DM Sans, sans-serif' }}>
                      {categoryLabels[event.category]}
                    </span>

                    <h2 style={{ fontFamily: 'Archivo Black, sans-serif', fontSize: 'clamp(2rem, 5vw, 4rem)', color: '#FDF6E3', lineHeight: 1.1, marginBottom: '1rem' }}>
                      {event.title}
                    </h2>
                    <p className="text-lg max-w-xl mb-8" style={{ color: 'rgba(253,246,227,0.7)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
                      {event.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="btn-gold px-6 py-3 rounded-full text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        Register Now
                      </span>
                      <span className="px-5 py-3 rounded-full text-sm"
                        style={{ border: '1px solid rgba(253,246,227,0.25)', color: '#FDF6E3', fontFamily: 'DM Sans, sans-serif' }}>
                        {event.location}
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════
          SECTION F — Past Events
      ═══════════════════════════════════════════════════════ */}
      {past.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center justify-between mb-12">
                <div className="section-label">Past Events</div>
                <Link href="/events" className="text-sm transition-colors hover:text-hub-gold"
                  style={{ color: 'rgba(253,246,227,0.5)', fontFamily: 'DM Sans, sans-serif' }}>
                  View all →
                </Link>
              </div>
            </ScrollReveal>
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {past.slice(0, 3).map((event) => (
                <StaggerItem key={event.slug}>
                  <EventCard event={event} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════
          SECTION G — The Word (Rhapsody)
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="rounded-3xl p-10 sm:p-14 relative overflow-hidden grain"
              style={{
                background: 'linear-gradient(135deg, #2D0A5E 0%, #3A1570 40%, #2D0A5E 100%)',
                border: '1px solid rgba(255,215,0,0.15)',
                boxShadow: '0 20px 60px rgba(74,26,138,0.3)',
              }}>
              <div className="absolute inset-0 opacity-10"
                style={{ background: 'radial-gradient(ellipse at top right, rgba(255,233,122,0.4) 0%, transparent 60%)' }} />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-7 h-7 text-hub-gold" strokeWidth={1.5} aria-hidden="true" />
                  <span className="text-gold-shimmer" style={{ fontFamily: 'Cinzel, serif', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                    The Word
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl mb-6" style={{ color: '#FDF6E3', fontFamily: 'Archivo Black, sans-serif' }}>
                  Start every day with purpose.
                </h2>

                <p className="text-base sm:text-lg leading-relaxed mb-8 max-w-2xl"
                  style={{ color: 'rgba(253,246,227,0.7)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
                  The Rhapsody of Realities is the world&apos;s most translated book — available in every known language. Each day brings a fresh topic, a scripture reference, a short article on applying God&apos;s Word to your life, and daily confessions. All in under 5 minutes.
                </p>

                <a
                  href="https://read.rhapsodyofrealities.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold inline-block px-8 py-3.5 rounded-full text-sm"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Read Today&apos;s Devotional →
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          Mission Strip (existing, preserved)
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="rounded-3xl py-16 px-8 sm:px-16 relative overflow-hidden text-center grain"
              style={{ background: 'linear-gradient(135deg, #2D0A5E 0%, #4A1A8A 50%, #2D0A5E 100%)', border: '1px solid rgba(255,215,0,0.2)', boxShadow: '0 0 80px rgba(74,26,138,0.5)' }}>
              <div className="absolute inset-0 opacity-20"
                style={{ background: 'radial-gradient(ellipse at center, rgba(255,215,0,0.3) 0%, transparent 70%)' }} />
              <p className="text-gold-shimmer mb-4 relative" style={{ fontFamily: 'Cinzel, serif', fontSize: '0.8rem', letterSpacing: '0.2em' }}>
                OUR MISSION
              </p>
              <h2 className="relative mb-6" style={{ fontFamily: 'Archivo Black, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#FDF6E3' }}>
                Built for a generation on the move.
              </h2>
              <p className="text-lg max-w-2xl mx-auto mb-10 relative"
                style={{ color: 'rgba(253,246,227,0.7)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
                The Hub creates spaces where young leaders connect, grow, and make an impact — through sports, professional development, worship, and community.
              </p>
              <Link href="/about" className="btn-gold inline-block px-8 py-3.5 rounded-full text-sm relative"
                style={{ fontFamily: 'DM Sans, sans-serif' }}>
                About The Hub
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
