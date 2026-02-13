import { Quote } from 'lucide-react'
import { Card } from '../../../components/Card'
import { PageHeader } from '../../../components/PageHeader'
import { Section } from '../../../components/Section'
import { Seo } from '../../../components/Seo'
import { testimonialPlaceholders } from '../../../content/siteContent'

export function TestimonialsPage() {
  return (
    <>
      <Seo
        title="Testimonials"
        description="Testimonials section with placeholder cards while client feedback is being prepared."
        path="/testimonials"
      />

      <Section className="pt-12 sm:pt-20">
        <div className="space-y-8">
          <PageHeader
            eyebrow="Testimonials"
            title="Client feedback"
            description="Testimonials are being prepared. Placeholder cards are shown below."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {testimonialPlaceholders.map((item, index) => (
              <Card key={`${item}-${index}`} className="h-full">
                <Quote className="h-5 w-5 text-violet" aria-hidden="true" />
                <p className="mt-3 text-sm text-indigo/90">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
