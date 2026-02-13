import { motion } from 'framer-motion'
import { Button } from './Button'
import { HeroVisual } from './HeroVisual'

type HeroProps = {
  title: string
  description: string
  trustLine?: string
}

export function Hero({ title, description, trustLine }: HeroProps) {
  return (
    <motion.section
      initial={{ y: 12 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="rounded-3xl border border-periwinkle/30 bg-gradient-to-br from-lavender/35 via-white to-white p-7 shadow-soft sm:p-12"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="order-2 space-y-6 lg:order-1">
          <h1 className="font-display text-4xl leading-tight text-ink sm:text-6xl">{title}</h1>
          <p className="max-w-2xl text-base text-indigo/90 sm:text-lg">{description}</p>
          <div className="flex flex-wrap gap-3">
            <Button to="/contact">Get in touch</Button>
            <Button to="/services" variant="outline">
              View services
            </Button>
          </div>
          {trustLine ? <p className="text-sm font-medium text-indigo/80">{trustLine}</p> : null}
        </div>

        <div className="order-1 lg:order-2">
          <HeroVisual />
        </div>
      </div>
    </motion.section>
  )
}
