import { fetchAPI } from './fetch'

const ref = {
	btnGet: document.querySelector('.get-post'),
	formCreate: document.querySelector('.form-create'),
	formUpdate: document.querySelector('.form-update'),
	formDelete: document.querySelector('.form-delete'),
}

// GET

ref.btnGet.addEventListener('click', () => fetchAPI({ method: 'GET' }))

// POST

ref.formCreate.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
	e.preventDefault()
	const titleValue = e.target.elements.title.value
	const bodyValue = e.target.elements.body.value
	const data = {
		title: titleValue,
		body: bodyValue,
		userId: 1,
	}
	fetchAPI({ method: 'POST', data })
}

// // PUT && PATCH

ref.formUpdate.addEventListener('submit', handleSubmitUpdate)

function handleSubmitUpdate(e) {
	e.preventDefault()
	const titleValue = e.target.elements.title.value
	const data = {
		title: titleValue,
	}
	fetchAPI({ method: 'PATCH', data, id: 1 })
}
// // DELETE

ref.formDelete.addEventListener('submit', (e) => {
	e.preventDefault()
	const { value: id } = e.target.elements['id-delete']
	fetchAPI({ method: 'DELETE', id })
})
