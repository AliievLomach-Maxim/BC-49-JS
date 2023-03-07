// ⁡⁣⁣⁢​‌‌‍Модуль 4. Заняття 7. Коллбеки. Стрілочні функції. forEach​⁡

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭 - Коллбек функції​⁡
// Напишіть наступні функції:

// createProduct(obj, callback) - приймає об'єкт товару без id,
// а також коллбек. Функція створює об'єкт товару, додаючи йому
// унікальний ідентифікатор у властивість id та викликає коллбек передаючи
// йому створений об'єкт.

// logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль

// logTotalPrice(product) - колббек, що приймає об'єкт продукту і
// логіює загальну вартість товару в консоль

// // Рішення

// const createProduct = (obj, callback) => {
// 	const newObj = { ...obj, id: Math.random().toString(16).slice(2) }
// 	callback(newObj)
// }

// const logProduct = (product) => {
// 	console.log('product :>> ', product)
// }

// const logTotalPrice = (product) => {
// 	const result = product.price * product.quantity
// 	console.log('result :>> ', result)
// }

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct)
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice)

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟮 - Коллбек функції​⁡
// Додайте в об'єкт account методи withdraw(amount, onSuccess, onError)
// та deposit(amount, onSuccess, onError), де перший параметр
// це сума операції, а другий та третій - коллбеки.

// Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT
// або this.balance, і onSuccess в іншому випадку.

// Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT
// або менше або дорівнює нулю, і onSuccess в іншому випадку.

// Рішення

// const TRANSACTION_LIMIT = 1000

// const account = {
// 	username: 'Jacob',
// 	balance: 1400,
// 	withdraw(amount, onSuccess, onError) {
// 		let { balance } = this
// 		if (amount > balance) {
// 			onError('Недостатньо коштів на рахунку')
// 		} else if (amount > TRANSACTION_LIMIT) {
// 			onError('Перевищено ліміт транзакції')
// 		} else {
// 			this.balance -= amount
// 			onSuccess(`Успішна операція, на рахунку ${this.balance} грн`)
// 		}
// 	},
// 	deposit(amount, onSuccess, onError) {
// 		if (amount > TRANSACTION_LIMIT) onError('Перевищено ліміт транзакції')
// 		else if (amount <= 0)
// 			onError(
// 				'Неможливо виконати операцію з нульовою або відʼємною сумою'
// 			)
// 		else {
// 			this.balance += amount
// 			onSuccess(`Успішна операція, на рахунку ${this.balance} грн`)
// 		}
// 	},
// }

// function handleSuccess(message) {
// 	console.log(`✅ Success! ${message}`)
// }

// function handleError(message) {
// 	console.log(`❌ Error! ${message}`)
// }

// // account.withdraw(2000, handleSuccess, handleError)
// // account.withdraw(1100, handleSuccess, handleError)
// // account.withdraw(300, handleSuccess, handleError)

// account.deposit(1700, handleSuccess, handleError)
// account.deposit(0, handleSuccess, handleError)
// account.deposit(-600, handleSuccess, handleError)
// account.deposit(600, handleSuccess, handleError)

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 3 - Коллбек функції​⁡
// Напишіть функцію each(array, callback), яка першим параметром очікує масив,
// а другим - функцію, яка застосовується до кожного елемента масиву.
// Функція each повинна повернути новий масив, елементами якого будуть результати
// виклику коллбека.

// // Рішення

// // ...
// console.log(
// 	each([64, 49, 36, 25, 16], function (value) {
// 		return value * 2
// 	})
// )
// console.log(
// 	each([64, 49, 36, 25, 16], function (value) {
// 		return value - 10
// 	})
// )
// console.log(
// 	each([64, 49, 36, 25, 16], function (value) {
// 		return Math.sqrt(value)
// 	})
// )
// console.log(
// 	each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
// 		return Math.ceil(value)
// 	})
// )
// console.log(
// 	each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
// 		return Math.floor(value)
// 	})
// )
// console.log(
// 	each(['Maxim', 'Alex', 'Anet'], function (value) {
// 		return value.toLowerCase()
// 	})
// )
// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟰 - Стрілочні функції​⁡
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// function createProduct(partialProduct, callback) {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// }

// function logProduct(product) {
// 	console.log(product)
// }

// function logTotalPrice(product) {
// 	console.log(product.price * product.quantity)
// }

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct)
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice)

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 5 - Стрілочні функції​⁡
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// const TRANSACTION_LIMIT = 1000

// const account = {
// 	username: 'Jacob',
// 	balance: 400,

// 	withdraw: (amount, onSuccess, onError)  {
// 		if (amount > TRANSACTION_LIMIT) {
// 			onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`)
// 		} else if (amount > this.balance) {
// 			onError(`Amount can't exceed account balance of ${this.balance} credits`)
// 		} else {
// 			console.log('this>>', this)
// 			this.balance -= amount
// 			onSuccess(`Account balance: ${this.balance}`)
// 		}
// 	},
// 	deposit(amount, onSuccess, onError) {
// 		if (amount > TRANSACTION_LIMIT) {
// 			onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`)
// 		} else if (amount <= 0) {
// 			onError(`Amount must be more than 0 credits`)
// 		} else {
// 			console.log('this>>', this)
// 			this.balance += amount
// 			onSuccess(`Account balance: ${this.balance}`)
// 		}
// 	},
// }

