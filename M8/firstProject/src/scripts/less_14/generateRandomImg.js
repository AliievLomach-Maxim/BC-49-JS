const generateRandomImg = () => {
	const randomNumber = Math.round(Math.random(0, 1) * 100)
	const img = document.createElement('img')
	img.src = 'https://picsum.photos/200/300?random=1'
	img.dataset.src = `https://picsum.photos/200/300?random=${randomNumber}`
	img.alt = 'image'
	img.classList = 'lazyload'
	return img
}

// export function fn(params) {}
// export function fn2(params) {}
// export function fn3(params) {}

export default generateRandomImg
