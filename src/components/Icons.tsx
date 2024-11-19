import { HTMLAttributes } from 'react'

export type SVGProps = HTMLAttributes<SVGElement>

export const Icons = {
	sectionBG1: (props: SVGProps) => (
		<svg
			id="visual"
			viewBox="0 0 900 600"
			width="900"
			height="600"
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			{...props}
		>
			<rect x="0" y="0" width="900" height="600" fill="#f1e6f9"></rect>
			<g fill="#5a3b84">
				<circle r="147" cx="243" cy="129"></circle>
				<circle r="65" cx="618" cy="47"></circle>
				<circle r="88" cx="445" cy="568"></circle>
			</g>
		</svg>
	),
}
