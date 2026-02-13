import { Accordion } from '../../../components/Accordion'
import { Callout } from '../../../components/Callout'
import { PageHeader } from '../../../components/PageHeader'
import { Section } from '../../../components/Section'
import { Seo } from '../../../components/Seo'
import { faqItems, serviceDisclaimer } from '../../../content/siteContent'

export function FaqPage() {
  return (
    <>
      <Seo
        title="FAQ"
        description="Frequently asked questions about the format, scope, and delivery of skills-based wellbeing support."
        path="/faq"
      />

      <Section className="pt-12 sm:pt-20">
        <div className="space-y-8">
          <PageHeader
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Answers to common questions about session format, scope, and getting started."
          />
          <Accordion items={faqItems} />
        </div>
      </Section>

      <Section muted>
        <Callout title="Service Scope" text={serviceDisclaimer} />
      </Section>
    </>
  )
}
