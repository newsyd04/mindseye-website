import type { ReactNode } from 'react'
import { Badge } from './Badge'

type PageHeaderProps = {
  title: string
  description?: string
  eyebrow?: string
  children?: ReactNode
}

export function PageHeader({ title, description, eyebrow, children }: PageHeaderProps) {
  return (
    <header className="space-y-5">
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <div className="max-w-3xl space-y-4">
        <h1 className="font-display text-4xl text-ink sm:text-5xl">{title}</h1>
        {description ? <p className="text-base text-indigo/90 sm:text-lg">{description}</p> : null}
      </div>
      {children}
    </header>
  )
}
