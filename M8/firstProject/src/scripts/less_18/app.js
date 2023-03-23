// function createCount(counter) {
// 	return new Promise((resolve, reject) => {
// 		let total = 10

// 		for (let i = 0; i < counter; i++) {
// 			total += i
// 		}
// 		if (total % 2 === 0) {
// 			resolve(`${total} ${counter}`) // return Promise<fulfilled>(data)
// 		} else reject(`Error!!!!! ${counter}`) // return Promise<rejected>(data)
// 	})
// }

// const result = () => Promise.resolve(10)

// setTimeout(() => {
// 	console.log('setTimeout :>> ')
// }, 0)

// console.log('result :>> ', result())

// Promise.all([createCount(100), createCount(1001)])
// 	.then((data) => {
// 		console.log('data :>> ', data)
// 	})
// 	.catch((er) => {
// 		console.log('er result :>> ', er)
// 	})

// const promiseCreateCount1 = createCount(1000000000)
// const promiseCreateCount2 = createCount(100)

// Promise.race([promiseCreateCount2, promiseCreateCount1])
// 	.then((data) => {
// 		console.log('data :>> ', data)
// 	})
// 	.catch((er) => {
// 		console.log('er result :>> ', er)
// 	})

// createCount(100)
// 	.then((data) => {
// 		console.log('data :>> ', data)
// 	})
// 	.catch((er) => {
// 		console.log('er result :>> ', er)
// 	})
