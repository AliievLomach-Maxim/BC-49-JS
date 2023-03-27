const API_KEY = '7391ec9459644ca0a76cb25df2a23597'
const BASE_URL = 'https://newsapi.org/v2'

const getNewsByCountry = (country) => {
	fetch(`${BASE_URL}/top-headlines?country=${country}&apiKey=${API_KEY}`, {})
		.then((response) => response.json())
		.then((news) => createNewsList(news.articles))
		.catch((error) => console.log('error :>> ', error))
}

const countries = ['us', 'ua', 'pl']

const main = document.querySelector('.main')
const list = main.querySelector('ul')

const btnGet = document.createElement('button')
btnGet.textContent = 'Get news'
main.prepend(btnGet)

btnGet.addEventListener('click', () => {
	getNewsByCountry(select.value)
})

const select = document.createElement('select')

const options = countries.reduce(
	(acc, el) => acc + `<option value=${el}>${el}</option>`,
	''
)

select.insertAdjacentHTML('afterbegin', options)
main.prepend(select)

fetch(`${BASE_URL}/top-headlines?country=us&pageSize=10&apiKey=${API_KEY}`)
	.then((response) => response.json())
	.then((news) => createNewsList(news.articles))
	.catch((error) => console.log('error :>> ', error))

const createElLi = ({ author, content, description, urlToImage, url }) => `
    <li>
        <p>${author || 'Anonymous'}</p>
        <img src=${urlToImage} width='300'>
        <a href=${url}>Go to current news</a>
        ${content ? `<p>${content}</p>` : ''}
        <p>${description}</p>
    </li>
`

const createNewsList = (array) => {
	list.innerHTML = ''
	list.insertAdjacentHTML(
		'afterbegin',
		array.reduce((acc, element) => acc + createElLi(element), '')
	)
}
