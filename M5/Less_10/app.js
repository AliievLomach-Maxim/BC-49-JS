// ‍Модуль 𝟱. Заняття 𝟭𝟬. Прототипи та класи

// ⁡⁢⁢⁢________________________________________________________________________________________________________________________________⁡

// ‍𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭 - Блогер
// Напиши клас 𝗕𝗹𝗼𝗴𝗴𝗲𝗿 для створення об'єкта блогера з наступними властивостями:

// 𝗲𝗺𝗮𝗶𝗹 - пошта, рядок
// 𝗮𝗴𝗲 - вік, число
// 𝗻𝘂𝗺𝗯𝗲𝗿𝗢𝗳𝗣𝗼𝘀𝘁𝘀 - кількість постів, число
// 𝘁𝗼𝗽𝗶𝗰𝘀 - масив тем на яких спеціалізується блогер

// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

// Додай метод 𝗴𝗲𝘁𝗜𝗻𝗳𝗼(), який, повертає рядок: 𝗨𝘀𝗲𝗿 ${пошта} 𝗶𝘀 ${вік} 𝘆𝗲𝗮𝗿𝘀 𝗼𝗹𝗱 𝗮𝗻𝗱 𝗵𝗮𝘀 ${кількість постів} 𝗽𝗼𝘀𝘁𝘀.

// Додай метод 𝘂𝗽𝗱𝗮𝘁𝗲𝗣𝗼𝘀𝘁𝗖𝗼𝘂𝗻𝘁(𝘃𝗮𝗹𝘂𝗲), який у параметрі 𝘃𝗮𝗹𝘂𝗲 приймає кількість постів, які потрібно додати користувачеві.

// class Blogger {
// 	static createId() {
// 		return Math.random().toString(16).slice(2)
// 	}
// 	constructor({ email = 'asd@asd.com', age, numberOfPosts, topics }) {
// 		this.email = email
// 		this.age = age
// 		this.numberOfPosts = numberOfPosts
// 		this.topics = topics
// 		this.id = Blogger.createId()
// 	}
// 	getInfo() {
// 		return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`
// 	}
// 	updatePostCount(value) {
// 		this.numberOfPosts += value
// 	}
// 	getUserInfo() {
// 		return this
// 	}
// }

// const mango = new Blogger({
// 	email: 'mango@mail.com',
// 	age: 24,
// 	numberOfPosts: 20,
// 	topics: ['tech', 'cooking'],
// })

// console.log(mango.getInfo()) // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5)
// console.log(mango.getInfo()) // User mango@mail.com is 24 years old and has 25 posts
// console.log('mango.getUserInfo() :>> ', mango.getUserInfo())
// const poly = new Blogger({
// 	email: 'poly@mail.com',
// 	age: 19,
// 	numberOfPosts: 17,
// 	topics: ['sports', 'gaming', 'health'],
// })
// console.log(poly.getInfo()) // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4)
// console.log(poly.getInfo()) // User poly@mail.com is 19 years old and has 21 posts

// ⁡⁢⁢⁢________________________________________________________________________________________________________________________________⁡

// ‍𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟮 - Сховище
// Напиши клас 𝗦𝘁𝗼𝗿𝗮𝗴𝗲 який створює об'єкти для керування складом товарів. При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме його властивість 𝗶𝘁𝗲𝗺𝘀.

// Додай методи класу:

// 𝗴𝗲𝘁𝗜𝘁𝗲𝗺𝘀() - повертає масив товарів.
// 𝗮𝗱𝗱𝗜𝘁𝗲𝗺(𝗶𝘁𝗲𝗺) - отримує новий товар і додає його до поточних.
// 𝗿𝗲𝗺𝗼𝘃𝗲𝗜𝘁𝗲𝗺(𝗶𝘁𝗲𝗺) - отримує товар і, якщо він є, видаляє його з поточних.

// class Storage {
// 	constructor(items) {
// 		this.items = items
// 	}
// 	getItems() {
// 		return this.items
// 	}
// 	addItem(value) {
// 		this.items.push(value)
// 	}

// 	removeItem(value) {
// 		// if (this.items.includes(value)) {
// 		// this.items.splice(this.items.indexOf(value), 1)
// 		// }
// 		this.items = this.items.filter((item) => item !== value)
// 	}
// }

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑'])

// const items = storage.getItems()
// console.table(items) // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌')
// console.table(storage.items) // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('10')
// console.table(storage.items) // [ '🍎', '🍇', '🍑', '🍌' ]
// storage.removeItem('🍎')
// console.table(storage.items) // [ '🍎', '🍇', '🍑', '🍌' ]
// ⁡⁢⁢⁢________________________________________________________________________________________________________________________________⁡

// ‍‍𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟯 - 𝗨𝘀𝗲𝗿
// Напиши клас 𝗨𝘀𝗲𝗿 який створює об'єкт із властивостями 𝗹𝗼𝗴𝗶𝗻 та 𝗲𝗺𝗮𝗶𝗹. Оголоси приватні властивості #𝗹𝗼𝗴𝗶𝗻 та #𝗲𝗺𝗮𝗶𝗹, доступ до яких зроби через гетер та сетер 𝗹𝗼𝗴𝗶𝗻 та 𝗲𝗺𝗮𝗶𝗹.

// class User {
// 	#email
// 	#login

// 	constructor({ email, login }) {
// 		this.#email = email
// 		this.#login = login
// 	}

// 	get email() {
// 		return this.#email
// 	}

// 	set email(value) {
// 		this.#email = value
// 	}

// 	get login() {
// 		return this.#login
// 	}

