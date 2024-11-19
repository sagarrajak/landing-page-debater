import Image from 'next/image'
import { CiMail } from 'react-icons/ci'
import { FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export const routes = []

function Footer() {
	return (
		<footer className="animate__animated animate__fadeIn w-full bg-primary-primary50">
			<div className="container m-auto flex w-full max-w-7xl flex-col justify-center gap-y-5 bg-primary-primary50 pb-20 pt-10 md:flex-row md:justify-between md:gap-y-0 md:px-2">
				<div
					id="leftContainer"
					className="flex w-full flex-col gap-5 md:w-auto"
				>
					<div className="flex flex-row items-center justify-center md:justify-start md:px-2">
						<Image
							src="/images/newlogo.svg"
							width={100}
							height={100}
							className="object-contain"
							alt="Loop studio logo"
						/>
						<div className="mt-4 self-start bg-gradient-to-r from-primary-primary500 to-red-500 bg-clip-text text-4xl font-bold text-transparent">
							Debater
						</div>
					</div>
				</div>
				<div id="rightContainer" className="flex flex-col items-center gap-2">
					<div className="flex flex-row justify-center gap-5">
						<FaXTwitter
							className="h-7 w-7 hover:cursor-pointer"
							color="white"
						/>
						<FaLinkedin
							className="h-7 w-7 object-cover hover:cursor-pointer"
							color="white"
						/>
						<CiMail
							className="h-7 w-7 object-cover hover:cursor-pointer"
							color="white"
						/>
					</div>
					<p className="font text-sm text-gray-400">
						© 2024 Debater. All Rights Reserved
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
