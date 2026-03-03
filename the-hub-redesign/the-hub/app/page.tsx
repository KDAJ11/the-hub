'use client'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { getUpcomingEvents, getPastEvents, categoryLabels } from '@/lib/events'
import EventCard from '@/components/EventCard'

function ParallaxShapes() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const shapes = containerRef.current?.querySelectorAll('[data-speed]')
      shapes?.forEach((shape) => {
        const speed = parseFloat((shape as HTMLElement).dataset.speed || '0')
        ;(shape as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gold cubes */}
      <div data-speed="0.15" className="shape shape-cube absolute" style={{ top: '15%', left: '8%', opacity: 0.6 }} />
      <div data-speed="0.08" className="shape shape-cube absolute" style={{ top: '60%', right: '6%', opacity: 0.4, animationDelay: '-7s' }} />
      {/* Diamonds */}
      <div data-speed="0.2" className="shape shape-diamond absolute" style={{ top: '25%', right: '12%', opacity: 0.7 }} />
      <div data-speed="0.12" className="shape shape-diamond absolute" style={{ bottom: '20%', left: '15%', opacity: 0.5, animationDelay: '-3s' }} />
      {/* Rings */}
      <div data-speed="0.06" className="shape shape-ring absolute" style={{ top: '40%', left: '5%', opacity: 0.5 }} />
      <div data-speed="0.18" className="shape shape-ring absolute" style={{ top: '70%', right: '18%', opacity: 0.3, animationDelay: '-4s', width: '120px', height: '120px' }} />
      {/* Triangles */}
      <div data-speed="0.25" className="shape shape-triangle absolute" style={{ top: '50%', left: '25%', opacity: 0.4 }} />
      <div data-speed="0.1" className="shape shape-triangle absolute" style={{ top: '30%', right: '30%', opacity: 0.3, animationDelay: '-5s' }} />
      {/* Glow orbs */}
      <div className="orb absolute" style={{ width: '500px', height: '500px', top: '-100px', left: '-100px', background: 'rgba(123,53,196,0.35)' }} />
      <div className="orb absolute" style={{ width: '400px', height: '400px', bottom: '0', right: '-50px', background: 'rgba(74,26,138,0.3)', animationDelay: '-8s' }} />
      <div className="orb absolute" style={{ width: '250px', height: '250px', top: '40%', left: '40%', background: 'rgba(255,215,0,0.06)', animationDelay: '-4s' }} />
    </div>
  )
}

