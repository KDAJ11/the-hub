'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { events, categoryLabels, Event } from '@/lib/events'
import ScrollReveal from '@/components/ScrollReveal'

const categoryColors: Record<Event['category'], string> = {
  sports: '#22c55e',
  social: '#3b82f6',
  arts: '#f472b6',
  professional: '#f59e0b',
  worship: '#FFD700',
  community: '#14b8a6',
}

const categoryList: Event['category'][] = ['sports', 'social', 'arts', 'professional', 'worship', 'community']

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function parseEventDate(event: Event): Date | null {
  if (event.month === 'TBD') return null
  const monthIndex = MONTHS.indexOf(event.month)
  if (monthIndex === -1) return null
  return new Date(event.year, monthIndex, 15) // default to 15th if no exact day
}

export default function EventCalendar() {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [activeCategories, setActiveCategories] = useState<Set<Event['category']>>(new Set(categoryList))
  const [hoveredDay, setHoveredDay] = useState<number | null>(null)

  const prevMonth = () => {
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(y => y - 1) }
    else setCurrentMonth(m => m - 1)
  }
  const nextMonth = () => {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(y => y + 1) }
    else setCurrentMonth(m => m + 1)
  }

  const toggleCategory = (cat: Event['category']) => {
    setActiveCategories(prev => {
      const next = new Set(prev)
      if (next.has(cat)) next.delete(cat)
      else next.add(cat)
      return next
    })
  }

  // Calendar grid
  const firstDay = new Date(currentYear, currentMonth, 1).getDay()
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

  // Events for current month
  const monthEvents = useMemo(() => {
    return events.filter(event => {
      if (!activeCategories.has(event.category)) return false
      const d = parseEventDate(event)
      if (!d) return false
      return d.getMonth() === currentMonth && d.getFullYear() === currentYear
    })
  }, [currentMonth, currentYear, activeCategories])

  const getEventsForDay = (day: number) => {
    return monthEvents.filter(event => {
      const d = parseEventDate(event)
      return d && d.getDate() === day
    })
  }

  const isToday = (day: number) =>
    today.getDate() === day && today.getMonth() === currentMonth && today.getFullYear() === currentYear

  return (
    <ScrollReveal>
      <div className="rounded-2xl p-6 sm:p-8"
        style={{ background: 'rgba(74,26,138,0.2)', border: '1px solid rgba(255,215,0,0.15)', backdropFilter: 'blur(8px)' }}>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categoryList.map(cat => (
            <button
              key={cat}
              onClick={() => toggleCategory(cat)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                background: activeCategories.has(cat) ? 'rgba(255,255,255,0.08)' : 'transparent',
                color: activeCategories.has(cat) ? categoryColors[cat] : 'rgba(253,246,227,0.3)',
                border: `1px solid ${activeCategories.has(cat) ? categoryColors[cat] + '40' : 'rgba(255,255,255,0.08)'}`,
              }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: categoryColors[cat], opacity: activeCategories.has(cat) ? 1 : 0.3 }} />
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Month navigation */}
        <div className="flex items-center justify-between mb-6">
          <button onClick={prevMonth} className="w-9 h-9 flex items-center justify-center rounded-full transition-colors"
            style={{ background: 'rgba(255,255,255,0.05)', color: '#FDF6E3' }} aria-label="Previous month">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h3 className="text-lg font-medium" style={{ color: '#FDF6E3', fontFamily: 'Archivo Black, sans-serif' }}>
            {MONTHS[currentMonth]} {currentYear}
          </h3>
          <button onClick={nextMonth} className="w-9 h-9 flex items-center justify-center rounded-full transition-colors"
            style={{ background: 'rgba(255,255,255,0.05)', color: '#FDF6E3' }} aria-label="Next month">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {DAYS.map(day => (
            <div key={day} className="text-center text-xs font-medium py-2"
              style={{ color: 'rgba(253,246,227,0.4)', fontFamily: 'DM Sans, sans-serif' }}>
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1">
          {/* Empty cells for days before month starts */}
          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`empty-${i}`} className="aspect-square" />
          ))}

          {/* Day cells */}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1
            const dayEvents = getEventsForDay(day)
            const isCurrentDay = isToday(day)

            return (
              <div
                key={day}
                className="aspect-square flex flex-col items-center justify-center rounded-lg relative transition-colors duration-150"
                style={{
                  background: isCurrentDay ? 'rgba(255,215,0,0.1)' : 'transparent',
                  border: isCurrentDay ? '1px solid rgba(255,215,0,0.3)' : '1px solid transparent',
                }}
                onMouseEnter={() => dayEvents.length > 0 && setHoveredDay(day)}
                onMouseLeave={() => setHoveredDay(null)}
              >
                <span className="text-sm" style={{
                  color: isCurrentDay ? '#FFD700' : 'rgba(253,246,227,0.6)',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: isCurrentDay ? 600 : 400,
                }}>
                  {day}
                </span>

                {/* Event dots */}
                {dayEvents.length > 0 && (
                  <div className="flex gap-0.5 mt-0.5">
                    {dayEvents.map((event) => (
                      <span key={event.slug} className="w-1.5 h-1.5 rounded-full"
                        style={{ background: categoryColors[event.category] }} />
                    ))}
                  </div>
                )}

                {/* Popover */}
                {hoveredDay === day && dayEvents.length > 0 && (
                  <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 z-20 min-w-[180px] rounded-lg p-3 shadow-xl"
                    style={{ background: 'rgba(26,5,51,0.95)', border: '1px solid rgba(255,215,0,0.2)', backdropFilter: 'blur(12px)' }}>
                    {dayEvents.map(event => (
                      <Link key={event.slug} href={`/events/${event.slug}`}
                        className="block py-1 text-xs hover:text-hub-gold transition-colors"
                        style={{ color: '#FDF6E3', fontFamily: 'DM Sans, sans-serif' }}>
                        <span className="w-2 h-2 rounded-full inline-block mr-2"
                          style={{ background: categoryColors[event.category] }} />
                        {event.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </ScrollReveal>
  )
}
