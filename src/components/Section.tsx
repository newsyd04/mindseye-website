import type { ReactNode } from 'react'
import { Container } from './Container'

type SectionProps = {
  children: ReactNode
  className?: string
  containerClassName?: string
  muted?: boolean
}

export function Section({ children, className = '', containerClassName = '', muted = false }: SectionProps) {
  return (
    <section className={`py-14 sm:py-20 ${muted ? 'bg-lavender/45' : ''} ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}
