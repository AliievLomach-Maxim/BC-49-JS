// ⁡⁣⁣⁢​‌‌‍Модуль 𝟯 Заняття 𝟲. Деструктуризація та rest/spread​⁡

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 1 - Деструктуризація​⁡
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
// незалежних аргументів.

// function calcBMI(weight,height) {

// 	const numericWeight = Number(weight.replace(',', '.'))
// 	const numericHeight = Number(height.replace(',', '.'))
// 	return Number((numericWeight / numericHeight ** 2).toFixed(1))
// }

// // Було
// console.log(calcBMI('88,3', '1.75'))
// console.log(calcBMI('68,3', '1.65'))
// console.log(calcBMI('118,3', '1.95'))

// Стало:

// function calcBMI({ weight, height }) {
// 	const numericWeight = Number(weight.replace(',', '.'))
// 	const numericHeight = Number(height.replace(',', '.'))
// 	return Number((numericWeight / numericHeight ** 2).toFixed(1))
// }

// // // Очікується
// // const someObj = {
// // 	weight: '88,3',
// // 	height: '1.75',
// // }
// // console.log('calcBMI(someObj) :>> ', calcBMI(someObj));
// console.log(
// 	calcBMI({
// 		weight: '68,3',
// 		height: '1.65',
// 	})
// )
// console.log(
// 	calcBMI({
// 		weight: '118,3',
// 		height: '1.95',
// 	})
// )
// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟮 - Деструктуризація​⁡
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість
// набору незалежних аргументів.

// // Було
// function printContactsInfo(names, phones) {
// 	const nameList = names.split(',')
// 	const phoneList = phones.split(',')
// 	for (let i = 0; i < nameList.length; i += 1) {
// 		console.log(`${nameList[i]}: ${phoneList[i]}`)
// 	}
// }

// printContactsInfo(
// 	'Jacob,William,Solomon,Artemis',
// 	'89001234567,89001112233,890055566377,890055566300'
// )

//стало:

// function printContactsInfo(users) {
// 	const { names, phones } = users
// 	const nameList = names.split(',')
// 	const phoneList = phones.split(',')
// 	for (let i = 0; i < nameList.length; i += 1) {
// 		console.log(`${nameList[i]}: ${phoneList[i]}`)
// 	}
// }

// const users = {
// 	names: 'Jacob,William,Solomon,Artemis',
// 	phones: '89001234567,89001112233,890055566377,890055566300',
// }

// printContactsInfo(users)

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟯 - Глибока деструктуризація​⁡
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість
// набору незалежних аргументів.

// // Було
// function getBotReport(companyName, repairBots, defenceBots) {
// 	return `${companyName} has ${repairBots + defenceBots} bots in stock`
// }

// console.log(getBotReport('Cyberdyne Systems', 150, 50))

// // стало
// function getBotReport({
// 	companyName,
// 	bots: { repair: repairBots, defense: defenseBots },
// }) {
// 	//1
// 	// const companyName = obj.companyName
// 	// const repairBots = obj.bots.repair
// 	// const defenseBots = obj.bots.defense
// 	//2
// 	// const { companyName } = obj
// 	// const { repair: repairBots } = obj.bots
// 	// const { defense: defenseBots } = obj.bots
// 	//3
// 	// const { companyName } = obj
// 	// const { repair: repairBots, defense: defenseBots } = obj.bots
// 	//4
// 	// const {
// 	// 	companyName,
// 	// 	bots: { repair: repairBots, defense: defenseBots },
// 	// } = obj
// 	//5 Переносимо в параметри функції

// 	return `${companyName} has ${repairBots + defenseBots} bots in stock`
// }
// function getBotReport({
// 	companyName,
// 	bots: { repair: repairBots, defense: defenseBots },
// }) {
// 	return `${companyName} has ${repairBots + defenseBots} bots in stock`
// }

// const someObj = {
// 	companyName: 'Cyberdyne Systems',
// 	bots: {
// 		repair: 150,
// 		defense: 50,
// 	},
// }

// console.log(getBotReport(someObj))
// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟰 - Деструктуризация​⁡
// Створи функцію так, щоб вона приймала об'єкт параметрів із властивостями companyName
// та stock
// та виводила репорт про кількість товарів на складі будь-якої компанії.

// function getStockReport({ companyName, stock: { repairBots, defenceBots } }) {
// 	return `${companyName} has ${repairBots + defenceBots} in stock`
// }

// console.log(
// 	getStockReport({
// 		companyName: 'Cyberdyne Systems',
// 		stock: {
// 			repairBots: 150,
// 			defenceBots: 50,
// 		},
// 	})
// ) // "Cyberdyne Systems has 200 items in stock"

// console.log(
// 	getStockReport({
// 		companyName: 'Belacci',
// 		stock: {
// 			shoes: 20,
// 			skirts: 10,
// 			hats: 5,
// 		},
// 	})
// ) // "Belacci has 35 item in stock"
// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟱 - Операція 𝘀𝗽𝗿𝗲𝗮𝗱​⁡
// Доповни функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту
// з доданими властивостями id, а також list зі значенням "default" якщо
// в partialContact немає такої властивості.

// function createContact(partialContact) {
// 	const { list = 'default' } = partialContact
// 	const newUser = {
// 		...partialContact,
// 		id: Math.random().toString(16).slice(2),
// 		list,
// 	}

// 	const newUser = {
// 		list: 'default',
// 		...partialContact,
// 		id: Math.random().toString(16).slice(2),
// 	}
// 	return newUser
// }

// //

// console.log(
// 	createContact({
// 		name: 'Mango',
// 		email: 'mango@mail.com',
// 		list: 'friends',
// 	})
// )

// console.log(
// 	createContact({
// 		name: 'Poly',
// 		email: 'poly@hotmail.com',
// 	})
// )

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌⁡⁢⁣⁣​‌‍‌Example 6 - Операція rest​⁡
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

// console.log(
// 	transformId({
// 		id: 1,
// 		firstName: 'Jacob',
// 		lastName: 'Mercer',
// 		email: 'j.mercer@mail.com',
// 		friendCount: 40,
// 	})
// )

// console.log(
// 	transformId({
// 		id: 2,
// 		firstName: 'Adrian',
// 		lastName: 'Cross',
// 		email: 'a.cross@hotmail.com',
// 		friendCount: 20,
// 	})
// )
