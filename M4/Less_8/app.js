//  ​‌‌‍Модуль 𝟰. Заняття 𝟴. Перебираючі методи масиву​

// ​‌‍‌⁡⁢⁢⁢Колекція об'єктів для всіх прикладів з автомобілями⁡​
const cars = [
	{
		make: 'Honda',
		model: 'CR-V',
		type: 'suv',
		amount: 14,
		price: 24045,
		onSale: true,
	},
	{
		make: 'Honda',
		model: 'Accord',
		type: 'sedan',
		amount: 2,
		price: 22455,
		onSale: true,
	},
	{
		make: 'Mazda',
		model: 'Mazda 6',
		type: 'sedan',
		amount: 8,
		price: 24195,
		onSale: false,
	},
	{
		make: 'Mazda',
		model: 'CX-9',
		type: 'suv',
		amount: 7,
		price: 31520,
		onSale: true,
	},
	{
		make: 'Toyota',
		model: '4Runner',
		type: 'suv',
		amount: 19,
		price: 34210,
		onSale: false,
	},
	{
		make: 'Toyota',
		model: 'Sequoia',
		type: 'suv',
		amount: 16,
		price: 45560,
		onSale: false,
	},
	{
		make: 'Toyota',
		model: 'Tacoma',
		type: 'truck',
		amount: 4,
		price: 24320,
		onSale: true,
	},
	{
		make: 'Ford',
		model: 'F-150',
		type: 'truck',
		amount: 11,
		price: 27110,
		onSale: true,
	},
	{
		make: 'Ford',
		model: 'Fusion',
		type: 'sedan',
		amount: 13,
		price: 22120,
		onSale: true,
	},
	{
		make: 'Ford',
		model: 'Explorer',
		type: 'suv',
		amount: 6,
		price: 31660,
		onSale: false,
	},
]
// ⁡⁢⁢⁢____________________________________________________________________________________________________________________________________
// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭 - Метод 𝗺𝗮𝗽​⁡
// Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.

// function getModels(cars) {
// 	cars.map((car) => {
// 		return car.model
// 	})
// }

// const getModels = (cars) => {
// 	return cars.map((car) => {
// 		return car.model
// 	})
// }

// console.table(getModels(cars))

// ⁡⁢⁢⁢____________________________________________________________________________________________________________________________________
// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟮 - Мет⁡⁢⁣⁣од 𝗺𝗮𝗽​⁡
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним значенням властивості price залежно від переданої знижки.

// const makeCarsWithDiscount = (cars, discount) => {
// 	return cars.map((car) => {
// 		return car.price - car.price * discount
// 	})
// }

// console.table(makeCarsWithDiscount(cars, 0.2))
// console.table(makeCarsWithDiscount(cars, 0.4))

// ⁡⁢⁢⁢____________________________________________________________________________________________________________________________________
// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟯 - Метод 𝗳𝗶𝗹𝘁𝗲𝗿​⁡
// Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж значення параметра threshold.

// const filterByPrice = (cars, threshold) =>
// 	cars.filter((car) => car.price < threshold)

// console.table(filterByPrice(cars, 30000))
// console.table(filterByPrice(cars, 25000))

// ⁡⁢⁢⁢____________________________________________________________________________________________________________________________________
// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟰 - Метод 𝗳𝗶𝗹𝘁𝗲𝗿​⁡
// Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.

// console.table(getCarsWithDiscount(cars))

// ⁡⁢⁢⁢____________________________________________________________________________________________________________________________________
// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟱 - Метод 𝗳𝗶𝗹𝘁𝗲𝗿​⁡
// Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається зі значенням параметра type.

// console.table(getCarsWithType(cars, 'suv'))
// console.table(getCarsWithType(cars, 'sedan'))

// ⁡⁢⁢⁢____________________________________________________________________________________________________________________________________
// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟲 - Метод 𝗳𝗶𝗻𝗱​⁡

// const getCarByModel = (cars, model) => {
// 	return cars.find((car) => {
// 		return car.model === model
// 	})
// }

// const getCarByModel = (cars, model) => {
// 	const findedCar = cars.find((car) => {
// 		return car.model === model
// 	})
// 	return findedCar
// }

// console.log(getCarByModel(cars, 'F-150'))
// console.log(getCarByModel(cars, 'CX-9'))

// ⁡⁢⁢⁢____________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟳 - Метод 𝘀𝗼𝗿𝘁​⁡
// Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за зростанням значення якості amount.

// const sortByAscendingAmount = (params) => {
// 	const arr = [...params]
// 	arr.sort((a, b) => a.amount - b.amount)
// 	return arr
// }

// // const sortByAscendingAmount = (params) =>
// // 	[...params].sort((a, b) => a.amount - b.amount)

// console.table(sortByAscendingAmount(cars))
// console.table(cars)
// ⁡⁢⁢⁢____________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟴 - Метод 𝘀𝗼𝗿𝘁​⁡
// Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований за зменшенням значення властивості price.

