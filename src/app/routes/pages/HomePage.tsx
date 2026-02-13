import { motion } from 'framer-motion'
import { CalendarClock, MessageCircleQuestion, MonitorPlay } from 'lucide-react'
import { Button } from '../../../components/Button'
import { CTABanner } from '../../../components/CTABanner'
import { Callout } from '../../../components/Callout'
import { Card } from '../../../components/Card'
import { FeatureList } from '../../../components/FeatureList'
import { Hero } from '../../../components/Hero'
import { PageHeader } from '../../../components/PageHeader'
import { Section } from '../../../components/Section'
import { Seo } from '../../../components/Seo'
import { homeFeatures, homeHero, howItWorks, serviceDisclaimer } from '../../../content/siteContent'

const stepIcons = [MessageCircleQuestion, CalendarClock, MonitorPlay]

export function HomePage() {
  return (
    <>
      <Seo
        title="Home"
        description="Structured wellbeing skills and psychoeducation delivered by Zoom in a practical, time-limited format."
        path="/"
      />

      <Section className="pt-8 sm:pt-14">
        <Hero title={homeHero.title} description={homeHero.description} trustLine={homeHero.trustLine} />
      </Section>

      <Section muted>
        <div className="space-y-8">
          <PageHeader title="What Mind's Eye Resilience & Wellbeing Offers:" eyebrow="Services" />
          <FeatureList items={homeFeatures} />
        </div>
      </Section>

      <Section>
        <div className="space-y-8">
          <PageHeader
            title="How it works"
            description="A simple and supportive process from first contact to structured online sessions."
            eyebrow="Process"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {howItWorks.map((step, index) => {
              const Icon = stepIcons[index]

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                >
                  <Card className="h-full border-lilac/20 transition-transform duration-200 hover:-translate-y-1">
                    <Icon className="h-6 w-6 text-violet" aria-hidden="true" />
                    <h3 className="mt-4 text-lg font-semibold text-ink">{step.title}</h3>
                    <p className="mt-2 text-sm text-indigo/90">{step.description}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Section>

      <Section muted>
        <Callout title="Service Scope" text={serviceDisclaimer} />
      </Section>

      <Section>
        <CTABanner
          title="Ready to learn practical skills?"
          description="Get in touch to request your free information pack and discuss the best format for you."
          buttonLabel="Get in touch"
          to="/contact"
        />
        <Button className="mt-5" to="/services" variant="outline">
          Explore services
        </Button>
      </Section>
    </>
  )
}
