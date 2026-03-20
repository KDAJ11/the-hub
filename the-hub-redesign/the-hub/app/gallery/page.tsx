'use client'
import Image from 'next/image'
import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal'
import BackgroundShapes from '@/components/BackgroundShapes'

const galleryData = [
  {
    event: 'Sip & Paint Night',
    date: 'July 2024',
    slug: 'sip-and-paint',
    filter: 'Sip & Paint',
    folder: 'sip-and-paint',
    photos: ['SP.jpeg', 'SP1.jpeg', 'SP3.jpeg'],
  },
  {
    event: 'Games Night',
    date: 'February 2025',
    slug: 'games-night',
    filter: 'Games Night',
    folder: 'games-night',
    photos: ['GN1.jpeg', 'GN2.jpeg', 'GN3.jpeg', 'GN5.jpeg', 'GN6.jpeg', 'GN7.jpeg'],
  },
  {
    event: 'Industry Insights Night',
    date: 'February 2025',
    slug: 'industry-insights',
    filter: 'Industry Insights',
    folder: 'asper-night',
    photos: ['ASB.jpeg', 'ASP2.jpeg'],
  },
]

const filters = ['All', 'Sip & Paint', 'Games Night', 'Industry Insights']

// Flatten all photos with metadata
type Photo = { src: string; event: string; date: string; filter: string; index: number }

function getAllPhotos(activeFilter: string): Photo[] {
  const result: Photo[] = []
  galleryData.forEach((album) => {
    if (activeFilter !== 'All' && album.filter !== activeFilter) return
    album.photos.forEach((photo) => {
      result.push({
        src: `/images/gallery/${album.folder}/${photo}`,
        event: album.event,
        date: album.date,
        filter: album.filter,
        index: result.length,
      })
    })
  })
  return result
}

// Masonry height classes for visual variety
const heightClasses = ['h-64', 'h-80', 'h-72', 'h-96', 'h-64', 'h-80', 'h-72', 'h-64', 'h-96', 'h-80', 'h-72']

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const photos = getAllPhotos(activeFilter)

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), [])
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prevPhoto = useCallback(() => {
    setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : photos.length - 1))
  }, [photos.length])
  const nextPhoto = useCallback(() => {
    setLightboxIndex((i) => (i !== null && i < photos.length - 1 ? i + 1 : 0))
  }, [photos.length])

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prevPhoto()
      if (e.key === 'ArrowRight') nextPhoto()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [lightboxIndex, closeLightbox, prevPhoto, nextPhoto])

  // Touch/swipe
  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX)
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return
    const diff = touchStart - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextPhoto()
      else prevPhoto()
    }
    setTouchStart(null)
  }

  return (
    <div className="min-h-screen bg-royal relative">
      <BackgroundShapes />

      <div className="orb fixed pointer-events-none" style={{ width: '500px', height: '500px', top: '-100px', left: '-100px', background: 'rgba(98,40,168,0.2)', zIndex: 0 }} />

      <div className="max-w-6xl mx-auto relative z-10 pt-32 pb-24 px-6">
        <ScrollReveal>
          <div className="section-label mb-6">Gallery</div>
          <h1 className="mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: '#FDF6E3', lineHeight: 1.05 }}>
            Moments from<br />The Hub.
          </h1>
          <p className="mb-12 text-lg max-w-xl" style={{ color: 'rgba(253,246,227,0.45)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
            Every event tells a story. Here&apos;s ours.
          </p>
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-12" role="tablist" aria-label="Filter gallery by event">
            {filters.map((filter) => (
              <button
                key={filter}
                role="tab"
                aria-selected={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  background: activeFilter === filter ? 'rgba(255,215,0,0.15)' : 'rgba(98,40,168,0.2)',
                  color: activeFilter === filter ? '#FFD700' : 'rgba(253,246,227,0.55)',
                  border: `1px solid ${activeFilter === filter ? 'rgba(255,215,0,0.35)' : 'rgba(184,127,255,0.15)'}`,
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Masonry grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3"
          >
            {photos.map((photo, i) => (
              <div
                key={photo.src}
                className={`relative ${heightClasses[i % heightClasses.length]} rounded-2xl overflow-hidden group cursor-pointer break-inside-avoid`}
                style={{ border: '1px solid rgba(255,215,0,0.1)' }}
                onClick={() => openLightbox(i)}
                role="button"
                tabIndex={0}
                aria-label={`View ${photo.event} photo ${i + 1}`}
                onKeyDown={(e) => { if (e.key === 'Enter') openLightbox(i) }}
              >
                <Image
                  src={photo.src}
                  alt={`${photo.event} — ${photo.date}, photo ${i + 1}`}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-[1.02] group-hover:brightness-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Caption overlay on hover */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium" style={{ color: '#FDF6E3', fontFamily: 'DM Sans, sans-serif' }}>
                    {photo.event}
                  </p>
                  <p className="text-xs" style={{ color: 'rgba(253,246,227,0.6)', fontFamily: 'DM Sans, sans-serif' }}>
                    {photo.date}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && photos[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(16px)' }}
            onClick={closeLightbox}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-11 h-11 flex items-center justify-center rounded-full transition-colors z-10"
              style={{ background: 'rgba(255,255,255,0.1)', color: '#FDF6E3' }}
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prevPhoto() }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full transition-colors z-10"
              style={{ background: 'rgba(255,255,255,0.1)', color: '#FDF6E3' }}
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); nextPhoto() }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full transition-colors z-10"
              style={{ background: 'rgba(255,255,255,0.1)', color: '#FDF6E3' }}
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-[90vw] h-[80vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[lightboxIndex].src}
                alt={`${photos[lightboxIndex].event} — ${photos[lightboxIndex].date}`}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm"
              style={{ color: 'rgba(253,246,227,0.5)', fontFamily: 'DM Sans, sans-serif' }}>
              {lightboxIndex + 1} / {photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
