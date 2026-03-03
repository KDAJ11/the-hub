import { events, getUpcomingEvents, getPastEvents, categoryLabels } from '@/lib/events'
import EventCard from '@/components/EventCard'

export default function EventsPage() {
  const upcoming = getUpcomingEvents()
  const past = getPastEvents()

  return (
    <div className="min-h-screen bg-royal pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Decorative orbs */}
        <div className="orb fixed pointer-events-none" style={{ width: '400px', height: '400px', top: 0, right: '-100px', background: 'rgba(98,40,168,0.25)', zIndex: 0 }} />

        <div className="relative z-10">
          <div className="section-label mb-6">All Events</div>
          <h1 className="mb-16" style={{ fontFamily: 'Archivo Black, sans-serif', fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: '#FDF6E3', lineHeight: 1.05 }}>
            What's happening<br />at The Hub.
          </h1>

          {upcoming.length > 0 && (
            <section className="mb-20">
              <h2 className="text-xl font-medium mb-8" style={{ color: '#FFD700', fontFamily: 'Cinzel, serif', letterSpacing: '0.05em' }}>
                Upcoming Events
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcoming.map((event) => <EventCard key={event.slug} event={event} />)}
              </div>
            </section>
          )}

          {upcoming.length > 0 && past.length > 0 && (
            <div className="h-px w-full mb-20" style={{ background: 'linear-gradient(to right, transparent, rgba(255,215,0,0.2), transparent)' }} />
          )}

          {past.length > 0 && (
            <section>
              <h2 className="text-xl font-medium mb-8" style={{ color: 'rgba(253,246,227,0.5)', fontFamily: 'Cinzel, serif', letterSpacing: '0.05em' }}>
                Past Events
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {past.map((event) => <EventCard key={event.slug} event={event} />)}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
