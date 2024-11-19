'use client'

import React, { useCallback, useRef, useState } from 'react'
import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax'
const FIRST_COUNT = 5
const SECOND_COUNT = 10
const THIRD_COUNT = 20

export const Component = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 })
	const ref = useRef<HTMLDivElement>(null)

	const firstPositions = React.useMemo(() => {
		const allPositons = []
		for (let i = 0; i < FIRST_COUNT; i++) {
			const left = Math.random() * window.innerWidth
			const top = Math.random() * window.innerHeight
			allPositons.push({ left, top })
		}
		return allPositons
	}, [])

	const secondPositions = React.useMemo(() => {
		const allPositons = []
		for (let i = 0; i < SECOND_COUNT; i++) {
			const left = Math.random() * window.innerWidth
			const top = Math.random() * window.innerHeight
			allPositons.push({ left, top })
		}
		return allPositons
	}, [])

	const thirdsPositions = React.useMemo(() => {
		const allPositons = []
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
			for (let i = 0; i < FIRST_COUNT; i++) {
				const left = firstPositions[i].left
				const top = firstPositions[i].top

				blobs.push(
					<div
						key={`blob-layer1-${i}`}
						className="animate__animated animate__fadeInLeft absolute h-[9em] w-[9em] rounded-full bg-primary-primary500"
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
			for (let i = 0; i < SECOND_COUNT; i++) {
				const left = secondPositions[i].left
				const top = secondPositions[i].top

				blobs.push(
					<div
						key={`blob-layer2-${i}`}
						className="animate__animated animate__fadeInLeft absolute h-[6em] w-[6em] rounded-full bg-primary-primary400 opacity-30"
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
		for (let i = 0; i < THIRD_COUNT; i++) {
			const left = thirdsPositions[i].left
			const top = thirdsPositions[i].top
			blobs.push(
				<div
					key={i}
					className="animate__animated animate__fadeInLeft absolute h-[3em] w-[3em] rounded-full bg-primary-primary400 opacity-10"
					style={{
						left: `${left}px`,
						top: `${top}px`,
						filter: 'blur(10px)',
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
					className="absolute"
					style={{
						transform: `translate(${position.x}px, ${position.y}px)`,
					}}
				>
					{generateBlobs()}
				</div>
			),
			speed: 50,
		}),
		[generateBlobs, position.x, position.y]
	)

	const blogLayers2: BannerLayer = React.useMemo(
		() => ({
			shouldAlwaysCompleteAnimation: true,
			children: (
				<div
					className="absolute"
					style={{
						transform: `translate(${position.x * 0.5}px, ${position.y * 0.5}px)`,
					}}
				>
					{generateBlobsLayer2()}
				</div>
			),
			speed: 25,
		}),
		[generateBlobsLayer2, position.x, position.y]
	)

	const blogLayers3: BannerLayer = React.useMemo(
		() => ({
			shouldAlwaysCompleteAnimation: true,
			children: (
				<div
					className="absolute"
					style={{
						transform: `translate(${position.x * 0.25}px, ${position.y * 0.25}px)`,
					}}
				>
					{generateBlobsLayer3()}
				</div>
			),
			speed: 1,
		}),
		[generateBlobsLayer3, position.x, position.y]
	)

	const handleMouseMove = (e: React.MouseEvent) => {
		const container = ref.current
		if (!container) return
		const { left, top, width, height } = container.getBoundingClientRect()
		const relX = (e.pageX - left - width / 2) / (width / 2) // Cursor X relative to container
		const relY = (e.pageY - top - height / 2) / (height / 2) // Cursor Y relative to container
		setPosition({ x: relX * 20, y: relY * 20 })
	}

	return (
		<>
			<ParallaxBanner
				layers={[
					blogLayers1,
					blogLayers2,
					blogLayers3,
					{ image: '/images/background.svg', opacity: [0.9, 0] },
				]}
				className="flex aspect-[0.7] flex-col justify-center md:aspect-[2/1]"
			>
				<div
					onMouseMove={handleMouseMove}
					ref={ref}
					className="animate__animated animate__fadeInRight tm-auto flex w-[99%] flex-col items-start justify-center gap-10 rounded-lg bg-white/30 p-12 backdrop-blur-lg md:px-28 md:py-28"
				>
					<h1 className="animate__animated animate__fadeIn animate__delay-1s font-monse text-5xl font-bold text-primary-primary100 lg:text-8xl">
						Welcome to{' '}
						<span className="mt-4 self-start bg-gradient-to-r from-primary-primary500 to-red-500 bg-clip-text font-bold text-transparent">
							Debater
						</span>
						- The Ultimate Debate Platform
					</h1>
					<p className="animate__animated animate__fadeIn animate__delay-1s mt-4 text-2xl font-medium text-primary-primary200 opacity-70 lg:text-3xl">
						Where echo chambers clash.
					</p>
				</div>
			</ParallaxBanner>
		</>
	)
}

export default Component
