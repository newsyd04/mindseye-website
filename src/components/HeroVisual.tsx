import { motion, useReducedMotion } from 'framer-motion'
import heroLogo from '../assets/logo.png'

export function HeroVisual() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-[14rem] sm:max-w-[20rem] lg:max-w-[26rem]">
      <motion.div
        className="absolute -right-5 -top-4 h-28 w-28 rounded-full bg-lilac/30 blur-2xl"
        animate={prefersReducedMotion ? {} : { y: [-4, 6], x: [0, 4] }}
        transition={{ duration: 7, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute -bottom-5 -left-5 h-24 w-24 rounded-full bg-periwinkle/40 blur-xl"
        animate={prefersReducedMotion ? {} : { y: [5, -6], x: [0, -4] }}
        transition={{ duration: 7.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />

      <motion.div
        className="relative h-full w-full rounded-[2rem] border border-periwinkle/40 bg-gradient-to-br from-lavender/70 via-white to-white p-4 shadow-soft"
        initial={{ scale: 0.98 }}
        animate={prefersReducedMotion ? { scale: 1 } : { scale: [0.98, 1, 0.995] }}
        transition={{ duration: prefersReducedMotion ? 0.4 : 5.2, repeat: prefersReducedMotion ? 0 : Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      >
        <img
          src={heroLogo}
          alt=""
          role="presentation"
          className="h-full w-full rounded-[1.5rem] object-cover"
          loading="eager"
          decoding="async"
        />
      </motion.div>
    </div>
  )
}
