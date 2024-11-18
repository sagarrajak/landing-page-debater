'use client'

import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax'

const generateBlobs = (count: number) => {
	const blobs = []
	for (let i = 0; i < count; i++) {
		const left = Math.random() * window.innerWidth
		const top = Math.random() * window.innerHeight

		blobs.push(
			<div
				key={i}
				className="bg-primary-primary500 animate__animated animate__fadeInLeft absolute h-[9em] w-[9em] rounded-full"
				style={{ left: `${left}px`, top: `${top}px` }}
			></div>
		)
	}
	return blobs
}

const generateBlobsLayer2 = (count: number) => {
	const blobs = []
	for (let i = 0; i < count; i++) {
		const left = Math.random() * window.innerWidth
		const top = Math.random() * window.innerHeight

		blobs.push(
			<div
				key={i}
				className="bg-primary-primary400 animate__animated animate__fadeInLeft absolute h-[6em] w-[6em] rounded-full opacity-30"
				style={{ left: `${left}px`, top: `${top}px`, filter: 'blur(2px)' }}
			></div>
		)
	}
	return blobs
}

const generateBlobsLayer3 = (count: number) => {
	const blobs = []
	for (let i = 0; i < count; i++) {
		const left = Math.random() * window.innerWidth
		const top = Math.random() * window.innerHeight

		blobs.push(
			<div
				key={i}
				className="bg-primary-primary400 animate__animated animate__fadeInLeft absolute h-[3em] w-[3em] rounded-full opacity-10"
				style={{ left: `${left}px`, top: `${top}px`, filter: 'blur(5px)' }}
			></div>
		)
	}
	return blobs
}

export const Component = () => {
	const blogLayers1: BannerLayer = {
		shouldAlwaysCompleteAnimation: true,
		children: <div className="absolute">{generateBlobs(3)}</div>,
		translateY: [0, 100],
		speed: 40,
	}
	const blogLayers2: BannerLayer = {
		shouldAlwaysCompleteAnimation: true,
		children: <div className="absolute">{generateBlobsLayer2(10)}</div>,
		translateY: [0, 50],
		speed: 20,
	}
	const blogLayers3: BannerLayer = {
		shouldAlwaysCompleteAnimation: true,
		children: <div className="absolute">{generateBlobsLayer3(30)}</div>,
		translateY: [0, 30],
		speed: 0,
	}

	return (
		<>
			<ParallaxBanner
				layers={[
					blogLayers1,
					blogLayers2,
					blogLayers3,
					{ image: '/images/background.svg' },
				]}
				className="flex aspect-[0.7] flex-col justify-center md:aspect-[2/1]"
			>
				<div className="m-auto flex w-[96%] flex-col items-start justify-center gap-10 rounded-lg bg-white/30 p-12 backdrop-blur-lg md:px-28 md:py-28">
					<h1 className="font-monse animate__animated animate__fadeIn animate__delay-1s text-primary-primary100 text-5xl font-bold lg:text-8xl">
						Next generation of Debate
					</h1>
					<p className="animate__animated animate__fadeIn animate__delay-1s text-primary-primary200 mt-4 text-2xl font-medium opacity-70 lg:text-3xl">
						Where echo chambers clash, ideas.
					</p>
				</div>
			</ParallaxBanner>
		</>
	)
}

export default Component
