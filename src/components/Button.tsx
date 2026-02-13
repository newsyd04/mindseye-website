import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonProps = {
  children: ReactNode
  to?: string
  variant?: 'primary' | 'outline'
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const baseStyle =
  'inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2 focus-visible:ring-offset-white'

const variants = {
  primary: 'bg-ink text-white shadow-soft hover:bg-indigo',
  outline: 'border border-periwinkle/60 bg-white text-ink hover:border-violet hover:text-violet',
}

export function Button({ children, to, variant = 'primary', className = '', ...props }: ButtonProps) {
  const classes = `${baseStyle} ${variants[variant]} ${className}`
  const isExternal = to?.startsWith('http') || to?.startsWith('mailto:')

  if (to && isExternal) {
    return (
      <a className={classes} href={to}>
        {children}
      </a>
    )
  }

  if (to) {
    return (
      <Link className={classes} to={to}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
