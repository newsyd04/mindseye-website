import { Outlet } from 'react-router-dom'
import { Footer } from '../../components/Footer'
import { Navbar } from '../../components/Navbar'

export function RootLayout() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white bg-hero-glow text-ink">
      <a className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60]" href="#main-content">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
