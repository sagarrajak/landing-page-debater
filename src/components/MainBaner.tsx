'use client'

import React, { useCallback, useRef, useState } from 'react'
import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax'
const FIRST_COUNT = 5
const SECOND_COUNT = 7
const THIRD_COUNT = 10

export const Component = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 })
	const ref = useRef<HTMLDivElement>(null)

	const firstPositions = React.useMemo(() => {
		const allPositons = []
		if (typeof window === 'undefined') {
			return []
		}
		for (let i = 0; i < FIRST_COUNT; i++) {
			const left = Math.random() * window.innerWidth
			const top = Math.random() * window.innerHeight
			allPositons.push({ left, top })
		}
		return allPositons
	}, [])

	const secondPositions = React.useMemo(() => {
		const allPositons = []
		if (typeof window === 'undefined') {
			return []
		}
		for (let i = 0; i < SECOND_COUNT; i++) {
			const left = Math.random() * window.innerWidth
			const top = Math.random() * window.innerHeight
			allPositons.push({ left, top })
		}
		return allPositons
	}, [])

	const thirdsPositions = React.useMemo(() => {
		const allPositons = []
		if (typeof window === 'undefined') {
			return []
		}
		for (let i = 0; i < THIRD_COUNT; i++) {
			const left = Math.random() * window.innerWidth
			const top = Math.random() * window.innerHeight
			allPositons.push({ left, top })
		}
		return allPositons
	}, [])

	const generateBlobs = useCallback(
		() => {
			const blobs = []
			if (!firstPositions || firstPositions.length <= 0) return []
			for (let i = 0; i < FIRST_COUNT; i++) {
				const left = firstPositions[i].left
				const top = firstPositions[i].top

				blobs.push(
					<div
						key={`blob-layer1-${i}`}
						className={
							(i % 2 == 0 ? 'bg-blue-700 ' : 'bg-red-700 ') +
							'animate__animated animate__fadeInLeft absolute h-[8em] w-[8em] rounded-full'
						}
						style={{
							left: `${left}px`,
							top: `${top}px`,
						}}
					></div>
				)
			}
			return blobs
		},
		[firstPositions] // No dependencies, will not change
	)

	const generateBlobsLayer2 = useCallback(
		() => {
			const blobs = []
			if (!secondPositions || secondPositions.length <= 0) return []
			for (let i = 0; i < SECOND_COUNT; i++) {
				const left = secondPositions[i].left
				const top = secondPositions[i].top

				blobs.push(
					<div
						key={`blob-layer2-${i}`}
						className={
							(i % 2 == 0 ? 'bg-blue-700 ' : 'bg-red-700 ') +
							'animate__animated animate__fadeInLeft absolute h-[6em] w-[6em] rounded-full opacity-30'
						}
						style={{
							left: `${left}px`,
							top: `${top}px`,
							filter: 'blur(5px)',
						}}
					></div>
				)
			}
			return blobs
		},
		[secondPositions] // No dependencies, will not change
	)

	const generateBlobsLayer3 = React.useCallback(() => {
		const blobs = []
		if (!thirdsPositions || thirdsPositions.length <= 0) return []
		for (let i = 0; i < THIRD_COUNT; i++) {
			const left = thirdsPositions[i].left
			const top = thirdsPositions[i].top
			blobs.push(
				<div
					key={i}
					className={
						(i % 2 == 0 ? 'bg-blue-700 ' : 'bg-red-700 ') +
						'animate__animated animate__fadeInLeft absolute h-[3em] w-[3em] rounded-full bg-primary-primary400 opacity-10'
					}
					style={{
						left: `${left}px`,
						top: `${top}5px`,
						filter: 'blur(7px)',
					}}
				></div>
			)
		}
		return blobs
	}, [thirdsPositions])

	const blogLayers1: BannerLayer = React.useMemo(
		() => ({
			shouldAlwaysCompleteAnimation: true,
			children: (
				<div
					className="absolute z-30 hidden md:block"
					style={{
						transform: `translate(${position.x}px, ${position.y}px)`,
					}}
				>
					{generateBlobs()}
				</div>
			),
			speed: -20,
		}),
		[generateBlobs, position.x, position.y]
	)

	const blogLayers2: BannerLayer = React.useMemo(
		() => ({
			shouldAlwaysCompleteAnimation: true,
			children: (
				<div
					className="absolute z-10 hidden md:block"
					style={{
						transform: `translate(${position.x * 0.5}px, ${position.y * 0.5}px)`,
					}}
				>
					{generateBlobsLayer2()}
				</div>
			),
			speed: -10,
		}),
		[generateBlobsLayer2, position.x, position.y]
	)

	const blogLayers3: BannerLayer = React.useMemo(
		() => ({
			shouldAlwaysCompleteAnimation: true,
			children: (
				<div
					className="absolute z-0"
					style={{
						transform: `translate(${position.x * 0.25}px, ${position.y * 0.25}px)`,
					}}
				>
					{generateBlobsLayer3()}
				</div>
			),
			speed: -1,
		}),
		[generateBlobsLayer3, position.x, position.y]
	)

	const gradientContainer: BannerLayer = {
		opacity: [0.7, 1],
		shouldAlwaysCompleteAnimation: true,
		expanded: false,
		children: <div className="gradient_container absolute inset-0"></div>,
	}

	const backgroundImageContainer: BannerLayer = {
		opacity: [1, 0.2],
		shouldAlwaysCompleteAnimation: true,
		expanded: false,
		children: (
			<div className="flex h-full w-full flex-row items-center justify-around">
				<div className="inset-0 h-full w-full bg-[url('/images/meeting.png')] bg-contain bg-no-repeat md:w-[120%] md:bg-cover"></div>
			</div>
		),
	}

	const handleMouseMove = (e: React.MouseEvent) => {
		const container = ref.current
		if (!container) return
		const { left, top, width, height } = container.getBoundingClientRect()
		const relX = (e.pageX - left - width / 2) / (width / 2) // Cursor X relative to container
		const relY = (e.pageY - top - height / 2) / (height / 2) // Cursor Y relative to container
		setPosition({ x: relX * 40, y: relY * 40 })
	}

	return (
		<div ref={ref} onMouseMove={handleMouseMove}>
			<ParallaxBanner
				layers={[
					gradientContainer,
					backgroundImageContainer,
					blogLayers1,
					blogLayers2,
					blogLayers3,
					// { image: '/images/background.svg', opacity: [0.8, 0.1] },
				]}
				className="flex aspect-[0.7] h-full w-full flex-col items-center justify-center md:aspect-[2/1]"
			>
				<div className="animate__animated animate__fadeInRight tm-auto flex w-[94%] flex-col items-start justify-center gap-1 overflow-hidden rounded-xl bg-white/90 p-8 shadow-sm shadow-white backdrop-blur-2xl md:m-auto md:h-auto md:max-w-7xl md:px-28 md:py-28">
					<div className="bg_tool_background absolute right-0 top-0 h-[12em] w-[12em] -translate-y-1/4 translate-x-1/4 rounded-full bg-clip-text opacity-60 shadow shadow-primary-primary300 transition-all duration-100 hover:shadow-md md:h-[35em] md:w-[35em]"></div>
					<h1 className="animate__animated animate__fadeIn animate__delay-1s bg-clip-text font-monse text-4xl font-bold text-primary-primary100 md:text-7xl">
						Welcome to{' '}
						<span className="mt-4 self-start bg-gradient-to-r from-primary-primary500 to-red-500 bg-clip-text font-bold text-transparent text-opacity-40">
							Debater
						</span>
						<br />
						<span className="text-xl text-opacity-70 lg:text-3xl">
							The Ultimate Debate Platform
						</span>
					</h1>
				</div>
			</ParallaxBanner>
		</div>
	)
}

export default Component
