// ⁡⁣⁣⁢​‌‌⁡⁢⁢⁢​‌‌‍‍Модуль 6. Заняття 12. ‍𝗗𝗢𝗠​⁡⁡​

// Form
// submit
// preventDefault

// keydown

// Modal
// 1 - Show modal when dom content loaded
// 2 - hide modal when click close btn

// addEventListener('mousemove', (event) => {
// 	console.log('event :>> ', event)
// })

// const btn = document.querySelector('button')

// btn.addEventListener('mouseenter', (ev) => {
// 	console.log('mouseenter :>> ', ev)
// })
// btn.addEventListener('click', (ev) => {
// 	console.log('click :>> ', ev)
// })
// btn.addEventListener('mouseleave', (ev) => {
// 	console.log('mouseleave :>> ', ev)
// })

// addEventListener('keydown', (ev) => {
// 	console.log('ev :>> ', ev)
// })

// const form = document.querySelector('.form')

// form.addEventListener('submit', (ev) => {
// 	ev.preventDefault()
// 	// console.log('ev :>> ', ev.target.elements.name.value)
// 	// console.log('ev :>> ', ev.target.elements.password.value)
// })

// const overlay = document.querySelector('.overlay')
// const btnClose = overlay.querySelector('.close')
// const btnOpen = document.querySelector('.open')

// const handleToggleModal = () => {
// 	overlay.classList.toggle('hide')
// }

// addEventListener('DOMContentLoaded', handleToggleModal)

// btnClose.addEventListener('click', handleToggleModal)

// btnOpen.addEventListener('click', handleToggleModal)

// addEventListener('keypress', (ev) => {
// 	console.log('ev :>> ', ev)
// })

// const persons = [
// 	{
// 		name: 'Michel Legrand',
// 		src: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Michel_Legrand_Cabourg_2015.jpg',
// 		alt: 'Michel Legrand conducting his orcherstra.',
// 		info: 'Michel Legrand conducting his orchestra.',
// 	},
// 	{
// 		name: 'Hanry Ford',
// 		src: 'https://www.thoughtco.com/thmb/u43KDJGdbvu_0qW8k_bDUf2z1-Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-515461052-dd32da349fa5499fb777ce0214a956e8.jpg',
// 		alt: 'Hanry Ford conducting his orcherstra.',
// 		info: 'Hanry Ford conducting his orchestra.',
// 	},
// 	{
// 		name: 'Rick Astley',
// 		src: 'https://m.media-amazon.com/images/M/MV5BOTNmZGU0MDYtNDE4Zi00NTE4LTg0ZGEtYzBjOWNjOTkwMzdlXkEyXkFqcGdeQXVyMTg3Nzg5ODY@._V1_.jpg',
// 		alt: 'Rick Astley conducting his orcherstra.',
// 		info: 'Rick Astley conducting his orchestra.',
// 	},
// 	{
// 		name: 'Nikola Tesla',
// 		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Tesla_circa_1890.jpeg/274px-Tesla_circa_1890.jpeg',
// 		alt: 'Nikola Tesla conducting his orcherstra.',
// 		info: 'Nikola Tesla conducting his orchestra.',
// 	},
// ]

// const personsCards = document.querySelector('.persons')
// const btnAddPerson = document.querySelector('.add')

// const createCard = ({ name, src, info, alt }) => {
// 	const personCard = `
// 	<div>
// 		<h1>${name}</h1>
// 		<img src=${src} alt=${alt} width='300'>
// 		<p>${info}</p>
// 	</div>
// `
// 	personsCards.insertAdjacentHTML('beforeend', personCard)
// }

// const handleClick = () => {
// 	const index = Math.round(Math.random() * (persons.length - 1))
// 	createCard(persons[index])
// }

// btnAddPerson.addEventListener('click', handleClick)

// const form = document.querySelector('.form')
// const list = document.querySelector('ul')

// form.addEventListener('submit', handleSubmit)

// 1 - get data from input ++
// 2 - create el Li with data ++
// 3 - add li to ul ++
// 4 - reset form

// function handleSubmit(ev) {
// 	ev.preventDefault()
// 	const { value } = ev.target.elements.todo
// 	// const elList = document.createElement('li')
// 	// elList.textContent = value
// 	validateValue(value)

// 	// list.append(elList)
// 	// list.insertAdjacentElement('beforeend', elList)
// 	form.reset()
// }

// function validateValue(value) {
// 	const elList = document.createElement('li')
// 	elList.textContent = value
// 	const arr = [...list.children]
// 	if (arr.length !== 0) {
// 		// arr.forEach((task) => {
// 		// 	if (value === task.textContent) {
// 		// 		return console.log('error :>> ')
// 		// 	} else {
// 		// 		list.append(elList)
// 		// 	}
// 		// })
// 		const findResult = arr.find((task) => {
// 			return task.textContent === value
// 		})
// 		// if (!findResult) list.append(elList)
// 		// else alert('Така задача вже існує')
// 		!findResult ? list.append(elList) : alert('Така задача вже існує')
// 	} else {
// 		list.append(elList)
// 	}
// }

// const select = document.querySelector('select')

// select.addEventListener('change', (ev) => {
// 	console.log('change :>> ', ev)
// })

// // select.addEventListener('input', (ev) => {
// // 	console.log('input :>> ', ev)
// // })

// const inputElement = document.querySelector('input')

// input.addEventListener('focus', (event) => {
// 	// console.log('ev :>> ', ev)
// 	// const capsOn = ev.getModifierState('CapsLock')
// 	console.log('object :>> ', event.getModifierState('Fn'))
// 	// console.log('object :>> ', ev.getModifierState('CapsLock'))
// })

addEventListener('keydown', (ev) => {
	console.log('object :>> ', ev.getModifierState('CapsLock'))
})