// function handleSuccess  (message) { console.log(`✅ Success! ${message}`)}

// function handleError (message)  {console.log(`❌ Error! ${message}`)}

// account.withdraw(2000, handleSuccess, handleError)
// account.withdraw(600, handleSuccess, handleError)
// account.withdraw(300, handleSuccess, handleError)
// // account.deposit(1700, handleSuccess, handleError)
// // account.deposit(0, handleSuccess, handleError)
// // account.deposit(-600, handleSuccess, handleError)
// // account.deposit(600, handleSuccess, handleError)

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 6 - Інлайн стрілочні функції​⁡
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// function each  (array, callback)  {
// 	const newArr = []
// 	for (const el of array) {
// 		newArr.push(callback(el))
// 	}
// 	return newArr
// }

// console.log(each([64, 49, 36, 25, 16],function (value) {return value * 2}))
// console.log(each([64, 49, 36, 25, 16],function (value) {return  value - 10}))
// console.log(each([64, 49, 36, 25, 16], function (value) {return  Math.sqrt(value)}))
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {return  Math.ceil(value)}))
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {return Math.floor(value)}))

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 7 - Метод forEach​⁡
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// const logItems = (items) => {
// 	for (let i = 0; i < items.length; i += 1) {
// 		console.log(`${i + 1} - ${items[i]}`)
// 	}
// }

// // function logItems(items) {}

// const logItems = (items) => {
// 	items.forEach((element, index) => {
// 		console.log(`${index + 1} - ${element}`)
// 	})
// }

// logItems(['Mango', 'Poly', 'Ajax'])
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋'])

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 8 - Метод forEach​⁡
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// const printContactsInfo = ({ names, phones }) => {
// 	const nameList = names.split(',')
// 	const phoneList = phones.split(',')

// 	for (let i = 0; i < nameList.length; i += 1) {
// console.log(`${nameList[i]}: ${phoneList[i]}`)
// 	}
// }

// const printContactsInfo = ({ names, phones }) => {
// 	const nameList = names.split(',')
// 	const phoneList = phones.split(',')

// 	nameList.forEach((names, index) => {
// 		console.log(`${names}:${phoneList[index]}`)
// 	})
// }

// printContactsInfo({
// 	names: 'Jacob,William,Solomon,Artemis',
// 	phones: '89001234567,89001112233,890055566377,890055566300',
// })

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 9 - Метод forEach​⁡
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// function calculateAverage(...args) {
// 	let total = 0
// 	for (let i = 0; i < args.length; i++) {
// 		total += args[i]
// 	}
// 	return total / args.length
// }

// console.log(calculateAverage(1, 2, 3, 4)) // 2.5
// console.log(calculateAverage(14, 8, 2)) // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)) // 23.2

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// #callback
// #inline callback
// #forEach
// #arrow function
// #implicit return
// #arguments
// #arrow callback function

// function fn1(number, clb) {
// 	number += 100
// 	clb(number)
// }

// // function fn2(number) {
// // 	console.log('number :>> ', number + 10)
// // }

// // function fn3(number) {
// // 	console.log('number :>> ', number + 100)
// // }
// // function fn4(number) {
// // 	console.log('number :>> ', number / 2)
// // }

// // fn1(10, fn2)
// fn1(10, function (number) {
// 	console.log('number :>> ', number + 10)
// })

// // fn1(10, fn3)
// fn1(10, function (number) {
// 	console.log('number :>> ', number + 100)
// })

// // fn1(10, fn4)
// fn1(10, function (number) {
// 	console.log('number :>> ', number / 2)
// })

// const arr = ['Alex', 'Bob', 'Jon', 'User']

// function fnClb(element, index, array) {
// 	console.log('element :>> ', element)
// 	console.log('index :>> ', index)
// 	console.log('array :>> ', array)
// }

// function fnClb2(_, index) {
// 	console.log('index :>> ', index)
// }

// arr.forEach(fnClb)
// arr.forEach(fnClb2)

// arr.forEach(function (element, index, array) {
// 	console.log('element :>> ', element)
// 	console.log('index :>> ', index)
// 	console.log('array :>> ', array)
// })

// arr.forEach(function (_, index) {
// 	console.log('index :>> ', index)
// })
// const result = []
// arr.forEach(function (el) {
// 	const newEl = (el + '!').toUpperCase()
// 	result.push(newEl)
// })
// console.log('result :>> ', result)

// function fn(number) {
// 	console.log('number :>> ', number)
// }

// const fn2 = function (number) {
// 	console.log('number :>> ', number)
// }

// const fn3 = (number) => {
// 	const a = number + 100
// 	return a + 10
// }

// const result = fn3(10)

// console.log('result :>> ', result)

// function fn1(number, clb) {
// 	number += 100
// 	clb(number)
// }
// // fn1(10, fn2)
// fn1(10, (number) => {
// 	console.log('number :>> ', number + 10)
// })

// // fn1(10, fn3)
// fn1(10, (number) => {
// 	console.log('number :>> ', number + 100)
// })

// // fn1(10, fn4)
// fn1(10, (number) => {
// 	console.log('number :>> ', number / 2)
// })

// fn1(10,()=>{})

// const arr = ['Alex', 'Bob', 'Jon', 'User']
// arr.forEach((el, i, arr) => {
// 	console.log('el :>> ', el + '!')
// })
