const loader = document.querySelector('.loader')

export function isLoading(param) {
	if (param) loader.style.display = 'block'
	else loader.style.display = 'none'
}
