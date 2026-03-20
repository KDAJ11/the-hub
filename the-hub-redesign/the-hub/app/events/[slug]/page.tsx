import { getEventBySlug, events, categoryLabels } from '@/lib/events'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }))
}

export default function EventPage({ params }: { params: { slug: string } }) {
  const event = getEventBySlug(params.slug)
  if (!event) notFound()

  const paragraphs = event.fullDescription.split('\n\n').filter(Boolean)

  return (
    <div className="min-h-screen bg-royal">
      {/* Hero */}
      <div className="relative pt-28 pb-20 px-6 grain overflow-hidden"
        style={{ background: event.coverGradient, borderBottom: '1px solid rgba(255,215,0,0.15)' }}>
        <div className="absolute inset-0 opacity-30"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(255,215,0,0.2) 0%, transparent 60%)' }} />
        <div className="shape shape-ring absolute" style={{ top: '20%', right: '10%', opacity: 0.3 }} />
        <div className="shape shape-diamond absolute" style={{ bottom: '15%', right: '25%', opacity: 0.4 }} />

        <div className="max-w-4xl mx-auto relative">
          <Link href="/events" className="inline-flex items-center gap-2 text-sm mb-8 transition-opacity hover:opacity-70"
            style={{ color: 'rgba(253,246,227,0.55)', fontFamily: 'DM Sans, sans-serif' }}>
            ← Back to Events
          </Link>
          <div className="flex items-start gap-6">
            <span className="text-6xl" aria-hidden="true">{event.emoji}</span>
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-4 uppercase tracking-widest"
                style={{ background: 'rgba(255,215,0,0.12)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.3)', fontFamily: 'DM Sans, sans-serif' }}>
                {categoryLabels[event.category]} · {event.status === 'upcoming' ? 'Upcoming' : 'Past Event'}
              </span>
              <h1 className="mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#FDF6E3', lineHeight: 1.1 }}>
                {event.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm" style={{ color: 'rgba(253,246,227,0.6)', fontFamily: 'DM Sans, sans-serif' }}>
                <span>{event.date}</span>
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-medium mb-6" style={{ color: '#FDF6E3', fontFamily: 'Archivo Black, sans-serif' }}>
              About this event
            </h2>
            <div className="space-y-4">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed"
                  style={{ color: 'rgba(253,246,227,0.7)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
                  {p}
                </p>
              ))}
            </div>

            {event.highlights && (
              <div className="mt-10 p-6 rounded-2xl"
                style={{ background: 'rgba(98,40,168,0.2)', border: '1px solid rgba(255,215,0,0.15)' }}>
                <h3 className="text-lg font-medium mb-4" style={{ color: '#FFD700', fontFamily: 'DM Sans, sans-serif' }}>
                  What to expect
                </h3>
                <ul className="space-y-2">
                  {event.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm"
                      style={{ color: 'rgba(253,246,227,0.75)', fontFamily: 'DM Sans, sans-serif' }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#FFD700' }} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <div className="rounded-2xl p-6 sticky top-28"
              style={{ background: 'rgba(74,26,138,0.3)', border: '1px solid rgba(255,215,0,0.2)', backdropFilter: 'blur(12px)' }}>
              <h3 className="text-xl font-medium mb-2" style={{ color: '#FDF6E3', fontFamily: 'Archivo Black, sans-serif' }}>
                {event.status === 'upcoming' ? 'Reserve your spot' : 'Event has passed'}
              </h3>
              {event.status === 'upcoming' ? (
                <>
                  <p className="text-sm mb-6" style={{ color: 'rgba(253,246,227,0.55)', fontFamily: 'DM Sans, sans-serif' }}>
                    Fill out the form below to register.
                  </p>
                  {event.registrationFormUrl ? (
                    <iframe src={event.registrationFormUrl} width="100%" height="480"
                      className="rounded-xl" style={{ border: 'none' }}
                      title={`Register for ${event.title}`} />
                  ) : (
                    <div className="text-center py-8 rounded-xl"
                      style={{ background: 'rgba(98,40,168,0.2)', border: '1px dashed rgba(255,215,0,0.2)' }}>
                      <p className="text-sm" style={{ color: 'rgba(253,246,227,0.45)', fontFamily: 'DM Sans, sans-serif' }}>
                        Registration form coming soon!
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-8">
                  <p className="text-sm mb-4" style={{ color: 'rgba(253,246,227,0.55)', fontFamily: 'DM Sans, sans-serif' }}>
                    Check out our gallery for photos from this event.
                  </p>
                  <Link href="/gallery" className="btn-gold inline-block px-5 py-2.5 rounded-full text-sm"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    View Gallery →
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
