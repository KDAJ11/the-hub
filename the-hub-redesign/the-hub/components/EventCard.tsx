import Link from 'next/link'
import { Event, categoryLabels } from '@/lib/events'

export default function EventCard({ event }: { event: Event }) {
  return (
    <Link href={`/events/${event.slug}`}>
      <div className="card-royal rounded-2xl p-7 h-full relative overflow-hidden cursor-pointer"
        style={{ minHeight: '220px', background: event.coverGradient }}>
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-20 pointer-events-none"
          style={{ background: 'rgba(255,215,0,0.3)', transform: 'translate(30%, -30%)' }} />
        <div className="absolute top-5 right-5 text-3xl">{event.emoji}</div>

        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 uppercase tracking-widest"
          style={{ background: 'rgba(255,215,0,0.12)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.25)', fontFamily: 'DM Sans, sans-serif' }}>
          {categoryLabels[event.category]}
        </span>

        <h3 className="text-2xl leading-tight mb-3 relative"
          style={{ color: '#FDF6E3', fontFamily: 'Archivo Black, sans-serif' }}>
          {event.title}
        </h3>

        <p className="text-sm mb-6 line-clamp-2"
          style={{ color: 'rgba(253,246,227,0.65)', fontFamily: 'DM Sans, sans-serif' }}>
          {event.shortDescription}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs" style={{ color: 'rgba(253,246,227,0.45)', fontFamily: 'DM Sans, sans-serif' }}>
            {event.date}
          </span>
          <span className="text-xs px-3 py-1 rounded-full"
            style={{ border: '1px solid rgba(255,215,0,0.2)', color: '#FFD700', fontFamily: 'DM Sans, sans-serif' }}>
            {event.status === 'upcoming' ? 'Upcoming →' : 'View Recap →'}
          </span>
        </div>
      </div>
    </Link>
  )
}
