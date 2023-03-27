import { createNewsList } from './app'
import { API_KEY, BASE_URL } from './base-seting'
import { createPagination, pageSize } from './pagination'

export function getNews(event, country = 'us') {
	const page = event.target?.textContent || event

	fetch(
		`${BASE_URL}/top-headlines?country=${country}&pageSize=${pageSize}&page=${page}&apiKey=${API_KEY}`
	)
		.then((response) => response.json())
		.then((news) => {
			createNewsList(news.articles)
			createPagination(news.totalResults)
		})
		.catch((error) => console.log('error :>> ', error))
}
