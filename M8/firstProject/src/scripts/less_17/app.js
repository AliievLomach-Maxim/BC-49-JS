// setTimeout
// setInterval

// setTimeout(() => {
// 	console.log('setTimeout')
// }, 0)

// for (let i = 0; i < 1000; i++) {
// 	console.log('i :>> ', i)
// }

// class Date{}

// const today = new Date(2025, 3, 12, 16, 54, 01)

// const today = new Date('2025-12-03')
// console.log('today :>> ', today.setFullYear(2027))
// const nextDate = new Date(today)
// console.log('nextDate :>> ', nextDate)

// const date = new Date('2025-12-03')
// const today = new Date()

// console.log('date - today :>> ', (date - today) / 1000 / 60 / 60 / 24)

// const today = new Date()
// console.log('today :>> ', today.toLocaleDateString())

// ==================timer

// const hoursAsDays = diff / days

// const someVar = (diff / 1000 / 60 / 60) % 24
// const minutes = Math.floor(minutesAsHours / 60)

// const seconds = Math.floor((minutesAsHours % minutes) * 60)

// const nextNewYear = new Date(2024, 0, 1)

// function createTime() {
// 	const today = new Date()

// 	const diff = nextNewYear - today

// 	const timeLeft = diff / 1000 / 60 / 60 / 24
// 	const days = Math.floor(timeLeft)

// 	const hoursAsDays = timeLeft - days
// 	const hours = Math.floor(hoursAsDays * 24)
// 	const minutesAsHours = timeLeft - days - hours / 24
// 	const minutes = Math.floor((diff / 1000 / 60) % 60)
// 	const seconds = Math.floor((diff / 1000) % 60)
// 	updateTime(days, hours, minutes, seconds)
// }
// // const something = updateTime({ days, hours, minute, seconds })
// // return something
// const main = document.querySelector('.main')

// const daysEl = document.createElement('h1')
// daysEl.classList = 'days'

// const hoursEl = document.createElement('h1')
// hoursEl.classList = 'hours'

// const minutesEl = document.createElement('h1')
// minutesEl.classList = 'minutes'

// const secondsEl = document.createElement('h1')
// secondsEl.classList = 'seconds'

// main.style.display = 'flex'

// main.append(daysEl, hoursEl, minutesEl, secondsEl)

// function updateTime(days, hours, minutes, seconds) {
// 	daysEl.textContent = `${days}:`
// 	hoursEl.textContent = `${hours.toString().padStart(2, '0')}:`
// 	minutesEl.textContent = `${minutes < 10 ? '0' + minutes : minutes}:`
// 	secondsEl.textContent = `${seconds.toString().padStart(2, '0')}`
// }

// setInterval(createTime, 1000)
// ==========
// const main = document.querySelector('.main')
// const daysEl = document.createElement('div')
// daysEl.classList = 'days'
// const hoursEl = document.createElement('div')
// hoursEl.classList = 'hours'
// const minutesEl = document.createElement('div')
// minutesEl.classList = 'minutes'
// const secondsEl = document.createElement('div')
// secondsEl.classList = 'seconds'
// main.style.display = 'flex'
// main.append(daysEl, hoursEl, minutesEl, secondsEl)

// setInterval(()=>{
//     const nextNewYear = new Date(2024, 0, 1)

// 	const today = new Date()

// 	const diff = nextNewYear - today

// 	const timeLeft = diff / 1000 / 60 / 60 / 24
// 	const days = Math.floor(timeLeft)

// 	const hoursAsDays = timeLeft - days
// 	const hours = Math.floor(hoursAsDays * 24)
// 	const minutesAsHours = timeLeft - days - hours / 24
// 	const minutes = Math.floor((diff / 1000 / 60) % 60)
// 	const seconds = Math.floor((diff / 1000) % 60)

//     daysEl.textContent = `${days}:`
// 	hoursEl.textContent = `${hours}:`
// 	minutesEl.textContent = `${minutes}:`
// 	secondsEl.textContent = seconds
// }, 1000)
