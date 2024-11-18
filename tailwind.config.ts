import type { Config } from 'tailwindcss'
const primaryPalette = {
	primary50: '#2f1f43',
	primary100: '#482e64',
	primary200: '#5a3b84',
	primary300: '#6246b4',
	primary400: '#714cc5',
	primary500: '#8a65c9',
	primary600: '#a08bdb',
	primary700: '#b8ace5',
	primary800: '#dac7ed',
	primary900: '#f1e6f9',
}

const grayTheme = {
	gray50: '#323053',
	gray100: '#414144',
	gray200: '#545457',
	gray300: '#6c6b70',
	gray400: '#77767b',
	gray500: '#929195',
	gray600: '#a4a3a7',
	gray700: '#c0c0c2',
	gray800: '#d5d5d6',
	gray900: '#f1f1f2',
}

const redTheme = {
	red50: '#510c11',
	red100: '#6a0f16',
	red200: '#88141c',
	red300: '#af1924',
	red400: '#c01c28',
	red500: '#cd4953',
	red600: '#d5676f',
	red700: '#e2979c',
	red800: '#ebb9bc',
	red900: '#f9e8ea',
}

const blueTheme = {
	blue50: '#0b284c',
	blue100: '#0e3463',
	blue200: '#124380',
	blue300: '#1856a4',
	blue400: '#1a5fb4',
	blue500: '#487fc3',
	blue600: '#6694cd',
	blue700: '#96b5dd',
	blue800: '#b8cde8',
	blue900: '#e8eff8',
}

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primary: primaryPalette,
				gray: grayTheme,
				red: redTheme,
				blue: blueTheme,
			},
			fontFamily: {
				monse: ['Montserrat'],
			},
		},
	},
	plugins: [],
}
export default config
