import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MainBaner from '@/components/MainBaner'
import { Metadata } from 'next'
import { siteCofig } from '../../siteconfig'

export function generateMetadata(): Metadata {
	return {
		title: siteCofig.title,
		description: siteCofig.description,
		applicationName: siteCofig.applicationName,
		creator: siteCofig.creator,
		keywords: siteCofig.keywords,
		publisher: siteCofig.publisher,
		openGraph: {
			title: siteCofig.title,
			description: siteCofig.description,
			url: siteCofig.openGraph.url,
			type: 'website',
		},
	}
}

export default function Home() {
	return (
		<main>
			<Header />
			<MainBaner />
			<Footer />
		</main>
	)
}
