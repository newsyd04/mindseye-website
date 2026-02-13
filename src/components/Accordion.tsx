import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

type AccordionItem = {
  question: string
  answer: string
}

type AccordionProps = {
  items: AccordionItem[]
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <div key={item.question} className="rounded-2xl border border-periwinkle/35 bg-white shadow-soft">
            <h2>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="text-base font-semibold text-ink">{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-violet transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
            </h2>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="px-5 pb-5 text-sm text-indigo/90 sm:text-base">{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
