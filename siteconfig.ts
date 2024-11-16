export const siteCofig = {
	orgName: 'Debater',
	orgEmail: 'debater@life.com',
	siteUrl: process.env.SITE_URL || 'https://thedebater.co',
	icons: {},
	allLinks: [{}],
}

export type SiteConfig = typeof siteCofig
