import { BookOpenText, NotebookPen } from 'lucide-react'
import { Card } from '../../../components/Card'
import { PageHeader } from '../../../components/PageHeader'
import { Section } from '../../../components/Section'
import { Seo } from '../../../components/Seo'
import { helpfulLinks, practicalSkills } from '../../../content/siteContent'

export function ResourcesPage() {
  return (
    <>
      <Seo
        title="Resources"
        description="A static mini-library of practical skill ideas and supportive wellbeing resource prompts."
        path="/resources"
      />

      <Section className="pt-12 sm:pt-20">
        <div className="space-y-8">
          <PageHeader
            eyebrow="Resources"
            title="Mini wellbeing library"
            description="A small collection of practical ideas and neutral prompts for everyday support."
          />

          <div className="space-y-5">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-ink">
              <NotebookPen className="h-5 w-5 text-violet" aria-hidden="true" />
              Practical skills
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {practicalSkills.map((item) => (
                <Card key={item.title} className="h-full transition-transform duration-200 hover:-translate-y-1">
                  <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm text-indigo/90">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-ink">
              <BookOpenText className="h-5 w-5 text-violet" aria-hidden="true" />
              Helpful links
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {helpfulLinks.map((item) => (
                <Card key={item.title} className="h-full transition-transform duration-200 hover:-translate-y-1">
                  <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm text-indigo/90">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
