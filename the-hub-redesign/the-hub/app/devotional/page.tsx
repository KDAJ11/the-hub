'use client'
import { BookOpen, BookMarked, MessageSquareHeart, Volume2 } from 'lucide-react'
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal'
import BackgroundShapes from '@/components/BackgroundShapes'

const steps = [
  { icon: BookOpen, step: '1', title: 'Read', description: "Read today's topic and scripture reference." },
  { icon: MessageSquareHeart, step: '2', title: 'Meditate', description: 'Meditate on the article and apply it to your life.' },
  { icon: Volume2, step: '3', title: 'Declare', description: 'Declare the daily confession out loud.' },
]

const highlights = [
  'The most translated book in the world — available in every known language',
  'A fresh topic for every day of the year',
  'Scripture reference + practical article + daily confessions',
  'Read it in under 5 minutes',
]

export default function DevotionalPage() {
  return (
    <div className="min-h-screen bg-royal relative">
      <BackgroundShapes />

      {/* Orbs */}
      <div className="orb fixed pointer-events-none" style={{ width: '500px', height: '500px', top: '-50px', right: '-100px', background: 'rgba(123,53,196,0.15)', zIndex: 0 }} />
      <div className="orb fixed pointer-events-none" style={{ width: '300px', height: '300px', bottom: '10%', left: '-50px', background: 'rgba(255,233,122,0.04)', zIndex: 0 }} />

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <BookMarked className="w-7 h-7 text-hub-gold" strokeWidth={1.5} aria-hidden="true" />
              <span className="section-label">Daily Devotional</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: '#FDF6E3', lineHeight: 1.05 }}>
              The Word
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl max-w-2xl leading-relaxed" style={{ color: 'rgba(253,246,227,0.65)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
              Start every day with purpose.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured — Rhapsody Spotlight */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="rounded-3xl p-10 sm:p-14 relative overflow-hidden grain"
              style={{
                background: 'linear-gradient(135deg, #2D0A5E 0%, #3A1570 40%, #2D0A5E 100%)',
                border: '1px solid rgba(255,215,0,0.2)',
                boxShadow: '0 20px 60px rgba(74,26,138,0.4)',
              }}>
              <div className="absolute inset-0 opacity-15"
                style={{ background: 'radial-gradient(ellipse at bottom right, rgba(255,233,122,0.3) 0%, transparent 60%)' }} />

              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl mb-6" style={{ color: '#FDF6E3', fontFamily: 'Archivo Black, sans-serif' }}>
                  Rhapsody of Realities
                </h2>
                <p className="text-lg leading-relaxed mb-8 max-w-2xl"
                  style={{ color: 'rgba(253,246,227,0.7)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
                  The world&apos;s number one daily devotional. A fresh word for every day of the year — rooted in scripture, practical in application, and transformative in impact.
                </p>

                <ul className="space-y-3 mb-10">
                  {highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm"
                      style={{ color: 'rgba(253,246,227,0.75)', fontFamily: 'DM Sans, sans-serif' }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: '#FFD700' }} />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://read.rhapsodyofrealities.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold px-8 py-4 rounded-full text-base text-center"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Read Today&apos;s Devotional →
                  </a>
                  <a
                    href="https://rhapsodyofrealities.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-purple px-8 py-4 rounded-full text-base text-center"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Download the App
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl mb-12 text-center" style={{ color: '#FDF6E3', fontFamily: 'Archivo Black, sans-serif' }}>
              How to use Rhapsody
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-3 gap-8">
            {steps.map((s) => (
              <StaggerItem key={s.step}>
                <div className="card-royal rounded-2xl p-8 text-center h-full">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.25)' }}>
                    <s.icon className="w-6 h-6 text-hub-gold" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest block mb-2" style={{ color: '#FFD700', fontFamily: 'DM Sans, sans-serif' }}>
                    Step {s.step}
                  </span>
                  <h3 className="text-xl font-medium mb-3" style={{ color: '#FDF6E3', fontFamily: 'Archivo Black, sans-serif' }}>
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(253,246,227,0.6)', fontFamily: 'DM Sans, sans-serif' }}>
                    {s.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Closing */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="h-px w-24 mx-auto mb-8" style={{ background: 'linear-gradient(to right, transparent, #FFD700, transparent)' }} />
            <p className="text-xl sm:text-2xl leading-relaxed mb-8"
              style={{ color: 'rgba(253,246,227,0.8)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
              Even if you never attend a Hub event, we want you to leave this site with value. The Word of God is the foundation of everything we do.
            </p>
            <a
              href="https://read.rhapsodyofrealities.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-block px-8 py-4 rounded-full text-base"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Start Reading →
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
