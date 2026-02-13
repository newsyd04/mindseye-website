import { AlertTriangle } from 'lucide-react'

type CalloutProps = {
  title?: string
  text: string
}

export function Callout({ title = 'Important', text }: CalloutProps) {
  return (
    <aside className="rounded-2xl border border-lilac/30 bg-lavender/60 p-5 text-sm text-ink" aria-live="polite">
      <p className="flex items-center gap-2 font-semibold text-indigo">
        <AlertTriangle className="h-4 w-4" aria-hidden="true" />
        {title}
      </p>
      <p className="mt-2">{text}</p>
    </aside>
  )
}
