import { getNews } from './fetch'

export let pageSize = 5
const paginationList = document.querySelector('.pagination')

export function createPagination(totalResults) {
	paginationList.innerHTML = ''
	const pagesCount = Math.ceil(totalResults / pageSize)
	const arrLi = []
	for (let i = 1; i <= pagesCount; i++) {
		const elList = document.createElement('li')
		elList.textContent = i
		elList.addEventListener('click', getNews)
		arrLi.push(elList)
	}

	paginationList.append(...arrLi)
}
