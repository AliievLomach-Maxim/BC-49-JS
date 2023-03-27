import { getProducts } from './getProducts'
import { getCurrentPage } from './app'

export let pageSize = 5

const paginationList = document.querySelector('.pagination')

export function createPagination() {
	paginationList.innerHTML = ''
	const pagesCount = Math.ceil(198 / pageSize)
	const arrLi = []
	for (let i = 0; i < pagesCount; i++) {
		const elList = document.createElement('li')
		elList.textContent = i + 1
		elList.addEventListener('click', () => {
			getProducts(getCurrentPage(pageSize * i))
		})
		arrLi.push(elList)
	}
	paginationList.append(...arrLi)
}
