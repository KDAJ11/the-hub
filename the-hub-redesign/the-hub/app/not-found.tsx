import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 text-center" style={{ background: 'var(--hub-black)' }}>
      <div>
        <p className="text-8xl mb-6">👑</p>
        <h1 className="font-display text-5xl mb-4" style={{ color: 'var(--hub-cream)', fontFamily: 'Archivo Black, sans-serif' }}>
          Page not found
        </h1>
        <p className="text-lg mb-8" style={{ color: 'rgba(242,239,230,0.5)', fontFamily: 'DM Sans, sans-serif' }}>
          This isn't the hub you're looking for.
        </p>
        <Link href="/"
          className="inline-block px-8 py-3.5 rounded-full text-sm font-medium"
          style={{ background: 'var(--hub-purple)', color: 'var(--hub-cream)', fontFamily: 'DM Sans, sans-serif' }}>
          Go Home →
        </Link>
      </div>
    </div>
  )
}
