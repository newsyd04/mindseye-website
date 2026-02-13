import { Helmet } from 'react-helmet-async'
import { siteMeta } from '../content/siteContent'

type SeoProps = {
  title: string
  description: string
  path?: string
}

export function Seo({ title, description, path = '/' }: SeoProps) {
  const url = `${siteMeta.siteUrl}${path}`

  return (
    <Helmet>
      <title>{`${title} | ${siteMeta.siteName}`}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteMeta.siteName} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${siteMeta.siteUrl}/og-image.svg`} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}
