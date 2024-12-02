import { MetadataRoute } from 'next'
import { siteCofig } from '../../siteconfig'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: `${siteCofig.siteUrl}/sitemap.xml`,
	}
}
