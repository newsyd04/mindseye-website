import { Card } from '../../../components/Card'
import { PageHeader } from '../../../components/PageHeader'
import { Section } from '../../../components/Section'
import { Seo } from '../../../components/Seo'
import { termsContent } from '../../../content/siteContent'

export function TermsPage() {
  return (
    <>
      <Seo
        title="Terms"
        description="Terms of use for Mind's Eye Resilience & Wellbeing website and educational services."
        path="/terms"
      />

      <Section className="pt-12 sm:pt-20">
        <div className="space-y-8">
          <PageHeader
            eyebrow="Policy"
            title="Terms"
            description="These terms explain the informational and educational nature of the website and services."
          />
          <Card className="space-y-4 text-indigo/90">
            {termsContent.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </Card>
        </div>
      </Section>
    </>
  )
}
