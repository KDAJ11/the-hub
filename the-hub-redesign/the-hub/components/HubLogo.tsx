import React from 'react'

type Variant = 'mark' | 'wordmark-dark' | 'wordmark-purple'

interface HubLogoProps {
  variant?: Variant
  className?: string
}

export default function HubLogo({ variant = 'mark', className = '' }: HubLogoProps) {
  if (variant === 'mark') {
    // Crown U mark
    return (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="100" height="100" rx="16" fill="#5C3D6E" />
        {/* Crown */}
        <path d="M32 28 L38 38 L50 30 L62 38 L68 28 L68 44 L32 44 Z" fill="#F2EFE6" />
        {/* U shape */}
        <path d="M32 48 L32 64 Q32 76 50 76 Q68 76 68 64 L68 48 L60 48 L60 64 Q60 68 50 68 Q40 68 40 64 L40 48 Z" fill="#F2EFE6" />
      </svg>
    )
  }

  if (variant === 'wordmark-dark') {
    return (
      <svg viewBox="0 0 320 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <text x="0" y="68" fontFamily="'Archivo Black', sans-serif" fontSize="80" fill="#F2EFE6" letterSpacing="-2">THE HUB</text>
      </svg>
    )
  }

  // wordmark-purple
  return (
    <svg viewBox="0 0 320 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <text x="0" y="68" fontFamily="'Archivo Black', sans-serif" fontSize="80" fill="#F2EFE6" letterSpacing="-2">THE HUB</text>
    </svg>
  )
}
