import { fetchAPI } from './fetch'
const url = 'https://jsonplaceholder.typicode.com/posts'

const ref = {
	btnGet: document.querySelector('.get-post'),
	formCreate: document.querySelector('.form-create'),
	formUpdate: document.querySelector('.form-update'),
	formDelete: document.querySelector('.form-delete'),
}

// GET

ref.btnGet.addEventListener('click', handleClick)

async function handleClick() {
	const result = await getPosts()
	console.log('result :>> ', result)
}
// POST

ref.formCreate.addEventListener('submit', createPost)

// // PUT && PATCH

ref.formUpdate.addEventListener('submit', updatePost)

// // DELETE

ref.formDelete.addEventListener('submit', deletePost)

// async

// function getPosts() {
// 	fetch(url)
// 		.then((res) => {
// 			if (res.status.ok) return res.json()
// 			return Promise.reject(res.status)
// 		})
// 		.then(console.log)
// 		.catch(() => console.log('Erorr :>> ', error))
// 		.finally(() => console.log('End'))
// }

async function getPosts() {
	try {
		const response = await fetch(url)
		if (response.ok) {
			return await response.json()
		}
		return await Promise.reject(response.status)
	} catch (error) {
		console.log('Erorr :>> ', error)
	} finally {
		console.log('End')
	}
}

async function createPost(e) {
	try {
		e.preventDefault()
		const titleValue = e.target.elements.title.value
		const bodyValue = e.target.elements.body.value
		const data = {
			title: titleValue,
			body: bodyValue,
			userId: 1,
		}
		const response = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
		const post = await response.json()
		console.log(post)
	} catch (error) {
		console.log(error)
	}
}

async function updatePost(e) {
	try {
		e.preventDefault()
		const titleValue = e.target.elements.title.value
		const data = {
			title: titleValue,
		}
		const res = await fetch(`${url}/1`, {
			method: 'PATCH',
			body: JSON.stringify(data),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
		const post = await res.json()
		console.log(post)
	} catch (error) {
		console.log(error)
	}
}

async function deletePost(e) {
	try {
		e.preventDefault()
		const { value: id } = e.target.elements['id-delete']

		const res = await fetch(`${url}/${id}`, {
			method: 'DELETE',
		})
		const status = res.ok
			? 'Delete successfully'
			: await Promise.reject(res.status)

		console.log(status)
	} catch (error) {
		console.log(error)
	}
}
