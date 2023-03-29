import { ref } from './app'
import { isLoading } from './loader'

const URL = 'https://api.escuelajs.co/api/v1/products'

export async function fetchAPI({ method, data, id }) {
	try {
		isLoading(true)
		const url = id ? `${URL}/${id}` : URL
		const response = await fetch(url, {
			method,
			body: data && JSON.stringify(data),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})

		if (response.ok) {
			notifyOperation(response.status, method)
			return await response.json()
		}
		return await Promise.reject(response.status)
	} catch (error) {
		notifyOperation(error, method)
	} finally {
		isLoading(false)
	}
}

function notifyOperation(status, method) {
	if (status === 404 || status === 401 || status === 409 || status === 400)
		alert('Такого обʼєкту не існує')
	else if (status === 500) alert('Server not found')
	else if (status === 200 && method === 'DELETE') alert('Delete successfully')
	else if (status === 200 && method == 'PATCH') alert('Update successfully')
	else if (status === 200 && method == 'GET') {
	} else if (status === 201) alert('Create successfully')
	else alert('Some error')
}

// function getPosts() {
// 	fetch(url)
// 		.then((res) => res.json())
// 		.then(console.log)
// }

// function createPost(e) {
// 	e.preventDefault()
// 	const titleValue = e.target.elements.title.value
// 	const bodyValue = e.target.elements.body.value
// 	const data = {
// 		title: titleValue,
// 		body: bodyValue,
// 		userId: 1,
// 	}
// 	fetch(url, {
// 		method: 'POST',
// 		body: JSON.stringify(data),
// 		headers: {
// 			'Content-type': 'application/json; charset=UTF-8',
// 		},
// 	})
// 		.then((res) => res.json())
// 		.then(console.log)
// }

// function updatePost(e) {
// 	e.preventDefault()
// 	const titleValue = e.target.elements.title.value
// 	const data = {
// 		title: titleValue,
// 	}
// 	fetch(`${url}/1`, {
// 		method: 'PATCH',
// 		body: JSON.stringify(data),
// 		headers: {
// 			'Content-type': 'application/json; charset=UTF-8',
// 		},
// 	})
// 		.then((res) => res.json())
// 		.then(console.log)
// }

// function deletePost(e) {
// 	e.preventDefault()
// 	const { value: id } = e.target.elements['id-delete']

// 	fetch(`${url}/${id}`, {
// 		method: 'DELETE',
// 	})
// 		.then(console.log)
// 		// .then((res) =>
// 		// 	res.ok ? 'Delete successfully' : Promise.reject(res.status)
// 		// )
// 		// .then((res) => 'Delete successfully')
// 		// .then(console.log)
// 		.catch((error) => console.log(error))
// }
