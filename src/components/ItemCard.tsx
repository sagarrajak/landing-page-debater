function ItemCard() {
	return (
		<div className="font-nunito items-left flex h-[16em] w-[18em] flex-col justify-center gap-[0.75em] rounded-[1.5em] border-2 border-[rgba(75,30,133,0.5)] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] p-[1em] text-white backdrop-blur-[12px]">
			<div>
				<h1 className="text-[2em] font-medium">Heading</h1>
				<p className="text-[0.85em]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorum
					blanditiis pariatur sequi magni.
				</p>
			</div>
		</div>
	)
}

export default ItemCard
