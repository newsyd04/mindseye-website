import { Link } from 'react-router-dom'
import { siteMeta, serviceDisclaimer } from '../content/siteContent'
import { Container } from './Container'
import { LogoMark } from './LogoMark'

export function Footer() {
  return (
    <footer className="border-t border-lavender bg-white py-10">
      <Container className="grid gap-8 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="space-y-4">
          <LogoMark className="h-11 w-auto" />
          <p className="max-w-md text-sm text-indigo/90">{siteMeta.footerBlurb}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink">Quick links</h2>
          <ul className="mt-3 space-y-2 text-sm text-indigo/90">
            <li><Link className="hover:text-violet" to="/">Home</Link></li>
            <li><Link className="hover:text-violet" to="/about">About</Link></li>
            <li><Link className="hover:text-violet" to="/services">Services</Link></li>
            <li><Link className="hover:text-violet" to="/faq">FAQ</Link></li>
            <li><Link className="hover:text-violet" to="/resources">Resources</Link></li>
            <li><Link className="hover:text-violet" to="/testimonials">Testimonials</Link></li>
            <li><Link className="hover:text-violet" to="/privacy">Privacy</Link></li>
            <li><Link className="hover:text-violet" to="/terms">Terms</Link></li>
          </ul>
        </div>

        <div className="space-y-3 text-sm text-indigo/90">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink">Contact</h2>
          <a className="font-medium text-ink hover:text-violet" href={`mailto:${siteMeta.email}`}>
            {siteMeta.email}
          </a>
          <p className="text-xs">{serviceDisclaimer}</p>
        </div>
      </Container>
    </footer>
  )
}
