import Parallax from '@/providers/Parallax'
import 'animate.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

const monserrat = Montserrat({
	style: ['normal'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-monse',
	subsets: ['latin'],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${monserrat.variable} antialiased`}>
				<Parallax>{children}</Parallax>
			</body>
		</html>
	)
}
