import { getProducts } from './getProducts'

export let getCurrentPage = (el = 0) => 0 + el

const main = document.querySelector('.main')
const list = main.querySelector('ul')

const btnGet = document.createElement('button')
btnGet.textContent = 'Get products'
main.prepend(btnGet)

btnGet.addEventListener('click', () => {
	getProducts(getCurrentPage())
	// getProducts()
})

const createElLi = ({ title, description, category, images }) => `
    <li>
        <p>${title || 'Anonymous'}</p>
        <img src=${images[0]} width='300'>
        ${description ? `<p>${description}</p>` : ''}
        <p>${category.name}</p>
    </li>
`

export function createNewsList(array) {
	list.innerHTML = ''
	list.insertAdjacentHTML(
		'afterbegin',
		array.reduce((acc, element) => acc + createElLi(element), '')
	)
}
