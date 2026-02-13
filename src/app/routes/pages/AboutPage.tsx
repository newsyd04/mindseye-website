import { motion } from 'framer-motion'
import headshot from '../../../assets/headshot.png'
import { Card } from '../../../components/Card'
import { PageHeader } from '../../../components/PageHeader'
import { Section } from '../../../components/Section'
import { Seo } from '../../../components/Seo'
import { aboutApproach, aboutIntro } from '../../../content/siteContent'

export function AboutPage() {
  return (
    <>
      <Seo
        title="About Me"
        description="Hello, I'm Danielle. Learn about my practical, supportive, and skills-focused approach."
        path="/about"
      />

      <Section className="pt-12 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <Card className="overflow-hidden p-0">
            <img
              src={headshot}
              alt="Danielle"
              className="h-full min-h-80 w-full object-cover"
              loading="lazy"
            />
          </Card>

          <div className="space-y-6">
            <PageHeader eyebrow="About Me" title="Hello, I'm Danielle" description={aboutIntro} />
            <Card>
              <h2 className="font-display text-2xl text-ink sm:text-3xl">My Approach</h2>
              <div className="mt-4 space-y-4 text-indigo/90">
                {aboutApproach.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Card>
          </div>
        </motion.div>
      </Section>
    </>
  )
}
