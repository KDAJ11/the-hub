import Image from 'next/image'

const galleryData = [
  {
    event: "Sip & Paint Night — July 2024",
    slug: "sip-and-paint-july-2024",
    emoji: "🎨",
    description: "A creative evening of painting, good vibes, and great company.",
    folder: "sip-and-paint",
    photos: ["SP.jpeg", "SP1.jpeg", "SP3.jpeg"],
  },
  {
    event: "Games Night — February 2025",
    slug: "games-night-feb-2025",
    emoji: "🎮",
    description: "A night of laughter, friendly competition, and great fellowship.",
    folder: "games-night",
    photos: ["GN1.jpeg", "GN2.jpeg", "GN3.jpeg", "GN5.jpeg", "GN6.jpeg", "GN7.jpeg"],
  },
  {
    event: "Industry Insights Night — February 2025",
    slug: "asper-industry-night-feb-2025",
    emoji: "🎓",
    description: "Marketing students from Asper School of Business got real industry insights and faith-filled encouragement.",
    folder: "asper-night",
    photos: ["ASB.jpeg", "ASP2.jpeg"],
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
                      src={`/images/gallery/${album.folder}/${photo}`}
                      alt={`${album.event} photo ${i + 1}`}
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
