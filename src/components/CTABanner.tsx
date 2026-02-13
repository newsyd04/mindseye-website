import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from './Button'
import { Card } from './Card'

type CTABannerProps = {
  title: string
  description: string
  buttonLabel: string
  to: string
}

export function CTABanner({ title, description, buttonLabel, to }: CTABannerProps) {
  return (
    <motion.div
      initial={{ y: 12 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <Card className="bg-gradient-to-r from-indigo to-purple text-white">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl space-y-2">
            <h2 className="font-display text-2xl sm:text-3xl">{title}</h2>
            <p className="text-sm text-white/90 sm:text-base">{description}</p>
          </div>
          <Button className="self-start bg-ink text-ink hover:bg-indigo" to={to}>
            {buttonLabel}
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </Card>
    </motion.div>
  )
}