// console.table(sortByDescendingPrice(cars))

// ⁡⁢⁢⁢____________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟵 - Метод 𝘀𝗼𝗿𝘁​⁡
// Нехай функція sortByModel повертає новий масив автомобілів відсортований за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від значення параметра order.

// console.table(sortByModel(cars, 'asc'))
// console.table(sortByModel(cars, 'desc'))

// ⁡⁢⁢⁢____________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭𝟬 - Метод 𝗿𝗲𝗱𝘂𝗰𝗲​⁡
// Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).

// console.log(getTotalAmount(cars))

// ⁡⁢⁢⁢____________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭𝟭 - Ланцюжки методів​⁡
// Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, які зараз на розпродажі.

// const getModelsOnSale = cars => {};

// console.table(getModelsOnSale(cars));

// ⁡⁢⁢⁢____________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭𝟮 - Ланцюжки методів​⁡
// Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі (Властивість onSale), відсортованих за зростанням ціни.

// const getSortedCarsOnSale = cars => {};

// console.table(getSortedCarsOnSale(cars));

// ⁡⁢⁢⁢____________________________________________________________________________________________________________________________________

// const arr = [1, 2, 3]

// function fn(a) {
// 	arr.push(a)
// 	console.log('arr :>> ', arr)
// 	// console.log('a+10 :>> ', a + 10)
// }

// fn(10)
// fn(10)
// fn(10)

// const users = ['Alex', 'Bob', 'Jon', 'User']

// const result = users.map((el, index, arr) => {
// 	return el + index
// })
// console.log('result :>> ', result)

// const users = [
// 	['Alex', 'Bob', 'Jon'],
// 	['Alex', 'Bob', 'Jon'],
// 	['Alex', 'Bob', 'Jon'],
// ]

// const newArr = users.flatMap((e) => e)
// console.log('newArr :>> ', newArr)
// console.log('users :>> ', users)

// const users = ['Alex', 'Bob', 'Jon', 'Jon!', 'Jon!!', 'User', 'Alex', 'Alex']

// const filteredUsers = users.filter((el) => {
// 	return el.includes('o')
// })

// console.log('filteredUsers :>> ', filteredUsers)

// const result = users.find((el) => {
// 	return el.startsWith('J') && el.endsWith('!!')
// })
// console.log('result :>> ', result)

// const result = users.findIndex((el) => {
// 	return el.startsWith('J') && el.endsWith('!!')
// })
// console.log('result :>> ', result)

// const users = ['Alex', 'Bob', 'Jon', 'Jon!', 'Jon!!', 'User', 'Alex', 'Alex']

// const arr = ['A', 'AA', 'Abc', 'Alex']

// const result = users.some((el) => el === 'Bob')

// console.log('result :>> ', result)

// const users = ['Alex', 'Bob', 'Jon', 'Jon!', 'Jon!!', 'User', 'Alex', 'Alex']

// const salaryes = [100, 200, 300, 250]

// // let total = 0
// // for (let i = 0; i < salaryes.length; i++) {
// // 	total += salaryes[i]
// // }
// // console.log('total :>> ', total)

// let total = 0
// const result = salaryes.reduce((acc, el) => {
// 	console.log('acc :>> ', acc)
// 	console.log('el :>> ', el)
// 	return acc + el
// })

// console.log('result :>> ', result)

// const salaryes = [
// 	{ name: 'Alex', salary: 300, balance: -400 },
// 	{ name: 'Alex2', salary: 400, balance: 0 },
// 	{ name: 'Alex3', salary: 500, balance: 200 },
// ]

// const result = salaryes.reduce((acc, el) => {
// 	console.log('acc :>> ', acc)
// 	// '{ name: 'Alex', salary: 300, balance: -400 }400500'
// 	return acc.unshift(el.salary)
// }, [])

// // const user = {
// // 	balance: 500,
// // 	operations: [100, -200, 300],
// // }

// // const result = user.operations.reduce((acc, el) => {
// // 	return acc + el
// // }, user.balance)

// console.log('result :>> ', result)

// const users = ['Alex', 'Bob', 'Jon', 'Jon!', 'Jon!!', 'User', 'Alex', 'Alex']
// // const numbers = [6, 5, 4, 8, 9, 0, 1]
// users.sort((a, b) => b.localeCompare(a))
// // localeCompare
// console.log('users :>> ', users)
//
// [6, 5, 4, 8, 9, 0, 1]
// a = 6
// b = 5
// a - b = 1>0
// // [5, 6, 4, 8, 9, 0, 1]
// a = 6
// b = 4
// a-b = 2>0
// // [5, 4, 6, 8, 9, 0, 1]
// a = 6
// b = 8
// a-b = -2<0
// // [5, 4, 6, 8, 9, 0, 1]
// a = 8
// b = 9
// a-b = -1<0
// // [5, 4, 6, 8, 9, 0, 1]
