import { Card } from '../../../components/Card'
import { PageHeader } from '../../../components/PageHeader'
import { Section } from '../../../components/Section'
import { Seo } from '../../../components/Seo'
import { privacyContent } from '../../../content/siteContent'

export function PrivacyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="Privacy information for Mind's Eye Resilience & Wellbeing website enquiries."
        path="/privacy"
      />

      <Section className="pt-12 sm:pt-20">
        <div className="space-y-8">
          <PageHeader
            eyebrow="Policy"
            title="Privacy Policy"
            description="This is a simple informational privacy notice for website visitors."
          />
          <Card className="space-y-4 text-indigo/90">
            {privacyContent.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </Card>
        </div>
      </Section>
    </>
  )
}
