// ⁡⁣⁣⁢​‌‌‍Модуль 𝟯. Заняття 5. Об'єкти​⁡

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭 - Основи об'єктів​⁡
// Напиши скрипт, який для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user у форматі ключ:значення використовуючи
// Object.keys() та for...of

// const user = {
// 	name: 'Mango',
// 	age: 20,
// 	hobby: 'html',
// 	premium: true,
// }

// // user.mood = 'happy'
// user.hobby = 'skydiving'
// user.premium = false
// user.hobbies = []
// user.hobbies.push(user.hobby)
// delete user.hobby

// const arr = Object.keys(user)

// for (const key of arr) {
// 	console.log(`${key} : ${user[key]}`)
// }

// console.log('user :>> ', user)

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟮 - метод Object.values()​⁡
// У нас є об'єкт, де зберігаються зарплати нашої команди.
// Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum.
// Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.

// const salaries = {
// 	John: 100,
// 	Ann: 160,
// 	Pete: 130,
// 	countSalaries() {
// 		console.log('this :>> ', this)
// 		const salariesArray = Object.values(this)
// 		let totalSalary = 0
// 		for (let salary of salariesArray) {
// 			totalSalary += salary
// 		}
// 		console.log('totalSalary :>> ', totalSalary)
// 		return totalSalary
// 	},
// }

// function countSalaries(obj) {
// 	const salariesArray = Object.values(obj)
// 	let totalSalary = 0
// 	for (let salary of salariesArray) {
// 		totalSalary += salary
// 	}
// 	return totalSalary
// }
// salaries.countSalaries()
// const result = salaries.countSalaries()
// console.log(result)

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 3 - Масив об'єктів​⁡
// Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів
// та рядок з назвою каменю. Функція рахує і повертає загальну вартість каміння
// з таким ім'ям, ціною та кількістю з об'єкта

// const stones = [
// 	{ name: 'Смарагд', price: 1300, quantity: 4 },
// 	{ name: 'Діамант', price: 2700, quantity: 3 },
// 	{ name: 'Сапфір', price: 400, quantity: 7 },
// 	{ name: 'Щебінь', price: 200, quantity: 2 },
// ]

// function calcTotalPrice(someArr, stoneName) {
// 	// let sum = 0
// 	for (const value of someArr) {
// 		if (stoneName === value.name) {
// 			return value.price * value.quantity
// 		}
// 	}
// 	return 'Error'
// }

// const result = calcTotalPrice(stones, 'Смарагд')
// console.log('result :>> ', result)

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟰 - Комплексні завдання​⁡
// Напиши скрипт управління особистим кабінетом інтернет банку.
// Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом
// та історією транзакцій.

/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const Transaction = {
	DEPOSIT: 'deposit',
	WITHDRAW: 'withdraw',
}

/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */
const account = {
	// Поточний баланс рахунку
	balance: 0,

	// Історія транзакцій
	historyTransactions: [],

	/*
	 * Метод створює та повертає об'єкт транзакції.
	 * Приймає суму та тип транзакції.
	 */
	createTransaction(amount, type) {
		const transaction = {
			amount,
			type,
		}
		return transaction
	},

	/*
	 * Метод, що відповідає за додавання суми до балансу.
	 * Приймає суму транзакції.
	 * Викликає createTransaction для створення об'єкта транзакції
	 * після чого додає його до історії транзакцій
	 */
	deposit(amount) {
		this.balance += amount
		this.historyTransactions.push(
			this.createTransaction(amount, Transaction.DEPOSIT)
		)
	},

	/*
	 * Метод, що відповідає за зняття суми з балансу.
	 * Приймає суму транзакції.
	 * Викликає createTransaction для створення об'єкта транзакції
	 * після чого додає його до історії транзакцій.
	 *
	 * Якщо amount більше ніж поточний баланс, виводь повідомлення
	 * про те, що зняття такої суми не можливе, недостатньо коштів.
	 */
	withdraw(amount) {
		if (amount < this.balance) {
			this.balance -= amount
			this.historyTransactions.push(
				this.createTransaction(amount, Transaction.WITHDRAW)
			)
		} else {
			console.log('недостатньо коштів')
		}
	},

	/*
	 * Метод повертає поточний баланс
	 */
	getBalance() {
		return this.balance
	},

	/*
	 * Метод шукає та повертає об'єкт транзакції з історії транзакцій по id
	 */
	getTransactionDetails(id) {},

	/*
	 * Метод повертає кількість коштів
	 * певного типу транзакції з усієї історії транзакцій
	 */
	getTransactionTotal(typeTransaction) {},
}

account.deposit(500)
account.deposit(500)
account.withdraw(200)
account.withdraw(20000)
console.log('History:', account.historyTransactions)
// // console.log('TransactionDetails id=2:', account.getTransactionDetails(2))
// // console.log('TransactionDetails id=3:', account.getTransactionDetails(3))
// // console.log(
// // 	'TransactionTotalDEPOSIT:',
// // 	account.getTransactionTotal(Transaction.DEPOSIT)
// // )
// // console.log(
// // 	'TransactionTotalWITHDRAW:',
// // 	account.getTransactionTotal(Transaction.WITHDRAW)
// // )
console.log('Balance:', account.getBalance())


