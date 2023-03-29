import { fetchAPI } from './fetch'

export const ref = {
	formCreate: document.querySelector('.form-create'),
	list: document.querySelector('ul'),
	purePage: 10,
}

fetchAPI({ method: 'GET' }).then(addDOM)

function elProduct({ title, price, description, images, id }) {
	return `
    <li key=${id}>
        <p>title: ${title}</p>
        <p>price: ${price}$</p>
        <p>description: ${description}</p>
        <img src=${images[0]}>
        <button>Delete product</button>
    </li>`
}

function createProductsList(products) {
	return products.reduce((acc, product) => {
		return acc + elProduct(product)
	}, '')
}

function addDOM(products) {
	ref.list.insertAdjacentHTML('afterbegin', createProductsList(products))
}

ref.formCreate.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
	e.preventDefault()
	const {
		target: { elements },
	} = e
	const { title, price, description } = elements
	const data = {
		title: title.value,
		price: price.value,
		description: description.value,
		categoryId: 1,
		images: [
			'https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_1280.jpg',
		],
	}
	createProduct(data)
	e.target.reset()
}

async function createProduct(data) {
	ref.list.insertAdjacentHTML(
		'afterbegin',
		elProduct(await fetchAPI({ method: 'POST', data }))
	)
}

ref.list.addEventListener('click', handleDelete)

function handleDelete({ target }) {
	if (target.nodeName === 'BUTTON') {
		deleteProduct(target.parentElement.getAttribute('key'))
	}
}

async function deleteProduct(id) {
	const isDelete = await fetchAPI({
		method: 'DELETE',
		id,
	})
	if (isDelete) {
		const children = Array.from(ref.list.children)
		ref.list.innerHTML = ''
		ref.list.append(
			...children.filter((li) => {
				return li.getAttribute('key') !== id
			})
		)
	}
}
