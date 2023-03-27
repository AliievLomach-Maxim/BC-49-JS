import { createNewsList } from './app'
import { createPagination, pageSize } from './pagination'

export function getProducts(offset) {
	fetch(
		`https://api.escuelajs.co/api/v3/products?offset=${offset}&limit=${pageSize}`
	)
		.then((response) => {
			if (response.ok) return response.json()
			else {
				return Promise.reject(response.status)
			}
		})
		.then((products) => {
			console.log('object')
			createNewsList(products)
			createPagination()
		})
		.catch((error) => console.log('error :>> ', error))
}
