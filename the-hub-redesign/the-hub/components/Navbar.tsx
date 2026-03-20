'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/events', label: 'Events' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/devotional', label: 'The Word' },
  { href: '/resources', label: 'Level Up' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(26, 5, 51, 0.95)'
          : 'linear-gradient(to bottom, rgba(26,5,51,0.9) 0%, transparent 100%)',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,215,0,0.1)' : 'none',
      }}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none" aria-hidden="true">
            <rect width="40" height="40" rx="8" fill="#6228A8" />
            <path d="M10 10 L13 17 L20 12 L27 17 L30 10 L30 20 L10 20 Z" fill="#FFD700" />
            <path d="M10 22 L10 30 Q10 36 20 36 Q30 36 30 30 L30 22 L26 22 L26 30 Q26 32 20 32 Q14 32 14 30 L14 22 Z" fill="#FDF6E3" />
          </svg>
          <span style={{
            fontFamily: 'Archivo Black, sans-serif',
            color: '#FDF6E3',
            fontSize: '1.2rem',
            letterSpacing: '-0.02em',
          }}>THE HUB</span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              className="text-sm font-medium tracking-wide transition-all duration-200"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                color: pathname === link.href ? '#FFD700' : 'rgba(253,246,227,0.65)',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#FFD700')}
              onMouseLeave={e => (e.currentTarget.style.color = pathname === link.href ? '#FFD700' : 'rgba(253,246,227,0.65)')}>
              {link.label}
            </Link>
          ))}
          <Link href="/events" className="btn-gold px-5 py-2 rounded-full text-sm"
            style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Join an Event
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className="block h-0.5 w-6 transition-all duration-300"
            style={{ background: '#FFD700', transform: open ? 'rotate(45deg) translateY(8px)' : 'none' }} />
          <span className="block h-0.5 w-6 transition-all duration-300"
            style={{ background: '#FFD700', opacity: open ? 0 : 1 }} />
          <span className="block h-0.5 w-6 transition-all duration-300"
            style={{ background: '#FFD700', transform: open ? 'rotate(-45deg) translateY(-8px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: 'rgba(26,5,51,0.98)', borderTop: '1px solid rgba(255,215,0,0.1)' }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
              className="text-lg font-medium py-2"
              style={{ fontFamily: 'DM Sans, sans-serif', color: pathname === link.href ? '#FFD700' : '#FDF6E3' }}>
              {link.label}
            </Link>
          ))}
          <Link href="/events" onClick={() => setOpen(false)}
            className="btn-gold px-5 py-3 rounded-full text-sm text-center mt-2"
            style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Join an Event
          </Link>
        </div>
      )}
    </nav>
  )
}
