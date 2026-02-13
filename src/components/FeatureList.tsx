import { CheckCircle2 } from 'lucide-react'

type FeatureListProps = {
  items: string[]
}

export function FeatureList({ items }: FeatureListProps) {
  return (
    <ul className="grid gap-3 text-ink sm:gap-4" aria-label="Service features">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-2xl border border-periwinkle/30 bg-white/80 p-4 text-sm shadow-soft sm:text-base"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-violet" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
