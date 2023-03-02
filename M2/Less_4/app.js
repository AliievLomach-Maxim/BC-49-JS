// ⁡⁣⁣⁢​‌​‌‌​‌‌‍⁡⁢⁢⁢‍Модуль 2. Заняття 4. Функції⁡​​⁡

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

//www.jsv9000.app/

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭 - Індекс маси тіла​⁡

// Напиши функцію calcBMI(weight, height) яка розраховує та повертає
// індекс маси тіла людини.
// Для цього необхідно розділити вагу в
// кілограмах на квадрат висоти людини в метрах.

// Вага та висота будуть спеціально передані як рядки.
// Не цілі числа можуть бути задані у вигляді 24.7 або 24,7,
// тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// Prompt!!!

// const weight = prompt('Input your weight:')
// const height = prompt('Input your height:')

// function calcBMI(weight, height) {
// 	const index = (
// 		Number(weight.replace(',', '.')) /
// 		Number(height.replace(',', '.')) ** 2
// 	).toFixed(1)
// 	console.log('index :>> ', index)

// 	if (index < 20) {
// 		return 'Дефіцит Ваги'
// 	} else if (index < 25 && index >= 20) {
// 		return 'Нормальна Вага'
// 	} else if (index >= 25) {
// 		return 'Надмірна Вага'
// 	}
// 	return index
// }

// const bmi = calcBMI(weight, height)
// console.log(bmi)

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟮 - Найменше з чисел​⁡
// Напиши функцію min(a,b), яка повертає найменше з чисел a та b.

// function minNumber(a, b) {
// 	// if (a < b) {
// 	// 	return a
// 	// }
// 	// return b
// 	return a < b ? a : b
// }

// console.log(minNumber(2, 5)) // 2
// console.log(minNumber(3, -1)) // -1
// console.log(minNumber(1, 1)) // 1

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟯 - Площа прямокутника​⁡
// Напиши функцію getRectArea(dimensions) для обчислення площі
// прямокутника зі сторонами, значення яких будуть передані до
// параметра dimensions у вигляді рядка.
// Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
// 	const rectangleSize = dimensions.split(' ')
// 	return Number(rectangleSize[0]) * Number(rectangleSize[1])
// }

// console.log(getRectArea('5 12'))

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟰 - Логування елементів​⁡
// Напиши функцію logItems(items), яка отримує масив та використовує
// цикл for, який для кожного елемента масиву буде виводити в консоль
// повідомлення у форматі <номер елемента> - <значення елемента>.
// Нумерація елементів повинна починатися з 1.

// logItems(['Mango', 'Poly', 'Ajax'])
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋'])

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟱 - Логування контактів​⁡
// Напиши функцію printContactsInfo(names, phones) яка виводить у консоль
// ім'я та телефонний номер користувача. У параметри names та phones
// будуть передані рядки імен та телефонних номерів, розділені комами.
// Порядковий номер імен та телефонів у рядках вказують на відповідність.
// Кількість імен та телефонів гарантовано однакова.

// printContactsInfo(
// 	'Jacob,William,Solomon,Artemis',
// 	'89001234567,89001112233,890055566377,890055566300'
// )

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟲 - Пошук найбільшого елемента​⁡
// Напиши функцію findLargestNumber(numbers)яка шукає найбільше
// число в масиві.

// function findLargestNumber(numbers) {
// 	let maxNumbers = numbers[0]
// 	for (let i = 0; i < numbers.length; i++) {
// 		if (numbers[i] > maxNumbers) {
// 			maxNumbers = numbers[i]
// 		}
// 	}
// 	return maxNumbers
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])) // 94
// console.log(findLargestNumber([49, 4, 7, 12])) // 83

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟳 - Середнє значення​⁡
// Напишіть функцію calAverage() яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення. Усі аргументи будуть
// лише числами.

// console.log(calAverage(1, 2, 3, 4)) // 2.5
// console.log(calAverage(14, 8, 2)) // 8
// console.log(calAverage(27, 43, 2, 8)) // 23.2

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟴 - Форматування часу​⁡
// Напиши функцію formatTime(minutes) яка переведе значення minutes
// (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.

// function formatTime(minutes) {
// 	// return `${
// 	// 	Math.floor(minutes / 60) < 10
// 	// 		? '0' + Math.floor(minutes / 60)
// 	// 		: Math.floor(minutes / 60)
// 	// }:${minutes % 60 < 10 ? '0' + (minutes % 60) : minutes % 60}`
// 	return `${`${Math.floor(minutes / 60)}`.padStart(2, 0)}:${(minutes % 60)
// 		.toString()
// 		.padStart(2, '0')}`
// }

// console.log(formatTime(70)) // "01:10"
// console.log(formatTime(450)) // "07:30"
// console.log(formatTime(1441)) // "24:01"

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ​‌‍‌⁡⁢⁣⁣‍‍𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟵 - Колекція курсів (𝗶𝗻𝗰𝗹𝘂𝗱𝗲𝘀, 𝗶𝗻𝗱𝗲𝘅𝗢𝗳, 𝗽𝘂𝘀𝗵 і т. д.)⁡​
// Напишіть функції для роботи з колекцією навчальних курсів courses:

// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName) - змінює ім'я на нове

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL']

function addCourse(name) {
	if (courses.includes(name)) {
		console.log('У вас вже є такий курс')
	} else {
		courses.push(name)
	}
}

function removeCourse(name) {
	if (courses.includes(name)) {
		const index = courses.indexOf(name)
		courses.splice(index, 1)
	} else {
		console.log('Курс с таким імʼям не існує')
	}
}

addCourse('Express')
console.log(courses) // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse('CSS') // 'У вас уже есть такой курс'

removeCourse('React')
console.log(courses) // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('Vue') // 'Курс с таким імʼям не існує'

// updateCourse('HTML', 'NestJS')
// console.log(courses) // ['NestJS', 'CSS', 'JavaScript', 'PostgreSQL',]

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡
// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡
// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// getUser()

// function getUser() {
// 	console.log('Function Get User')
// }

// const getUser = function () {
// 	console.log('Function Get User')
// }

// const x = [].slice(1,2)

// function createUser(name, age) {
// 	console.log('name :>> ', name)
// 	console.log('age :>> ', age)
// 	return name + '!'
// }

// const result = createUser('Alex', 12)

// console.log('result :>> ', result)

// function fn() {
// 	const arr = Array.from(arguments)
// 	console.log('arr :>> ', arr)
// }

// function fn( ...numbers) {
// 	console.log('numbers :>> ', numbers)
// 	console.log('a :>> ', a)
// 	console.log('b :>> ', b)
// }

// fn(10, 12, 13, 14)
// fn(10)
// fn(10, 12)

// function fn() {
// 	const a = 11
// 	if (a === 10) {
// 		return 'Yes'
// 	}
// 	return 'No'
// }

// console.log('fn() :>> ', fn())

// function fn() {
// 	console.log('FN function')
// }

// function fn2() {
// 	fn()
// 	console.log('FN2 function')
// }
// console.log('object')

// fn2()
