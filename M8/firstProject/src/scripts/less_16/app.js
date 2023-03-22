// const someVar = 'Alex' // str
// const someVar = 30 //number
// const someVar = [1, 2, 3, 4, 5] //array
// const someVar = null //null
// const someVar = {
// 	name: 'Alex',
// 	age: 30,
// 	sayName() {
// 		return this.name
// 	},
// } //obj

// const someVar = () => {
// 	return 10
// } //function

// try {
// 	console.log('object')
// 	console.log('object')
// 	console.log('object')
// 	console.log('object')
// 	console.log('object')
// 	console.log('object')
// 	console.log('object')
// 	const varJson = JSON.stringify(someVar)
// 	console.log('varJson :>> ', varJson)

// 	const parseVar = JSON.parse(varJson)
// 	console.log('parseVar :>> ', parseVar)

// 	console.log('parseVar :>> ', typeof parseVar)
// } catch (error) {
// 	console.log('Some error ')
// }

// const someVar = {
// 	name: 'Alex',
// 	age: 30,
// 	sayName() {
// 		return this.name
// 	},
// } //obj

// const varJson = JSON.stringify(someVar)
// localStorage.setItem('someVar', varJson)
// localStorage.setItem('someVar1', '123')
// localStorage.setItem('someVar2', '321')

// localStorage.removeItem('someVar1')

// localStorage.clear()

// const localVar = localStorage.getItem('someVar')
// const parseVar = JSON.parse(localVar)
// console.log('parseVar :>> ', parseVar)
// console.log('parseVar :>> ', typeof parseVar)

// ==================

// const form1 = document.querySelector('.form1')
// const form2 = document.querySelector('.form2')

// if (localStorage.getItem('user')) {
// 	form1.elements.name.value = JSON.parse(localStorage.getItem('user')).name
// 	form1.elements.secondName.value = JSON.parse(
// 		localStorage.getItem('user')
// 	).secondName
// }

// try {
// 	form1.elements.name.value = JSON.parse(localStorage.getItem('user')).name
// 	form1.elements.secondName.value = JSON.parse(
// 		localStorage.getItem('user')
// 	).secondName
// } catch (error) {
// 	console.log('error :>> ', error)
// }

// form1.addEventListener('submit', handleSubmit)

// form2.addEventListener('submit', handleSubmit)

// function handleSubmit(e) {
// 	e.preventDefault()
// 	console.log('e :>> ', e)
// 	localStorage.setItem(
// 		e.target.classList.value,
// 		JSON.stringify(createUser(e.target[0], e.target[1]))
// 	)
// 	// form.reset()
// }

// function createUser(params1, params2) {
// 	console.log('params1 :>> ', params1.value)
// 	return {
// 		[params1.name]: params1.value,
// 		[params2.name]: params2.value,
// 	}
// }

// console.log('form1 :>> ', form1)
// =============++++++++

const form1 = document.querySelector('.form1')
const form2 = document.querySelector('.form2')

form1.addEventListener('submit', handleSubmit)
form2.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
	e.preventDefault()
	const user = {}
	const elemArr = Array.from(e.target.elements)
	elemArr.map((el) => {
		if (el.nodeName === 'INPUT' && el.hasAttribute('name')) {
			user[el.name] = el.value
		}
	})
	localStorage.setItem(e.target.className, JSON.stringify(user))
}
