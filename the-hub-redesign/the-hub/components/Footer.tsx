import Link from 'next/link'
import { Instagram } from 'lucide-react'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/events', label: 'Events' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/devotional', label: 'The Word' },
  { href: '/resources', label: 'Level Up' },
  { href: '/about', label: 'About' },
]

export default function Footer() {
  return (
    <footer className="px-6 py-16 relative z-10"
      style={{ borderTop: '1px solid rgba(255,215,0,0.1)', background: 'rgba(26,5,51,0.8)', backdropFilter: 'blur(16px)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" aria-hidden="true">
                <rect width="40" height="40" rx="8" fill="#6228A8" />
                <path d="M10 10 L13 17 L20 12 L27 17 L30 10 L30 20 L10 20 Z" fill="#FFD700" />
                <path d="M10 22 L10 30 Q10 36 20 36 Q30 36 30 30 L30 22 L26 22 L26 30 Q26 32 20 32 Q14 32 14 30 L14 22 Z" fill="#FDF6E3" />
              </svg>
              <span style={{ fontFamily: 'Archivo Black, sans-serif', color: '#FDF6E3', fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
                THE HUB
              </span>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-sm" style={{ color: 'rgba(253,246,227,0.35)', fontFamily: 'DM Sans, sans-serif' }}>
                A gathering of young, royal, and vibrant leaders.
              </p>
              <a
                href="https://www.instagram.com/we.thehub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 transition-colors hover:text-hub-gold"
                style={{ color: 'rgba(253,246,227,0.45)' }}
                aria-label="Follow The Hub on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className="text-sm transition-colors hover:text-yellow-400"
                style={{ color: 'rgba(253,246,227,0.35)', fontFamily: 'DM Sans, sans-serif' }}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-6 flex flex-col sm:flex-row justify-between gap-2"
          style={{ borderTop: '1px solid rgba(255,215,0,0.08)' }}>
          <p className="text-xs" style={{ color: 'rgba(253,246,227,0.2)', fontFamily: 'DM Sans, sans-serif' }}>
            &copy; {new Date().getFullYear()} The Hub. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(253,246,227,0.2)', fontFamily: 'DM Sans, sans-serif' }}>
            Powered by <a href="https://dotxlabs.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,215,0,0.4)' }}>DOTxLabs</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
