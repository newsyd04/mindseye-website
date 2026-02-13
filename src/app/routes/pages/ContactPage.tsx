import { ArrowRight, Mail, Monitor } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card } from '../../../components/Card'
import { PageHeader } from '../../../components/PageHeader'
import { Section } from '../../../components/Section'
import { Seo } from '../../../components/Seo'
import { siteMeta } from '../../../content/siteContent'

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contact"
        description="Contact Mind's Eye Resilience & Wellbeing by email for queries and your free information pack."
        path="/contact"
      />

      <Section className="pt-12 sm:pt-20">
        <div className="mx-auto max-w-3xl space-y-6">
          <PageHeader
            eyebrow="Contact"
            title="Contact"
            description="Please email with any queries. There is no obligation to book."
          />
          <Card>
            <p className="text-sm text-indigo/85">Email for your Free Information Pack via</p>
            <a
              className="mt-3 inline-flex items-center gap-2 text-lg font-semibold text-ink hover:text-violet"
              href={`mailto:${siteMeta.email}`}
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              {siteMeta.email}
            </a>
          </Card>

          <Card className="space-y-4">
            <p className="flex items-center gap-2 text-sm text-indigo/90">
              <Monitor className="h-4 w-4 text-violet" aria-hidden="true" />
              Online sessions via Zoom
            </p>
            <Link className="inline-flex items-center gap-2 text-sm font-semibold text-violet hover:text-indigo" to="/faq">
              Visit FAQ for common questions
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Card>
        </div>
      </Section>
    </>
  )
}