export default function HomePage() {
  const upcoming = getUpcomingEvents()
  const past = getPastEvents()

  return (
    <div className="min-h-screen bg-royal">

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 text-center grain">
        <ParallaxShapes />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Crown mark */}
          <div className="flex justify-center mb-8 animate-fade-up delay-100">
            <svg viewBox="0 0 80 80" className="w-20 h-20" fill="none">
              <rect width="80" height="80" rx="16" fill="rgba(98,40,168,0.6)" style={{ backdropFilter: 'blur(8px)' }}/>
              <rect width="80" height="80" rx="16" fill="none" stroke="#FFD700" strokeWidth="1" strokeOpacity="0.4"/>
              <path d="M18 20 L24 32 L40 22 L56 32 L62 20 L62 38 L18 38 Z" fill="#FFD700"/>
              <path d="M18 42 L18 56 Q18 68 40 68 Q62 68 62 56 L62 42 L54 42 L54 56 Q54 60 40 60 Q26 60 26 56 L26 42 Z" fill="#FDF6E3"/>
            </svg>
          </div>

          <h1 className="animate-fade-up delay-200 mb-3"
            style={{
              fontFamily: 'Archivo Black, sans-serif',
              fontSize: 'clamp(4rem, 12vw, 9rem)',
              lineHeight: 1,
              letterSpacing: '-0.03em',
              color: '#FDF6E3',
            }}>
            THE HUB
          </h1>

          <p className="animate-fade-up delay-300 text-gold-shimmer mb-4"
            style={{ fontFamily: 'Cinzel, serif', fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Young · Royal · Vibrant
          </p>

          <p className="animate-fade-up delay-400 text-lg sm:text-xl mb-10 max-w-lg mx-auto"
            style={{ color: 'rgba(253,246,227,0.65)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
            Events that build community, sharpen purpose, and glorify God.
          </p>

          <div className="animate-fade-up delay-500 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/events" className="btn-gold px-8 py-4 rounded-full text-base"
              style={{ fontFamily: 'DM Sans, sans-serif' }}>
              See All Events
            </Link>
            {upcoming[0] && (
              <Link href={`/events/${upcoming[0].slug}`}
                className="btn-purple px-8 py-4 rounded-full text-base"
                style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Register: {upcoming[0].emoji} {upcoming[0].title.split(' ').slice(0, 3).join(' ')}
              </Link>
            )}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
          <span style={{ fontFamily: 'DM Sans', fontSize: '0.65rem', letterSpacing: '0.15em', color: '#FFD700' }}>SCROLL</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* UPCOMING EVENT SPOTLIGHT */}
      {upcoming.length > 0 && (
        <section className="py-24 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="section-label mb-12">Next Up</div>
            {upcoming.map((event) => (
              <Link key={event.slug} href={`/events/${event.slug}`}>
                <div className="rounded-3xl p-10 sm:p-14 relative overflow-hidden grain cursor-pointer transition-all duration-300 hover:scale-[1.01]"
                  style={{ background: event.coverGradient, border: '1px solid rgba(255,215,0,0.2)', boxShadow: '0 20px 80px rgba(74,26,138,0.4)' }}>
                  <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-30 pointer-events-none"
                    style={{ background: 'rgba(255,215,0,0.15)', transform: 'translate(30%, -30%)' }} />
                  <div className="absolute top-6 right-8 text-6xl">{event.emoji}</div>

                  <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-6 uppercase tracking-widest"
                    style={{ background: 'rgba(255,215,0,0.15)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.3)', fontFamily: 'DM Sans, sans-serif' }}>
                    {categoryLabels[event.category]} · Upcoming
                  </span>

                  <h2 style={{ fontFamily: 'Archivo Black, sans-serif', fontSize: 'clamp(2rem, 5vw, 4rem)', color: '#FDF6E3', lineHeight: 1.1, marginBottom: '1rem' }}>
                    {event.title}
                  </h2>
                  <p className="text-lg max-w-xl mb-8" style={{ color: 'rgba(253,246,227,0.7)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
                    {event.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="btn-gold px-6 py-3 rounded-full text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Register Now →
                    </span>
                    <span className="px-5 py-3 rounded-full text-sm"
                      style={{ border: '1px solid rgba(253,246,227,0.25)', color: '#FDF6E3', fontFamily: 'DM Sans, sans-serif' }}>
                      📍 {event.location}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* PAST EVENTS */}
      {past.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div className="section-label">Past Events</div>
              <Link href="/events" className="text-sm transition-colors hover:text-hub-gold"
                style={{ color: 'rgba(253,246,227,0.5)', fontFamily: 'DM Sans, sans-serif' }}>
                View all →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {past.slice(0, 3).map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* MISSION STRIP */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl py-16 px-8 sm:px-16 relative overflow-hidden text-center grain"
            style={{ background: 'linear-gradient(135deg, #2D0A5E 0%, #4A1A8A 50%, #2D0A5E 100%)', border: '1px solid rgba(255,215,0,0.2)', boxShadow: '0 0 80px rgba(74,26,138,0.5)' }}>
            <div className="absolute inset-0 opacity-20"
              style={{ background: 'radial-gradient(ellipse at center, rgba(255,215,0,0.3) 0%, transparent 70%)' }} />
            {/* Decorative corner diamonds */}
            <div className="shape shape-diamond absolute" style={{ top: '20px', left: '20px', opacity: 0.3, width: '20px', height: '20px' }} />
            <div className="shape shape-diamond absolute" style={{ bottom: '20px', right: '20px', opacity: 0.3, width: '20px', height: '20px' }} />

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
        </div>
      </section>
    </div>
  )
}
