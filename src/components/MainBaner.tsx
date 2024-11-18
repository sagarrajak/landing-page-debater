'use client'

import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax'

function MainBaner() {
	const backgroundImage: BannerLayer = {
		image: '/images/background.svg',
		translateY: [0, 50],
		opacity: [1, 0.3],
		shouldAlwaysCompleteAnimation: true,
	}

	return (
		<ParallaxBanner
			layers={[backgroundImage]}
			className="h-full w-full bg-gray-900"
		/>
	)
}

export default MainBaner
