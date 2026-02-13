import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`rounded-2xl border border-periwinkle/35 bg-white p-6 shadow-soft sm:p-8 ${className}`}>
      {children}
    </div>
  )
}
