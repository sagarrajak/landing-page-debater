export function getScreenSize() {
	const width = window.innerWidth
	if (width <= 480) return 'sm'
	if (width <= 768) return 'md'
	if (width <= 976) return 'lg'
	return 'xl' // Default for anything above 1024px
}
