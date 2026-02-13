import { motion } from 'framer-motion'
import { Card } from '../../../components/Card'
import { Callout } from '../../../components/Callout'
import { FeatureList } from '../../../components/FeatureList'
import { PageHeader } from '../../../components/PageHeader'
import { Section } from '../../../components/Section'
import { Seo } from '../../../components/Seo'
import { serviceDisclaimer, services, whatToExpect } from '../../../content/siteContent'

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Services"
        description="Explore small group programmes, individual skills sessions, and Decider Skills teaching delivered online via Zoom."
        path="/services"
      />

      <Section className="pt-12 sm:pt-20">
        <div className="space-y-8">
          <PageHeader
            eyebrow="Services"
            title="Skills-based wellbeing support"
            description="Support is delivered through structured educational sessions online over Zoom."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
              >
                <Card className="h-full transition-transform duration-200 hover:-translate-y-1">
                  <h2 className="text-xl font-semibold text-ink">{service.title}</h2>
                  <p className="mt-3 text-sm text-indigo/90">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section muted>
        <div className="space-y-8">
          <PageHeader
            eyebrow="What To Expect"
            title="Session format"
            description="A practical, educational style with clear structure and supportive guidance."
          />
          <FeatureList items={whatToExpect} />
        </div>
      </Section>

      <Section>
        <Callout title="Service Scope" text={serviceDisclaimer} />
      </Section>
    </>
  )
}
