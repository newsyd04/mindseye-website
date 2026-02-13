import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Container } from './Container'
import { LogoMark } from './LogoMark'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/faq', label: 'FAQ' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
]

const navClassName = ({ isActive }: { isActive: boolean }) =>
  `relative py-2 text-sm font-medium transition-colors ${isActive ? 'text-violet' : 'text-ink hover:text-violet'}`

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-lavender bg-white/90 backdrop-blur-md">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Link aria-label="Go to homepage" to="/" onClick={() => setIsOpen(false)}>
          <LogoMark className="h-10 w-auto sm:h-12" />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} className={navClassName} to={item.to}>
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 bg-violet transition-all duration-200 ${isActive ? 'w-full' : 'w-0'}`}
                    aria-hidden="true"
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex rounded-xl border border-periwinkle/40 p-2 text-ink lg:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            aria-label="Mobile navigation"
            className="border-t border-lavender bg-white lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
          >
            <Container className="grid grid-cols-2 gap-2 py-4 sm:grid-cols-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-3 py-2 text-sm font-semibold ${isActive ? 'bg-lavender text-violet' : 'text-ink hover:bg-lavender/70'}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </Container>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
