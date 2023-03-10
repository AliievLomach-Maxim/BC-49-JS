'use strict'
// ⁡⁢⁢⁢​‌‌‍Модуль 5. Заняття 9. Контекст виклику функції та this​⁡

// ⁡⁢⁢⁢________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭 - Майстерня коштовностей​⁡

// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з властивості stones.

// const chopShop = {
// 	stones: [
// 		{ name: 'Emerald', price: 1300, quantity: 4 },
// 		{ name: 'Diamond', price: 2700, quantity: 3 },
// 		{ name: 'Sapphire', price: 1400, quantity: 7 },
// 		{ name: 'Ruby', price: 800, quantity: 2 },
// 	],
// 	calcTotalPrice(stoneName) {
// 		// let total = 0
// 		// this.stones.forEach((stone) => {
// 		// 	if (stone.name === stoneName) {
// 		// 		total = stone.price * stone.quantity
// 		// 	}
// 		// })
// 		// return total
// 		const result = this.stones.find((stone) => stone.name === stoneName)
// 		return result.price * result.quantity
// 	},
// }

// console.log(chopShop.calcTotalPrice('Emerald')) // 5200
// console.log(chopShop.calcTotalPrice('Diamond')) // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')) // 9800
// console.log(chopShop.calcTotalPrice('Ruby')) // 1600

// ⁡⁢⁢⁢________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟮 - Телефонна книга​⁡

// Виконайте рефакторинг методів об'єкту phonebook щоб код запрацював.

// const phonebook = {
// 	contacts: [],
// 	add(contact) {
// 		const newContact = {
// 			list: 'default',
// 			...contact,
// 			id: this.generateId(),
// 			createdAt: this.getDate(),
// 		}
// 		this.contacts.push(newContact)
// 		// return
// 		// return this.contacts
// 		// return newContact
// 	},
// 	generateId() {
// 		return '_' + Math.random().toString(36).substr(2, 9)
// 	},
// 	getDate() {
// 		return Date.now()
// 	},
// }

// phonebook.add({
// 	name: 'Mango',
// 	email: 'mango@mail.com',
// 	list: 'friends',
// })
// // console.log(
// // 	phonebook.add({
// // 		name: 'Mango',
// // 		email: 'mango@mail.com',
// // 		list: 'friends',
// // 	})
// // )
// // console.log(
// phonebook.add({
// 	name: 'Poly',
// 	email: 'poly@hotmail.com',
// })
// )

// ⁡⁢⁢⁢________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 3 - Калькулятор​⁡
// Створіть об'єкт calculator з трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.

// const calculator = {
// 	read(a, b) {
// 		this.a = a
// 		this.b = b
// 	},
// 	sum() {
// 		return this.a + this.b
// 	},
// 	mult() {
// 		return this.a * this.b
// 	},
// }

// calculator.read(2, 3)
// console.log('calculator :>> ', calculator)
// console.log('calculator.sum() :>> ', calculator.sum()) //5
// console.log('calculator.mult() :>> ', calculator.mult()) //6

// const numbers = [
// 	{ a: 10, b: 20 },
// 	{ a: 1, b: 2 },
// 	{ a: 3, b: 12 },
// 	{ a: 12, b: 23 },
// 	{ a: 14, b: 11 },
// 	{ a: 100, b: 200 },
// ]

// function sum() {
// 	return { result: this.a + this.b, operation: '+' }
// }

// function mult() {
// 	return { result: this.a * this.b, operation: '*' }
// }

// // function calculator(numbers, clbSum, clbMult) {
// // 	const resultSum = []
// // 	const resultMult = []
// // 	numbers.forEach((number) => {
// // 		resultSum.push(clbSum.call(number))
// // 		resultMult.push(clbMult.call(number))
// // 	})
// // 	// return `Summary result is: ${resultSum}
// //     // Multiply result is: ${resultMult}`
// // }

// function calculator(numbers, clb) {
// 	numbers.forEach((number) => {
		// const { result, operation } = clb.call(number)
// 		console.log(
// 			`Result of ${number.a} ${operation} ${number.b} = ${result}`
// 		)
// 	})
// }
// calculator(numbers, sum)
// calculator(numbers, mult)
// console.log(' ')
// calculator(numbers, function () {
// 	return { result: this.a - this.b, operation: '-' }
// })
// console.log(' ')
// calculator(numbers, function () {
// 	return { result: this.a / this.b, operation: '/' }
// })
// console.log(calculator(numbers, sum, mult)) // [30,3,15..],[200,2,36,...]

//

// // ⁡⁢⁢⁢________________________________________________________________________________________________________________________________⁡

// const user = {
// 	name: 'Alex',
// 	age: 30,
// 	showName() {
// 		console.log('this.name :>> ', this.name)
// 	},
// }

// const user2 = {
// 	name: 'Bob',
// 	age: 30,
// 	// show: user.showName,
// }

// user2.show = user.showName

// user2.show()

// const fn = (params) => {
// 	console.log('this :>> ', this)
// }

// function fn(params) {
// 	console.log('this :>> ', this)
// }

// function fn(params) {
// 	const fn2 = (params) => {
// 		console.log('this :>> ', this)
// 	}
// 	fn2()
// }

// const user = {
// 	name: 'Alex',
// 	age: 30,
// 	show: fn,
// }

// user.show()

// function fn(clb) {
// 	clb()
// }

// const user = {
// 	name: 'Alex',
// 	age: 30,
// 	show() {
// 		console.log('this :>> ', this)
// 	},
// }

// fn(user.show)

// function fn(a, b) {
// 	console.log('a+b :>> ', a + b)
// 	console.log('this :>> ', this)
// }

// const user = {
// 	name: 'Alex',
// 	age: 30,
// }
// const user2 = {
// 	name: 'Alex2',
// 	age: 300,
// }
// // fn(10, 20)
// // fn.call(user, 10, 20)
// // fn.call(user2, 20, 30)

// // fn.apply(user, [10, 20])
// // fn.apply(user2, [20, 30])

// const fx = fn.bind(user, 10, 20)
// fx()
// fn.bind(user2, 20, 30)

// function fn(clb) {
// 	console.log('clb :>> ', clb)
// 	clb()
// }

// const user = {
// 	name: 'Alex',
// 	age: 30,
// 	show() {
// 		console.log('this :>> ', this)
// 		return 10
// 	},
// }

// fn(user.show.bind(user))

// const users = [
// 	{
// 		name: 'Alex',
// 		age: '30',
// 	},
// 	{
// 		name: 'Alex2',
// 		age: '20',
// 	},
// 	{
// 		name: 'Alex3',
// 		age: '300',
// 	},
// ]

// function getAge() {
// 	console.log('this :>> ', this)
// 	return Number(this.age)
// }

// let total = 0

// function fn(clb) {
// 	total = total + clb()
// }

// users.forEach((user) => {
// 	fn(getAge.bind(user))
// })

// console.log('total :>> ', total)