// 	set login(value) {
// 		this.#login = value
// 	}
// }

// const mango = new User({
// 	login: 'Mango',
// 	email: 'mango@dog.woof',
// })

// console.log(mango.login) // Mango
// mango.login = 'Mangodoge'
// console.log(mango.login) // Mangodoge

// const poly = new User({
// 	login: 'Poly',
// 	email: 'poly@mail.com',
// })

// console.log(poly.login) // Poly
// poly.login = 'Polycutie'
// console.log(poly.login) // Polycutie
// ⁡⁢⁢⁢________________________________________________________________________________________________________________________________⁡

// ‍‍‍𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟰 - Нотатки
// Напиши клас 𝗡𝗼𝘁𝗲𝘀 який керує колекцією нотаток у властивості 𝗶𝘁𝗲𝗺𝘀. Замітка це об'єкт із властивостями 𝘁𝗲𝘅𝘁 та 𝗽𝗿𝗶𝗼𝗿𝗶𝘁𝘆. Додай класу статичну властивість 𝗣𝗿𝗶𝗼𝗿𝗶𝘁𝘆, у якому зберігатиметься об'єкт із пріоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// Додай методи 𝗮𝗱𝗱𝗡𝗼𝘁𝗲(𝗻𝗼𝘁𝗲), 𝗿𝗲𝗺𝗼𝘃𝗲𝗡𝗼𝘁𝗲(𝘁𝗲𝘅𝘁) та 𝘂𝗽𝗱𝗮𝘁𝗲𝗣𝗿𝗶𝗼𝗿𝗶𝘁𝘆(𝘁𝗲𝘅𝘁, 𝗻𝗲𝘄𝗣𝗿𝗶𝗼𝗿𝗶𝘁𝘆).

// class Notes {
// 	static Priority = {
// 		LOW: 'low',
// 		NORMAL: 'normal',
// 		HIGH: 'high',
// 	}
// 	constructor(items) {
// 		this.items = items
// 	}
// 	addNote(note) {
// 		this.items.push(note)
// 	}
// }

// const myNotes = new Notes([])

// myNotes.addNote({ text: 'Моя перша замітка', priority: Notes.Priority.LOW })
// console.log(myNotes.items)

// myNotes.addNote({
// 	text: 'Моя друга замітка',
// 	priority: Notes.Priority.NORMAL,
// })
// console.log(myNotes.items)

// myNotes.removeNote('Моя перша замітка');
// console.log(myNotes.items);

// myNotes.updateNote('Моя друга замітка', Notes.Priority.HIGH);
// console.log(myNotes.items);
// ⁡⁢⁢⁢________________________________________________________________________________________________________________________________⁡

// ‍‍‍‍𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟱 - 𝗧𝗼𝗴𝗴𝗹𝗲
// Напишіть клас 𝗧𝗼𝗴𝗴𝗹𝗲 який приймає об'єкт налаштувань {𝗶𝘀𝗢𝗽𝗲𝗻: 𝗯𝗼𝗼𝗹𝗲𝗮𝗻} і оголошує одну властивість 𝗼𝗻 - стан вкл/викл (𝘁𝗿𝘂𝗲/𝗳𝗮𝗹𝘀𝗲). За замовчуванням значення властивості 𝗼𝗻 повинно бути 𝗳𝗮𝗹𝘀𝗲.

// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');

// function User(name, age) {
// 	this.name = name
// 	this.age = age
// 	this.lang = 'ua'
// 	// this.getName = function () {
// 	// 	return console.log('this.name :>> ', this.name)
// 	// }
// }

// const user = {}
// User.call(user, 'Alex', 30)

// const user2 = {}
// User.call(user2, 'Alex2', 300)
// const total = 10

// class User {
// 	#country

// 	static total = 10

// 	constructor(newName, newAge) {
// 		this.name = newName
// 		this.age = newAge
// 		this.lang = 'ua'
// 		this.#country = 'Ukraine'
// 	}

// 	getName() {
// 		console.log('this.name :>> ', this.name)
// 	}

// 	getAge() {
// 		console.log('this.age+total :>> ', this.age + User.total)
// 	}

// 	get country() {
// 		return this.#country
// 	}

// 	set country(newCountry) {
// 		if (this.name === 'Admin') this.#country = newCountry
// 	}
// }

// const user = new User('Admin', 30)
// const user2 = new User('Admin', 300)

// // console.log('user :>> ', user)

// class User2 extends User {
// 	constructor(newName, newAge) {
// 		super(newName, newAge)
// 		this.lang = 'en'
// 		this.age = newAge + 10
// 	}
// }

// const newUser2 = new User2('Alex', 30)
// const newUser22 = new User2('Admin', 20)
// console.log('newUser2 :>> ', newUser2)
// console.log('newUser22 :>> ', newUser22)

// newUser2.getAge()

// class User2_1 extends User2 {
// 	constructor(newName, newAge) {
// 		super(newName, newAge)
// 		this.isDev = true
// 	}
// }

// const newUser2_1 = new User2_1('Bob', 42)

// newUser2_1.country = 'England'

// console.log('newUser2_1 :>> ', newUser2_1.country)

// class User {
// 	constructor({ name, age, email, pass, lang }) {
// 		this.name = name
// 		this.age = age
// 		this.email = email
// 		this.pass = pass
// 		this.lang = lang
// 	}
// }

// const user = new User({
// 	name: 'Alex',
// 	age: 30,
// 	lang: 'ua',
// 	email: 'asd@asd.com',
// 	pass: 'asd123asdqwe',
// })
