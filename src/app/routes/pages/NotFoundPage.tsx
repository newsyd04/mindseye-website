import { Button } from '../../../components/Button'
import { Card } from '../../../components/Card'
import { Section } from '../../../components/Section'
import { Seo } from '../../../components/Seo'

export function NotFoundPage() {
  return (
    <>
      <Seo title="Not Found" description="The page you requested could not be found." path="/404" />
      <Section className="pt-16 sm:pt-24">
        <Card className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet">404</p>
          <h1 className="mt-2 font-display text-4xl text-ink">Page Not Found</h1>
          <p className="mt-3 text-indigo/85">The page you tried to access does not exist.</p>
          <Button className="mt-6" to="/">
            Back to home
          </Button>
        </Card>
      </Section>
    </>
  )
}
