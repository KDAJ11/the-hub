import Image from 'next/image'

const galleryData = [
  {
    event: "Sip & Paint Night — July 2024",
    slug: "sip-and-paint-july-2024",
    emoji: "🎨",
    gradient: "linear-gradient(135deg, #5C1A6E 0%, #8B2DA8 100%)",
    description: "A creative evening of painting, good vibes, and great company.",
    photos: [
      { file: "Hub1.jpeg", alt: "Sip & Paint Night" },
      { file: "Hub2.jpeg", alt: "Sip & Paint Night" },
      { file: "Hub3.jpeg", alt: "Sip & Paint Night" },
      { file: "Hub4.jpeg", alt: "Sip & Paint Night" },
      { file: "Hub5.jpeg", alt: "Sip & Paint Night" },
    ]
  },
  {
    event: "Games Night — February 2025",
    slug: "games-night-feb-2025",
    emoji: "🎮",
    gradient: "linear-gradient(135deg, #2D1A5E 0%, #5E35A8 100%)",
    description: "A night of laughter, friendly competition, and great fellowship.",
    photos: [
      { file: "GN.jpeg", alt: "Games Night" },
      { file: "GN2.jpeg", alt: "Games Night" },
      { file: "GN3.jpeg", alt: "Games Night" },
    ]
  },
  {
    event: "Industry Insights Night — February 2025",
    slug: "asper-industry-night-feb-2025",
    emoji: "🎓",
    gradient: "linear-gradient(135deg, #1A2D5E 0%, #2A4A8A 100%)",
    description: "Marketing students from Asper School of Business got real industry insights and faith-filled encouragement.",
    photos: [
      { file: "ASB.jpeg", alt: "Industry Insights Night" },
      { file: "ASP2.jpeg", alt: "Industry Insights Night" },
    ]
  },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-royal pt-32 pb-24 px-6">
      <div className="orb fixed pointer-events-none" style={{ width: '500px', height: '500px', top: '-100px', left: '-100px', background: 'rgba(98,40,168,0.2)', zIndex: 0 }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="section-label mb-6">Gallery</div>
        <h1 className="mb-4" style={{ fontFamily: 'Archivo Black, sans-serif', fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: '#FDF6E3', lineHeight: 1.05 }}>
          Moments from<br />The Hub.
        </h1>
        <p className="mb-20 text-lg max-w-xl" style={{ color: 'rgba(253,246,227,0.45)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
          Every event tells a story. Here&apos;s ours.
        </p>

        <div className="space-y-20">
          {galleryData.map((album) => (
            <div key={album.slug}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl">{album.emoji}</span>
                <div>
                  <h2 className="text-xl font-medium" style={{ color: '#FDF6E3', fontFamily: 'Archivo Black, sans-serif' }}>
                    {album.event}
                  </h2>
                  <p className="text-sm mt-0.5" style={{ color: 'rgba(253,246,227,0.45)', fontFamily: 'DM Sans, sans-serif' }}>
                    {album.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {album.photos.map((photo, i) => (
                  <div key={i} className="aspect-square rounded-2xl relative overflow-hidden"
                    style={{ border: '1px solid rgba(255,215,0,0.1)' }}>
                    <Image
                      src={`/images/gallery/${photo.file}`}
                      alt={photo.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-8 h-px" style={{ background: 'linear-gradient(to right, rgba(255,215,0,0.15), transparent)' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
