export type Event = {
  slug: string
  title: string
  date: string
  month: string
  year: number
  category: 'sports' | 'social' | 'professional' | 'worship' | 'community' | 'arts'
  status: 'upcoming' | 'past'
  shortDescription: string
  fullDescription: string
  location: string
  registrationFormUrl?: string
  coverColor: string
  coverGradient: string
  emoji: string
  highlights?: string[]
}

export const events: Event[] = [
  {
    slug: 'football-tournament-2025',
    title: 'The Hub Football Tournament',
    date: 'Coming Soon — 2025',
    month: 'TBD',
    year: 2025,
    category: 'sports',
    status: 'upcoming',
    shortDescription: "A competitive football (soccer) tournament for players in our church community. Lace up, show up, and glorify God on the pitch.",
    fullDescription: "The Hub is bringing the church together on the football pitch! Whether you're a casual player or a seasoned striker, this tournament is your chance to compete, connect, and represent your faith with excellence.\n\nExpect full matches, team spirit, and a whole lot of energy. This is more than a game — it's community in motion.",
    location: 'Toronto',
    registrationFormUrl: '',
    coverColor: '#2D0A5E',
    coverGradient: 'linear-gradient(135deg, #2D0A5E 0%, #4A1A8A 100%)',
    emoji: '⚽',
    highlights: ['Open to all skill levels', 'Team registration', 'Prizes for winners', 'Post-match fellowship'],
  },
  {
    slug: 'sip-and-paint-july-2024',
    title: 'Sip & Paint Night',
    date: 'July 2024',
    month: 'July',
    year: 2024,
    category: 'arts',
    status: 'past',
    shortDescription: 'A creative evening of painting, good vibes, and great company. The Hub brought out the artist in everyone.',
    fullDescription: "One of The Hub's most memorable evenings — a Sip & Paint night where creativity flowed as freely as the conversation.\n\nGuests were guided through a painting session, creating their own masterpieces while building friendships and sharing laughs. The room was filled with colour, music, and the kind of warmth that only comes from genuine community.",
    location: 'Toronto',
    coverColor: '#5C1A6E',
    coverGradient: 'linear-gradient(135deg, #5C1A6E 0%, #8B2DA8 100%)',
    emoji: '🎨',
    highlights: ['Guided painting session', 'All supplies provided', 'Music & good vibes', 'Community fellowship'],
  },
  {
    slug: 'asper-industry-night-feb-2025',
    title: 'Industry Insights Night',
    date: 'February 2025',
    month: 'February',
    year: 2025,
    category: 'professional',
    status: 'past',
    shortDescription: 'Marketing students from Asper School of Business gathered for real industry insights and faith-filled encouragement.',
    fullDescription: "We hosted marketing students from the Asper School of Business for an evening of honest industry insights, career wisdom, and faith-filled encouragement.\n\nSpeakers shared their journeys navigating the professional world while keeping God at the centre. Students left with practical knowledge, new connections, and a renewed sense of purpose.",
    location: 'Toronto',
    coverColor: '#1A2D5E',
    coverGradient: 'linear-gradient(135deg, #1A2D5E 0%, #2A4A8A 100%)',
    emoji: '🎓',
    highlights: ['Industry guest speakers', 'Faith & career panel', 'Networking session', 'Q&A with professionals'],
  },
  {
    slug: 'games-night-feb-2025',
    title: 'Games Night',
    date: 'February 2025',
    month: 'February',
    year: 2025,
    category: 'social',
    status: 'past',
    shortDescription: 'A night of laughter, friendly competition, and good vibes as The Hub came together for an epic games night.',
    fullDescription: "The Hub's first major social event of 2025 brought the community together for a fun-filled games night. Board games, group challenges, and plenty of laughter made for an unforgettable evening.\n\nThis was about more than just playing — it was about building friendships, breaking the ice, and creating the kind of community where everyone belongs.",
    location: 'Toronto',
    coverColor: '#2D1A5E',
    coverGradient: 'linear-gradient(135deg, #2D1A5E 0%, #5E35A8 100%)',
    emoji: '🎮',
    highlights: ['Board games & group games', 'Team challenges', 'Prizes & giveaways', 'Great food & fellowship'],
  },
]

export function getUpcomingEvents() {
  return events.filter((e) => e.status === 'upcoming')
}

export function getPastEvents() {
  return events.filter((e) => e.status === 'past')
}

export function getEventBySlug(slug: string) {
  return events.find((e) => e.slug === slug)
}

export const categoryLabels: Record<Event['category'], string> = {
  sports: 'Sports',
  social: 'Social',
  professional: 'Professional',
  worship: 'Worship',
  community: 'Community',
  arts: 'Arts & Culture',
}
