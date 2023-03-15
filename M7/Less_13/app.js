// ⁡⁣⁣⁢​‌‍‌​‌‌‍‍ ‍⁡⁢⁢⁢​‌‌‍Модуль 𝟳. Заняття 𝟭𝟯. 𝗕𝘂𝗯𝗯𝗹𝗶𝗻𝗴​⁡

// const div1 = document.querySelector('.div1')
// const div2 = div1.querySelector('.div2')
// const btn = div2.querySelector('.btn-1')
// const btn2 = div2.querySelector('.btn-2')
// const btn3 = div2.querySelector('.btn-3')

// div1.addEventListener('click', (ev) => {
// 	console.log('div1 :>> ', ev)
// })

// div2.addEventListener('click', (ev) => {
// 	// ev.stopPropagation()
// 	console.log('div2 :>> ', ev)
// })

// btn.addEventListener('click', (ev) => {
// 	// ev.stopImmediatePropagation()
// 	console.log('btn :>> ', ev)
// })

// btn.addEventListener('click', (ev) => {
// 	console.log('btn click :>> ', ev)
// })

// btn2.addEventListener('click', (ev) => {
// 	console.log('btn2 :>> ', ev)
// })
// btn3.addEventListener('click', (ev) => {
// 	console.log('btn3 :>> ', ev)
// })

// const card = document.querySelector('.card')
// const btn = card.querySelector('button')
// const img = card.querySelector('img')

// card.addEventListener('click', (ev) => {
// 	console.log('ev :>> ', ev)
// })

// btn.addEventListener('click', (ev) => {
// 	ev.stopPropagation()
// 	console.log('btn :>> ', ev)
// })

// img.addEventListener('click', (ev) => {
// 	ev.stopPropagation()
// 	console.log('img :>> ', ev)
// })

// const card = document.querySelector('.col')
// const btn = card.querySelector('button')
// const img = card.querySelector('img')

// card.addEventListener('click', (ev) => {
// 	// console.log('ev :>> ', ev.target)
// 	// console.log('ev :>> ', ev.currentTarget)
// 	if (ev.target.localName === 'button') console.log('Btn')
// 	if (ev.target.localName === 'img') console.log('Img')
// 	if (ev.target === ev.currentTarget) console.log('currentTarget')
// })

// const row = document.querySelector('.row')
// const arrCard = [...row.children]
// const arrCard = Array.from(row.children)

// arrCard.forEach((col) => {
// 	col.addEventListener('click', (ev) => {
// 		// ev.currentTarget.firstElementChild.classList.add('bg-primary')
// 		if (
// 			ev.target.localName === 'button' &&
// 			!ev.target.classList.value.includes('no-Btn')
// 		) {
// 			ev.target.classList = 'btn btn-success'
// 			ev.currentTarget.firstElementChild.classList.add('bg-primary')
// 		}

// 		if (ev.target.localName === 'img') console.log('Img', ev.target)
// 		if (ev.target === ev.currentTarget)
// 			console.log('currentTarget', ev.currentTarget)
// 	})
// })

// const row = document.querySelector('.row')

// row.addEventListener('click', (ev) => {
// 	if (
// 		ev.target.localName === 'button' &&
// 		!ev.target.classList.value.includes('no-Btn')
// 	) {
// 		ev.target.classList = 'btn btn-success'
// 		ev.currentTarget.firstElementChild.classList.add('bg-primary')
// 	}

// 	if (ev.target.localName === 'img') console.log('Img', ev.target)
// 	if (ev.target === ev.currentTarget)
// 		console.log('currentTarget', ev.currentTarget)
// })

// const row = document.querySelector('.row')

// row.addEventListener('click', ({ target }) => {
// 	if (target.localName === 'a') {
// 		const title = target.parentElement.firstElementChild.textContent
// 		const link = target.parentElement.querySelector('a')

// 		link.href = `https://ru.wikipedia.org/wiki/${title}`
// 	}
// 	console.log('target :>> ', target)
// })

// const arrCard = [...row.children]

// arrCard.forEach((col) => {
// 	col.firstElementChild.firstElementChild.addEventListener(
// 		'mouseenter',
// 		(ev) => {
// 			console.log('ev :>> ', ev)
// 		}
// 	)
// })

// To remove all children from an element:

// while (row.firstChild) {
// row.removeChild(row.firstChild)
// }

// row.innerHTML = ''
