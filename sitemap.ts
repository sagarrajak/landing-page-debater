import { MetadataRoute } from 'next'
import { siteCofig } from './siteconfig'
export type SitemapFile<X> = X extends (infer T)[] ? T : never

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const home: SitemapFile<MetadataRoute.Sitemap> = {
		url: siteCofig.siteUrl,
		lastModified: new Date().toString(),
		changeFrequency: 'daily',
		priority: 0.7,
	}
	return [home]
}
