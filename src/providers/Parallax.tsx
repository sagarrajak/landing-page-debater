'use client'

import { ParallaxProvider } from 'react-scroll-parallax'

function Parallax({ children }: { children: React.ReactNode }) {
	return <ParallaxProvider>{children}</ParallaxProvider>
}

export default Parallax
