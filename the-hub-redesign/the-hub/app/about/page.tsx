const values = [
  { emoji: '👑', title: 'Royal Identity', description: 'We believe every young person carries a royal identity — created with purpose and called to lead. The Hub is a reminder of who you are.' },
  { emoji: '🤝', title: 'Community First', description: 'Real growth happens in community. Every Hub event is designed to connect people, build friendships, and create belonging.' },
  { emoji: '⚡', title: 'Vibrant & Active', description: 'From football pitches to boardrooms, The Hub meets young people where they are — bringing energy, creativity, and intention.' },
  { emoji: '🙏', title: 'Faith at the Centre', description: 'Everything we do is rooted in faith. We\'re a generation leading others back to God — and The Hub is one of the ways we do that.' },
]

const eventTypes = [
  { emoji: '⚽', label: 'Sports' },
  { emoji: '🎮', label: 'Social' },
  { emoji: '🎨', label: 'Arts' },
  { emoji: '🎓', label: 'Professional' },
  { emoji: '🎵', label: 'Worship' },
  { emoji: '🌍', label: 'Community' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-royal">
      {/* Orbs */}
      <div className="orb fixed pointer-events-none" style={{ width: '500px', height: '500px', top: '-50px', right: '-100px', background: 'rgba(123,53,196,0.2)', zIndex: 0 }} />
      <div className="orb fixed pointer-events-none" style={{ width: '300px', height: '300px', bottom: '10%', left: '-50px', background: 'rgba(255,215,0,0.04)', zIndex: 0 }} />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="section-label mb-6">About</div>
          <h1 className="mb-8" style={{ fontFamily: 'Archivo Black, sans-serif', fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: '#FDF6E3', lineHeight: 1.05 }}>
            Young. Royal.<br />
            <span className="text-gold-shimmer">Vibrant.</span> Leading.
          </h1>
          <p className="text-xl max-w-2xl leading-relaxed"
            style={{ color: 'rgba(253,246,227,0.65)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
            The Hub is an organizing body dedicated to creating meaningful events for the youth and young adults of our church — events that build friendships, develop leaders, and glorify God.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl p-10 sm:p-14 relative overflow-hidden grain"
            style={{ background: 'linear-gradient(135deg, #2D0A5E 0%, #4A1A8A 100%)', border: '1px solid rgba(255,215,0,0.2)', boxShadow: '0 20px 60px rgba(74,26,138,0.4)' }}>
            <div className="absolute inset-0 opacity-15"
              style={{ background: 'radial-gradient(ellipse at bottom left, rgba(255,215,0,0.4) 0%, transparent 60%)' }} />
            <div className="shape shape-diamond absolute" style={{ top: '24px', right: '24px', opacity: 0.3, width: '24px', height: '24px' }} />
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
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl mb-12 text-center" style={{ color: '#FDF6E3', fontFamily: 'Archivo Black, sans-serif' }}>
            What drives us
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card-royal rounded-2xl p-7">
                <span className="text-3xl mb-4 block">{v.emoji}</span>
                <h3 className="text-lg font-medium mb-3" style={{ color: '#FFD700', fontFamily: 'Archivo Black, sans-serif' }}>
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(253,246,227,0.6)', fontFamily: 'DM Sans, sans-serif' }}>
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event types */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-4" style={{ color: '#FDF6E3', fontFamily: 'Archivo Black, sans-serif' }}>
            One event a month. Every month.
          </h2>
          <p className="mb-10 text-base" style={{ color: 'rgba(253,246,227,0.45)', fontFamily: 'DM Sans, sans-serif' }}>
            The Hub covers every dimension of life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {eventTypes.map((t) => (
              <div key={t.label} className="flex items-center gap-2 px-6 py-3 rounded-full"
                style={{ border: '1px solid rgba(255,215,0,0.2)', background: 'rgba(98,40,168,0.2)', backdropFilter: 'blur(8px)' }}>
                <span className="text-xl">{t.emoji}</span>
                <span className="text-sm font-medium" style={{ color: '#FFD700', fontFamily: 'DM Sans, sans-serif' }}>
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
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
        </div>
      </section>
    </div>
  )
}
