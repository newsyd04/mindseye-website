import type { ReactNode } from 'react'

type BadgeProps = {
  children: ReactNode
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-periwinkle/40 bg-lavender/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-indigo">
      {children}
    </span>
  )
}
