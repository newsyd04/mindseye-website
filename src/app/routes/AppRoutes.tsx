import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { RootLayout } from './RootLayout'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { FaqPage } from './pages/FaqPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { ResourcesPage } from './pages/ResourcesPage'
import { ServicesPage } from './pages/ServicesPage'
import { TermsPage } from './pages/TermsPage'
import { TestimonialsPage } from './pages/TestimonialsPage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

export function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}
